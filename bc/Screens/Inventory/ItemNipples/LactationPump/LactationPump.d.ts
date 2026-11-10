type LactationPumpPersistentData = {
    LastSuction?: number;
    SuctionDuration?: number;
} & AnimationPersistentData;
/** @typedef {{ LastSuction?: number, SuctionDuration?: number } & AnimationPersistentData} LactationPumpPersistentData */
/** @type {ExtendedItemCallbacks.BeforeDraw<LactationPumpPersistentData>} */
declare function AssetsItemNipplesLactationPumpBeforeDraw(data: DynamicDrawingData<LactationPumpPersistentData>): DynamicBeforeDrawOverrides | undefined;
/** Minimum time (in ms) the pump waits between its messages. Max is two times that. */
declare const LactationPumpDuration: number;
declare function LactationPumpGetRandomDuration(): number;
/** @type {ExtendedItemCallbacks.ScriptDraw<LactationPumpPersistentData>} */
declare function AssetsItemNipplesLactationPumpScriptDraw(data: DynamicScriptCallbackData<LactationPumpPersistentData>): void;
