/**
 * Setup OnlineProfile UI in a specific mode.
 *
 * @param {"Description" | "OwnersNotes"} mode - Initial display mode.
 * @returns {void}
 */
declare function OnlineProfileStart(mode: "Description" | "OwnersNotes"): void;
/**
 * Loads the text element based on current viewing/editing mode.
 * @param {HTMLInputElement} element
 * @returns {void}
 */
declare function OnlineProfileLoadTextArea(element: HTMLInputElement): void;
declare function OnlineProfileLoad(): Promise<void>;
/**
 * Handles unloading the online profile screen
 * @returns {void}
 */
declare function OnlineProfileUnload(): void;
/**
 * Runs and draws the online profile screen
 * @returns {void} - Nothing
 */
declare function OnlineProfileRun(): void;
/**
 * Handles clicks in the online profile screen
 * @returns {void} - Nothing
 */
declare function OnlineProfileClick(): void;
/**
 * Handles exiting while in the online profile screen. It removes the input and saves the description.
 * @param {boolean} Save - Whether or not we should save the changes
 * @returns {void} - Nothing
 */
declare function OnlineProfileExit(Save: boolean): void;
/** @type { "Description" | "OwnersNotes" } */
declare var OnlineProfileMode: "Description" | "OwnersNotes";
declare var OnlineProfileTextDesc: string;
declare var OnlineProfileTextOwnersNotes: string;
declare var OnlineProfileNotesAvailable: boolean;
declare const OnlineProfileTextDescMaxLen: 10000;
declare const OnlineProfileTextOwnersNotesMaxLen: 4000;
declare var OnlineProfileBackground: string;
/**
 * Leading character used to signal that description is compressed
 * @readonly
 */
declare const ONLINE_PROFILE_DESCRIPTION_COMPRESSION_MAGIC: string;
