/** @type {"Edit" | "Paste"} */
declare var ChatRoomMapViewColorTool: "Edit" | "Paste";
/** @type {ChatRoomMapColorFormat | null} */
declare var ChatRoomMapViewColorFormat: ChatRoomMapColorFormat | null;
/** @type {null | (() => void)} - Restores the layer color when the open color picker is left without accepting */
declare var ChatRoomMapViewColorPickerCancel: null | (() => void);
/** @type {null | { Index: number, Colors: HexColor[] }} - The colors shown on an object while its color dialog is being edited */
declare var ChatRoomMapViewColorPreview: null | {
    Index: number;
    Colors: HexColor[];
};
/**
 * Closes the color picker and drops the colors previewed on the map
 * @returns {void}
 */
declare function ChatRoomMapViewEndColorEditing(): void;
/**
 * Gets the name shown for a layer of a map object; the plain image's layer has no name of its own
 * @param {ChatRoomMapLayer} layer
 * @returns {string}
 */
declare function ChatRoomMapViewGetLayerDisplayName(layer: ChatRoomMapLayer): string;
/**
 * Converts the colors picked for each color layer into the stored format, where default colors are kept as "Default"
 * @param {readonly ChatRoomMapColorableLayer[]} layers
 * @param {readonly string[]} colors
 * @returns {NonNullable<ChatRoomMapObjectSettings["Colors"]>}
 */
declare function ChatRoomMapViewToStoredColors(layers: readonly ChatRoomMapColorableLayer[], colors: readonly string[]): NonNullable<ChatRoomMapObjectSettings["Colors"]>;
/**
 * Normalizes a typed HEX color to `#RRGGBB`
 * @param {string} value
 * @returns {HexColor | null} - The color, or `null` if the value is not a valid 6 digits HEX color
 */
declare function ChatRoomMapViewParseHexColor(value: string): HexColor | null;
/**
 * Opens the color picker used for clothes on one color layer
 * @param {string} heading
 * @param {ChatRoomMapColorableLayer} layer
 * @param {HexColor} original - The color of the layer when the picker opens, restored on Cancel
 * @param {(color: HexColor, accepted?: boolean) => void} onPick - Called with the color being picked, with the original one on Cancel,
 * and with `accepted` set when the picker is left with Accept
 */
declare function ChatRoomMapViewPickLayerColor(heading: string, layer: ChatRoomMapColorableLayer, original: HexColor, onPick: (color: HexColor, accepted?: boolean) => void): void;
/**
 * Closes the color picker of a color layer, if open
 * @param {boolean} [keep] - Keep the color being picked instead of restoring the color the layer had before
 * @returns {void}
 */
declare function ChatRoomMapViewCloseColorPicker(keep?: boolean): void;
/**
 * Creates the color rows of the color dialog: a swatch opening the color picker and a HEX field for each layer
 * @param {string} heading - The heading of the color picker
 * @param {readonly ChatRoomMapColorableLayer[]} layers
 * @param {readonly HexColor[]} colors - The current color of each layer
 * @param {() => void} [onChange] - Called whenever a valid color is picked
 * @param {() => void} [onCommit] - Called when a color is confirmed, with Accept in the color picker or by leaving the HEX field
 * @returns {{ element: HTMLElement, getColors: () => HexColor[], setColors: (colors: readonly HexColor[]) => void }}
 */
declare function ChatRoomMapViewCreateColorRows(heading: string, layers: readonly ChatRoomMapColorableLayer[], colors: readonly HexColor[], onChange?: () => void, onCommit?: () => void): {
    element: HTMLElement;
    getColors: () => HexColor[];
    setColors: (colors: readonly HexColor[]) => void;
};
/**
 * Creates a text button for the color dialog footer
 * @param {string} text
 * @param {() => void} onClick
 * @returns {HTMLButtonElement}
 */
declare function ChatRoomMapViewCreateColorButton(text: string, onClick: () => void): HTMLButtonElement;
/**
 * Creates the color rows of the object placed on a tile, with the buttons copying its colors to other objects and resetting them
 * @param {ChatRoomMapPos} pos
 * @param {ChatRoomMapObject} object - An object with color layers
 * @returns {HTMLElement}
 */
declare function ChatRoomMapViewCreateObjectColors(pos: ChatRoomMapPos, object: ChatRoomMapObject): HTMLElement;
/**
 * Enters the paste mode: every click on an object with the same ID as the copied format applies it,
 * and the dialog edits the copied format itself.
 * @returns {void}
 */
declare function ChatRoomMapViewStartColorPaste(): void;
/**
 * Leaves the paste mode and closes its dialog
 * @returns {void}
 */
declare function ChatRoomMapViewStopColorPaste(): void;
/**
 * Applies the copied color format to the object on a cell, if it is compatible with the object the format was copied from
 * @param {number} x
 * @param {number} y
 * @returns {boolean} - TRUE if the format was applied
 */
declare function ChatRoomMapViewPasteColorFormat(x: number, y: number): boolean;
/**
 * Saves the colors of the object placed on a tile and sends the changed map to the room
 * @param {ChatRoomMapPos} pos
 * @param {ChatRoomMapObject} object
 * @param {NonNullable<ChatRoomMapObjectSettings["Colors"]>} colors
 * @returns {void}
 */
declare function ChatRoomMapViewSaveObjectColors(pos: ChatRoomMapPos, object: ChatRoomMapObject, colors: NonNullable<ChatRoomMapObjectSettings["Colors"]>): void;
/**
 * Resets the Color tool to its default state, leaving the paste mode
 * @returns {void}
 */
declare function ChatRoomMapViewResetColorTool(): void;
