declare function ClubCardLoungeLoad(): Promise<void>;
/**
 * Runs and draws the club card  room with the player and tutor
 * @returns {void} - Nothing
 */
declare function ClubCardLoungeRun(): void;
/**
 * Handles clicks in the college entrance room
 * @returns {void} - Nothing
 */
declare function ClubCardLoungeClick(): void;
/**
 * When the practice game starts
 * @returns {void} - Nothing
 */
declare function ClubCardLoungePraticeGameStart(): void;
/**
 * When the practice game ends
 * @returns {SafePromise<void>}
 */
declare function ClubCardLoungePraticeGameEnd(): SafePromise<void>;
declare var ClubCardLoungeBackground: string;
/** @type {NPCCharacter} */
declare var ClubCardLoungeTutor: NPCCharacter;
