declare function PreferenceSubscreenDifficultyLoad(): void;
/**
 * Runs and draw the preference screen, difficulty subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenDifficultyRun(): void;
/**
 * Handles the click events in the preference screen, difficulty sub-screen, propagated from CommonClick()
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenDifficultyClick(): void;
declare function PreferenceSubscreenDifficultyResize(): void;
declare function PreferenceSubscreenDifficultyExit(): boolean;
declare function PreferenceSubscreenDifficultyConfirm(): void;
/**
 * Sets the text of an element to the given text, with line breaks
 * @param {ElementHelp.ElementOrId} elementOrId
 * @param {string} text
 */
declare function PreferenceSubscreenDifficultySetLines(elementOrId: ElementHelp.ElementOrId, text: string): void;
declare function PreferenceSubscreenDifficultyUpdate(): void;
/**
 * Updates the status message
 * @param {string} status
 */
declare function PreferenceSubscreenDifficultyUpdateStatus(status: string): void;
declare function PreferenceSubscreenDifficultyUpdateStatusTimer(): void;
/**
 * Selects a difficulty level
 * @param {DifficultyLevel} level
 */
declare function PreferenceSubscreenDifficultySelect(level: DifficultyLevel): void;
/** @type {null | DifficultyLevel} */
declare var PreferenceDifficultyLevel: null | DifficultyLevel;
declare var PreferenceDifficultyAccept: boolean;
declare var PreferenceDifficultyStatusTimerActive: boolean;
declare var PreferenceDifficultyStatusTimerLastChange: number;
declare const PreferenceSubscreenDifficultyIDs: Readonly<{
    list: "preference-difficulty-list";
    listTitle: "preference-difficulty-list-title";
    detail: "preference-difficulty-detail";
    detailTitle: "preference-difficulty-detail-title";
    detailText: "preference-difficulty-detail-text";
    accept: "preference-difficulty-accept";
    changeButton: "preference-difficulty-change";
    status: "preference-difficulty-status";
    /** @param {number | ""} id */
    listLabel: (id: number | "") => string;
    /** @param {number | ""} id */
    listButton: (id: number | "") => string;
}>;
