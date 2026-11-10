/** @type {VoiceTriggerType[]} */
declare var InventoryItemPelvisModularChastityBeltVoiceTriggers: VoiceTriggerType[];
/** @type {string[]} */
declare var InventoryItemPelvisModularChastityBeltVoiceTriggerValues: string[];
/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemPelvisModularChastityBeltDrawHook(data: ModularItemData, OriginalFunction: () => void): void;
/**
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawBase(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawIntensity(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawShockModule(item: Item, _offset: number): void;
/**
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltDrawVoiceControl(item: Item, _offset: number): void;
declare function InventoryItemPelvisModularChastityBeltDrawVoiceControlCleanup(): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<ModularItemData>} */
declare function InventoryItemPelvisModularChastityBeltExitHook(data: ModularItemData, originalFunction: (() => void) | null): void;
/**
 * @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>}
 */
declare function InventoryItemPelvisModularChastityBeltClickHook(data: ModularItemData, OriginalFunction: () => void): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickIntensity(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickVoiceControl(C: Character, item: Item, _offset: number): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns {void}
 */
declare function InventoryItemPelvisModularChastityBeltVoicePrevious(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns {void}
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
 * @param {number} _offset - How many pixels down will the UI be shifted
 */
declare function InventoryItemPelvisModularChastityBeltClickShockModule(C: Character, item: Item, _offset: number): void;
type ModularChastityBeltPersistentData = {
    Cooldown?: number;
    LastMessage?: number;
    DenyDetected?: boolean;
    OrgasmDetected?: boolean;
    ChatroomCheck?: boolean;
    SyncNeeded?: boolean;
    SyncCooldown?: number;
} & AnimationPersistentData;
/**
 * @typedef {{Cooldown?: number, LastMessage?: number, DenyDetected?: boolean, OrgasmDetected?: boolean, ChatroomCheck?: boolean, SyncNeeded?: boolean, SyncCooldown?: number} & AnimationPersistentData} ModularChastityBeltPersistentData
 */
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ModularItemData, ModularChastityBeltPersistentData>} */
declare function InventoryItemPelvisModularChastityBeltScriptDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicScriptCallbackData<ModularChastityBeltPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<ModularChastityBeltPersistentData>): void;
/**
 * @param {ModularChastityBeltPersistentData} persistentData
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltPropertiesCheck(persistentData: ModularChastityBeltPersistentData, item: Item): void;
/**
 * @param {ModularChastityBeltPersistentData} persistentData
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltCooldownCheck(persistentData: ModularChastityBeltPersistentData, item: Item): void;
/**
 * @param {ModularChastityBeltPersistentData} persistentData
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemPelvisModularChastityBeltNeedSync(persistentData: ModularChastityBeltPersistentData, C: Character, item: Item): void;
/**
 * @param {ModularChastityBeltPersistentData} persistentData
 * @param {Character} C
 * @param {ItemProperties} property
 */
declare function InventoryItemPelvisModularChastityBeltOrgasmCheck(persistentData: ModularChastityBeltPersistentData, C: Character, property: ItemProperties): void;
/**
 * @param {ModularChastityBeltPersistentData} persistentData
 * @param {Character} C
 * @param {Item} item
 * @param {TypeRecord} itemType
 * @param {VoiceTriggerType[]} voiceTriggers
 */
declare function InventoryItemPelvisModularChastityBeltVoiceControlCheck(persistentData: ModularChastityBeltPersistentData, C: Character, item: Item, itemType: TypeRecord, voiceTriggers: VoiceTriggerType[]): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {TypeRecord} itemType
 */
declare function InventoryItemPelvisModularChastityBeltShockCheck(C: Character, item: Item, itemType: TypeRecord): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {VoiceTriggerType[]} triggers
 */
declare function InventoryItemPelvisModularChastityBeltHandleChat(C: Character, item: Item, triggers: VoiceTriggerType[]): void;
/**
 * @param {Character} C
 */
declare function InventoryItemPelvisModularChastityBeltForceKneel(C: Character): void;
