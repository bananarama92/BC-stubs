declare function StablePlayerIsPony(): boolean;
declare function StablePlayerIsExamPony(): boolean;
declare function StablePlayerIsTrainer(): boolean;
declare function StablePlayerIsExamTrainer(): boolean;
declare function StablePlayerCanTrainPony(): boolean;
declare function StablePlayerIsReadyToTrain(): boolean;
declare function StablePlayerIsNewby(): boolean;
/**
 * Check what outfit the player is currently wearing.
 * @param {"Pony" | "Trainer" | null} Outfit
 */
declare function StablePlayerIsWearingOutfit(Outfit: "Pony" | "Trainer" | null): boolean;
declare function StablePlayerIsCollared(): boolean;
declare function StablePlayerOtherPony(): boolean;
declare function StablePlayerIsolation(): boolean;
declare function StableTrainingExercisesAvailable(): boolean;
declare function StablePlayerAllowedPonyExamen(): boolean;
declare function StablePlayerDisallowedPonyExamen(): boolean;
declare function StablePlayerAllowedTrainerExamen(): boolean;
declare function StablePlayerDisallowedTrainerExamen(): boolean;
declare function StableCanHideDice(): boolean;
/**
 * Returns TRUE if the player and the current character can play Club Card
 * @returns {boolean} - Returns TRUE if both aren't restrained
 */
declare function StableCanPlayClubCard(): boolean;
declare function StableLoad(): Promise<void>;
declare function StableRun(): void;
declare function StableClick(): void;
declare function StableTrialPonyTraining(): void;
declare function StableTrialTrainerTraining(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StableTrialTrainerTrainingEnd(): SafePromise<void>;
/**
 * @param {StableFeeType} Fee
 * @returns
 */
declare function StableFeeValue(Fee: StableFeeType): 0 | 10 | 500 | 50;
/**
 * @param {StableFeeType} Fee
 * @returns
 */
declare function StableCanPayTheFee(Fee: StableFeeType): boolean;
/**
 * @param {StableFeeType} Fee
 */
declare function StablePayTheFee(Fee: StableFeeType): void;
declare function StableCanBecomePony(): void;
declare function StablePlayerStartTrainingLesson(): void;
declare function StablePlayerGetTrainingLesson(): void;
/**
 * Start Training Gallop
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingGallop(Behavior: number): void;
/**
 * Start Training Walk
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingWalk(Behavior: number): void;
/**
 * Start Training Dance
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingDance(Behavior: number): void;
/**
 * Start Training Hurdle
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingHurdles(Behavior: number): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StablePlayerTrainingHurdlesEnd(): SafePromise<void>;
/**
 * Start Training Treadmill
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingTreadmill(Behavior: number): void;
/**
 * Start Training Strong Treadmill
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingStrongTreadmill(Behavior: number): void;
/**
 * Start Training Carriage
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingCarriage(Behavior: number): void;
/**
 * Start Training Strong Carriage
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingStrongCarriage(Behavior: number): void;
/**
 * Start Training Race
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingRace(Behavior: number): void;
/**
 * Start Training Strong Race
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingStrongRace(Behavior: number): void;
/**
 * Start Training Carrots - MiniGame
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingCarrots(Behavior: number): void;
/**
 * End Traning Carrots - MiniGame
 * @returns {SafePromise<void>}
 */
declare function StablePlayerTrainingCarrotsEnd(): SafePromise<void>;
/**
 * Reward for passed
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingPass(Behavior: number): void;
/**
 * Guarantee for failed
 *
 * @param {number} Behavior
 */
declare function StablePlayerTrainingFail(Behavior: number): void;
declare function StablePlayerOtherPonys(): void;
declare function StablePlayerToStable(): void;
declare function StableDressPonyStart(): void;
declare function StableBecomePonyFin(): void;
declare function StableTrainingStoped(): void;
declare function StablePlayerToHerd(): void;
declare function StableDressBackPlayer(): void;
declare function StableCheckEquipment(): void;
/**
 * Dress the Equipment to the Player
 *
 * @param {number} Behavior
 */
declare function StablePlayerWearEquipment(Behavior: number): void;
/**
 * Dress Character like a Pony
 * @param {Character} C
 */
declare function StableWearPonyEquipment(C: Character): void;
declare function StablePlayerStartExam(): void;
declare function StablePlayerExamHurdles(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StablePlayerExamHurdlesEnd(): SafePromise<void>;
declare function StablePlayerExamRace(): void;
declare function StablePlayerExamDressage(): void;
declare function StablePlayerExamPass(): void;
declare function StablePlayerExamEnd(): void;
declare function StableCanBecomeTrainer(): void;
declare function StableBecomeTrainer(): void;
/**
 * Dress as Trainer
 * @param {Character} C
 */
declare function StableWearTrainerEquipment(C: Character): void;
declare function StableTrainerStart(): void;
declare function StablePonyWearEquipment(): void;
/**
 * @param {number} probability
 */
declare function StablePonyTraining(probability: number): void;
declare function StablePonyTrainingHurdles(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StablePonyTrainingHurdlesEnd(): SafePromise<void>;
declare function StableTrainerWhip(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StableTrainerWhipEnd(): SafePromise<void>;
/**
 *
 * @param {Character | undefined} [C]
 */
declare function StablePonyStraightens(C?: Character | undefined): void;
declare function StablePlayerStartTExam(): void;
declare function StablePlayerTExamKnow(): void;
declare function StablePlayerTExamWhip(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StablePlayerTExamWhipEnd(): SafePromise<void>;
declare function StablePlayerTExamHurdles(): void;
/**
 * @returns {SafePromise<void>}
 */
declare function StablePlayerTExamHurdlesEnd(): SafePromise<void>;
declare function StablePlayerTExamPass(): void;
declare function StablePlayerTExamEnd(): void;
/**
 * @param {number} Timer
 * @param {number} S
 * @param {number} S2
 * @param {string} Item
 * @param {string} Background
 * @param {Character} Character
 * @param {Character | null} SecondCharacter
 * @param {string} Stage
 * @param {string} CurrentDialog
 * @param {string} CancelStage
 * @param {string} CancelCurrentDialog
 * @param {*} Behavior
 * @param {StableProgressType} ProgressOperation
 */
declare function StableGenericProgressStart(Timer: number, S: number, S2: number, Item: string, Background: string, Character: Character, SecondCharacter: Character | null, Stage: string, CurrentDialog: string, CancelStage: string, CancelCurrentDialog: string, Behavior: any, ProgressOperation: StableProgressType): void;
declare function StableGenericDrawProgress(): void;
declare function StableGenericFinished(): void;
declare function StableGenericCancel(): void;
declare function StableGenericProgressEnd(): void;
declare function StableKeyDown(event: KeyboardEvent): boolean;
/**
 *
 * @param {boolean} Reverse
 */
declare function StableGenericRun(Reverse: boolean): void;
declare function StableHideDice(): void;
/**
 * When the player starts a club card game
 * @returns {void} - Nothing
 */
declare function StableClubCardStart(): void;
/**
 * When the player ends a club card game
 * @returns {SafePromise<void>}
 */
declare function StableClubCardEnd(): SafePromise<void>;
/**
 * Runs the pony command from the online chat box
 * @param {string} Activity - The activity to validate
 * @returns {void} - Nothing
 */
declare function StableDoActivity(Activity: string): void;
declare var StableBackground: string;
/** @type {NPCCharacter} */
declare var StableTrainer: NPCCharacter;
/** @type {NPCCharacter} */
declare var StablePony: NPCCharacter;
declare var StablePonyPass: boolean;
declare var StablePonyFail: boolean;
/** @type {Item[] | null} */
declare var StablePlayerAppearance: Item[] | null;
/** @type {"Pony" | "Trainer" | null} */
declare var StablePlayerOutfitWorn: "Pony" | "Trainer" | null;
declare var StablePlayerTrainingActiv: boolean;
declare var StablePlayerTrainingLessons: number;
declare var StablePlayerTrainingBehavior: number;
declare var StableTrainerTrainingExercises: number;
declare var StablePlayerInIsolation: boolean;
/** @type {number} */
declare var StablePlayerInIsolationStart: number;
/** @type {number} */
declare var StablePlayerInIsolationEnd: number;
declare var StableExamPoint: number;
declare var StableProgress: number;
declare var StableSecondProgress: number;
declare var StableProgressAuto: number;
declare var StableSecondProgressAuto: number;
declare var StableProgressClick: number;
/** @type {string} */
declare var StableProgressLastKeyPress: string;
declare var StableProgressItem: string;
declare var StableProgressFinished: boolean;
/** @type {Character} */
declare var StableProgressCharacter: Character;
/** @type {Character | null} */
declare var StableProgressSecondCharacter: Character | null;
declare var StableProgressEndStage: string;
declare var StableProgressEndDialog: string;
declare var StableProgressCancelStage: string;
declare var StableProgressCancelDialog: string;
declare var StableProgressBehavior: number;
/** @type {StableProgressType | "StruggleImpossible"} */
declare var StableProgressOperation: StableProgressType | "StruggleImpossible";
declare var StableProgressStruggleCount: number;
declare var StableActivityList: string[];
