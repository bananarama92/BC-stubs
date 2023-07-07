declare namespace KDCommandWord {
    const name: string;
    const tags: string[];
    const sfx: string;
    const school: string;
    const manacost: number;
    const components: string[];
    const level: number;
    const type: string;
    const special: string;
    const noMiscast: boolean;
    const onhit: string;
    const time: number;
    const power: number;
    const range: number;
    const size: number;
    const damage: string;
}
/**
 * These are starting spells
 */
declare let KinkyDungeonSpellsStart: any[];
declare let filters: string[];
/** Extra filters, indexed according to the learnable spells menu */
declare let filtersExtra: string[][];
declare let KDColumnLabels: string[][];
declare let KinkyDungeonSpellPages: string[];
/**
 * These spells occur in the menu and the player can learn them
 * Spells with NoBuy cannot be bought, but can be looked at.
 * Spells with NoMenu do not appear in the menu until the player has them
 */
declare let KinkyDungeonLearnableSpells: string[][][];
/**
 * Spells that the player can choose
 * @type {Record<string, spell[]>}
 */
declare let KinkyDungeonSpellList: Record<string, spell[]>;
/**
 * Spells that are not in the base spell lists
 * @type {spell[]}
 */
declare let KinkyDungeonSpellListEnemies: spell[];
/** @type {Record<string, KDBondage>} */
declare let KDSpecialBondage: Record<string, KDBondage>;
declare namespace KDMagicDefs {
    const RopeKraken_TentacleCost: number;
    const RopeKraken_TentacleThreshold: number;
    const RopeKraken_TentacleCountMin: number;
    const RopeKraken_TentacleCountShare: number;
    const SarcoKraken_TentacleCost: number;
    const SarcoKraken_TentacleThreshold: number;
    const SarcoKraken_TentacleCountMin: number;
    const SarcoKraken_TentacleCountMax: number;
    const SarcoKraken_TentacleCountShare: number;
    const SlimeKraken_TentacleCost: number;
    const SlimeKraken_TentacleThreshold: number;
    const SlimeKraken_TentacleCountMin: number;
    const SlimeKraken_TentacleCountShare: number;
}
/** @type {Record<string, (enemy: entity, target: entity, spell?: spell) => boolean>} */
declare let KDCastConditions: Record<string, (enemy: entity, target: entity, spell?: spell) => boolean>;
