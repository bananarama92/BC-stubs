declare function InventoryItemNeckPetSuitShockCollarResetCount(): void;
type PetSuitShockCollarPersistentData = {
    UpdateTime?: number;
    CheckTime?: number;
    LastMessageLen?: number;
    LastTriggerCount?: number;
    DisplayCount?: number;
} & AnimationPersistentData;
/**
 * @param {Item} Item
 * @param {Character} C
 */
declare function InventoryPetSuitShockCollarCheckPunish(Item: Item, C: Character): "" | "Activity" | "StandUp" | "Struggle";
/**
 * @param {DynamicScriptCallbackData<FuturisticChastityBeltPersistentData>} data
 * @param {number} LastTime
 */
declare function AssetsItemNeckPetSuitShockCollarUpdate(data: DynamicScriptCallbackData<FuturisticChastityBeltPersistentData>, LastTime: number): void;
