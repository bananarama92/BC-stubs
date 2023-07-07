declare function KDCloseQuickInv(): void;
declare function KDSwitchWeapon(): void;
declare function KinkyDungeonHandleInventory(): boolean;
declare function KinkyDungeonInventoryAddWeapon(Name: any): void;
declare function KinkyDungeonInventoryAddLoose(Name: any, UnlockCurse: any): void;
declare function KinkyDungeonInventoryAddOutfit(Name: any): void;
/**
 *
 * @param item {item}
 * @return {string}
 */
declare function KDInventoryType(item: item): string;
declare function KinkyDungeonFullInventory(): any[];
declare function KinkyDungeonInventoryLength(): number;
/**
 *
 * @param item {item}
 */
declare function KinkyDungeonInventoryAdd(item: item): void;
/**
 *
 * @param item {item}
 */
declare function KinkyDungeonInventoryRemove(item: item): void;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGet(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetLoose(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetConsumable(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetWeapon(Name: any): null | item;
/**
 *
 * @param Name
 * @return {null|item}
 */
declare function KinkyDungeonInventoryGetOutfit(Name: any): null | item;
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllRestraint(): item[];
/**
 * Returns list of tuples of restraints, including dynamics and their hosts
 * @return {{item: item, host: item}[]}
 */
declare function KinkyDungeonAllRestraintDynamic(): {
    item: item;
    host: item;
}[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllLooseRestraint(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllConsumable(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllOutfit(): item[];
/**
 * Returns list
 * @return {item[]}
 */
declare function KinkyDungeonAllWeapon(): item[];
/**
 *
 * @param {item} item
 * @returns {{name: any; item: any; preview: string;}}
 */
declare function KDGetItemPreview(item: item): {
    name: any;
    item: any;
    preview: string;
};
/**
 *
 * @param {string} Filter
 * @param {boolean} [enchanted]
 * @param {boolean} [ignoreHidden]
 * @param {boolean} [ignoreFilters]
 * @returns {{name: any; item: any; preview: string;}[]}
 */
declare function KinkyDungeonFilterInventory(Filter: string, enchanted?: boolean, ignoreHidden?: boolean, ignoreFilters?: boolean): {
    name: any;
    item: any;
    preview: string;
}[];
/**
 *
 * @param {{name: any, item: item, preview: string}} item
 * @param {boolean} [noscroll]
 * @param {boolean} [treatAsHover]
 * @param {number} xOffset
 * @returns {boolean}
 */
declare function KinkyDungeonDrawInventorySelected(item: {
    name: any;
    item: item;
    preview: string;
}, noscroll?: boolean, treatAsHover?: boolean, xOffset?: number): boolean;
declare function KinkyDungeonDrawInventory(): void;
declare function KinkyDungeonSendInventoryEvent(Event: any, data: any): void;
declare function KinkyDungeonQuickGrid(I: any, Width: any, Height: any, Xcount: any): {
    x: number;
    y: number;
};
declare function KinkyDungeonDrawQuickInv(): void;
declare function KinkyDungeonhandleQuickInv(NoUse: any): boolean;
/**
 *
 * @param {string} name
 * @param {entity} [player]
 * @param {boolean} playerDropped
 */
declare function KDDropItemInv(name: string, player?: entity, playerDropped?: boolean): void;
/**
 *
 * @param {entity} player
 */
declare function KDSortInventory(player: entity): void;
declare let KinkyDungeonFilters: string[];
/**
 * @type {Record<string, boolean>}
 */
declare let KDInventoryUseIconConfig: Record<string, boolean>;
/** List of current filters for each filter type */
/**
 * @type {Record<string, Record<string, boolean>>}
 */
declare let KDFilterFilters: Record<string, Record<string, boolean>>;
declare let KinkyDungeonCurrentFilter: string;
declare let KinkyDungeonCurrentPageInventory: number;
declare let KinkyDungeonShowInventory: boolean;
declare let KinkyDungeonInventoryOffset: number;
declare let KinkyDungeonInvDraw: any[];
declare namespace KDScrollOffset {
    const Consumable: number;
    const Restraint: number;
    const Weapon: number;
}
declare namespace KDItemsPerScreen {
    const Consumable_1: number;
    export { Consumable_1 as Consumable };
    const Restraint_1: number;
    export { Restraint_1 as Restraint };
    const Weapon_1: number;
    export { Weapon_1 as Weapon };
}
declare let KDScrollAmount: number;
declare namespace KDInventoryStatus {
    const HideQuickInv: boolean;
    const DropQuickInv: boolean;
    const SortQuickInv: boolean;
    const FilterQuickInv: boolean;
}
