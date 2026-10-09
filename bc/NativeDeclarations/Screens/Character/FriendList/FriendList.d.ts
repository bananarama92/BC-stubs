type FriendListModes = FriendListMode[];
type FriendListMode = "OnlineFriends" | "Beeps" | "AllFriends";
type FriendListSortingMode = 'None' | 'MemberName' | 'MemberNickname' | 'MemberNumber' | 'ChatRoomName' | 'RelationType' | 'ChatRoomType' | 'ChatRoomMemberCount';
type FriendListSortingDirection = 'Asc' | 'Desc';

type FriendListReturn<T extends ModuleType> = { Screen: ModuleScreens[T], Module: T, IsInChatRoom?: boolean, hasScrolledChat?: boolean };

type FriendListRelationType = "Friend" | "Pending" | "Owner" | "Lover" | "Submissive";

type FriendRawData = {
  memberNumber?: number; /* undefined for NPCs */
  memberName: string;
  memberNickname?: string;
  chatRoom?: FriendRawRoom;
  beep?: FriendRawBeep;
  relationType?: FriendListRelationType;
  canDelete: boolean;
	canAdd: boolean;
	isOnline: boolean;
	canBeep: boolean;
  pending: boolean;
}

type FriendRawRoom = {
  name?: string;
  caption: string;
  canSearchRoom: boolean;
  types: (null | FriendListIcon)[];
  ChatRoomLimit?: number;
  ChatRoomMemberCount?: number;
};

interface FriendListIcon {
  /** The {@link HTMLImageElement.src} of the icon */
  src: string;
  /** The `Character/FriendList` {@link TextGet} key of the icon's tooltip */
  tooltipKey: string;
  /** A string to-be used for sorting the icon-containing column cells */
  sortKey: string;
}

interface FriendListActionContext {
	memberNumber: number;
	memberName: string;
	canDelete?: boolean;
	canAdd?: boolean;
	canBeep?: boolean;
	isOnline?: boolean;
	pending?: boolean;
	relationType?: FriendListRelationType;
}

interface FriendListActionDefinition {
	id: string;
	getLabel: (context: FriendListActionContext) => string;
	onClick: (context: FriendListActionContext) => void;
	getIcon?: (context: FriendListActionContext) => string;
	isVisible?: (context: FriendListActionContext) => boolean;
	isEnabled?: (context: FriendListActionContext) => boolean;
}

interface IFriendListBeepLogMessage {
	MemberNumber?: number; /* undefined for NPCs */
	MemberName: string;
	ChatRoomName?: string;
	Private: boolean;
	ChatRoomSpace?: ServerChatRoomSpace;
	Sent: boolean;
	Time: Date;
	Message?: string;
	Read: boolean;
	/** Stable id for reply/reaction targeting (from metadata or assigned locally). */
	Id?: string;
}

type FriendRawBeep = {
  beepIndex?: number;
  chatKey?: string;
  caption: string;
  hasMessage?: boolean;
  unreadCount?: number;
};

interface FriendListBeepChat {
	chatKey: string;
	memberNumber: number | undefined;
	memberName: string;
	messageIndices: number[];
	lastIndex: number;
	lastTime: Date;
	hasMessage: boolean;
}

type BeepMessageType = "Message" | "Emote" | "Action" | "Reply" | "Reaction";

type BeepMessageReplyTo = {
	id: string;
	senderName: string;
	snippet: string;
};

type BeepMessageMetadata = {
	messageType?: BeepMessageType;
	messageColor?: string;
	messageId?: string;
	replyTo?: BeepMessageReplyTo;
	reactionTo?: string;
	reactionEmoji?: string;
	reactionRemove?: boolean;
	[key: string]: any;
};

interface FriendListBeepActionContext {
	beepIndex: number;
	beep: IFriendListBeepLogMessage;
	senderName: string;
	isOwn: boolean;
}

interface FriendListBeepActionDefinition {
	id: string;
	getLabel: (context: FriendListBeepActionContext) => string;
	onClick: (context: FriendListBeepActionContext, ev: PointerEvent) => void;
	getIcon?: (context: FriendListBeepActionContext) => string;
	isVisible?: (context: FriendListBeepActionContext) => boolean;
	isEnabled?: (context: FriendListBeepActionContext) => boolean;
}
