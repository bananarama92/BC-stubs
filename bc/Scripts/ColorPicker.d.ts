/**
 * Helper to guard for TouchEvents
 * @param {Event} event
 * @returns {event is TouchEvent}
 */
declare function isTouchEvent(event: Event): event is TouchEvent;
/**
 * Gets the coordinates of the current event on the canvas
 * @deprecated
 * @param {MouseEvent|TouchEvent} Event - The touch/mouse event
 * @returns {{X: number, Y: number}} - Coordinates of the click/touch event on the canvas
 */
declare function ColorPickerGetCoordinates(Event: MouseEvent | TouchEvent): {
    X: number;
    Y: number;
};
/**
 * Hide the color picker from the canvas.
 * @return {void} - Nothing
 */
declare function ColorPickerHide(): void;
/**
 * Draws the color picker on the canvas
 * @param {number} X - Coordinate on the X axis
 * @param {number} Y - Coordinate on the Y axis
 * @param {number} Width - Width of the color picker
 * @param {number} Height - Height of the color picker
 * @param {HTMLInputElement} Src - Input element that can contain a hex color code
 * @param {ItemColorExitListener} [Callback] - Callback to execute when the selected color changes
 * @returns {void} - Nothing
 * @deprecated
 */
declare function ColorPickerDraw(X: number, Y: number, Width: number, Height: number, Src: HTMLInputElement, Callback?: ItemColorExitListener): void;
/**
 * Parses a hex color code and converts it to a HSV object
 * @param {HexColor} Color - The RGB or RGBA hex color code
 * @param {HSVColor} [DefaultHSV] - The HSV to output if the color is not valid
 * @returns {HSVColor} - The HSV color from a hex color code
 * @see {@link https://gist.github.com/mjackson/5311256}
 */
declare function ColorPickerCSSToHSV(Color: HexColor, DefaultHSV?: HSVColor): HSVColor;
/**
 * Converts a HSV object into a valid hex code to use in the css
 * @param {HSVColor} HSV - HSV value to convert
 * @returns {HexColor} - Hex color code corresponding to the given HSV
 */
declare function ColorPickerHSVToCSS(HSV: HSVColor): HexColor;
/**
 * Returns the array of default colors for the list of favorite colors.
 * @returns {HSVColor[]} - Array of default colors
 */
declare function GetDefaultSavedColors(): HSVColor[];
/**
 * Call {@link ColorPickerLoad} with the passed parameters and perform a resize.
 * @param {ColorPickerInitOptions} options - The load parameters
 * @returns {Promise<HTMLElement>} - The root element of the color picker subscreen
 */
declare function ColorPickerInit(options?: ColorPickerInitOptions): Promise<HTMLElement>;
declare function ColorPickerLoad(): Promise<void>;
/**
 * Reload and refresh the color picker based on the current item color data.
 * @param {null | ColorPickerInitOptions} options
 * @returns {null | HTMLElement} The paseed root element
 */
declare function ColorPickerReload(options?: null | ColorPickerInitOptions): null | HTMLElement;
declare function ColorPickerResize(load: boolean): void;
declare function ColorPickerUnload(): void;
/**
 * @param {boolean} [forceExit=false]
 * @satisfies {ScreenExitHandler}
 */
declare function ColorPickerExit(forceExit?: boolean): void;
/**
 * Callback to be executed upon exiting the color picker subscreen.
 * @type {null | ItemColorExitListener}
 */
declare let ColorPickerExitCallback: null | ItemColorExitListener;
/**
 * The input callback to be executed upon color or opacity changes.
 * This callback should be responsible for propagating the updated element state to external variables (_e.g._ {@link ItemColorState}).
 * @type {null | ColorPickerInitOptions["onInput"]}
 */
declare let ColorPickerInputCallback: null | ColorPickerInitOptions["onInput"];
/**
 * The default saved custom colors (see {@link GetDefaultSavedColors})
 * @type {HSVColor[]}
 */
declare var DefaultSavedColors: HSVColor[];
/** The number of colors a player is allowed to save (see {@link DefaultSavedColors} and {@link PlayerCharacter.SavedColors}) */
declare const ColorPickerNumSaved: 18;
/**
 * Parameters to be passed to {@link ColorPickerLoad}.
 * Do _not_ modify directly; use {@link ColorPickerInit} instead.
 * @type {null | Readonly<ColorPickerInitOptions>}
 */
declare let ColorPickerInitOptions: null | Readonly<ColorPickerInitOptions>;
declare namespace ColorPicker {
    let ids: Readonly<{
        root: "color-picker";
    }>;
    let defaultShape: Readonly<RectTuple>;
    let _shapes: WeakMap<Element, Readonly<RectTuple>>;
    namespace eventListeners {
        function inputColor(this: HTMLInputElement | HTMLColorTintElement, ev: InputEvent): void;
        function focusColor(this: HTMLInputElement, ev: FocusEvent): void;
        function blurColor(this: HTMLInputElement | HTMLColorTintElement, ev: FocusEvent): void;
        function inputFieldset(this: HTMLFieldSetElement, ev: Event): void;
        function changeRadio(this: HTMLInputElement, ev: Event): void;
        function pointerupRadio(this: HTMLInputElement, ev: PointerEvent): void;
        function keydownRadio(this: HTMLInputElement, ev: KeyboardEvent): void;
        function clickSaveColor(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickExit(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickReset(this: HTMLButtonElement, ev: PointerEvent): void;
        function inputItemColor(elem: HTMLFieldSetElement, ev: CustomEvent<{
            source: "hue" | "opacity" | "tint" | "output";
        }>): any;
        function focusoutFieldset(this: HTMLFieldSetElement, ev: FocusEvent): void;
        function clickComboBox(this: HTMLButtonElement, ev: PointerEvent): void;
        function focusComboLabel(this: HTMLElement, ev: FocusEvent): void;
    }
    /**
     * @param {null | string} id
     * @param {readonly { value: string, label: string }[]} optionList
     * @returns {HTMLElement}
     */
    function _getDropdownWidget(id: null | string, optionList: readonly {
        value: string;
        label: string;
    }[]): HTMLElement;
    /**
     * Construct a new fieldset with the main color input elements
     * @param {null | string} id - The ID of the element
     * @param {null | Pick<ColorPickerInitOptions, "colorState" | "onInput">} options
     * @returns {HTMLFieldSetElement} - The newly created color picker fieldset containing all interactive sliders and such
     */
    function create(id: null | string, options?: null | Pick<ColorPickerInitOptions, "colorState" | "onInput">): HTMLFieldSetElement;
    /**
     * Set the color and/or opacity of the passed color picker screen
     * @param {ElementHelp.ElementOrId} root - The color picker screen or its ID
     * @param {{ readonly colorString?: string, readonly hsv?: Readonly<HSVColor>, readonly opacity?: number }} value - The passed color (be it as string or HSV object) and opacity
     * @param {null | { overrideEditOpacity?: boolean }} options
     */
    function setColor(root: ElementHelp.ElementOrId, value: {
        readonly colorString?: string;
        readonly hsv?: Readonly<HSVColor>;
        readonly opacity?: number;
    }, options?: null | {
        overrideEditOpacity?: boolean;
    }): void;
    /**
     * Get the color and opacity of the passed color picker screen
     * @param {ElementHelp.ElementOrId} root - The color picker screen or its ID
     * @returns {null | ItemColorExitState}
     */
    function getColor(root: ElementHelp.ElementOrId): null | ItemColorExitState;
    /**
     * Toggle the `disabled` state of the passed color picker using {@link Element.toggleAttribute}-like semantics.
     * @param {ElementHelp.ElementOrId} root - The color picker screen or its ID
     * @param {null | boolean} force - Toggle the `disabled` attributes if unspecified or, if a boolean is passed, force the provided value
     * @returns {boolean} - The new `disabled` state
     */
    function toggleDisabled(root: ElementHelp.ElementOrId, force?: null | boolean): boolean;
}
