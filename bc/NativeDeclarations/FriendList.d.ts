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
  relationType: FriendListRelationType;
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

type FriendRawBeep = {
  beepIndex?: number;
  caption: string;
  hasMessage?: boolean;
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
