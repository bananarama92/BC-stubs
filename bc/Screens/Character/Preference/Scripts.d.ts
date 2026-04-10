/**
 * @returns {ScriptPermissionLevel[]}
 */
declare function PreferenceSubscreenScriptsGetPermissionLevels(): ScriptPermissionLevel[];
declare function PreferenceSubscreenScriptsLoad(): void;
declare function PreferenceSubscreenScriptsRun(): void;
declare function PreferenceSubscreenScriptsClick(): void;
declare function PreferenceSubscreenScriptsExit(allowPanelClose?: boolean): boolean;
declare function PreferenceSubscreenScriptsUnload(): void;
declare function PreferenceSubscreenScriptsResize(): void;
declare function PreferenceSubscreenScriptsUpdateCheckboxes(): void;
declare function PreferenceSubscreenScriptsUpdateWarning(): void;
declare function PreferenceSubscreenScriptsUpdateHelp(): void;
declare function PreferenceSubscreenScriptsUpdateHelpButtons(): void;
/**
 * @param {string} buttonId
 * @param {string} icon
 */
declare function PreferenceSubscreenScriptsSetHelpIcon(buttonId: string, icon: string): void;
/** @type {ScriptPermissionProperty[]} */
declare const PreferenceScriptPermissionProperties: ScriptPermissionProperty[];
/** @type {null | "global" | "Hide" | "Block"} */
declare let PreferenceScriptHelp: null | "global" | "Hide" | "Block";
/** @type {null | ReturnType<typeof setTimeout>} */
declare let PreferenceScriptTimeoutHandle: null | ReturnType<typeof setTimeout>;
/** @type {null | number} */
declare let PreferenceScriptTimer: null | number;
declare let PreferenceScriptWarningAccepted: boolean;
declare const PreferenceSubscreenScriptsIDs: Readonly<{
    grid: "preference-scripts-grid";
    content: "preference-scripts-content";
    warning: "preference-scripts-warning";
    warningTitle: "preference-scripts-warning-title";
    warningText: "preference-scripts-warning-text";
    warningAccept: "preference-scripts-warning-accept";
    explanation: "preference-scripts-explanation";
    helpGlobal: "preference-scripts-help-global";
    table: "preference-scripts-table";
    helpOverlay: "preference-scripts-help-overlay";
    /**
         * @param {ScriptPermissionProperty} property
         * @param {ScriptPermissionLevel} permissionLevel
         * @returns {string}
         */
    scriptsCheckboxId: (property: ScriptPermissionProperty, permissionLevel: ScriptPermissionLevel) => string;
    /**
     * @param {ScriptPermissionProperty} property
     * @returns {string}
     */
    scriptsHelpButtonId: (property: ScriptPermissionProperty) => string;
}>;
declare const ScriptPermissionLevel: Readonly<{
    SELF: "Self";
    OWNER: "Owner";
    LOVERS: "Lovers";
    FRIENDS: "Friends";
    WHITELIST: "Whitelist";
    PUBLIC: "Public";
}>;
declare const ScriptPermissionBits: Readonly<{
    Self: 1;
    Owner: 2;
    Lovers: 4;
    Friends: 8;
    Whitelist: 16;
    Public: 32;
}>;
declare const maxScriptPermission: number;
