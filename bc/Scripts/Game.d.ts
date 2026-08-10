/** BC's version */
declare var GameVersion: string;
declare const GameVersionFormat: RegExp;
/** @type {number | null} */
declare var GameAnimationFrameId: number | null;
/** @type {Worker | null} */
declare var GameWorker: Worker | null;
declare var CommonVersionUpdated: boolean;
/** @type {TouchList | null} */
declare var CommonTouchList: TouchList | null;
declare const DEFAULT_FRAMERATE = 60;
/**
 * Start BC after the webpage has fully loaded
 * @param {boolean} isNode Whether BC is run through the browser or via Node (_i.e._ the testing suite)
 */
declare function GameStart(isNode?: boolean): Promise<void>;
/** Promises that resolve upon reaching specific stages of the BC loading and login process. */
declare const GameReadyState: {
    /**
     * Promise that resolves upon fully loading BC (but before logging in).
     * This promise can safely be accessed starting from the `interactive` document ready state.
     * @readonly
     * @type {Promise<void>}
     */
    load: Promise<void>;
    /**
     * private
     * Promise that resolves upon succesfully logging in.
     * Should not be called directly; use {@link ServerIsLoggedInAsync} instead.
     * @type {undefined | Promise<void>}
     */
    login: undefined | Promise<void>;
};
declare function GameHandleError(): void;
/**
 * Periodically called in the background with low frequency, so the game doesn't freeze, even if the user switches to a different tab.
 * @returns {void}
 */
declare function GameFallbackTimer(): void;
/**
 * Main game running state, runs the drawing
 * @param {number} Timestamp
 */
declare function GameRun(Timestamp: number): void;
/**
 * Main game running state, when in the background. Skips drawing if possible.
 * @param {number} Timestamp
 */
declare function GameRunBackground(Timestamp: number): void;
/**
 * When the user presses a key, we send the KeyDown event to the current screen if it can accept it
 * @param {KeyboardEvent} event
 */
declare function GameKeyDown(event: KeyboardEvent): boolean | undefined;
/**
 * If the user presses the mouse button, we fire the mousedown event for other screens
 * @param {PointerEvent} event
 * @param {HTMLCanvasElement} canvas
 */
declare function GamePointerDown(event: PointerEvent, canvas: HTMLCanvasElement): void;
/**
 * If the user releases the mouse button, we fire the mouseup and click events for other screens
 * @param {PointerEvent} event
 * @param {HTMLCanvasElement} canvas
 */
declare function GamePointerUp(event: PointerEvent, canvas: HTMLCanvasElement): void;
/**
 * If the user stops touching the screen (mobile only), we fire the mouseup event for other screens
 * @param {TouchEvent} event
 */
declare function GameTouchEnd(event: TouchEvent): void;
/**
 * If the user moves the mouse mouse, we keep the mouse position for other scripts and fire the mousemove event for other screens
 * @param {PointerEvent} event
 */
declare function GamePointerMove(event: PointerEvent, forwardToScreens?: boolean): void;
/**
 * Only fire canvas clicks via the `click` event, lest there is the possibility of a canvas click and DOM click firing twice on certain
 * platforms (_e.g._ Android) due to said mobile browsers firing both `touch<x>` and `mouse<x>` events
 * @param {PointerEvent} event
 */
declare function GameClick(event: PointerEvent): void;
/**
 * @param {PointerEvent} event
 * @param {HTMLCanvasElement} canvas
 */
declare function GamePointerCancel(event: PointerEvent, canvas: HTMLCanvasElement): void;
/**
 * @param {PointerEvent} event
 */
declare function GamePointerOut(event: PointerEvent): void;
