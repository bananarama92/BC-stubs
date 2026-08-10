declare var WheelFortuneCustomizeBackground: string;
declare var WheelFortuneCustomizeOffset: number;
declare var WheelFortuneCustomizeList: string;
/**
 * Handles exiting from the screen, updates the lucky wheel in the online shared settings
 * @param {boolean} Save - Whether to push the updated selection to the server
 * @returns {void} - Nothing
 * @satisfies {ScreenExitHandler}
 */
declare function WheelFortuneCustomizeExit(Save?: boolean): void;
