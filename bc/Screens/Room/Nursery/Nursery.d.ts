/**
 * @param {Character} character
 * @returns {boolean}
 */
declare function NurseryCanSpitOutPacifier(character?: Character): boolean;
/**
 * @param {Character} character
 * @returns {boolean}
 */
declare function NurseryIsDiapered(character?: Character): boolean;
/**
 * @param {Character} character
 * @returns {Item[]}
 */
declare function NurseryGetPacifiers(character?: Character): Item[];
/**
 * @param {Character} character
 * @returns {boolean}
 */
declare function NurseryIsPacified(character?: Character): boolean;
/**
 *
 * @param {Asset} item
 * @returns {boolean}
 */
declare function NurseryIsRestrainedPacifier(item: Asset): boolean;
declare function NurseryPlayerIsPacified(): boolean;
declare function NurseryPlayerIsHarnessPacified(): boolean;
declare function NurseryPlayerLostBinky(): boolean;
declare function NurseryPlayerLostBinkyAgain(): boolean | null;
declare function NurseryPlayerWearingBabyDress(): boolean;
declare function NurseryPlayerReadyToAppologise(): boolean;
declare function NurseryPlayerDiapered(): boolean | undefined;
declare function NurseryPlayerReadyDiapered(): boolean;
declare function NurseryPlayerCanRegress(): boolean;
declare function NurseryLoad(): Promise<void>;
declare function NurseryRun(): void;
declare function NurseryClick(): void;
declare function NurseryDrawText(): void;
declare function NurseryLoadNurse(): void;
declare function NurseryIsClothingInappropriate(): boolean;
declare function NurseryNurseOutfitForNPC(CurrentNPC: any): void;
declare function NurseryABDLOutfitForNPC(CurrentNPC: any): void;
declare function NurseryNPCRestrained(CurrentNPC: any, restraintSet: any): void;
/** Random diaper selection
 * @param {Character} character
 * @param {keyof typeof NurseryDiapers} size
 * @returns {AssetName}
 */
declare function NurseryRandomDiaper(character: Character, size: keyof typeof NurseryDiapers): AssetName;
/** Random dress selection
 * @param {Character} character
 * @returns {AssetName}
 */
declare function NurseryRandomDress(character: Character, itemPool: any): AssetName;
/** Random selection for dress colors
 * @param {Character} character
 * @param {BCColor[]} colors
 * @returns {BCColor}
 */
declare function NurseryRandomColor(character: Character, colors?: BCColor[]): BCColor;
declare function NurseryDeleteItem(): void;
declare function NurseryPlayerUndress(Cost: any): void;
/**
 * @param {Character} character
 * @returns {number}
 */
declare function NurseryGetRegressionScore(character: Character): number;
/**
 * When the player puts on diapers or has them put on
 * @param {number} domChange;
 * @param {keyof typeof NurseryDiapers} size;
 */
declare function NurseryPlayerGetsDiapered(domChange?: number, size?: keyof typeof NurseryDiapers): void;
declare function NurseryPlayerAdmitted(): void;
declare function NurseryPlayerWearBabyDress(): void;
declare function NurseryPlayerRestrained(restraintSet: any): void;
declare function NurseryPlayerRePacified(character?: PlayerCharacter): void;
declare function NurseryPlayerDePacified(): void;
declare function NurseryPlayerRedressed(): void;
declare function NurseryBadBabies(): void;
declare function NurseryPlayerSkillsAmnesia(): void;
declare function NurseryReplaceSkill(): void;
declare function NurseryPlayerChangeDress(): void;
declare function NurseryPlayerChangeDressColor(): void;
declare function NurseryPlayerRemoveDress(): void;
/**
 * Player gives an adorable ABDL reply
 */
declare function NurseryPlayerCuteReply(): void;
declare function NurseryEscapeGate(): void;
declare function NurseryPlayerForgiven(): void;
declare function NurseryPlayerReadmitted(): void;
declare function NurseryPlayerRemoveCloth(): void;
declare function NurseryPlayerNeedsPunishing(severity: any): void;
declare function NurseryPlayerPunished(severity: any): void;
declare function NurseryGoodBehaviour(): void;
declare var NurseryBackground: string;
/** @type {null | string} */
declare var NurserySituation: null | string;
declare var NurseryJustClicked: null;
/** @type {null | NPCCharacter} */
declare var NurseryNurse: null | NPCCharacter;
/** @type {null | NPCCharacter} */
declare var NurseryABDL1: null | NPCCharacter;
/** @type {null | NPCCharacter} */
declare var NurseryABDL2: null | NPCCharacter;
/** 0 = Good girl; 1 = ready to be forgiven; >= 2 = severity of naughtiness. */
declare var NurseryPlayerBadBabyStatus: number;
declare var NurseryCoolDownTime: number;
/** @type {null | Item[]} */
declare var NurseryPlayerAppearance: null | Item[];
declare var RandomNumber: number;
/** @type {null | BCColor} */
/** @type {null | boolean} */
declare var NurseryPlayerKeepsLoosingBinky: null | boolean;
declare const NurseryLeaveMessages: Readonly<{
    EasyEscape: "EasyEscape";
    NoEasyEscape: "NoEasyEscape";
    EscapeSuccess: "EscapeSuccess";
    EscapeFailQuietly: "EscapeFailQuietly";
    EscapeFailQuietlyAndVibrator: "EscapeFailQuietlyAndVibrator";
    EscapeFailNoisy: "EscapeFailNoisy";
    EscapeFailNoisyAndVibrator: "EscapeFailNoisyAndVibrator";
}>;
/** @type {BCColor[]} */
declare const NurseryDressColors: BCColor[];
/** @type {BCColor[]} */
declare const NurseryDiaperColors: BCColor[];
/** @type {AssetName[]} */
declare let NurseryDresses: AssetName[];
/** @type {{Small: AssetName[], Medium: AssetName[], Large: AssetName[]}} */
declare let NurseryDiapers: {
    Small: AssetName[];
    Medium: AssetName[];
    Large: AssetName[];
};
/** @type {{Normal: AssetName[], Restrained: AssetName[]}} */
declare let NurseryPacifiers: {
    Normal: AssetName[];
    Restrained: AssetName[];
};
/**
 * message about nursery gate
 * @type {null | boolean}
 */
declare var NurseryGateMsg: null | boolean;
/**
 * message about ease of opening nursery gate
 * @type {keyof typeof NurseryLeaveMessages | null}
 */
declare var NurseryLeaveMessage: keyof typeof NurseryLeaveMessages | null;
/** @type {null | number} */
declare var NurseryEscapeAttempts: null | number;
/** @type {null | number} */
declare var NurseryRepeatOffender: null | number;
