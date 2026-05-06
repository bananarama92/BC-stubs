declare function DisclaimerLoad(): Promise<void>;
/**
 * Runs & draws the disclaimer screen
 * @returns {void} - Nothing
 */
declare function DisclaimerRun(): void;
/**
 * Handles click events in the disclaimer screen
 * @returns {void} - Nothing
 */
declare function DisclaimerClick(): void;
declare function DisclaimerUnload(): void;
/**
 * Opens the disclaimer screen and optionally runs a callback when the player closes it.
 * @param {(accepted: boolean) => void} closeCallback
 * @returns {boolean} Whether the player has already accepted the disclaimer
 */
declare function DisclaimerOpen(closeCallback: (accepted: boolean) => void): boolean;
/**
 * @param {boolean} accepted
 */
declare function DisclaimerClose(accepted: boolean): void;
declare function DisclaimerResize(): void;
declare var DisclaimerBackground: string;
declare const DisclaimerIDs: Readonly<{
    screen: "disclaimer-screen";
    text: "disclaimer-text";
    return: "disclaimer-return";
    accept: "disclaimer-accept";
    buttons: "disclaimer-buttons";
}>;
declare const DisclaimerVersion: 1;
/** @type {null | ((accepted: boolean) => void)} */
declare var DisclaimerCloseCallback: null | ((accepted: boolean) => void);
