declare function PlayerMistressLoad(): Promise<void>;
/**
 * Runs and draws the mistress promotion cutscene
 * @returns {void} - Nothing
 */
declare function PlayerMistressRun(): void;
/**
 * Handles clicks during the mistress promotion cutscene. Clicking anywhere on the screen advances the cutscene. At the end of the cutscene, the player stays in the management room but the state goes back to normal.
 * @returns {void} - Nothing
 */
declare function PlayerMistressClick(): void;
declare var PlayerMistressBackground: string;
/** @type {NPCCharacter} */
declare var PlayerMistressMistressLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerMistressMistressRight: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerMistressMaidLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerMistressMaidRight: NPCCharacter;
