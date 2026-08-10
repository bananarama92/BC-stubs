type SteampunkWingsPersistentData = {
    State?: number;
    StateGears?: number;
    Modifier?: number;
    ModifierGears?: number;
    ChangeTime?: number;
    FrameTime?: number;
    DrawRequested?: boolean;
} & AnimationPersistentData;
