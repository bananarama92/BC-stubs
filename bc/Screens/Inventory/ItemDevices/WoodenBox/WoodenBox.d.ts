declare function InventoryItemDevicesWoodenBoxLoadHook(data: TypedItemData, originalFunction: () => void): void;
declare function InventoryItemDevicesWoodenBoxDrawHook(data: TypedItemData, originalFunction: () => void): void;
declare function InventoryItemDevicesWoodenBoxExitHook(data: TypedItemData, originalFunction: (() => void) | null): void;
declare function InventoryItemDevicesWoodenBoxPublishActionHook(data: TypedItemData, originalFunction: ((C: Character, item: Item, newOption: any, previousOption: any) => void) | null, C: Character, item: Item, newOption: any, previousOption: any): void;
declare function AssetsItemDevicesWoodenBoxAfterDrawHook(data: TypedItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, drawData: DynamicDrawingData<AnimationPersistentData>): void;
