/** Namespace for managing the various crafting `Slots`-related modes */
declare var CraftingSlots: {
    /**
     * private
     * @readonly
     * @type {Map<"scroll", IntersectionObserver>}
     */
    _observers: Map<"scroll", IntersectionObserver>;
    /**
     * @readonly
     * @satisfies {Record<string, (this: HTMLElement, ev: Event) => any>}
     */
    eventListeners: {
        clickExit(this: HTMLButtonElement, ev: PointerEvent): void;
        clickUpload(this: HTMLButtonElement, ev: PointerEvent): void;
        clickDownload(this: HTMLButtonElement, ev: PointerEvent): void;
        clickSlot(this: HTMLButtonElement, ev: PointerEvent): void;
        clickModeAcceptSlotDelete(this: HTMLButtonElement, ev: PointerEvent): void;
        clickModeAcceptSlotReorder(this: HTMLButtonElement, ev: PointerEvent): void;
        clickSectionCollapse(this: HTMLButtonElement, ev: PointerEvent): void;
        inputSearch(this: HTMLInputElement, ev: Event): void;
        keydownSearch(this: HTMLInputElement, ev: KeyboardEvent): void;
        changeModeSelect(this: HTMLSelectElement, ev: Event): void;
        dragover(this: HTMLFieldSetElement, ev: DragEvent): void;
        drop(this: HTMLFieldSetElement, ev: DragEvent): void;
        dragend(this: HTMLElement, ev: DragEvent): void;
        dragstart(this: HTMLDivElement, ev: DragEvent): void;
        dragenter(this: HTMLLIElement, ev: DragEvent): void;
        dragleave(this: HTMLLIElement, ev: DragEvent): void;
    };
    /**
     * @readonly
     * @satisfies {Record<string, string>}
     */
    ids: {
        readonly root: "crafting-slot-screen";
        readonly dragImage: "crafting-slot-drag-image";
    };
    /**
     * An object for registering all crafting slot modes
     * @readonly
     * @type {CraftingSlotModeData}
     */
    modeData: CraftingSlotModeData;
    /**
     * Get a set of all registered crafting slot modes.
     * @type {ReadonlySet<CraftingSlotModes>}
     */
    readonly modeKeys: ReadonlySet<CraftingSlotModes>;
    /**
     * Construct click listeners for the crafting slot buttons in the `Delete` & `Reorder` modes.
     *
     * See {@link CraftingSlots.eventListeners.clickSlot} for the `Slot`.
     * private
     * @param {CraftingSlotModes} mode
     */
    _getMultiSelectListeners(mode: CraftingSlotModes): {
        click: (this: HTMLButtonElement, ev: PointerEvent) => void;
        focus: (this: HTMLButtonElement, ev: FocusEvent) => void;
    };
    /**
     * Check wether an element is fully vissible within its parent
     * private
     * @param {Element} el
     * @param {Element} parent
     * @returns {boolean}
     */
    _isElementVisible(el: Element, parent: Element): boolean;
    /**
     * Construct a single crafting slot `<section>` header or, if it already exists, clear if of existing slot buttons
     * private
     * @param {number} pageIndex - The (0-based) index of the item page as represented by the `<section>`
     * @param {{ craftsPerPage: number, nCrafts: number }} options
     * @returns {{ section: HTMLElement, list: HTMLUListElement }} The section and the button list embedded therein
     */
    _createButtonSection(pageIndex: number, options: {
        craftsPerPage: number;
        nCrafts: number;
    }): {
        section: HTMLElement;
        list: HTMLUListElement;
    };
    /**
     * Construct all the various crafting slot `<section>`s, each representing a single "page".
     * private
     * @param {CraftingSlotModes} mode
     * @param {null | { craftsPerPage?: number }} options
     * @returns {{ sections: HTMLElement[], modeArgs: CraftingSlotsMode.Args[] }}
     */
    _createButtonAllSections(mode: CraftingSlotModes, options?: null | {
        craftsPerPage?: number;
    }): {
        sections: HTMLElement[];
        modeArgs: CraftingSlotsMode.Args[];
    };
    /**
     * private
     * @param {CraftingSlotModes} mode
     * @param {readonly CraftingSlotsMode.Args[]} modeArgs
     */
    _applyModeData(mode: CraftingSlotModes, modeArgs: readonly CraftingSlotsMode.Args[]): void;
    /**
     * Use {@link CraftingModeSet} instead.
     * private
     * @param {CraftingSlotModes} mode
     */
    _changeMode(mode: CraftingSlotModes): void;
    /**
     * Construct a crafting Slots-esque screen
     * @param {null | { id?: string, mode?: CraftingSlotModes, craftsPerPage?: number }} options Various options
     * @returns {{ screen: HTMLElement, observer: IntersectionObserver }} The screen and its intersection observer as used for the nav bar
     */
    createScreen(options?: null | {
        id?: string;
        mode?: CraftingSlotModes;
        craftsPerPage?: number;
    }): {
        screen: HTMLElement;
        observer: IntersectionObserver;
    };
    /** @type {ScreenLoadHandler} */
    Load: ScreenLoadHandler;
    Resize(load: boolean): void;
    /**
     * @satisfies {ScreenExitHandler}
     * @param {boolean} [allowDeselect] - Whether exit calls are allowed to clear the current selection in `Delete` and `Reorder`, rather than always exiting the screen
     * @returns {boolean} Whether a deselect-esque action was actually performed
     */
    Exit(allowDeselect?: boolean): boolean;
    Unload(): void;
    KeyDown(event: KeyboardEvent): boolean;
    Paste(event: ClipboardEvent): void;
};
