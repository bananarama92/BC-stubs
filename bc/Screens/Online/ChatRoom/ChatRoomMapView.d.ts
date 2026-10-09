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
 * Get the tile ID at the given coordinates
 * @overload
 * @param {number} index
 * @param {ChatRoomMapObjectConfig["Type"]} type
 * @return {void}
 */
declare function ChatRoomMapViewSetCellSelection(index: number, type: ChatRoomMapObjectConfig["Type"]): void;
/**
 * @overload
 * @param {number} x
 * @param {number} y
 * @param {ChatRoomMapObjectConfig["Type"]} type
 * @return {void}
 */
declare function ChatRoomMapViewSetCellSelection(x: number, y: number, type: ChatRoomMapObjectConfig["Type"]): void;
declare function ChatRoomMapViewClearCellSelection(): void;
/**
 * Initializes the character's map data to its default blank state
 * @param {Character} C - The character to be initialized
 * @returns {ChatRoomMapData | null}
 */
declare function ChatRoomMapViewInitializeCharacter(C: Character): ChatRoomMapData | null;
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
 * @deprecated
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewLeave(): void;
/**
 * Activates the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewActivate(): void;
declare function ChatRoomMapViewCreateUI(): void;
declare function ChatRoomMapViewCreateDialogMenu(): void;
/**
 * @param {string} title
 * @param {HTMLElement} content
 * @param {HTMLElement} [footer]
 */
declare function ChatRoomMapViewShowDialogMenu(title: string, content: HTMLElement, footer?: HTMLElement): void;
declare function ChatRoomMapViewHideDialogMenu(): void;
declare function ChatRoomMapViewShowEditor(): void;
/**
 *
 * @param {ChatRoomMapDoodad} item
 * @param {MapDataDoodadType} type
 * @param {boolean} updateRecent
 * @returns
 */
declare function ChatRoomMapViewSetSelection(item: ChatRoomMapDoodad, type: MapDataDoodadType, updateRecent?: boolean): void;
/**
 * Refreshes the UI
 * @param {boolean} [selectionOnly]
 * @param {string} [search]
 */
declare function ChatRoomMapViewReloadEditorPanel(selectionOnly?: boolean, search?: string): void;
declare function ChatRoomMapViewGetButtons(): HTMLButtonElement[];
/**
 * Creates a category button
 * @param {(this: HTMLButtonElement, ev: PointerEvent) => void} callback
 * @param {string} image
 * @param {string} [tooltip]
 */
declare function ChatMapRoomViewCreateCategoryButton(callback: (this: HTMLButtonElement, ev: PointerEvent) => void, image: string, tooltip?: string): HTMLButtonElement;
/**
 * Returns the list of items for the current mode
 * @param {string} [search]
 * @returns {Element[]}
 */
declare function ChatRoomMapViewGetItems(search?: string): Element[];
/**
 * Typecheck for {@link ChatRoomMapEffect}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapEffect}
 */
declare function ChatRoomMapViewIsChatRoomMapEffect(element: ChatRoomMapDoodad): element is ChatRoomMapEffect;
/**
 * Typecheck for {@link ChatRoomMapPhysicalElement}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapPhysicalElement}
 */
declare function ChatRoomMapViewIsChatRoomMapPhysicalElement(element: ChatRoomMapDoodad): element is ChatRoomMapPhysicalElement;
/**
 * Typecheck for {@link ChatRoomMapObject}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapObject}
 */
declare function ChatRoomMapViewIsChatRoomMapObject(element: ChatRoomMapDoodad): element is ChatRoomMapObject;
/**
 * Typecheck for {@link ChatRoomMapTile}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapTile}
 */
declare function ChatRoomMapViewIsChatRoomMapTile(element: ChatRoomMapDoodad): element is ChatRoomMapTile;
/**
 * Creates an item for the chat room map view
 * @param {ChatRoomMapDoodad} item - The map element to create
 * @param {boolean} [updateRecent]
 * @returns {Element} - The created item
 */
declare function ChatRoomMapViewCreateMapElementItem(item: ChatRoomMapDoodad, updateRecent?: boolean, readOnly?: boolean): Element;
declare function ChatRoomMapViewGetSelection(): Element[];
/**
 * Returns the last 8 recently used items
 * @returns {Element[]}
 */
declare function ChatRoomMapViewGetRecentItems(): Element[];
declare function ChatRoomMapViewResize(load: boolean): void;
/**
 * Deactivates the chat room map
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDeactivate(): void;
declare function ChatRoomMapViewDestroyElements(): void;
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
 * @returns {void} - Nothing.
 */
declare function ChatRoomMapViewRoomUpdated(): void;
/**
 * Gets a index number for the tile and obejct lists and returns the corrosponting coordinates in X and Y
 * @param {number} index - Index number for the tile and object lists
 * @returns {ChatRoomMapPos} - Object containing the resulting x and y coordinates.
 * @deprecated moved to {@link MapIndexToCoordinates}
 */
declare function ChatRoomMapViewIndexToCoordinates(index: number): ChatRoomMapPos;
/**
 * Gets coordinates in X and Y and returns the corrosponding index number for the tile and object list
 * @param {number} x - X-coordinate to be translated
 * @param {number} y - Y-coordinate to be translated
 * @returns {number} - Index number for the tile and object lists
 * @deprecated moved to {@link MapCoordinatesToIndex}
 */
declare function ChatRoomMapViewCoordinatesToIndex(x: number, y: number): number;
/**
 * Calculates the visibility mask and audibility mask for the map
 * @deprecated Use {@link MapManager.Map.updatePlayerPerception()}
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
 * @param {number} x - The X position on the map
 * @param {number} y - The Y position on the map
 * @returns {boolean} - TRUE if it's a wall
 */
declare function ChatRoomMapViewIsWall(x: number, y: number): boolean;
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
 * @param {number} x - The X position on the map
 * @param {number} y - The Y position on the map
 * @returns {ChatRoomMapTile | null} - The object at the position
 * @deprecated since August 2026, use {@link MapManager.Map.getTile}
 */
declare function ChatRoomMapViewGetTileAtPos(x: number, y: number): ChatRoomMapTile | null;
/**
 * Returns the object located at a X and Y position on the map, or NULL if nothing
 * @param {number} x - The X position on the map
 * @param {number} y - The Y position on the map
 * @returns {ChatRoomMapObject | null} - The object at the position
 * @deprecated since August 2026, use {@link MapManager.Map.getObject}
 */
declare function ChatRoomMapViewGetObjectAtPos(x: number, y: number): ChatRoomMapObject | null;
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
 * @deprecated since August 2026, use {@link MapValidateCells}
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
 * @param {boolean} give
 */
declare function ChatRoomMapViewChangeKey(target: Character, keys: ("gold" | "silver" | "bronze")[], give: boolean): void;
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
 * @param {ChatRoomMapDirection} D - The direction being travelled (North, South, East, West)
 * @param {boolean} Force - Force the movement
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewMove(D: ChatRoomMapDirection, Force?: boolean): void;
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
declare function ChatRoomMapViewMouseDown(event: PointerEvent): void;
/**
 *
 * @param {ChatRoomData | null} data
 * @returns {data is ChatRoomData & { MapData: { Objects: string, Tiles: string }}}
 */
declare function validMapData(data: (ServerChatRoomData | null) | null): data is (ServerChatRoomData | null) & {
    MapData: {
        Objects: string;
        Tiles: string;
    };
};
/**
 * Convert a pixel coordinate into a tile
 * @param {number} pixelX
 * @param {number} pixelY
 * @returns {{ X: number, Y: number } | null}
 */
declare function ChatRoomMapViewPixelToTileCoordinates(pixelX: number, pixelY: number): {
    X: number;
    Y: number;
} | null;
declare function ChatRoomMapViewMouseMove(event: PointerEvent): void;
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
declare var ChatRoomMapViewPerceptionRange: number;
declare var ChatRoomMapViewPerceptionRangeMin: number;
declare var ChatRoomMapViewPerceptionRangeMax: number;
/** @type {"" |  "Tile" | "Object" | "TileType" | "ObjectType" | "Effect"} */
declare var ChatRoomMapViewEditMode: "" | "Tile" | "Object" | "TileType" | "ObjectType" | "Effect";
declare var ChatRoomMapViewEditPath: string;
declare var ChatRoomMapViewLastSearch: string;
/** @type {"" | ChatRoomMapTileType | ChatRoomMapObjectType} */
declare var ChatRoomMapViewEditSubMode: "" | ChatRoomMapTileType | ChatRoomMapObjectType;
declare var ChatRoomMapViewEditStarted: boolean;
/** @type {null | ChatRoomMapDoodad} */
declare var ChatRoomMapViewEditObject: null | ChatRoomMapDoodad;
/**
 * @type {number[]}
 * @deprecated Use {@link ChatRoomMapViewPixelToTileCoordinates} and {@link ChatRoomMapViewEditRange}
 */
declare var ChatRoomMapViewEditSelection: number[];
declare var ChatRoomMapViewEditRange: number;
declare var ChatRoomMapViewMaxEditRange: number;
/**
 * @type {ServerChatRoomMapData[]}
 * @deprecated Handled internally by {@link MapManager}.
 */
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
declare const ChatRoomMapViewWhisperRange: 1;
declare const ChatRoomMapViewInteractionRange: 1;
declare const ChatRoomMapViewRemoteRange: number;
/** @type {boolean[]}
 * @deprecated Use {@link MapManager.Map.isTileVisible()}
*/
declare var ChatRoomMapViewVisibilityMask: boolean[];
/**
 * @type {boolean[]}
 * @deprecated Use {@link MapManager.Map.isTileHearable()}
 */
declare var ChatRoomMapViewAudibilityMask: boolean[];
/** @type {Uint16Array | null} */
declare var ChatRoomMapViewTileFog: Uint16Array | null;
/** @type {Uint16Array | null} */
declare var ChatRoomMapViewObjectFog: Uint16Array | null;
declare namespace ChatRoomMapViewKeysPressed {
    let North: boolean;
    let South: boolean;
    let West: boolean;
    let East: boolean;
}
declare var ChatRoomMapViewStartOfKeyPress: number;
/** @type {Map<number, Character>} */
declare var ChatRoomMapViewCharacterMap: Map<number, Character>;
/** @type {null | HTMLElement} */
declare var ChatRoomMapViewDialogMenu: null | HTMLElement;
/** @type {HTMLElement} */
declare var ChatRoomMapViewPanel: HTMLElement;
/** @type {HTMLElement} */
declare var ChatRoomMapViewPanelContainer: HTMLElement;
/** @type {null | number} */
declare var ChatRoomMapViewSelectedObjectIndex: null | number;
/** @type {ChatRoomMapObjectConfig["Type"] | null} */
declare var ChatRoomMapViewSelectedObjectConfigType: ChatRoomMapObjectConfig["Type"] | null;
