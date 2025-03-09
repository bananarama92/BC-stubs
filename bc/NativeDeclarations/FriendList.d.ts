type FriendListModes = FriendListMode[];
type FriendListMode = "OnlineFriends" | "Beeps" | "AllFriends";
type FriendListSortingMode = 'None' | 'MemberName' | 'MemberNickname' | 'MemberNumber' | 'ChatRoomName' | 'RelationType';
type FriendListSortingDirection = 'Asc' | 'Desc';

type FriendListReturn<T extends ModuleType> = { Screen: ModuleScreens[T], Module: T, IsInChatRoom?: boolean, hasScrolledChat?: boolean };

type FriendRawData = {
  memberNumber?: number; /* undefined for NPCs */
  memberName: string;
  memberNickname?: string;
  chatRoom?: FriendRawRoom;
  beep?: FriendRawBeep;
  relationType?: string;
  canDelete?: boolean;
}

type FriendRawRoom = {
  name?: string;
  caption: string;
  canSearchRoom: boolean;
};

type FriendRawBeep = {
  beepIndex?: number;
  caption: string;
  hasMessage?: boolean;
  canBeep?: boolean;
};
