declare namespace CraftingSlots {
    let _observers: Map<"scroll", IntersectionObserver>;
    namespace eventListeners {
        function clickExit(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickUpload(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickDownload(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickSlot(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickModeAcceptSlotDelete(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickModeAcceptSlotReorder(this: HTMLButtonElement, ev: PointerEvent): void;
        function clickSectionCollapse(this: HTMLButtonElement, ev: PointerEvent): void;
        function inputSearch(this: HTMLInputElement, ev: Event): void;
        function keydownSearch(this: HTMLInputElement, ev: KeyboardEvent): void;
        function changeModeSelect(this: HTMLSelectElement, ev: Event): void;
        function dragover(this: HTMLFieldSetElement, ev: DragEvent): void;
        function drop(this: HTMLFieldSetElement, ev: DragEvent): void;
        function dragend(this: HTMLElement, ev: DragEvent): void;
        function dragstart(this: HTMLDivElement, ev: DragEvent): void;
        function dragenter(this: HTMLLIElement, ev: DragEvent): void;
        function dragleave(this: HTMLLIElement, ev: DragEvent): void;
    }
    namespace ids {
        let root: "crafting-slot-screen";
        let dragImage: "crafting-slot-drag-image";
    }
    let modeData: CraftingSlotModeData;
    const modeKeys: ReadonlySet<CraftingSlotModes>;
    /**
     * Construct click listeners for the crafting slot buttons in the `Delete` & `Reorder` modes.
     *
     * See {@link CraftingSlots.eventListeners.clickSlot} for the `Slot`.
     * private
     * @param {CraftingSlotModes} mode
     */
    function _getMultiSelectListeners(mode: CraftingSlotModes): {
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
    function _isElementVisible(el: Element, parent: Element): boolean;
    /**
     * Construct a single crafting slot `<section>` header or, if it already exists, clear if of existing slot buttons
     * private
     * @param {number} pageIndex - The (0-based) index of the item page as represented by the `<section>`
     * @param {{ craftsPerPage: number, nCrafts: number }} options
     * @returns {{ section: HTMLElement, list: HTMLUListElement }} The section and the button list embedded therein
     */
    function _createButtonSection(pageIndex: number, options: {
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
    function _createButtonAllSections(mode: CraftingSlotModes, options?: null | {
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
    function _applyModeData(mode: CraftingSlotModes, modeArgs: readonly CraftingSlotsMode.Args[]): void;
    /**
     * Use {@link CraftingModeSet} instead.
     * private
     * @param {CraftingSlotModes} mode
     */
    function _changeMode(mode: CraftingSlotModes): void;
    /**
     * Construct a crafting Slots-esque screen
     * @param {null | { id?: string, mode?: CraftingSlotModes, craftsPerPage?: number }} options Various options
     * @returns {{ screen: HTMLElement, observer: IntersectionObserver }} The screen and its intersection observer as used for the nav bar
     */
    function createScreen(options?: null | {
        id?: string;
        mode?: CraftingSlotModes;
        craftsPerPage?: number;
    }): {
        screen: HTMLElement;
        observer: IntersectionObserver;
    };
    let Load: ScreenLoadHandler;
    function Resize(load: boolean): void;
    /**
     * @satisfies {ScreenExitHandler}
     * @param {boolean} [allowDeselect] - Whether exit calls are allowed to clear the current selection in `Delete` and `Reorder`, rather than always exiting the screen
     * @returns {boolean} Whether a deselect-esque action was actually performed
     */
    function Exit(allowDeselect?: boolean): boolean;
    function Unload(): void;
    function KeyDown(event: KeyboardEvent): boolean;
    function Paste(event: ClipboardEvent): void;
}
