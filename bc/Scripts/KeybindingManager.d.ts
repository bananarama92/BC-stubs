declare class KeybindManager {
    /** @type {Map<string, Keybindings.Keybinding>} */
    keybindings: Map<string, Keybindings.Keybinding>;
    /** @type {Map<string, Keybindings.Category>} */
    categories: Map<string, Keybindings.Category>;
    /** @type {Map<string, Keybindings.Context>} */
    contexts: Map<string, Keybindings.Context>;
    /**
     * Registers a new keybinding category.
     * Categories are sorted alphabetically by name after insertion.
     * Logs errors if invalid or already exists.
     *
     * @param {Keybindings.Category} category
     * @returns {void}
     */
    registerCategory(category: Keybindings.Category): void;
    /**
     * Returns a category by ID.
     *
     * @param {string} id
     * @returns {Keybindings.Category}
     */
    getCategory(id: string): Keybindings.Category;
    /**
     * Returns all registered categories.
     *
     * @returns {Keybindings.Category[]}
     */
    getAllCategories(): Keybindings.Category[];
    /**
     * Registers a new context with its prerequisite.
     * Contexts are sorted alphabetically by name after insertion.
     * Logs errors if invalid or already exists.
     *
     * @param {Keybindings.Context} context
     */
    registerContext(context: Keybindings.Context): void;
    /**
     * Returns a context by ID.
     *
     * @param {string} id
     * @returns {Keybindings.Context}
     */
    getContext(id: string): Keybindings.Context;
    /**
     * Returns all registered contexts.
     *
     * @returns {Keybindings.Context[]}
     */
    getAllContexts(): Keybindings.Context[];
    /**
     * Registers a new keybinding.
     * Validates category, contexts, and key combo.
     * Automatically limits modifiers to a max of two.
     *
     * @param {Keybindings.Keybinding} keybinding
     */
    registerKeybinding(keybinding: Keybindings.Keybinding): void;
    /**
     * Returns a keybinding by its action ID.
     *
     * @param {string} actionId
     * @returns {Keybindings.Keybinding}
     */
    getKeybinding(actionId: string): Keybindings.Keybinding;
    /**
     * Returns all keybindings.
     * Optionally includes uninitialized ones.
     *
     * @param {{ showUninitialized: boolean }} [options]
     * @returns {Keybindings.Keybinding[]}
     */
    getAllKeybindings(options?: {
        showUninitialized: boolean;
    }): Keybindings.Keybinding[];
    /**
     * Removes a keybinding by action ID.
     *
     * @param {string} actionId
     * @returns {boolean} `true` if deleted, `false` if not found.
     */
    unregisterKeybinding(actionId: string): boolean;
    /**
     * Updates the assigned key combo for a keybinding.
     * Logs an error if readonly or not found.
     *
     * @param {string} actionId
     * @param {Keybindings.KeyCombo} keyCombo
     */
    updateKeybinding(actionId: string, keyCombo: Keybindings.KeyCombo): void;
    /**
     * Handles a browser `keydown` event, triggering matching keybindings
     * if their contexts are active and modifiers match.
     *
     * @param {KeyboardEvent} event
     * @returns {boolean} `true` if handled, otherwise `false`.
     */
    handleKeyPress(event: KeyboardEvent): boolean;
    /**
     * Extracts modifier keys from a `KeyboardEvent` into a Set.
     *
     * @param {KeyboardEvent} event
     * @returns {Set<Keybindings.ModifierKey>}
     */
    getModifiers(event: KeyboardEvent): Set<Keybindings.ModifierKey>;
    /**
     * Finds keybindings that conflict with the one identified by `actionId`.
     *
     * @param {string} actionId
     * @returns {Keybindings.Keybinding[]}
     */
    getConflictingKeybindings(actionId: string): Keybindings.Keybinding[];
    /**
     * Serializes all current keybindings into Player.KeybindingSettings.
     * Compresses using LZString.
     */
    serialize(): void;
    /**
     * Restores keybindings from Player.KeybindingSettings.
     * Registers missing bindings as uninitialized placeholders.
     */
    deserialize(): void;
    /** @param {string | Partial<Record<ServerChatRoomLanguage | "TW", string>>} raw */
    getTranslated(raw: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>): string;
    /** @param {Keybindings.Keybinding} keybinding */
    isDefaultCombo(keybinding: Keybindings.Keybinding): boolean;
    /**
     * Completes the registration of an uninitialized keybinding.
     * Used when a binding exists in storage but not in defaults at load time.
     *
     * @param {Keybindings.Keybinding} keybinding
     */
    _finishUninitializedKeybinding(keybinding: Keybindings.Keybinding): void;
    /**
     * Checks if two modifier sets match exactly.
     *
     * @param {Set<Keybindings.ModifierKey>} modifiers1
     * @param {Set<Keybindings.ModifierKey>} modifiers2
     * @returns {boolean}
     */
    _areModifiersConflicting(modifiers1: Set<Keybindings.ModifierKey>, modifiers2: Set<Keybindings.ModifierKey>): boolean;
    /**
     * Checks if two context sets match exactly.
     *
     * @param {Set<string>} contexts1
     * @param {Set<string>} contexts2
     * @returns {boolean}
     */
    _areContextsConflicting(contexts1: Set<string>, contexts2: Set<string>): boolean;
}
declare namespace KeybindingManager {
    let TextCache: TextCache;
    let ASCIIKeyboardMap: Readonly<{
        KeyA: "A";
        KeyB: "B";
        KeyC: "C";
        KeyD: "D";
        KeyE: "E";
        KeyF: "F";
        KeyG: "G";
        KeyH: "H";
        KeyI: "I";
        KeyJ: "J";
        KeyK: "K";
        KeyL: "L";
        KeyM: "M";
        KeyN: "N";
        KeyO: "O";
        KeyP: "P";
        KeyQ: "Q";
        KeyR: "R";
        KeyS: "S";
        KeyT: "T";
        KeyU: "U";
        KeyV: "V";
        KeyW: "W";
        KeyX: "X";
        KeyY: "Y";
        KeyZ: "Z";
        Digit0: "0";
        Digit1: "1";
        Digit2: "2";
        Digit3: "3";
        Digit4: "4";
        Digit5: "5";
        Digit6: "6";
        Digit7: "7";
        Digit8: "8";
        Digit9: "9";
        Enter: "Enter";
        Numpad0: "Num0";
        Numpad1: "Num1";
        Numpad2: "Num2";
        Numpad3: "Num3";
        Numpad4: "Num4";
        Numpad5: "Num5";
        Numpad6: "Num6";
        Numpad7: "Num7";
        Numpad8: "Num8";
        Numpad9: "Num9";
        NumpadAdd: "Num +";
        NumpadSubtract: "Num -";
        NumpadMultiply: "Num *";
        NumpadDivide: "Num /";
        NumpadEnter: "Enter";
        NumpadDecimal: "Num .";
        ArrowLeft: "Left";
        ArrowRight: "Right";
        ArrowUp: "Up";
        ArrowDown: "Down";
        Tab: "Tab";
        Escape: "Esc";
        Space: "Space";
        Delete: "Delete";
        Backspace: "Backspace";
        PageUp: "Page Up";
        PageDown: "Page Down";
        Home: "Home";
        End: "End";
        Alt: "Alt";
        Shift: "Shift";
        Control: "Ctrl";
        Backquote: "`";
        Backslash: "\\";
        Quote: "'";
        Period: ".";
        BracketLeft: "[";
        Slash: "/";
        Comma: ",";
        Minus: "-";
        Equal: "=";
        Semicolon: ";";
        BracketRight: "]";
    }>;
    let ModifierSymbols: Readonly<{
        Ctrl: "⌃";
        Shift: "⇧";
        Alt: "⌥";
    }>;
    let ReverseModifierSymbols: Readonly<{
        '\u2303': "Ctrl";
        '\u21E7': "Shift";
        '\u2325': "Alt";
    }>;
}
declare var KeyManager: KeybindManager;
