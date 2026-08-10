/**
 * Controller support function
 *
 * If you need to make sense of browser's gamepad events, https://gamepad-tester.com/ has a nice button viewer.
 *
 * The (crappy) gamepad I have ("PS3 GamePad (STANDARD GAMEPAD Vendor: 054c Product: 0268)")
 * has a lot of weird behaviors; some buttons appear on another gamepad entirely.
 *
 * The initial implementation also reports some gamepads mapping D-pad events to an axis with range > 1, so there's
 * some (incomplete) code to handle that case.
 *
 * FIXME: Not that we actually do anything if the D-pad is an axis.
 */
/**
 * A list of points that can be interacted in the UI.
 *
 * @type {[X: number, Y: number][]}
 */
declare var ControllerActiveAreas: [X: number, Y: number][];
/** Number of detected controllers */
declare var ControllerDetectedCount: number;
/**
 * Gamepad-agnostic constants for the buttons
 *
 * Those values come from the order https://hardwaretester.com/gamepad shows them in
 */
declare const ControllerButton: {
    readonly A: 0;
    readonly B: 1;
    readonly X: 2;
    readonly Y: 3;
    readonly BumperL: 4;
    readonly BumperR: 5;
    readonly TriggerL: 6;
    readonly TriggerR: 7;
    /**
     * Select triggers Launchpad on macOS
     */
    readonly Select: 8;
    readonly Start: 9;
    readonly StickL: 10;
    readonly StickR: 11;
    readonly DPadU: 12;
    readonly DPadD: 13;
    readonly DPadL: 14;
    readonly DPadR: 15;
    /**
     * Home triggers Chrome's screen sharing feature on macOS
     */
    readonly Home: 16;
};
declare const MAX_KNOWN_BUTTONS = 17;
/** Gamepad-agnostic constants for the axes */
declare const ControllerAxis: {
    readonly StickLV: 0;
    readonly StickLH: 1;
    readonly StickRV: 2;
    readonly StickRH: 3;
};
declare const MAX_KNOWN_AXIS = 4;
/**
 * Default button name to gamepad button index mapping
 *
 * The player's calibrated config will be read from their preferences.
 */
declare const ControllerButtonMapping: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
    16: number;
};
/**
 * Default axis name to gamepad axis index mapping
 *
 * The player's calibrated config will be read from their preferences.
 */
declare const ControllerAxisMapping: {
    0: number;
    1: number;
    2: number;
    3: number;
};
/**
 * Multiplier for any axis value we apply
 *
 * Stored in player's preferences.
 */
declare var ControllerSensitivity: number;
/**
 * Minimum range an axis should move before we detect it
 *
 * Stored in player's preferences.
 */
declare var ControllerDeadZone: number;
/**
 * At which stage of the calibration we are
 *
 * -1 means we're not calibrating
 */
declare var ControllerCalibrationStage: number;
/**
 * Whether the current gamepad actually has real D-Pad buttons
 */
declare var ControllerDPadAsAxisWorkaround: boolean;
/**
 * Whether we're waiting for gamepad axes to reset
 */
declare var ControllerAxesWaitRelease: boolean;
/**
 * Whether we're waiting for gamepad buttons to be released
 */
declare var ControllerButtonsWaitRelease: boolean;
/**
 * List of axes we ignore
 *
 * @type {number[]}
 */
declare var ControllerIgnoredAxes: number[];
/**
 * The previous state the buttons were in, for each gamepad
 *
 * Used to handle repeats
 * @type {boolean[][]}
 */
declare var ControllerLastButtonState: boolean[][];
/**
 * Register the gamepad connection/disconnection events.
 */
declare function ControllerStart(): void;
/**
 * Check whether controller support is enabled.
 *
 * Uses the Player's configuration, with a workaround to allow
 * the controller to activate on login.
 */
declare function ControllerIsEnabled(): boolean;
/**
 * Check whether we have detected a gamepad.
 */
declare function ControllerIsActive(): boolean;
/**
 * Load a gamepad mapping
 * @param {Partial<Record<ControllerButton, number>>} buttonsMapping
 * @param {Partial<Record<ControllerAxis, number>>} axisMapping
 */
declare function ControllerLoadMapping(buttonsMapping: Partial<Record<ControllerButton, number>>, axisMapping: Partial<Record<ControllerAxis, number>>): void;
/**
 * Main gamepad processing.
 *
 * This functions goes over gamepads and collects their inputs.
 */
declare function ControllerProcess(): void;
/**
 * Adds a point to the active points list.
 *
 * @param {number} X - The X coordinate of the point
 * @param {number} Y - The Y coordinate of the point
 */
declare function ControllerAddActiveArea(X: number, Y: number): void;
/**
 * Removes all active points.
 */
declare function ControllerClearAreas(): void;
declare const ControllerMissingAxisWarning: Set<any>;
/**
 * Detect and convert gamepad axis movements
 * @param {readonly number[]} axes the raw data of all axes of the controller
 */
declare function ControllerProcessAxis(axes: readonly number[]): void;
/**
 * Returns TRUE if current screen is a game that handles the controller, sends the input to that screen
 * @param {readonly GamepadButton[]} buttons - The raw button data
 * @return {boolean}
 */
declare function ControllerManagedByGame(buttons: readonly GamepadButton[]): boolean;
declare const ControllerMissingButtonWarning: Set<any>;
/**
 * Handles button input
 * @param {readonly GamepadButton[]} buttons raw buttons data
 */
declare function ControllerProcessButton(buttons: readonly GamepadButton[]): void;
declare const ControllerCalibrationAxisOffset = 100;
/**
 * Start the calibration process
 * @param {"buttons"|"axis"} type
 */
declare function ControllerStartCalibration(type: "buttons" | "axis"): void;
/**
 * Move to the next calibration step
 * @param {boolean} skip
 */
declare function ControllerCalibrationNextStage(skip?: boolean): void;
/**
 * Stop the calibration process
 *
 * @param {boolean} commit - Whether to save the changes made to the mappings or not
 *
 */
declare function ControllerStopCalibration(commit?: boolean): void;
/**
 * Whether we're currently calibrating the controller
 */
declare function ControllerIsCalibrating(): boolean;
/**
 * The label for the current stage of calibration
 * @returns {string}
 */
declare function ControllerCalibrationStageLabel(): string;
declare const ControllerCalibrationLowWatermark = 0.05;
declare const ControllerCalibrationHighWatermark = 0.8;
/**
 * Handles the sticks input when calibrating
 * @param {readonly number[]} axes the raw data of all axes of the controller
 */
declare function ControllerCalibrateAxis(axes: readonly number[]): void;
/**
 * Handles gamepad button calibration
 * @param {readonly GamepadButton[]} buttons raw buttons data
 */
declare function ControllerCalibrateButtons(buttons: readonly GamepadButton[]): void;
/**
 * Finds the closest point in a list, favoring the given direction.
 *
 * Used to navigate the active zones with a controller.
 *
 * @param {[X: number, Y: number]} point
 * @param {[X: number, Y: number][]} points
 * @param {"Up"|"Down"|"Left"|"Right"} direction
 */
declare function ControllerFindClosestPoint(point: [X: number, Y: number], points: [X: number, Y: number][], direction: "Up" | "Down" | "Left" | "Right"): number[] | null;
/**
 * Moves the pointer throught the active zones in the direction wanted.
 *
 * @param {"Up"|"Down"|"Left"|"Right"} direction
 */
declare function ControllerMoveToActiveZone(direction: "Up" | "Down" | "Left" | "Right"): void;
