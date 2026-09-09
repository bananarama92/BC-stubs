/**
 * Gets coordinates in X and Y and returns the corresponding index number for the tile and object list
 * @param {number} x - X-coordinate to be translated
 * @param {number} y - Y-coordinate to be translated
 * @returns {number} - Index number for the tile and object lists
 */
declare function MapCoordinatesToIndex(x: number, y: number): number;
/**
 * Gets a index number for the tile and object lists and returns the corresponding coordinates in X and Y
 * @param {number} index - Index number for the tile and object lists
 * @returns {ChatRoomMapPos} - Object containing the resulting x and y coordinates.
 */
declare function MapIndexToCoordinates(index: number): ChatRoomMapPos;
/**
 * Gets the effect / object / tile on the map
 * @template {keyof typeof ChatRoomMapViewLookupTables} T
 * @param {T} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @returns {number | null}
 */
declare function MapGetCellId<T extends keyof typeof ChatRoomMapViewLookupTables>(type: T, x: number, y: number): number | null;
/**
 * Gets the effect / object / tile on the map
 * @template {keyof typeof ChatRoomMapViewLookupTables} T
 * @param {T} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @returns {NonNullable<typeof ChatRoomMapViewLookupTables[T][number]> | null}
 */
declare function MapGetCell<T extends keyof typeof ChatRoomMapViewLookupTables>(type: T, x: number, y: number): NonNullable<(typeof ChatRoomMapViewLookupTables)[T][number]> | null;
/**
 * Sets the tile of the map
 * @param {number} id - The ID of the tile
 * @param {keyof ChatRoomMapViewLookupTables} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @param {boolean} refresh - Whether to refresh the map
 * @param {boolean} clearUnique - Whether to clear the unique tiles
 * @returns {boolean} - TRUE if the tile was set
 */
declare function MapSetCell(id: number, type: "Effect" | "Object" | "Tile", x: number, y: number, refresh?: boolean, clearUnique?: boolean): boolean;
/**
 * Clears the unique tiles
 * @param {number} id - The ID of the tile
 * @param {keyof ChatRoomMapViewLookupTables} type - The type of the tile
 * @returns {boolean} - TRUE if the tile was cleared
 */
declare function MapClearUniqueCells(id: number, type: "Effect" | "Object" | "Tile"): boolean;
/**
 * Checks if the cell can be set
 * @param {number} id - The ID of the doodad
 * @param {keyof ChatRoomMapViewLookupTables} type - The type of the doodad
 * @param {number} x - The X position of the cell
 * @param {number} y - The Y position of the cell
 * @returns {boolean}
 */
declare function MapCanSetCell(id: number, type: "Effect" | "Object" | "Tile", x: number, y: number): boolean;
/**
 * Checks if the cell is still valid
 * @param {number} id - The ID of the doodad
 * @param {keyof ChatRoomMapViewLookupTables} type - The type of the doodad
 * @param {number} x - The X position of the cell
 * @param {number} y - The Y position of the cell
 * @returns {boolean}
 */
declare function MapIsCellValid(id: number, type: "Effect" | "Object" | "Tile", x: number, y: number): boolean;
/**
 * Sets the next update flag for the room if it's not already set, the delay is 5 seconds
 * @returns {void} - Nothing
 */
declare function MapValidateCells(): void;
declare namespace MapLookupData {
    let mapData: ServerChatRoomMapData;
    let Tile: string;
    let Object: string;
    let Effect: string;
}
