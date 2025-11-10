declare namespace Keybindings {
	/**
	 * Represents a combination of a physical key and optional modifier keys.
	 *
	 * - `key` refers to the `code` property from `KeyboardEvent`, not `key`.
	 *   This means the value is hardware-position-based, not character-based.
	 *   See: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
	 * - `modifiers` is an optional set of additional keys (Shift, Alt, Ctrl)
	 *   that must be pressed alongside the primary key.
	 */
	type KeyCombo = {
		/**
		 * Refer to the `code` property from `KeyboardEvent`.
		 * This means the value is hardware-position-based, not character-based.
		 * See: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
		 */
		key: keyof typeof KeybindingManager.ASCIIKeyboardMap | null;

		/**
		 * An optional set of additional keys (Shift, Alt, Ctrl)
	 	 * that must be pressed alongside the primary key.
		 */
		modifiers?: Set<ModifierKey>;
	};

	/**
	 * Allowed modifier keys in this keybinding system.
	 * Uses human-readable names to match conceptual rather than platform-specific keys.
	 */
	type ModifierKey = "Shift" | "Alt" | "Ctrl";

	/**
	 * Unique identifier for a keybinding context.
	 * Contexts allow the same keybinding to behave differently depending
	 * on active UI states or modes.
	 */
	type ContextId = string;

	/**
	 * Describes an executable action that can be bound to a key combination.
	 */
	type Action = {
		/** Unique identifier */
		readonly id: string;

		/** User-facing label */
		readonly name: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;

		/**
		 * Function executed when triggered.
		 * Returns `true` if handled, `false` otherwise.
		 */
		readonly action: (event: KeyboardEvent) => boolean | void;

		/** Contexts in which the action is valid */
		readonly contextIds: string[];

		/** Optional description */
		readonly description?: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;
	};

	/**
	 * Groups related actions for easier navigation in a UI (e.g., "Editing", "Navigation").
	 */
	type Category = {
		/** Unique identifier */
		readonly id: string;

		/** User-facing label */
		readonly name: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;
	};

	/**
	 * Defines a context in which keybindings can be active.
	 */
	type Context = {
		/** Unique identifier */
		readonly id: ContextId;

		/** User-facing label */
		readonly name: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;

		/** Function returning true if this context should be considered active */
		readonly prerequisite: (event: KeyboardEvent) => boolean;

		/** Optional flag whether to show this context in the UI */
		readonly showInUI?: boolean;
	};

	/**
	 * Represents a specific keybinding configuration for an action.
	 */
	type Keybinding = {
		/** Unique identifier */
		readonly action: Action;

		/** Currently assigned key combo */
		keyCombo?: KeyCombo;

		/** Category this action belongs to */
		readonly categoryId: Category['id'];

		/** System’s original mapping for reset purposes */
		readonly defaultKeyCombo?: KeyCombo;

		/** Flag whether the binding cannot be changed by the user */
		readonly readonly: boolean;

		/** Flag whether the binding exists in storage but not in defaults at load time. Usually means it was added by mod */
		uninitialized?: boolean;
	};

	/**
	 * A lightweight, serialized form of a keybinding.
	 */
	type KeybindingSerialized = {
		/** Unique identifier */
		actionId: string;

		/** String representation of the key combination. (e.g., "KeyK ⌃⇧") */
		keyCombo: string;
	};
}
