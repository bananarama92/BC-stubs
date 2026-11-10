/** @type {(readonly AssetName[]) | null} */
declare let InventoryItemDevicesBarStoolDecalNames: (readonly AssetName[]) | null;
/**
 * The top of the seat, an oval seen from above, per style (`s0` modern, `s1` dirty, `s2` wooden), relative to the `Decal` layer
 * @type {readonly { centerY: number, width: number, height: number }[]}
 */
declare const InventoryItemDevicesBarStoolSeatTop: readonly {
    centerY: number;
    width: number;
    height: number;
}[];
/** The horizontal center of the stool, relative to the `Decal` layer */
declare const InventoryItemDevicesBarStoolCenterX = 250;
/** The size of the stool's image layers; the decal is drawn on a canvas of that size so it transforms like them */
declare const InventoryItemDevicesBarStoolLayerSize: readonly [500, 445];
/**
 * The decals that can go on the seat, see {@link AssetGetDecals}, so new decals show up on the stool without any change here.
 * Option `d0` is no decal, option `d<n>` the n-th decal of this list.
 * Only available once the `Decals` group has loaded, which is before the stool's own group.
 * @returns {readonly AssetName[]}
 */
declare function InventoryItemDevicesBarStoolDecals(): readonly AssetName[];
/**
 * The stool's `Decal` module. Its options are only read when the stool loads (see {@link AssetBuildExtended}),
 * after the decals they are made from.
 * @type {ModularItemModuleConfig}
 */
declare const InventoryItemDevicesBarStoolDecalModule: ModularItemModuleConfig;
/**
 * Gets the decal on a bar stool
 * @param {Item} item - The bar stool
 * @returns {Asset | null} - The decal, from the `Decals` group
 */
declare function InventoryItemDevicesBarStoolGetDecal(item: Item): Asset | null;
/**
 * Gets the image of a decal
 * @param {Asset} decal
 * @returns {string}
 */
declare function InventoryItemDevicesBarStoolDecalImage(decal: Asset): string;
/**
 * Draws the decal on the top of the seat
 * @type {ExtendedItemScriptHookCallbacks.AfterDraw<ModularItemData>}
 */
declare function AssetsItemDevicesBarStoolAfterDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicDrawingData<AnimationPersistentData>) => void) | null, { C, A, CA, X, Y, L, Property, Color, drawCanvas, drawCanvasBlink, AlphaMasks }: DynamicDrawingData<AnimationPersistentData>): void;
type BarStoolPersistentData = {
    DrawnImage?: string | null;
} & AnimationPersistentData;
/**
 * @typedef {{ DrawnImage?: string | null } & AnimationPersistentData} BarStoolPersistentData
 */
/**
 * Redraws the character once the decal's image has loaded
 * @type {ExtendedItemScriptHookCallbacks.ScriptDraw<ModularItemData, BarStoolPersistentData>}
 */
declare function AssetsItemDevicesBarStoolScriptDrawHook(data: ModularItemData, originalFunction: ((drawData: DynamicScriptCallbackData<BarStoolPersistentData>) => void) | null, { C, Item, PersistentData }: DynamicScriptCallbackData<BarStoolPersistentData>): void;
