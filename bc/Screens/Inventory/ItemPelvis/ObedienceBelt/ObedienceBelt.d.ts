/**
 * @param {Item} Item
 * @param {Character} C
 */
declare function InventoryObedienceBeltCheckPunish(Item: Item, C: Character): "" | "Orgasm" | "StandUp" | "Struggle";
/**
 * @param {DynamicScriptCallbackData<ObedienceBeltPersistentData>} data
 * @param {number} LastTime
 */
declare function AssetsItemPelvisObedienceBeltUpdate(data: DynamicScriptCallbackData<ObedienceBeltPersistentData>, LastTime: number): void;
type ObedienceBeltPersistentData = {
    UpdateTime?: number;
    LastMessageLen?: number;
    CheckTime?: number;
} & AnimationPersistentData;
