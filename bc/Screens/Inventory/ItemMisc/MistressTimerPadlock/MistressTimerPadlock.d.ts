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
})[];
declare let MistressTimerChooseOptionsIndex: number;
declare let MistressTimerChooseIndexes: number[];
