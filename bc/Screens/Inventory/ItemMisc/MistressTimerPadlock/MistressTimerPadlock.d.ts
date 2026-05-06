declare function InventoryItemMiscMistressTimerPadlockDrawHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscMistressTimerPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
declare function InventoryItemMiscMistressTimerPadlockExitHook(data: NoArchItemData, originalFunction: (() => void) | null): void;
declare const MistressTimerChooseOptions: {
    unit: {
        label: string;
        seconds: number;
    };
    values: number[];
}[];
declare let MistressTimerChooseOptionsIndex: number;
declare let MistressTimerChooseIndexes: number[];
