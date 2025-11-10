/**
 * Starts the chatroom selection screen.
 * @param {ServerChatRoomSpace} space - Name of the chatroom space
 * @param {ScreenSpecifier | undefined} returnScreen - Screen to go back to when exiting leaving the lobby.
 * @param {ChatSearchLobbyOptions} [options]
 * @returns {void} - Nothing.
 */
declare function ChatSearchStart(space: ServerChatRoomSpace, returnScreen: ScreenSpecifier | undefined, options?: ChatSearchLobbyOptions): void;
declare function ChatSearchLoad(): Promise<void>;
declare function ChatSearchResize(load: boolean): void;
declare function ChatSearchUnload(): void;
declare function ChatSearchRun(time: number): void;
declare function ChatSearchClick(event: MouseEvent | TouchEvent): void;
/**
 * Returns the rooms to be displayed
 * @returns {ChatRoomSearchResult[]}
 */
declare function ChatSearchGetRooms(): ChatRoomSearchResult[];
/**
 * Gets the pagination information for the current page.
 * @returns {{currentPage: number, total: number}}
 */
declare function ChatSearchGetPagination(): {
    currentPage: number;
    total: number;
};
/**
 * Sets the page based on the passed page number.
 * @param {number} page
 */
declare function ChatSearchSetPage(page: number): void;
/**
 * Relatively sets the page based on the passed offsets.
 * @param {number} offset
 */
declare function ChatSearchSetPageRelative(offset: number): void;
/**
 * While in filter view, called when player clicks apply, presses enter, or returns to the normal view.
 * Saves the "temp" options into their normal variables, and sends them to the server.
 * Also refreshes the displayed rooms accordingly.
 * @returns {void} - Nothing
 */
declare function ChatSearchSaveFilterTerms(): void;
declare function ChatSearchKeyDown(event: KeyboardEvent): boolean;
declare function ChatSearchPaste(event: ClipboardEvent): void;
declare function ChatSearchKeyDownListener(this: HTMLInputElement, ev: KeyboardEvent): void;
/**
 * Handles exiting from the chat search screen, removes the input.
 * @type {ScreenExitHandler & { closeSubElements?: boolean }}
 * @param {boolean} [exitScreen=false] - Whether to exit the screen or just menus within
 */
declare function ChatSearchExit(exitScreen?: boolean): void;
declare function ChatSearchBack(): boolean;
/**
 * Draws the filter mode help screen: just text and a back button.
 * @returns {void} - Nothing
 */
declare function ChatSearchFilterHelpDraw(): void;
/**
 * Creates the filter mode unhide confirm screen: just text and confirm/cancel buttons.
 * @param {string} roomLabel
 * @param {string} memberLabel
 * @param {string} wordsLabel
 * @param {ChatRoomSearchResult} room
 * @returns {void} - Nothing
 */
declare function ChatSearchCreateFilterUnhideConfirm(roomLabel: string, memberLabel: string, wordsLabel: string, room: ChatRoomSearchResult): void;
/**
 * Returns the translated language name for the given code.
 * @param {ServerChatRoomLanguage} languageCode
 */
declare function ChatSearchGetLanguageName(languageCode: ServerChatRoomLanguage): string;
/**
 * Returns the translated room type for the given code.
 * @param {ChatRoomMapType} roomType
 */
declare function ChatSearchGetRoomTypeName(roomType: ChatRoomMapType): string;
/**
 * Returns the translated space for the given code.
 * @param {"" | "X" | "M" | "Asylum"} space
 */
declare function ChatSearchGetSpaceName(space: "" | "X" | "M" | "Asylum"): string;
/**
 * Updates the room grid with the given rooms
 * @param {ChatRoomSearchResult[]} rooms
 */
declare function ChatSearchGridUpdate(rooms: ChatRoomSearchResult[]): void;
/**
 * Creates a grid button for the given room
 * @param {ChatRoomSearchResult} room
 * @param {number} index
 */
declare function ChatSearchCreateGridRoom(room: ChatRoomSearchResult, index: number): void;
/**
 * Returns the list of icons for the given room
 * @param {ChatRoomSearchResult} room
 * @returns {string[]}
 */
declare function ChatSearchGridRoomGetIcons(room: ChatRoomSearchResult): string[];
/**
 * Returns whether the given room can be joined
 * @param {ChatRoomSearchResult} room
 * @returns {boolean}
 */
declare function ChatSearchGridRoomCanJoin(room: ChatRoomSearchResult): boolean;
/**
 * Creates the tooltip for the given room
 * @param {ChatRoomSearchResult} room
 * @param {number} index
 * @returns {HTMLDivElement | undefined}
 */
declare function ChatSearchCreateGridRoomTooltip(room: ChatRoomSearchResult, index: number): HTMLDivElement | undefined;
/**
 * Creates the tags for the room page
 * @param {ChatRoomSearchResult} room
 * @returns {HTMLElement[]}
 */
declare function ChatSearchCreateRoomPageTags(room: ChatRoomSearchResult): HTMLElement[];
/**
 * Shows the room page for the given room
 * @param {ChatRoomSearchResult} room
 */
declare function ChatSearchShowRoomPage(room: ChatRoomSearchResult): void;
/**
 * Garbles based on immersion settings
 * @param {string} Text - The text to garble
 * @returns {string} - Garbled text
 */
declare function ChatSearchMuffle(Text: string): string;
/**
 * Joins the room with the given name
 * @param {string} RoomName - The name of the room to join
 * @returns {void} - Nothing
 */
declare function ChatSearchJoin(RoomName: string): void;
/**
 * Switch the search screen between the normal view and the filter mode which allows hiding of rooms
 * @returns {void} - Nothing
 */
declare function ChatSearchToggleSearchMode(): void;
/**
 * Switch to the Hidden Rooms view or back again.
 * Correctly handles adding/removing the input box as needed.
 * @returns {void} - Nothing
 */
declare function ChatSearchToggleHiddenMode(): void;
/**
 * Does whatever is necessary to unhide a room.
 * Shows a confirmation screen first, unless the only reason is "TempHidden".
 * This is called when clicking a room in the list and also, if a confirmation is shown, called again when the confirm button is clicked.
 *
 * @param {ChatRoomSearchResult | number} C - Index of the room within ChatSearchHiddenResult
 * @param {boolean} Confirmed - False when clicking on room list, true when clicking Confirm button
 */
declare function ChatSearchClickUnhideRoom(C: ChatRoomSearchResult | number, Confirmed: boolean): boolean;
/**
 * Handles the reception of the server response when joining a room or when getting banned/kicked
 * @param {ServerChatRoomSearchResponse} data - Response from the server
 * @returns {void} - Nothing
 */
declare function ChatSearchResponse(data: ServerChatRoomSearchResponse): void;
/**
 * Sends a toast message based on the given response type
 * @param {ServerChatRoomSearchResponse} type
 */
declare function ChatSearchSendToast(type: ServerChatRoomSearchResponse): void;
/**
 * Censors the chat search result name and description based on the player preference
 * @param {ServerChatRoomSearchData} searchData - The (potentially) to-be censored search result
 * @returns {null | { DisplayName: string, Description: string }} - The censored name and description or, if fully censored, return `null` instead
 */
declare function ChatSearchCensor(searchData: ServerChatRoomSearchData): null | {
    DisplayName: string;
    Description: string;
};
/**
 * Parse the passed server search data, ensuring that all required fields are present.
 * @param {ServerChatRoomSearchResultResponse} searchResults - The unparsed search data as received from the server
 * @returns {(ServerChatRoomSearchData & { DisplayName: string, Order: number })[]} - The fully parsed room search data
 */
declare function ChatSearchParseResponse(searchResults: ServerChatRoomSearchResultResponse): (ServerChatRoomSearchData & {
    DisplayName: string;
    Order: number;
})[];
/**
 * Handles the reception of the server data when it responds to the search query
 * @param {ServerChatRoomSearchResultResponse} data - Response from the server, contains the room list matching the query
 * @returns {void} - Nothing
 */
declare function ChatSearchResultResponse(data: ServerChatRoomSearchResultResponse): void;
/**
 * Automatically join a room, for example due to leashes or reconnect
 * @returns {void} - Nothing
 */
declare function ChatSearchAutoJoinRoom(): void;
/**
 * Sends the search query data to the server. The response will be handled by ChatSearchResponse once it is received
 * @param {string} Query - The search term to look for
 * @returns {void} - Nothing
 */
declare function ChatSearchQuery(Query: string): void;
/**
 * Sorts the room result based on a player's settings
 * @returns {void} - Nothing
 */
declare function ChatSearchQuerySort(): void;
/**
 * Remove any rooms from the room list which contain the player's filter terms in the name
 * @returns {void} - Nothing
 */
declare function ChatSearchApplyFilterTerms(): void;
/**
 * Get a list of reasons why a room should be hidden.
 * If the returned array is empty, the room should be shown.
 * @param {{ Name: string, CreatorMemberNumber: number }} Room - the room object to check
 * @returns {string[]} - list of reasons
 */
declare function ChatSearchGetFilterReasons(Room: {
    Name: string;
    CreatorMemberNumber: number;
}): string[];
/**
 * Check if a room matches filtered-out terms and should thus be hidden.
 * Also used when deciding which terms need to be removed from the filter option in order to make a room be no longer hidden.
 * Only checks the room name, not the description.
 * @param {{ Name: string }} Room - the room object to check
 * @param {string[]} Terms - list of terms to check
 * @returns {boolean} - true if room matches, false otherwise
 */
declare function ChatSearchMatchesTerms(Room: {
    Name: string;
}, Terms: string[]): boolean;
/**
 * Calculates starting offset for the ignored rooms list when displaying results in filter/permission mode.
 * @param {number} shownRooms - Number of rooms shown before the ignored rooms.
 * @returns {number} - Starting offset for ingored rooms
 */
declare function ChatSearchCalculateIgnoredRoomsOffset(shownRooms: number): number;
/**
 * Return the space we're currently in.
 * Note that it will look at both the current room's, and if we're not in one, the current lobby
 * @returns {ServerChatRoomSpace | null}
 */
declare function ChatSearchGetSpace(): ServerChatRoomSpace | null;
/**
 * @file This file handles the chat lobby search & filter screen
 */
/** Background image */
declare var ChatSearchBackground: string;
/**
 * The list of tags allowed as backgrounds for the room edit screens
 * @type {BackgroundTag[]}
 */
declare var ChatSearchBackgroundTagList: BackgroundTag[];
/** @type {ChatRoomSearchResult[]} */
declare var ChatSearchResult: ChatRoomSearchResult[];
/** @type {ChatRoomSearchResult[]} */
declare var ChatSearchHiddenResult: ChatRoomSearchResult[];
/** @type {ServerChatRoomSearchRequest | null} */
declare var ChatSearchLastSearchDataJSON: ServerChatRoomSearchRequest | null;
declare var ChatSearchLastQuerySearchTime: number;
declare var ChatSearchLastQueryJoin: string;
declare var ChatSearchLastQueryJoinTime: number;
declare var ChatSearchResultOffset: number;
/** The room grid's left offset */
declare var ChatSearchPageX: number;
/** The room grid's top offset */
declare var ChatSearchPageY: number;
/**
 * Layout parameters for the room grid
 * @type {CommonGenerateGridParameters}
 */
declare var ChatSearchListParams: CommonGenerateGridParameters;
/** Pre-calculated. Must be updated if you change the grid parameters */
declare var ChatSearchRoomsPerPage: number;
/** @type {ScreenSpecifier} */
declare var ChatSearchReturnScreen: ScreenSpecifier;
/** @type {null | Item[]} */
declare var ChatSearchSafewordAppearance: null | Item[];
/** @type {null | Partial<Record<AssetPoseCategory, AssetPoseName>>} */
declare var ChatSearchSafewordPose: null | Partial<Record<AssetPoseCategory, AssetPoseName>>;
/** @type {null | Partial<Record<AssetPoseCategory, AssetPoseName>>} */
declare var ChatSearchPreviousActivePose: null | Partial<Record<AssetPoseCategory, AssetPoseName>>;
/** @type {number[]} */
declare var ChatSearchTempHiddenRooms: number[];
/** @type {"" | "Filter"} */
declare var ChatSearchMode: "" | "Filter";
declare var ChatSearchGhostPlayerOnClickActive: boolean;
declare var ChatSearchShowHiddenRoomsActive: boolean;
/** @type {null | { Index: number, RoomLabel: string, MemberLabel: string, WordsLabel: string }} */
declare var ChatSearchFilterUnhideConfirm: null | {
    Index: number;
    RoomLabel: string;
    MemberLabel: string;
    WordsLabel: string;
};
declare var ChatSearchRejoinIncrement: number;
/**
 * @deprecated
 * @type {never}
 */
declare var ChatSearchReturnToScreen: never;
/** @type {string} */
declare var ChatSearchQueryString: string;
/** @type {"" | ServerChatRoomLanguage} */
declare var ChatSearchLanguage: "" | ServerChatRoomLanguage;
/** @type {never} */
declare var ChatSearchLanguageTemp: never;
/** @type {ServerChatRoomGame} */
declare var ChatSearchGame: ServerChatRoomGame;
/** @type {ServerChatRoomSpace | null} */
declare var ChatSearchSpace: ServerChatRoomSpace | null;
declare var ChatSearchFilterTermsTemp: string;
/** @type {ChatRoomSpaceLabel[]} */
declare var ChatSearchRoomSpaces: ChatRoomSpaceLabel[];
declare var ChatSearchCurrentRoomSpaceIndex: number;
/** @type {HTMLDivElement} */
declare var ChatSearchRoomHeader: HTMLDivElement;
/** @type {HTMLDivElement} */
declare var ChatSearchRoomGrid: HTMLDivElement;
/** @type {HTMLFieldSetElement} */
declare var ChatSearchSearchMenu: HTMLFieldSetElement;
/** @type {HTMLDivElement} */
declare var ChatSearchPageCountElement: HTMLDivElement;
/** @type {HTMLDialogElement | null} */
declare var ChatSearchDialogElement: HTMLDialogElement | null;
/** @type {HTMLButtonElement} */
declare var ChatSearchSearchMenuButton: HTMLButtonElement;
/** @type {HTMLDivElement} */
declare var ChatSearchSearchBodyElement: HTMLDivElement;
/** @type {HTMLDialogElement | null} */
declare var ChatSearchFilterUnhideConfirmElement: HTMLDialogElement | null;
/** @type {HTMLDialogElement} */
declare var ChatSearchFilterHelpScreenElement: HTMLDialogElement;
declare function ChatSearchUpdateSearchSettings(): void;
