/**
 * @param {Character} C
 * @returns {{bpm: number, breathing: "Low" | "Med" | "High" | "Action", temp: number}}
 */
declare function InventoryItemBreastFuturisticBraUpdate(C: Character): {
    bpm: number;
    breathing: "Low" | "Med" | "High" | "Action";
    temp: number;
};
/** @type {ExtendedItemScriptHookCallbacks.Draw<TypedItemData>} */
declare function InventoryItemBreastFuturisticBraDrawHook(Data: TypedItemData, OriginalFunction: () => void): void;
type FuturisticBraPersistentData = {
    UpdateTime?: number;
    ShowHeart?: boolean;
} & AnimationPersistentData;
/**
 * @typedef {{ UpdateTime?: number, ShowHeart?: boolean } & AnimationPersistentData} FuturisticBraPersistentData
 */
/** @type {ExtendedItemCallbacks.BeforeDraw<FuturisticBraPersistentData>} */
declare function AssetsItemBreastFuturisticBraBeforeDraw(data: DynamicDrawingData<FuturisticBraPersistentData>): DynamicBeforeDrawOverrides | undefined;
/** @type {ExtendedItemCallbacks.AfterDraw<FuturisticBraPersistentData>} */
declare function AssetsItemBreastFuturisticBraAfterDraw({ C, A, X, Y, Property, drawCanvas, drawCanvasBlink, AlphaMasks, L, G, Color }: DynamicDrawingData<FuturisticBraPersistentData>): void;
/** @type {ExtendedItemCallbacks.ScriptDraw<FuturisticBraPersistentData>} */
declare function AssetsItemBreastFuturisticBraScriptDraw(data: DynamicScriptCallbackData<FuturisticBraPersistentData>): void;
