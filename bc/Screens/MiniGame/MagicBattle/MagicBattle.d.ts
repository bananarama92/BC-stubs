declare var MagicBattleBackground: string;
/** @type {Character} */
declare var MagicBattleOpponent: Character;
/** @type {null | ((victory: boolean) => void)} */
declare var MagicBattleEndCallback: null | ((victory: boolean) => void);
/** @deprecated */
declare var MagicBattleReturnFunction: string;
declare var MagicBattleDifficulty: number;
declare var MagicBattleVictory: boolean;
/** @type {number[]} */
declare var MagicBattleAvailSpell: number[];
declare var MagicBattleOpponentSpell: number;
/** @type {null | string} */
declare var MagicBattlePlayerAppearance: null | string;
/** @type {null | string} */
declare var MagicBattleOpponentAppearance: null | string;
declare var MagicBattleSpellDifficulty: number[];
/**
 * Start a magic battle against an opponent
 * @param {Character} Opponent
 * @param {number} Difficulty
 * @param {string} Background
 * @param {(victory: boolean) => void} callback
 * @returns {void} - Nothing
 */
declare function MagicBattleStart(Opponent: Character, Difficulty: number, Background: string, callback: (victory: boolean) => void): void;
/**
 * Loads the magic battle
 * @type {ScreenLoadHandler}
 */
declare function MagicBattleLoad(): Promise<void>;
/**
 * Returns a difficulty factor based on the character nakedness and predicament
 * @param {Character} C
 * @returns {number} - Difficulty from 0 (full cloth, no restrain) to 10 (naked, fully restrained)
 */
declare function MagicBattleGetDifficulty(C: Character): number;
/**
 * Returns the spells that are available based on opponent (C) clothing and restraints
 * @param {Character | null} C
 * @returns {Array<number>} - Nothing
 */
declare function MagicBattleGetAvailSpells(C: Character | null): Array<number>;
/**
 * Runs the magic battle, 1 player vs 1 opponent
 * @returns {void} - Nothing
 */
declare function MagicBattleRun(): void;
/**
 * Handles clicks during the game
 * @returns {void} - Nothing
 */
declare function MagicBattleClick(): void;
/**
 * Starts the magic puzzle mini-game for a specific spell (S)
 * @param {number} S
 * @returns {void} - Nothing
 */
declare function MagicBattleSpellStart(S: number): void;
/**
 * Applies the effect of a magic spell (Spell) on a character (C)
 * @param {Character} C
 * @param {number} Spell
 * @returns {void} - Nothing
 */
declare function MagicSpellEffect(C: Character, Spell: number): void;
/**
 * When the spell ends, we apply the effect of the spell on the loser
 * @returns {SafePromise<void>}
 */
declare function MagicBattleSpellEnd(): SafePromise<void>;
/**
 * Handles the key press in the game, the C key for cheats
 * @type {KeyboardEventListener}
 */
declare function MagicBattleKeyDown(_event: KeyboardEvent): boolean;
