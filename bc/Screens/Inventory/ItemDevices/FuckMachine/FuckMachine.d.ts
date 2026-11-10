type FuckMachinePersistentData = {
    DildoState?: number;
    Modifier?: number;
    Speed?: number;
    FuckChangeTime?: number;
    Mode?: VibratorMode;
    ChangeTime?: number;
    LastChange?: number;
} & AnimationPersistentData;
/**
 * @typedef {{ DildoState?: number, Modifier?: number, Speed?: number, FuckChangeTime?: number, Mode?: VibratorMode, ChangeTime?: number, LastChange?: number } & AnimationPersistentData} FuckMachinePersistentData
 */
/** @type {ExtendedItemScriptHookCallbacks.BeforeDraw<VibratingItemData, FuckMachinePersistentData>} */
declare function AssetsItemDevicesFuckMachineBeforeDrawHook(data: VibratingItemData, originalFunction: ((drawData: DynamicDrawingData<FuckMachinePersistentData>) => DynamicBeforeDrawOverrides) | null, drawData: DynamicDrawingData<FuckMachinePersistentData>): DynamicBeforeDrawOverrides;
/** @type {ExtendedItemScriptHookCallbacks.ScriptDraw<VibratingItemData, FuckMachinePersistentData>} */
declare function AssetsItemDevicesFuckMachineScriptDrawHook(data: VibratingItemData, originalFunction: ((drawData: DynamicScriptCallbackData<FuckMachinePersistentData>) => void) | null, drawData: DynamicScriptCallbackData<FuckMachinePersistentData>): void;
