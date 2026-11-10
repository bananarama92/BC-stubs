declare var DojoStruggleBackground: string;
declare var DojoStrugglePosition: number;
declare var DojoStruggleImpulse: number;
/** @type {number[]} */
declare var DojoStruggleRope: number[];
/**
 * Loads the dojo struggle mini game and prepare the rope walls
 * @type {ScreenLoadHandler}
 */
declare function DojoStruggleLoad(): Promise<void>;
declare function DojoStruggleReset(): void;
/**
 * Runs the dojo struggle mini game and draws the relevant information on screen
 * @returns {void} - Nothing
 */
declare function DojoStruggleRun(): void;
/**
 * Handles clicks during the dojo struggle mini game
 * @returns {void} - Nothing
 */
declare function DojoStruggleClick(): void;
/**
 * Handles mouse down during the dojo struggle mini game
 * @returns {void} - Nothing
 */
declare function DojoStruggleMouseDown(): void;
/**
 * Handles key presses during the dojo struggle mini game. A space bar is handled just like a click is.  The C cheat key has a little less impulse.
 * @type {KeyboardEventListener}
 */
declare function DojoStruggleKeyDown(event: KeyboardEvent): boolean;
