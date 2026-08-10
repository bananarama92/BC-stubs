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
declare var ItemDevicesLuckyWheelRowTop: number;
declare var ItemDevicesLuckyWheelRowLeft: number;
declare var ItemDevicesLuckyWheelRowHeight: number;
declare var ItemDevicesLuckyWheelRowLength: number;
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
