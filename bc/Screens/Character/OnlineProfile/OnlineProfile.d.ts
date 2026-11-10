declare var OnlineProfileBackground: string;
declare const OnlineProfileTextDescMaxLen = 10000;
declare const OnlineProfileTextOwnersNotesMaxLen = 4000;
/**
 * Leading character used to signal that description is compressed
 * @readonly
 */
declare const ONLINE_PROFILE_DESCRIPTION_COMPRESSION_MAGIC: string;
declare const OnlineProfile: {
    IDs: Readonly<{
        screen: "online-profile-screen";
        saveButton: "online-profile-save-button";
        cancelButton: "online-profile-cancel-button";
        ownersNotesButton: "online-profile-owners-notes-button";
        description: "online-profile-description-input";
        ownersNotes: "online-profile-owners-notes-input";
    }>;
    /** @type { "description" | "ownersNotes" } */
    mode: "description" | "ownersNotes";
    description: () => string;
    ownersNotes: () => string;
    notesAvailable: () => boolean;
    /**
     * @param {"description" | "ownersNotes"} mode
     * @returns {boolean}
     */
    canEdit: (mode: "description" | "ownersNotes") => boolean;
};
/**
 * Loads the online profile screen by creating its input
 * @type {ScreenLoadHandler}
 */
declare function OnlineProfileLoad(): Promise<void>;
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
declare function OnlineProfileResize(): void;
/**
 * Handles exiting while in the online profile screen. It removes the input and saves the description.
 * @param {boolean} [Save] - Whether or not we should save the changes
 * @returns {void} - Nothing
 */
declare function OnlineProfileExit(Save?: boolean): void;
/**
 * Handles unloading the online profile screen
 * @returns {void}
 */
declare function OnlineProfileUnload(): void;
/**
 * Saves the description to the server
 * @param {string} description - The description to save
 * @returns {void}
 */
declare function OnlineProfileSaveDescription(description: string): void;
/**
 * Sets the mode of the online profile screen.
 *
 * @param {"description" | "ownersNotes"} mode - The mode to set.
 * @returns {void}
 */
declare function OnlineProfileSetMode(mode: "description" | "ownersNotes"): void;
/**
 * Setup OnlineProfile UI in a specific mode.
 *
 * @param {"description" | "ownersNotes"} mode - Initial display mode.
 * @returns {void}
 */
declare function OnlineProfileStart(mode: "description" | "ownersNotes"): void;
