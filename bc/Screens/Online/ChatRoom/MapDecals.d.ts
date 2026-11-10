/** @type {Map<DrawSource, Map<string, HTMLCanvasElement>>} - Object images with a decal, by object image, then by decal and color */
declare var ChatRoomMapViewDecalImages: Map<DrawSource, Map<string, HTMLCanvasElement>>;
/** @type {Map<AssetName, RectTuple>} - The drawn part of each decal image, without its empty margins */
declare var ChatRoomMapViewDecalContentRects: Map<AssetName, RectTuple>;
/**
 * Gets the part of a decal image that is drawn, as decal images come with empty margins of various sizes
 * @param {AssetName} decal
 * @param {CanvasImageSource & { width: number, height: number }} image
 * @returns {RectTuple}
 */
declare function ChatRoomMapViewGetDecalContentRect(decal: AssetName, image: CanvasImageSource & {
    width: number;
    height: number;
}): RectTuple;
/** The swatch color of a decal that keeps its own colors */
declare const ChatRoomMapViewDecalDefaultColor = "#FFFFFF";
/**
 * Gets the image of an object with a decal drawn on its {@link ChatRoomMapObject.DecalArea}, fitted and centered.
 * The decal is part of the object's image, so it turns and sizes with the object.
 * @param {ChatRoomMapObject} obj
 * @param {DrawSource} image - The object's image, plain or colored
 * @param {AssetName} decal - One of {@link AssetGetDecals}
 * @param {HexColor} [color] - The color the decal is tinted with, like a worn decal
 * @returns {DrawSource} - The composed image, or the image given while the decal is not available
 */
declare function ChatRoomMapViewGetDecalObjectImage(obj: ChatRoomMapObject, image: DrawSource, decal: AssetName, color?: HexColor): DrawSource;
/**
 * Creates the decal rows of the object window: a list of every decal of {@link AssetGetDecals}, so new decals show up without any change here,
 * and the decal's color with a Reset, shown once a decal is chosen
 * @param {ChatRoomMapPos} pos
 * @param {ChatRoomMapObject} object
 * @returns {HTMLElement}
 */
declare function ChatRoomMapViewCreateDecalPicker(pos: ChatRoomMapPos, object: ChatRoomMapObject): HTMLElement;
