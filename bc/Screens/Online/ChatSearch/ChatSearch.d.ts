declare function ChatSearchLoad(): void;
declare function ChatSearchUnload(): void;
declare function ChatSearchRun(time: number): void;
declare function ChatSearchClick(event: MouseEvent | TouchEvent): void;
/**
 * Draws buttons and text for selection of room space.
 * @returns {void} - Nothing
 */
declare function ChatSearchRoomSpaceSelectDraw(): void;
/**
 * Handles clicks on selection of room space.
 * @returns {void} - Nothing
 */
declare function ChatSearchRoomSpaceSelectClick(): void;
/**
 * While in normal view, called when player clicks apply or presses enter.
 * Saves the "temp" options into their normal variables, and sends them to the server.
 * @returns {void} - Nothing
 */
declare function ChatSearchSaveLanguageFiltering(): void;
/**
 * While in normal view, calls when player clicks revert.
 * Loads the "temp" options from their normal variables.
 * @returns {void} - Nothing
 */
declare function ChatSearchLoadLanguageFiltering(): void;
/**
 * @returns {boolean} - True if the player changed the options and the apply/revert buttons should show
 */
declare function ChatSearchChangedLanguageOrFilterTerms(): boolean;
/**
 * While in filter view, called when player clicks apply, presses enter, or returns to the normal view.
 * Saves the "temp" options into their normal variables, and sends them to the server.
 * Also refreshes the displayed rooms accordingly.
 * @returns {void} - Nothing
 */
declare function ChatSearchSaveLanguageAndFilterTerms(): void;
/**
 * While in filter view, calls when player clicks revert.
 * Also called when entering the filter view, so that the values are correct on first load or if they got changed in any other way somehow.
 * Loads the "temp" options from their normal variables, and updates the search box.
 * @returns {void} - Nothing
 */
declare function ChatSearchLoadLanguageAndFilterTerms(): void;
declare function ChatSearchKeyDown(event: KeyboardEvent): boolean;
declare function ChatSearchExit(): void;
/**
 * Draws the filter mode help screen: just text and a back button.
 * @returns {void} - Nothing
 */
declare function ChatSearchFilterHelpDraw(): void;
/**
 * Draws the filter mode unhide confirm screen: just text and confirm/cancel buttons.
 * @returns {void} - Nothing
 */
declare function ChatSearchFilterUnhideConfirmDraw(): void;
/**
 * Draws the list of rooms in normal mode.
 * @returns {void} - Nothing
 */
declare function ChatSearchNormalDraw(): void;
/**
 * Garbles based on immersion settings
 * @param {string} Text - The text to garble
 * @returns {string} - Garbled text
 */
declare function ChatSearchMuffle(Text: string): string;
/**
 * Draws the list of rooms in permission mode.
 * @returns {void} - Nothing
 */
declare function ChatSearchPermissionDraw(): void;
/**
 * Handles the clicks related to the chatroom list when in normal mode
 * @returns {void} - Nothing
 */
declare function ChatSearchJoin(): void;
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
 * Switch to the Filter Help view or back again.
 * Correctly handles adding/removing the input box as needed.
 * @returns {void} - Nothing
 */
declare function ChatSearchToggleHelpMode(): void;
/**
 * Adds/removes event listeners to the input box when entering/exiting filter view.
 * @param {boolean} add - true to add listeners, false to remove.
 * @returns {void} - Nothing
 */
declare function ChatSearchSetFilterChangeHandler(add: boolean): void;
/**
 * Handles the input box being changed in any way, while in filter view.
 * Makes sure the "temp" filter terms variable is kept updated, so the apply/revert buttons will appear/disappear at the correct times.
 * @returns {void} - Nothing
 */
declare function ChatSearchFilterChangeHandler(): void;
/**
 * Handles the clicks related to the chatroom list when in permission mode
 * @returns {void} - Nothing
 */
declare function ChatSearchClickPermission(): void;
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
 * @returns {void} - Nothing
 */
declare function ChatSearchQuery(): void;
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
declare var ChatSearchMessage: string;
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
declare var ChatSearchFilterHelpActive: boolean;
/** @type {null | { Index: number, RoomLabel: string, MemberLabel: string, WordsLabel: string }} */
declare var ChatSearchFilterUnhideConfirm: null | {
    Index: number;
    RoomLabel: string;
    MemberLabel: string;
    WordsLabel: string;
};
declare var ChatSearchRejoinIncrement: number;
/** @type {null | RoomName} */
declare var ChatSearchReturnToScreen: null | RoomName;
/** @type {"" | ServerChatRoomLanguage} */
declare var ChatSearchLanguage: "" | ServerChatRoomLanguage;
/** @type {"" | ServerChatRoomLanguage} */
declare var ChatSearchLanguageTemp: "" | ServerChatRoomLanguage;
declare var ChatSearchFilterTermsTemp: string;
/** @type {ChatRoomSpaceLabel[]} */
declare var ChatSearchRoomSpaces: ChatRoomSpaceLabel[];
declare var ChatSearchCurrentRoomSpaceIndex: number;
