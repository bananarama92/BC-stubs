declare function PreferenceSubscreenKeybindingsLoad(): void;
declare function PreferenceSubscreenKeybindingsRun(): void;
declare function PreferenceSubscreenKeybindingsResize(): void;
declare function PreferenceSubscreenKeybindingsClick(): void;
declare function PreferenceSubscreenKeybindingsExit(): boolean;
/**
 * Handles keypresses in the keybindings subscreen, updates keybindings,
 * changes respecting element text and serializes changes.
 * @param {KeyboardEvent} e
 * @returns {boolean}
 */
declare function PreferenceSubscreenKeybindingsKeyUp(e: KeyboardEvent): boolean;
declare namespace KeyGUI {
    let selectedAction: Keybindings.Keybinding["action"]["id"] | null;
    let searchingModes: ReadonlySet<KeybindingScreen.FilteringMode>;
    let currentSearchingMode: KeybindingScreen.FilteringMode;
    let showConflictsOnly: boolean;
    let selec: Readonly<{
        keyId: (id: string) => string;
        keybuttonId: (id: string) => string;
        keyNameId: (id: string) => string;
        keyContextsId: (id: string) => string;
        keyConflictIndicatorId: (id: string) => string;
        comboResetButtonId: (id: string) => string;
        comboUnbindButtonId: (id: string) => string;
        categoryId: (id: string) => string;
        categoryContentId: (id: string) => string;
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
    function buildKeybinding(keybinding: Keybindings.Keybinding): HTMLDivElement;
    /** @param {Keybindings.Category} categoryObject */
    function buildCategory(categoryObject: Keybindings.Category): HTMLFieldSetElement;
    function buildSearchInput(): HTMLLabelElement;
    function buildSearchModeDropdown(): HTMLLabelElement;
    function buildFilteringMenu(): HTMLElement;
    function buildHelpSheet(): HTMLElement;
    /** @param {string} content */
    function changeHelpSheet(content: string): void;
    function buildSubscreen(): void;
    function searchFilteredAll(): void;
    /**
     * Updates a keybinding's combination and updates all conflicting keybindings if any
     * @param {string} targetActionId
     * @param {Keybindings.KeyCombo} keyCombo
     */
    function updateKeybinding(targetActionId: string, keyCombo: Keybindings.KeyCombo): void;
    function showModal(): void;
}
