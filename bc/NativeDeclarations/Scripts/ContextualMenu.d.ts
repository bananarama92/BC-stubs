declare namespace ContextualMenu {
	// #region Item Types

	type ItemType = "button" | "submenu" | "section" | "separator";

	interface ItemBase {
		type: ItemType;
		label?: Thunk<string>;
		disabled?: Thunk<boolean>;
		hidden?: Thunk<boolean>;
	}

	interface Button extends ItemBase {
		type: "button";
		label: Thunk<string>;
		icon?: Thunk<string>;
		callback?: () => void;
	}

	interface Submenu extends ItemBase {
		type: "submenu";
		label: Thunk<string>;
		icon?: Thunk<string>;
		children: Array<Item>;
	}

	interface Section extends ItemBase {
		type: "section";
		label: Thunk<string>;
	}

	interface Separator extends ItemBase {
		type: "separator";
	}

	type Item = Button | Submenu | Section | Separator;

	// #endregion Item Types

	interface ShowOptions {
		event?: PointerEvent;
	}

	interface ContextMap {
		character: { character: OnlineCharacter };
		chatMessage: { messageElement: HTMLElement; msgId: string | null };
	}

	type ContextKey = Extract<keyof ContextMap, string>;
	type ContextData = ContextMap[ContextKey];

	// #region Plugin API

	interface PluginEntry {
		displayName: string;
		itemsByContext: Map<ContextKey, (ctxData: ContextData) => Item[]>;
		menuBuilders: Map<ContextKey, (ctxData: ContextData) => Item[]>;
	}

	interface PluginAPI {
		registerItems: (contextType: ContextKey, items: (ctxData: ContextData) => Item[]) => void;
		unregisterItems: (contextType: ContextKey) => void;
		registerMenu: (contextType: ContextKey, items: (ctxData: ContextData) => Item[]) => void;
		unregisterMenu: (contextType: ContextKey) => void;
		unload: () => void;
	}

	// #endregion Plugin API

}
