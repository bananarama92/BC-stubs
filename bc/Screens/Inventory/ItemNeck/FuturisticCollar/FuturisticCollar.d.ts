declare var FuturisticCollarPage: number;
declare var FuturisticCollarMaxPage: number;
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemNeckFuturisticCollarLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemNeckFuturisticCollarDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemNeckFuturisticCollarExitHook(): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemNeckFuturisticCollarClickHook(data: NoArchItemData, originalFunction: () => void): void;
/**
 * @param {Character} C
 * @param {AssetLockType} LockType
 * @returns {boolean}
 */
declare function InventoryItemNeckFuturisticCollarCanLock(C: Character, LockType: AssetLockType): boolean;
/**
 * @param {Character} C
 * @param {boolean} [OnlyUnlockable]
 * @returns {Item[]}
 */
declare function InventoryItemNeckFuturisticCollarGetItems(C: Character, OnlyUnlockable?: boolean): Item[];
/**
 * @param {Character} C
 * @param {AssetLockType} LockType
 */
declare function InventoryItemNeckFuturisticCollarLockdown(C: Character, LockType: AssetLockType): void;
/**
 * @param {Character} C
 * @param {Item} Item
 * @param {Item} LockItem
 * @param {boolean} Attempt
 * @returns {boolean}
 */
declare function InventoryItemNeckFuturisticCollarCanUnlock(C: Character, Item: Item, LockItem: Item, Attempt: boolean): boolean;
/**
 * @param {Character} C
 */
declare function InventoryItemNeckFuturisticCollarUnlock(C: Character): void;
/**
 * @param {Character} C
 * @param {Item} FromItem
 */
declare function InventoryItemNeckFuturisticCollarColor(C: Character, FromItem: Item): void;
/**
 * @param {Character} C
 * @param {Item} Item
 * @param {"Leg"|"Arm"|"Chastity"|"Collar"} Permission
 */
declare function InventoryItemNeckFuturisticCollarTogglePermission(C: Character, Item: Item, Permission: "Leg" | "Arm" | "Chastity" | "Collar"): void;
/**
 * @param {Character} C
 * @param {Item} Item
 */
declare function InventoryItemNeckFuturisticCollarToggleRemotes(C: Character, Item: Item): void;
