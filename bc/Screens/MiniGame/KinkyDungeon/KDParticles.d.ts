/**
 *
 * @param {number} x
 * @param {number} y
 * @param {string} img
 * @param {string} type
 * @param {KDParticleData} data
 */
declare function KDAddParticle(x: number, y: number, img: string, type: string, data: KDParticleData): void;
declare function KDUpdateParticles(delta: any): void;
declare function KDRemoveParticle(id: any): void;
/**
 * Draws arousal heart particles
 * @param {number} pinkChance - 0 to 1
 * @param {number} density - 0 to 1
 * @param {number} purpleChance - 0 to 1
 */
declare function KDDrawArousalParticles(pinkChance: number, density: number, purpleChance: number): void;
declare function KDDrawVibeParticles(density: any): void;
/**
 *
 */
declare function KDCreateVibeParticle(): void;
/**
 *
 * @param {number} pinkChance - 0 to 1
 * @param {number} purpleChance - 0 to 1
 */
declare function KDCreateArousalParticle(pinkChance: number, purpleChance: number): void;
/** @type {Map<Number, {info: any, sprite: any}>} */
declare let KDParticles: Map<number, {
    info: any;
    sprite: any;
}>;
declare let KDParticleid: number;
declare let lastArousalParticle: number;
declare let lastVibeParticle: number;
