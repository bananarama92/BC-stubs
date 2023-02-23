declare function InventoryItemPelvisObedienceBeltEngraving0Load(): void;
declare function InventoryItemPelvisObedienceBeltEngraving0Draw(): void;
declare function InventoryItemPelvisObedienceBeltEngraving0Click(): void;
declare function InventoryItemPelvisObedienceBeltEngraving0Exit(): void;
declare function InventoryItemPelvisObedienceBeltShockModule1Load(): void;
declare function InventoryItemPelvisObedienceBeltShockModule1Draw(): void;
declare function InventoryItemPelvisObedienceBeltShockModule1Click(): void;
declare function InventoryItemPelvisObedienceBeltShockModule1Exit(): void;
/**
 * @param {Item} Item
 */
declare function InventoryObedienceBeltCheckPunish(Item: Item): "" | "Orgasm" | "StandUp";
declare function AssetsItemPelvisObedienceBeltUpdate(data: any, LastTime: any): void;
declare function AssetsItemPelvisObedienceBeltScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
declare function AssetsItemPelvisObedienceBeltAfterDraw(data: DynamicDrawingData): void;
