declare function FriendListLoad(): Promise<void>;
declare function FriendListResize(load: boolean): void;
declare function FriendListRun(time: number): void;
declare function FriendListDraw(): void;
declare function FriendListClick(event: PointerEvent): void;
declare function FriendListKeyDown(event: KeyboardEvent): boolean;
declare function FriendListUnload(): void;
/**
 * @satisfies {ScreenExitHandler}
 * @return {SafePromise<void>}
 */
declare function FriendListExit(): SafePromise<void>;
/**
 * Ensures {@link IFriendListBeepLogMessage.Id} is set (from metadata or a new id).
 * @param {IFriendListBeepLogMessage} beep
 * @returns {string}
 */
declare function FriendListBeepEnsureMessageId(beep: IFriendListBeepLogMessage): string;
/**
 * Generates a chat key from a beep message
 * @param {IFriendListBeepLogMessage} beep
 * @returns {string}
 */
declare function FriendListBeepGetChatKeyFromBeep(beep: IFriendListBeepLogMessage): string;
/**
 * Appends metadata to a beep message
 * @param {string} message
 * @param {BeepMessageMetadata} metadata
 * @returns {string}
 */
declare function BeepMessageAppendMetadata(message: string, metadata: BeepMessageMetadata): string;
/**
 * Parses a beep message with appended metadata
 * @param {string} rawMessage
 * @returns {{ text: string, metadata: BeepMessageMetadata | null }}
 */
declare function FriendListBeepParseMessage(rawMessage: string): {
    text: string;
    metadata: BeepMessageMetadata | null;
};
/**
 * Fits a beep payload into {@link FriendListBeepMessageLimit}.
 * A valid metadata trailer is kept intact; only the visible text is shortened.
 * @param {string} message
 * @returns {string}
 */
declare function FriendListBeepLimitMessageText(message: string): string;
/**
 * @param {IFriendListBeepLogMessage | null | undefined} beep
 * @returns {boolean}
 */
declare function FriendListBeepIsReaction(beep: IFriendListBeepLogMessage | null | undefined): boolean;
/**
 * A reaction is stored in the beep log but is not a message the player still needs to read.
 * @param {IFriendListBeepLogMessage | null | undefined} beep
 * @returns {boolean}
 */
declare function FriendListBeepIsUnread(beep: IFriendListBeepLogMessage | null | undefined): boolean;
/**
 * A sent message means the earlier incoming beeps in that chat have been seen.
 * @param {number} memberNumber
 */
declare function FriendListBeepMarkReadBeforeSend(memberNumber: number): void;
/**
 * Formats a beep message for display
 * @param {string} senderName
 * @param {{ text: string, metadata: BeepMessageMetadata | null }} parsed
 * @returns {{ text: string, messageType?: BeepMessageType }}
 */
declare function FriendListBeepFormatMessage(senderName: string, parsed: {
    text: string;
    metadata: BeepMessageMetadata | null;
}): {
    text: string;
    messageType?: BeepMessageType;
};
/**
 * Latest beep in a chat that is an actual message.
 * A reaction does not carry a room, space, or privacy.
 * @param {number[]} messageIndices
 * @returns {IFriendListBeepLogMessage | null}
 */
declare function FriendListBeepLastMessage(messageIndices: number[]): IFriendListBeepLogMessage | null;
/**
 * Room the beep was sent from, when the sender included it.
 * @param {IFriendListBeepLogMessage} beep
 * @returns {string}
 */
declare function FriendListBeepRoomCaption(beep: IFriendListBeepLogMessage): string;
/**
 * @param {FriendListBeepActionDefinition} action
 * @returns {boolean} Whether the action was registered successfully
 */
declare function FriendListBeepRegisterAction(action: FriendListBeepActionDefinition): boolean;
/**
 * @param {number} beepIndex
 * @returns {FriendListBeepActionContext}
 */
declare function FriendListBeepBuildActionContext(beepIndex: number): FriendListBeepActionContext;
/**
 * @param {number[]} messageIndices
 * @returns {Map<string, Map<string, { count: number, selfHas: boolean }>>}
 */
declare function FriendListBeepCollectReactionState(messageIndices: number[]): Map<string, Map<string, {
    count: number;
    selfHas: boolean;
}>>;
/**
 * @param {string} text
 */
declare function FriendListBeepCopyMessage(text: string): void;
/**
 * @param {string} id
 * @returns {string}
 */
declare function FriendListBeepEscapeDataId(id: string): string;
/**
 * @param {string} id
 */
declare function FriendListBeepScrollToMessage(id: string): void;
/**
 * @param {string} formattedText
 * @param {{ text: string }} parsed
 * @param {number} [maxLen]
 */
declare function FriendListBeepSnippetFromMessage(formattedText: string, parsed: {
    text: string;
}, maxLen?: number): string;
/**
 * @param {number} beepIndex
 */
declare function FriendListBeepStartReply(beepIndex: number): void;
declare function FriendListBeepCancelReply(): void;
declare function FriendListBeepRenderReplyPreview(): void;
declare function FriendListBeepDetachReactionPickerDismiss(): void;
declare function FriendListBeepCloseReactionPicker(): void;
/**
 * @param {PointerEvent} ev
 */
declare function FriendListBeepReactionPickerPointerDown(ev: PointerEvent): void;
/**
 * Closes the reaction picker when focus is no longer on it or the react trigger (toggle handles the latter).
 * @this {HTMLElement}
 * @param {FocusEvent} ev
 */
declare function FriendListBeepReactionPickerFocusOut(this: HTMLElement, ev: FocusEvent): void;
/**
 * @param {number} beepIndex
 * @param {HTMLButtonElement | null} anchor
 */
declare function FriendListBeepToggleReactionPicker(beepIndex: number, anchor: HTMLButtonElement | null): void;
/**
 * @param {string} targetId
 * @param {string} emoji
 * @param {boolean} remove
 */
declare function FriendListBeepSendReaction(targetId: string, emoji: string, remove: boolean): void;
/**
 * @param {number} beepIndex
 * @returns {HTMLElement}
 */
declare function FriendListBeepBuildActionBar(beepIndex: number): HTMLElement;
/**
 * Builds a map of chat keys to chat data
 * @returns {Map<string, FriendListBeepChat>}
 */
declare function FriendListBeepBuildChatMap(): Map<string, FriendListBeepChat>;
/**
 * Creates beep chat menu for an interlocutor
 * @param {string} chatKey
 */
declare function FriendListBeepChat(chatKey: string): void;
/**
 * Opens the beep chat for a player. A member number with no history opens an empty chat.
 * @param {number} memberNumber Member number of target player
 * @param {IFriendListBeepLogMessage|null} data Beep data of received beep
 * @param {string} [chatKey]
 */
declare function FriendListBeep(memberNumber: number, data?: IFriendListBeepLogMessage | null, chatKey?: string): void;
/**
 * Closes the beep menu
 */
declare function FriendListBeepMenuClose(): void;
/**
 * Sets up an IntersectionObserver on unread received messages to mark them as
 * read once they scroll into the upper half of the chat viewport, and attaches
 * a scroll listener to toggle the scroll-to-bottom button.
 */
declare function FriendListBeepSetupReadObserver(): void;
/**
 * Updates the scroll-to-bottom button visibility and unread badge count.
 * The button appears when scrolling down while above the bottom, or when
 * there are unread messages. It hides when the user reaches the bottom
 * or scrolls up (with no unreads).
 */
declare function FriendListBeepUpdateScrollState(): void;
/**
 * Marks all messages in the current chat as read and scrolls to the bottom.
 */
declare function FriendListBeepScrollToBottom(): void;
/**
 * Sends the beep and message on send click
 */
declare function FriendListBeepMenuSend(): void;
/**
 * Shows the wanted beep on click from beep list
 * @param {number} i index of the beep
 * @returns {SafePromise<void>}
 */
declare function FriendListShowBeep(i: number): SafePromise<void>;
/**
 * Shows the chat history for a given beep chat
 * @param {string} chatKey
 */
declare function FriendListShowBeepChat(chatKey: string): Promise<void>;
/**
 * Loads the friend list data into the HTML div element.
 * @param {ServerFriendInfo[]} data - An array of data, we receive from the server
 *
 * `data.MemberName` - The name of the player
 *
 * `data.MemberNumber` - The ID of the player
 *
 * `data.ChatRoomName` - The name of the ChatRoom
 *
 * `data.ChatRoomSpace` - The space, where this room was created.
 *
 * `data.Type` - The relationship that exists between the player and the friend of the list.
 * @returns {void} - Nothing
 */
declare function FriendListLoadFriendList(data: ServerFriendInfo[]): void;
/**
 * Registers an action for the friend list action menu.
 * @param {FriendListActionDefinition} action
 */
declare function FriendListRegisterAction(action: FriendListActionDefinition): void;
/**
 * @param {FriendListActionContext} friend
 * @returns {FriendListActionDefinition[]}
 */
declare function FriendListGetAvailableActions(friend: FriendListActionContext): FriendListActionDefinition[];
/**
 * @param {FriendListActionDefinition} action
 * @param {FriendListActionContext} friend
 * @returns {HTMLElement}
 */
declare function FriendListCreateActionItem(action: FriendListActionDefinition, friend: FriendListActionContext): HTMLElement;
/**
 * @param {FriendRawData} friend
 * @returns {FriendListActionContext}
 */
declare function FriendListBuildActionContext(friend: FriendRawData): FriendListActionContext;
/**
 * @param {FriendRawData} friend
 * @returns {HTMLElement}
 */
declare function FriendListCreateActionsCell(friend: FriendRawData): HTMLElement;
/**
 * Closes the actions popover if focus is no longer on this menu (or a descendant). {@link FriendListCloseActionsMenu} syncs the trigger and popover.
 * @this {HTMLElement}
 * @param {FocusEvent} ev
 */
declare function FriendListActionsMenuFocusOut(this: HTMLElement, ev: FocusEvent): void;
/**
 * @this {HTMLButtonElement}
 * @param {number} memberNumber
 */
declare function FriendListToggleActionsMenu(this: HTMLButtonElement, memberNumber: number): void;
declare function FriendListCloseActionsMenu(): void;
/**
 * @param {Element} wrapper
 * @param {HTMLElement} menu
 */
declare function FriendListPositionActionsMenu(wrapper: Element, menu: HTMLElement): void;
declare function FriendListRepositionActionsMenu(): void;
/**
 * Handles mode changes for friend list
 * @param {number} modeIndex - mode to change to
 */
declare function FriendListChangeMode(modeIndex: number): void;
/**
 * Sorts the friend list depending on the sorting mode
 * and the sorting direction. If the sorting mode is none nothing is done.
 * @param {FriendListSortingMode} sortingMode
 * @param {FriendListSortingDirection} sortingDirection
 */
declare function FriendListSort(sortingMode: FriendListSortingMode, sortingDirection: FriendListSortingDirection): void;
/**
 * Sorts the friend list by properties based on the search input.
 * Searched properties: Name, Nickname (NYI) and MemberNumber
 * @param {string} text
 */
declare function FriendListSearchByProperties(text: string): void;
/**
 * Handles changes of the sorting mode
 * @param {FriendListSortingMode} sortingMode
 */
declare function FriendListChangeSortingMode(sortingMode: FriendListSortingMode): void;
/**
 * @this {HTMLButtonElement}
 */
declare function FriendListToggleAutoRefresh(this: HTMLButtonElement): void;
/**
 * Checks if the given member number is pending friend request.
 * @param {number} memberNumber
 * @returns {boolean}
 */
declare function FriendListIsPending(memberNumber: number): boolean;
/**
 * Gets the relation type of the given member number.
 * @param {number} memberNumber
 * @returns {FriendListRelationType}
 */
declare function FriendListGetRelationType(memberNumber: number): FriendListRelationType;
/**
 * Checks if the player can delete the given member number from their friendlist.
 * @param {number} memberNumber
 * @returns {boolean}
 */
declare function FriendListCanDelete(memberNumber: number): boolean;
/**
 * Checks if the player can add the given member number to their friendlist.
 * @param {number} memberNumber
 * @returns {boolean}
 */
declare function FriendListCanAdd(memberNumber: number): boolean;
/**
 * Opens the friendlist from any screen
 * @returns {SafePromise<void>}
 */
declare function FriendListShow(): SafePromise<void>;
/**
 * Prompts for a comma-separated list of members to add.
 * @returns {void} - Nothing
 */
declare function FriendListAddFriends(): void;
/**
 * When the user wants to delete someone from their friend list this must be confirmed.
 * This function either displays the confirm message or deletes the friend from the friendlist
 * @param {number} MemberNumber - The member to delete from the friendlist
 * @returns {void} - Nothing
 */
declare function FriendListDelete(MemberNumber: number): void;
/**
 * Exits the friendlist
 * @param {string | undefined} room The room to search for
 */
declare function FriendListChatSearch(room: string | undefined): Promise<void>;
declare var FriendListBackground: string;
/** @deprecated @type {number[]} */
declare var FriendListConfirmDelete: number[];
/** @type {FriendListReturn<any> | null} */
declare var FriendListReturn: FriendListReturn<any> | null;
/** @type {FriendListModes} */
declare var FriendListMode: FriendListModes;
declare var FriendListModeIndex: number;
/** @type {IFriendListBeepLogMessage[]} */
declare var FriendListBeepLog: IFriendListBeepLogMessage[];
/** @type {Set<number>} */
declare let FriendListOnlineFriends: Set<number>;
/** @type {number} MemberNumber of the player to send beep to */
declare let FriendListBeepTarget: number;
/** @type {string | null} */
declare let FriendListBeepChatKey: string | null;
declare var FriendListBeepShowRoom: boolean;
/** @type {FriendListSortingMode} */
declare let FriendListSortingMode: FriendListSortingMode;
/** @type {FriendListSortingDirection} */
declare let FriendListSortingDirection: FriendListSortingDirection;
/** @type {IntersectionObserver | null} */
declare let FriendListBeepObserver: IntersectionObserver | null;
/** @type {number[]} */
declare let FriendListBeepChatIndices: number[];
/** @type {BeepMessageReplyTo | null} */
declare let FriendListBeepReplyTarget: BeepMessageReplyTo | null;
/** @type {HTMLElement | null} */
declare let FriendListBeepReactionPickerEl: HTMLElement | null;
/** Display name of the current beep chat partner (set when chat view opens). */
declare let FriendListBeepChatInterlocutorName: string;
declare const FriendListBeepMetadataIndicator: "\uF124";
/** Server beep messages are capped at this length, including the metadata trailer. */
declare const FriendListBeepMessageLimit: 1000;
/** @type {Record<string, FriendListActionDefinition>} */
declare var FriendListActionDefinitions: Record<string, FriendListActionDefinition>;
/** @satisfies {{ [key in (ServerChatRoomSpace | "Private")]: FriendListIcon }} */
declare const FriendListIconMapping: {
    "": {
        src: string;
        tooltipKey: string;
        sortKey: string;
    };
    M: {
        src: string;
        tooltipKey: string;
        sortKey: string;
    };
    X: {
        src: string;
        tooltipKey: string;
        sortKey: string;
    };
    Asylum: {
        src: string;
        tooltipKey: string;
        sortKey: string;
    };
    Private: {
        src: string;
        tooltipKey: string;
        sortKey: string;
    };
};
/**
 * Note that the `Caption` field is only initialized in {@link FriendListLoad}..
 * @type {Record<FriendListRelationType, { Caption?: string, Icon: string, SortingPriority: number }>}
 */
declare const FriendListTypeData: Record<FriendListRelationType, {
    Caption?: string;
    Icon: string;
    SortingPriority: number;
}>;
declare namespace FriendListAutoRefresh {
    let interval: number;
    let nextRefresh: number;
}
declare const FriendListIDs: Readonly<{
    root: "friend-list-subscreen";
    navBar: "friend-list-nav-bar";
    header: "friend-list-header";
    friendList: "friend-list";
    friendListTable: "friend-list-table";
    navButtons: "friend-list-buttons";
    modeTitle: "friend-list-mode-title";
    searchInput: "friend-list-search-input";
    btnAutoRefresh: "friend-list-button-auto-refresh";
    btnAddFriend: "friend-list-button-add-friend";
    btnRefresh: "friend-list-button-refresh";
    btnPrev: "friend-list-button-prev";
    btnNext: "friend-list-button-next";
    btnExit: "friend-list-button-exit";
    btnResetSorting: "friend-list-reset-sorting";
    beepList: "friend-list-beep-dialog";
    beepTextArea: "friend-list-beep-textarea";
    beepInputRow: "friend-list-beep-chat-input-row";
    beepMessages: "friend-list-beep-chat-log";
    beepChatWrapper: "friend-list-beep-chat-log-wrapper";
    beepScrollBtn: "friend-list-beep-scroll-btn";
    beepUnreadBadge: "friend-list-beep-unread-badge";
    beepNewMessageDivider: "friend-list-beep-new-message-divider";
    beepReplyPreview: "friend-list-beep-reply-preview-row";
}>;
/** @type {Set<string>} */
declare var FriendListBeepReactionEmojis: Set<string>;
/** @type {Record<string, FriendListBeepActionDefinition>} */
declare var FriendListBeepActionDefinitions: Record<string, FriendListBeepActionDefinition>;
/** @type {((ev: PointerEvent) => void) | null} */
declare let FriendListBeepReactionPickerPointerDownListener: ((ev: PointerEvent) => void) | null;
