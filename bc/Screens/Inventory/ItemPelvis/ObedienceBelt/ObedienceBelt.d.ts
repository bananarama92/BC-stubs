/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemPelvisObedienceBelts1DrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemPelvisObedienceBelts1ClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * @param {Item} Item
 * @param {Character} C
 */
declare function InventoryObedienceBeltCheckPunish(Item: Item, C: Character): "" | "Orgasm" | "StandUp" | "Struggle";
/**
 * @param {DynamicScriptCallbackData<ObedienceBeltPersistentData>} data
 * @param {number} LastTime
 */
declare function AssetsItemPelvisObedienceBeltUpdate(data: DynamicScriptCallbackData<ObedienceBeltPersistentData>, LastTime: number): void;
type ObedienceBeltPersistentData = {
    UpdateTime?: number;
    LastMessageLen?: number;
    CheckTime?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ UpdateTime?: number, LastMessageLen?: number, CheckTime?: number } & AnimationPersistentData} ObedienceBeltPersistentData
 */
/** @type {ExtendedItemCallbacks.ScriptDraw<ObedienceBeltPersistentData>} */
declare function AssetsItemPelvisObedienceBeltScriptDraw(data: DynamicScriptCallbackData<ObedienceBeltPersistentData>): void;
/** @type {ExtendedItemScriptHookCallbacks.AfterDraw<TextItemData, ObedienceBeltPersistentData>} */
declare function AssetsItemPelvisObedienceBeltAfterDrawHook(data: TextItemData, originalFunction: ((drawData: DynamicDrawingData<ObedienceBeltPersistentData>) => void) | null, { C, A, CA, X, Y, drawCanvas, drawCanvasBlink, AlphaMasks, L, Color }: DynamicDrawingData<ObedienceBeltPersistentData>): void;
