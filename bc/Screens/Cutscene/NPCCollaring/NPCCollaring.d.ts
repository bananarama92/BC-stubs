declare function NPCCollaringLoad(): Promise<void>;
/**
 * Runs and draws the NPC collaring cutscene
 * @returns {void} - Nothing
 */
declare function NPCCollaringRun(): void;
/**
 * Handles clicks during the NPC collaring cutscene. Clicking anywhere on the screen advances the cutscene. At the end of the cutscene, NPCs are saved and the player is sent back to her room with her sub.
 * @returns {void} - Nothing
 */
declare function NPCCollaringClick(): void;
declare var NPCCollaringBackground: string;
/** @type {NPCCharacter} */
declare var NPCCollaringSub: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCCollaringMistressLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCCollaringMistressRight: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCCollaringGirlLeft: NPCCharacter;
/** @type {NPCCharacter} */
declare var NPCCollaringGirlRight: NPCCharacter;
