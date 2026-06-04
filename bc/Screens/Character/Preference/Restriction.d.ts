/**
 * Runs and draw the preference screen, restriction subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenRestrictionLoad(): void;
/**
 * Runs and draw the preference screen, restriction subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenRestrictionRun(): void;
/**
 * Handles the click events in the preference screen, restriction sub-screen, propagated from CommonClick()
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenRestrictionClick(): void;
declare function PreferenceSubscreenRestrictionResize(load: boolean): void;
declare const PreferenceSubscreenRestrictionIDs: Readonly<{
    grid: "restriction-checkbox-grid";
    hint: "restriction-label-hint";
}>;
