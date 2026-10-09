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
/**
 * Tied to the screen's lifetime
 * @type {WebGLContextAttributes}
 */
declare var PreferenceGraphicsWebGLOptions: WebGLContextAttributes;
declare const PreferenceSubscreenGraphicsIDs: Readonly<{
    grid: "preference-graphics-grid";
    noWebGL: "preference-graphics-no-webgl";
}>;
