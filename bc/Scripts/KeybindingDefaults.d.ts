declare var KeybindingDefaults: {
    /**
     * Default keybinding categories for organizing commands.
     *
     * @type {readonly Keybindings.Category[]}
     */
    DefaultCategories: readonly Keybindings.Category[];
    /**
     * Default contexts where keybindings may be active.
     * Each context has a prerequisite function to check if it should apply.
     *
     * @type {readonly Keybindings.Context[]}
     */
    DefaultContexts: readonly Keybindings.Context[];
    /**
     * Built-in default keybindings initialized at startup.
     * Each binding specifies an action, its assigned keys, category, and contexts.
     *
     * @type {readonly Keybindings.Keybinding[]}
     */
    DefaultKeybindings: readonly Keybindings.Keybinding[];
};
