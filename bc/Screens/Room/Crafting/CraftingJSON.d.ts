/**
 * Namespace for encoding & decoding crafting inventories to and from JSON
 */
declare var CraftingJSON: {
    /**
     * A cache of imported crafting items
     * private
     * @type {null | { name: string, status: CraftingStatusType, craft: null | CraftingItem }[]}
     */
    _craftListCache: null | {
        name: string;
        status: CraftingStatusType;
        craft: null | CraftingItem;
    }[];
    /** Get the event listeners for drag and dropping */
    getDragListeners(): {
        dragenter: (this: HTMLElement, ev: DragEvent) => void;
        dragleave: (this: HTMLElement, ev: DragEvent) => void;
        dragstart: (this: HTMLElement, ev: DragEvent) => void;
    };
    /**
     * private
     * @param {Element} fieldset
     * @param {null | Element} radioContainer
     * @param {Map<{ inputNew: HTMLInputElement, inputOld: HTMLInputElement }, boolean>} checkLog
     */
    _queueAdvance(fieldset: Element, radioContainer: null | Element, checkLog: Map<{
        inputNew: HTMLInputElement;
        inputOld: HTMLInputElement;
    }, boolean>): void;
    /**
     * private
     * @param {null | HTMLElement} el
     * @returns {el is HTMLElement}
     */
    _isTooltip(el: null | HTMLElement): el is HTMLElement;
    /** @satisfies {Record<string, (this: HTMLElement, ev: Event) => any>} */
    eventListeners: {
        focusTooltip(this: HTMLElement): void;
        blurTooltip(this: HTMLElement): void;
        hoverinTooltip(this: HTMLElement): void;
        hoveroutTooltip(this: HTMLElement): void;
        dragover(this: HTMLElement, ev: DragEvent): void;
        drop(this: HTMLElement, ev: DragEvent): void;
        dragend(this: HTMLElement, ev: DragEvent): void;
        clickCancel(): void;
        clickAccept(this: HTMLElement, ev: Event): void;
        /** @type {(this: HTMLInputElement) => Promise<void>} */
        changeFile: (this: HTMLInputElement) => Promise<void>;
        inputFile(this: HTMLInputElement): void;
        clickSelectNew(this: HTMLElement): void;
        clickSelectOld(this: HTMLElement): void;
        clickError(this: HTMLElement): void;
        inputSearch(this: HTMLInputElement): void;
        focusSearch(this: HTMLInputElement): void;
    };
    /**
     * Encode the passed list of crafting items into a JSON-valid object
     * @param {readonly (null | CraftingItem)[]} crafts - The list of crafting items
     * @returns {CraftingJSON.DataEncoded} The encoded object of JSON-valid crafts
     */
    encode(crafts: readonly (null | CraftingItem)[]): CraftingJSON.DataEncoded;
    /**
     * Decode the passed stringified object of crafting JSON data
     * @param {string} craftsJSON - The stringified and to-be decoded crafted JSON data
     * @returns {CraftingJSON.ParsingOutput} - The decoded crafted JSON data
     */
    decode(craftsJSON: string): CraftingJSON.ParsingOutput;
    /**
     * Return a single `<label>`-embedded `<input type="radio">` element
     * @param {null | CraftingItem} craft
     * @param {string} tooltipID
     * @param {{ name: string, checked: boolean, disabled: boolean, value: string }} options
     * @returns {HTMLElement}
     */
    createRadio(craft: null | CraftingItem, tooltipID: string, options: {
        name: string;
        checked: boolean;
        disabled: boolean;
        value: string;
    }): HTMLElement;
    /**
     * Return a list of `<input type="radio">`-containing `<fieldset>` elements
     * @param {readonly { name: string, status: CraftingStatusType, craft: null | CraftingItem }[]} items
     * @param {Node} tooltipContainer
     */
    createRadioGroups(items: readonly {
        name: string;
        status: CraftingStatusType;
        craft: null | CraftingItem;
    }[], tooltipContainer: Node): HTMLFieldSetElement[];
    /**
     * Create and return the `<dialog>` and its shadowroot-containing `<div>` parent
     * @param {null | Node} parent The parent node, if any
     */
    createDialog(parent?: null | Node): {
        root: HTMLDivElement;
        dialog: HTMLDialogElement;
    };
};
