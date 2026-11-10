/** Map the names of the love chastity belt front + black shield options to its scifi pleasure panties equivalent. */
declare const InventoryItemPelvisLoveChastityBeltCrotchShield: Map<string, string>;
/** @type {ExtendedItemScriptHookCallbacks.Draw<ModularItemData>} */
declare function InventoryItemPelvisLoveChastityBeltDrawHook(Data: ModularItemData, OriginalFunction: () => void): void;
/** @type {ExtendedItemScriptHookCallbacks.SetOption<ModularItemData, ModularItemOption>} */
declare function InventoryItemPelvisLoveChastityBeltSetOptionHook(data: ModularItemData, originalFunction: ((C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean) => void) | null, C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, push: boolean, refresh: boolean): void;
/** @type {ExtendedItemScriptHookCallbacks.Validate<ModularItemData, ModularItemOption>} */
declare function InventoryItemPelvisLoveChastityBeltValidateHook(Data: ModularItemData, OriginalFunction: ((C: Character, item: Item, newOption: ModularItemOption, previousOption: ModularItemOption, permitExisting?: boolean | undefined) => string | undefined) | null, C: Character, Item: Item, Option: ModularItemOption, CurrentOption: ModularItemOption): string | undefined;
