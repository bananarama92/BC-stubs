declare function AssetsItemDevicesKennelBeforeDraw(drawData: DynamicDrawingData<KennelPersistentData>): DynamicBeforeDrawOverrides | undefined;
declare function AssetsItemDevicesKennelScriptDraw(drawData: DynamicScriptCallbackData<KennelPersistentData>): void;
/**
 * @param {Character} C
 * @returns {AudioEffectName}
 */
declare function InventoryItemDevicesKennelGetAudio(C: Character): AudioEffectName;
type KennelPersistentData = {
    DoorState?: number;
    DrawRequested?: boolean;
    MustChange?: boolean;
    ChangeTime?: number;
} & AnimationPersistentData;
