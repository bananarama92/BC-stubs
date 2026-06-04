declare function InventoryItemMiscPasswordPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscPasswordPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 *
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemMiscPasswordPadlockDrawControls(C: Character, item: Item): void;
declare function InventoryItemMiscPasswordPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 *
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemMiscPasswordPadlockControlsClick(C: Character, item: Item): void;
/**
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemMiscPasswordPadlockHandleOpenClick(C: Character, item: Item): void;
/**
 *
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemMiscPasswordPadlockHandleFirstSet(C: Character, item: Item): void;
declare function InventoryItemMiscPasswordPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
/**
 *
 * @param {Item} item
 * @returns {boolean}
 */
declare function InventoryItemMiscPasswordPadlockIsSet(item: Item): boolean;
/**
 *
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemMiscPasswordPadlockPublishPasswordChange(C: Character, item: Item): void;
declare const InventoryItemMiscPasswordPadlockPasswordRegex: RegExp;
