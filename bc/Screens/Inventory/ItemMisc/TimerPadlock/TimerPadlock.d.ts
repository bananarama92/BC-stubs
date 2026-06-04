declare function InventoryItemMiscTimerPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 *
 * @param {Character} C
 * @param {Item} item
 * @param {Item} lockItem
 */
declare function InventoryItemMiscTimerPadlockReset(C: Character, item: Item, lockItem: Item): void;
