/**
 * Loads the relog screen
 * @returns {void} Nothing
 */
declare function RelogLoad(): void;
/**
 * Unload the relog screen
 */
declare function RelogUnload(): void;
/**
 * Runs the relog screen
 * @returns {void} Nothing
 */
declare function RelogRun(): void;
/**
 * Handles player click events on the relog screen
 * @returns {void} Nothing
 */
declare function RelogClick(): void;
declare function RelogKeyDown(event: KeyboardEvent): boolean;
declare function RelogExit(): void;
declare var RelogBackground: string;
declare var RelogCanvas: HTMLCanvasElement;
/** @type {null | RelogData} */
declare var RelogData: null | RelogData;
