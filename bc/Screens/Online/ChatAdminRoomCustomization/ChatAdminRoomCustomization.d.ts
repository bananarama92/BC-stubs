/**
 * Loads the chat Admin Custom screen properties and creates the inputs
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationLoad(): void;
/**
 * Plays or stop the background music
 * @param {string} Music - The URL of the music to play
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationPlayMusic(Music: string): void;
/**
 * Runs the customization on the current screen, can be called from elsewhere
 * @param {object} Custom - The customazation to apply
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationProcess(Custom: object): void;
/**
 * When the chat Admin Custom screen runs, draws the screen
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationRun(): void;
/**
 * Handles the click events on the admin custom screen. Is called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationClick(): void;
/**
 * Handles exiting from the admin custom screen, removes the inputs
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationExit(): void;
declare var ChatAdminRoomCustomizationBackground: string;
declare var ChatAdminRoomCustomizationCurrent: any;
declare var ChatAdminRoomCustomizationMusic: any;
