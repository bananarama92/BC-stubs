declare var ChatAdminBackground: string;
declare var ChatAdminMessage: string;
/** @deprecated */
declare var ChatAdminBackgroundIndex: number;
/** @deprecated */
declare var ChatAdminPreviewBackgroundMode: boolean;
/** @type {ServerChatRoomGame[]} */
declare var ChatAdminGameList: ServerChatRoomGame[];
/** @type {null | string[]} */
declare var ChatAdminBackgroundList: null | string[];
/** @type {ServerChatRoomLanguage} */
declare var ChatAdminDefaultLanguage: ServerChatRoomLanguage;
/** @type {ChatRoomAdminSettings | null} */
declare var ChatAdminData: ChatRoomAdminSettings | null;
/** @type {"create" | "update" | null} */
declare var ChatAdminMode: "create" | "update" | null;
declare const ChatAdminID: Readonly<{
    screen: "chat-admin-screen";
    accept: "chat-admin-accept";
    cancel: "chat-admin-cancel";
    roomImport: "chat-admin-room-import";
    roomExport: "chat-admin-room-export";
    search: "chat-admin-search-button";
    searchInput: "chat-admin-search";
    nameInput: "chat-admin-input-name";
    descriptionInput: "chat-admin-input-description";
    sizeInput: "chat-admin-input-size";
    adminListInput: "chat-admin-input-admin-list";
    whitelistInput: "chat-admin-input-whitelist";
    banListInput: "chat-admin-input-ban-list";
    language: "chat-admin-language";
    backgroundPreview: "chat-admin-background-preview";
    backgroundView: "chat-admin-background-view";
    backgroundPrev: "chat-admin-background-prev";
    backgroundNext: "chat-admin-background-next";
    backgroundSelect: "chat-admin-background-select";
    blockCategory: "chat-admin-block-category";
    game: "chat-admin-game";
    customization: "chat-admin-customization";
    map: "chat-admin-map";
    visibility: "chat-admin-visibility";
    access: "chat-admin-access";
}>;
/**
 * Loads the given room data and sets up the UI for it
 * @type {ScreenLoadHandler}
 */
declare function ChatAdminLoad(): Promise<void>;
declare function ChatAdminRun(): void;
/**
 * Handles clicks that reach the canvas. Is called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ChatAdminClick(): void;
/**
 * Handles the key presses while in the creation screen. When the user presses enter, we create the room.
 * @type {KeyboardEventListener}
 */
declare function ChatAdminKeyDown(event: KeyboardEvent): boolean;
declare function ChatAdminResize(): void;
/**
 * Handles exiting from the editor screen, removes the inputs and resets the state of the variables
 * @type {ScreenExitHandler}
 */
declare function ChatAdminExit(): void;
/**
 * Handles unloading the editor screen
 * @type {ScreenUnloadHandler}
 */
declare function ChatAdminUnload(): void;
declare function ChatAdminImport(): void;
/**
 * Point the editor, thumbnail, and preview at a background.
 * @param {string} name
 */
declare function ChatAdminApplyBackground(name: string): void;
/**
 * Step through backgrounds in the same order as the background dropdown.
 * @param {number} delta
 */
declare function ChatAdminShiftBackground(delta: number): void;
/**
 * Whether the full-screen background preview is open.
 * @returns {boolean}
 */
declare function ChatAdminBackgroundPreviewOpen(): boolean;
/**
 * Show or hide the full-screen background preview.
 * @param {boolean} open
 */
declare function ChatAdminSetBackgroundPreview(open: boolean): void;
/**
 * Match a visibility or access value to its mode label.
 * @param {Readonly<Record<string, readonly ServerChatRoomRole[]>>} modes
 * @param {readonly ServerChatRoomRole[]} roles
 * @returns {string}
 */
declare function ChatAdminModeKey(modes: Readonly<Record<string, readonly ServerChatRoomRole[]>>, roles: readonly ServerChatRoomRole[]): string;
/**
 * Title shown in the screen heading when no status message is set.
 * @returns {string}
 */
declare function ChatAdminTitle(): string;
/**
 * Store a status message and show it in the screen heading when the editor is open.
 * @param {string} message
 */
declare function ChatAdminSetMessage(message: string): void;
declare function ChatAdminExport(): void;
/**
 * Show the room editor screen in creation mode
 */
declare function ChatAdminShowCreate(): void;
/**
 * Show the room editor screen in update mode
 * @param {ServerChatRoomData} roomData
 */
declare function ChatAdminShowEdit(roomData: ServerChatRoomData): void;
/**
 * Sets up the chat room editor screen and switches to it
 *
 * This should not be called directly; use {@link ChatAdminShowCreate} or {@link ChatAdminShowEdit}
 *
 * @param {"create" | "update"} mode
 * @param {ChatRoomSettings | null} roomData
 */
declare function ChatAdminStart(mode: "create" | "update", roomData?: ChatRoomSettings | null): void;
/**
 * Return whether the editor can actually modify the data
 * @returns {boolean}
 */
declare function ChatAdminCanEdit(): boolean;
/**
 * Handles accepting the room editor
 */
declare function ChatAdminCommit(): void;
/**
 * Return whether the data in the editor can actually be committed
 * @returns {boolean}
 */
declare function ChatAdminCanCommit(): boolean;
/**
 * Validates whether the given settings is in the correct format for a ChatRoomAdminSettings object
 * @param {unknown} settings - The settings to validate
 * @returns {settings is ChatRoomAdminSettings} - True if the settings are valid, false otherwise
 */
declare function ChatEditorValidateAdminSettings(settings: unknown): settings is ChatRoomAdminSettings;
/**
 * Imports the given ChatRoomAdminSettings into the editor inputs
 * @param {ChatRoomAdminSettings} settings - The chat room settings to import
 */
declare function ChatEditorAdminSettingsImport(settings: ChatRoomAdminSettings): void;
/**
 * Gathers the data from the editor inputs and returns it as a ChatRoomAdminSettings object
 * @returns {ChatRoomAdminSettings | undefined} - The chat room settings based on the current editor inputs, or undefined if ChatAdminData is not set
 */
declare function ChatEditorGetAdminSettings(): ChatRoomAdminSettings | undefined;
/**
 * Sends the chat room data packet to the server. The response will be handled by ChatAdminResponse once it is received
 * @returns {void} - Nothing
 */
declare function ChatEditorUpdateRoom(): void;
/**
 * Handles the reception of the server response after attempting to update a chatroom
 * @param {ServerChatRoomUpdateResponse} data - Response from the server ("Updated" or error message)
 * @returns {void} - Nothing
 */
declare function ChatAdminResponse(data: ServerChatRoomUpdateResponse): void;
/**
 * Sends the chat room data packet to the server and prepares the player to join a room. The response will be handled by ChatCreateResponse once it is received
 * @returns {void} - Nothing
 */
declare function ChatEditorCreateRoom(): void;
/**
 * Handles the reception of the server response after attempting to create a chatroom: shows the error message, if applicable
 * @param {ServerChatRoomCreateResponse} data - Response from the server
 * @returns {void} - Nothing
 */
declare function ChatCreateResponse(data: ServerChatRoomCreateResponse): void;
