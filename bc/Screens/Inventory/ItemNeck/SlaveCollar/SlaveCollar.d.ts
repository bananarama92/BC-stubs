declare function InventoryItemNeckSlaveCollarInitHook(data: NoArchItemData, originalFunction: (C: Character, item: Item, push: boolean, refresh: boolean) => boolean, C: Character, item: Item, push: boolean, refresh: boolean): boolean;
declare function InventoryItemNeckSlaveCollarLoadHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemNeckSlaveCollarDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemNeckSlaveCollarClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * Sets the slave collar model
 * @param {Character} C
 * @param {Item} item
 * @param {number} NewType
 */
declare function InventoryItemNeckSlaveCollarSetType(C: Character, item: Item, NewType: number): void;
declare var InventoryItemNeckSlaveCollarColorMode: boolean;
declare var InventoryItemNeckSlaveCollarOffset: number;
/** @type {{ Name: string, Property: ItemProperties & { TypeRecord: TypeRecord }, Image: AssetName }[]} */
declare var InventoryItemNeckSlaveCollarTypes: {
    Name: string;
    Property: ItemProperties & {
        TypeRecord: TypeRecord;
    };
    Image: AssetName;
}[];
