/**
 * @param {Character} C
 * @returns {{bpm: number, breathing: "Low" | "Med" | "High" | "Action", temp: number}}
 */
declare function InventoryItemBreastFuturisticBraUpdate(C: Character): {
    bpm: number;
    breathing: "Low" | "Med" | "High" | "Action";
    temp: number;
};
type FuturisticBraPersistentData = {
    UpdateTime?: number;
    ShowHeart?: boolean;
} & AnimationPersistentData;
