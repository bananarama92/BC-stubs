declare function KinkyDungeonBossFloor(Floor: any): {
    boss: string;
    bossroom: boolean;
    width: number;
    height: number;
    setpieces: {
        GuaranteedCell: number;
        FuukaAltar: number;
    };
    genType: string;
    spawns: boolean;
    chests: boolean;
    shrines: boolean;
    chargers: boolean;
    torches: boolean;
    heart: boolean;
    specialtiles: boolean;
    shortcut: boolean;
    enemies: boolean;
    nokeys: boolean;
    nojail: boolean;
} | {
    boss: string;
    bossroom: boolean;
    jailType: string;
    guardType: string;
    width: number;
    height: number;
    setpieces: {};
    genType: string;
    spawns: boolean;
    chests: boolean;
    shrines: boolean;
    noWear: boolean;
    chargers: boolean;
    notorches: boolean;
    heart: boolean;
    specialtiles: boolean;
    shortcut: boolean;
    enemies: boolean;
    nokeys: boolean;
    nojail: boolean;
    noClutter: boolean;
    nostairs: boolean;
    nostartstairs: boolean;
    nobrick: boolean;
    nolore: boolean;
    skin: string;
    noboring: boolean;
};
declare namespace bosses {
    namespace Fuuka {
        const boss: string;
        const bossroom: boolean;
        const width: number;
        const height: number;
        namespace setpieces {
            const GuaranteedCell: number;
            const FuukaAltar: number;
        }
        const genType: string;
        const spawns: boolean;
        const chests: boolean;
        const shrines: boolean;
        const chargers: boolean;
        const torches: boolean;
        const heart: boolean;
        const specialtiles: boolean;
        const shortcut: boolean;
        const enemies: boolean;
        const nokeys: boolean;
        const nojail: boolean;
    }
    namespace Dollmaker {
        const boss_1: string;
        export { boss_1 as boss };
        const bossroom_1: boolean;
        export { bossroom_1 as bossroom };
        export const jailType: string;
        export const guardType: string;
        const width_1: number;
        export { width_1 as width };
        const height_1: number;
        export { height_1 as height };
        const setpieces_1: {};
        export { setpieces_1 as setpieces };
        const genType_1: string;
        export { genType_1 as genType };
        const spawns_1: boolean;
        export { spawns_1 as spawns };
        const chests_1: boolean;
        export { chests_1 as chests };
        const shrines_1: boolean;
        export { shrines_1 as shrines };
        export const noWear: boolean;
        const chargers_1: boolean;
        export { chargers_1 as chargers };
        export const notorches: boolean;
        const heart_1: boolean;
        export { heart_1 as heart };
        const specialtiles_1: boolean;
        export { specialtiles_1 as specialtiles };
        const shortcut_1: boolean;
        export { shortcut_1 as shortcut };
        const enemies_1: boolean;
        export { enemies_1 as enemies };
        const nokeys_1: boolean;
        export { nokeys_1 as nokeys };
        const nojail_1: boolean;
        export { nojail_1 as nojail };
        export const noClutter: boolean;
        export const nostairs: boolean;
        export const nostartstairs: boolean;
        export const nobrick: boolean;
        export const nolore: boolean;
        export const skin: string;
        export const noboring: boolean;
    }
}
