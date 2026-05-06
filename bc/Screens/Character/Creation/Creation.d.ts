/**
 * Enter on a creation field: move focus to the next input, or submit on the last field.
 * @param {string | null} nextFieldId Next input id, or null to run {@link CreationSubmit}.
 * @returns {(this: HTMLInputElement, ev: KeyboardEvent) => void}
 */
declare function CreationKeyDownEnter(nextFieldId: string | null): (this: HTMLInputElement, ev: KeyboardEvent) => void;
declare function CreationLoad(): Promise<void>;
/**
 * Runs the character creation screen. Draws all needed input fields and buttons.
 * If the import of Bondage College data is possible, an appropriate check box is drawn.
 * The function is called dynamically.
 * @returns {void} - Nothing
 */
declare function CreationRun(): void;
/**
 * Handles the server response to a creation request. Creates the character, if possible,
 * initializes the basic data and sends the newborn to the maid in the main hall.
 * @param {ServerAccountCreateResponse} data - The recieved data from the server
 * @returns {void} - Nothing
 */
declare function CreationResponse(data: ServerAccountCreateResponse): void;
/**
 * Handles click events in the creation dialog.
 * Imports data from Bondage College and creates a character.
 * @returns {void} - Nothing
 */
declare function CreationClick(): void;
declare function CreationExit(): void;
declare function CreationUnload(): void;
declare function CreationResize(): void;
/**
 * Update the current creation message in the DOM.
 * @returns {void} - Nothing
 */
declare function CreationUpdateMessage(): void;
/**
 * Creates a labeled input for the creation screen.
 * @param {string} labelKey - The text key for the label
 * @param {string} inputId - The input element ID
 * @param {string} type - The input type
 * @param {string} value - The default value
 * @param {number | string} maxLength - The max input length
 * @param {HTMLElement} parent - The parent element
 * @returns {HTMLInputElement} - The input element
 */
declare function CreationCreateLabeledInput(labelKey: string, inputId: string, type: string, value: string, maxLength: number | string, parent: HTMLElement): HTMLInputElement;
/**
 * Returns a list of invalid characters based on an allowed-char regex.
 * @param {string} value - The input value to check
 * @param {RegExp} allowedCharRegex - Regex that matches allowed characters
 * @returns {string} - A comma-separated list of invalid characters
 */
declare function CreationDescribeInvalidCharacters(value: string, allowedCharRegex: RegExp): string;
/**
 * Returns a user-facing max-length text.
 * @param {HTMLInputElement} input - The input element
 * @returns {string} - The max length text
 */
declare function CreationMaxLengthMessage(input: HTMLInputElement): string;
/**
 * Returns the allowed-pattern regex for a field.
 * @param {HTMLInputElement} input - The input element
 * @returns {RegExp | null} - The allowed regex or null
 */
declare function CreationGetAllowedPattern(input: HTMLInputElement): RegExp | null;
/**
 * Sets an error bubble message for a field.
 * @param {HTMLInputElement} input - The input element
 * @param {string} message - The error message
 * @returns {void} - Nothing
 */
declare function CreationSetFieldError(input: HTMLInputElement, message: string): void;
/**
 * Clears an error bubble message for a field.
 * @param {HTMLInputElement} input - The input element
 * @returns {void} - Nothing
 */
declare function CreationClearFieldError(input: HTMLInputElement): void;
/**
 * Validates the user input fields and returns error descriptions.
 * @returns {{ errors: string[], firstInvalid: HTMLInputElement | null }} - Errors and first invalid input
 */
declare function CreationValidateInputs(): {
    errors: string[];
    firstInvalid: HTMLInputElement | null;
};
/**
 * Attempts to create a new account after validation.
 * @returns {void} - Nothing
 */
declare function CreationSubmit(): void;
declare var CreationBackground: string;
declare var CreationMessage: string;
declare const CreationIDs: Readonly<{
    screen: "creation-screen";
    form: "creation-form";
    fields: "creation-fields";
    importRow: "creation-import-row";
    actions: "creation-actions";
    loginRow: "creation-login-row";
    inputCharacter: "InputCharacter";
    inputName: "InputName";
    inputPassword1: "InputPassword1";
    inputPassword2: "InputPassword2";
    inputEmail: "InputEmail";
    importCheckbox: "creation-import-checkbox";
    createButton: "creation-create-button";
    loginButton: "creation-login-button";
}>;
