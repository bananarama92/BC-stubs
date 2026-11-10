/**
 * Detects specific voice commands from a chat message.
 *
 * This is shared by most voice-detection items that pass in their configured trigger values,
 * and gives back the matching indexes of those.
 *
 * @param {string} msg
 * @param {readonly string[]} TriggerValues
 * @returns {number[]}
 */
declare function ItemModuleVoiceCommandDetect(msg: string, TriggerValues: readonly string[]): number[];
/**
 * Handles the generic processing of voice commands.
 *
 * This is used by most voice detection items to get back a list of triggers
 * from the last time the chat log was processed.
 *
 * @param {Character} C
 * @param {Item} item
 * @param {number} LastTime
 * @param {readonly VoiceTriggerType[]} VoiceTriggers
 * @param {readonly string[]} TriggerValues
 * @returns {VoiceTriggerType[]}
 */
declare function ItemModuleVoiceCommandHandle(C: Character, item: Item, LastTime: number, VoiceTriggers: readonly VoiceTriggerType[], TriggerValues: readonly string[]): VoiceTriggerType[];
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} shockCooldown
 * @param {AssetGroupItemName[]} tamperZones
 */
declare function ItemModulePunishCheck(C: Character, item: Item, shockCooldown: number, tamperZones: AssetGroupItemName[]): "Orgasm" | "StandUp" | "Struggle" | "StruggleOther" | null;
/**
 * Namespace for constructing {@link Item} objects.
 */
declare var AppearanceItem: {
    /**
     * Construct an item from the passed asset
     * @param {Asset} asset The asset in question
     * @param {null | Item.Options} options Further options
     * @returns {Item} The new item
     */
    fromAsset(asset: Asset, options?: null | Item.Options): Item;
    /**
     * Construct an item from the passed group- and asset names
     * @param {AssetGroupName} groupName The asset's group name
     * @param {AssetName} assetName The asset's name
     * @param {null | Item.Options} options Further options
     * @returns {null | Item} The new item or `null` if no matching asset can be found
     */
    fromName(groupName: AssetGroupName, assetName: AssetName, options?: null | Item.Options): null | Item;
};
/**
 * Dummy character for {@link ItemPropertiesDecompress} validation
 * @type {null | Character}
 */
declare let ItemPropertiesDummy: null | Character;
/**
 * Copy and extract all {@link ItemBundle.Property} keys from the passed item, returning them in addition to all extended item options associated with the item's current state
 * @param {Item} item The item whose properties are to be extracted
 * @param {object} [options]
 * @param {Iterable<keyof ItemProperties>} [options.omit] Properties that should always be omitted
 * @param {boolean} [options.allowLocks] Whether to return lock-specific options and properties if present
 * @returns {{ properties: Set<keyof ItemProperties>, extendedOptions: ExtendedItemOptionUnion[] }} The filtered item property names and the matching extended item options
 */
declare function ItemPropertiesGetBundleProperties(item: Item, options?: {
    omit?: Iterable<keyof ItemProperties>;
    allowLocks?: boolean;
}): {
    properties: Set<keyof ItemProperties>;
    extendedOptions: ExtendedItemOptionUnion[];
};
/**
 * Compress the passed item's properties in preparation for {@link ItemBundle} creation.
 * @param {Item} item The item whose properties are to be minimized
 * @param {object} [options]
 * @param {Iterable<keyof ItemProperties>} [options.omit] Properties that should always be omitted
 * @param {boolean} [options.allowLocks] Whether to return lock-specific options and properties if present
 * @returns {ItemPropertiesMinimized | undefined} The minimized item properties
 */
declare function ItemPropertiesCompress(item: Item, options?: {
    omit?: Iterable<keyof ItemProperties>;
    allowLocks?: boolean;
}): ItemPropertiesMinimized | undefined;
/**
 * Merge the passed item properties into a single property set.
 *
 * By default, properties follow a "first non-nullish entry wins" approach if no property-specific merge function is available.
 * @param {readonly ItemProperties[]} propertyList The list of to-be merged property objects
 * @param {Asset} asset The asset
 * @param {ItemProperties} [output] The object in which the merged properties will be stored and returned
 * @returns {ItemProperties}
 */
declare function ItemPropertiesUnion(propertyList: readonly ItemProperties[], asset: Asset, output?: ItemProperties): ItemProperties;
/**
 * Subtract the passed item properties from each other into a single property set.
 * @param {readonly ItemProperties[]} propertyList The list of to-be differenced property objects
 * @param {Asset} asset The asset
 * @param {ItemProperties} [output] The object in which the differenced properties will be stored and returned
 * @returns {ItemProperties}
 */
declare function ItemPropertiesDifference(propertyList: readonly ItemProperties[], asset: Asset, output?: ItemProperties): ItemProperties;
/** @satisfies {Record<ItemProperty.ValidationStatus, number>} */
declare const ItemPropertiesValidationStatus: {
    readonly ok: 0;
    readonly error: 1;
    readonly criticalError: 2;
};
/**
 * @param {ItemProperties} properties
 * @param {Asset} asset The asset
 * @param {object} [options]
 * @param {Character} [options.C] The character wearing/intended to wear the item
 * @param {readonly (keyof ItemProperties)[]} [options.ignoreErrors] Exclude specific property outputs from affecting the final error status
 * @returns {ItemProperty.ValidationMultiOutput}
 */
declare function ItemPropertiesValidate(properties: ItemProperties, asset: Asset, options?: {
    C?: Character;
    ignoreErrors?: readonly (keyof ItemProperties)[];
}): ItemProperty.ValidationMultiOutput;
declare function ItemPropertiesMergeValidationOutputs<T1 extends {
    [key: string]: unknown;
}>(outputs: { readonly [k in keyof T1]?: ItemProperty.ValidationOutput<T1[k]>; }): ItemProperty.ValidationOutput<T1>;
declare function ItemPropertiesMergeValidationOutputs<T2>(outputs: readonly ItemProperty.ValidationOutput<T2>[]): ItemProperty.ValidationOutput<T2[]>;
/**
 * Check whether all properties between the passed objects are equivalent
 * @param {ItemProperties} properties1 The first property set
 * @param {ItemProperties} properties2 The second property set
 * @param {Asset} asset The asset
 * @param {object} [options]
 * @param {boolean} [options.gatherNonEquivalancies] Whether to gather and return the names of all non-equivalent properties.
 * The returned set will contain up to 1 entry otherwise. Defaults to `false`.
 * @param {boolean} [options.eqOrSubset] Whether to check whether the properties are either equivalent or form a (deep)
 * subset of each other (see {@link ItemPropertiesIsSubset}). Defaults to `false`.
 * @returns {{ result: boolean, nonEquivalencies: Set<keyof ItemProperties> }}
 */
declare function ItemPropertiesCompare(properties1: ItemProperties, properties2: ItemProperties, asset: Asset, options?: {
    gatherNonEquivalancies?: boolean;
    eqOrSubset?: boolean;
}): {
    result: boolean;
    nonEquivalencies: Set<keyof ItemProperties>;
};
/**
 * Check whether all properties between the passed objects are either equivalent or form a subset of each other (_i.e._ a non-proper subset)
 * @param {ItemProperties} subProperties The (potential) property subset
 * @param {ItemProperties} superProperties The (potential) property superset
 * @param {Asset} asset The asset
 * @param {object} [options]
 * @param {boolean} [options.gatherNonEquivalancies] Whether to gather and return the names of all non-equivalent properties.
 * The returned set will contain up to 1 entry otherwise. Defaults to `false`.
 * @returns {{ result: boolean, nonEquivalencies: Set<keyof ItemProperties> }}
 */
declare function ItemPropertiesIsSubset(subProperties: ItemProperties, superProperties: ItemProperties, asset: Asset, options?: {
    gatherNonEquivalancies?: boolean;
}): {
    result: boolean;
    nonEquivalencies: Set<keyof ItemProperties>;
};
/**
 * Copy and decompress the passed item budle properties in preparation for {@link Item} creation.
 * @param {Item} item The final item in which the properties will end up
 * @param {undefined | Readonly<ItemPropertiesMinimized>} properties The minimized item properties
 * @param {object} [options]
 * @param {boolean} [options.initExtendedItem] Whether to re-initialize any extended item options (including locks)
 * @param {Character} [options.C] The character (if any)
 * @returns {ItemProperties} The maximized item properties
 */
declare function ItemPropertiesDecompress(item: Item, properties: undefined | Readonly<ItemPropertiesMinimized>, options?: {
    initExtendedItem?: boolean;
    C?: Character;
}): ItemProperties;
