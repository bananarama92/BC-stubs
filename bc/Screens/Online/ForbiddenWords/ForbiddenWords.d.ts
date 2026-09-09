declare function ForbiddenWordsLoad(): Promise<void>;
declare function ForbiddenWordsUnload(): void;
/**
 * Starts the forbidden words screen and loads it
 * @returns {void} - Nothing
 */
declare function ForbiddenWordsOpen(): void;
/**
 * Draws the forbidden words text and check boxes
 * @returns {void} - Nothing
 */
declare function ForbiddenWordsRun(): void;
/**
 * Handles the click events.  Called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ForbiddenWordsClick(): void;
/**
 * Handles exiting from the screen, updates the sub rules
 * @satisfies {ScreenExitHandler}
 * @returns {SafePromise<void>}
 */
declare function ForbiddenWordsExit(): SafePromise<void>;
declare var ForbiddenWordsBackground: string;
/** @type {null | Character } */
declare var ForbiddenWordsTarget: null | Character;
/** @type {string[]} */
declare var ForbiddenWordsList: string[];
declare var ForbiddenWordsOffset: number;
declare var ForbiddenWordsConsequence: string;
declare var ForbiddenWordsConsequenceList: string[];
