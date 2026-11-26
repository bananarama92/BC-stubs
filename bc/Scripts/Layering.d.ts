/**
 * Namespace with functions for managing the layering sub screen
 *
 * Below is an example of some basic usage of the {@link Layering} subscreen,
 * including a `Click` function for initializing the screen and a set of
 * `Resize` and `Exit` functions for, respectively, handling the screens
 * drawing/resizing and exiting
 *
 * @namespace
 * @example
 *
 * let FancyScreenMode: "default" | "layering" = "default";
 *
 * // Make sure the fancy screen mode is changed back to its default upon exiting the layering subscreen
 * Layering.RegisterExitCallbacks({
 * 	screen: "FancyScreen",
 * 	callback: () => FancyScreenMode = "default",
 * });
 *
 * function FancyScreenClick() {
 * 	const C: Character;
 * 	const item: Item;
 * 		switch (FancyScreenMode) {
 * 		case "default": {
 * 			if Mousein(...) {
 * 				FancyScreenMode = "layering";
 * 				Layering.Init(C, item);
 * 			}
 * 			return;
 * 		}
 * 	}
 * }
 *
 * function FancyScreenResize(load) {
 * 	switch (FancyScreenMode) {
 * 		case "layering":
 * 			Layering.Resize(load);
 * 			return;
 * 	}
 * }
 *
 * function FancyScreenExit() {
 * 	switch (FancyScreenMode) {
 * 		case "layering":
 * 			Layering.Exit();
 * 			return;
 * 	}
 * }
 */
declare var Layering: {
    /**
     * A set with all item property names that one may or may not assign via the layering subscreen
     * @readonly
     * @type {ReadonlySet<keyof ItemProperties>}
     */
    PropertyNames: ReadonlySet<keyof ItemProperties>;
    /**
     * Default, unmodified, item-specific property values.
     *
     * This value is purely dependant on the extended item's type, with all values being undefined for type-less or non-extended items.
     * @type {null | Readonly<ItemProperties>}
     */
    Defaults: null | Readonly<ItemProperties>;
    /**
     * The character in question
     * @type {null | Character}
     */
    Character: null | Character;
    /**
     * The currently active tab
     * @type {"priority" | "translation" | "scale" | "rotate"}
     */
    activeTab: "priority" | "translation" | "scale" | "rotate";
    /**
     * The (rectangular) shape and inter-button gap of the layering screen
     * @type {null | LayeringDisplay}
     */
    Display: null | LayeringDisplay;
    /**
     * The selected item in question
     * @type {null | Item}
     */
    Item: null | Item;
    /**
     * Get or set whether the layering screen is readonly
     * @type {boolean}
     */
    Readonly: boolean;
    /**
     * Whether the layering screen is readonly or not
     * @private
     * @see {@link Layering.Readonly}
     * @type {boolean}
     */
    _Readonly: boolean;
    /**
     * Get the item's asset
     * @readonly
     * @type {Asset}
     */
    readonly Asset: Asset;
    /**
     * Get or set the items `Property.OverridePriority`
     * @returns {undefined | AssetLayerOverridePriority}
     */
    OverridePriority: undefined | AssetLayerOverridePriority;
    /**
     * Update an item's property, optionally for a specific layer, and refresh the character.
     * @param {Item} item - The item to update.
     * @param {"Priority" | "TranslationX" | "TranslationY" | "ScaleX" | "ScaleY" | "Rotation"} propName - The property name (e.g., "Rotation", "ScaleX").
     * @param {number} value - The new value.
     * @param {LayerName} [layerName] - Optional layer name to update. If provided, updates layer-specific property.
     */
    UpdateProperty(item: Item, propName: "Priority" | "TranslationX" | "TranslationY" | "ScaleX" | "ScaleY" | "Rotation", value: number, layerName?: LayerName): void;
    /**
     * Return whether the layering sub screen has currently been initialized (be it either active or unloaded)
     * @returns {this is { Character: Character, Item: Item, Display: LayeringDisplay }}
     */
    IsActive(): this is {
        Character: Character;
        Item: Item;
        Display: LayeringDisplay;
    };
    /**
     * The default (rectangular) shape and inter-button gap of the layering screen
     * @readonly
     * @type {Readonly<LayeringDisplay>}
     */
    DisplayDefault: Readonly<LayeringDisplay>;
    /**
     * The IDs of layering-specific DOM elements
     * @readonly
     */
    ID: Readonly<{
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
    /**
     * Screen-specific callbacks that will be executed after calling {@link Layering.Exit}.
     *
     * Used as helpers for setting up the next screen.
     * @private
     * @readonly
     * @type {((screen: string, C: Character, item: Item) => void)[]}
     * @see {@link Layering.RegisterExitCallbacks}
     */
    _ExitCallbacks: ((screen: string, C: Character, item: Item) => void)[];
    /**
     * Initialize the object-based variant of {@link AssetLayerOverridePriority}
     * @private
     */
    _InitOverridePriorityObject(): void;
    /**
     * @private
     * @param {LayerName | AssetName} name - The name of the layer
     * @param {number} priority - The stringified layer priority
     * @param {string} defaultPriority - The stringified default priority of the layer
     */
    _ApplyLayerPriority(name: LayerName | AssetName, priority: number, defaultPriority: string): void;
    /**
     * @private
     * @param {number} priority - The layer priority
     * @param {string} defaultPriority - The stringified default priority of the layer
     */
    _ApplyAssetPriority(priority: number, defaultPriority: string): void;
    /**
     * Event listener for `input` events involving layer priorities
     * @private
     * @param {Event} event
     */
    _LayerInputListener(event: Event): void;
    /**
     * Event listener for `input` events involving asset priorities
     * @private
     * @param {Event} event
     */
    _AssetInputListener(event: Event): void;
    /**
     * A limited version of {@link CharacterRefresh}
     * @private
     */
    _CharacterRefresh: (C: Character, Push?: boolean | undefined, RefreshDialog?: boolean | undefined) => void;
    /**
     * Event listener for `click` events of the reset button
     * @this {HTMLButtonElement}
     * @param {Event} _event
     * @private
     */
    _ResetClickListener(this: HTMLButtonElement, _event: Event): void;
    /**
     * Event listener for `click` events of the show hidden layers button
     * @this {HTMLButtonElement}
     * @param {Event} _event
     * @private
     */
    _ShowLayersClickListener(this: HTMLButtonElement, _event: Event): void;
    /**
     * Update the background colors of the `number`-based input elements, the color change depending on whether one is changing an asset- or layer-specific priority.
     * @private
     * @param {"layer-priority" | "asset-priority"} activeType
     */
    _UpdateInputColors(activeType: "layer-priority" | "asset-priority"): void;
    /**
     * Cache for layering inputs to avoid DOM lookups
     * @private
     * @type {Record<string, HTMLInputElement[]>}
     */
    _inputCache: Record<string, HTMLInputElement[]>;
    /**
     * Updates the input validation limits for all relevant inputs based on the current combined values.
     * @private
     */
    _UpdateLimits(): void;
    /**
     * Insert soft hyphens between all upper- and lower cased letters, signaling them as valid word break points.
     * @private
     * @param {string} txt
     * @returns {string}
     */
    _TextInsertBreakpoints(txt: string): string;
    /**
     * @private
     * @param {"Scale" | "Rotation" | "Translation"} propType
     * @param {("ScaleX" | "ScaleY" |"Rotation" | "TranslationX" | "TranslationY")[]} properties
     * @param {number} min
     * @param {number} max
     * @param {number} step
     * @param {number} defaultValue
     * @param {boolean} isShowingHiddenLayers
     * @param {Record<string, [min: number, max: number]>} [constraints]
     * @returns {Element[]}
     */
    _CreateTabContent(propType: "Scale" | "Rotation" | "Translation", properties: ("ScaleX" | "ScaleY" | "Rotation" | "TranslationX" | "TranslationY")[], min: number, max: number, step: number, defaultValue: number, isShowingHiddenLayers: boolean, constraints?: Record<string, [min: number, max: number]>): Element[];
    /**
     * @private
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
    _CreateLayerFieldset(layer: AssetLayer, propType: "Rotation" | "Scale" | "Translation", properties: ("ScaleX" | "ScaleY" | "Rotation" | "TranslationX" | "TranslationY")[], min: number, max: number, step: number, defaultValue: number, isShowingHiddenLayers: boolean, constraints: Record<string, [min: number, max: number]>): {
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
                            input: (/** @type {Event} */ event: Event) => void;
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
     * @private
     * @param {AssetGroup} group
     * @returns {boolean}
     */
    _IsBlacklisted(group: AssetGroup): boolean;
    /**
     * @private
     * @param {AssetGroup} group
     * @returns {boolean}
     */
    _IsPussy(group: AssetGroup): boolean;
    /**
     * @private
     * @param {"priority" | "translation" | "scale" | "rotate"} tabKey
     * @returns {Element[]}
     */
    _GetTabContents(tabKey: "priority" | "translation" | "scale" | "rotate"): Element[];
    /**
     * Helper to build priority fieldset to avoid repetition
     * @param {boolean} isShowingHiddenLayers
     * @private
     */
    _BuildLayerPriorityFieldset(isShowingHiddenLayers: boolean): HTMLFieldSetElement;
    /**
     * Group all layers by their {@link AssetLayer.CopyLayerColor} properties
     * @private
     * @param {readonly AssetLayer[]} layers
     * @returns {Record<"" | LayerName, AssetLayer[]>}
     */
    _GroupLayers(layers: readonly AssetLayer[]): Record<"" | LayerName, AssetLayer[]>;
    /**
     * Return the default item property values for those specified in {@link Layering.PropertyNames}.
     *
     * Values are generally undefined, with the extended item options of certain items overwriting them.
     * @private
     * @returns {ItemProperties}
     */
    _GetDefaults(): ItemProperties;
    /**
     * Update all input elements and buttons with the passed {@link Layering.Readonly} status.
     * @param {boolean} isReadonly
     * @private
     */
    _ApplyReadonly(isReadonly: boolean): void;
    /**
     * Initialize the layering subscreen
     * @param {Item} item - The affected item
     * @param {Character} character - The item's owning character
     * @param {null | Partial<LayeringDisplay>} display - The shape of the layering subscreen
     * @param {boolean} reload - Whether we're loading or reloading the screen.
     * A reload pushes any current changes towards the server and reinitializes all DOM elements.
     * @param {boolean} readonly - Mark the subscreen as readonly.
     * @returns {Promise<HTMLDivElement>} The div containing the layering subscreen
     */
    Init(item: Item, character: Character, display?: null | Partial<LayeringDisplay>, reload?: boolean, readonly?: boolean): Promise<HTMLDivElement>;
    /**
     * Apply translation to the layering screen
     * @private
     */
    _ApplyTranslations(): void;
    Load(): Promise<void>;
    Resize(load: boolean): void;
    Unload(): void;
    /**
     * @satisfies {ScreenExitHandler}
     * @param {boolean} reload - Whether the exit call is part of a reload (see {@link Layering.Init})
     */
    Exit(reload?: boolean): void;
    /**
     * Register screen-specific callbacks to-be executed after calling {@link Layering.Exit}.
     *
     * Callbacks registered herein must be used _exclusively_ for setting up the next screen, and not for tearing down the layering sub screen.
     * As such, they are ignored when performing a reload of the layering sub screen (see {@link Layering.Init})
     * @param {readonly LayeringExitOptions[]} options
     */
    RegisterExitCallbacks(...options: readonly LayeringExitOptions[]): void;
};
