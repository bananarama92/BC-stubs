/**
 * @param {Character} C
 * @returns {boolean} - Whether the passed character is elligble for full control over the lock
 */
declare function InventoryItemMiscOwnerTimerPadlockValidator(C: Character): boolean;
/**
 * @param {NoArchItemData} data
 * @param {null | (() => void)} originalFunction
 * @param {(C: Character) => boolean} validator
 * @satisfies {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>}
 */
declare function InventoryItemMiscOwnerTimerPadlockDrawHook({ asset }: NoArchItemData, originalFunction: null | (() => void), validator?: (C: Character) => boolean): void;
/**
 * @param {NoArchItemData} data
 * @param {null | (() => void)} originalFunction
 * @param {(C: Character) => boolean} validator
 * @satisfies {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>}
 */
declare function InventoryItemMiscOwnerTimerPadlockClickHook(data: NoArchItemData, originalFunction: null | (() => void), validator?: (C: Character) => boolean): void;
declare function InventoryItemMiscOwnerTimerPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
/**
 * @param {Character} C
 * @param {Item} item
 * @param {Item} lockItem
 * @param {number} TimeToAddSeconds
 * @param {{label: string, seconds: number}} DisplayTimeUnit
 * @param {boolean} PlayerMemberNumberToList
 * @param {boolean} LeaveDialog
 */
declare function InventoryItemMiscTimerPadlockAdd(C: Character, item: Item, lockItem: Item, TimeToAddSeconds: number, DisplayTimeUnit: {
    label: string;
    seconds: number;
}, PlayerMemberNumberToList?: boolean, LeaveDialog?: boolean): void;
/**
 * Sends a global chat message of how much time was added or removed from a Timer Padlock.
 * @param {Character} C
 * @param {Item} item
 */
declare function InventoryItemMiscSendTimerPadlockChangeMessage(C: Character, item: Item): void;
declare const OwnerTimerChooseOptions: {
    unit: {
        label: string;
        seconds: number;
    };
    values: number[];
}[];
declare let OwnerTimerChooseOptionsIndex: number;
declare let OwnerTimerChooseIndexes: number[];
declare let TimerPadlockAccumulatedSeconds: number;
