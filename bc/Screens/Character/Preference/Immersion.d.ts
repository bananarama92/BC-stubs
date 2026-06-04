declare function PreferenceSubscreenImmersionLoad(): void;
/**
 * Runs and draws the preference screen, immersion sub-screen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenImmersionRun(): void;
/**
 * Handles the click events in the preference screen, immersion sub-screen, propagated from CommonClick()
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenImmersionClick(): void;
declare function PreferenceSubscreenImmersionResize(load: boolean): void;
/**
 * @param {boolean} disableButtons
 */
declare function PreferenceSubscreenImmersionCheckStates(disableButtons: boolean): void;
/** @type {ImmersionSensDepName[]} */
declare var PreferenceSettingsSensDepList: ImmersionSensDepName[];
/** @type {{label: string, check: () => boolean, click: (value: boolean) => void, disabled?: (disableButtons: boolean) => boolean}[]} */
declare const PreferenceSubscreenImmersionCheckboxes: {
    label: string;
    check: () => boolean;
    click: (value: boolean) => void;
    disabled?: (disableButtons: boolean) => boolean;
}[];
declare const PreferenceSubscreenImmersionIDs: Readonly<{
    wrapper: "preference-immersion-wrapper";
    grid: "preference-immersion-grid";
    header: "preference-immersion-header";
    lockCheckbox: "preference-ImmersionLockSetting";
}>;
