declare var InventoryItemMiscHighSecurityPadlockPlayerCanUnlock: boolean;
declare var HighSecurityPadlockConfigOwner: boolean;
declare var HighSecurityPadlockConfigLover: boolean;
declare var HighSecurityPadlockConfigWhitelist: boolean;
/** @type {ExtendedItemScriptHookCallbacks.Init<NoArchItemData>} */
declare function InventoryItemMiscHighSecurityPadlockInitHook({ asset }: NoArchItemData, originalFunction: (C: Character, item: Item, push: boolean, refresh: boolean, log?: boolean | undefined) => boolean, C: Character, item: Item, push: boolean, refresh: boolean): boolean;
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemMiscHighSecurityPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @returns {boolean}
 */
declare function InventoryItemMiscHighSecurityPadlockPlayerHasKeys(C: Character, item: Item): boolean;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemMiscHighSecurityPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemMiscHighSecurityPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemMiscHighSecurityPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
