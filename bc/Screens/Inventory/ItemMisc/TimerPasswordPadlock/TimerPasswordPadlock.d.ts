declare function InventoryItemMiscTimerPasswordPadlockLoadHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscTimerPasswordPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
declare const PasswordTimerChooseOptions: {
    unit: {
        label: string;
        seconds: number;
    };
    values: number[];
}[];
declare let PasswordTimerChooseOptionsIndex: number;
declare let PasswordTimerChooseIndexes: number[];
