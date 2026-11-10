declare var CellBackground: string;
declare var CellMinutes: number;
declare var CellOpenTimer: number;
/** @type {NPCCharacter} */
declare var CellKeyDepositStaff: NPCCharacter;
/**
 * Loads the cell screen and its NPC, then checks if it should be locked or not
 * @type {ScreenLoadHandler}
 */
declare function CellLoad(): Promise<void>;
/**
 * Runs and draws the cell screen
 * @returns {void} - Nothing
 */
declare function CellRun(): void;
/**
 * Handles clicks in the cell screen
 * @returns {void} - Nothing
 */
declare function CellClick(): void;
/**
 * Locks the player in the cell for the given amount of time
 * @param {number} LockTime - Number of minutes to be locked for
 * @returns {void} - Nothing
 */
declare function CellLock(LockTime: number): void;
/**
 * Takes away the player's keys for the given amount of time
 * @param {number} DepositTime - Number of hours to lose the keys for
 * @returns {void} - Nothing
 */
declare function CellDepositKeys(DepositTime: number): void;
