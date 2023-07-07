/**
 *
 * @param {enemy} Enemy
 * @param {entity} e
 * @param {number} chanceBoost
 */
declare function KDProcessCustomPatron(Enemy: enemy, e: entity, chanceBoost: number): void;
declare let KinkyDungeonBones: {};
declare let KDPatronAdventurers: any[];
declare let KDPatronCustomEnemies: Map<string, {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customSprite: string;
}[]>;
