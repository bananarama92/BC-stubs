declare function InventoryItemDevicesKabeshiriWallLoadHook(data: ModularItemData, originalFunction: () => void): void;
declare function InventoryItemDevicesKabeshiriWallDrawHook(data: ModularItemData, originalFunction: () => void): void;
declare function InventoryItemDevicesKabeshiriWallPublishActionHook(data: ModularItemData, originalFunction: ((C: Character, item: Item, newOption: any, previousOption: any) => void) | null, C: Character, item: Item, newOption: any, previousOption: any): void;
declare function InventoryItemDevicesKabeshiriWallExitHook(data: ModularItemData, originalFunction: (() => void) | null): void;
declare function AssetsItemDevicesKabeshiriWallAfterDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, drawData: DynamicDrawingData<AnimationPersistentData>): void;
