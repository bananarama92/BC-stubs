/**
 *
 * @param {restraint} restraint
 * @param {string} newRestraintName
 * @param {KinkyDungeonEvent[]} ev
 * @param {number} power
 * @param {string} lock
 * @param {Record<string, number>} enemyTags
 * @returns {any}
 */
declare function KDAddEventVariant(restraint: restraint, newRestraintName: string, ev: KinkyDungeonEvent[], power?: number, lock?: string, enemyTags?: Record<string, number>): any;
declare function KinkyDungeonCurseInfo(item: any, Curse: any): void;
declare function KinkyDungeonCurseStruggle(item: any, Curse: any): void;
declare function KinkyDungeonCurseAvailable(item: any, Curse: any): boolean;
/**
 *
 * @param {string} group
 * @param {number} index
 * @param {string} Curse
 */
declare function KinkyDungeonCurseUnlock(group: string, index: number, Curse: string): void;
/**
 * onApply: occurs when applied
 * condition: required to remove it
 * remove: happens when removing
 * events: these events are added to the restraint
 * @type {Record<string, KDCursedDef>} */
declare let KDCurses: Record<string, KDCursedDef>;
/**
 * TODO
curseInfoAnimation,"Curse of Animation: Causes loose restraints to animate and attack you!"
curseInfoSensitivity,"Curse of Sensitivity: Makes it easier to lose control of yourself."
 */
/** Cursed variants of restraints
 * @type {Record<string, KDCursedVar>}
 */
declare let KDCursedVars: Record<string, KDCursedVar>;
declare namespace KDCurseVariantList {
    const Basic: string[];
}
declare namespace KDCurseUnlockList {
    const Basic_1: string[];
    export { Basic_1 as Basic };
}
