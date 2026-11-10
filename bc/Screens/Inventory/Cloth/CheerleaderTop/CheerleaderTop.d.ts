declare const AssetsClothCheerleaderTopData: {
    readonly _Small: {
        readonly shearFactor: 0.78;
        readonly width: 100;
        readonly yOffset: 70;
    };
    readonly _Normal: {
        readonly shearFactor: 0.76;
        readonly width: 110;
        readonly yOffset: 78;
    };
    readonly _Large: {
        readonly shearFactor: 0.74;
        readonly width: 120;
        readonly yOffset: 84;
    };
    readonly _XLarge: {
        readonly shearFactor: 0.72;
        readonly width: 130;
        readonly yOffset: 84;
    };
};
/** @type {ExtendedItemScriptHookCallbacks.AfterDraw<TextItemData>} */
declare function AssetsClothCheerleaderTopAfterDrawHook(data: TextItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, { CA, C, A, G, X, Y, L, drawCanvas, drawCanvasBlink, AlphaMasks, Color }: DynamicDrawingData<AnimationPersistentData>): void;
