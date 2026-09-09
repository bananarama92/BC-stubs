/**
 * Slot preview canvas size/zoom. Previews display much smaller than the full character,
 * so a half-res buffer saves fill-rate without looking soft on tablets (also `CommonIsMobile`).
 * @returns {{ width: number, height: number, zoom: number }}
 */
declare function WardrobeGetSlotCanvasSize(): {
    width: number;
    height: number;
    zoom: number;
};
declare function WardrobeLoad(): Promise<void>;
/**
 * Shows the wardrobe screen. This function is called dynamically on a repeated basis. So don't call complex functions
 * or use extended loops in this function.
 * @returns {void} - Nothing
 */
declare function WardrobeRun(): void;
declare function WardrobeClick(event: PointerEvent): void;
declare function WardrobeResize(load: boolean): void;
/**
 * Shrink visible slot names so they fit their label box after a layout change.
 * @returns {void} - Nothing
 */
declare function WardrobeFitSlotLabels(): void;
declare function WardrobeKeyDown(event: KeyboardEvent): boolean;
declare function WardrobeExit(): void;
/**
 * Unload the Wardrobe screen
 */
declare function WardrobeUnload(): void;
/**
 * Removes all wardrobe preview characters.
 * @returns {void} - Nothing
 */
declare function WardrobeClearCharacters(): void;
/**
 * Slot / action-preview dummies use a `wardrobe-` CharacterID so {@link WardrobeGroupAccessible} treats them like the player.
 * @param {Character} C
 * @returns {boolean}
 */
declare function WardrobeIsPreviewCharacter(C: Character): boolean;
/**
 * Character drawn on the main wardrobe canvas.
 * Default: current character. Load hover: FastLoad result onto the current character.
 * @returns {Character | null}
 */
declare function WardrobeGetMainPreviewCharacter(): Character | null;
/**
 * Character drawn on the side wardrobe canvas while a slot is open.
 * Default: selected slot. Save hover: how the slot will look after saving.
 * @returns {Character | null}
 */
declare function WardrobeGetSidePreviewCharacter(): Character | null;
/**
 * Whether the side character canvas should be visible.
 * @returns {boolean}
 */
declare function WardrobeShouldShowSidePreview(): boolean;
/**
 * Sync side-canvas visibility with the current selection / action preview.
 * @returns {void} - Nothing
 */
declare function WardrobeUpdateSidePreviewVisibility(): void;
/**
 * @param {null | WardrobeActionPreview} action
 * @param {boolean} [force]
 * @param {number} [slot] - Slot to preview; defaults to {@link WardrobeSelection}.
 * @returns {void} - Nothing
 */
declare function WardrobeSetActionPreview(action: null | WardrobeActionPreview, force?: boolean, slot?: number): void;
/**
 * @param {string} characterId
 * @returns {void} - Nothing
 */
declare function WardrobeDeletePreviewCharacter(characterId: string): void;
/**
 * Delete temporary Load/Save preview characters.
 * @returns {void} - Nothing
 */
declare function WardrobeClearActionPreviewCharacters(): void;
/**
 * Build a character that mirrors applying {@link WardrobeFastLoad} to {@link Wardrobe.selectedCharacter}.
 * @returns {Character | null}
 */
declare function WardrobeBuildLoadPreviewCharacter(): Character | null;
/**
 * Build a character that mirrors how the selected slot will look after {@link WardrobeFastSave}.
 * With {@link Wardrobe.excludeBodyparts}, keeps the side dummy's body and applies the main dummy's clothes.
 * @returns {Character | null}
 */
declare function WardrobeBuildSavePreviewCharacter(): Character | null;
/**
 * Pointer/focus handlers so Load/Save preview the appearance that action would apply.
 * @param {WardrobeActionPreview} action
 * @param {() => number | null} [getSlot] - Slot to preview for grid Load; defaults to {@link WardrobeSelection}.
 * @returns {Partial<Record<"button", Omit<HTMLOptions<"button">, "tag">>>}
 */
declare function WardrobeActionPreviewButtonOptions(action: WardrobeActionPreview, getSlot?: () => number | null): Partial<Record<"button", Omit<HTMLOptions<"button">, "tag">>>;
/**
 * Outfit currently shown in a visible grid cell.
 * @param {number} cellIndex
 * @returns {number | null}
 */
declare function WardrobeGetVisibleSlot(cellIndex: number): number | null;
/**
 * Loads the player's wardrobe safe spots. If a spot is not named yet, initializes it with the player's name
 * @deprecated Handled at login
 * @returns {void} - Nothing
 */
declare function WardrobeLoadCharacterNames(): void;
/**
 * Makes sure the wardrobe is of the correct length.
 * If someone tampered with the wardrobe's size, all extended slots are deleted.
 * @returns {void} - Nothing
 */
declare function WardrobeFixLength(): void;
/**
 * Reset wardrobe preview characters. Characters are loaded lazily for the visible page.
 * @returns {void} - Nothing
 */
declare function WardrobeLoadCharacters(): void;
/**
 * Loads the preview character for a wardrobe slot if it is not loaded yet.
 * @param {number} slot
 * @returns {Character | null}
 */
declare function WardrobeEnsureSlotCharacter(slot: number): Character | null;
/**
 * Ensure preview characters exist for the current page (and selected overlay slot).
 * Releases off-page characters to keep memory bounded.
 * @param {number[]} [filteredSlots]
 * @returns {void} - Nothing
 */
declare function WardrobeEnsureVisibleCharacters(filteredSlots?: number[]): void;
/**
 * Open the wardrobe screen with the given character as a target
 * @param {Character} C
 */
declare function WardrobeOpenCharacter(C: Character): Promise<void>;
/**
 * Advance to the next reordering mode, or set the mode to the specified
 * value.  The reordering mode cycles through the values:
 * "None" -> "Select" -> "Place"
 *
 * @param {WardrobeReorderType | null} newMode - The mode to set.  If null, advance to next mode.
 */
declare function WardrobeReorderModeSet(newMode?: WardrobeReorderType | null): void;
/**
 * Set a wardrobe character name, sync it with server
 * @param {number} W - The number of the wardrobe slot to save
 * @param {string} Name - The name of the wardrobe slot
 * @param {boolean} [Push=false] -If set to true, the changes are pushed to the server
 */
declare function WardrobeSetCharacterName(W: number, Name: string, Push?: boolean): void;
/**
 * Reduces a given asset to the attributes needed for the wardrobe
 * @param {Item} A - The asset that should be reduced
 * @returns {ItemBundle} - The bundled asset
 */
declare function WardrobeAssetBundle(A: Item): ItemBundle;
/**
 * Load character appearance from wardrobe, only load clothes on others
 * @param {Character} C - The character the appearance should be loaded for
 * @param {number} W - The spot in the wardrobe the appearance should be loaded to
 * @param {boolean} [Update=false] - If set to true, the appearance will be updated to the server
 * @param {WardrobeFastLoadOptions} [Options]
 * @returns {void} - Nothing
 */
declare function WardrobeFastLoad(C: Character, W: number, Update?: boolean, Options?: WardrobeFastLoadOptions): void;
/**
 * Build the appearance bundle that {@link WardrobeFastSave} would write for a character.
 * When {@link Wardrobe.excludeBodyparts} is set, only clothing is saved (no body groups).
 * @param {Character} C
 * @returns {ItemBundle[]}
 */
declare function WardrobeBuildAppearanceBundle(C: Character): ItemBundle[];
/**
 * Refresh the slot dummy after a save. Clothes-only saves keep the existing dummy body
 * (or the source character's body when the slot was empty).
 * @param {number} slot
 * @param {Character} source
 * @returns {void} - Nothing
 */
declare function WardrobeRefreshSlotCharacter(slot: number, source: Character): void;
/**
 * Saves character appearance in player's wardrobe, use player's body as base for others
 * @param {Character} C - The character, whose appearance should be saved
 * @param {number} W - The spot in the wardrobe the current outfit should be saved to
 * @param {boolean} [Push=false] - If set to true, the wardrobe is saved on the server
 * @returns {void} - Nothing
 */
declare function WardrobeFastSave(C: Character, W: number, Push?: boolean): void;
/**
 * Swap two slots in the wardrobe.  Will silently do nothing if either
 * index is out of range.
 *
 * @param {number} a - Slot index
 * @param {number} b - The other slot index
 * @returns {void} - Nothing
 */
declare function WardrobeSwapSlots(a: number, b: number): void;
/**
 * Unconditionally pushes entire wardrobe to the server.  Used primarily after
 * reordering the wardrobe slots.
 *
 * @returns {void} - Nothing
 */
declare function WardrobePushAll(): void;
/** @returns {boolean} */
declare function WardrobeShowsCharacters(): boolean;
/** @returns {number} */
declare function WardrobeGetSlotsPerPage(): number;
/**
 * Grid columns/rows for the current wardrobe display mode.
 * @returns {{ columns: number, rows: number }}
 */
declare function WardrobeGetGridDimensions(): {
    columns: number;
    rows: number;
};
/**
 * @param {number} slot
 * @returns {string}
 */
declare function WardrobeGetSlotIndexLabel(slot: number): string;
/**
 * Invalidate cached canvas blits after appearance or DOM canvas changes.
 * @param {string} [canvasId] - Specific canvas, or all when omitted
 * @returns {void} - Nothing
 */
declare function WardrobeInvalidateCanvasCache(canvasId?: string): void;
/**
 * Resolve a cached 2D context for a wardrobe canvas.
 * @param {string} canvasId
 * @returns {{ canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, signature: string } | null}
 */
declare function WardrobeGetCanvasCacheEntry(canvasId: string): {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    signature: string;
} | null;
/**
 * Draw a character onto a wardrobe DOM canvas, skipping the blit when nothing changed.
 * @param {string} canvasId
 * @param {Character} character
 * @param {number} [zoom=1]
 * @returns {void} - Nothing
 */
declare function WardrobeDrawToCanvas(canvasId: string, character: Character, zoom?: number): void;
declare function WardrobeCreateMenuButtons(): HTMLButtonElement[];
/**
 * @param {number} slot
 * @returns {void} - Nothing
 */
declare function WardrobeTogglePreviewOverlay(slot: number): void;
/**
 * @param {string} id
 * @param {object} [options]
 * @param {ParentNode} [options.parent]
 * @param {boolean} [options.hidden]
 * @returns {HTMLCanvasElement}
 */
declare function WardrobeCreateCharacterCanvas(id: string, { parent, hidden }?: {
    parent?: ParentNode | undefined;
    hidden?: boolean | undefined;
}): HTMLCanvasElement;
/**
 * Create DOM controls used by the wardrobe screen.
 * @returns {void} - Nothing
 */
declare function WardrobeCreateElements(): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeCreateOutfitSlots(): void;
/**
 * @param {number} slot
 * @returns {void} - Nothing
 */
declare function WardrobeHandleSlotActivate(slot: number): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeToggleCharacterPreviews(): void;
/**
 * Update DOM controls with the current wardrobe state.
 * @param {number[]} [filteredSlots]
 * @returns {void} - Nothing
 */
declare function WardrobeUpdateElements(filteredSlots?: number[]): void;
/**
 * @param {number} slot
 * @returns {boolean}
 */
declare function WardrobeIsSlotEmpty(slot: number): boolean;
/**
 * @param {number} slot
 * @returns {string}
 */
declare function WardrobeGetOutfitName(slot: number): string;
/**
 * @returns {string}
 */
declare function WardrobeGetStatusText(): string;
/**
 * Invalidate cached outfit filtering.
 * @returns {void} - Nothing
 */
declare function WardrobeInvalidateFilteredSlots(): void;
/**
 * @returns {number[]}
 */
declare function WardrobeGetFilteredSlots(): number[];
/**
 * @param {string} search
 * @param {boolean} [resetOffset]
 * @returns {void} - Nothing
 */
declare function WardrobeSetSearch(search: string, resetOffset?: boolean): void;
/**
 * @this {HTMLInputElement}
 * @returns {void} - Nothing
 */
declare function WardrobeSearchInput(this: HTMLInputElement): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeSyncNameInput(): void;
declare function WardrobeNameKeyDown(event: KeyboardEvent): boolean;
/**
 * @param {1 | -1} change
 * @returns {void} - Nothing
 */
declare function WardrobeChangePage(change: 1 | -1): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeDeleteSelectedOutfit(): void;
/**
 * @returns {boolean}
 */
declare function WardrobeRenameSelectedOutfit(push?: boolean): boolean;
/**
 * Confirm and apply a wardrobe slot onto the current character.
 * @param {number} slot
 * @returns {void} - Nothing
 */
declare function WardrobeLoadOutfit(slot: number): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeSaveSelectedOutfit(): void;
/**
 * @returns {void} - Nothing
 */
declare function WardrobeExcludeBodypartsChange(): void;
/**
 * Returns the expressions of character C as a single big object
 * @param {Character} C - The character whose expressions should be returned
 * @returns {Partial<Record<ExpressionGroupName, ExpressionName>>} Expression - The expresssion of a character
 */
declare function WardrobeGetExpression(C: Character): Partial<Record<ExpressionGroupName, ExpressionName>>;
/**
 * Checks if a given group of a character can be accessed.
 * @param {Character} C - The character in the wardrobe
 * @param {AssetGroup} Group - The group to check for accessibility
 * @param {object} [Options] - Options to use for the check
 * @param {boolean} Options.ExcludeNonCloth - Removes anything that's not clothing.
 * @returns {boolean} - Whether the zone can be altered or not.
 */
declare function WardrobeGroupAccessible(C: Character, Group: AssetGroup, Options?: {
    ExcludeNonCloth: boolean;
}): boolean;
declare var WardrobeBackground: string;
/** @type {(Character | null)[]} */
declare var WardrobeCharacter: (Character | null)[];
declare var WardrobeSelection: number;
declare var WardrobeOffset: number;
declare var WardrobeSize: number;
/** @type {WardrobeReorderType} */
declare var WardrobeReorderMode: WardrobeReorderType;
/** @type {number[]} */
declare var WardrobeReorderList: number[];
declare namespace Wardrobe {
    let previewColumns: number;
    let previewRows: number;
    function previewPerPage(): number;
    let labelColumns: number;
    let labelRows: number;
    function labelPerPage(): number;
    let search: string;
    let selectedCharacter: Character;
    let excludeBodyparts: boolean;
    let returnScreen: ScreenSpecifier | null;
    let appearanceBackup: string | null;
    let filteredSlotsCache: number[] | null;
    let filteredSlotsQuery: string | null;
    let filteredSlotsSize: number;
    let canvasCache: Map<string, {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        signature: string;
    }>;
    let drawGeneration: number;
    let emptySlotImage: string;
    let filledSlotImage: string;
    let previewAction: null | WardrobeActionPreview;
    let previewSlot: number;
    let previewLocked: boolean;
    let previewLoadCharacter: Character | null;
    let previewSaveCharacter: Character | null;
    namespace characterPreview {
        let width: number;
        let height: number;
        let mainX: number;
        let sideX: number;
    }
    namespace inspectorRect {
        export let x: number;
        export let y: number;
        let width_1: number;
        export { width_1 as width };
        let height_1: number;
        export { height_1 as height };
    }
    namespace grid {
        let x_1: number;
        export { x_1 as x };
        let y_1: number;
        export { y_1 as y };
        let width_2: number;
        export { width_2 as width };
        let height_2: number;
        export { height_2 as height };
    }
}
declare const WardrobeID: Readonly<{
    screen: "wardrobe-screen";
    previous: "wardrobe-previous";
    next: "wardrobe-next";
    page: "wardrobe-page";
    load: "wardrobe-load";
    save: "wardrobe-save";
    delete: "wardrobe-delete";
    rename: "wardrobe-rename";
    search: "wardrobe-search";
    name: "wardrobe-name";
    noMatches: "wardrobe-no-matches";
    status: "wardrobe-status";
    reorder: "wardrobe-reorder";
    exit: "wardrobe-exit";
    excludeBodyparts: "wardrobe-exclude-bodyparts";
    showPreviews: "wardrobe-show-previews";
    previewOverlay: "wardrobe-preview-overlay";
    previewOverlayClose: "wardrobe-preview-overlay-close";
    mainCanvas: "wardrobe-main-canvas";
    sideCanvas: "wardrobe-side-canvas";
    loadPreview: "wardrobe-load-preview";
    savePreview: "wardrobe-save-preview";
    slotGrid: "wardrobe-slot-grid";
    /**
     * @param {number} index
     * @returns {string}
     */
    slotCell: (index: number) => string;
    /**
     * @param {number} index
     * @returns {string}
     */
    slotButton: (index: number) => string;
    /**
     * @param {number} index
     * @returns {string}
     */
    slotCanvas: (index: number) => string;
    /**
     * @param {number} index
     * @returns {string}
     */
    slotEmpty: (index: number) => string;
    /**
     * @param {number} index
     * @returns {string}
     */
    slotLoad: (index: number) => string;
}>;
