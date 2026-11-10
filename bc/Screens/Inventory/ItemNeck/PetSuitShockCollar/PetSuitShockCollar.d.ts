/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemNeckPetSuitShockCollars1DrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemNeckPetSuitShockCollars1ClickHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemNeckPetSuitShockCollarResetCount(): void;
type PetSuitShockCollarPersistentData = {
    UpdateTime?: number;
    CheckTime?: number;
    LastMessageLen?: number;
    LastTriggerCount?: number;
    DisplayCount?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ UpdateTime?: number, CheckTime?: number, LastMessageLen?: number, LastTriggerCount?: number, DisplayCount?: number } & AnimationPersistentData} PetSuitShockCollarPersistentData
 */
/** @type {ExtendedItemCallbacks.BeforeDraw<PetSuitShockCollarPersistentData>} */
declare function AssetsItemNeckPetSuitShockCollarBeforeDraw(data: DynamicDrawingData<PetSuitShockCollarPersistentData>): DynamicBeforeDrawOverrides | undefined;
/**
 * @param {Item} Item
 * @param {Character} C
 */
declare function InventoryPetSuitShockCollarCheckPunish(Item: Item, C: Character): "" | "Activity" | "StandUp" | "Struggle";
/**
 * @param {DynamicScriptCallbackData<FuturisticChastityBeltPersistentData>} data
 * @param {number} LastTime
 */
declare function AssetsItemNeckPetSuitShockCollarUpdate(data: DynamicScriptCallbackData<FuturisticChastityBeltPersistentData>, LastTime: number): void;
/** @type {ExtendedItemCallbacks.ScriptDraw<PetSuitShockCollarPersistentData>} */
declare function AssetsItemNeckPetSuitShockCollarScriptDraw(data: DynamicScriptCallbackData<PetSuitShockCollarPersistentData>): void;
