/** @type {CommonGenerateGridParameters} */
declare const PreferenceSubscreenMainGrid: CommonGenerateGridParameters;
declare const MainSubscreenIDs: Readonly<{
    grid: "preference-main-grid";
}>;
declare function PreferenceSubscreenMainLoad(): void;
declare function PreferenceSubscreenMainRun(): void;
declare function PreferenceSubscreenMainClick(): void;
/** @type {ScreenResizeHandler} */
declare function PreferenceSubscreenMainResize(onLoad: boolean): void;
declare function PreferenceSubscreenMainExit(): boolean;
declare function PreferenceSubscreenMainUnload(): void;
