/** @type {ExtendedItemScriptHookCallbacks.Draw<ExtendedItemData<any>>} */
declare function InventoryItemNeckAccessoriesCollarShockUnitDrawHook(Data: ExtendedItemData<any>, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<ExtendedItemData<any>>} */
declare function InventoryItemNeckAccessoriesCollarShockUnitClickHook(Data: ExtendedItemData<any>, OriginalFunction: () => void): void;
declare function InventoryItemNeckAccessoriesCollarShockUnitResetCount(): void;
type ShockUnitPersistentData = {
    ChangeTime?: number;
    DisplayCount?: number;
    LastTriggerCount?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ ChangeTime?: number, DisplayCount?: number, LastTriggerCount?: number } & AnimationPersistentData} ShockUnitPersistentData
 */
/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<ExtendedItemData<any>, ShockUnitPersistentData>} */
declare function AssetsItemNeckAccessoriesCollarShockUnitBeforeDrawHook(data: ExtendedItemData<any>, originalFunction: ((drawData: DynamicDrawingData<ShockUnitPersistentData>) => DynamicBeforeDrawOverrides) | null, drawData: DynamicDrawingData<ShockUnitPersistentData>): DynamicBeforeDrawOverrides;
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ExtendedItemData<any>, ShockUnitPersistentData>} */
declare function AssetsItemNeckAccessoriesCollarShockUnitScriptDrawHook(data: ExtendedItemData<any>, originalFunction: ((drawData: DynamicScriptCallbackData<ShockUnitPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<ShockUnitPersistentData>): void;
