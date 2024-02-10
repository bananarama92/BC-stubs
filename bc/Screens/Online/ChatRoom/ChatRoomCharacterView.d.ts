/**
 * Indicates if the chat room character view is active or not
 * @returns {boolean} - TRUE if the chat room character view is active, false if not
 */
declare function ChatRoomCharacterViewIsActive(): boolean;
declare function ChatRoomCharacterViewRun(): void;
/**
 * Alter the received message to what will be displayed in the chat log
 *
 * @param {ServerChatRoomMessage} data
 * @param {string} msg
 * @param {Character} SenderCharacter
 * @param {IChatRoomMessageMetadata} metadata
 * @returns {string|null} - The string to display or null if the message should be hidden
 */
declare function ChatRoomCharacterViewDisplayMessage(data: ServerChatRoomMessage, msg: string, SenderCharacter: Character, metadata: IChatRoomMessageMetadata): string | null;
/**
 * Handles clicks the chatroom screen view.
 * @returns {void} - Nothing.
 */
declare function ChatRoomCharacterViewClick(event: any): void;
declare function ChatRoomCharacterViewKeyDown(event: any): boolean;
/**
 * Returns TRUE if the player can leave
 * @returns {boolean} - True if the player can leave
 */
declare function ChatRoomCharacterViewCanLeave(): boolean;
/**
 * Take a screenshot of all characters in the chatroom
 * @returns {void} - Nothing
 */
declare function ChatRoomCharacterViewScreenshot(): void;
/**
 * Returns TRUE if the map button can be used
 * @returns {boolean} - TRUE if can be used
 */
declare function ChatRoomCharacterViewShowMapButton(): boolean;
/**
 * Called when character is clicked
 * @param {Character} C The target character
 * @param {number} CharX Character's X position on canvas
 * @param {number} CharY Character's Y position on canvas
 * @param {number} Zoom Room zoom
 * @param {number} ClickX Click X postion relative to character, without zoom
 * @param {number} ClickY Click Y postion relative to character, without zoom
 * @param {number} Pos Index of target character
 */
declare function ChatRoomCharacterViewClickCharacter(C: Character, CharX: number, CharY: number, Zoom: number, ClickX: number, ClickY: number, Pos: number): void;
/**
 * Draws the chatroom characters.
 * @returns {void} - Nothing.
 */
declare function ChatRoomCharacterViewDraw(): void;
declare function ChatRoomCharacterViewDrawUi(): void;
/**
 * Draw the background of a chat room
 * @param {string} Background - The name of the background image file
 * @param {number} Y - The starting Y co-ordinate of the image
 * @param {number} Zoom - The zoom factor based on the number of characters
 * @param {number} DarkFactor - The value (0 = fully visible, 1 = black) to tint the background
 * @param {boolean} InvertRoom - Whether the background image should be inverted
 * @returns {void} - Nothing
 */
declare function ChatRoomCharacterViewDrawBackground(Background: string, Y: number, Zoom: number, DarkFactor: number, InvertRoom: boolean): void;
/**
 * Iterate over a room's characters
 *
 * This function takes a callback it will call for each character in turn after having
 * calculated their respective drawing parameters (location), accounting for the smooth zoom effect
 * @param {(charIdx: number, charX: number, charY: number, space: number, zoom: number) => boolean | void} callback
 */
declare function ChatRoomCharacterViewLoopCharacters(callback: (charIdx: number, charX: number, charY: number, space: number, zoom: number) => boolean | void): void;
/**
 * Draws any overlays on top of character
 * @param {Character} C The target character
 * @param {number} CharX Character's X position on canvas
 * @param {number} CharY Character's Y position on canvas
 * @param {number} Zoom Room zoom
 * @param {number} Pos Index of target character
 */
declare function ChatRoomCharacterViewDrawOverlay(C: Character, CharX: number, CharY: number, Zoom: number, Pos: number): void;
declare var ChatRoomCharacterViewInitialize: boolean;
declare var ChatRoomCharacterViewSlideWeight: number;
declare var ChatRoomCharacterViewX_Upper: number;
declare var ChatRoomCharacterViewX_Lower: number;
declare var ChatRoomCharacterViewZoom: number;
declare var ChatRoomCharacterViewCharacterCount: number;
/** @type {null | number} */
declare var ChatRoomCharacterViewMoveTarget: null | number;
/**
 * The name of the chat room character view.
 * @type {string}
 */
declare const ChatRoomCharacterViewName: string;
