/**
 * Returns TRUE if the player is an admin and activated her super powers on the map
 * @returns {boolean} - TRUE if super powers are active
 */
declare function ChatRoomMapViewHasSuperPowers(): boolean;
/**
 * When the screen loses focus, we clear the keys pressed because we don't want movement to get stuck
 */
declare function ChatRoomMapViewBlur(): void;
/**
 * Initializes the map to its default blank state
 * @param {ChatRoomMapType} mode
 * @returns {ServerChatRoomMapData}
 */
declare function ChatRoomMapViewInitialize(mode: ChatRoomMapType): ServerChatRoomMapData;
/**
 * Initializes the player map data to its default blank state
 * @param {Character} C - The character to be initialized
 * @returns {ChatRoomMapData}
 */
declare function ChatRoomMapViewInitializeCharacter(C: Character): ChatRoomMapData;
/**
 * Validate the passed chat room map positions.
 * @param {unknown} position
 * @returns {ChatRoomMapPos}
 */
declare function ChatRoomMapViewValidatePosition(position: unknown): ChatRoomMapPos;
/**
 * Checks if the coordinates are out of bounds relative to the map
 * @param {ChatRoomMapPos} position
 */
declare function ChatRoomMapViewIsOutOfBounds(position: ChatRoomMapPos): boolean;
/**
 * Performs cleanup when leaving the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewLeave(): void;
/**
 * Activates the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewActivate(): void;
/**
 * Deactivates the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDeactivate(): void;
/**
 * Indicates if the chat room map view is active or not
 * @returns {boolean} - TRUE if the chat room character view is active, false if not
 */
declare function ChatRoomMapViewIsActive(): boolean;
declare function ChatRoomMapViewRun(time: number): void;
/**
 * Returns TRUE if the player can leave from the map
 * @returns {boolean} - True if the player can leave
 */
declare function ChatRoomMapViewCanLeave(): boolean;
/**
 * Take a screenshot of the current section of the map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewScreenshot(): void;
/**
 * Returns TRUE if the player can enter in whisper mode on the current view with the currently focused character
 * @param {Character} C - The character to evaluate
 * @returns {boolean} - TRUE is whipser can be started
 */
declare function ChatRoomMapViewCanStartWhisper(C: Character): boolean;
/**
 * Handles the reception of the room properties from the server.
 * @param {ServerChatRoomSyncMessage} data - Room object containing the updated chatroom properties.
 * @returns {void} - Nothing.
 */
declare function ChatRoomMapViewSyncRoomProperties(data: ServerChatRoomSyncMessage): void;
/**
 * Gets a index number for the tile and obejct lists and returns the corrosponting coordinates in X and Y
 * @param {number} index - Index number for the tile and object lists
 * @returns {{x: number, y: number}} - Object containing the resulting x and y coordinates.
 */
declare function ChatRoomMapViewIndexToCoordinates(index: number): {
    x: number;
    y: number;
};
/**
 * Gets coordinates in X and Y and returns the corrosponding index number for the tile and object list
 * @param {number} x - X-coordinate to be translated
 * @param {number} y - Y-coordinate to be translated
 * @returns {number} - Index number for the tile and object lists
 */
declare function ChatRoomMapViewCoordinatesToIndex(x: number, y: number): number;
/**
 * Calculates the visibility mask and audibility mask for the map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewCalculatePerceptionMasks(): void;
/**
 * Returns the sight range for the current player, based on the blindness level
 * @returns {number} - The number of visible tiles
 */
declare function ChatRoomMapViewGetSightRange(): number;
/**
 * Returns the hearing range for the current player, based on the deafness level
 * @returns {number} - The number of tiles
 */
declare function ChatRoomMapViewGetHearingRange(): number;
/**
 * Returns TRUE if the player can see a character at her sight range
 * @param {Character} C - The character to evaluate
 * @returns {boolean} - TRUE if visible
 */
declare function ChatRoomMapViewCharacterIsVisible(C: Character): boolean;
/**
 * Returns TRUE if the player can see hear a character at her hearing range
 * @param {Character} C - The character to evaluate
 * @returns {boolean} - TRUE if hearable
 */
declare function ChatRoomMapViewCharacterIsHearable(C: Character): boolean;
/**
 * Returns TRUE if the player is on whisper range to another character (1 tile)
 * @param {Character} C - The character to evaluate
 * @returns {boolean} - TRUE if on whisper range
 */
declare function ChatRoomMapViewCharacterOnWhisperRange(C: Character): boolean;
/**
 * Returns TRUE if the player is within interaction range of another character
 * @param {Character} C - The character to evaluate
 * @returns {boolean} - TRUE if on interaction range
 */
declare function ChatRoomMapViewCharacterOnInteractionRange(C: Character): boolean;
/**
 * Sets the correct wall tile based on it's surrounding (North-West, North-Center, etc.)
 * @param {boolean} CW - If Center West is a wall
 * @param {boolean} CE - If Center East is a wall
 * @param {boolean} SW - If South West is a wall
 * @param {boolean} SC - If South Center is a wall
 * @param {boolean} SE - If South East is a wall
 * @returns {number} - a number linked on the image to use
 */
declare function ChatRoomMapViewFindWallEffectTile(CW: boolean, CE: boolean, SW: boolean, SC: boolean, SE: boolean): number;
/**
 * Returns TRUE if the X and Y coordinates is a wall tile, if out of bound we also return TRUE
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {boolean} - TRUE if it's a wall
 */
declare function ChatRoomMapViewIsWall(X: number, Y: number): boolean;
/**
 * Checks for connectivity in 4 directions based on a provided validation function
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @param {function(number, number): boolean} Condition - Function that returns true if the position is connected
 * @returns {{ North: boolean, South: boolean, East: boolean, West: boolean }} - The connectivity status
 */
declare function ChatRoomMapViewGetConnectivityDirections(X: number, Y: number, Condition: (arg0: number, arg1: number) => boolean): {
    North: boolean;
    South: boolean;
    East: boolean;
    West: boolean;
};
/**
 * Returns the object located at a X and Y position on the map, or NULL if nothing
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {ChatRoomMapTile | undefined} - The object at the position
 */
declare function ChatRoomMapViewGetTileAtPos(X: number, Y: number): ChatRoomMapTile | undefined;
/**
 * Returns the object located at a X and Y position on the map, or NULL if nothing
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {ChatRoomMapObject | undefined} - The object at the position
 */
declare function ChatRoomMapViewGetObjectAtPos(X: number, Y: number): ChatRoomMapObject | undefined;
/**
 * Returns TRUE if a given position cannot be entered
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {boolean} - TRUE if the position is blocked
 */
declare function ChatRoomMapViewPositionIsBlocked(X: number, Y: number): boolean;
/**
 * Returns TRUE if the fog of war feature is currently activated on the map
 * @returns {boolean} - TRUE if fog of war is active
 */
declare function ChatRoomMapFogIsActive(): boolean;
/**
 * Returns TRUE if a tile is fully hidden from hide
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {boolean} - TRUE if the tile is hidden
 */
declare function ChatRoomMapViewTileIsHidden(X: number, Y: number): boolean;
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
declare function ChatRoomMapViewWallEffect(X: number, Y: number, ScreenX: number, ScreenY: number, TileWidth: number, TileHeight: number): void;
/**
 * Apply a wall "3D" effect on the curent map
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {number} - The effect number
 */
declare function ChatRoomMapViewFloorWallEffect(X: number, Y: number): number;
/**
 * Manages collisions, moves the player if she's on a tile that cannot be entered
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewCollision(): void;
/**
 * Find the first {@link ChatRoomCharacter} members at the specified X & Y position
 * @param {number} X - The X position on the screen
 * @param {number} Y - The Y position on the screen
 * @returns {null | Character} A character at the specified X & Y position or, if none can be found, `null`
 */
declare function ChatRoomMapViewGetCharacterAtPos(X: number, Y: number): null | Character;
/**
 * Returns a object that contains the entry flag's position with x and y parameters or null if no entry flag is set
 * @returns {ChatRoomMapPos|null}
 */
declare function ChatRoomMapViewGetEntryFlagPosition(): ChatRoomMapPos | null;
/**
 * Draw the map grid and character on screen
 * @param {number} Left - The X position on the screen
 * @param {number} Top - The Y position on the screen
 * @param {number} Width - The width size of the drawn map
 * @param {number} Height - The height size of the drawn map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDrawGrid(Left: number, Top: number, Width: number, Height: number): void;
/**
 * Sets the next update flag for the room if it's not already set, the delay is 5 seconds
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdateFlag(): void;
/**
 * Sets the next update flags for the player if it's not already set, the delay is 1 seconds for live data and 10 seconds for last map data
 * @param {number} UpdateTimeOffset - A offset for the update time. This can be positive to increase the update time or negative to reduce it.
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdatePlayerFlag(UpdateTimeOffset?: number): void;
/**
 * Updates the room data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdateRoomSync(): void;
/**
 * Updates the player map data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdatePlayerSync(): void;
/**
 * Updates a character's map data
 * @param {ServerMapDataResponse} data - Data object containing the new character map data.
 * @returns {void} - Nothing.
 */
declare function ChatRoomMapViewSyncMapData(data: ServerMapDataResponse): void;
/**
 * Updates the player last map data if needed
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdateLastMapDataSync(): void;
/**
 * Processes the character movement when the timer has expired
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewMovementProcess(): void;
/**
 * Checks if the player is leashed and if she should follow the leash holder
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewLeash(): void;
/**
 * Draws the map and characters of the chat room map on the left side of the screen
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDraw(): void;
/**
 * Draws the buttons of the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDrawUi(): void;
/**
 * Change the key of charachter - sender
 * @param {Character} target
 * @param {("gold" | "silver" | "bronze")[]} keys
 */
declare function ChatRoomMapViewChangeKey(target: Character, keys: ("gold" | "silver" | "bronze")[], boolean: any): void;
/**
 * Change a key from a character from a hidden message - reciver
 * @param {Character} sender
 * @param {ServerChatRoomMessage} data
 */
declare function ChatRoomMapViewChangeKeyHiddenMessage(sender: Character, data: ServerChatRoomMessage): void;
/**
 * Teleport a character to a specific tile
 * @param {Character} target
 * @param {ChatRoomMapPos} position
 */
declare function ChatRoomMapViewTeleport(target: Character, position: ChatRoomMapPos): void;
/**
 * Teleport a character to a specific tile from a hidden message
 * @param {Character} sender
 * @param {ServerChatRoomMessage} data
 */
declare function ChatRoomMapViewTeleportHiddenMessage(sender: Character, data: ServerChatRoomMessage): void;
/**
 * Check if a tile on the map can be entered by a player, and return the number of milliseconds required to reach it
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {number} - The number of milliseconds
 */
declare function ChatRoomMapViewCanEnterTile(X: number, Y: number): number;
/**
 * Moves the player
 * @param {"West" | "East" | "North" | "South"} D - The direction being travelled (North, South, East, West)
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewMove(D: "West" | "East" | "North" | "South"): void;
/**
 * Undoes the changes made to the map, from the latest backup in the stack
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUndo(): void;
declare function ChatRoomMapViewKeyDown(event: KeyboardEvent): boolean;
declare function ChatRoomMapViewKeyUp(event: KeyboardEvent): boolean;
/**
 * Handles clicks the chatroom screen view.
 * @returns {void} - Nothing.
 */
declare function ChatRoomMapViewClick(): void;
/**
 * Mouse down event is used to draw on screen and handle the tiles buttons
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewMouseDown(): void;
/**
 * Mouse move event is used to draw on screen
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewMouseMove(): void;
declare function ChatRoomMapViewMouseUp(event: MouseEvent | TouchEvent): void;
declare function ChatRoomMapViewMouseWheel(event: WheelEvent): void;
/**
 * Copies the current map in the clipboard.  Called from the chat field command "mapcopy"
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewCopy(): void;
/**
 * Pastes the current map Param data to load it.  Called from the chat field command "mappaste"
 * @param {string} Param - The parameter that comes with the command
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewPaste(Param: string): void;
/**
 * Converts the color in R [0; 255], G [0; 255], B [0; 255], A [0.0; 1.0] format
 * to an HTML color function.
 * @param {[number, number, number, number]} rgba
 * @returns {string}
 */
declare function RgbaArrayToHTMLColor(rgba: [number, number, number, number]): string;
declare const ChatRoomMapViewName: "Map";
declare var ChatRoomMapViewWidth: number;
declare var ChatRoomMapViewHeight: number;
declare var ChatRoomMapViewPerceptionRange: number;
declare var ChatRoomMapViewPerceptionRangeMin: number;
declare var ChatRoomMapViewPerceptionRangeMax: number;
declare var ChatRoomMapViewObjectStartID: number;
declare var ChatRoomMapViewObjectEntryID: number;
/** @type {"" |  "Tile" | "Object" | "TileType" | "ObjectType" | "Effect"} */
declare var ChatRoomMapViewEditMode: "" | "Tile" | "Object" | "TileType" | "ObjectType" | "Effect";
/** @type {"" | ChatRoomMapTileType | ChatRoomMapObjectType} */
declare var ChatRoomMapViewEditSubMode: "" | ChatRoomMapTileType | ChatRoomMapObjectType;
declare var ChatRoomMapViewEditStarted: boolean;
/** @type {null | ChatRoomMapDoodad | ChatRoomMapEffect} */
declare var ChatRoomMapViewEditObject: null | ChatRoomMapDoodad | ChatRoomMapEffect;
/** @type {number[]} */
declare var ChatRoomMapViewEditSelection: number[];
declare var ChatRoomMapViewEditRange: number;
/** @type {ServerChatRoomMapData[]} */
declare var ChatRoomMapViewEditBackup: ServerChatRoomMapData[];
/** @type {null | number} */
declare var ChatRoomMapViewUpdateRoomNext: null | number;
/** @type {null | number} */
declare var ChatRoomMapViewUpdatePlayerNext: null | number;
/** @type {null | number} */
declare var ChatRoomMapViewUpdateLastMapDataNext: null | number;
/** @type {null | Character} */
declare var ChatRoomMapViewFocusedCharacter: null | Character;
declare var ChatRoomMapViewFocusedCharacterX: number;
declare var ChatRoomMapViewFocusedCharacterY: number;
declare var ChatRoomMapViewSuperPowersActive: boolean;
declare var ChatRoomMapViewBaseMovementSpeed: number;
/** @type {null | ChatRoomMapMovement} */
declare var ChatRoomMapViewMovement: null | ChatRoomMapMovement;
/** @type {ChatRoomMapType[]} */
declare var ChatRoomMapViewTypeList: ChatRoomMapType[];
declare var ChatRoomMapViewUpdatePlayerTime: number;
declare const ChatRoomMapViewPerceptionRaycastOffset: 0.4999;
declare const ChatRoomMapViewWhisperRange: 1;
declare const ChatRoomMapViewInteractionRange: 1;
declare const ChatRoomMapViewRemoteRange: number;
/** @type {boolean[]} */
declare var ChatRoomMapViewVisibilityMask: boolean[];
/** @type {boolean[]} */
declare var ChatRoomMapViewAudibilityMask: boolean[];
/** @type {Uint16Array | null} */
declare var ChatRoomMapViewTileFog: Uint16Array | null;
/** @type {Uint16Array | null} */
declare var ChatRoomMapViewObjectFog: Uint16Array | null;
declare namespace ChatRoomMapViewKeysPressed {
    let u: boolean;
    let d: boolean;
    let l: boolean;
    let r: boolean;
}
declare var ChatRoomMapViewStartOfKeyPress: number;
/** @type {Record<number, ChatRoomMapTile | undefined>} */
declare var ChatRoomMapViewTileLookup: Record<number, ChatRoomMapTile | undefined>;
/** @type {Record<number, ChatRoomMapObject | undefined>} */
declare var ChatRoomMapViewObjectLookup: Record<number, ChatRoomMapObject | undefined>;
/** @type {Map<number, Character>} */
declare var ChatRoomMapViewCharacterMap: Map<number, Character>;
declare const ChatRoomMapViewEffectStartID: 10;
/**
 * A list of predefined lighting effects. May be replaced with a color picker in the future.
 * @type {ChatRoomMapEffect[]}
 * */
declare const ChatRoomMapViewEffectList: ChatRoomMapEffect[];
/** @type {ChatRoomMapTile[]} */
declare const ChatRoomMapViewTileList: ChatRoomMapTile[];
/** @type {ChatRoomMapObject[]} */
declare const ChatRoomMapViewObjectList: ChatRoomMapObject[];
/**
 * @namespace
 * @description
 * # Binary-encoded map data
 * This module implements the new way of encoding the map data.
 *
 * At its core lies the concept of a BitString: a stream of tightly-packed
 * numbers with arbitrary bit width. This allows us to store data way more efficiently
 * than using plain JSONs, even if they are packed with LZString.
 *
 * # Compatibility
 * Binary encoding, while efficient, requires a very careful architectural approach to ensure
 * maximum compatibility. Notable, we must ensure that:
 *
 * - Exported map strings from any older game version *always* remain compatible
 *   with the newer game versions. Players losing their old saved maps is an unacceptable
 *   outcome; we must ensure that we recover as much data as possible from those old saves.
 * - Map data synced between the players in a map-enabled room must be readable
 *   by the clients one version older than the current one. This is to ensure
 *   that during the beta period the main branch players could join and play
 *   the rooms created by beta players. This is not as strict of a requirement
 *   as the previous point, but is still important.
 * - Exported map strings from the newer version must be usable by the players
 *   using a game one version older. This ensures that the beta players can share
 *   map strings with non-beta ones, and is the least concern among others, since
 *   beta periods are quite short and *sharing* the map string doesn't happen too often.
 *   Still, it is good to at least make some effort to allow it.
 *
 * Binary encoding makes achieving those requirements non-trivial, because
 * to decode a given BitString the game must know exactly what were the bit widths
 * of the integers encoded into it, and also their meaning. If we just change
 * the code that encodes the map data, then we would no longer able to decode the old data.
 *
 * To solve this issue, we introduce the concept of codec versions. A version
 * is a number that we write into the bit stream before the actual data, which
 * would allow the game to understand which codec was used to encode the data,
 * and call it to decode the data.
 *
 * Whenever we need to sufficiently change the encoding scheme, we copy
 * the latest codec, increase its version and make the required changes.
 * Copying and pasting the code, while usually not advised, would be a better approach
 * in this specific case. This way, we ensure that the old codecs remain "frozen"
 * in time, so no matter how old the map data is, we always have an appropriate codec
 * for it.
 *
 * One issue which may arise in the future is the change in the schemas
 * of the objects we encode. In this case, we would need an additional "migrations" layer
 * which would take the old decoded data and convert it to the one we currently require.
 *
 * Solving the issue of letting the old clients to use the data from beta versions
 * is not that straightforward, and on the most occasions we would require ad-hoc solutions.
 * For example, during the beta period we may use two fields, `Data` and `DataOld`,
 * with the former containing the data encoded with the most recent codec,
 * and the latter having the data encoded with the previous codec.
 * Of course, depending on the nature of the required changes, it may be possible
 * to make a more space-efficient solution.
 *
 * # Future work
 * Currently, we only binary-encode the map effects, to remain in the scope of the original MR.
 * We do this by storing the encoded map effects in the {@link ChatRoomData.MapData.Effects}
 * global value, while {@link ChatRoomData.MapData.Tiles} and {@link ChatRoomData.MapData.Objects}
 * remain unchanged. Thus, we don't need to change much of the existing code, which
 * continues to use those latter fields.
 *
 * In future MRs we hope to unify the encoding of tiles, objects and effects, writing them all
 * into a single BitString. This would allow us to have much greater compression and save
 * a lot of traffic.
 *
 * Later, all map data would be stored in {@link ChatRoomMapManager.Map} global value
 * instead of {@link ChatRoomData.MapData}. This is because we're no longer storing
 * the map data as simple strings which we can trivially serialize and send to the server.
 * Ideally, the outside code would use {@link ChatRoomMapManager} methods to obtain
 * the encoded map data when needed (e.g. sending it to the server, or saving the map data
 * for room recreation, or exporting the room via a room code). Failing that,
 * we can continue the approach used in the initial version of this system: having the decoded
 * map data in {@link ChatRoomMapManager.Map} and maintain the encoded representation
 * of this map in {@link ChatRoomData.MapData}.
 *
 * After that we would have an avenue for encoding additional arbitrary data within each tile
 * while retaining the compact encoding. This, then, would allow us to have any sorts of "tile settings",
 * which would be a great addition to the map rooms in the Club.
 *
 * # Mod compatibility
 * This module is a work in progress and would change significantly in the future.
 * As such, only the minimum amount of public APIs is exposed as of now. Mod authors
 * are advised to not rely on its current behavior if at all possible.
 * We expect to expose more public APIs in the future as the module matures.
 *
 * # General design choices
 * While being public, {@link ChatRoomMapManager.Map} preferably should be only
 * accessed inside this file as it is an implementation detail of this module.
 * If the outside code requires to access something in this module, it's best
 * to provide a separate function in the {@link ChatRoomMapManager} namespace,
 * or a global one.
 *
 * # Codecs general overview
 * ## Version 0
 * The initial codecs version. Only encoding map effects. Only allows for a single
 * map effect per tile (the groundwork for having multiple effects per tile is laid,
 * but the rest of the code is not ready for it).
 *
 * Effects are encoded by their IDs, similar to the original Tiles and Objects encoding.
 * A simple RLE compression is applied to the "flat" effects array, with a small twist:
 * we use larger bit width for storing run-lengths of the blank effect sequences.
 * This allows us to more efficiently encode the typical maps where the most of
 * the tiles would have blank effects.
 *
 * Additionally, we modify the effect IDs in the following way:
 * 1. First, we subtract the lowest used effect ID
 *    ({@link ChatRoomMapViewEffectStartID} in the most cases) from them, getting
 *    what we call "shifted" IDs which begin from zero.
 * 2. Next, we create the list of all used "shifted" IDs and write them in the stream.
 *    The usage of "shifted" IDs ensures this array is very compact no matter what
 *    our {@link ChatRoomMapViewEffectStartID} is.
 * 3. Finally, when writing the effect IDs, we instead use the indexes in the list
 *    from the previous step, and call them the "remapped" IDs.
 *
 * This allows us to write the least possible amount of data per effect ID: for example,
 * if only one effect - besides the blank - is used in a map, then each mention of that ID
 * would only require a single bit of data, no matter what the actual value of this effect is.
 *
 * This scheme results in a sufficiently efficient compression rate in practice.
 * - For maps without effects we will be sending 24 additional bytes (after base64 encoding).
 * - Maps with a few patches of effects require around 0.5-1 bits per tile (after base64 encoding).
 * - Moderately sophisticated maps with a lot of different effects require somewhere around 1.5-3 bits per tile.
 * - In the worst case scenario (a map fully filled with all possible effects without repetitions),
 *   we would require slightly above 5.3 bits per tile after base64 encoding.
 */
declare const ChatRoomMapManager: any;
