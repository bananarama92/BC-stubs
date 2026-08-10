type KennelPersistentData = {
    DoorState?: number;
    DrawRequested?: boolean;
    MustChange?: boolean;
    ChangeTime?: number;
} & AnimationPersistentData;
/**
 * @param {Character} C
 * @returns {string}
 */
declare function InventoryItemDevicesKennelGetAudio(C: Character): string;
