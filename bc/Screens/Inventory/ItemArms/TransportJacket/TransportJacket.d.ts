declare function InventoryItemArmsTransportJacketLoadHook(data: TypedItemData, originalFunction: () => void): void;
declare function InventoryItemArmsTransportJacketDrawHook(data: TypedItemData, originalFunction: () => void): void;
declare function InventoryItemArmsTransportJacketPublishActionHook(data: TypedItemData, originalFunction: ((C: Character, item: Item, newOption: any, previousOption: any) => void) | null, C: Character, item: Item, newOption: any, previousOption: any): void;
declare function InventoryItemArmsTransportJacketExitHook(data: TypedItemData, originalFunction: (() => void) | null): void;
declare function AssetsItemArmsTransportJacketAfterDraw(drawData: DynamicDrawingData<AnimationPersistentData>): void;
