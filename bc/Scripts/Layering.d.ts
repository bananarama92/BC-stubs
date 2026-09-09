declare namespace Layering {
    let PropertyNames: ReadonlySet<keyof ItemProperties>;
    let Defaults: null | Readonly<ItemProperties>;
    let Character: null | Character;
    let activeTab: "priority" | "translation" | "scale" | "rotate";
    let Display: null | LayeringDisplay;
    let Item: null | Item;
    let Readonly: boolean;
    const Asset: Asset;
    let OverridePriority: undefined | AssetLayerOverridePriority;
    let _Readonly: boolean;
    /**
     * Update an item's property, optionally for a specific layer, and refresh the character.
     * @param {Item} item - The item to update.
     * @param {"Priority" | "TranslationX" | "TranslationX" | "ScaleX" | "ScaleY" | "Rotate"} propName - The property name (e.g., "Rotation", "ScaleX").
     * @param {number} value - The new value.
     * @param {LayerName} [layerName] - Optional layer name to update. If provided, updates layer-specific property.
     */
    function UpdateProperty(item: Item, propName: "Priority" | "TranslationX" | "TranslationX" | "ScaleX" | "ScaleY" | "Rotate", value: number, layerName?: LayerName): void;
    /**
     * Return whether the layering sub screen has currently been initialized (be it either active or unloaded)
     * @returns {this is Pick<Required<typeof Layering>, "Character" | "Display" | "Item">}
     */
    function IsActive(): this is Pick<Required<typeof Layering>, "Character" | "Display" | "Item">;
    let DisplayDefault: Readonly<LayeringDisplay>;
    let ID: Readonly<{
        root: "layering";
        resetButton: "layering-reset-button";
        exitButton: "layering-exit-button";
        hideButton: "layering-hide-button";
        hideTooltip: "layering-hide-button-tooltip";
        lockButton: "layering-lock-button";
        assetHeader: "layering-asset-header";
        assetGrid: "layering-asset-grid";
        layerHeader: "layering-layer-header";
        layerDIV: "layering-layer-div";
        layerOuterGrid: "layering-layer-outer-grid";
    }>;
    let _ExitCallbacks: ((screen: string, C: Character, item: Item) => void)[];
    /**
     * private
     * Initialize the object-based variant of {@link AssetLayerOverridePriority}
     */
    function _InitOverridePriorityObject(): void;
    /**
     * private
     * @param {LayerName | AssetName} name - The name of the layer
     * @param {number} priority - The stringified layer priority
     * @param {string} defaultPriority - The stringified default priority of the layer
     */
    function _ApplyLayerPriority(name: LayerName | AssetName, priority: number, defaultPriority: string): void;
    /**
     * private
     * @param {number} priority - The layer priority
     * @param {string} defaultPriority - The stringified default priority of the layer
     */
    function _ApplyAssetPriority(priority: number, defaultPriority: string): void;
    /**
     * Event listener for `input` events involving layer priorities
     * private
     * @param {Event} event
     */
    function _LayerInputListener(event: Event): void;
    /**
     * Event listener for `input` events involving asset priorities
     * private
     * @param {Event} event
     */
    function _AssetInputListener(event: Event): void;
    let _CharacterRefresh: (C: Character, Push?: boolean | undefined, RefreshDialog?: boolean | undefined) => void;
    /**
     * Event listener for `click` events of the reset button
     * @this {HTMLButtonElement}
     * @param {Event} _event
     * private
     */
    function _ResetClickListener(this: HTMLButtonElement, _event: Event): void;
    /**
     * Event listener for `click` events of the show hidden layers button
     * @this {HTMLButtonElement}
     * @param {Event} _event
     * private
     */
    function _ShowLayersClickListener(this: HTMLButtonElement, _event: Event): void;
    /**
     * Update the background colors of the `number`-based input elements, the color change depending on whether one is changing an asset- or layer-specific priority.
     * private
     * @param {"layer-priority" | "asset-priority"} activeType
     */
    function _UpdateInputColors(activeType: "layer-priority" | "asset-priority"): void;
    let _inputCache: Record<string, HTMLInputElement[]>;
    /**
     * Updates the input validation limits for all relevant inputs based on the current combined values.
     * private
     */
    function _UpdateLimits(): void;
    /**
     * private
     * @param {"Scale" | "Rotation" | "Translation"} propType
     * @param {("ScaleX" | "ScaleY" |"Rotation" | "TranslationX" | "TranslationY")[]} properties
     * @param {number} min
     * @param {number} max
     * @param {number} step
     * @param {number} defaultValue
     * @param {boolean} isShowingHiddenLayers
     * @param {Record<string, [min: number, max: number]>} [constraints={}]
     * @returns {Element[]}
     */
    function _CreateTabContent(propType: "Scale" | "Rotation" | "Translation", properties: ("ScaleX" | "ScaleY" | "Rotation" | "TranslationX" | "TranslationY")[], min: number, max: number, step: number, defaultValue: number, isShowingHiddenLayers: boolean, constraints?: Record<string, [min: number, max: number]>): Element[];
    /**
     * private
     * @param {AssetLayer} layer
     * @param {"Rotation" | "Scale" | "Translation"} propType
     * @param {("ScaleX" | "ScaleY" |"Rotation" | "TranslationX" | "TranslationY")[]} properties
     * @param {number} min
     * @param {number} max
     * @param {number} step
     * @param {number} defaultValue
     * @param {boolean} isShowingHiddenLayers
     * @param {Record<string, [min: number, max: number]>} constraints
     */
    function _CreateLayerFieldset(layer: AssetLayer, propType: "Rotation" | "Scale" | "Translation", properties: ("ScaleX" | "ScaleY" | "Rotation" | "TranslationX" | "TranslationY")[], min: number, max: number, step: number, defaultValue: number, isShowingHiddenLayers: boolean, constraints: Record<string, [min: number, max: number]>): {
        tag: string;
        classList: string[];
        attributes: {
            hidden: boolean;
        };
        children: {
            tag: string;
            classList: string[];
            children: ({
                tag: string;
                classList: string[];
                children: string[];
            } | {
                tag: string;
                classList: string[];
                children: {
                    tag: string;
                    classList: string[];
                    children: ({
                        tag: string;
                        attributes: {
                            type: string;
                            value: number;
                            step: number;
                            min: number;
                            max: number;
                            id: string;
                            class: string;
                            inputmode: string;
                        };
                        eventListeners: {
                            input: (event: Event) => void;
                        };
                    } | {
                        tag: string;
                        children: string[];
                        attributes: {
                            for: string;
                        };
                    })[];
                }[];
            })[];
        }[];
    };
    /**
     * private
     * @param {AssetGroup} group
     * @returns {boolean}
     */
    function _IsBlacklisted(group: AssetGroup): boolean;
    /**
     * private
     * @param {AssetGroup} group
     * @returns {boolean}
     */
    function _IsPussy(group: AssetGroup): boolean;
    /**
     * private
     * @param {"priority" | "translation" | "scale" | "rotate"} tabKey
     * @returns {Element[]}
     */
    function _GetTabContents(tabKey: "priority" | "translation" | "scale" | "rotate"): Element[];
    /**
     * Helper to build priority fieldset to avoid repetition
     * @param {boolean} isShowingHiddenLayers
     * private
     */
    function _BuildLayerPriorityFieldset(isShowingHiddenLayers: boolean): HTMLFieldSetElement;
    /**
     * Group all layers by their {@link AssetLayer.CopyLayerColor} properties
     * private
     * @param {readonly AssetLayer[]} layers
     * @returns {Record<"" | LayerName, AssetLayer[]>}
     */
    function _GroupLayers(layers: readonly AssetLayer[]): Record<"" | LayerName, AssetLayer[]>;
    /**
     * Return the default item property values for those specified in {@link Layering.PropertyNames}.
     *
     * Values are generally undefined, with the extended item options of certain items overwriting them.
     * private
     * @returns {ItemProperties}
     */
    function _GetDefaults(): ItemProperties;
    /**
     * Update all input elements and buttons with the passed {@link Layering.Readonly} status.
     * @param {boolean} isReadonly
     * private
     */
    function _ApplyReadonly(isReadonly: boolean): void;
    /**
     * Initialize the layering subscreen
     * @param {Item} item - The affected item
     * @param {Character} character - The item's owning character
     * @param {null | Partial<LayeringDisplay>} display - The shape of the layering subscreen
     * @param {boolean} reload - Whether we're loading or reloading the screen.
     * A reload pushes any current changes towards the server and reinitializes all DOM elements.
     * @returns {Promise<HTMLDivElement>} The div containing the layering subscreen
     */
    function Init(item: Item, character: Character, display?: null | Partial<LayeringDisplay>, reload?: boolean, readonly?: boolean): Promise<HTMLDivElement>;
    /**
     * Apply translation to the layering screen
     * private
     */
    function _ApplyTranslations(): void;
    function Load(): Promise<void>;
    function Resize(load: boolean): void;
    function Unload(): void;
    /**
     * @satisfies {ScreenExitHandler}
     * @param {boolean} reload - Whether the exit call is part of a reload (see {@link Layering.Init})
     */
    function Exit(reload?: boolean): void;
    /**
     * Register screen-specific callbacks to-be executed after calling {@link Layering.Exit}.
     *
     * Callbacks registered herein must be used _exclusively_ for setting up the next screen, and not for tearing down the layering sub screen.
     * As such, they are ignored when performing a reload of the layering sub screen (see {@link Layering.Init})
     * @param {readonly LayeringExitOptions[]} options
     */
    function RegisterExitCallbacks(...options: readonly LayeringExitOptions[]): void;
}
