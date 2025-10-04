/**
 * Handles the loading of the preference subscreen for extensions
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenExtensionsLoad(): void;
/**
 * Runs and draws the preference subscreen for extensions
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenExtensionsRun(): void;
/**
 * Handles clicks in the preference subscreen for extensions
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenExtensionsClick(): void;
declare function PreferenceSubscreenExtensionsExit(): Promise<boolean>;
/**
 * Exit the preference subscreen for extensions, should be called when
 * leaving custom menu of extensions if the extension exits the menu from itself.
 * @returns {Promise<void>} - Nothing
 */
declare function PreferenceSubscreenExtensionsClear(): Promise<void>;
/**
 * Unloads the preference subscreen for extensions
 * Cleans up the current extension, and reset the current extension to null
 */
declare function PreferenceSubscreenExtensionsUnload(): void;
declare function PreferenceSubscreenExtensionsResize(onLoad: any): void;
/**
 * @param {string} screenIdentifier
 * @param {ScreenSpecifier} returnScreen
 */
declare function PreferenceSubscreenExtensionsOpen(screenIdentifier: string, returnScreen: ScreenSpecifier): Promise<void>;
/** @type {PreferenceExtensionsMenuButtonInfo[]} */
declare let PreferenceExtensionsDisplay: PreferenceExtensionsMenuButtonInfo[];
/** @type {PreferenceExtensionsSettingItem | null}*/
declare let PreferenceExtensionsCurrent: PreferenceExtensionsSettingItem | null;
declare const PreferenceExtensionsIDs: Readonly<{
    grid: "preference-extensions-grid";
    noExtensionLabel: "preference-no-extensions-label";
}>;
