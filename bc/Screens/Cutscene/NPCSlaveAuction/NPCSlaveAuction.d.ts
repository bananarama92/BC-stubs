declare function NPCSlaveAuctionLoad(): Promise<void>;
/**
 * Runs and draws the slave auction cutscene
 * @returns {void} - Nothing
 */
declare function NPCSlaveAuctionRun(): void;
/**
 * Handles clicks during the slave auction cutscene. Clicking anywhere on the screen advances the cutscene. At the end of the cutscene, the player is sent back to the main hall and private NPCs are saved.
 * @returns {void} - Nothing
 */
declare function NPCSlaveAuctionClick(): void;
declare var NPCSlaveAuctionBackground: string;
/** @type {NPCCharacter | PlayerCharacter} */
declare var NPCSlaveAuctionVendor: NPCCharacter | PlayerCharacter;
/** @type {NPCCharacter} */
declare var NPCSlaveAuctionSlave: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCSlaveAuctionMistress: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCSlaveAuctionGirlLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCSlaveAuctionGirlRight: NPCCharacter;
declare var NPCSlaveAuctionAmount: number;
