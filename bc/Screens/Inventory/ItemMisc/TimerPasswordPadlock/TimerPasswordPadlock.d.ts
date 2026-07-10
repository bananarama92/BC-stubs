declare function InventoryItemMiscTimerPasswordPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
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
})[];
declare let PasswordTimerChooseOptionsIndex: number;
declare let PasswordTimerChooseIndexes: number[];
