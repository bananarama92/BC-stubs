/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemNeckAccessoriesCollarAutoShockUnitDrawHook(Data: ModularItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>} */
declare function InventoryItemNeckAccessoriesCollarAutoShockUnitClickHook(Data: ModularItemData, OriginalFunction: () => void): void;
type AutoShockUnitPersistentData = {
    ChangeTime?: number;
    LastMessageLen?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ ChangeTime?: number, LastMessageLen?: number } & AnimationPersistentData} AutoShockUnitPersistentData
 */
/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<ExtendedItemData<any>, AutoShockUnitPersistentData>} */
declare function AssetsItemNeckAccessoriesCollarAutoShockUnitBeforeDrawHook(data: ExtendedItemData<any>, originalFunction: ((drawData: DynamicDrawingData<AutoShockUnitPersistentData>) => DynamicBeforeDrawOverrides) | null, drawData: DynamicDrawingData<AutoShockUnitPersistentData>): DynamicBeforeDrawOverrides;
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ExtendedItemData<any>, AutoShockUnitPersistentData>} */
declare function AssetsItemNeckAccessoriesCollarAutoShockUnitScriptDrawHook(data: ExtendedItemData<any>, originalFunction: ((drawData: DynamicScriptCallbackData<AutoShockUnitPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<AutoShockUnitPersistentData>): void;
