/** @type {Platform.Dialog | null} */
declare var PlatformDialog: Platform.Dialog | null;
/** @type {undefined | string} */
declare var PlatformDialogBackground: undefined | string;
/** @type {string | null} */
declare var PlatformDialogText: string | null;
/** @type {Platform.DialogLine['Answer'] | null} */
declare var PlatformDialogAnswer: Platform.DialogLine['Answer'] | null;
declare var PlatformDialogAnswerPosition: number;
declare var PlatformDialogAnswerLength: number;
/** @type {string | null} */
declare var PlatformDialogReply: string | null;
/** @type {string | null} */
declare var PlatformDialogGoto: string | null;
/** @type {Platform.DialogLineCharacter[]} */
declare var PlatformDialogCharacterDisplay: Platform.DialogLineCharacter[];
declare var PlatformDialogPosition: number;
/** @type {Platform.DialogCharacter[] | null} */
declare var PlatformDialogCharacter: Platform.DialogCharacter[] | null;
/** @type {HTMLAudioElement | null} */
declare var PlatformDialogAudio: HTMLAudioElement | null;
declare var PlatformDialogAudioStyle: string[];
/** @type {Platform.DialogCharacter[]} */
declare var PlatformDialogCharacterTemplate: Platform.DialogCharacter[];
/** @type {Platform.Dialog[]} */
declare var PlatformDialogData: Platform.Dialog[];
/**
 * Players the audio track for the dialog
 * @param {string | null} Source - The source file to use
 * @returns {void} - Nothing
 */
declare function PlatformDialogVoice(Source: string | null): void;
/**
 * Loads the dialog at a specific position
 * @param {number} Position - The position # to load
 * @returns {void} - Nothing
 */
declare function PlatformDialogLoadPosition(Position: number): void;
/**
 * Starts a specific dialog
 * @param {string} DialogName - The name of the dialog to start
 * @returns {void} - Nothing
 */
declare function PlatformDialogStart(DialogName: string): void;
/**
 * Loads the screen
 * @type {ScreenLoadHandler}
 */
declare function PlatformDialogLoad(): Promise<void>;
/**
 * Draws the dialog character, text & answers
 * @returns {void} - Nothing
 */
declare function PlatformDialogDrawDialog(): void;
/**
 * Runs and draws the screen.
 * @returns {void} - Nothing
 */
declare function PlatformDialogRun(): void;
/**
 * Change the love/domination value based on the option picked, influenced also by perks
 * @param {number} CurrentValue - The current value
 * @param {number} Change - The modifier to apply
 * @param {boolean} Bonus - If there's a bonus to apply or not
 * @param {number} Level
 * @returns {number} - The new stat after changes
 */
declare function PlatformDialogChangeValue(CurrentValue: number, Change: number, Bonus: boolean, Level: number): number;
/**
 * Pick a specific idle pose if the character allows it
 * @param {Platform.DialogCharacter} Character - The character to evaluate
 * @param {number} Love - The love value that changed
 * @param {number} Domination - The domination value that changed
 * @returns {void}
 */
declare function PlatformDialogSetIdlePose(Character: Platform.DialogCharacter, Love: number, Domination: number): void;
/**
 * Pick an answer in a specific dialog
 * @param {number} Position - The position of the answer picked
 * @returns {void} - Nothing
 */
declare function PlatformDialogPickAnswer(Position: number): void;
/**
 * Alters a property (love or domination) for a specific character
 * @param {string} CharacterName - The name of the character to alter
 * @param {"Love" | "Domination"} Property - The name of the property to alter
 * @param {number} Value - The value to change
 * @returns {void} - Nothing
 */
declare function PlatformDialogAlterProperty(CharacterName: string, Property: "Love" | "Domination", Value: number): void;
/**
 * Processes the current dialog, can answer or skip to the next phase
 * @returns {void} - Nothing
 */
declare function PlatformDialogProcess(): void;
/**
 * When the user presses keys in the dialog screen
 * @type {KeyboardEventListener}
 */
declare function PlatformDialogKeyDown(event: KeyboardEvent): boolean;
/**
 * Exits the dialog and returns to the game
 * @returns {void} - Nothing
 */
declare function PlatformDialogLeave(): void;
/**
 * Handles clicks in the screen
 * @returns {void} - Nothing
 */
declare function PlatformDialogClick(): void;
/**
 * Returns a dialog character
 * @param {Platform.CharacterName} Name - The name of a character
 * @returns {Platform.DialogCharacter} - The character object
 */
declare function PlatformDialogGetCharacter(Name: Platform.CharacterName): Platform.DialogCharacter;
/**
 * Returns TRUE if the party leader (Melody) has a specific social perk
 * @param {Platform.PerkName} PerkName - The name of the perk
 * @returns {boolean} - TRUE if the perk is active
 */
declare function PlatformDialogLeaderHasPerk(PerkName: Platform.PerkName): boolean;
/**
 * Sets up some special event parameters based on the game progress
 * @returns {void}
 */
declare function PlatformDialogEvent(): void;
/**
 * Returns TRUE if the character is Melody's lover, make sure that character or Melody is currently active
 * @param {Platform.CharacterName} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsLover(Name: Platform.CharacterName): boolean;
/**
 * Returns TRUE if two characters are lovers
 * @param {Platform.CharacterName} Char1 - The name of the first character
 * @param {Platform.CharacterName} Char2 - The name of the second character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogCharactersAreLovers(Char1: Platform.CharacterName, Char2: Platform.CharacterName): boolean;
/**
 * Returns TRUE if the character is Melody's slave, make sure that character or Melody is currently active
 * @param {Platform.CharacterName} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsSlave(Name: Platform.CharacterName): boolean;
/**
 * Returns TRUE if the first character is the slave of the second character
 * @param {Platform.CharacterName} Char1 - The name of the first character
 * @param {Platform.CharacterName} Char2 - The name of the second character
 * @returns {boolean} - TRUE if slave
 */
declare function PlatformDialogIsSlaveOfCharacter(Char1: Platform.CharacterName, Char2: Platform.CharacterName): boolean;
/**
 * Returns TRUE if the character is Melody's owner, make sure that character or Melody is currently active
 * @param {Platform.CharacterName} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsOwner(Name: Platform.CharacterName): boolean;
/**
 * Returns TRUE if the character doesn't have any lover
 * @param {Platform.CharacterName} Name - The name of a character
 * @returns {boolean} - TRUE if no lover
 */
declare function PlatformDialogCharacterIsSingle(Name: Platform.CharacterName): boolean;
/**
 * Returns 0 if the source character and target character are not in a relationship, 1 if lover or slave, 2 if lover and slave
 * @param {Platform.CharacterName} SourceName - The source character name to evaluate
 * @param {Platform.CharacterName} TargetName - The target character name to evaluate
 * @returns {number} - TRUE if lover
 */
declare function PlatformDialogLoverAndSlaveFactor(SourceName: Platform.CharacterName, TargetName: Platform.CharacterName): number;
/**
 * Called each time a relationship changes through dialog
 * @returns {void} - Nothing
 */
declare function PlatformDialogRelationshipChange(): void;
/**
 * Called manually to output the full dialog text to the console for text proofing
 * @public
 * @returns {void} - Nothing
 */
declare function PlatformDialogOutputAll(): void;
