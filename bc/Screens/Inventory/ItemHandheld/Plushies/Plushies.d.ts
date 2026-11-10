/** The module storing where the plushie is (in hands, on head or on the floor) */
declare const InventoryItemHandheldPlushiesPositionModule = "Position";
/** The first menu page, leading to the position or to the plushie groups ({@link ModularItemBase}) */
declare const InventoryItemHandheldPlushiesMenu = "Menu";
/** The buttons of the first menu page, and the page each one leads to */
declare const InventoryItemHandheldPlushiesMenuButtons: {
    page: string;
    position: RectTuple;
}[];
/**
 * Gets the modules holding the plushies, which are all of them but the position
 * @param {ModularItemData} data
 * @returns {ModularItemModule[]}
 */
declare function InventoryItemHandheldPlushiesGetGroups(data: ModularItemData): ModularItemModule[];
/**
 * Gets the draw data of the plushie groups page, laid out as if the groups were the only modules
 * @param {ModularItemData} data
 * @returns {ExtendedItemDrawData<ElementMetaData.Modular>}
 */
declare function InventoryItemHandheldPlushiesGetGroupsDrawData(data: ModularItemData): ExtendedItemDrawData<ElementMetaData.Modular>;
/** @type {ExtendedItemScriptHookCallbacks.Load<ModularItemData>} */
declare function InventoryItemHandheldPlushiesLoadHook(data: ModularItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemHandheldPlushiesDrawHook(data: ModularItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.Click<ModularItemData>} */
declare function InventoryItemHandheldPlushiesClickHook(data: ModularItemData, originalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.SetOption<ModularItemData, ModularItemOption>} */
declare function InventoryItemHandheldPlushiesSetOptionHook(data: ModularItemData, originalFunction: ((C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean) => void) | null, C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean): void;
