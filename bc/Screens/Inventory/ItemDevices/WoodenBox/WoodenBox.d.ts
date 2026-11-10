/** @type {ExtendedItemScriptHookCallbacks.Load<TypedItemData>} */
declare function InventoryItemDevicesWoodenBoxLoadHook(Data: TypedItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<TypedItemData>} */
declare function InventoryItemDevicesWoodenBoxDrawHook(Data: TypedItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<TypedItemData>} */
declare function InventoryItemDevicesWoodenBoxExitHook(data: TypedItemData, originalFunction: (() => void) | null): void;
/** @type {ExtendedItemScriptHookCallbacks.PublishAction<TypedItemData, any>} */
declare function InventoryItemDevicesWoodenBoxPublishActionHook(data: TypedItemData, originalFunction: ((C: Character, item: Item, newOption: any, previousOption: any) => void) | null, C: Character, item: Item, newOption: any, previousOption: any): void;
/**
 * Dynamic AfterDraw function. Draws text onto the box.
 * @type {ExtendedItemScriptHookCallbacks.AfterDraw<TypedItemData>}
 */
declare function AssetsItemDevicesWoodenBoxAfterDrawHook(_: TypedItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, { C, A, CA, X, Y, L, Property, drawCanvas, drawCanvasBlink, AlphaMasks, Color, Opacity }: DynamicDrawingData<AnimationPersistentData>): void;
