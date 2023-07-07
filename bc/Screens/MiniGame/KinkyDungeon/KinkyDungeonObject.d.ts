declare function KinkyDungeonDrawDoor(): void;
/** Chest lock */
declare function KinkyDungeonDrawLock(): void;
declare function KinkyDungeonDrawGhost(): void;
declare function KinkyDungeonDrawAngel(): void;
declare function KinkyDungeonGhostMessage(): void;
declare function KinkyDungeonAngelMessage(): void;
declare function KinkyDungeonFoodMessage(Tile: any): void;
declare function KinkyDungeonMakeGhostDecision(): void;
declare function KinkyDungeonDrawCharger(): void;
declare function KinkyDungeonDrawTablet(): void;
declare function KinkyDungeonDrawFood(): void;
declare function KinkyDungeonHandleCharger(): boolean;
/**
 * Script happens when you display an object message
 * @type {Record<string,() => void>}
 */
declare let KDObjectMessages: Record<string, () => void>;
/**
 * Script happens when you move to an object
 * MUTUALLY exclusive with KDObjectDraw, as this
 * overrides the default behavior of clicking on the object and bringing up a modal
 * @type {Record<string,(x: number, y: number) => void>}
 */
declare let KDObjectClick: Record<string, (x: number, y: number) => void>;
/**
 * Script to handle click in an object's modal
 * tbh should remove this soon
 * @type {Record<string,() => boolean>}
 */
declare let KDObjectHandle: Record<string, () => boolean>;
/**
 * Determines if an object has an interface and also if it pauses the game when you click on it
 * You dont need an interface (for example the updated food table) but then you need
 * an entry in KDObjectClick instead.
 * @type {Record<string,() => void>}
 */
declare let KDObjectDraw: Record<string, () => void>;
declare let KDChargerLight: number;
declare let KDChargerColor: number;
declare let KDLeylineLightColor: number;
declare let KDLeylineLight: number;
