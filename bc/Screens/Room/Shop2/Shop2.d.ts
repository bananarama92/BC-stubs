declare function Shop2Load(): void;
declare function Shop2Click(event: MouseEvent | TouchEvent): void;
declare function Shop2Run(time: number): void;
declare function Shop2Unload(): void;
declare function Shop2Exit(): void;
declare var Shop2Background: string;
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
     * @type {ShopMode}
     */
    Mode: ShopMode;
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
     * Whether the group-selection dropdown menu should be displayed
     * @type {boolean}
     */
    DisplayDropdown: boolean;
}, {
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
     * @type {null | [module: ModuleType, screen: string]}
     */
    PreviousScreen: null | [module: ModuleType, screen: string];
    /**
     * Whether the shop screen has been initialized or not.
     * Useful in `Load` for identifying whether we're loading or reloading a (sub-)scren.
     * @type {boolean}
     */
    Init: boolean;
    /**
     * Super set of all items that be bought or sold
     * @type {readonly ShopItem[]}
     */
    Items: readonly ShopItem[];
    /**
     * The currently active item filters in the shop
     * @type {{ Keyword: string, Groups: Set<AssetGroupName> }}
     */
    Filters: {
        Keyword: string;
        Groups: Set<AssetGroupName>;
    };
}, {
    /** The shop background */
    Background: string;
}>;
declare namespace Shop2Consts {
    namespace Grid {
        let x: number;
        let y: number;
        let width: number;
        let height: number;
        let itemWidth: number;
        let itemHeight: number;
    }
    let ItemColorCoords: RectTuple;
    let BuyModeCycleOrder: readonly ShopMode[];
    let ClothesCycleOrder: readonly {
        Mode: ShopClothesMode;
        Callback: (C: Character, items: Item[]) => void;
    }[];
    let BuyGroups: Record<string, {
        Value: number;
        Assets: readonly ItemBundle[];
    }>;
    let GroupDescriptions: Record<string, AssetGroupName[]>;
    let Keys: Set<string>;
    let Remotes: Set<string>;
}
declare namespace Shop2 {
    function _PopulateBuyGroups(): void;
    function _PopulateGroupDescriptions(): void;
    function _PopulateKeysAndRemotes(): void;
    function _AssetElementRun(time: number, x: number, y: number, w: number, h: number, assetIndex: number): void;
    function _AssetElementClick(event: MouseEvent | TouchEvent, assetIndex: number): void;
    function _GenerateAssetElements(): Record<string, ShopScreenFunctions>;
    function _ApplyAssetFilter(): void;
    function _ToggleCheckbox(groupDescription: string): void;
    let DrawPriceRibbon: (label: string, x: number, y: number, w: number, color?: string) => void;
    function ParseAssets(assets: readonly Asset[]): ShopItem[];
    let Elements: Record<string, ShopScreenFunctions>;
    /**
     * Helper function for initializing the `Shop2` screen.
     * @param {null | string} background - The shops background image
     * @param {null | [module: ModuleType, screen: string]} screen - A 2-tuple containing the module and name of the previous screen
     * @param {null | readonly Asset[]} assets - A list of all assets that should appear in the shop
     */
    function Init(background?: string, screen?: [module: ModuleType, screen: string], assets?: readonly Asset[]): void;
}
