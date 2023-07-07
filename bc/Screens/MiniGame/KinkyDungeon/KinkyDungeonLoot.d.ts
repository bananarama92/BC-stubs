/**
 * @param {item[]} list
 * @param {boolean} excludeBound - bound weapons, i.e. magic knives and weapons
 */
declare function KinkyDungeonAddLostItems(list: item[], excludeBound: boolean): void;
declare function KinkyDungeonLoot(Level: any, Index: any, Type: any, roll: any, tile: any, returnOnly: any, noTrap: any): any;
declare function KinkyDungeonGetUnlearnedSpells(minlevel: any, maxlevel: any, SpellList: any): any[];
declare function KinkyDungeonLootEvent(Loot: any, Floor: any, Replacemsg: any, Lock: any): any;
declare function KinkyDungeonAddGold(value: any): void;
declare function KDSpawnLootTrap(x: any, y: any, trap: any, mult: any, duration: any): void;
declare function KDGenChestTrap(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): any;
declare function KDTriggerLoot(Loot: any, Type: any): void;
/**
 *
 * @param {Record<string, object>} WeightList - contains values that have a weight param
 */
declare function KDGetWeightedString(WeightList: Record<string, object>, params: any): string;
/** @type {item[]} */
declare let KinkyDungeonLostItems: item[];
declare let KDTightRestraintsMod: number;
declare let KDTightRestraintsMult: number;
declare let cursedRestraintCache: {};
declare let KinkyDungeonSpecialLoot: boolean;
declare let KinkyDungeonLockedLoot: boolean;
declare namespace KDChestTrapWeights {
    namespace metalTrap {
        function weight(): number;
        const mult: number;
    }
    namespace leatherTrap {
        export function weight_1(): number;
        export { weight_1 as weight };
        const mult_1: number;
        export { mult_1 as mult };
    }
    namespace latexTrap {
        export function weight_2(): number;
        export { weight_2 as weight };
        const mult_2: number;
        export { mult_2 as mult };
    }
    namespace ropeTrap {
        export function weight_3(): number;
        export { weight_3 as weight };
        const mult_3: number;
        export { mult_3 as mult };
    }
    namespace illusionTrap {
        export function weight_4(): number;
        export { weight_4 as weight };
        const mult_4: number;
        export { mult_4 as mult };
    }
}
declare namespace KDTrapChestType {
    function _default(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): {
        trap: string;
        mult: any;
    };
    export { _default as default };
    export function shadow(guaranteed: any, x: any, y: any, chestType: any, lock: any, noTrap: any): {
        trap: string;
        mult: number;
        duration: number;
    };
}
