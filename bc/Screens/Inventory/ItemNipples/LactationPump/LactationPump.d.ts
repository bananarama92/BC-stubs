type LactationPumpPersistentData = {
    LastSuction?: number;
    SuctionDuration?: number;
} & AnimationPersistentData;
/** Minimum time (in ms) the pump waits between its messages. Max is two times that. */
declare const LactationPumpDuration: number;
declare function LactationPumpGetRandomDuration(): number;
