/**
 * Open a specific subscreen
 * @param {PreferenceSubscreenName} subscreen
 * @param {number} page
 */
declare function PreferenceOpenSubscreen(subscreen: PreferenceSubscreenName, page?: number): Promise<void>;
declare function PreferenceLoad(): Promise<void>;
/**
 * Runs the preference screen. This function is called dynamically on a repeated basis.
 * So don't use complex loops or other function calls within this method
 * @returns {void} - Nothing
 */
declare function PreferenceRun(): void;
/**
 * Handles click events in the preference screen that are propagated from CommonClick()
 * @returns {void} - Nothing
 */
declare function PreferenceClick(): void;
declare function PreferenceExit(): void;
declare function PreferenceUnload(): void;
declare function PreferenceResize(load: boolean): void;
declare function PreferenceKeyUp(event: KeyboardEvent): boolean;
/**
 * @param {PreferenceSubscreenName} subscreenName
 * @returns
 */
declare function PreferenceSubscreenCreateSubscreen(subscreenName: PreferenceSubscreenName): HTMLDivElement;
declare function PreferenceSubscreenResize(load: boolean): void;
/**
 * Exit from a specific subscreen by running its handler and checking its validity
 */
declare function PreferenceSubscreenExit(): Promise<void>;
declare function PreferenceSubscreenUnload(): void;
/**
 * Draw a button to navigate multiple pages in a preference subscreen
 * @param {number} Left - The X co-ordinate of the button
 * @param {number} Top - The Y co-ordinate of the button
 * @param {number} TotalPages - The total number of pages on the subscreen
 * @returns {void} - Nothing
 */
declare function PreferencePageChangeDraw(Left: number, Top: number, TotalPages: number): void;
/**
 * Handles clicks of the button to navigate multiple pages in a preference subscreen
 * @param {number} Left - The X co-ordinate of the button
 * @param {number} Top - The Y co-ordinate of the button
 * @param {number} TotalPages - The total number of pages on the subscreen
 * @returns {void} - Nothing
 */
declare function PreferencePageChangeClick(Left: number, Top: number, TotalPages: number): void;
/**
 * Draws a back/next button for use on preference pages
 * @param {number} Left - The left offset of the button
 * @param {number} Top - The top offset of the button
 * @param {number} Width - The width of the button
 * @param {number} Height - The height of the button
 * @param {readonly string[]} List - The preference list that the button should be associated with
 * @param {number} Index - The current preference index for the given preference list
 * @deprecated use {@link DrawBackNextButton}
 * @returns {void} - Nothing
 */
declare function PreferenceDrawBackNextButton(Left: number, Top: number, Width: number, Height: number, List: readonly string[], Index: number): void;
/**
 * The background to use for the settings screen
 */
declare var PreferenceBackground: string;
/**
 * A message shown by some subscreen
 * @type {string}
 */
declare var PreferenceMessage: string;
/**
 * The currently active subscreen
 *
 * @type {PreferenceSubscreen | null}
 */
declare var PreferenceSubscreen: PreferenceSubscreen | null;
/**
 * All the base settings screens
 * @type {PreferenceSubscreen[]}
 */
declare const PreferenceSubscreens: PreferenceSubscreen[];
/**
 * The current page ID for multi-page screens.
 *
 * This is automatically reset to 1 when a screen loads
 */
declare var PreferencePageCurrent: number;
/** @type {Record<string,PreferenceExtensionsSettingItem>} */
declare let PreferenceExtensionsSettings: Record<string, PreferenceExtensionsSettingItem>;
declare const PreferenceIDs: Readonly<{
    subscreen: "preference-subscreen";
    exit: "preference-exit";
    title: "preference-subscreen-hgroup";
}>;
