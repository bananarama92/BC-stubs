declare function InventoryItemDevicesFuturisticCrateDevice1Load(): void;
declare function InventoryItemDevicesFuturisticCrateDevice1Draw(): void;
declare function InventoryItemDevicesFuturisticCrateDevice1Click(): void;
declare function InventoryItemDevicesFuturisticCrateDevice1Exit(): void;
declare function AssetsItemDevicesFuturisticCrateBeforeDraw(data: DynamicDrawingData): DynamicBeforeDrawOverrides;
declare function AssetsItemDevicesFuturisticCrateScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
