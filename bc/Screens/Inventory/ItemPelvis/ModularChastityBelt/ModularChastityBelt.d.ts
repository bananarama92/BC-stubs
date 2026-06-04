declare function InventoryItemPelvisModularChastityBeltDrawHook(data: ModularItemData, originalFunction: () => void): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawBase(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawIntensity(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawShockModule(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawVoiceControl(item: Item, _offset: number): void;
declare function InventoryItemPelvisModularChastityBeltDrawVoiceControlCleanup(): void;
declare function InventoryItemPelvisModularChastityBeltExitHook(data: ModularItemData, originalFunction: (() => void) | null): void;
declare function InventoryItemPelvisModularChastityBeltClickHook(data: ModularItemData, originalFunction: () => void): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickIntensity(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickVoiceControl(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemPelvisModularChastityBeltVoicePrevious(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemPelvisModularChastityBeltVoiceNext(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltVoiceControlClickSet(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltResetOrgasm(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltResetDeny(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset //How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickShockModule(C: Character, item: Item, _offset: number): void;
declare function InventoryItemPelvisModularChastityBeltScriptDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicScriptCallbackData<ModularChastityBeltPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<ModularChastityBeltPersistentData>): void;
/**
 * @param {ModularItemData} data
 * @param {Character} C
 * @param {Item} Item
 * @param {number} LastTime
 * @param {TypeRecord} ItemType
 */
declare function InventoryItemPelvisModularChastityBeltHandleChat(data: ModularItemData, C: Character, Item: Item, LastTime: number, ItemType: TypeRecord): void;
/**
 * @param {string} msg
 * @param {readonly string[]} TriggerValues
 * @returns {number[]}
 */
declare function InventoryItemPelvisModularChastityBeltDetectMsg(msg: string, TriggerValues: readonly string[]): number[];
/**
 * @param {Item} Item
 * @param {Character} C
 * @param {boolean} OrgasmDetected
 * @param {boolean} isPlayerInChatRoom
 * @param {number} ShockCooldown
 */
declare function InventoryItemPelvisModularChastityBeltCheckPunish(Item: Item, C: Character, OrgasmDetected: boolean, isPlayerInChatRoom: boolean, ShockCooldown: number): "Struggle" | "Orgasm" | "StandUp" | "StruggleOther" | null;
/**
 * @param {boolean} PunishStandup
 * @param {Character} C
 * @param {boolean} isPlayerInChatRoom
 * @param {number} ShockCooldown
 * @returns {boolean}
 */
declare function InventoryItemPelvisModularChastityBeltCheckStanding(PunishStandup: boolean, C: Character, isPlayerInChatRoom: boolean, ShockCooldown: number): boolean;
/**
 * @param {Character} C
 */
declare function InventoryItemPelvisModularChastityBeltForceKneel(C: Character): void;
declare var InventoryItemPelvisModularChastityBeltVoiceTriggers: string[];
/** @type {string[]} */
declare var InventoryItemPelvisModularChastityBeltVoiceTriggerValues: string[];
type ModularChastityBeltPersistentData = {
    Cooldown?: number;
    ShockCooldown?: number;
    LastMessage?: number;
    DenyDetected?: boolean;
    OrgasmDetected?: boolean;
    ChatroomCheck?: boolean;
    SyncNeeded?: boolean;
    SyncCooldown?: number;
} & AnimationPersistentData;
