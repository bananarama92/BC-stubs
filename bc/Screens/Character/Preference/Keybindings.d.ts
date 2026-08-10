declare var KeyGUI: {
    /** @type {Keybindings.Keybinding['id'] | null} */
    selectedAction: Keybindings.Keybinding['id'] | null;
    /** @type {ReadonlySet<KeybindingScreen.FilteringMode>} */
    searchingModes: ReadonlySet<KeybindingScreen.FilteringMode>;
    /** @type {KeybindingScreen.FilteringMode} */
    currentSearchingMode: KeybindingScreen.FilteringMode;
    /** @type {boolean} */
    showConflictsOnly: boolean;
    selec: Readonly<{
        keyId: (/** @type {string} */ id: string) => string;
        keybuttonId: (/** @type {string} */ id: string) => string;
        keyNameId: (/** @type {string} */ id: string) => string;
        keyContextsId: (/** @type {string} */ id: string) => string;
        keyConflictIndicatorId: (/** @type {string} */ id: string) => string;
        comboResetButtonId: (/** @type {string} */ id: string) => string;
        comboUnbindButtonId: (/** @type {string} */ id: string) => string;
        categoryId: (/** @type {string} */ id: string) => string;
        categoryContentId: (/** @type {string} */ id: string) => string;
        categoryClass: "category";
        categoryNameClass: "category-name";
        categoryContentClass: "category-content";
        keybindClass: "keybinding";
        keybindNameClass: "keybind-name";
        keybindContextsClass: "keybind-contexts";
        keybindNavClass: "keybind-nav";
        navSquareButtonClass: "keybind-nav-button";
        keybindConflictIndicatorClass: "keybind-conflict-indicator";
        keybindComboClass: "keybind-combo";
        keybindResetClass: "keybind-combo-reset";
        keybindUnbindClass: "keybind-combo-unbind";
        mainContent: "keybind-main-content";
        keybindModal: "keybind-modal";
        keybindModalCancel: "keybind-modal-cancel";
        keybindManager: "keybind-manager";
        filtering: "keybind-filter";
        searchInput: "keybind-search-input";
        searchInputContainer: "keybind-search-input-container";
        searchModePair: "keybind-search-mode-pair";
        searchModeDropdown: "keybind-search-mode-dropdown";
        sidebar: "keybind-sidebar";
        helpSheet: "keybind-help-sheet";
        helpHr: "keybind-help-hr";
    }>;
    /**
     * @param {Keybindings.Keybinding} keybinding
     */
    buildKeybinding(keybinding: Keybindings.Keybinding): HTMLDivElement;
    /** @param {Keybindings.Category} categoryObject */
    buildCategory(categoryObject: Keybindings.Category): HTMLFieldSetElement | undefined;
    buildSearchInput(): HTMLLabelElement;
    buildSearchModeDropdown(): HTMLLabelElement;
    buildFilteringMenu(): HTMLElement;
    buildHelpSheet(): HTMLElement;
    /** @param {string} content */
    changeHelpSheet(content: string): void;
    buildSubscreen(): void;
    searchFilteredAll(): void;
    /**
     * Updates a keybinding's combination and updates all conflicting keybindings if any
     * @param {string} targetActionId
     * @param {Keybindings.KeyCombo} keyCombo
     */
    updateKeybinding(targetActionId: string, keyCombo: Keybindings.KeyCombo): void;
    showModal(): void;
};
declare function PreferenceSubscreenKeybindingsLoad(): void;
declare function PreferenceSubscreenKeybindingsRun(): void;
declare function PreferenceSubscreenKeybindingsClick(): void;
declare function PreferenceSubscreenKeybindingsExit(): boolean;
/**
 * Handles keypresses in the keybindings subscreen, updates keybindings,
 * changes respecting element text and serializes changes.
 * @param {KeyboardEvent} e
 * @returns {boolean}
 */
declare function PreferenceSubscreenKeybindingsKeyUp(e: KeyboardEvent): boolean;
