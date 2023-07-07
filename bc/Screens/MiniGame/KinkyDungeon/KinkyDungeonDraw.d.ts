/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVert(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVertAbove(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} [noReplace]
 * @returns {boolean}
 */
declare function KDWallVertBoth(x: number, y: number, noReplace?: string): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDWallHorizTunnel(x: number, y: number): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
declare function KDWallVertTunnel(x: number, y: number): boolean;
declare function KinkyDungeonGetSprite(code: any, x: any, y: any, Fog: any, noReplace: any): string;
/** For multilayer sprites */
declare function KinkyDungeonGetSpriteOverlay2(code: any, x: any, y: any, Fog: any, noReplace: any): string;
declare function KinkyDungeonGetSpriteOverlay(code: any, x: any, y: any, Fog: any, noReplace: any): any;
declare function KinkyDungeonDrawGame(): void;
/**
 * Draws arousal screen filter
 * @param {number} y1 - Y to draw filter at.
 * @param {number} h - Height of filter
 * @param {number} Width - Width of filter
 * @param {number} ArousalOverride - Override to the existing arousal value
 * @returns {void} - Nothing.
 */
declare function KDDrawArousalScreenFilter(y1: number, h: number, Width: number, ArousalOverride: number, Color?: string, AlphaBonus?: number): void;
declare function KDCanAttack(): boolean;
declare function KinkyDungeonSendFloater(Entity: any, Amount: any, Color: any, Time: any, LocationOverride: any, suff?: string): void;
declare function KinkyDungeonDrawFloaters(CamX: any, CamY: any): void;
/**
 * Easing function makes things smooth
 * @param {number} value
 * @returns {number}
 */
declare function KDEase(value: number): number;
declare function KinkyDungeonDrawMessages(NoLog: any): void;
declare function KDhexToRGB(h: any): {
    r: string;
    g: string;
    b: string;
};
declare function KinkyDungeonUpdateVisualPosition(Entity: any, amount: any): number;
/**
 * Sets the target location based on MOUSE location
 */
declare function KinkyDungeonSetTargetLocation(): void;
/**
 * Sets the move direction based on MOUSE location
 */
declare function KinkyDungeonSetMoveDirection(): void;
/**
 * Draws a box component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Color - Color of the component
 * @param {boolean} [NoBorder] - Color of the component
 * @param {number} [Alpha] - Transparency of the box
 * @param {number} [zIndex] - z Index
 *  @returns {void} - Nothing
 */
declare function DrawBoxKD(Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number): void;
/**
 * Draws a box component
 * @param {any} Container - Container to draw to
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Color - Color of the component
 * @param {boolean} [NoBorder] - Color of the component
 * @param {number} [Alpha] - Transparency of the box
 * @param {number} [zIndex] - z Index
 *  @returns {void} - Nothing
 */
declare function DrawBoxKDTo(Container: any, Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number): void;
/**
 *
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Width
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 * @param {*} [border]
 * @param {boolean} [unique] - This button is not differentiated by position
 */
declare function DrawTextFitKD(Text: any, X: any, Y: any, Width: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any, unique?: boolean): void;
/**
 *
 * @param {any} Container
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Width
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 * @param {*} [border]
 * @param {boolean} [unique] - This button is not differentiated by position
 */
declare function DrawTextFitKDTo(Container: any, Text: any, X: any, Y: any, Width: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any, unique?: boolean): void;
/**
 *
 * @param {*} Text
 * @param {*} X
 * @param {*} Y
 * @param {*} Color
 * @param {*} [BackColor]
 * @param {*} [FontSize]
 * @param {*} [Align]
 * @param {*} [zIndex]
 * @param {*} [alpha]
 */
declare function DrawTextKD(Text: any, X: any, Y: any, Color: any, BackColor?: any, FontSize?: any, Align?: any, zIndex?: any, alpha?: any, border?: any): void;
/**
 *
 * @param {{Text: string, X: number, Y: number, Width?: number, Color: string, BackColor: string, FontSize?: number, align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean}} Params
 * @returns {boolean} - If it worked
 */
declare function DrawTextVisKD(Container: any, Map: any, id: any, Params: {
    Text: string;
    X: number;
    Y: number;
    Width?: number;
    Color: string;
    BackColor: string;
    FontSize?: number;
    align?: string;
    zIndex?: number;
    alpha?: number;
    border?: number;
    unique?: boolean;
}): boolean;
/**
 * Draws a basic rectangle filled with a given color
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function DrawRectKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a basic rectangle filled with a given color
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {{Left: number, Top: number, Width: number, Height: number, Color: string, LineWidth?: number, zIndex: number, alpha?: number}} Params - rect parameters
 * @returns {boolean} - If it worked
 */
declare function FillRectKD(Container: any, Map: Map<string, any>, id: any, Params: {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    LineWidth?: number;
    zIndex: number;
    alpha?: number;
}): boolean;
/**
 * Draws a button component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables the button border and only draws the image and selection halo
 * @param {string} [FillColor] - Color of the background
 * @param {number} [FontSize] - Color of the background
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {boolean} [Stretch] - Stretch the image to fit
 * @param {number} [zIndex] - Stretch the image to fit
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.scaleImage] - zIndex
 * @returns {void} - Nothing
 */
declare function DrawButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    scaleImage?: boolean;
}): void;
/**
 * Draws a button component
 * @param {any} Container - Container to draw to
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text to display in the button
 * @param {string} Color - Color of the component
 * @param {string} [Image] - URL of the image to draw inside the button, if applicable
 * @param {string} [HoveringText] - Text of the tooltip, if applicable
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {boolean} [NoBorder] - Disables the button border and only draws the image and selection halo
 * @param {string} [FillColor] - Color of the background
 * @param {number} [FontSize] - Color of the background
 * @param {boolean} [ShiftText] - Shift text to make room for the button
 * @param {boolean} [Stretch] - Stretch the image to fit
 * @param {number} [zIndex] - Stretch the image to fit
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {boolean} [options.unique] - This button is not differentiated by position
 * @param {boolean} [options.scaleImage] - zIndex
 * @returns {void} - Nothing
 */
declare function DrawButtonVisTo(Container: any, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    unique?: boolean;
    scaleImage?: boolean;
}): void;
/**
 * Draws a checkbox component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Text - Label associated with the checkbox
 * @param {boolean} IsChecked - Whether or not the checkbox is checked
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {string} [TextColor] - Color of the text
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @returns {void} - Nothing
 */
declare function DrawCheckboxVis(Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
}): void;
/**
 * Draws a checkbox component
 * @param {string} name - Name of the button element
 * @param {(bdata: any) => boolean} func - Whether or not you can click on it
 * @param {boolean} enabled - Whether or not you can click on it
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Text - Label associated with the checkbox
 * @param {boolean} IsChecked - Whether or not the checkbox is checked
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {string} [TextColor] - Color of the text
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @param {number} [options.zIndex] - zIndex
 * @param {number} [options.maxWidth] - Max width
 * @returns {void} - Nothing
 */
declare function DrawCheckboxKDEx(name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: {
    noTextBG?: boolean;
    alpha?: number;
    zIndex?: number;
    maxWidth?: number;
}): void;
/**
 * Draw a back & next button component
 * @param {number} Left - Position of the component from the left of the canvas
 * @param {number} Top - Position of the component from the top of the canvas
 * @param {number} Width - Width of the component
 * @param {number} Height - Height of the component
 * @param {string} Label - Text inside the component
 * @param {string} Color - Color of the component
 * @param {string} [Image] - Image URL to draw in the component
 * @param {() => string} [BackText] - Text for the back button tooltip
 * @param {() => string} [NextText] - Text for the next button tooltip
 * @param {boolean} [Disabled] - Disables the hovering options if set to true
 * @param {number} [ArrowWidth] - How much of the button the previous/next sections cover. By default, half each.
 * @param {boolean} [NoBorder] - Disables the hovering options if set to true
 * @param {object} [options] - Additional options
 * @param {boolean} [options.noTextBG] - Dont show text backgrounds
 * @param {number} [options.alpha]
 * @returns {void} - Nothing
 */
declare function DrawBackNextButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, BackText?: () => string, NextText?: () => string, Disabled?: boolean, ArrowWidth?: number, NoBorder?: boolean, options?: {
    noTextBG?: boolean;
    alpha?: number;
}): void;
/**
 *
 * @param {number} CamX
 * @param {number} CamY
 * @param {number} CamX_offset
 * @param {number} CamY_offset
 * @param {boolean} [Debug]
 * @returns {any}
 */
declare function KDDrawMap(CamX: number, CamY: number, CamX_offset: number, CamY_offset: number, Debug?: boolean): any;
/**
 *
 * @param {any} Container
 * @param {Map<string, any>} Map
 * @param {string} Image
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 * @param {number} [Rotation]
 * @param {any} [options]
 * @param {boolean} [Centered]
 * @param {Map<string, boolean>} [SpritesDrawn]
 * @param {number} [Scale]
 * @returns {boolean}
 */
declare function KDDraw(Container: any, Map: Map<string, any>, id: any, Image: string, Left: number, Top: number, Width: number, Height: number, Rotation?: number, options?: any, Centered?: boolean, SpritesDrawn?: Map<string, boolean>, Scale?: number): boolean;
/**
 * Returns a PIXI.Texture, or null if there isnt one
 * @param {string} Image
 * @returns {any}
 */
declare function KDTex(Image: string): any;
/**
 *
 * @param {string} str
 * @returns
 */
declare function string2hex(str: string): number;
declare function GetAdjacentList(list: any, index: any, width: any): {
    left: any;
    right: any;
};
declare function KDUpdateVision(): void;
declare function KDDrawTileTooltip(maptile: any, x: any, y: any, offset: any): number;
/**
 *
 * @param {effectTile} tile
 * @param {any[]} TooltipList
 * @param {string} color
 * @param {string} [extra]
 * @param {string} [descColor]
 * @param {string} [extraColor]
 */
declare function KDETileTooltipSimple(tile: effectTile, TooltipList: any[], color: string, extra?: string, descColor?: string, extraColor?: string): void;
/**
 *
 * @param {effectTile} tile
 * @param {number} x
 * @param {number} y
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawEffectTileTooltip(tile: effectTile, x: number, y: number, offset: number): number;
/**
 *
 * @param {any[]} TooltipList
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawTooltip(TooltipList: any[], offset: number): number;
/**
 * Creates a text field with the specified params
 * @param {string} Name
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 */
declare function KDTextArea(Name: string, Left: number, Top: number, Width: number, Height: number): {
    Element: any;
    Created: boolean;
};
/**
 * Creates a text field with the specified params
 * @param {string} Name
 * @param {number} Left
 * @param {number} Top
 * @param {number} Width
 * @param {number} Height
 * @param {string} Type
 * @param {string} Value
 * @param {string} MaxLength
 */
declare function KDTextField(Name: string, Left: number, Top: number, Width: number, Height: number, Type?: string, Value?: string, MaxLength?: string): {
    Element: any;
    Created: boolean;
};
/**
 * Culls the text fields and other DOM elements created
 */
declare function KDCullTempElements(): void;
/**
 * Draws an existing HTML element at a specific position within the document. The element is "centered" on the given coordinates by dividing its height and width by two.
 * @param {string} ElementID - The id of the input tag to (re-)position.
 * @param {number} X - Center point of the element on the X axis.
 * @param {number} Y - Center point of the element on the Y axis.
 * @param {number} W - Width of the element.
 * @param {number} [H] - Height of the element.
 * @returns {void} - Nothing
 */
declare function KDElementPosition(ElementID: string, X: number, Y: number, W: number, H?: number): void;
/** Whether or not to show the quick inv
 * @returns {boolean}
*/
declare function KDShowQuickInv(): boolean;
declare function KDPlayerDrawPoseButtons(C: any): void;
declare let KDRecentRepIndex: number;
declare let ShowBoringness: boolean;
declare let KDWallReplacers: string;
declare let KinkyDungeonSuppressSprint: boolean;
declare let KDReturnButtonXX: number;
declare let KDIntenseFilter: any;
/** @type HTMLCanvasElement */
declare let pixiview: HTMLCanvasElement;
declare let pixirenderer: any;
declare let pixirendererKD: any;
declare let kdgamefog: import("pixi.js").Graphics;
declare let kdmapboard: import("pixi.js").Container;
declare let kdenemyboard: import("pixi.js").Container;
declare let kdenemystatusboard: import("pixi.js").Container;
declare let kdbulletboard: import("pixi.js").Container;
declare let kdeffecttileboard: import("pixi.js").Container;
declare let kdUItext: import("pixi.js").Container;
declare let kdstatusboard: import("pixi.js").Container;
declare let kdgameboard: import("pixi.js").Container;
declare let kdui: import("pixi.js").Graphics;
declare let kdcanvas: import("pixi.js").Container;
declare let statusOffset: number;
declare let kdparticles: import("pixi.js").Container;
declare let KDTextWhite: string;
declare let KDTextGray3: string;
declare let KDTextTan: string;
declare let KDTextGray2: string;
declare let KDTextGray1: string;
declare let KDTextGray0: string;
declare let KDCurseColor: string;
declare let KDGoodColor: string;
/**
 * @type {Map<string, boolean>}
 */
declare let kdSpritesDrawn: Map<string, boolean>;
/**
 * @type {Map<string, any>}
 */
declare let kdpixisprites: Map<string, any>;
/**
 * @type {Map<string, any>}
 */
declare let kdprimitiveparams: Map<string, any>;
/**
  * @type {Map<string, any>}
  */
declare let kdpixitex: Map<string, any>;
declare let KDChainablePillar: string;
/** @type KDSprites */
declare const KDSprites: KDSprites;
/** @type KDSprites */
declare const KDOverlays: KDSprites;
/** @type KDSprites */
declare const KDOverlays2: KDSprites;
declare namespace KDSpecialChests {
    const silver: string;
    const shadow: string;
}
/**
 * @type {Record<string, number>}
 */
declare let KDLastKeyTime: Record<string, number>;
declare let KinkyDungeonFloaters: any[];
declare let KinkyDungeonLastFloaterTime: number;
declare let KDTimescale: number;
declare let KDBulletSpeed: number;
declare let KDEntitiesFloaterRegisty: Map<any, any>;
declare let KDFloaterSpacing: number;
declare let KinkyDungeonMessageToggle: boolean;
declare let KinkyDungeonMessageLog: any[];
declare let KDLogDist: number;
declare let KDMSGFontSize: number;
declare let KDLogHeight: number;
declare let KDMaxLog: number;
declare let KDLogTopPad: number;
declare let KDLogIndex: number;
declare let KDLogIndexInc: number;
declare let KDMsgWidth: number;
declare let KDMsgWidthMin: number;
declare let KDMsgX: number;
declare let KDMsgFadeTime: number;
declare let KDMaxConsoleMsg: number;
declare let KDBoxThreshold: number;
declare let KDButtonColor: string;
declare let KDButtonColorIntense: string;
declare let KDBorderColor: string;
declare let KDFont: string;
declare let KDFontName: string;
declare let KDAllowText: boolean;
declare let KDTileTooltips: {
    '1': () => {
        color: string;
        text: string;
    };
    '0': () => {
        color: string;
        text: string;
    };
    '2': () => {
        color: string;
        text: string;
    };
    R: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    Y: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    L: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    A: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    a: () => {
        color: string;
        text: string;
    };
    O: () => {
        color: string;
        text: string;
    };
    o: () => {
        color: string;
        text: string;
    };
    C: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    c: () => {
        color: string;
        text: string;
    };
    T: () => {
        color: string;
        text: string;
    };
    '4': () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    X: () => {
        color: string;
        text: string;
    };
    '?': () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    ',': () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    S: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    s: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    H: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    G: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    B: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    '@': () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    b: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    D: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    d: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    Z: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    z: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    t: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    u: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    V: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
    N: () => {
        color: string;
        noInspect: boolean;
        text: string;
    };
};
declare namespace KDEffectTileTooltips {
    function Runes(tile: any, x: any, y: any, TooltipList: any): void;
    function RunesTrap(tile: any, x: any, y: any, TooltipList: any): void;
    function Inferno(tile: any, x: any, y: any, TooltipList: any): void;
    function Ember(tile: any, x: any, y: any, TooltipList: any): void;
    function Ice(tile: any, x: any, y: any, TooltipList: any): void;
    function Water(tile: any, x: any, y: any, TooltipList: any): void;
    function Vines(tile: any, x: any, y: any, TooltipList: any): void;
    function Ropes(tile: any, x: any, y: any, TooltipList: any): void;
    function Chains(tile: any, x: any, y: any, TooltipList: any): void;
    function Belts(tile: any, x: any, y: any, TooltipList: any): void;
    function Fabric(tile: any, x: any, y: any, TooltipList: any): void;
    function FabricGreen(tile: any, x: any, y: any, TooltipList: any): void;
    function Slime(tile: any, x: any, y: any, TooltipList: any): void;
    function Latex(tile: any, x: any, y: any, TooltipList: any): void;
    function LatexThin(tile: any, x: any, y: any, TooltipList: any): void;
    function Steam(tile: any, x: any, y: any, TooltipList: any): void;
    function Smoke(tile: any, x: any, y: any, TooltipList: any): void;
    function Torch(tile: any, x: any, y: any, TooltipList: any): void;
    function TorchUnlit(tile: any, x: any, y: any, TooltipList: any): void;
    function Lantern(tile: any, x: any, y: any, TooltipList: any): void;
    function LanternUnlit(tile: any, x: any, y: any, TooltipList: any): void;
    function IllusOrb(tile: any, x: any, y: any, TooltipList: any): void;
    function IllusOrbDead(tile: any, x: any, y: any, TooltipList: any): void;
    function TorchOrb(tile: any, x: any, y: any, TooltipList: any): void;
    function Cracked(tile: any, x: any, y: any, TooltipList: any): void;
}
/**
 * Elements which are temporary and drawn using a declarative style
 * If not redrawn at the end of a frame, they will be removed
 */
declare let KDTempElements: Map<any, any>;
/**
 * Elements which are temporary and drawn using a declarative style
 * If not redrawn at the end of a frame, they will be removed
 */
declare let KDDrawnElements: Map<any, any>;
declare let KDUpdateFog: boolean;
declare namespace KDLastCamPos {
    const x: number;
    const y: number;
}
declare let KDDrawPlayer: boolean;
declare let KDDesiredPlayerPose: {};
