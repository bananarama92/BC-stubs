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
 * Does the cleanup, if the user exits the screen
 * @returns {void} - Nothing
 */
declare function DisclaimerExit(): void;
declare function DisclaimerAccept(): void;
declare function DisclaimerResize(): void;
declare var DisclaimerBackground: string;
declare const DisclaimerIDs: Readonly<{
    screen: "disclaimer-screen";
    text: "disclaimer-text";
    return: "disclaimer-return";
    accept: "disclaimer-accept";
    buttons: "disclaimer-buttons";
}>;
