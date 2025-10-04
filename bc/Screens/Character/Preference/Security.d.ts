/**
 * Loads the preference security screen.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenSecurityLoad(): void;
/**
 * Sets the security preferences for a player. Redirected to from the main Run function if the player is in the
 * security settings subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenSecurityRun(): void;
/**
 * Handles the click events in the security settings dialog for a player.  Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenSecurityClick(): void;
/**
 * Exits the preference screen
 */
declare function PreferenceSubscreenSecurityExit(): boolean;
declare function PreferenceSubscreenSecurityUnload(): void;
declare function PreferenceSubscreenSecurityResize(): void;
/**
 * Updates the placeholder of the "New Email" input based on the result of an email update operation.
 * @param {ServerAccountQueryEmailStatus} data - Server response containing the result of the email update.
 * @returns {void}
 */
declare function SecurityEmailUpdate(data: ServerAccountQueryEmailStatus): void;
/**
 * Updates the email input placeholder based on whether an email is linked to the account.
 * @param {ServerAccountQueryEmailStatus} data - Server response containing the email status.
 * @returns {void}
 */
declare function SecurityEmailStatus(data: ServerAccountQueryEmailStatus): void;
declare const PreferenceSubscreenSecurityIDs: Readonly<{
    grid: "preference-security-grid";
    emailOld: "InputEmailOld";
    emailNew: "InputEmailNew";
    hint: "preference-security-hint";
    update: "preference-security-update-button";
}>;
