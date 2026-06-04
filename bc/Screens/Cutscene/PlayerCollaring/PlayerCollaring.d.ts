declare function PlayerCollaringLoad(): Promise<void>;
/**
 * Runs and draws the player collaring cutscene
 * @returns {void} - Nothing
 */
declare function PlayerCollaringRun(): void;
/**
 * Handles clicks during the player collaring cutscene. Clicking anywhere on the screen advances the cutscene. At the end of the cutscene, the player is sent back to her room with her mistress.
 * @returns {void} - Nothing
 */
declare function PlayerCollaringClick(): void;
declare var PlayerCollaringBackground: string;
/** @type {NPCCharacter} */
declare var PlayerCollaringMistress: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerCollaringMistressLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerCollaringMistressRight: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerCollaringGirlLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var PlayerCollaringGirlRight: NPCCharacter;
