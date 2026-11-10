declare const MistressTimerChooseOptions: ({
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
declare let MistressTimerChooseOptionsIndex: number;
declare let MistressTimerChooseIndexes: number[];
/** @type {ExtendedItemScriptHookCallbacks.Draw<NoArchItemData>} */
declare function InventoryItemMiscMistressTimerPadlockDrawHook({ asset }: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<NoArchItemData>} */
declare function InventoryItemMiscMistressTimerPadlockClickHook(data: NoArchItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Exit<NoArchItemData>} */
declare function InventoryItemMiscMistressTimerPadlockExitHook(Data: NoArchItemData, OriginalFunction: (() => void) | null): void;
