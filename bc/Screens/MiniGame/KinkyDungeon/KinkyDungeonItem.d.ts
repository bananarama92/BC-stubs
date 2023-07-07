declare function KinkyDungeonItemDrop(x: any, y: any, dropTable: any, summoned: any): false | {
    x: any;
    y: any;
    name: any;
    amount: any;
};
declare function KinkyDungeonDropItem(Item: any, Origin: any, AllowOrigin: any, noMsg: any, allowEnemies: any): boolean;
declare function KinkyDungeonItemEvent(Item: any): boolean;
declare function KinkyDungeonItemCheck(x: any, y: any, Index: any): void;
declare function KDCanSeeDroppedItem(item: any): boolean;
declare function KinkyDungeonDrawItems(canvasOffsetX: any, canvasOffsetY: any, CamX: any, CamY: any): void;
declare function KinkyDungeonDrawHeart(): void;
declare function KinkyDungeonHandleHeart(): boolean;
/**
 *
 * @param {any[]} items
 * @param {number} offset
 * @returns {number}
 */
declare function KDDrawItemsTooltip(items: any[], offset: number): number;
declare let KinkyDungeonGroundItems: any[];
/** Certain items, when dropped, have specific properties
 * @type {Record<string, KDDroppedItemProp>}
*/
declare let KDDroppedItemProperties: Record<string, KDDroppedItemProp>;
declare namespace KDCustomItems {
    function LeylineMap(): {
        sfx: any;
        replace: any;
        priority: any;
        color: any;
    };
}
