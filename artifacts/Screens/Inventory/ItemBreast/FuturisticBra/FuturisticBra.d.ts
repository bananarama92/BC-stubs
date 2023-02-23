/**
 * @param {Character} C
 * @returns {{bpm: number, breathing: "Low" | "Med" | "High" | "Action", temp: number}}
 */
declare function InventoryItemBreastFuturisticBraUpdate(C: Character): {
    bpm: number;
    breathing: "Low" | "Med" | "High" | "Action";
    temp: number;
};
/**
 * Custom draw function for adding the `Shock` menu.
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point.
 * @returns {void} - Nothing
 */
declare function InventoryItemBreastFuturisticBraDraw(OriginalFunction: () => void): void;
declare function AssetsItemBreastFuturisticBraBeforeDraw(data: DynamicDrawingData): DynamicBeforeDrawOverrides;
declare function AssetsItemBreastFuturisticBraAfterDraw(data: DynamicDrawingData): void;
declare function AssetsItemBreastFuturisticBraScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
