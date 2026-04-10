declare function WheelFortuneCustomizeLoad(): Promise<void>;
declare function WheelFortuneCustomizeRun(time: number): void;
declare function WheelFortuneCustomizeClick(event: PointerEvent): void;
/**
 * Handles exiting from the screen, updates the lucky wheel in the online shared settings
 * @param {boolean} Save - Whether to push the updated selection to the server
 * @returns {void} - Nothing
 * @satisfies {ScreenExitHandler}
 */
declare function WheelFortuneCustomizeExit(Save?: boolean): void;
declare var WheelFortuneCustomizeBackground: string;
declare var WheelFortuneCustomizeOffset: number;
declare var WheelFortuneCustomizeList: string;
