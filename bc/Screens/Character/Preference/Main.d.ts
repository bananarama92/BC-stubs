declare function PreferenceSubscreenMainLoad(): void;
declare function PreferenceSubscreenMainRun(): void;
declare function PreferenceSubscreenMainClick(): void;
declare function PreferenceSubscreenMainResize(load: boolean): void;
declare function PreferenceSubscreenMainExit(): boolean;
declare function PreferenceSubscreenMainUnload(): void;
/** @type {CommonGenerateGridParameters} */
declare const PreferenceSubscreenMainGrid: CommonGenerateGridParameters;
declare const MainSubscreenIDs: Readonly<{
    grid: "preference-main-grid";
}>;
