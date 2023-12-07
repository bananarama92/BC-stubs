/**
 * Returns TRUE if the map button can be used
 * @returns {boolean} - TRUE if can be used
 */
declare function ChatRoomMapButton(): boolean;
/**
 * Sets the correct wall tile based on it's surrounding (North-West, North-Center, etc.)
 * @param {boolean} CW - If Center West is a wall
 * @param {boolean} CE - If Center East is a wall
 * @param {boolean} SW - If South West is a wall
 * @param {boolean} SC - If South Center is a wall
 * @param {boolean} SE - If South East is a wall
 * @returns {number} - a number linked on the image to use
 */
declare function ChatRoomMapFindWallEffectTile(CW: boolean, CE: boolean, SW: boolean, SC: boolean, SE: boolean): number;
/**
 * Returns TRUE if the X and Y coordinates is a wall tile, if out of bound we also return TRUE
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {boolean} - TRUE if it's a wall
 */
declare function ChatRoomMapIsWall(X: number, Y: number): boolean;
/**
 * Apply a wall "3D" effect on the curent map
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @param {number} ScreenX - The X position on the screen
 * @param {number} ScreenY - The Y position on the screen
 * @param {number} TileWidth - The visible width of a tile
 * @param {number} TileHeight - The visible height of a tile
 * @returns {void} - Nothing
 */
declare function ChatRoomMapWallEffect(X: number, Y: number, ScreenX: number, ScreenY: number, TileWidth: number, TileHeight: number): void;
/**
 * Apply a wall "3D" effect on the curent map
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {number} - The effect number
 */
declare function ChatRoomMapFloorWallEffect(X: number, Y: number): number;
/**
 * Manages collisions, moves the player if she's on a tile that cannot be entered
 * @returns {void} - Nothing
 */
declare function ChatRoomMapCollision(): void;
/**
 * Draw the map grid and character on screen
 * @param {number} Left - The X position on the screen
 * @param {number} Top - The Y position on the screen
 * @param {number} Width - The width size of the drawn map
 * @param {number} Height - The height size of the drawn map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapDrawGrid(Left: number, Top: number, Width: number, Height: number): void;
/**
 * Sets the next update flag for the room if it's not already set, the delay is 3 seconds
 * @returns {void} - Nothing
 */
declare function ChatRoomMapUpdateFlag(): void;
/**
 * Sets the next update flags for the player if it's not already set, the delay is 1 seconds for live data and 10 seconds for last map data
 * @returns {void} - Nothing
 */
declare function ChatRoomMapUpdatePlayerFlag(): void;
/**
 * Updates the room data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapUpdateRoomSync(): void;
/**
 * Updates the player map data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapUpdatePlayerSync(): void;
/**
 * Updates the player last map data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapUpdateLastMapDataSync(): void;
/**
 * Processes the character movement when the timer has expired
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMovementProcess(): void;
/**
 * Draws the map, characters and buttons of the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapDraw(): void;
/**
 * Check if a tile on the map can be entered by a player, and return the number of milliseconds required to reach it
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {number} - The number of milliseconds
 */
declare function ChatRoomMapCanEnterTile(X: number, Y: number): number;
/**
 * Moves the player
 * @param {string} D - The direction being travelled (North, South, East, West)
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMove(D: string): void;
/**
 * Handles keyboard keys in the chat room map screen
 * @returns {void} - Nothing
 */
declare function ChatRoomMapKeyDown(): void;
/**
 * Mouse down event is used to draw on screen and handle the tiles buttons
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMouseDown(): void;
/**
 * Mouse move event is used to draw on screen
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMouseMove(): void;
/**
 * Mouse up event is used to stop drawing
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMouseUp(): void;
/**
 * Mouse wheel event is used to zoom the map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapMouseWheel(Event: any): void;
/**
 * Copies the current map in the clipboard.  Called from the chat field command "mapcopy"
 * @returns {void} - Nothing
 */
declare function ChatRoomMapCopy(): void;
/**
 * Pastes the current map Param data to load it.  Called from the chat field command "mappaste"
 * @param {string} Param - The parameter that comes with the command
 * @returns {void} - Nothing
 */
declare function ChatRoomMapPaste(Param: string): void;
declare var ChatRoomMapVisible: boolean;
declare var ChatRoomMapAllow: boolean;
declare var ChatRoomMapWidth: number;
declare var ChatRoomMapHeight: number;
declare var ChatRoomMapViewRange: number;
declare var ChatRoomMapViewRangeMin: number;
declare var ChatRoomMapViewRangeMax: number;
declare var ChatRoomMapObjectStartID: number;
declare var ChatRoomMapObjectEntryID: number;
declare var ChatRoomMapEditMode: string;
declare var ChatRoomMapEditSubMode: string;
declare var ChatRoomMapEditStarted: boolean;
declare var ChatRoomMapEditObject: any;
declare var ChatRoomMapEditSelection: any[];
declare var ChatRoomMapEditRange: number;
declare var ChatRoomMapUpdateRoomNext: any;
declare var ChatRoomMapUpdatePlayerNext: any;
declare var ChatRoomMapUpdateLastMapDataNext: any;
declare var ChatRoomMapFocusedCharacter: any;
declare var ChatRoomMapBaseMovementSpeed: number;
declare var ChatRoomMapMovement: any;
declare var ChatRoomMapTileList: {
    ID: number;
    Type: string;
    Style: string;
}[];
declare var ChatRoomMapObjectList: ({
    ID: number;
    Type: string;
    Style: string;
    Top?: undefined;
    Unique?: undefined;
    Height?: undefined;
    Speed?: undefined;
    Left?: undefined;
    Width?: undefined;
} | {
    ID: number;
    Type: string;
    Style: string;
    Top: number;
    Unique: boolean;
    Height?: undefined;
    Speed?: undefined;
    Left?: undefined;
    Width?: undefined;
} | {
    ID: number;
    Type: string;
    Style: string;
    Top: number;
    Unique?: undefined;
    Height?: undefined;
    Speed?: undefined;
    Left?: undefined;
    Width?: undefined;
} | {
    ID: number;
    Type: string;
    Style: string;
    Top: number;
    Height: number;
    Speed: number;
    Unique?: undefined;
    Left?: undefined;
    Width?: undefined;
} | {
    ID: number;
    Type: string;
    Style: string;
    Top: number;
    Height: number;
    Unique?: undefined;
    Speed?: undefined;
    Left?: undefined;
    Width?: undefined;
} | {
    ID: number;
    Type: string;
    Style: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Unique?: undefined;
    Speed?: undefined;
})[];
