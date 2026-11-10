/** @type {ExtendedItemScriptHookCallbacks.Draw<TypedItemData | ModularItemData>} */
declare function InventoryItemBreastForbiddenChastityBraDrawHook(data: ModularItemData | TypedItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<TypedItemData | ModularItemData>} */
declare function InventoryItemBreastForbiddenChastityBraClickHook(data: ModularItemData | TypedItemData, originalFunction: () => void): void;
type ForbiddenChastityBraPersistentData = {
    UpdateTime?: number;
    CheckTime?: number;
    LastMessageLen?: number;
    LastTriggerCount?: number;
    DisplayCount?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ UpdateTime?: number, CheckTime?: number, LastMessageLen?: number, LastTriggerCount?: number, DisplayCount?: number } & AnimationPersistentData} ForbiddenChastityBraPersistentData
 */
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ModularItemData | TypedItemData, ForbiddenChastityBraPersistentData>} */
declare function AssetsItemBreastForbiddenChastityBraScriptDrawHook(data: ModularItemData | TypedItemData, originalFunction: ((drawData: DynamicScriptCallbackData<ForbiddenChastityBraPersistentData>) => void) | null, drawData: DynamicScriptCallbackData<ForbiddenChastityBraPersistentData>): void;
