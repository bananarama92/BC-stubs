declare const InventoryItemMiscPasswordPadlockPasswordRegex: RegExp;
/**
 *
 * @param {Character} C
 * @param {Item} item
 * @returns
 */
declare function InventoryItemMiscPasswordPadlockDrawControls(C: Character, item: Item): void;
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
