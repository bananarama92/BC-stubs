declare function AssetsWingsSteampunkWingsBeforeDraw(data: DynamicDrawingData): DynamicBeforeDrawOverrides;
declare function AssetsWingsSteampunkWingsScriptDraw(data: {
    C: Character;
    Item: Item;
    PersistentData: <T>() => T;
}): void;
