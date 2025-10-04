declare function PreferenceSubscreenChatLoad(): void;
/**
 * Sets the chat preferences for the player. Redirected to from the main Run function if the player is in the chat
 * settings subscreen.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenChatRun(): void;
/**
 * Handles the click events for the chat settings of a player.  Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenChatClick(): void;
/**
 * Exits the preference screen
 */
declare function PreferenceSubscreenChatExit(): boolean;
declare function PreferenceSubscreenChatResize(onLoad: any): void;
/** @type {ChatColorThemeType[]} */
declare var PreferenceChatColorThemeList: ChatColorThemeType[];
/** @type {ChatEnterLeaveType[]} */
declare var PreferenceChatEnterLeaveList: ChatEnterLeaveType[];
/** @type {ChatMemberNumbersType[]} */
declare var PreferenceChatMemberNumbersList: ChatMemberNumbersType[];
/** @type {ChatFontSizeType[]} */
declare var PreferenceChatFontSizeList: ChatFontSizeType[];
/** @type {PreferenceChatCheckboxOption[]} */
declare const PreferenceSubscreenChatCheckboxes: PreferenceChatCheckboxOption[];
/** @type {Record<string, PreferenceChatDropdownOption>} */
declare const PreferenceSubscreenChatDropdowns: Record<string, PreferenceChatDropdownOption>;
declare const PreferenceSubscreenChatIDs: Readonly<{
    grid: "preference-chat-grid";
}>;
