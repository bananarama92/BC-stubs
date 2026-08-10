declare var InventoryItemNeckSlaveCollarColorMode: boolean;
declare var InventoryItemNeckSlaveCollarOffset: number;
/** @type {{ Name: string, Property: ItemProperties & { TypeRecord: TypeRecord }, Image: string }[]} */
declare var InventoryItemNeckSlaveCollarTypes: {
    Name: string;
    Property: ItemProperties & {
        TypeRecord: TypeRecord;
    };
    Image: string;
}[];
/**
 * Sets the slave collar model
 * @param {Character} C
 * @param {Item} item
 * @param {number} NewType
 */
declare function InventoryItemNeckSlaveCollarSetType(C: Character, item: Item, NewType: number): void;
