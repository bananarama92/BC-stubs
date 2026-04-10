/**
 * Loads the gender preference subscreen.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenGenderLoad(): void;
/**
 * Sets the gender preferences for a player. Redirected to from the main Run function if the player is in the
 * gender settings subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenGenderRun(): void;
/**
 * Handles click events for the gender settings of a player. Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenGenderClick(): void;
declare function PreferenceSubscreenGenderResize(): void;
declare const PreferenceSubscreenGenderIDs: Readonly<{
    grid: "preference-gender-grid";
}>;
declare const PreferenceSubscreenGenderSettings: {
    id: string;
    label: string;
    setting: () => GenderSetting;
}[];
