/**
 * Construct an array with X & Y coordinates for the name tag extended item menu.
 * @param {number} Count - The number of buttons
 * @param {number} X
 * @param {number} Y
 * @returns {ExtendedItemConfigDrawData<{}>} - The array with X & Y coordinates
 */
declare function InventoryItemNeckAccessoriesCollarNameTagGetDrawData(Count: number, X?: number, Y?: number): ExtendedItemConfigDrawData<{}>;
/** @type {ExtendedItemScriptHookCallbacks.PublishAction<TypedItemData, TypedItemOption>} */
declare function InventoryItemNeckAccessoriesCollarNameTagPublishActionHook(data: TypedItemData, OriginalFunction: ((C: Character, item: Item, newOption: TypedItemOption, previousOption: TypedItemOption) => void) | null, C: Character, item: Item, newOption: TypedItemOption, previousOption: TypedItemOption): void;
