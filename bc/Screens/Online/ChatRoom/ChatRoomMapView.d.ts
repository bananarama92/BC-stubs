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
declare function ChatRoomMapViewMouseUp(event: PointerEvent): void;
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
declare namespace ChatRoomMapManager {
    let Map: {
        /**
         * @type {MapData}
         * private
         */
        _mapData: {
            /**
             * @type {ChatRoomMapEffect[][]}
             */
            effects: ChatRoomMapEffect[][];
            /**
             * Removes all effects from the map.
             */
            removeAllEffects(): void;
        };
        /**
         * @type {number}
         * private
         */
        _dirtyFlags: number;
        /**
         * Get the current active effects array at a given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {ChatRoomMapEffect[]}
         */
        getEffectsByXY(x: number, y: number): ChatRoomMapEffect[];
        /**
         * Get the current active effects array at a given tile index.
         * @param {number} tileIndex the index of a map tile, as returned by ChatRoomMapViewCoordinatesToIndex.
         * @returns {ChatRoomMapEffect[]}
         */
        getEffectsByIndex(tileIndex: number): ChatRoomMapEffect[];
        /**
         * Sets the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         */
        setEffectsByXY(x: number, y: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Sets the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         */
        setEffectsByIndex(tileIndex: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Clears the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {void}
         */
        clearEffectsByXY(x: number, y: number): void;
        /**
         * Clears the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @returns {void}
         */
        clearEffectsByIndex(tileIndex: number): void;
        /**
         * Returns the effects list for each tile in the map, one array element per tile.
         * Currently for efficiency does not copy the underlying array.
         * The users must not modify the returned array directly.
         * @return {ChatRoomMapEffect[][]}
         */
        getAllEffects(): ChatRoomMapEffect[][];
        /**
         * Replaces all current effects with the parsed effects array.
         * For efficiency does not copy the passed effects.
         * The users must not modify the passed effects array afterward.
         * @param {ChatRoomMapEffect[][]} effectsList
         * @returns {void}
         */
        replaceAllEffects(effectsList: ChatRoomMapEffect[][]): void;
        /**
         * Removes all effects from the map.
         * @returns {void}
         */
        removeAllEffects(): void;
        /**
         * Mark a specific part of the map data as dirty, that is, changed and not yet synchronized with the server.
         * @param {number} flag
         * private
         */
        _markDirty(flag: number): void;
        /**
         * Marks a specific part of the map data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        _markClean(flag: any): void;
        /**
         * Marks the current effects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyEffects(): void;
        /**
         * Marks the current effects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanEffects(): void;
        /**
         * Checks whether the current effects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyEffects(): boolean;
        /**
         * Marks the current tiles data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyTiles(): void;
        /**
         * Marks the current tiles data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanTiles(): void;
        /**
         * Checks whether the current tiles data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyTiles(): boolean;
        /**
         * Marks the current objects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjects(): void;
        /**
         * Marks the current objects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjects(): void;
        /**
         * Checks whether the current objects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjects(): boolean;
        /**
         * Mark all data in the current map as clean.
         * @returns {void}
         */
        markCleanAll(): void;
        /**
         * Exports the current map data, including the tiles/objects,
         * as a string that could be copied and stored by the players.
         * @returns {string | undefined} the exported string, or `undefined`
         * if there was an error while exporting the map.
         */
        exportString(): string | undefined;
        /**
         * Imports the map string that was exported earlier with {@link MapManager.exportString}
         * method.
         *
         * This method must be as much compatible as possible, recovering as much information
         * as possible from the exported map strings from any previous version of the game
         * to prevent the players losing their stored maps.
         *
         * This method modifies the state of the current map and returns `true` in case of a successful import.
         * If the string is malformed and cannot be parsed, the method returns `false` and doesn't modify
         * any state.
         * @param {string} mapString
         * @returns {boolean} `true` if the string was successfully parsed and the current map data is updated,
         * `false` otherwise
         */
        importString(mapString: string): boolean;
        /**
         * Encodes the current map data and updates the global {@link ChatRoomData.MapData} value.
         * This function must be called after the map was changed and before it is sent to the server.
         * Ideally we want to have a single function to build the encoded map data only
         * when required, but it would require a significant API change of the outside code.
         *
         * For places where the synchronization happens, see {@link ChatRoomGetSettings} usages.
         *
         * This function is not supposed to fail; if it indicates an error by returning `false`,
         * this means we have a bug in our code.
         * @return {boolean} `true` if we successfully encoded the map data; `false` if
         * there was an error and the global state remains unchanged.
         */
        updateGlobalMapData(): boolean;
        /**
         * Loads the data from {@link ChatRoomData.MapData} and replaces the current map data with the one
         * stored in it.
         * @return {boolean} `true` if the global map data was parsed successfully. `false` if
         * the global map data is invalid, no data is changed in this case.
         */
        loadGlobalMapData(): boolean;
        /**
         * @returns {string | undefined}
         * private
         */
        _encodeEffects(): string | undefined;
        /**
         * @param {string | undefined} str
         * @returns {ChatRoomMapEffect[][] | undefined}
         * private
         */
        _decodeEffects(str: string | undefined): ChatRoomMapEffect[][] | undefined;
    };
    /**
     * This function should be called each time the external code updates {@link ChatRoomData.MapData}.
     *
     * This function decodes the updated map data and replaces
     * the data stored in ${@link ChatRoomMapManager.Map} with the decoded map.
     * @returns {void}
     */
    function OnMapDataUpdated(): void;
    /**
     * Initializes the map with the current global data if needed.
     * Must be called in {@link ChatRoomMapViewActivate}.
     * @returns {void}
     */
    function OnViewActivate(): void;
}
