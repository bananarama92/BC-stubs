/**
 * Construct an item-specific ID for a properties input element (_e.g._ an opacity slider).
 * @param {string} Name - The name of the input element
 * @param {Item | null} Item - The item for whom the ID should be constructed; defaults to {@link DialogFocusItem}
 * @returns {string} - The ID of the property
 */
declare function PropertyGetID(Name: string, Item?: Item | null): string;
declare function PropertyOpacityInit(data: ExtendedItemData<any>, originalFunction: (C: Character, item: Item, push: boolean, refresh: boolean) => boolean, C: Character, item: Item, push: boolean, refresh: boolean): boolean;
/**
 * Load function for items with opacity sliders. Constructs the opacity slider.
 * @param {ExtendedItemData<any>} Data - The items extended item data
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point (if any).
 * @param {ThumbIcon} thumbIcon The icon to use for the range input's "thumb" (handle).
 * @returns {HTMLInputElement} - The new or pre-existing range input element of the opacity slider
 * @satisfies {ExtendedItemScriptHookCallbacks.Load<any>}
 */
declare function PropertyOpacityLoad({ asset, dialogPrefix }: ExtendedItemData<any>, OriginalFunction: () => void, thumbIcon?: ThumbIcon): HTMLInputElement;
/**
 * Draw function for items with opacity sliders. Draws the opacity slider and further opacity-related information.
 * @param {ExtendedItemData<any>} Data - The items extended item data
 * @param {() => void} OriginalFunction - The function that is normally called when an archetypical item reaches this point (if any).
 * @param {number} XOffset - An offset for all text and slider X coordinates
 * @param {number} YOffset - An offset for all text and slider Y coordinates
 * @param {TextKeysInterface} LabelKeyword - The keyword of the opacity label
 * @returns {void} Nothing
 * @satisfies {ExtendedItemScriptHookCallbacks.Draw<any>}
 */
declare function PropertyOpacityDraw(Data: ExtendedItemData<any>, OriginalFunction: () => void, XOffset?: number, YOffset?: number, LabelKeyword?: TextKeysInterface): void;
/**
 * Exit function for items with opacity sliders. Updates the items opacity, deletes the slider and (optionally) refreshes the character and item.
 * @param {ExtendedItemData<any>} Data - The items extended item data
 * @param {null | (() => void)} OriginalFunction - The function that is normally called when an archetypical item reaches this point (if any).
 * @param {boolean} Refresh - Whether character parameters and the respective item should be refreshed or not
 * @returns {boolean} Whether the opacity was updated or not
 * @satisfies {ExtendedItemScriptHookCallbacks.Exit<any>}
 */
declare function PropertyOpacityExit({ asset }: ExtendedItemData<any>, OriginalFunction: null | (() => void), Refresh?: boolean): boolean;
/**
 * Helper fuction for publishing shock-related actions.
 * @param {Character} C - The shocked character; defaults to the {@link CharacterGetCurrent} output
 * @param {Item} Item - The shocking item; defaults to {@link DialogFocusItem}
 * @param {boolean} Automatic - Whether the shock was triggered automatically or otherwise manually
 */
declare function PropertyShockPublishAction(C: Character, Item: Item, Automatic?: boolean): void;
/**
 * Check if a given message warants automatic punishment given the provided sensitivety level
 * @param {0 | 1 | 2 | 3} Sensitivity - The auto-punishment sensitivety
 * @param {string} msg - The to-be checked message
 * @returns {boolean} Whether the passed message should trigger automatic speech-based punishment
 */
declare function PropertyAutoPunishParseMessage(Sensitivity: 0 | 1 | 2 | 3, msg: string): boolean;
/**
 * Check whether the last uttered message should trigger automatic punishment from the provided item
 * @param {Item} Item - The item in question
 * @param {number | null} LastMessageLen - The length of {@link ChatRoomLastMessage} prior to the last message (if applicable)
 * @returns {boolean} Whether the last message should trigger automatic speech-based punishment
 */
declare function PropertyAutoPunishDetectSpeech(Item: Item, LastMessageLen?: number | null): boolean;
/**
 * Check if the player character has performed one or more of the passed activities ever since the last {@link PropertyPunishActivityNames} refresh.
 * @param {null | ActivityName | readonly ActivityName[]} name - The name(s) of the activity to check. If `null`, check if any activity at all is present
 * @param {boolean} clearCache - Whether to automatically remove `name` from the {@link PropertyPunishActivityNames} cache.
 * `name == null` implies that all entries should be removed.
 * @returns {boolean}
 */
declare function PropertyPunishActivityCheck(name?: null | ActivityName | readonly ActivityName[], clearCache?: boolean): boolean;
/**
 * Assign a property on an {@link ItemProperties} record via dynamic key.
 * Used by {@link PropertyUnion} and {@link PropertyDifference} where keys are only known at runtime.
 * @template {ItemProperties} T
 * @template {keyof T} K
 * @param {T} output
 * @param {K} key
 * @param {T[K]} value
 */
declare function PropertyAssign<T extends ItemProperties, K extends keyof T>(output: T, key: K, value: T[K]): void;
/**
 * Merge all passed item properties into the passed output, merging (and shallow copying) arrays if necessary.
 * @param {ItemProperties} output - The to be updated properties
 * @param {readonly ItemProperties[]} args - The additional item properties to be merged into the output
 * @returns {ItemProperties} - The passed output modified inplace
 */
declare function PropertyUnion(output: ItemProperties, ...args: readonly ItemProperties[]): ItemProperties;
/**
 * Remove all passed item properties from the passed output, removing (and shallow copying) array entries if necessary.
 * @param {ItemProperties} output - The to-be updated properties
 * @param {readonly ItemProperties[]} args - The additional item properties to be removed from the output
 * @returns {ItemProperties} - The passed output modified inplace
 */
declare function PropertyDifference(output: ItemProperties, ...args: readonly ItemProperties[]): ItemProperties;
/**
 * Convert the passed type record into a list of stringified key/value pairs.
 * @param {TypeRecord} typeRecord
 * @returns {string[]}
 */
declare function PropertyTypeRecordToStrings(typeRecord: TypeRecord): string[];
/**
 * Property.js
 * -----------
 * A module with common helper functions for the handling of specific {@link ItemProperties} properties.
 * Note that more generic extended item functions should be confined to `ExtendedItem.js`.
 */
/**
 * A Map that maps input element IDs to their original value is defined in, _.e.g_, {@link PropertyOpacityLoad}.
 * Used as fallback in case an invalid opacity value is encountered when exiting.
 * @type {Map<string, any>}
 */
declare const PropertyOriginalValue: Map<string, any>;
/**
 * Throttled callback for opacity slider changes
 * @param {Character} C - The character being modified
 * @param {Item} item - The item being modified
 * @param {number} Opacity - The new opacity to set on the item
 * @returns {void} - Nothing
 */
declare const PropertyOpacityChange: (C: any, Item: any, Opacity: any) => void;
/**
 * A set of group names whose auto-punishment has successfully been handled by {@link PropertyAutoPunishDetectSpeech}.
 * If a group name is absent from the set then it's eligible for action-based punishment triggers.
 * The initial set is populated by {@link AssetLoadAll} after all asset groups are defined.
 * @type {Set<AssetGroupName>}
 */
declare let PropertyAutoPunishHandled: Set<AssetGroupName>;
/**
 * A set with the names of all activities as performed by the player.
 * Functions as a cache for {@link PropertyPunishActivityCheck} and can be automatically emptied out by the latter.
 * @type {Set<ActivityName>}
 */
declare let PropertyPunishActivityCache: Set<ActivityName>;
/**
 * A list of keywords that can trigger automatic punishment when included in `/me`- or `*`-based messages
 * @type {readonly string[]}
 */
declare const PropertyAutoPunishKeywords: readonly string[];
declare namespace PropertyLayerOrigin {
    /**
     * Resolve the `Left/Top` data for the specified item, including any {@link ItemProperties}-based corrections.
     * @param {Item} item
     * @param {"DrawingTop" | "DrawingLeft"} fieldName
     * @returns {Partial<Record<LayerName, Mutable<TopLeft.Data>>>}
     */
    function resolveItem(item: Item, fieldName: "DrawingTop" | "DrawingLeft"): Partial<Record<LayerName, Mutable<TopLeft.Data>>>;
    /**
     * Resolve the `Left/Top` data for the specified layer, including any {@link ItemProperties}-based corrections.
     * @param {AssetLayer} layer
     * @param {"DrawingTop" | "DrawingLeft"} fieldName
     * @param {null | ItemProperties} properties
     * @returns {Mutable<TopLeft.Data>}
     */
    function resolveLayer(layer: AssetLayer, fieldName: "DrawingTop" | "DrawingLeft", properties?: null | ItemProperties): Mutable<TopLeft.Data>;
    /**
     * Get the item's original `Left/Top` data as determined by its layer- and extended item data; any user-made alterations are removed.
     * @param {Item} item
     * @param {"DrawingTop" | "DrawingLeft"} fieldName
     * @returns {Partial<Record<LayerName, Mutable<TopLeft.Data>>>}
     */
    function getOriginal(item: Item, fieldName: "DrawingTop" | "DrawingLeft"): Partial<Record<LayerName, Mutable<TopLeft.Data>>>;
}
/**
 * @template {keyof ItemProperties} T
 * @implements {ItemProperty.EntryNullable<T>}
 */
declare class PropertyDataEntry<T extends keyof ItemProperties> implements ItemProperty.EntryNullable<T> {
    /**
     * @readonly
     * private
     * @type {Map<keyof ItemProperties, PropertyDataEntry<any>>}
     */
    static readonly _entries: Map<keyof ItemProperties, PropertyDataEntry<any>>;
    /**
     * Construct a new entry via shallow copying and renaming an existing one.
     *
     * Note that both new- and old-entries _must_ have the same property- and metadata types.
     * @template {keyof ItemProperties} T
     * @param {keyof ItemProperties} fromName The old property name of the to-be copied entry object
     * @param {T} toName The new property name
     * @param {ItemProperty.Entry<T>} [override] Override specific entries from the copied data
     * @returns {PropertyDataEntry<T>} The newly copied entry
     */
    static copyFrom<T_1 extends keyof ItemProperties>(fromName: keyof ItemProperties, toName: T_1, override?: ItemProperty.Entry<T_1>): PropertyDataEntry<T_1>;
    /**
     * Character code offset for excluding ASCII control characters.
     * @readonly
     */
    static readonly ASCIIControlOffset: 32;
    /**
     * Compress a number into the `uint16` range from `float64`.
     * @param {number} value
     * @param {1 | 0.01} [floatResolution]
     * @returns {number}
     */
    static compressNumber(value: number, floatResolution?: 1 | 0.01): number;
    /**
     * Decompress a number from the `uint16` range into `float64`.
     * @param {number} value
     * @param {1 | 0.01} [floatResolution]
     * @returns {number}
     */
    static decompressNumber(value: number, floatResolution?: 1 | 0.01): number;
    /**
     * Comparison function for set-like arrays
     * @satisfies {ItemProperty.Compare<any>}
     * @template {string | boolean | number} T
     * @param {readonly T[]} value1
     * @param {readonly NoInfer<T>[]} value2
     * @returns {boolean}
     */
    static compareSetLikeArrays<T_1 extends string | boolean | number>(value1: readonly T_1[], value2: readonly NoInfer<T_1>[]): boolean;
    /**
     * Comparison function for simple objects with scalar values (numbers, strings, etc.)
     * @satisfies {ItemProperty.Union<any>}
     * @template {string | boolean | number} T
     * @param {readonly (readonly T[])[]} values
     * @returns {T[]}
     */
    static unionSetLikeArrays<T_1 extends string | boolean | number>(values: readonly (readonly T_1[])[]): T_1[];
    /**
     * Comparison function for simple objects with scalar values (numbers, strings, etc.)
     * @satisfies {ItemProperty.Compare<any>}
     * @template {Readonly<Record<string, undefined | null | string | boolean | number>>} T
     * @param {T} value1
     * @param {Readonly<Record<string, undefined | null | string | boolean | number>>} value2
     * @returns {value2 is T}
     */
    static compareShallowObjects<T_1 extends Readonly<Record<string, undefined | null | string | boolean | number>>>(value1: T_1, value2: Readonly<Record<string, undefined | null | string | boolean | number>>): value2 is T_1;
    /**
     * Comparison function for simple objects with scalar values (numbers, strings, etc.)
     * @satisfies {ItemProperty.Union<any>}
     * @template {Record<string, undefined | null | string | boolean | number>} T
     * @param {readonly Readonly<T>[]} values
     * @returns {T}
     */
    static unionShallowObjects<T_1 extends Record<string, undefined | null | string | boolean | number>>(values: readonly Readonly<T_1>[]): T_1;
    /**
     * @param {T} name
     * @param {ItemProperty.PropertyMetaData[T]} metaData
     * @param {Omit<ItemProperty.Entry<T>, "metaData">} functions
     */
    constructor(name: T, metaData: ItemProperty.PropertyMetaData[T], functions: Omit<ItemProperty.Entry<T>, "metaData">);
    /**
     * @readonly
     * @type {NonNullable<ItemProperty.PropertyMetaData[T]>}
     */
    readonly metaData: NonNullable<ItemProperty.PropertyMetaData[T]>;
    /**
     * @readonly
     * @type {T}
     */
    readonly name: T;
    /**
     * private
     * @type {undefined | ItemProperty.Compress<T>}
     */
    _compress: undefined | ItemProperty.Compress<T>;
    /**
     * private
     * @type {undefined | ItemProperty.Decompress<T>}
     */
    _decompress: undefined | ItemProperty.Decompress<T>;
    /**
     * private
     * @type {undefined | ItemProperty.Union<T>}
     */
    _union: undefined | ItemProperty.Union<T>;
    /**
     * private
     * @type {undefined | ItemProperty.Difference<T>}
     */
    _difference: undefined | ItemProperty.Difference<T>;
    /**
     * private
     * @type {undefined | ItemProperty.Compare<T>}
     */
    _compare: undefined | ItemProperty.Compare<T>;
    /**
     * private
     * @type {undefined | ItemProperty.Validate<T>}
     */
    _validate: undefined | ItemProperty.Validate<T>;
    /**
     * private
     * @type {undefined | ItemProperty.IsSubset<T>}
     */
    _isSubset: undefined | ItemProperty.IsSubset<T>;
    /**
     * Compress the passed item property
     * @param {ItemProperties[T]} property The item property value
     * @param {ItemProperty.DataBundle} itemData The item data
     * @param {ItemProperties[T]} [defaults] The default value of the property (if any)
     * @returns {ItemPropertiesMinimized} The compressed property
     */
    compress(property: ItemProperties[T], itemData: ItemProperty.DataBundle, defaults?: ItemProperties[T]): ItemPropertiesMinimized;
    /**
     * Decompress the passed item property
     * @param {ItemPropertiesMinimized[T] | ItemProperties[T]} property The item property value. This property value _should_ be compressed though decompressed value _must_ be handled correctly.
     * @param {ItemProperty.DataBundle} itemData The item data
     * @returns {ItemProperties} The decompressed property
     */
    decompress(property: ItemPropertiesMinimized[T] | ItemProperties[T], itemData: ItemProperty.DataBundle): ItemProperties;
    /**
     * Property union function.
     *
     * By default, properties follow a "first non-nullish entry wins" approach if no property-specific merge function is available.
     * @param {readonly ItemProperties[T][]} properties The to-be merged property values
     * @param {ItemProperty.DataBundle} itemData The item data
     * @returns {undefined | ItemProperties[T]} The merged property
     */
    union(properties: readonly ItemProperties[T][], itemData: ItemProperty.DataBundle): undefined | ItemProperties[T];
    /**
     * Property difference function.
     * @param {readonly ItemProperties[T][]} properties The to-be differenced property values
     * @param {ItemProperty.DataBundle} itemData The item data
     * @returns {undefined | ItemProperties[T]} The differenced property
     */
    difference(properties: readonly ItemProperties[T][], itemData: ItemProperty.DataBundle): undefined | ItemProperties[T];
    /**
     * Property comparison function
     * @param {ItemProperties[T]} prop1 The firs to-be compared property
     * @param {ItemProperties[T]} prop2 The firs to-be compared property
     * @param {ItemProperty.DataBundle} itemData The item data
     * @returns {boolean} whether both properties are equivalent
     */
    compare(prop1: ItemProperties[T], prop2: ItemProperties[T], itemData: ItemProperty.DataBundle): boolean;
    /**
     * Property subset-or-equivalency comparison function
     * @param {ItemProperties[T]} subProp The firs to-be compared property
     * @param {ItemProperties[T]} superProp The firs to-be compared property
     * @param {ItemProperty.DataBundle} itemData The item data
     * @returns {boolean} whether both properties are equivalent _or_ whether `subProp` represents a property subset of `superProp`
     */
    isSubset(subProp: ItemProperties[T], superProp: ItemProperties[T], itemData: ItemProperty.DataBundle): boolean;
    /**
     * Property comparison function
     * @param {ItemProperties[T]} prop The firs to-be compared property
     * @param {ItemProperty.DataBundle} itemData The item data
     * @param {ItemProperties[T]} [defaults] The default value of the property (if any)
     * @returns {ItemProperty.ValidationOutput<ItemProperties[T]>} whether both properties are equivalent
     */
    validate(prop: ItemProperties[T], itemData: ItemProperty.DataBundle, defaults?: ItemProperties[T]): ItemProperty.ValidationOutput<ItemProperties[T]>;
    /**
     * Compress an object with layer-specific numeric entries into a string.
     *
     * The string is of length `<= Asset.Layer.length`,
     * with the character code of each substring mapping to their layer-specific numeric entry per `charCodeCallback`.
     *
     * The utilized UTF16 character code ranges (_i.e._ `uint16`) are as following:
     * * `[0, 31]` reserved; ASCII control character range. The `0` code is used for padding
     * * `[32, 2**15 - 1]` positive number range
     * * `[2**15, 2**15 + 31]` reserved; mirroring the (offsetted) ASCII control character range
     * * `[2**15 + 32, 2**16 - 1]` negative number range; offset and represented by their absolute value
     *
     * Floating point values (defined per {@link PropertyDataEntry.metaData.stepSize}) are represented with a decimal resolution of 0.01,
     * _i.e._ multiplied by 100 and rounded to the nearest integer.
     * @param {Partial<Record<LayerName | "", number>>} value The to-be compressed value
     * @param {Asset} asset The asset
     * @param {undefined | Partial<Record<LayerName | "", number>>} defaults Layer-specific default values (if any)
     * @returns {undefined | string} The compressed entries
     */
    compressNumberRecord(value: Partial<Record<LayerName | "", number>>, asset: Asset, defaults: undefined | Partial<Record<LayerName | "", number>>): undefined | string;
    /**
     * Decompress a string back into an object with layer-specific numeric entries
     *
     * The is expected to be string of length `<= Asset.Layer.length`,
     * with the character code of each substring mapping to their layer-specific numeric entry per `charCodeCallback`.
     * @param {string} value The to-be decompressed value
     * @param {Asset} asset The asset
     * @returns {undefined | Partial<Record<LayerName | "", number>>} The decompressed entries
     */
    decompressNumberRecord(value: string, asset: Asset): undefined | Partial<Record<LayerName | "", number>>;
}
declare namespace PropertyData {
    let AccessMode: undefined;
    let AllowActivePose: undefined;
    let AllowActivity: undefined;
    let AllowActivityOn: undefined;
    let ArousalLvl: undefined;
    let Attribute: undefined;
    let AutoPunish: undefined;
    let AutoPunishUndoTime: undefined;
    let AutoPunishUndoTimeSetting: undefined;
    let BlinkState: PropertyDataEntry<"BlinkState">;
    let Block: PropertyDataEntry<"Block">;
    let BlockRemotes: undefined;
    let CombinationNumber: undefined;
    let CustomBlindBackground: undefined;
    let DefaultColor: undefined;
    let Difficulty: undefined;
    let Door: undefined;
    let DrawingLeft: undefined;
    let DrawingTop: undefined;
    let Effect: PropertyDataEntry<"Effect">;
    let EnableRandomInput: undefined;
    let Expression: undefined;
    let Fetish: undefined;
    let HeartRate: PropertyDataEntry<"HeartRate">;
    let HeightModifier: undefined;
    let Hide: PropertyDataEntry<"Hide">;
    let HideItem: PropertyDataEntry<"HideItem">;
    let HideItemExclude: undefined;
    let Hint: undefined;
    let InflateLevel: undefined;
    let InsertedBeads: undefined;
    let Intensity: undefined;
    let IsLeashed: PropertyDataEntry<"IsLeashed">;
    let Iterations: undefined;
    let LastShrinkWarningTime: undefined;
    let LayerRotation: PropertyDataEntry<"LayerRotation">;
    let LayerScaleX: PropertyDataEntry<"LayerScaleX">;
    let LayerScaleY: PropertyDataEntry<"LayerScaleY">;
    let LayerTranslationX: PropertyDataEntry<"LayerTranslationX">;
    let LayerTranslationY: PropertyDataEntry<"LayerTranslationY">;
    let LockButt: undefined;
    let LockMemberName: undefined;
    let LockMemberNumber: undefined;
    let LockMessage: undefined;
    let LockPickSeed: undefined;
    let LockSet: undefined;
    let LockedBy: undefined;
    let MemberNumberList: PropertyDataEntry<"MemberNumberList">;
    let MemberNumberListKeys: undefined;
    let Mode: undefined;
    let NextShockTime: undefined;
    let NextShrinkTime: undefined;
    let Opacity: undefined;
    let OpenPermission: undefined;
    let OpenPermissionArm: undefined;
    let OpenPermissionChastity: undefined;
    let OpenPermissionLeg: undefined;
    let OrgasmCount: undefined;
    let OriginalSetting: undefined;
    let OverrideHeight: undefined;
    let OverridePriority: PropertyDataEntry<"OverridePriority">;
    let Padding: undefined;
    let Password: undefined;
    let PortalLinkCode: undefined;
    let PublicModeCurrent: undefined;
    let PublicModePermission: undefined;
    let PunishActivity: undefined;
    let PunishOrgasm: undefined;
    let PunishProhibitedSpeech: undefined;
    let PunishProhibitedSpeechWords: undefined;
    let PunishRequiredSpeech: undefined;
    let PunishRequiredSpeechWord: undefined;
    let PunishSpeech: undefined;
    let PunishStandup: undefined;
    let PunishStruggle: undefined;
    let PunishStruggleOther: undefined;
    let RemoveItem: undefined;
    let RemoveOnUnlock: undefined;
    let RemoveTimer: undefined;
    let Revert: undefined;
    let Rotation: undefined;
    let RuinedOrgasmCount: undefined;
    let ScaleX: undefined;
    let ScaleY: undefined;
    let SelfUnlock: undefined;
    let SetPose: undefined;
    let ShockLevel: undefined;
    let ShowShrinkText: undefined;
    let ShowText: undefined;
    let ShowTimer: undefined;
    let ShrinkCooldown: undefined;
    let State: undefined;
    let SuctionLevel: undefined;
    let TargetAngle: undefined;
    let Text: undefined;
    let Text2: undefined;
    let Text3: undefined;
    let Texts: undefined;
    let TimeSinceLastOrgasm: undefined;
    let TimeWorn: undefined;
    let Tint: undefined;
    let TranslationX: undefined;
    let TranslationY: undefined;
    let TriggerCount: undefined;
    let TriggerValues: undefined;
    let Type: undefined;
    let TypeRecord: PropertyDataEntry<"TypeRecord">;
    let UnHide: PropertyDataEntry<"UnHide">;
}
