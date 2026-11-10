declare namespace ElementHelp {
  type ElementOrId = Element | string;
  type AnchorY = 'top' | 'bottom';
  type AnchorX = 'left' | 'right';
  type AnchorXY = `${AnchorY}-${AnchorX}`;
}

declare namespace ElementSwipe {
	interface Options {
		/**
		 * The direction one should swipe in.
		 *
		 * Defaults to `right`.
		 */
		direction?: "left" | "right" | "up" | "down";
		/**
		 * The minimum distance one should swipe in pixels.
		 *
		 * Defaults to 2.5% of the browser window's width.
		 */
		minSwipeDistance?: number;
		/**
		 * A callback to-be executed after succesfully swiping.
		 *
		 * Default to dispatching a `click` event.
		 */
		onClose?: (elem: HTMLElement, ev: TouchEvent) => any;
		/**
		 * A custom animation to play after succesfully executing a swipe
		 *
		 * Defaults to a translation + fade-out in the {@link Options.direction} direction.
		 */
		animation?: Animation;
	}
}

declare namespace ElementUnpackIDs {
	/** Further options for {@link ElementUnpackIDs}. */
	interface Options<T extends HTMLElement = HTMLElement> {
		/**
		 * The root node.
		 * Generally only relevant when working within a shadow root or some other {@link DocumentFragment} that is not {@link document}.
		 */
		root?: Element;
		/**
		 * An {@link Array.filter} callback for filtering out specific element types.
		 * Defaults to just filtering out `null` entries.
		 */
		filter?: (value: null | HTMLElement, index: number, array: (null | HTMLElement)[]) => value is T;
	}
}

/** Options and instance type returned by {@link ElementCreateSearchableDropdown}. */
declare namespace ElementSearchableDropdown {
	interface OptionItem {
		value: string;
		label: string;
		group?: string;
		disabled?: boolean;
	}

	/** Imperative helpers attached to the root element returned from {@link ElementCreateSearchableDropdown}. */
	interface SearchableDropdownInstance {
		bcSetOptions(optionsList: readonly OptionItem[], newValue?: string): void;
		bcSetNewValue(newValue: string): void;
		bcSetDisabled(disabled: boolean): void;
	}

	/** Root `<div>` of a searchable dropdown. */
	type SearchableDropdownElement = HTMLDivElement & SearchableDropdownInstance;

	interface CreateOptions {
		value?: string;
		placeholder?: string;
		searchPlaceholder?: string;
		emptyText?: string;
		disabled?: boolean;
		parent?: Node;
	}
}

declare namespace ElementSearchQuery {
	interface Options {
		/** Custom classes to-be applied to the hightlighted text. Defaults to `"highlight"`. */
		classList?: readonly string[];
		/** Custom tag to-be applied to the hightlighted text. Defaults to `<em>`. */
		tag?: keyof HTMLElementTagNameMap;
	}
}

declare namespace ElementInput {
	/**
	 * Controls {@link ElementInput.Create} can build.
	 * Add a member here, then give it a tag in {@link ElementInput._tags}, when supporting another control.
	 */
	type KnownType = "text" | "number" | "password" | "textarea";

	/**
	 * {@link KnownType}, plus any other string so custom input types stay assignable
	 * without collapsing autocomplete for the known controls.
	 */
	type Type = KnownType | (string & {});

	/** Element produced for a {@link Type}. */
	type ElementFor<T extends Type = Type> = T extends "textarea" ? HTMLTextAreaElement : HTMLInputElement;

	/** DOM tag used for a {@link Type}. Only `"textarea"` is not an `<input>`. */
	type TagFor<T extends Type = Type> = T extends "textarea" ? "textarea" : "input";

	/** Fields shared by every {@link Type}. New controls should extend this. */
	interface SharedOptions {
		type?: Type;
	}

	/** `<input type="text">` and `<input type="password">`. */
	interface TextOptions extends SharedOptions {
		type?: "text";
	}

	/**
	 * `<input type="number">`.
	 * Sanitizes on blur and steps on wheel via {@link ElementNumberInputBlur} and {@link ElementNumberInputWheel},
	 * unless `htmlOptions` replaces those listeners. `inputMode` defaults to `"numeric"`.
	 */
	interface NumberOptions extends SharedOptions {
		type: "number";
	}

	/** `<textarea>`. */
	interface TextAreaOptions extends SharedOptions {
		type: "textarea";
	}

	type Options = TextOptions | NumberOptions | TextAreaOptions;
}
