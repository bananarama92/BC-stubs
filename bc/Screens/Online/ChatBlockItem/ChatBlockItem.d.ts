declare var ChatBlockItemBackground: string;
/** @type {ServerChatRoomBlockCategory[]} */
declare var ChatBlockItemList: ServerChatRoomBlockCategory[];
/** @type {ServerChatRoomBlockCategory[]} */
declare var ChatBlockItemCategory: ServerChatRoomBlockCategory[];
declare const ChatBlockID: Readonly<{
    screen: "chat-block-item-screen";
    hint: "chat-block-item-hint";
    list: "chat-block-item-list";
    exit: "chat-block-item-exit";
    /**
     * @param {ServerChatRoomBlockCategory} category
     * @returns {string}
     */
    checkbox(category: ServerChatRoomBlockCategory): string;
}>;
/**
 * Loads the chat room item blocking screen
 * @type {ScreenLoadHandler}
 */
declare function ChatBlockItemLoad(): Promise<void>;
/**
 * Adds or removes a blocked category
 * @param {ServerChatRoomBlockCategory} category
 * @param {boolean} blocked
 * @returns {void}
 */
declare function ChatBlockItemToggle(category: ServerChatRoomBlockCategory, blocked: boolean): void;
/**
 * Runs the chat room item blocking screen
 * @returns {void} - Nothing
 */
declare function ChatBlockItemRun(): void;
/**
 * Handles clicks that reach the canvas. Called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ChatBlockItemClick(): void;
/** @type {ScreenResizeHandler} */
declare function ChatBlockItemResize(): void;
/** @type {ScreenUnloadHandler} */
declare function ChatBlockItemUnload(): void;
/**
 * Handles exiting from the screen
 * @type {ScreenExitHandler}
 */
declare function ChatBlockItemExit(): void;
