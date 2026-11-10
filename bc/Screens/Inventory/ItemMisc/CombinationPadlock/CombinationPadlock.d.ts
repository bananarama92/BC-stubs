declare let CombinationPadlockPlayerIsBlind: boolean;
/** @type {number | null} */
declare let CombinationPadlockBlindCombinationOffset: number | null;
declare let CombinationPadlockCombinationLastValue: string;
declare let CombinationPadlockNewCombinationLastValue: string;
declare let CombinationPadlockLoaded: boolean;
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemMiscCombinationPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * @param {Event} e
 */
declare function InventoryItemMiscCombinationPadlockModifyInput(e: Event): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemMiscCombinationPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemMiscCombinationPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemMiscCombinationPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
