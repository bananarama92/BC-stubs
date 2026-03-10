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
