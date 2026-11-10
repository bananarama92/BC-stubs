/**
 * Post-render drawing function. Draws custom text in a slight arc to mimic the
 * curvature of the character's head.
 * @type {ExtendedItemScriptHookCallbacks.AfterDraw<TextItemData>}
 */
declare function AssetsItemHoodCanvasHoodAfterDrawHook(data: TextItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, { C, A, CA, X, Y, L, drawCanvas, drawCanvasBlink, AlphaMasks, Color }: DynamicDrawingData<AnimationPersistentData>): void;
