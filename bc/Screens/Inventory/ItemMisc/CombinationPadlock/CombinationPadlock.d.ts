declare function InventoryItemMiscCombinationPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * @param {Event} e
 */
declare function InventoryItemMiscCombinationPadlockModifyInput(e: Event): void;
declare function InventoryItemMiscCombinationPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscCombinationPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscCombinationPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
declare let CombinationPadlockPlayerIsBlind: boolean;
/** @type {number | null} */
declare let CombinationPadlockBlindCombinationOffset: number | null;
declare let CombinationPadlockCombinationLastValue: string;
declare let CombinationPadlockNewCombinationLastValue: string;
declare let CombinationPadlockLoaded: boolean;
