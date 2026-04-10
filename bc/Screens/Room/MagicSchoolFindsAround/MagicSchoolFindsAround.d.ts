/**
 * Uncompress a string containing an appearance, then applies that appearance data to the NPC
 * @param {NPCCharacter} C - The NPC character that loads its new appearance
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundDressUpKitsune(C: NPCCharacter): void;
/**
 * Uncompress a string containing an appearance, then applies that appearance data to the NPC
 * @param {NPCCharacter} C - The NPC character that loads its new appearance
 * @param {"Angel" | "Nun"} outfit - The outfit to use
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundDressUpTheresa(C: NPCCharacter, outfit: "Angel" | "Nun"): void;
declare function MagicSchoolFindsAroundLoad(): Promise<void>;
/**
 * Runs the room
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundRun(): void;
/**
 *
 * @param {"" | "Forest" | "Garden"} screenName
 */
declare function MagicSchoolFindsAroundChangeScreen(screenName: "" | "Forest" | "Garden"): void;
/**
 * Handles the click events.  Called from CommonClick()
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundClick(): void;
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
/**
 * Gives the player the reward wings
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundGiveWings(): void;
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
 * Starts the quest to gather essences for Kitsune
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundKitsuneStartQuest(): void;
/**
 * Return the current progress of the Kitsune quest
 * @returns {number}
 */
declare function MagicSchoolFindsAroundKitsuneGetQuestProgress(): number;
/**
 * Is the Kitsune quest in-progress?
 * @returns {boolean} - True if in progress
 */
declare function MagicSchoolFindsAroundKitsuneQuestStarted(): boolean;
/**
 * Is the Kitsune quest complete?
 * @returns {boolean} - True if completed
 */
declare function MagicSchoolFindsAroundKitsuneQuestCompleted(): boolean;
/**
 * Magic School Finds Around Kitsune Quest in progress?
 * True if started but not completed (0–8)
 * @returns {boolean}
 */
declare function DialogKitsuneQuestInProgress(): boolean;
/**
 * Give player essence from defeated student
 * @param {string} Amount - The amount of essence to give
 * @returns {void} - Nothing
 */
declare function DialogKitsuneGiveEssence(Amount: string): void;
declare function MagicSchoolFindsAroundKitsuneDisappear(): void;
/**
 * Update the Kitsune NPC's quest status as it progresses
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundKitsuneQuestUpdate(): void;
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
 * Starts the quest to gather essences for Theresa
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundTheresaStartQuest(): void;
/**
 * Return the current progress of the Theresa quest
 * @returns {number}
 */
declare function MagicSchoolFindsAroundTheresaGetQuestProgress(): number;
/** Whether the Theresa quest has started */
declare function MagicSchoolFindsAroundTheresaQuestStarted(): boolean;
/** Whether the Theresa quest is ongoing */
declare function MagicSchoolFindsAroundTheresaQuestIsOngoing(): boolean;
/** Whether the Theresa quest is complete and can be rewarded */
declare function MagicSchoolFindsAroundTheresaQuestCompleted(): boolean;
/** Whether it's the first time we meet Theresa */
declare function MagicSchoolFindsAroundTheresaFirstMet(): boolean;
/** Whether we've been rude to Theresa already */
declare function MagicSchoolFindsAroundTheresaBeenRudeBefore(): boolean;
/** Whether we've been rude to Theresa already */
declare function MagicSchoolFindsAroundTheresaVanished(): boolean;
/** Whether the player owns the reward */
declare function MagicSchoolFindsAroundTheresaTimerUp(): boolean;
/**
 * Update the Theresa NPC's quest status as it progresses
 * @returns {void} - Nothing
 */
declare function MagicSchoolFindsAroundTheresaQuestUpdate(): void;
/**
 * Give player essence from rescued person
 * @param {string} Amount - The amount of essence to give
 * @returns {void} - Nothing
 */
declare function DialogTheresaGiveEssence(Amount: string): void;
/**
 * @param {string} stage
 */
declare function MagicSchoolFindsAroundTheresaGiveBadWordPoint(stage: string): void;
declare function MagicSchoolFindsAroundTheresaGiveGift(): void;
declare function MagicSchoolFindsAroundHideTheresa(): void;
declare var MagicSchoolFindsAroundBackground: string;
/** @type {"" | "Garden" | "Forest"} */
declare var MagicSchoolFindsAroundArea: "" | "Garden" | "Forest";
/** @type {NPCCharacter} */
declare var MagicSchoolFindsAroundKitsune: NPCCharacter;
/** @type {NPCCharacter} */
declare var MagicSchoolFindsAroundTheresa: NPCCharacter;
declare var MagicSchoolFindsAroundSpellCount: number;
/** @type {MagicSchoolSpell | undefined} */
declare var MagicSchoolFindsAroundLastSpell: MagicSchoolSpell | undefined;
declare var AngelNunOutfit: string;
declare var CurrentAngelNunName: string;
declare var CurrentAngelNunStage: string;
declare namespace MagicSchoolFindsAroundButtons {
    let exit: [number, number, number, number];
    let profile: [number, number, number, number];
    let goToGarden: [number, number, number, number];
    let goToForest: [number, number, number, number];
    let soloCharacter: [number, number, number, number];
    let dualCharacterFirst: [number, number, number, number];
    let dualCharacterSecond: [number, number, number, number];
}
