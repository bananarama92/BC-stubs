declare var NPCWeddingBackground: string;
/** @type {NPCCharacter} */
declare var NPCWeddingWife: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCWeddingGirlLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCWeddingGirlRight: NPCCharacter;
/**
 * Puts a wedding dress on a specified character
 * @param {Character} C - The character that must wear the ring.
 * @param {AssetName} Dress - The asset name of wedding dress to wear.
 * @returns {void} - Nothing.
 */
declare function NPCWeddingDress(C: Character, Dress: AssetName): void;
/**
 * Puts a bridesmaid dress on a specified character
 * @param {Character} C - The character that must wear the ring.
 * @returns {void} - Nothing.
 */
declare function NPCWeddingBridesmaid(C: Character): void;
/**
 * Loads the NPC wedding cutscene by creating the random NPCs and setting the stage
 * @type {ScreenLoadHandler}
 */
declare function NPCWeddingLoad(): Promise<void>;
/**
 * Runs and draws the NPC wedding cutscene
 * @returns {void} - Nothing
 */
declare function NPCWeddingRun(): void;
/**
 * Handles clicks during the NPC wedding cutscene. Clicking anywhere on the screen advances the cutscene. At the end of the cutscene, the player is sent back to her private room.
 * @returns {void} - Nothing
 */
declare function NPCWeddingClick(): void;
