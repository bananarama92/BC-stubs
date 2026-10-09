declare function PreferenceSubscreenArousalLoad(): void;
/**
 * Sets the arousal preferences for a player. Redirected to from the main Run function if the player is in the arousal
 * settings subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenArousalRun(): void;
/**
 * Gets a color code for a given arousal factor
 * @param {number} Factor - The factor that should be translated in a color code
 * @returns {string} - The color for the given factor in the format "#rrggbbaa"
 */
declare function PreferenceGetFactorColor(Factor: number): string;
/**
 * Handles the click events for the arousal settings.  Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenArousalClick(): void;
/**
 * Loads the activity factor combo boxes based on the current activity selected
 * @returns {void} - Nothing
 * @deprecated
 */
declare function PreferenceLoadActivityFactor(): void;
/**
 * Loads the fetish factor combo boxes based on the current fetish selected
 * @returns {void} - Nothing
 * @deprecated
 */
declare function PreferenceLoadFetishFactor(): void;
/**
 * Increment the passed arousal factor.
 * @deprecated
 * @param {ArousalFactor} factor
 * @returns {ArousalFactor}
 */
declare function PreferenceIncrementArousalFactor(factor: ArousalFactor): ArousalFactor;
/**
 * Decrement the passed arousal factor.
 * @deprecated
 * @param {ArousalFactor} factor
 * @returns {ArousalFactor}
 */
declare function PreferenceDecrementArousalFactor(factor: ArousalFactor): ArousalFactor;
/**
 * Exits the preference screen
 */
declare function PreferenceSubscreenArousalExit(): boolean;
declare function PreferenceSubscreenArousalUnload(): void;
