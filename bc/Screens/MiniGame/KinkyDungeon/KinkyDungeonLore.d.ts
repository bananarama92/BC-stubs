declare function KinkyDungeonNewLore(): boolean;
declare function KinkyDungeonUpdateTabs(exploredLore: any): void;
declare function KinkyDungeonDrawLore(): void;
declare function KinkyDungeonUpdateLore(exploredLore: any): void;
declare function KinkyDungeonHandleLore(): boolean;
declare let KinkyDungeonCurrentLore: number;
/**
 * @type {any}
 */
declare let KinkyDungeonCurrentLoreTab: any;
/**
 * @type {any[]}
 */
declare let KinkyDungeonCurrentLoreTabs: any[];
declare let KinkyDungeonCurrentLoreItems: any[];
declare let KinkyDungeonCurrentLoreItemOffset: number;
declare let KinkyDungeonCurrentLoreTabOffset: number;
declare let KinkyDungeonLore: number[];
declare namespace KinkyDungeonCheckpointLore {
    const Combat: number[];
    const School: number[];
    const History: number[];
    const Enemy: number[];
    const grv: number[];
    const tmb: number[];
    const cat: number[];
    const lib: number[];
    const jng: number[];
    const cry: number[];
    const tmp: number[];
    const ore: number[];
    const bel: number[];
}
declare let KinkyDungeonLoreScale: number;
declare let KinkyDungeonRepeatLoreChance: number;
declare let KinkyDungeonGenericLoreChance: number;
declare let KinkyDungeonNewLoreList: any;
