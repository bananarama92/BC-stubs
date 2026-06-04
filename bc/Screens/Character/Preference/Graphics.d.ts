/**
 * Prepares the graphics settings subscreen
 */
declare function PreferenceSubscreenGraphicsLoad(): void;
/**
 * Sets the graphical preferences for a player. Redirected to from the main Run function if the player is in the
 * graphics settings subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenGraphicsRun(): void;
/**
 * Handles click events for the graphics preference settings. Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenGraphicsClick(): void;
declare function PreferenceSubscreenGraphicsResize(load: boolean): void;
declare function PreferenceSubscreenGraphicsExit(): boolean;
/**
 * Finalize graphics setting when the screen is unloaded
 */
declare function PreferenceSubscreenGraphicsUnload(): void;
/**
 * Creates a hint button with a tooltip
 * @param {string | null} id
 * @param {string} tooltip
 * @param {"left" | "right" | "top" | "bottom"} tooltipPosition
 * @returns
 */
declare function GraphicsCreateHint(id: string | null, tooltip: string, tooltipPosition: "left" | "right" | "top" | "bottom"): HTMLButtonElement;
/** @type {GraphicsVFXName[]} */
declare var PreferenceSettingsVFXList: GraphicsVFXName[];
/** @deprecated */
declare var PreferenceSettingsVFXIndex: number;
/** @type {GraphicsVFXVibratorName[]} */
declare var PreferenceSettingsVFXVibratorList: GraphicsVFXVibratorName[];
/** @deprecated */
declare var PreferenceSettingsVFXVibratorIndex: number;
/** @type {GraphicsVFXFilterName[]} */
declare var PreferenceSettingsVFXFilterList: GraphicsVFXFilterName[];
/** @deprecated */
declare var PreferenceSettingsVFXFilterIndex: number;
/** @type {GraphicsFontName[]} */
declare var PreferenceGraphicsFontList: GraphicsFontName[];
/** @type {WebGLPowerPreference[]} */
declare var PreferenceGraphicsPowerModes: WebGLPowerPreference[];
/** @deprecated */
declare var PreferenceGraphicsFontIndex: number;
/** @deprecated @type {number} */
declare var PreferenceGraphicsAnimationQualityIndex: number;
/** @deprecated @type {number} */
declare var PreferenceGraphicsPowerModeIndex: number;
/**
 * Tied to the screen's lifetime
 * @type {WebGLContextAttributes}
 */
declare var PreferenceGraphicsWebGLOptions: WebGLContextAttributes;
declare var PreferenceGraphicsAnimationQualityList: number[];
declare var PreferenceGraphicsFrameLimit: number[];
declare const PreferenceSubscreenGraphicsIDs: Readonly<{
    grid: "preference-graphics-grid";
    noWebGL: "preference-graphics-no-webgl";
}>;
