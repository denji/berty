package node

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"

	"berty.tech/core/api/node"
	"berty.tech/core/api/p2p"
	"berty.tech/core/entity"
	"berty.tech/core/pkg/deviceinfo"
	"berty.tech/core/pkg/errorcodes"
	"berty.tech/core/push"
	"github.com/pkg/errors"
	"go.uber.org/zap"
)

func WithPushManager(pushManager *push.Manager) NewNodeOption {
	return func(n *Node) {
		n.pushManager = pushManager
	}
}

func (n *Node) UsePushTokenSubscriber(ctx context.Context) {
	var err error

	packageID := deviceinfo.PackageID()

	go func() {
		tokenSubscription := n.notificationDriver.SubscribeToken()

		for {
			select {
			case token := <-tokenSubscription:
				{
					logger().Debug("node push token subscriber receive token",
						zap.String("type", token.Type.String()),
						zap.String("hash", token.Hash()),
					)
					currentToken := &entity.DevicePushConfig{}

					if err = n.sql(ctx).First(&currentToken, &entity.DevicePushConfig{PushType: token.Type}).Error; err != nil {
						logger().Info("unable to get push token", zap.Error(err))
					}

					pushID := &push.PushNativeIdentifier{
						PackageID:   packageID,
						DeviceToken: token.Hash(),
					}

					pushIDBytes, err := pushID.Marshal()
					if err != nil {
						logger().Error("unable to serialize push id", zap.Error(err))
						continue
					}

					if len(token.Value) > 0 && bytes.Compare(currentToken.PushID, pushIDBytes) == 0 {
						continue
					}

					if len(currentToken.PushID) > 0 {
						_, err = n.DevicePushConfigRemove(ctx, currentToken)

						if err != nil {
							logger().Error("unable to delete existing push token", zap.Error(err))
						}
					}

					if len(token.Value) > 0 {
						_, err = n.DevicePushConfigCreate(ctx, &node.DevicePushConfigCreateInput{
							RelayPubkey: "",
							PushID:      pushIDBytes,
							PushType:    token.Type,
						})

						if err != nil {
							logger().Error("unable to create push token", zap.Error(err))
						}
					}
				}
			case <-n.shutdown:
				logger().Debug("node shutdown push token subscriber")
				n.notificationDriver.UnsubscribeToken(tokenSubscription)
				return
			}
		}
	}()
}

func (n *Node) UsePushNotificationSubscriber(ctx context.Context) {
	go func() {
		notificationSubscription := n.notificationDriver.Subscribe()

		for {
			select {
			case notification := <-notificationSubscription:
				{
					logger().Debug("node receive push notification")

					payload := push.Payload{}
					if err := json.Unmarshal([]byte(notification.Body), &payload); err != nil {
						logger().Error(errorcodes.ErrNodePushNotifSub.Wrap(err).Error())
						continue
					}

					b64Envelope := payload.BertyEnvelope
					if b64Envelope == "" {
						logger().Error(errorcodes.ErrNodePushNotifSub.Wrap(errors.New("berty-envelope is missing")).Error())
						continue
					}

					bytesEnvelope, err := base64.StdEncoding.DecodeString(string(b64Envelope))
					if err != nil {
						logger().Error(errorcodes.ErrNodePushNotifSub.Wrap(err).Error())
						continue
					}

					envelope := &p2p.Envelope{}
					if err := envelope.Unmarshal(bytesEnvelope); err != nil {
						logger().Error(errorcodes.ErrNodePushNotifSub.Wrap(err).Error())
						continue
					}

					if err := n.handleEnvelope(ctx, envelope); err != nil {
						logger().Error(errorcodes.ErrNodePushNotifSub.Wrap(err).Error())
						continue
					}
				}
			case <-n.shutdown:
				logger().Debug("node shutdown push notification subscriber")
				n.notificationDriver.Unsubscribe(notificationSubscription)
				return
			}
		}
	}()
}