/**
 * Sets the new title of the player, if the title has changed
 * @param {TitleName} NewTitle - The new title for the player
 * @returns {TitleName} - The new title of the player
 */
declare function TitleSet(NewTitle: TitleName): TitleName;
/**
 * Selects a title, updating the UI
 * @param {TitleName} title - The title to select
 */
declare function TitleSelect(title: TitleName): void;
/**
 * Returns the current title of the given player. If an invalid title is found or the player has to wear a certain title
 * the correct title is pushed to the player's attributes
 * @param {Character} C - The player, whose title we want to get
 * @returns {TitleName} - The title of the given player
 */
declare function TitleGet(C: Character): TitleName;
/**
 * Checks, if the given title is forced a forced title like 'Club Slave' or 'Escaped Patient'
 * @param {TitleName} Title - The title to check
 * @returns {boolean} - Result of the check
 */
declare function TitleIsForced(Title: TitleName): boolean;
/**
 * Checks, if the given title is earned a earned title is any title that doesn't always return true such as 'Switch', 'Doll' & 'Angel'
 * @param {TitleName} Title - The title to check
 * @returns {boolean} - Result of the check
 */
declare function TitleIsEarned(Title: TitleName): boolean;
declare function TitleLoad(): Promise<void>;
declare function TitleUnload(): void;
/**
 * Runs the title selection screen. This function is called dynamically on a repeated basis,
 * so don't use complex loops or call extended functions from here.
 * @returns {void} - Nothing
 */
declare function TitleRun(): void;
/**
 * Handles the click events in the title selection screen. Clicks are forwarded from CommonClick()
 * @returns {void} - Nothing
 */
declare function TitleClick(): void;
declare function TitleExit(): void;
declare function TitleResize(): void;
declare function TitleSearch(): void;
declare var TitleBackground: string;
/** @type {null | TitleName} */
declare var TitleSelectedTitle: null | TitleName;
/** @type {null | "NicknameTooLong" | "NicknameInvalidChars" | "NicknameLocked"} */
declare var TitleNicknameStatus: null | "NicknameTooLong" | "NicknameInvalidChars" | "NicknameLocked";
/** @deprecated */
declare let TitleOffset: number;
/** @type {{ Name: TitleName; Requirement: () => boolean; Earned?: boolean, Force?: boolean }[]} */
declare let TitleListFiltered: {
    Name: TitleName;
    Requirement: () => boolean;
    Earned?: boolean;
    Force?: boolean;
}[];
/** @deprecated */
declare const TitlePerPage: 28;
declare const TitleSelec: Readonly<{
    subscreen: "title-subscreen";
    nicknameInputGroup: "input-nickname-group";
    nicknameInput: "InputNickname";
    searchInput: "input-search";
    exit: "title-exit";
    titleGroup: "title-subscreen-hgroup";
    titleStatus: "title-subscreen-status";
    titleMain: "title-subscreen-main";
    titleButtonContainer: "title-subscreen-titlebuttons";
    /** @param {TitleName} title */
    titleButtonId(title: TitleName): string;
    titleButtonClass: "title-button";
}>;
