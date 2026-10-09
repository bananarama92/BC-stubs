/**
 * Creates an function that loops through images
 * @param {string} baseName - Source
 * @param {number} frames
 * @param {number} duration - in ms
 * @param {boolean} reverse - TRUE for reverse, totalFramesCount to 1
 * @returns {ChatRoomMapObject["BuildImageName"]}
 */
declare function ChatRoomMapViewCreateAnimation(baseName: string, frames: number, duration?: number, reverse?: boolean): ChatRoomMapObject["BuildImageName"];
/**
 * To prevent repeating the same logic, we create a function that returns a function
 * @param {ChatRoomMapDirection} direction
 * @param {number} speed - how fast to trigger, in ms
 * @returns {ChatRoomMapObject["OnEnter"]}
 */
declare function ChatRoomMapViewCreateOnEnterConveyorLogic(direction: ChatRoomMapDirection, speed: number): ChatRoomMapObject["OnEnter"];
/**
 * To prevent repeating the same logic, we create a function that returns a function
 * @param {string} name - Sign Name
 * @returns {ChatRoomMapObject["OnClick"]}
 */
declare function ChatRoomMapViewCreateOnClickSignLogic(name: string): ChatRoomMapObject["OnClick"];
/**
 * A list of predefined lighting effects. May be replaced with a color picker in the future.
 * @type {ChatRoomMapEffect[]}
 * */
declare const AssetsMapDataEffects: ChatRoomMapEffect[];
/** @type {ChatRoomMapTile[]} */
declare const AssetsMapDataTiles: ChatRoomMapTile[];
/** @type {ChatRoomMapObject[]} */
declare const AssetsMapDataObjects: ChatRoomMapObject[];
