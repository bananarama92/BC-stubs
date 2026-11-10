declare const PasswordTimerChooseOptions: ({
    unit: {
        readonly label: "Minutes";
        readonly seconds: 60;
    };
    values: number[];
} | {
    unit: {
        readonly label: "Hours";
        readonly seconds: 3600;
    };
    values: number[];
} | {
    unit: {
        readonly label: "Days";
        readonly seconds: 86400;
    };
    values: number[];
})[];
declare let PasswordTimerChooseOptionsIndex: number;
declare let PasswordTimerChooseIndexes: number[];
/** @type {ExtendedItemScriptHookCallbacks.Load<NoArchItemData>} */
declare function InventoryItemMiscTimerPasswordPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemMiscTimerPasswordPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemMiscTimerPasswordPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemMiscTimerPasswordPadlockExitHook(Data: NoArchItemData, OriginalFunction: (() => void) | null): void;
