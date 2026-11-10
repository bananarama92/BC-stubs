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
/** @type {ExtendedItemScriptHookCallbacks.Init<NoArchItemData>} */
declare function InventoryItemNeckSlaveCollarInitHook(data: NoArchItemData, originalFunction: (C: Character, item: Item, push: boolean, refresh: boolean, log?: boolean | undefined) => boolean, C: Character, item: Item, push: boolean, refresh: boolean): boolean;
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemNeckSlaveCollarLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemNeckSlaveCollarDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemNeckSlaveCollarClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * Sets the slave collar model
 * @param {Character} C
 * @param {Item} item
 * @param {number} NewType
 */
declare function InventoryItemNeckSlaveCollarSetType(C: Character, item: Item, NewType: number): void;
