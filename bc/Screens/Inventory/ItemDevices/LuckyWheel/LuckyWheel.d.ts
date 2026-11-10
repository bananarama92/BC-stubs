declare var ItemDevicesLuckyWheelMinTexts: number;
declare var ItemDevicesLuckyWheelMaxTexts: number;
declare var ItemDevicesLuckyWheelMaxTextLength: number;
declare var ItemDevicesLuckyWheelFont: string;
declare var ItemDevicesLuckyWheelAnimationMaxSpeed: number;
declare var ItemDevicesLuckyWheelAnimationMinSpeed: number;
declare var ItemDevicesLuckyWheelAnimationSpeedStep: number;
declare var ItemDevicesLuckyWheelAnimationFrameTime: number;
/**
 * Helper to generate section labels
 * @param {number} num
 * @returns {string}
 */
declare function ItemDevicesLuckyWheelLabelForNum(num: number): string;
/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemDevicesLuckyWheelDrawHook(data: ModularItemData, next: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>} */
declare function InventoryItemDevicesLuckyWheelClickHook(data: ModularItemData, next: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Init<ModularItemData>} */
declare function InventoryItemDevicesLuckyWheelInitHook(data: ModularItemData, originalFunction: (C: Character, item: Item, push: boolean, refresh: boolean, log?: boolean | undefined) => boolean, character: Character, item: Item, push: boolean, refresh: boolean): boolean;
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemDevicesLuckyWheelg0LoadHook(data: NoArchItemData, originalFunction: () => void): void;
declare var ItemDevicesLuckyWheelRowTop: number;
declare var ItemDevicesLuckyWheelRowLeft: number;
declare var ItemDevicesLuckyWheelRowHeight: number;
declare var ItemDevicesLuckyWheelRowLength: number;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemDevicesLuckyWheelg0DrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemDevicesLuckyWheelg0ClickHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemDevicesLuckyWheelg0ExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
declare function InventoryItemDevicesLuckyWheelUpdate(): void;
declare function InventoryItemDevicesLuckyWheelTrigger(): void;
/**
 * @param {Character} C
 * @param {Item} Item
 * @param {number} Angle
 */
declare function InventoryItemDevicesLuckyWheelStoppedTurning(C: Character, Item: Item, Angle: number): void;
type LuckyWheelPersistentData = {
    AnimationAngleState?: number;
    AnimationSpeed?: number;
    ChangeTime?: number;
    LightStep?: number;
    Spinning?: boolean;
} & AnimationPersistentData;
/**
 * @typedef {{ AnimationAngleState?: number, AnimationSpeed?: number, ChangeTime?: number, LightStep?: number, Spinning?: boolean } & AnimationPersistentData} LuckyWheelPersistentData
 */
/** @type {ExtendedItemCallbacks.ScriptDraw<LuckyWheelPersistentData>} */
declare function AssetsItemDevicesLuckyWheelScriptDraw({ C, PersistentData, Item }: DynamicScriptCallbackData<LuckyWheelPersistentData>): void;
/** @type {ExtendedItemCallbacks.AfterDraw<LuckyWheelPersistentData>} */
declare function AssetsItemDevicesLuckyWheelAfterDraw({ C, PersistentData, A, CA, X, Y, L, Property, drawCanvas, drawCanvasBlink, AlphaMasks, Color, Opacity }: DynamicDrawingData<LuckyWheelPersistentData>): void;
