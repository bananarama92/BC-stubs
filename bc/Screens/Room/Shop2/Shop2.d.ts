declare var Shop2Background: string;
/** @satisfies {Record<string, ShopDropdownState>} */
declare const ShopDropdownState: {
    readonly NONE: "None";
    readonly GROUP: "Group";
    readonly POSE: "Pose";
};
/**
 * Namespace with shop-specific variables that are expected to mutate over the course of the (sub-)screens lifetime
 * @namespace
 */
declare const Shop2Vars: VariableContainer<{
    /**
     * The item (if any) currently equipped in preview mode
     * @type {null | Item}
     */
    EquippedItem: null | Item;
    /**
     * The current page
     * @type {number}
     */
    Page: number;
    /**
     * Whether any item has been bought or sold, thus requiring a push to the server
     * @type {boolean}
     */
    Push: boolean;
    /**
     * The current shop mode
     * private
     * @type {ShopMode}
     */
    _Mode: ShopMode;
    /**
     * The current dressing state of the preview character
     * @type {ShopClothesMode}
     */
    ClothesMode: ShopClothesMode;
    /**
     * All (filtered) items that can still be bought
     * @type {ShopItem[]}
     */
    BuyItems: ShopItem[];
    /**
     * All (filtered) items that can still be sold
     * @type {ShopItem[]}
     */
    SellItems: ShopItem[];
    /**
     * All (filtered) items that can be equipped in preview mode
     * @type {ShopItem[]}
     */
    PreviewItems: ShopItem[];
    /**
     * The currently active dropdown menu
     * @type {ShopDropdownState}
     */
    DropdownState: ShopDropdownState;
    /**
     * A record mapping filter ID to filter callbacks.
     * Each callback is expected to return a list denoting for which modes the item is to-be shown.
     * Note that an item will only be shown if the respective mode is included in the output list of every callback.
     * @type {Record<string, (item: ShopItem) => ("Buy" | "Sell" | "Preview")[]>}
     */
    Filters: Record<string, (item: ShopItem) => ("Buy" | "Sell" | "Preview")[]>;
}, {
    /**
     * The current shop mode
     * @type {ShopMode}
     */
    Mode: ShopMode;
    /**
     * Get the maximum number of pages for the current {@link Shop2Vars.Mode}.
     * @type {number}
     */
    readonly PageCount: number;
    /**
     * Get all <=12 assets given the current {@link Shop2Vars.Page} and {@link Shop2Vars.Mode}.
     * @type {readonly ShopItem[]}
     */
    readonly CurrentAssets: readonly ShopItem[];
}>;
/**
 * Namespace with shop-specific variables that are expected to remain constant over the course of the (sub-)screens lifetime.
 * @namespace
 */
declare const Shop2InitVars: VariableContainer<{
    /**
     * The shop background
     * @type {string}
     */
    Background: string;
    /**
     * The shop preview character
     * @type {null | Character}
     */
    Preview: null | Character;
    /**
     * The module- and screen-name of the previous screen (if any)
     * @type {null | ScreenSpecifier}
     */
    PreviousScreen: null | ScreenSpecifier;
    /**
     * Super set of all items that be bought or sold
     * @type {readonly ShopItem[]}
     */
    Items: readonly ShopItem[];
    /**
     * A record mapping group category descriptions, to {@link AssetGroup.Description} to a set with all respective (shop-elligble) group names.
     *
     * Note that keys will vary based on the users active language.
     * @type {Record<string, Record<string, Set<AssetGroupName>>>}
     */
    GroupDescriptions: Record<string, Record<string, Set<AssetGroupName>>>;
}, {
    /** The shop background */
    Background: string;
}>;
/**
 * Namespace with shop-specific constants.
 * @namespace
 */
declare const Shop2Consts: {
    /**
     * Grid parameters for the to-be displayed shop items
     */
    Grid: {
        x: number;
        y: number;
        width: number;
        height: number;
        itemWidth: number;
        itemHeight: number;
    };
    /**
     * Coordinates for the `Color` mode
     * @type {RectTuple}
     */
    ItemColorCoords: RectTuple;
    /**
     * A list denoting the rotation order between the respective shop modes.
     * @type {readonly ShopMode[]}
     */
    BuyModeCycleOrder: readonly ShopMode[];
    /**
     * A list denoting the rotation order (and their callbacks) between the respective clothing modes.
     * @type {readonly { Mode: ShopClothesMode, Callback: (C: Character, items: Item[]) => void }[]}
     */
    ClothesCycleOrder: readonly {
        Mode: ShopClothesMode;
        Callback: (C: Character, items: Item[]) => void;
    }[];
    /**
     * A record mapping {@link Asset.BuyGroup} names to the asset's value and all members of the buygroup.
     * Only includes buy groups with at least 2 members.
     * @type {Record<string, { Value: number, Assets: readonly ItemBundle[] }>}
     */
    BuyGroups: Record<string, {
        Value: number;
        Assets: readonly ItemBundle[];
    }>;
    /**
     * A set with the group + asset names of all asset keys.
     * @type {Set<string>}
     */
    Keys: Set<string>;
    /**
     * A set with the group + asset names of all asset remotes.
     * @type {Set<string>}
     */
    Remotes: Set<string>;
};
/**
 * Namespace with shop-related functions.
 * @namespace
 */
declare var Shop2: {
    /**
     * Populate {@link Shop2Consts.BuyGroups} with buy groups.
     * private
     */
    _PopulateBuyGroups(): void;
    /**
     * Populate {@link Shop2InitVars.GroupDescriptions} with group descriptions and all corresponding group names
     * @param {readonly ShopItem[]} assets
     * private
     */
    _PopulateGroupDescriptions(assets: readonly ShopItem[]): void;
    /**
     * Populate {@link Shop2Consts.Keys} and {@link Shop2Consts.Remote} with the name of all asset keys and remotes.
     * private
     */
    _PopulateKeysAndRemotes(): void;
    /**
     * Draw function for a single item in the shop
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {number} assetIndex - The assets index within {@link Shop2Vars.CurrentAssets}
     * @satisfies {ScreenDrawHandler}
     * private
     */
    _AssetElementDraw(x: number, y: number, w: number, h: number, assetIndex: number): void;
    /**
     * Click function for a single item in the shop
     * @param {PointerEvent} event
     * @param {number} assetIndex - The assets index within {@link Shop2Vars.CurrentAssets}
     * @satisfies {MouseEventListener}
     * private
     */
    _AssetElementClick(event: PointerEvent, assetIndex: number): void;
    /**
     * Construct screen functions for the <=12 items displayed in the shop.
     * @returns {Record<string, ShopScreenFunctions>}
     */
    _GenerateAssetElements(): Record<string, ShopScreenFunctions>;
    /**
     * Filter the buy, sell and preview items in {@link Shop2Vars} based on the {@link Shop2Vars.Filters} settings,
     * clipping the current {@link Shop2Vars.Page} if required.
     * @param {boolean} clearDatalist - Whether the search bars datalist should be cleared (and thus be recomputed on a focus event)
     */
    ApplyItemFilters(clearDatalist?: boolean): void;
    /** Click handler for the group-selection checkboxes */
    _SetCheckboxFilters(): void;
    /**
     * Update the state of all pose-buttons, disabling or selecting them if so required.
     */
    _UpdatePoseButtons(): void;
    /**
     * @param {string} id
     */
    _ClickDropdown(id: string): void;
    DrawPriceRibbon(label: string, x: number, y: number, w: number, color?: string): void;
    /**
     * Convert the passed asset list into a list consisting of shop items
     * @param {readonly Asset[]} assets - The assets in question
     * @returns {ShopItem[]} - The shop items constructed from the passed assets
     */
    ParseAssets(assets: readonly Asset[]): ShopItem[];
    /**
     * Namespace with the individual screen function components of the shop screen
     * @type {Record<string, ShopScreenFunctions>}
     */
    Elements: Record<string, ShopScreenFunctions>;
    /**
     * Helper function for initializing the `Shop2` screen.
     * @param {null | string} background - The shops background image
     * @param {null | ScreenSpecifier} screen - A 2-tuple containing the module and name of the previous screen
     * @param {null | readonly Asset[]} assets - A list of all assets that should appear in the shop
     */
    Init(background?: null | string, screen?: null | ScreenSpecifier, assets?: null | readonly Asset[]): void;
};
