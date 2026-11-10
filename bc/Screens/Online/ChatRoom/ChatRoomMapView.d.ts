declare const ChatRoomMapViewName = "Map";
declare var ChatRoomMapViewPerceptionRange: number;
declare var ChatRoomMapViewPerceptionRangeMin: number;
declare var ChatRoomMapViewPerceptionRangeMax: number;
/** @type {ChatRoomMapViewEditModeType} */
declare var ChatRoomMapViewEditMode: ChatRoomMapViewEditModeType;
declare var ChatRoomMapViewEditPath: string;
declare var ChatRoomMapViewLastSearch: string;
/** @type {"" | ChatRoomMapTileType | ChatRoomMapObjectType} */
declare var ChatRoomMapViewEditSubMode: "" | ChatRoomMapTileType | ChatRoomMapObjectType;
/** Currently dragging the mouse with an active tool */
declare var ChatRoomMapViewEditStarted: boolean;
/** @type {ChatRoomMapViewToolName | ""} */
declare var ChatRoomMapViewActiveTool: ChatRoomMapViewToolName | "";
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
declare var ChatRoomMapViewUpdatePlayerNext: null | number;
/** @type {null | number} */
declare var ChatRoomMapViewUpdateLastMapDataNext: null | number;
/** @type {null | OnlineCharacter} */
declare var ChatRoomMapViewFocusedCharacter: null | OnlineCharacter;
declare var ChatRoomMapViewFocusedCharacterX: number;
declare var ChatRoomMapViewFocusedCharacterY: number;
declare var ChatRoomMapViewSuperPowersActive: boolean;
declare var ChatRoomMapViewBaseMovementSpeed: number;
/** @type {null | ChatRoomMapMovement} */
declare var ChatRoomMapViewMovement: null | ChatRoomMapMovement;
/** @type {ChatRoomMapType[]} */
declare var ChatRoomMapViewTypeList: ChatRoomMapType[];
declare var ChatRoomMapViewUpdatePlayerTime: number;
declare const ChatRoomMapViewWhisperRange = 1;
declare const ChatRoomMapViewInteractionRange = 1;
/** How far a leashed character can go from where her leash is held, in tiles */
declare const ChatRoomMapViewLeashRange = 2;
declare const ChatRoomMapViewRemoteRange: number;
declare const ChatRoomMapSignTextMaxLength = 150;
declare var ChatRoomMapViewEditorMaxRecentElements: number;
declare var ChatRoomMapViewSplitPosition: number;
declare var ChatRoomMapViewSplitPositionMax: number;
declare var ChatRoomMapViewSplitPositionMin: number;
/**
 * @type {boolean[]}
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
declare var ChatRoomMapViewKeysPressed: {
    North: boolean;
    South: boolean;
    West: boolean;
    East: boolean;
};
declare var ChatRoomMapViewStartOfKeyPress: number;
/** @type {Map<number, OnlineCharacter[]>} */
declare var ChatRoomMapViewCharacterMap: Map<number, OnlineCharacter[]>;
/** @type {{ C: OnlineCharacter, rect: RectTuple, charX: number, charY: number }[]} */
declare var ChatRoomMapViewNameTags: {
    C: OnlineCharacter;
    rect: RectTuple;
    charX: number;
    charY: number;
}[];
/** TRUE while an admin picks where the selected teleport pad sends to */
declare var ChatRoomMapViewTeleportPadPicking: boolean;
/** @type {null | number} - The teleport pad whose menu is open */
declare var ChatRoomMapViewTeleportPadIndex: null | number;
/** @type {null | { indexes: number[], color: HexColor }} - The teleport pads shown in the color being picked for them */
declare var ChatRoomMapViewTeleportPadPreview: null | {
    indexes: number[];
    color: HexColor;
};
/** TRUE while the color picker is open over the chat log */
declare var ChatRoomMapViewColorPicker: boolean;
/** @type {Map<string, HTMLCanvasElement>} - Map object images already colorized, by image and color */
declare var ChatRoomMapViewColoredImages: Map<string, HTMLCanvasElement>;
/** @type {null | HTMLElement} */
declare var ChatRoomMapViewDialogMenu: null | HTMLElement;
/** @type {HTMLElement} */
declare var ChatRoomMapViewPanel: HTMLElement;
/** @type {HTMLElement} */
declare var ChatRoomMapViewPanelContainer: HTMLElement;
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
 * Sets the width of the chat room map
 * @param {number} width
 */
declare function ChatRoomMapViewSetSplitPosition(width: number): void;
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
/** @type {ScreenResizeHandler} */
declare function ChatRoomMapViewResize(): void;
declare function ChatRoomMapViewCreateEditorUI(): void;
declare function ChatRoomMapViewCreateMapMovementButtons(): void;
declare function ChatRoomMapViewUpdateMovementButtons(): void;
declare function ChatRoomMapViewCreateDialogMenu(): void;
/**
 * @param {string} title
 * @param {HTMLElement} [content]
 * @param {HTMLElement} [footer]
 */
declare function ChatRoomMapViewShowDialogMenu(title: string, content?: HTMLElement, footer?: HTMLElement): void;
declare function ChatRoomMapViewHideDialogMenu(): void;
/**
 * Closes the dialog from its close button
 * @returns {void}
 */
declare function ChatRoomMapViewCloseDialogMenu(): void;
/**
 * Gets the display name of a map object
 * @param {ChatRoomMapObject} object
 * @returns {string}
 */
declare function ChatRoomMapViewGetObjectDisplayName(object: ChatRoomMapObject): string;
declare function ChatRoomMapViewShowEditor(): void;
/**
 * Switches the editor palette mode.
 *
 * Changing mode or submode clears the selected doodad.
 * A tool that can no longer paint is cleared too.
 * @param {ChatRoomMapViewEditModeType} mode
 * @param {"" | ChatRoomMapTileType | ChatRoomMapObjectType} subMode
 */
declare function ChatRoomMapViewEditorSetMode(mode: ChatRoomMapViewEditModeType, subMode: "" | ChatRoomMapTileType | ChatRoomMapObjectType): void;
/**
 * @param {ChatRoomMapDoodad} item
 * @param {MapDataDoodadType} type
 * @param {boolean} [updateRecent]
 * @deprecated Use {@link ChatRoomMapViewEditorSetSelection} instead
 * @returns {void}
 */
declare function ChatRoomMapViewSetSelection(item: ChatRoomMapDoodad, type: MapDataDoodadType, updateRecent?: boolean): void;
/**
 * @param {ChatRoomMapDoodad} item
 * @param {MapDataDoodadType} type
 * @param {boolean} [updateRecent]
 * @returns {void}
 */
declare function ChatRoomMapViewEditorSetSelection(item: ChatRoomMapDoodad, type: MapDataDoodadType, updateRecent?: boolean): void;
/**
 * Refreshes the UI
 * @param {boolean} [selectionOnly]
 * @param {string} [search]
 */
declare function ChatRoomMapViewReloadEditorPanel(selectionOnly?: boolean, search?: string): void;
declare function ChatRoomMapViewGetButtons(): HTMLElement[];
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
 * @deprecated Use {@link MapDoodadIsEffect}
 */
declare function ChatRoomMapViewIsChatRoomMapEffect(element: ChatRoomMapDoodad): element is ChatRoomMapEffect;
/**
 * Typecheck for {@link ChatRoomMapPhysicalElement}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapPhysicalElement}
 * @deprecated Use {@link MapDoodadIsPhysicalElement}
 */
declare function ChatRoomMapViewIsChatRoomMapPhysicalElement(element: ChatRoomMapDoodad): element is ChatRoomMapPhysicalElement;
/**
 * Typecheck for {@link ChatRoomMapObject}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapObject}
 * @deprecated Use {@link MapDoodadIsObject}
 */
declare function ChatRoomMapViewIsChatRoomMapObject(element: ChatRoomMapDoodad): element is ChatRoomMapObject;
/**
 * Typecheck for {@link ChatRoomMapTile}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapTile}
 * @deprecated Use {@link MapDoodadIsTile}
 */
declare function ChatRoomMapViewIsChatRoomMapTile(element: ChatRoomMapDoodad): element is ChatRoomMapTile;
/**
 * Creates an item for the chat room map view
 * @param {ChatRoomMapDoodad} item - The map element to create
 * @param {boolean} [updateRecent]
 * @param {boolean} [readOnly]
 * @returns {Element} - The created item
 */
declare function ChatRoomMapViewCreateMapElementItem(item: ChatRoomMapDoodad, updateRecent?: boolean, readOnly?: boolean): Element;
declare function ChatRoomMapViewGetSelection(): Element[];
/**
 * Returns the last 8 recently used items
 * @returns {Element[]}
 */
declare function ChatRoomMapViewGetRecentItems(): Element[];
/**
 * Opens the color picker over the chat log, or closes it if it's open. The chat input is disabled while it's open,
 * and closing it drops the teleport pad color preview.
 * @param {ColorPickerInitOptions} [options] - The color picker options, used when opening it
 * @returns {void}
 */
declare function ChatRoomMapViewColorPickerToggle(options?: ColorPickerInitOptions): void;
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
/** @type {ScreenRunHandler} */
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
declare function ChatRoomMapViewGetConnectivityDirections(X: number, Y: number, Condition: Function): {
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
 * True when the player cannot stand on this object right now.
 * @param {ChatRoomMapObject} object
 * @returns {boolean}
 */
declare function ChatRoomMapViewObjectBlocksStanding(object: ChatRoomMapObject): boolean;
/**
 * Draws a red X over a cell the player cannot stand on.
 * @param {Rect} rect
 * @returns {void}
 */
declare function ChatRoomMapViewDrawObstacleMark(rect: Rect): void;
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
 * @returns {null | OnlineCharacter} A character at the specified X & Y position or, if none can be found, `null`
 */
declare function ChatRoomMapViewGetCharacterAtPos(X: number, Y: number): null | OnlineCharacter;
/**
 * Returns a object that contains the entry flag's position with x and y parameters or null if no entry flag is set
 * @returns {ChatRoomMapPos|null}
 */
declare function ChatRoomMapViewGetEntryFlagPosition(): ChatRoomMapPos | null;
/**
 * Gets the image of an object drawn with its layers, the colorable ones tinted.
 * Colorizing reads every pixel, so the composed images are cached.
 * @param {ChatRoomMapObject} obj - The object to draw
 * @param {string} imageName - The image name, as returned by the object's `BuildImageName`
 * @param {readonly HexColor[]} colors - One color per colorable layer
 * @returns {string | HTMLCanvasElement} - The composed image, or the plain image URL while the layers are not available
 */
declare function ChatRoomMapViewGetColoredObjectImage(obj: ChatRoomMapObject, imageName: string, colors: readonly HexColor[]): string | HTMLCanvasElement;
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
 * @deprecated since August 2026, {@link MapManager.Map.updateGlobalMapData} handles map updates
 */
declare function ChatRoomMapViewUpdateFlag(): void;
/**
 * Sets the next update flags for the player if it's not already set, the delay is 1 seconds for live data and 10 seconds for last map data
 * @param {number} UpdateTimeOffset - A offset for the update time. This can be positive to increase the update time or negative to reduce it.
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUpdatePlayerFlag(UpdateTimeOffset?: number): void;
/**
 * Schedule a map update to be sent to the server.
 *
 * The update will only happen once at the end of a 5s period.
 * Do note that calling {@link MapManager.Map.updateGlobalMapData()} will also
 * cause an update to be sent out, while making sure the data we're sending *is*
 * the current map data.
 *
 * @returns {void} - Nothing
 */
declare var ChatRoomMapViewScheduleMapUpdate: CommonCancellableFn<[], void>;
/**
 * Updates the room data if needed
 * @deprecated Use {@link ChatRoomMapViewScheduleMapUpdate}
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
 * Characters can stand together on a shared object (teleport pads), where a teleport pad sends to,
 * and on the tiles right around them, so a group arriving at once can always walk off
 * @param {number} X - The X position on the map
 * @param {number} Y - The Y position on the map
 * @returns {boolean} - TRUE if more than one character can stand on that tile
 */
declare function ChatRoomMapViewTileIsShared(X: number, Y: number): boolean;
/**
 * Gets a map object image colorized the way clothes are, it's only colorized once and then reused
 * @param {string} url - The image
 * @param {HexColor} color - The color
 * @returns {DrawSource} - The colorized image, or the image itself while it's still loading
 */
declare function ChatRoomMapViewGetColoredImage(url: string, color: HexColor): DrawSource;
/**
 * Sends the player from the teleport pad she's standing on to where it points, if she can stand there
 * @returns {boolean} - TRUE if the player was teleported
 */
declare function ChatRoomMapViewTeleportPad(): boolean;
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
 * Pulls the player back within leash range of where her leash is held
 * @param {ChatRoomMapPos} anchor - Where the leash is held: its holder, or the tether point it's tied to
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewPullWithinLeashRange(anchor: ChatRoomMapPos): void;
/**
 * Checks if there's a tether point at a position of the current map
 * @param {ChatRoomMapPos} pos
 * @returns {boolean}
 */
declare function ChatRoomMapViewIsTetherPoint(pos: ChatRoomMapPos): boolean;
/**
 * Checks if a character is within reach of a position
 * @param {Character} C
 * @param {ChatRoomMapPos} pos
 * @returns {boolean}
 */
declare function ChatRoomMapViewIsWithinReach(C: Character, pos: ChatRoomMapPos): boolean;
/**
 * Checks if the player can tie a character's leash to a tether point; works on herself too
 * @param {Character} C
 * @param {ChatRoomMapPos} pos - The tether point
 * @returns {boolean}
 */
declare function ChatRoomMapViewCanTetherTie(C: Character, pos: ChatRoomMapPos): boolean;
/**
 * Checks if the player can untie a character's leash from its tether point:
 * her own leash if she could tie it herself or one she tied, within reach of the tether point, or anyone else's as a room admin
 * @param {Character} C
 * @returns {boolean}
 */
declare function ChatRoomMapViewCanTetherUntie(C: Character): boolean;
/**
 * Shows the menu of a tether point: admins choose if it is one, and anyone within reach ties leashes to it or unties them
 * @param {number} x
 * @param {number} y
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewShowTetherPointMenu(x: number, y: number): void;
/**
 * Asks a character's client to tie her leash to a tether point, or to untie it
 * @param {Character} C - The character whose leash is tied or untied
 * @param {ChatRoomMapTether | null} tether - The tether, or `null` to untie the leash
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewSendTetherRequest(C: Character, tether: ChatRoomMapTether | null): void;
/**
 * Ties the player's leash to a tether point, or unties it, from another character's hidden message
 * @param {OnlineCharacter} sender
 * @param {ServerChatRoomMessage} data
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewTetherHiddenMessage(sender: OnlineCharacter, data: ServerChatRoomMessage): void;
/**
 * Ties the player's leash to a tether point, or unties it, as a character asked, and tells the room who did it
 * @param {Character} C - The character who ties or unties the leash
 * @param {ChatRoomMapTether | null} tether - The tether, or `null` to untie the leash
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewAcceptTether(C: Character, tether: ChatRoomMapTether | null): void;
/**
 * Ties the player's leash to a tether point, or unties it, and tells the room with her map data.
 * A leash tied to a tether point isn't held by anyone.
 * @param {ChatRoomMapTether | null} tether - The tether, or `null` to untie the leash
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewSetTether(tether: ChatRoomMapTether | null): void;
/**
 * Checks if the player's leash can still be tied where it is: the room still has a map,
 * the object is still a tether point and she can still be leashed by whoever tied it.
 * Works in any view: the map is read again from the room data when the map view isn't showing it.
 * @param {ChatRoomMapTether} tether
 * @returns {boolean}
 */
declare function ChatRoomMapViewTetherIsValid(tether: ChatRoomMapTether): boolean;
/**
 * Checks if someone who could untie the player's leash is in the room with her: whoever tied it or a room admin.
 * Like a locked room, a tether point doesn't hold anyone with nobody around to let her go.
 * @param {ChatRoomMapTether} tether
 * @returns {boolean}
 */
declare function ChatRoomMapViewTetherHasKeeper(tether: ChatRoomMapTether): boolean;
/**
 * Checks if the player's leash is tied to a tether point that holds her: it's still valid and someone who could untie it is in the room
 * @returns {boolean}
 */
declare function ChatRoomMapViewTetherHolds(): boolean;
/**
 * Unties the player's leash from a tether point that doesn't hold her anymore,
 * telling the room when it slips off because nobody who could untie it is left
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewTetherRelease(): void;
/**
 * Keeps the player within leash range of the tether point her leash is tied to,
 * and unties it when the tether point doesn't hold her anymore
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewTether(): void;
/**
 * Draws the leashes tied to tether points, from the characters to the tether points
 * @param {(pos: ChatRoomMapPos) => [x: number, y: number]} toScreen - Gets the screen position of a tile's top left corner
 * @param {number} tileWidth
 * @param {number} tileHeight
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewDrawTethers(toScreen: (pos: ChatRoomMapPos) => [x: number, y: number], tileWidth: number, tileHeight: number): void;
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
 * @param {OnlineCharacter} sender
 * @param {ServerChatRoomMessage} data
 */
declare function ChatRoomMapViewChangeKeyHiddenMessage(sender: OnlineCharacter, data: ServerChatRoomMessage): void;
/**
 * Teleport a character to a specific tile
 * @param {Character} target
 * @param {ChatRoomMapPos} position
 */
declare function ChatRoomMapViewTeleport(target: Character, position: ChatRoomMapPos): void;
/**
 * Teleport a character to a specific tile from a hidden message
 * @param {OnlineCharacter} sender
 * @param {ServerChatRoomMessage} data
 */
declare function ChatRoomMapViewTeleportHiddenMessage(sender: OnlineCharacter, data: ServerChatRoomMessage): void;
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
 * Sets the map view movement
 * @param {ChatRoomMapMovement | null} movement
 */
declare function ChatRoomMapViewSetMapViewMovement(movement: ChatRoomMapMovement | null): void;
/**
 * Undoes the changes made to the map, from the latest backup in the stack
 * @returns {void} - Nothing
 */
declare function ChatRoomMapViewUndo(): void;
/**
 * Handles keyboard keys in the chat room map screen
 * @type {KeyboardEventListener}
 */
declare function ChatRoomMapViewKeyDown(event: KeyboardEvent): boolean;
/**
 * Handles keyboard up keys in the chat room map screen
 * @type {KeyboardEventListener}
 */
declare function ChatRoomMapViewKeyUp(event: KeyboardEvent): boolean;
/**
 * Handles clicks the chatroom screen view.
 * @returns {void} - Nothing.
 */
declare function ChatRoomMapViewClick(): void;
/**
 * @param {{ X: number, Y: number} | undefined} pos
 */
declare function ChatRoomMapViewSetSelectedTile(pos: {
    X: number;
    Y: number;
} | undefined): void;
/**
 * Shows admins the sliders turning and sizing the object placed on a tile, its colors if it has color layers, and its decal if it can take one
 * @param {ChatRoomMapPos} pos
 * @param {number} objectId
 * @returns {void}
 */
declare function ChatRoomMapViewShowObjectSettings(pos: ChatRoomMapPos, objectId: number): void;
/**
 * Mouse down event is used to draw on screen and handle the tiles buttons
 * @type {MouseEventListener}
 */
declare function ChatRoomMapViewMouseDown(event: PointerEvent): void;
/**
 *
 * @param {ServerChatRoomData | null} data
 * @returns {data is ServerChatRoomData & { MapData: { Objects: string, Tiles: string }}}
 */
declare function validMapData(data: ServerChatRoomData | null): data is ServerChatRoomData & {
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
/**
 * Mouse move event is used to draw on screen
 * @type {MouseEventListener}
 */
declare function ChatRoomMapViewMouseMove(event: PointerEvent): void;
/**
 * The tool currently painting, if one is selected.
 * @returns {ChatRoomMapViewTool | null}
 */
declare function ChatRoomMapViewGetActiveTool(): ChatRoomMapViewTool | null;
/**
 * Selects the paint tool and updates its button, if that button is on screen.
 * @param {ChatRoomMapViewToolName | ""} tool
 */
declare function ChatRoomMapViewSetActiveTool(tool: ChatRoomMapViewToolName | ""): void;
/**
 * The map editing tools.
 * @satisfies {Record<string, ChatRoomMapViewTool>}
 */
declare const ChatRoomMapViewTools: {
    Brush: {
        selectionColor: string;
        canPaint: () => boolean;
        paint: (x: number, y: number, range: number, _event: PointerEvent) => void;
    };
    Eraser: {
        selectionColor: string;
        canPaint: () => boolean;
        paint: (x: number, y: number, range: number, event: PointerEvent) => void;
    };
};
/**
 * Mouse up event is used to stop drawing
 * @type {MouseEventListener}
 */
declare function ChatRoomMapViewMouseUp(): void;
/**
 * Mouse wheel event is used to zoom the map
 * @type {MouseWheelEventListener}
 */
declare function ChatRoomMapViewMouseWheel(Event: WheelEvent): void;
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
