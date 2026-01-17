/**
 * Uncompress a string containing an appearance, then applies that appearance data to the NPC
 * @param {NPCCharacter} C - The NPC character that loads its new appearance
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundPrepareFoundNPC(C: NPCCharacter): void;
declare function MagicSchoolFindsAroundLoad(): Promise<void>;
/**
 * Runs the room
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundRun(): void;
/**
 * Handles the click events.  Called from CommonClick()
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundClick(): void;
/**
 * Sets a boolean flag on the player to indicate they have learned about the prizes
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundLearnAboutPrizes(): void;
/**
 * Starts a magic battle with the Kitsune NPC
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundMagicBattleStart(): void;
/**
 * When the magic battle practice ends
 * @returns {Promise<void>} - Nothing
 */
declare function MagicSchoolFindsAroundKitsuneMagicBattleEnd(): Promise<void>;
/**
 * When the player starts a club card game
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundClubCardStart(): void;
/**
 * When the player ends a club card game
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundClubCardEnd(): void;
/**
 * Run out of the Findings room
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundRunAway(): void;
/**
 * Run out of the Findings room and reset NPC
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundRunAwayEnd(): void;
/**
 * Starts the quest to gather essences
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundStartQuest(): void;
/**
 * Return the current progress of the quest
 * @returns {number}
 */
declare function MagicSchoolFindsAroundKitsuneGetQuestProgress(): number;
/**
 * Quest in-progress?
 * @returns {boolean} - True if in progress
 */
declare function MagicSchoolFindsAroundQuestStarted(): boolean;
/**
 * Quest completed?
 * @returns {boolean} - True if completed
 */
declare function MagicSchoolFindsAroundQuestCompleted(): boolean;
/**
 * Returns the fully initialized and validated parameters for the FindsAround game
 * @returns {Required<GameMagicSchoolFindsAroundParameters>} - Nothing
 */
declare function MagicSchoolFindsAroundGetData(): Required<GameMagicSchoolFindsAroundParameters>;
/**
 * Gives the player the reward tails
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundGiveTails(): void;
/** Hide the NPC
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundHideNPC(): void;
/**
 * Triggered when the player lost and get ungagged by the Kitsune, can affect reputation
 * @param {string} RepChange
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundUngagPlayer(RepChange: string): void;
/**
 * When the player lost a battle and the Kitsune tests a spell on her
 * @param {string} RepChange
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundLoserSpell(RepChange: string): void;
/**
 * Triggered when the player lost and get untied by the Kitsune, can affect reputation
 * @param {string} RepChange
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundReleasePlayer(RepChange: string): void;
/**
 * Returns the player in the main hall in her current bondage
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundPlayerMainHall(): void;
/**
 * Magic School Finds Around Kitsune Quest in progress?
 * True if started but not completed (0–8)
 * @returns {boolean}
 */
declare function DialogKitsuneQuestInProgress(): boolean;
/**
 * Update the Kitsune NPC's quest status as it progresses
 * @returns {void} - Nothing
 */
declare function MagicSchoolLaboratoryKitsuneQuestUpdate(): void;
/**
 * Give player essence from defeated student
 * @param {string} Amount - The amount of essence to give
 * @returns {void} - Nothing
 */
declare function DialogKitsuneGiveEssence(Amount: string): void;
declare var MagicSchoolFindsAroundBackground: string;
/** @type {NPCCharacter} */
declare var MagicSchoolFindsAroundKitsune: NPCCharacter;
declare var MagicSchoolFindsAroundSpellCount: number;
declare var MagicSchoolFindsAroundLastSpell: string;
