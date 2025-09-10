declare function MiniGameLoad(): Promise<void>;
/**
 * Starts a given mini game at a set difficulty and keeps
 * @param {ModuleScreens["MiniGame"]} GameType - Name of the mini-game to launch
 * @param {number|string} Difficulty - Difficulty Ration for the mini-game
 * @param {string} ReturnFunction - Callback name to execute once the mini-game is over
 * @returns {Promise<void>} - Nothing
 */
declare function MiniGameStart(GameType: ModuleScreens["MiniGame"], Difficulty: number | string, ReturnFunction: string): Promise<void>;
declare function MiniGameEnd(): void;
/**
 * @returns {boolean} - TRUE if the game has started, but not yet ended.
 */
declare function MiniGameRunning(): boolean;
/**
 * Checks if the C key is being pressed and if cheats are available
 * @param {KeyboardEvent} event
 * @returns {boolean} - TRUE if C and cheats are allowed
 */
declare function MiniGameCheatKeyDown(event: KeyboardEvent): boolean;
declare var MiniGameType: string;
declare var MiniGameVictory: boolean;
declare var MiniGamePerfect: boolean;
/** @type {number} */
declare var MiniGameDifficulty: number;
/** @type {string} */
declare var MiniGameDifficultyMode: string;
declare var MiniGameDifficultyRatio: number;
declare var MiniGameAdvancedPayment: number;
declare var MiniGameReturnFunction: string;
declare var MiniGameProgress: number;
declare var MiniGameTimer: number;
declare var MiniGameStarted: boolean;
declare var MiniGameEnded: boolean;
declare var MiniGameCheatAvailable: boolean;
declare let KDPatched: boolean;
