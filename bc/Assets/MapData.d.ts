/**
 * Creates an function that loops through images
 * @param {string} baseName - Source
 * @param {number} frames
 * @param {number} duration - in ms
 * @param {boolean} reverse - TRUE for reverse, totalFramesCount to 1
 * @returns {ChatRoomMapObject["BuildImageName"]}
 */
declare function ChatRoomMapViewCreateAnimation(baseName: string, frames: number, duration?: number, reverse?: boolean): ChatRoomMapObject["BuildImageName"];
/** All kitchen counter variants join each other into runs and corners */
declare const AssetsMapDataKitchenCounterIDs: number[];
/**
 * Creates a function that picks the kitchen counter piece matching the neighboring kitchen counters
 * @param {string} baseName - Image name prefix, the piece name is appended to it
 * @returns {ChatRoomMapObject["BuildImageName"]}
 */
declare function ChatRoomMapViewCreateKitchenCounterImage(baseName: string): ChatRoomMapObject["BuildImageName"];
/**
 * Creates a function that picks the Left / Middle / Right / Single piece of an object joining the same object beside it
 * @param {string} baseName - Image name prefix, the piece name is appended to it
 * @returns {ChatRoomMapObject["BuildImageName"]}
 */
declare function ChatRoomMapViewCreateRowImage(baseName: string): ChatRoomMapObject["BuildImageName"];
/**
 * To prevent repeating the same logic, we create a function that returns a function
 * @param {ChatRoomMapDirection} direction
 * @param {number} speed - how fast to trigger, in ms
 * @returns {ChatRoomMapObject["OnEnter"]}
 */
declare function ChatRoomMapViewCreateOnEnterConveyorLogic(direction: ChatRoomMapDirection, speed: number): ChatRoomMapObject["OnEnter"];
/**
 * Returns the OnEnter for a teleport pad: after the delay the player is sent to where it points
 * @param {number} delay - How long the player stays on the pad first, in milliseconds
 * @returns {ChatRoomMapObject["OnEnter"]}
 */
declare function ChatRoomMapViewCreateOnEnterTeleportLogic(delay: number): ChatRoomMapObject["OnEnter"];
/**
 * Returns the OnClick for a teleport pad: in the object settings mode, admins see where it sends to, outlined on the map, and change it
 * @returns {ChatRoomMapObject["OnClick"]}
 */
declare function ChatRoomMapViewCreateOnClickTeleportLogic(): ChatRoomMapObject["OnClick"];
/**
 * Shows where a teleport pad sends to, with buttons to change it
 * @param {number} x
 * @param {number} y
 * @param {string} [message] - Shown in the footer
 */
declare function ChatRoomMapViewShowTeleportPadMenu(x: number, y: number, message?: string): void;
/**
 * Opens or closes the color picker of a teleport pad, a two way partner gets the same color
 * @param {number} x
 * @param {number} y
 */
declare function ChatRoomMapViewTeleportPadPickColor(x: number, y: number): void;
/**
 * Sets where the selected teleport pad sends to, from the tile clicked after "Pick on the map"
 * @param {ChatRoomMapPos} pos - The tile clicked
 */
declare function ChatRoomMapViewTeleportPadPick(pos: ChatRoomMapPos): void;
/**
 * @param {unknown} text
 * @returns {string}
 */
declare function MapSanitizeSignText(text: unknown): string;
/**
 * To prevent repeating the same logic, we create a function that returns a function
 * @param {string} name - Sign Name
 * @returns {ChatRoomMapObject["OnClick"]}
 */
declare function ChatRoomMapViewCreateOnClickSignLogic(name: string): ChatRoomMapObject["OnClick"];
/**
 * The colors new pairs of teleport pads start with, any color can be picked afterwards
 * @type {readonly HexColor[]}
 */
declare const AssetsMapDataTeleportPadColors: readonly HexColor[];
/**
 * Opens the menu of an object that can be a tether point: admins make it one, and leashes are tied to it there
 * @param {number} x - The X position of the object
 * @param {number} y - The Y position of the object
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewOnClickTetherPoint(x: number, y: number): void;
/**
 * A list of predefined lighting effects. May be replaced with a color picker in the future.
 * @type {ChatRoomMapEffect[]}
 */
declare const AssetsMapDataEffects: ChatRoomMapEffect[];
/** @type {ChatRoomMapTile[]} */
declare const AssetsMapDataTiles: ChatRoomMapTile[];
/** @type {ChatRoomMapObject[]} */
declare const AssetsMapDataObjects: ChatRoomMapObject[];
