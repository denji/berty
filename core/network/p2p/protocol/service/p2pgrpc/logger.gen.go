// Code generated by github.com/berty/berty/core/.scripts/generate-logger.sh

package p2pgrpc

import "go.uber.org/zap"

func logger() *zap.Logger {
	return zap.L().Named("core.network.p2p.protocol.service.p2pgrpc")
}
