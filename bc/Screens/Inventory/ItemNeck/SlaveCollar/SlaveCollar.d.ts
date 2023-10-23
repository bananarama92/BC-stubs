declare function InventoryItemNeckSlaveCollarInit(C: Character, item: Item, push: boolean, refresh: boolean): boolean;
declare function InventoryItemNeckSlaveCollarLoad(): void;
declare function InventoryItemNeckSlaveCollarDraw(): void;
declare function InventoryItemNeckSlaveCollarClick(): void;
declare function InventoryItemNeckSlaveCollarSetType(NewType: string): void;
declare var InventoryItemNeckSlaveCollarColorMode: boolean;
/** @type {ItemColor} */
declare var InventoryItemNeckSlaveCollarColor: ItemColor;
declare var InventoryItemNeckSlaveCollarOffset: number;
/** @type {{ Name: string, Property: ItemProperties & { Type: null | string }, Image: string }[]} */
declare var InventoryItemNeckSlaveCollarTypes: {
    Name: string;
    Property: ItemProperties & {
        Type: null | string;
    };
    Image: string;
}[];
