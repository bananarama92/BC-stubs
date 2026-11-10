/** @type {ExtendedItemScriptHookCallbacks.Load<TypedItemData>} */
declare function InventorySuitLatexCatsuitLoadHook(Data: TypedItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<TypedItemData>} */
declare function InventorySuitLatexCatsuitDrawHook(Data: TypedItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.PublishAction<TypedItemData, any>} */
declare function InventorySuitLatexCatsuitPublishActionHook(data: TypedItemData, originalFunction: ((C: Character, item: Item, newOption: any, previousOption: any) => void) | null, C: Character, item: Item, newOption: any, previousOption: any): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<TypedItemData>} */
declare function InventorySuitLatexCatsuitExitHook(Data: TypedItemData, OriginalFunction: (() => void) | null): void;
/** @type {ExtendedItemCallbacks.AfterDraw} */
declare function AssetsSuitLatexCatsuitAfterDraw({ C, A, CA, X, Y, L, drawCanvas, drawCanvasBlink, AlphaMasks, Color }: DynamicDrawingData<AnimationPersistentData>): void;
