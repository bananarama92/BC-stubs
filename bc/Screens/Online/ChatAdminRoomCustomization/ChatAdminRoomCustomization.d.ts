/**
 * Checks whether the player is allowed to change customization settings
 * @returns {boolean} - true if the player is allowed to change customization settings, false otherwise
 */
declare function ChatAdminRoomCustomizationCanEdit(): boolean;
/**
 * Reconfigures the chat room's customisation
 * @param {string[]} args - The value to set in that property
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationCommand(args: string[]): void;
declare function ChatAdminRoomCustomizationLoad(): Promise<void>;
declare function ChatAdminRoomCustomizationResize(): void;
declare function ChatAdminRoomCustomizationUnload(): void;
declare function ChatAdminRoomCustomizationPreviewMusic(): void;
/**
 * Runs the customization on the current screen, can be called from elsewhere
 * @deprecated DrawProcess knows how to handle custom backgrounds, and the music support is highly specific
 * @param {ServerChatRoomCustomData | null} Custom - The customization to apply
 * @param {Rect | null} DrawBGToRect - If non-null draw the background to these coordinates. Online chat rooms will use the tracked values elsewhere
 * @param {boolean} DrawBGEffects - If true and drawing a background then apply blur/dark/tint
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationProcess(Custom: ServerChatRoomCustomData | null, DrawBGToRect: Rect | null, DrawBGEffects: boolean): void;
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
declare function ChatAdminRoomCustomizationExit(): void;
declare var ChatAdminRoomCustomizationBackground: string;
/** @type {null | ServerChatRoomCustomData} */
declare var ChatAdminRoomCustomizationCurrent: null | ServerChatRoomCustomData;
declare var ChatAdminRoomCustomizationIsPreviewing: boolean;
/** @type {null | "MusicLibrary"} */
declare var ChatAdminRoomCustomizationMode: null | "MusicLibrary";
/** @type {null | HTMLAudioElement} */
declare var ChatAdminRoomCustomizationAudio: null | HTMLAudioElement;
declare const ChatAdminRoomCustomizationImageFormats: string[];
declare var ChatAdminRoomCustomizationMusicLibrary: {
    Name: string;
    URL: string;
    Source: string;
}[];
declare namespace ChatAdminRoomCustomizationIDs {
    let subscreen: string;
    let title: string;
    let main: string;
    let grid: string;
    let cancelButton: string;
    let previewButton: string;
    let clearButton: string;
    let saveButton: string;
    let imageURLInput: string;
    let imageFilterInput: string;
    let imageFillModeSelect: string;
    let musicURLInput: string;
    let musicSyncCheckbox: string;
    let openLibraryButton: string;
}
