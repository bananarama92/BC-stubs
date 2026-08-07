declare function InventoryItemVulvaTechnoChastityCageDrawHook(data: ModularItemData, originalFunction: () => void): void;
declare function InventoryItemVulvaTechnoChastityCageClickHook(data: ModularItemData, originalFunction: () => void): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemVulvaChastityCageDrawVoiceControl(item: Item, _offset: number): void;
declare function InventoryItemVulvaTechnoChastityCageDrawVoiceControlCleanup(): void;
declare function InventoryItemVulvaTechnoChastityCageExitHook(data: ModularItemData, originalFunction: (() => void) | null): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemVulvaTechnoChastityCageClickVoiceControl(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemVulvaChastityCageVoiceControlClickSet(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemVulvaTechnoChastityCageVoicePrevious(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemVulvaTechnoChastityCageVoiceNext(C: Character, item: Item): void;
declare function InventoryItemVulvaChastityCageScriptDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicScriptCallbackData<TechnoChastityCagePersistentData>) => void) | null, drawData: DynamicScriptCallbackData<TechnoChastityCagePersistentData>): void;
/**
 * @param {Item} item
 */
declare function InventoryItemVulvaTechnoChastityCagePropertiesCheck(item: Item): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemVulvaChastityCageScriptDrawArousalPunishment(item: Item, _offset: number): void;
/**
 * @param {ItemVulvaChastityCageExcitementLevel} current
 * @returns {ItemVulvaChastityCageExcitementLevel}
 */
declare function InventoryItemVulvaChastityCagePreviousArousalPunishmentMode(current: ItemVulvaChastityCageExcitementLevel): ItemVulvaChastityCageExcitementLevel;
/**
 * @param {ItemVulvaChastityCageExcitementLevel} current
 * @returns {ItemVulvaChastityCageExcitementLevel}
 */
declare function InventoryItemVulvaChastityCageNextArousalPunishmentMode(current: ItemVulvaChastityCageExcitementLevel): ItemVulvaChastityCageExcitementLevel;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemVulvaChastityCageClickArousalPunishment(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemVulvaChastityCageArousalPrevious(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemVulvaChastityCageArousalNext(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {ItemVulvaChastityCageExcitementLevel} Mode
 */
declare function InventoryItemVulvaChastityCageSetArousalMode(C: Character, item: Item, Mode: ItemVulvaChastityCageExcitementLevel): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {TypeRecord} itemType
 */
declare function InventoryItemVulvaChastityCageShrinkCheck(C: Character, item: Item, itemType: TypeRecord): void;
/**
 * @param {Item} item
 * @returns {ItemVulvaChastityCageArousalPunishmentType}
 */
declare function InventoryItemVulvaChastityCageArousalPunishmentResult(item: Item): ItemVulvaChastityCageArousalPunishmentType;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {TypeRecord} itemType
 * @param {string} punishmentResult
 */
declare function InventoryItemVulvaChastityCageArousalPunishmentRun(C: Character, item: Item, itemType: TypeRecord, punishmentResult: string): void;
/** @type {VoiceTriggerType[]} */
declare var InventoryItemVulvaTechnoChastityCageVoiceTriggers: VoiceTriggerType[];
/** @type {string[]} */
declare var InventoryItemVulvaTechnoChastityCageVoiceTriggerValues: string[];
/** @type {{EXCITED: "Excited", AROUSED: "Aroused", HORNY: "Horny"}} */
declare const ItemVulvaChastityCageExcitementLevel: {
    EXCITED: "Excited";
    AROUSED: "Aroused";
    HORNY: "Horny";
};
declare const ItemVulvaChastityCageExcitementLevels: ("Horny" | "Excited" | "Aroused")[];
/** @type {Record<ItemVulvaChastityCageExcitementLevel, number>} */
declare const ItemVulvaChastityCageExcitementLevelThresholdMap: Record<ItemVulvaChastityCageExcitementLevel, number>;
/**
 * @param {ItemVulvaChastityCageExcitementLevel} currentPunishmentMode
 */
declare function ItemVulvaTechnoChastityCageGetArousalThreshold(currentPunishmentMode: ItemVulvaChastityCageExcitementLevel): number;
type TechnoChastityCagePersistentData = {
    NextShrinkTime?: number;
    LastShrinkWarningTime?: number;
    ShrinkCooldown?: number;
} & ModularChastityBeltPersistentData;
