/**
 *
 * @param {any} spell
 * @param {number} count
 * @param {string[]} tags
 * @param {string} faction
 * @param {boolean} [noDeep]
 * @param {boolean} [bypass] - Bypass inaccessible things
 * @returns {restraint[]}
 */
declare function KDPlayerEffectRestrain(spell: any, count: number, tags: string[], faction: string, noDeep?: boolean, bypass?: boolean, allowEvade?: boolean, allowBlock?: boolean, allowBondageResist?: boolean): restraint[];
declare function KDTestSpellHits(spell: any, allowEvade?: number, allowBlock?: number): boolean;
declare function KinkyDungeonPlayerEffect(target: any, damage: any, playerEffect: any, spell: any, faction: any, bullet: any): boolean;
/**
 * For those 'three strikes you're out' effects
 * @param {string} Name
 * @param {entity} Target
 * @param {number} time - Time for the buff to wear off
 * @param {(target: entity) => void} FinalEffect
 * @param {string} buffType - Buff effect
 */
declare function KDTripleBuffKill(Name: string, Target: entity, time: number, FinalEffect?: (target: entity) => void, buffType?: string): void;
/**
 *
 * @param {boolean} resetSlimeLevel
 * @param {string} restraint
 */
declare function KDAdvanceSlime(resetSlimeLevel: boolean, restraint?: string): boolean;
/**
 * @type {Record<string, (target, damage, playerEffect, spell, faction, bullet) => {sfx: string, effect: boolean}>}
 */
declare let KDPlayerEffects: Record<string, (target: any, damage: any, playerEffect: any, spell: any, faction: any, bullet: any) => {
    sfx: string;
    effect: boolean;
}>;
