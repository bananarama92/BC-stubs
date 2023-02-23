declare function AssetsItemDevicesKennelBeforeDraw(data: DynamicDrawingData): DynamicBeforeDrawOverrides;
declare function AssetsItemDevicesKennelScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
/**
 * @param {Character} C
 * @returns {string}
 */
declare function InventoryItemDevicesKennelGetAudio(C: Character): string;
