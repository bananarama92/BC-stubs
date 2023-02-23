/**
 * Draw the item extension screen
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point.
 * @returns {void} Nothing
 */
declare function InventoryItemNeckAccessoriesCollarShockUnitDrawFunc(OriginalFunction: () => void): void;
/**
 * Catches the item extension clicks
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point.
 * @returns {void} Nothing
 */
declare function InventoryItemNeckAccessoriesCollarShockUnitClickFunc(OriginalFunction: () => void): void;
declare function InventoryItemNeckAccessoriesCollarShockUnitResetCount(): void;
declare function AssetsItemNeckAccessoriesCollarShockUnitBeforeDraw(data: DynamicDrawingData): DynamicBeforeDrawOverrides;
declare function AssetsItemNeckAccessoriesCollarShockUnitScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
