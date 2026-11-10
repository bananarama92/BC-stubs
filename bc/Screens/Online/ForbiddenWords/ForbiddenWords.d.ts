declare var ForbiddenWordsBackground: string;
/** @type {null | OnlineCharacter} */
declare var ForbiddenWordsTarget: null | OnlineCharacter;
/** @type {string[]} */
declare var ForbiddenWordsList: string[];
declare var ForbiddenWordsOffset: number;
declare var ForbiddenWordsConsequence: string;
declare var ForbiddenWordsConsequenceList: string[];
/**
 * Loads the forbidden words screen, fetches the word list from the current character rules
 * @type {ScreenLoadHandler}
 */
declare function ForbiddenWordsLoad(): Promise<void>;
/** @type {ScreenUnloadHandler} */
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
