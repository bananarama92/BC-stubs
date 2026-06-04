/**
 * Handles the loading of the visibility settings of a player
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenVisibilityLoad(): void;
/**
 * Sets the item visibility preferences for a player. Redirected to from the main Run function if the player is in the
 * visibility settings subscreen
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenVisibilityRun(): void;
/**
 * Handles the click events for the visibility settings of a player.  Redirected from the main Click function.
 * @returns {void} - Nothing
 */
declare function PreferenceSubscreenVisibilityClick(): void;
declare function PreferenceSubscreenVisibilityUnload(): void;
/**
 * Positions the visibility subscreen elements on resize.
 */
declare function PreferenceSubscreenVisibilityResize(): void;
/**
 * Trigger a subscreen exit
 * @param {boolean} SaveChanges - If TRUE, this will commit the configuration
 * @returns {void} - Nothing
 */
declare function PreferenceVisibilityExit(SaveChanges: boolean): void;
/**
 * Builds the DOM layout for the visibility subscreen.
 */
declare function PreferenceSubscreenVisibilityBuildLayout(): void;
/**
 * Builds the dropdown options for the group selector.
 * @returns {{ value: string, label: string, group: string }[]}
 */
declare function PreferenceSubscreenVisibilityGetGroupOptions(): {
    value: string;
    label: string;
    group: string;
}[];
/**
 * Builds the dropdown options for the asset selector based on the currently selected group.
 * @param {number} groupIndex
 * @returns {{ value: string, label: string }[]}
 */
declare function PreferenceSubscreenVisibilityGetAssetOptions(groupIndex: number): {
    value: string;
    label: string;
}[];
/**
 * Handles selection changes on the group dropdown.
 * @param {string} value
 */
declare function PreferenceSubscreenVisibilityOnGroupChange(value: string): void;
/**
 * Handles selection changes on the asset dropdown.
 * @param {string} value
 */
declare function PreferenceSubscreenVisibilityOnAssetChange(value: string): void;
/**
 * Prompts via the browser confirmation dialog before clearing all Hidden flags
 * and exiting with save.
 */
declare function PreferenceSubscreenVisibilityOnResetClick(): void;
/**
 * Commits the staged permission record to the player and exits the screen, saving changes.
 */
declare function PreferenceSubscreenVisibilityCommit(): void;
/**
 * Synchronises the DOM controls with the current state.
 */
declare function PreferenceSubscreenVisibilityRefreshUI(): void;
/**
 * Updates the asset preview image and description.
 */
declare function PreferenceSubscreenVisibilityRefreshPreview(): void;
/**
 * Update the checkbox settings and asset preview image based on the new asset selection
 * @param {boolean} RefreshCheckboxes - If TRUE, load the new asset settings. If FALSE, a checkbox was just manually
 *     changed so don't refresh them
 * @returns {void} - Nothing
 */
declare function PreferenceVisibilityAssetChanged(RefreshCheckboxes: boolean): void;
/**
 * Toggles the Hide checkbox state and updates the staged permission record.
 * @returns {void} - Nothing
 */
declare function PreferenceVisibilityHideChange(): void;
/**
 * Toggles the Block checkbox state and updates the staged permission record.
 * @returns {void} - Nothing
 */
declare function PreferenceVisibilityBlockChange(): void;
/**
 * Adds or removes the current item to/from the list based on the new state of the corresponding checkbox
 * @param {Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>} permissionRecord - The record to add or remove the item from
 * @param {boolean} CheckSetting - The new true/false setting of the checkbox
 * @param {"Hidden" | "Block"} Type
 */
declare function PreferenceVisibilityCheckboxChanged(permissionRecord: Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>, CheckSetting: boolean, Type: "Hidden" | "Block"): void;
/** @type {{ Group: AssetGroup, Assets: { Asset: Asset, Hidden: boolean, Blocked: boolean, Limited: boolean }[]}[]} */
declare var PreferenceVisibilityGroupList: {
    Group: AssetGroup;
    Assets: {
        Asset: Asset;
        Hidden: boolean;
        Blocked: boolean;
        Limited: boolean;
    }[];
}[];
declare var PreferenceVisibilityGroupIndex: number;
declare var PreferenceVisibilityAssetIndex: number;
declare var PreferenceVisibilityHideChecked: boolean;
declare var PreferenceVisibilityBlockChecked: boolean;
declare var PreferenceVisibilityCanBlock: boolean;
/**
 * Bound to screen lifetime
 * @type {Asset}
 */
declare var PreferenceVisibilityPreviewAsset: Asset;
/** @deprecated See {@link PreferenceSubscreenVisibilityOnResetClick}. */
declare var PreferenceVisibilityResetClicked: boolean;
/** @type {Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>} */
declare var PreferenceVisibilityRecord: Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>;
declare const PreferenceSubscreenVisibilityIDs: Readonly<{
    grid: "preference-visibility-grid";
    controls: "preference-visibility-controls";
    groupRow: "preference-visibility-group-row";
    assetRow: "preference-visibility-asset-row";
    groupSelect: "preference-visibility-group";
    assetSelect: "preference-visibility-asset";
    hideCheckbox: "preference-visibility-hide";
    blockCheckbox: "preference-visibility-block";
    hideWarning: "preference-visibility-hide-warning";
    resetButton: "preference-visibility-reset";
    preview: "preference-visibility-preview";
    locked: "preference-visibility-locked";
    saveButton: "preference-visibility-save";
    cancelButton: "preference-visibility-cancel";
}>;
declare const PreferenceVisibilityHiddenWarningIcon: "./Screens/Character/Player/HiddenItem.png";
