/**
 * Show the room editor screen in creation mode
 */
declare function ChatAdminShowCreate(): void;
/**
 * Show the room editor screen in update mode
 * @param {ChatRoom} roomData
 */
declare function ChatAdminShowEdit(roomData: ChatRoom): void;
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
declare function ChatAdminLoad(): Promise<void>;
declare function ChatAdminUnload(): void;
/**
 * Handles drawing the editor screen
 */
declare function ChatAdminRun(): void;
/**
 * Handles the click events on the editor screen. Is called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ChatAdminClick(): void;
/**
 * Handles accepting the room editor
 */
declare function ChatAdminCommit(): void;
declare function ChatAdminKeyDown(event: KeyboardEvent): boolean;
declare function ChatAdminExit(): void;
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
declare var ChatAdminBackground: string;
declare var ChatAdminMessage: string;
declare var ChatAdminBackgroundIndex: number;
declare var ChatAdminPreviewBackgroundMode: boolean;
/** @type {ServerChatRoomGame[]} */
declare var ChatAdminGameList: ServerChatRoomGame[];
/**
 * @deprecated
 * @type {ServerChatRoomLanguage[]}
 */
declare var ChatAdminLanguageList: ServerChatRoomLanguage[];
/** @type {null | string[]} */
declare var ChatAdminBackgroundList: null | string[];
/** @type {ServerChatRoomLanguage} */
declare var ChatAdminDefaultLanguage: ServerChatRoomLanguage;
declare var ChatAdminVisibilityModeLabels: ChatRoomVisibilityModeLabel[];
declare var ChatAdminVisibilityModeValues: ServerChatRoomRole[][];
declare var ChatAdminVisibilityModeIndex: number;
declare var ChatAdminAccessModeLabels: ChatRoomAccessModeLabel[];
declare var ChatAdminAccessModeValues: ServerChatRoomRole[][];
declare var ChatAdminAccessModeIndex: number;
/** @type {ChatRoomAdminSettings | null} */
declare var ChatAdminData: ChatRoomAdminSettings | null;
/** @type {"create" | "update" | null} */
declare var ChatAdminMode: "create" | "update" | null;
