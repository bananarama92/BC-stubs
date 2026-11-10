type KennelPersistentData = {
    DoorState?: number;
    DrawRequested?: boolean;
    MustChange?: boolean;
    ChangeTime?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ DoorState?: number, DrawRequested?: boolean, MustChange?: boolean, ChangeTime?: number } & AnimationPersistentData} KennelPersistentData
 */
/** @type {ExtendedItemCallbacks.BeforeDraw<KennelPersistentData>} */
declare function AssetsItemDevicesKennelBeforeDraw(drawData: DynamicDrawingData<KennelPersistentData>): DynamicBeforeDrawOverrides | undefined;
/** @type {ExtendedItemCallbacks.ScriptDraw<KennelPersistentData>} */
declare function AssetsItemDevicesKennelScriptDraw({ C, PersistentData, Item }: DynamicScriptCallbackData<KennelPersistentData>): void;
/**
 * @param {Character} C
 * @returns {AudioEffectName}
 */
declare function InventoryItemDevicesKennelGetAudio(C: Character): AudioEffectName;
