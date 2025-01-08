declare function ChatCreateLoad(): void;
declare function ChatCreateUnload(): void;
declare function ChatCreateRun(time: number): void;
declare function ChatCreateClick(event: MouseEvent | TouchEvent): void;
declare function ChatCreateKeyDown(event: KeyboardEvent): boolean;
declare function ChatCreateExit(): void;
/**
 * Handles the reception of the server response after attempting to create a chatroom: shows the error message, if applicable
 * @param {ServerChatRoomCreateResponse} data - Response from the server
 * @returns {void} - Nothing
 */
declare function ChatCreateResponse(data: ServerChatRoomCreateResponse): void;
/**
 * Sends the chat room data packet to the server and prepares the player to join a room. The response will be handled by ChatCreateResponse once it is received
 * @returns {void} - Nothing
 */
declare function ChatCreateRoom(): void;
/**
 * When we need to enter the item blocking screen
 * @returns {void} - Nothing
 */
declare function ChatCreateBlockItems(): void;
declare var ChatCreateBackground: string;
declare var ChatCreateResult: any[];
declare var ChatCreateMessage: string;
/** @type {null | boolean} */
declare var ChatCreatePrivate: null | boolean;
/** @type {null | boolean} */
declare var ChatCreateLocked: null | boolean;
/** @type {ChatRoomMapType} */
declare var ChatCreateMap: ChatRoomMapType;
/** @type {ServerChatRoomGame} */
declare var ChatCreateGame: ServerChatRoomGame;
/** @type {ServerChatRoomGame[]} */
declare var ChatCreateGameList: ServerChatRoomGame[];
declare var ChatCreateBackgroundIndex: number;
declare var ChatCreateBackgroundSelect: string;
/** @type {null | string[]} */
declare var ChatCreateBackgroundList: null | string[];
declare var ChatCreateShowBackgroundMode: boolean;
declare var ChatCreateIsHidden: boolean;
/** @type {ServerChatRoomLanguage} */
declare var ChatCreateLanguage: ServerChatRoomLanguage;
/** @type {ServerChatRoomLanguage[]} */
declare var ChatCreateLanguageList: ServerChatRoomLanguage[];
