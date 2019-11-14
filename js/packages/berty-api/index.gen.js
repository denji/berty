import jsonPb from './index.pb.js'

export const berty = {
	chat: {
		Account: jsonPb.lookup('.berty.chat.Account'),
		EventSubscribeRequest: jsonPb.lookup('.berty.chat.EventSubscribeRequest'),
		EventSubscribeReply: jsonPb.lookup('.berty.chat.EventSubscribeReply'),
		ConversationListRequest: jsonPb.lookup('.berty.chat.ConversationListRequest'),
		ConversationListReply: jsonPb.lookup('.berty.chat.ConversationListReply'),
		ConversationGetRequest: jsonPb.lookup('.berty.chat.ConversationGetRequest'),
		ConversationGetReply: jsonPb.lookup('.berty.chat.ConversationGetReply'),
		ConversationCreateRequest: jsonPb.lookup('.berty.chat.ConversationCreateRequest'),
		ConversationCreateReply: jsonPb.lookup('.berty.chat.ConversationCreateReply'),
		ConversationLeaveRequest: jsonPb.lookup('.berty.chat.ConversationLeaveRequest'),
		ConversationLeaveReply: jsonPb.lookup('.berty.chat.ConversationLeaveReply'),
		ConversationEraseRequest: jsonPb.lookup('.berty.chat.ConversationEraseRequest'),
		ConversationEraseReply: jsonPb.lookup('.berty.chat.ConversationEraseReply'),
		ConversationSetSeenPositionRequest: jsonPb.lookup(
			'.berty.chat.ConversationSetSeenPositionRequest',
		),
		ConversationSetSeenPositionReply: jsonPb.lookup('.berty.chat.ConversationSetSeenPositionReply'),
		ConversationMessageListRequest: jsonPb.lookup('.berty.chat.ConversationMessageListRequest'),
		ConversationMessageListReply: jsonPb.lookup('.berty.chat.ConversationMessageListReply'),
		ConversationMessageSendRequest: jsonPb.lookup('.berty.chat.ConversationMessageSendRequest'),
		ConversationMessageSendReply: jsonPb.lookup('.berty.chat.ConversationMessageSendReply'),
		ConversationMessageEditRequest: jsonPb.lookup('.berty.chat.ConversationMessageEditRequest'),
		ConversationMessageEditReply: jsonPb.lookup('.berty.chat.ConversationMessageEditReply'),
		ConversationMessageHideRequest: jsonPb.lookup('.berty.chat.ConversationMessageHideRequest'),
		ConversationMessageHideReply: jsonPb.lookup('.berty.chat.ConversationMessageHideReply'),
		ConversationUpdateSettingsRequest: jsonPb.lookup(
			'.berty.chat.ConversationUpdateSettingsRequest',
		),
		ConversationUpdateSettingsReply: jsonPb.lookup('.berty.chat.ConversationUpdateSettingsReply'),
		ConversationInvitationAcceptRequest: jsonPb.lookup(
			'.berty.chat.ConversationInvitationAcceptRequest',
		),
		ConversationInvitationAcceptReply: jsonPb.lookup(
			'.berty.chat.ConversationInvitationAcceptReply',
		),
		ConversationInvitationCreateRequest: jsonPb.lookup(
			'.berty.chat.ConversationInvitationCreateRequest',
		),
		ConversationInvitationCreateReply: jsonPb.lookup(
			'.berty.chat.ConversationInvitationCreateReply',
		),
		ConversationInvitationDiscardRequest: jsonPb.lookup(
			'.berty.chat.ConversationInvitationDiscardRequest',
		),
		ConversationInvitationDiscardReply: jsonPb.lookup(
			'.berty.chat.ConversationInvitationDiscardReply',
		),
		ContactListRequest: jsonPb.lookup('.berty.chat.ContactListRequest'),
		ContactListReply: jsonPb.lookup('.berty.chat.ContactListReply'),
		ContactGetRequest: jsonPb.lookup('.berty.chat.ContactGetRequest'),
		ContactGetReply: jsonPb.lookup('.berty.chat.ContactGetReply'),
		ContactUpdateRequest: jsonPb.lookup('.berty.chat.ContactUpdateRequest'),
		ContactUpdateReply: jsonPb.lookup('.berty.chat.ContactUpdateReply'),
		ContactRemoveRequest: jsonPb.lookup('.berty.chat.ContactRemoveRequest'),
		ContactRemoveReply: jsonPb.lookup('.berty.chat.ContactRemoveReply'),
		ContactRequestCreateRequest: jsonPb.lookup('.berty.chat.ContactRequestCreateRequest'),
		ContactRequestCreateReply: jsonPb.lookup('.berty.chat.ContactRequestCreateReply'),
		ContactRequestAcceptRequest: jsonPb.lookup('.berty.chat.ContactRequestAcceptRequest'),
		ContactRequestAcceptReply: jsonPb.lookup('.berty.chat.ContactRequestAcceptReply'),
		ContactRequestDiscardRequest: jsonPb.lookup('.berty.chat.ContactRequestDiscardRequest'),
		ContactRequestDiscardReply: jsonPb.lookup('.berty.chat.ContactRequestDiscardReply'),
		SearchRequest: jsonPb.lookup('.berty.chat.SearchRequest'),
		SearchReply: jsonPb.lookup('.berty.chat.SearchReply'),
		AccountSettingsGetRequest: jsonPb.lookup('.berty.chat.AccountSettingsGetRequest'),
		AccountSettingsGetReply: jsonPb.lookup('.berty.chat.AccountSettingsGetReply'),
		AccountSettingsUpdateRequest: jsonPb.lookup('.berty.chat.AccountSettingsUpdateRequest'),
		AccountSettingsUpdateReply: jsonPb.lookup('.berty.chat.AccountSettingsUpdateReply'),
		AccountPairingInvitationCreateRequest: jsonPb.lookup(
			'.berty.chat.AccountPairingInvitationCreateRequest',
		),
		AccountPairingInvitationCreateReply: jsonPb.lookup(
			'.berty.chat.AccountPairingInvitationCreateReply',
		),
		AccountRenewIncomingContactRequestLinkRequest: jsonPb.lookup(
			'.berty.chat.AccountRenewIncomingContactRequestLinkRequest',
		),
		AccountRenewIncomingContactRequestLinkReply: jsonPb.lookup(
			'.berty.chat.AccountRenewIncomingContactRequestLinkReply',
		),
		DevEventSubscribeRequest: jsonPb.lookup('.berty.chat.DevEventSubscribeRequest'),
		DevEventSubscribeReply: jsonPb.lookup('.berty.chat.DevEventSubscribeReply'),
	},
	chatmodel: {
		Account: jsonPb.lookup('.berty.chatmodel.Account'),
		Conversation: jsonPb.lookup('.berty.chatmodel.Conversation'),
		Member: jsonPb.lookup('.berty.chatmodel.Member'),
		Message: jsonPb.lookup('.berty.chatmodel.Message'),
		Attachment: jsonPb.lookup('.berty.chatmodel.Attachment'),
		Reaction: jsonPb.lookup('.berty.chatmodel.Reaction'),
		Contact: jsonPb.lookup('.berty.chatmodel.Contact'),
		Device: jsonPb.lookup('.berty.chatmodel.Device'),
	},
}
export const google = {
	api: {
		http: jsonPb.lookup('.google.api.http'),
		Http: jsonPb.lookup('.google.api.Http'),
		HttpRule: jsonPb.lookup('.google.api.HttpRule'),
		CustomHttpPattern: jsonPb.lookup('.google.api.CustomHttpPattern'),
	},
	protobuf: {
		FileDescriptorSet: jsonPb.lookup('.google.protobuf.FileDescriptorSet'),
		FileDescriptorProto: jsonPb.lookup('.google.protobuf.FileDescriptorProto'),
		DescriptorProto: jsonPb.lookup('.google.protobuf.DescriptorProto'),
		ExtensionRangeOptions: jsonPb.lookup('.google.protobuf.ExtensionRangeOptions'),
		FieldDescriptorProto: jsonPb.lookup('.google.protobuf.FieldDescriptorProto'),
		OneofDescriptorProto: jsonPb.lookup('.google.protobuf.OneofDescriptorProto'),
		EnumDescriptorProto: jsonPb.lookup('.google.protobuf.EnumDescriptorProto'),
		EnumValueDescriptorProto: jsonPb.lookup('.google.protobuf.EnumValueDescriptorProto'),
		ServiceDescriptorProto: jsonPb.lookup('.google.protobuf.ServiceDescriptorProto'),
		MethodDescriptorProto: jsonPb.lookup('.google.protobuf.MethodDescriptorProto'),
		FileOptions: jsonPb.lookup('.google.protobuf.FileOptions'),
		MessageOptions: jsonPb.lookup('.google.protobuf.MessageOptions'),
		FieldOptions: jsonPb.lookup('.google.protobuf.FieldOptions'),
		OneofOptions: jsonPb.lookup('.google.protobuf.OneofOptions'),
		EnumOptions: jsonPb.lookup('.google.protobuf.EnumOptions'),
		EnumValueOptions: jsonPb.lookup('.google.protobuf.EnumValueOptions'),
		ServiceOptions: jsonPb.lookup('.google.protobuf.ServiceOptions'),
		MethodOptions: jsonPb.lookup('.google.protobuf.MethodOptions'),
		UninterpretedOption: jsonPb.lookup('.google.protobuf.UninterpretedOption'),
		SourceCodeInfo: jsonPb.lookup('.google.protobuf.SourceCodeInfo'),
		GeneratedCodeInfo: jsonPb.lookup('.google.protobuf.GeneratedCodeInfo'),
		Timestamp: jsonPb.lookup('.google.protobuf.Timestamp'),
	},
}
export const gogoproto = {
	goprotoEnumPrefix: jsonPb.lookup('.gogoproto.goprotoEnumPrefix'),
	goprotoEnumStringer: jsonPb.lookup('.gogoproto.goprotoEnumStringer'),
	enumStringer: jsonPb.lookup('.gogoproto.enumStringer'),
	enumCustomname: jsonPb.lookup('.gogoproto.enumCustomname'),
	enumdecl: jsonPb.lookup('.gogoproto.enumdecl'),
	enumvalueCustomname: jsonPb.lookup('.gogoproto.enumvalueCustomname'),
	goprotoGettersAll: jsonPb.lookup('.gogoproto.goprotoGettersAll'),
	goprotoEnumPrefixAll: jsonPb.lookup('.gogoproto.goprotoEnumPrefixAll'),
	goprotoStringerAll: jsonPb.lookup('.gogoproto.goprotoStringerAll'),
	verboseEqualAll: jsonPb.lookup('.gogoproto.verboseEqualAll'),
	faceAll: jsonPb.lookup('.gogoproto.faceAll'),
	gostringAll: jsonPb.lookup('.gogoproto.gostringAll'),
	populateAll: jsonPb.lookup('.gogoproto.populateAll'),
	stringerAll: jsonPb.lookup('.gogoproto.stringerAll'),
	onlyoneAll: jsonPb.lookup('.gogoproto.onlyoneAll'),
	equalAll: jsonPb.lookup('.gogoproto.equalAll'),
	descriptionAll: jsonPb.lookup('.gogoproto.descriptionAll'),
	testgenAll: jsonPb.lookup('.gogoproto.testgenAll'),
	benchgenAll: jsonPb.lookup('.gogoproto.benchgenAll'),
	marshalerAll: jsonPb.lookup('.gogoproto.marshalerAll'),
	unmarshalerAll: jsonPb.lookup('.gogoproto.unmarshalerAll'),
	stableMarshalerAll: jsonPb.lookup('.gogoproto.stableMarshalerAll'),
	sizerAll: jsonPb.lookup('.gogoproto.sizerAll'),
	goprotoEnumStringerAll: jsonPb.lookup('.gogoproto.goprotoEnumStringerAll'),
	enumStringerAll: jsonPb.lookup('.gogoproto.enumStringerAll'),
	unsafeMarshalerAll: jsonPb.lookup('.gogoproto.unsafeMarshalerAll'),
	unsafeUnmarshalerAll: jsonPb.lookup('.gogoproto.unsafeUnmarshalerAll'),
	goprotoExtensionsMapAll: jsonPb.lookup('.gogoproto.goprotoExtensionsMapAll'),
	goprotoUnrecognizedAll: jsonPb.lookup('.gogoproto.goprotoUnrecognizedAll'),
	gogoprotoImport: jsonPb.lookup('.gogoproto.gogoprotoImport'),
	protosizerAll: jsonPb.lookup('.gogoproto.protosizerAll'),
	compareAll: jsonPb.lookup('.gogoproto.compareAll'),
	typedeclAll: jsonPb.lookup('.gogoproto.typedeclAll'),
	enumdeclAll: jsonPb.lookup('.gogoproto.enumdeclAll'),
	goprotoRegistration: jsonPb.lookup('.gogoproto.goprotoRegistration'),
	messagenameAll: jsonPb.lookup('.gogoproto.messagenameAll'),
	goprotoSizecacheAll: jsonPb.lookup('.gogoproto.goprotoSizecacheAll'),
	goprotoUnkeyedAll: jsonPb.lookup('.gogoproto.goprotoUnkeyedAll'),
	goprotoGetters: jsonPb.lookup('.gogoproto.goprotoGetters'),
	goprotoStringer: jsonPb.lookup('.gogoproto.goprotoStringer'),
	verboseEqual: jsonPb.lookup('.gogoproto.verboseEqual'),
	face: jsonPb.lookup('.gogoproto.face'),
	gostring: jsonPb.lookup('.gogoproto.gostring'),
	populate: jsonPb.lookup('.gogoproto.populate'),
	stringer: jsonPb.lookup('.gogoproto.stringer'),
	onlyone: jsonPb.lookup('.gogoproto.onlyone'),
	equal: jsonPb.lookup('.gogoproto.equal'),
	description: jsonPb.lookup('.gogoproto.description'),
	testgen: jsonPb.lookup('.gogoproto.testgen'),
	benchgen: jsonPb.lookup('.gogoproto.benchgen'),
	marshaler: jsonPb.lookup('.gogoproto.marshaler'),
	unmarshaler: jsonPb.lookup('.gogoproto.unmarshaler'),
	stableMarshaler: jsonPb.lookup('.gogoproto.stableMarshaler'),
	sizer: jsonPb.lookup('.gogoproto.sizer'),
	unsafeMarshaler: jsonPb.lookup('.gogoproto.unsafeMarshaler'),
	unsafeUnmarshaler: jsonPb.lookup('.gogoproto.unsafeUnmarshaler'),
	goprotoExtensionsMap: jsonPb.lookup('.gogoproto.goprotoExtensionsMap'),
	goprotoUnrecognized: jsonPb.lookup('.gogoproto.goprotoUnrecognized'),
	protosizer: jsonPb.lookup('.gogoproto.protosizer'),
	compare: jsonPb.lookup('.gogoproto.compare'),
	typedecl: jsonPb.lookup('.gogoproto.typedecl'),
	messagename: jsonPb.lookup('.gogoproto.messagename'),
	goprotoSizecache: jsonPb.lookup('.gogoproto.goprotoSizecache'),
	goprotoUnkeyed: jsonPb.lookup('.gogoproto.goprotoUnkeyed'),
	nullable: jsonPb.lookup('.gogoproto.nullable'),
	embed: jsonPb.lookup('.gogoproto.embed'),
	customtype: jsonPb.lookup('.gogoproto.customtype'),
	customname: jsonPb.lookup('.gogoproto.customname'),
	jsontag: jsonPb.lookup('.gogoproto.jsontag'),
	moretags: jsonPb.lookup('.gogoproto.moretags'),
	casttype: jsonPb.lookup('.gogoproto.casttype'),
	castkey: jsonPb.lookup('.gogoproto.castkey'),
	castvalue: jsonPb.lookup('.gogoproto.castvalue'),
	stdtime: jsonPb.lookup('.gogoproto.stdtime'),
	stdduration: jsonPb.lookup('.gogoproto.stdduration'),
	wktpointer: jsonPb.lookup('.gogoproto.wktpointer'),
}
