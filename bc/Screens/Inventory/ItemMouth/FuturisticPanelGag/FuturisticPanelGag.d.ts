/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemMouthFuturisticPanelGagDrawHook(Data: ModularItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>} */
declare function InventoryItemMouthFuturisticPanelGagClickHook(Data: ModularItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.SetOption<ModularItemData, ModularItemOption>} */
declare function InventoryItemMouthFuturisticPanelGagSetOptionHook(data: ModularItemData, originalFunction: ((C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean) => void) | null, C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean): void;
/**
 * Send message for an automatic gag inflation.
 * @param {Character} C - The selected character
 * @param {Item} Item - The item in question
 * @param {string} OptionName - The name of the newly choosen option within the `Gag` module
 * @param {boolean} Deflate - Whether the gag is deflated or not
 * @returns {void} Nothing
 */
declare function InventoryItemMouthFuturisticPanelGagPublishActionTrigger(C: Character, Item: Item, OptionName: string, Deflate: boolean): void;
/**
 * Helper function for handling automatic gag inflation and deflation.
 * @param {ModularItemData} data
 * @param {Character} C - The selected character
 * @param {Item} Item - The item in question
 * @param {ModularItemOption} previousOption
 * @param {ModularItemModule} module
 * @param {boolean} Deflate - Whether this function is triggered by an automatic deflation or not
 * @returns {ModularItemOption}
 */
declare function InventoryItemMouthFuturisticPanelGagTriggerGetOptions(data: ModularItemData, C: Character, Item: Item, previousOption: ModularItemOption, module: ModularItemModule, Deflate: boolean): ModularItemOption;
/**
 * Helper function for handling automatic gag inflation and deflation.
 * @param {ModularItemData} data
 * @param {Character} C - The selected character
 * @param {Item} Item - The item in question
 * @param {boolean} Deflate - Whether this function is triggered by an automatic deflation or not
 * @returns {void}
 */
declare function InventoryItemMouthFuturisticPanelGagTrigger(data: ModularItemData, C: Character, Item: Item, Deflate: boolean): void;
type FuturisticPanelGagPersistentData = {
    LastMessageLen?: number;
    UpdateTime?: number;
    ChangeTime?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ LastMessageLen?: number, UpdateTime?: number, ChangeTime?: number } & AnimationPersistentData} FuturisticPanelGagPersistentData
 */
/**
 * @param {ModularItemData} data
 * @param {DynamicScriptCallbackData<FuturisticPanelGagPersistentData>} drawData
 */
declare function AssetsItemMouthFuturisticPanelGagScriptUpdatePlayer(data: ModularItemData, drawData: DynamicScriptCallbackData<FuturisticPanelGagPersistentData>): void;
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ModularItemData, FuturisticPanelGagPersistentData>} */
declare function AssetsItemMouthFuturisticPanelGagScriptDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicScriptCallbackData<FuturisticPanelGagPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<FuturisticPanelGagPersistentData>): void;
/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<ModularItemData, FuturisticPanelGagPersistentData>} */
declare function AssetsItemMouthFuturisticPanelGagBeforeDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicDrawingData<FuturisticPanelGagPersistentData>) => DynamicBeforeDrawOverrides) | null, drawData: DynamicDrawingData<FuturisticPanelGagPersistentData>): DynamicBeforeDrawOverrides;
