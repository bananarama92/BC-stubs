/**
 * Pre-loads a font family and calculates font measurements for the family. This should generally be called in an item's load function so
 * that font data is loaded in preparation for dynamic font drawing. This will also be called at draw-time, but if the font is already
 * pre-loaded, this function will do nothing.
 * @param {string} fontFamily - the font family to load. Can be a single font name or a full CSS font stack
 * (e.g. "'Helvetica', 'Arial', sans-serif")
 * @returns {void} - Nothing
 */
declare function DynamicDrawLoadFont(fontFamily: string): void;
/**
 * Returns the width "weight" of a single character in the given font, relative to the font's widest pre-measured (ASCII)
 * character. Characters that weren't part of the pre-measured ASCII set - most importantly CJK and other non-Latin glyphs,
 * which are typically wider than ASCII characters - are measured on demand and cached, so that arc text spaces them
 * correctly instead of assuming a fixed width.
 * @param {{ width: number, weights: Record<string, number> }} weightMap - The font's measurement map
 * @param {string} fontFamily - The font family the text is being drawn in
 * @param {string} char - The single character to measure
 * @returns {number} - The character's width relative to the font's widest pre-measured character
 */
declare function DynamicDrawGetCharWeight(weightMap: {
    width: number;
    weights: Record<string, number>;
}, fontFamily: string, char: string): number;
/**
 * Draws the given text to the provided canvas rendering context at the given positions. Text is drawn horizontally, respecting the
 * configuration in the provided options (if any).
 * @param {string} text - The text to draw
 * @param {CanvasRenderingContext2D} ctx - The rendering context to draw the text to
 * @param {number} x - The x coordinate at which to draw the text
 * @param {number} y - The y coordinate at which to draw the text
 * @param {DynamicDrawOptions} options - Additional drawing options
 * @returns {void} - Nothing
 */
declare function DynamicDrawText(text: string, ctx: CanvasRenderingContext2D, x: number, y: number, options: DynamicDrawOptions): void;
/**
 * Draws the given text in a straight line between the two provided coordinates. If the contain option is specified, the text will be fully
 * contained in the rectangle defined by the from and to positions.
 * @param {string} text - The text to draw
 * @param {CanvasRenderingContext2D} ctx - The rendering context to draw the text to
 * @param {readonly number[]} from - The [x, y] coordinates to start drawing the text at
 * @param {readonly number[]} to - The [x, y] coordinates to end drawing the text at
 * @param {DynamicDrawOptions} options - Additional drawing options
 * @returns {void} - Nothing
 */
declare function DynamicDrawTextFromTo(text: string, ctx: CanvasRenderingContext2D, from: readonly number[], to: readonly number[], options: DynamicDrawOptions): void;
/**
 * Draws the given text in a circular arc at the given [x, y] coordinate. The text will be drawn so that the center of the text is
 * positioned on the given coordinates.
 * @see {@link DynamicDrawOptions}
 * @param {string} text - The text to draw
 * @param {CanvasRenderingContext2D} ctx - The rendering context to draw the text to
 * @param {number} x - The x coordinate at which to center the text
 * @param {number} y - The y coordinate at which to center the text
 * @param {DynamicDrawOptions} options - Additional drawing options. These can be used to specify the radius of the circle (determining how
 * curved the text appears), as well as the direction along the circle that the text is drawn in (by default, text is drawn clockwise).
 * @returns {void} - Nothing
 */
declare function DynamicDrawTextArc(text: string, ctx: CanvasRenderingContext2D, x: number, y: number, options: DynamicDrawOptions): void;
/**
 * Internal utility function for drawing text and applying text effects.
 * @param {string} text - The text to draw
 * @param {CanvasRenderingContext2D} ctx - The rendering context to draw the text to
 * @param {number} x - The x coordinate at which to draw the text
 * @param {number} y - The y coordinate at which to draw the text
 * @param {DynamicDrawOptions} options - Additional drawing options
 * @returns {void} - Nothing
 */
declare function DynamicDrawTextAndEffects(text: string, ctx: CanvasRenderingContext2D, x: number, y: number, options: DynamicDrawOptions): void;
/**
 * Parses a dynamic drawing options object, returning default values for properties that aren't defined.
 * @param {DynamicDrawOptions} [options] - The options object to parse
 * @returns {DynamicDrawOptions} - A complete options object, with default values where not specified
 */
declare function DynamicDrawParseOptions(options?: DynamicDrawOptions): DynamicDrawOptions;
/**
 * Applies a set of dynamic drawing options to a canvas rendering context. This sets the canvas up with the relevant font size, color, etc.
 * ready for drawing text
 * @param {CanvasRenderingContext2D} ctx - The rendering context to draw the text to
 * @param {DynamicDrawOptions} options - The drawing options to apply
 * @returns {void} - Nothing
 */
declare function DynamicDrawApplyOptions(ctx: CanvasRenderingContext2D, { fontSize, fontFamily, textAlign, textBaseline, color, strokeColor, strokeWidth }: DynamicDrawOptions): void;
/**
 * DynamicDraw.js
 * --------------
 * This file contains common utilities for dynamically drawing text onto assets.
 *
 * An options hash that can be used to customize dynamically drawn text. No options need be specified, and some options are only applicable
 * to certain drawing functions.
 * @typedef DynamicDrawOptions
 * @type {object}
 * @property {number} [fontSize] - The target font size. Note that if space is constrained, the actual drawn font size will be reduced
 * automatically to fit. Defaults to 30px.
 * @property {string | null} [fontFamily] - The desired font family to draw text in. This can be a single font name, or a full CSS font stack
 * (e.g. "'Helvetica', 'Arial', sans-serif"). Defaults to the player's chosen global font.
 * @property {CanvasTextAlign} [textAlign] - The text alignment to use. Can be any valid
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align text alignment}. Not applicable to the {@link DynamicDrawTextArc}
 * function. Defaults to "center".
 * @property {CanvasTextBaseline} [textBaseline] - The text baseline to use. Can be any valid
 * {@link https://developer.mozilla.org/en-us/docs/Web/CSS/vertical-align vertical alignment}. Defaults to "middle".
 * @property {string} [color] - The color that the text should be drawn in. Can be any valid CSS color string. Defaults to "#000".
 * @property {string} [strokeColor] - The stroke color that should be used for the text. Can be any valid CSS color
 * string. Defaults to the same value as the `color` property.
 * @property {number} [strokeWidth] - The stroke width that should be used when stroking the text. Only used if a `strokeColor` is defined. Defaults to 1.
 * @property {DynamicDrawTextEffect} [effect] - A dynamic text effect to apply. No effects are applied by default.
 * @property {number} [width] - The maximum width of the drawn text. Not applicable to the {@link DynamicDrawTextFromTo} function, as
 * constraints are defined by the endpoints. When defined for the {@link DynamicDrawTextArc} function, it defines the maximum width of the
 * text perpendicular to the radius line on which the text is centered. Unlimited by default.
 * @property {boolean} [contain] - Whether or not the text should be fully contained in the box defined by the from/to coordinates. Only
 * applicable to the {@link DynamicDrawTextFromTo} function. Defaults to true.
 * @property {number} [angle] - The angle at which the text should be drawn, relative to the center of the circle. Angles are measured
 * clockwise in radians starting at the vertical 12 o'clock position. For example 0 corresponds to 12 o'clock, PI/2 corresponds to
 * 3 o'clock, PI corresponds to 6 o'clock, and 3PI/2 corresponds to 9 o'clock. Only applicable to the {@link DynamicDrawTextArc} function.
 * Defaults to 0.
 * @property {number} [radius] - The radius in pixels of the circle whose arc the text should be drawn along. A smaller radius will result
 * in a greater text curvature and vice versa. Only applicable to the {@link DynamicDrawTextArc} function. Defaults to 450px.
 * @property {number} [maxAngle] - The maximum angle that the text should be drawn along. This effectively determines the maximum length of
 * the arc along which the text will be drawn. Only applicable to the {@link DynamicDrawTextArc} function. Defaults to PI (a semicircle).
 * @property {DynamicDrawTextDirection} [direction] - The direction the text should be drawn in along the circular arc. Only applicable to
 * the {@link DynamicDrawTextArc} function. Defaults to {@link DynamicDrawTextDirection.CLOCKWISE};
 * @property {DynamicDrawTextCurve} [textCurve] - The direction of the curve of the text. This determines whether the center of the text
 * curves upwards ({@link DynamicDrawTextCurve.SMILEY}) or downwards ({@link DynamicDrawTextCurve.FROWNY}). Only applicable to the
 * {@link DynamicDrawTextArc} function. Defaults to {@link DynamicDrawTextCurve.FROWNY}.
 *
 * A drawing callback, used to add drawing effects to dynamic text.
 * @callback DynamicDrawTextEffectFunction
 * @param {string} text - The text to draw
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
 * @param {number} x - The x coordinate at which the text should be drawn
 * @param {number} y - The y coordinate at which the text should be drawn
 * @param {DynamicDrawOptions} [options] - Additional drawing options
 *
 * A definition object that wraps the drawing functions that define a dynamic text effect
 * @typedef DynamicDrawTextEffectDefinition
 * @type {object}
 * @property {DynamicDrawTextEffectFunction} [before] - A drawing callback that is called before the dynamic text is drawn
 * @property {DynamicDrawTextEffectFunction} [after] - A drawing callback that is called after the dynamic text is drawn
 *
 * @see {@link DynamicDrawText} - for drawing basic horizontal text.
 * @see {@link DynamicDrawTextFromTo} - for drawing text in a straight line between any given two coordinates.
 * @see {@link DynamicDrawTextArc} - for drawing text in a circular arc.
 */
/**
 * A common regex that can be used to check whether a given string is permitted for dynamic drawing.
 *
 * This is an *allowlist* (not a blocklist): it accepts Unicode letters (`\p{L}`) and numbers (`\p{N}`) so that scripts such
 * as Chinese, Japanese, Korean, Cyrillic, Greek and accented (precomposed) Latin can be drawn, plus the legacy ASCII
 * punctuation set (`_ ~!$#%*+` and the space). Because it is an allowlist, every other Unicode category is rejected by
 * construction - in particular control characters (`\p{Cc}`), format characters (`\p{Cf}`, which covers bidirectional
 * overrides such as U+202E and zero-width/invisible characters), private-use and surrogate code points, separators other
 * than the literal space, symbols/emoji, and combining marks (`\p{M}`, the source of "Zalgo" rendering overflow). Keeping
 * these out is what prevents hostile or malformed text - which reaches us from other players via the server - from causing
 * odd rendering or visual spoofing when drawn onto a canvas.
 * @type {RegExp}
 */
declare const DynamicDrawTextRegex: RegExp;
/**
 * A regex pattern that can be attached to HTML input elements to check for validity - matches the {@link DynamicDrawTextRegex}.
 * Note that this only drives the browser's native form-validity UI; the authoritative check is always {@link DynamicDrawTextRegex}.
 * @type {string}
 */
declare const DynamicDrawTextInputPattern: string;
/**
 * An array of ASCII printable characters whose widths are pre-measured for each font (used internally for arc text
 * measurement). Non-ASCII characters (e.g. CJK glyphs) are not listed here; their widths are measured on demand and cached
 * by {@link DynamicDrawGetCharWeight}.
 * @type {string[]}
 */
declare const DynamicDrawMeasuredCharacters: string[];
/**
 * A padding multiplier for text when drawn in an arc. The extra padding helps ensure that the bottoms of characters don't collide
 * @type {number}
 */
declare const DynamicDrawTextArcPaddingRatio: number;
/**
 * Cache for font measurements. These are used to make text which is drawn in an arc look more natural by respecting the widths of
 * characters in various fonts.
 * @type {Record.<string, {
 *     width: number,
 *     weights: Record.<string, number>
 * }>}
 */
declare const DynamicDrawFontMeasurements: Record<string, {
    width: number;
    weights: Record<string, number>;
}>;
type DynamicDrawTextDirection = 1 | -1;
declare namespace DynamicDrawTextDirection {
    let CLOCKWISE: 1;
    let ANTICLOCKWISE: -1;
}
type DynamicDrawTextCurve = 1 | -1;
declare namespace DynamicDrawTextCurve {
    let SMILEY: -1;
    let FROWNY: 1;
}
declare namespace DynamicDrawTextEffect {
    let BURN: "burn";
}
/**
 * The default options that are used for dynamic text drawing.
 * @type {DynamicDrawOptions}
 */
declare const DynamicDrawTextDefaultOptions: DynamicDrawOptions;
/**
 * Dynamic text effect definitions. The definitions define the drawing effects that can be applied to dynamically drawn text.
 * @type {Record.<DynamicDrawTextEffect, DynamicDrawTextEffectDefinition>}
 */
declare const DynamicDrawTextEffects: Record<DynamicDrawTextEffect, DynamicDrawTextEffectDefinition>;
/**
 * DynamicDraw.js
 * --------------
 * This file contains common utilities for dynamically drawing text onto assets.
 *
 * An options hash that can be used to customize dynamically drawn text. No options need be specified, and some options are only applicable
 * to certain drawing functions.
 */
type DynamicDrawOptions = {
    /**
     * - The target font size. Note that if space is constrained, the actual drawn font size will be reduced
     * automatically to fit. Defaults to 30px.
     */
    fontSize?: number | undefined;
    /**
     * - The desired font family to draw text in. This can be a single font name, or a full CSS font stack
     * (e.g. "'Helvetica', 'Arial', sans-serif"). Defaults to the player's chosen global font.
     */
    fontFamily?: string | null | undefined;
    /**
     * - The text alignment to use. Can be any valid
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align text alignment}. Not applicable to the {@link DynamicDrawTextArc}function. Defaults to "center".
     */
    textAlign?: CanvasTextAlign | undefined;
    /**
     * - The text baseline to use. Can be any valid
     * {@link https://developer.mozilla.org/en-us/docs/Web/CSS/vertical-align vertical alignment}. Defaults to "middle".
     */
    textBaseline?: CanvasTextBaseline | undefined;
    /**
     * - The color that the text should be drawn in. Can be any valid CSS color string. Defaults to "#000".
     */
    color?: string | undefined;
    /**
     * - The stroke color that should be used for the text. Can be any valid CSS color
     * string. Defaults to the same value as the `color` property.
     */
    strokeColor?: string | undefined;
    /**
     * - The stroke width that should be used when stroking the text. Only used if a `strokeColor` is defined. Defaults to 1.
     */
    strokeWidth?: number | undefined;
    /**
     * - A dynamic text effect to apply. No effects are applied by default.
     */
    effect?: "burn" | undefined;
    /**
     * - The maximum width of the drawn text. Not applicable to the {@link DynamicDrawTextFromTo} function, as
     * constraints are defined by the endpoints. When defined for the {@link DynamicDrawTextArc} function, it defines the maximum width of the
     * text perpendicular to the radius line on which the text is centered. Unlimited by default.
     */
    width?: number | undefined;
    /**
     * - Whether or not the text should be fully contained in the box defined by the from/to coordinates. Only
     * applicable to the {@link DynamicDrawTextFromTo} function. Defaults to true.
     */
    contain?: boolean | undefined;
    /**
     * - The angle at which the text should be drawn, relative to the center of the circle. Angles are measured
     * clockwise in radians starting at the vertical 12 o'clock position. For example 0 corresponds to 12 o'clock, PI/2 corresponds to
     * 3 o'clock, PI corresponds to 6 o'clock, and 3PI/2 corresponds to 9 o'clock. Only applicable to the {@link DynamicDrawTextArc} function.
     * Defaults to 0.
     */
    angle?: number | undefined;
    /**
     * - The radius in pixels of the circle whose arc the text should be drawn along. A smaller radius will result
     * in a greater text curvature and vice versa. Only applicable to the {@link DynamicDrawTextArc} function. Defaults to 450px.
     */
    radius?: number | undefined;
    /**
     * - The maximum angle that the text should be drawn along. This effectively determines the maximum length of
     * the arc along which the text will be drawn. Only applicable to the {@link DynamicDrawTextArc} function. Defaults to PI (a semicircle).
     */
    maxAngle?: number | undefined;
    /**
     * - The direction the text should be drawn in along the circular arc. Only applicable to
     * the {@link DynamicDrawTextArc} function. Defaults to {@link DynamicDrawTextDirection.CLOCKWISE};
     */
    direction?: DynamicDrawTextDirection | undefined;
    /**
     * - The direction of the curve of the text. This determines whether the center of the text
     * curves upwards ({@link DynamicDrawTextCurve.SMILEY}) or downwards ({@link DynamicDrawTextCurve.FROWNY}). Only applicable to the
     * {@link DynamicDrawTextArc} function. Defaults to {@link DynamicDrawTextCurve.FROWNY}.
     *
     * A drawing callback, used to add drawing effects to dynamic text.
     */
    textCurve?: DynamicDrawTextCurve | undefined;
};
/**
 * DynamicDraw.js
 * --------------
 * This file contains common utilities for dynamically drawing text onto assets.
 *
 * An options hash that can be used to customize dynamically drawn text. No options need be specified, and some options are only applicable
 * to certain drawing functions.
 */
type DynamicDrawTextEffectFunction = (text: string, ctx: CanvasRenderingContext2D, x: number, y: number, options?: DynamicDrawOptions | undefined) => any;
/**
 * DynamicDraw.js
 * --------------
 * This file contains common utilities for dynamically drawing text onto assets.
 *
 * An options hash that can be used to customize dynamically drawn text. No options need be specified, and some options are only applicable
 * to certain drawing functions.
 */
type DynamicDrawTextEffectDefinition = {
    /**
     * - A drawing callback that is called before the dynamic text is drawn
     */
    before?: DynamicDrawTextEffectFunction | undefined;
    /**
     * - A drawing callback that is called after the dynamic text is drawn
     */
    after?: DynamicDrawTextEffectFunction | undefined;
};
