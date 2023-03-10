/**
 * Get an asset-appropriate array with button coordinates, based on the number to be displayed per page.
 * @param {Asset} Asset - The relevant asset
 * @param {boolean} ShowImages - Whether images should be shown or not.
 * Note that whether an asset is clothing-based or not takes priority over this option.
 * @returns {[number, number][][]} The coordinates array
 */
declare function ExtendedItemGetXY(Asset: Asset, ShowImages?: boolean): [number, number][][];
/**
 * Initialize the extended item properties
 * @param {Item} Item - The item in question
 * @param {Character} C - The character that has the item equiped
 * @param {boolean} Refresh - Whether the character and relevant item should be refreshed
 * @param {null | ExtendedArchetype} Archetype - The item's archetype; defaults to {@link Asset.Archetype}.
 * A value should generally only be provided here if one is initializing an archetypical subscreen.
 * @param {string} Type - The item's type. Only relevant in the case of {@link VariableHeightData}
 * @returns {void} Nothing
 */
declare function ExtendedItemInit(Item: Item, C: Character, Refresh?: boolean, Archetype?: null | ExtendedArchetype, Type?: string): void;
/**
 * Helper init function for extended items without an archetype.
 * Note that on the long term this function should ideally be removed in favor of adding appropriate archetypes.
 * @param {Item} Item - The item in question
 * @param {Character} C - The character that has the item equiped
 * @param {ItemProperties} Properties - A record that maps property keys to their default value.
 *        The type of each value is used for basic validation.
 * @param {boolean} Refresh - Whether the character and relevant item should be refreshed
 * @returns {void} Nothing
 */
declare function ExtendedItemInitNoArch(Item: Item, C: Character, Properties: ItemProperties, Refresh?: boolean): void;
/**
 * Loads the item's extended item menu
 * @param {string} DialogKey - The dialog key for the message to display prompting the player to select an extended
 *     type
 * @returns {void} Nothing
 */
declare function ExtendedItemLoad(DialogKey: string): void;
/**
 * Draws the extended item type selection screen
 * @param {readonly ExtendedItemOption[]} Options - An Array of type definitions for each allowed extended type. The first item
 *     in the array should be the default option.
 * @param {string} DialogPrefix - The prefix to the dialog keys for the display strings describing each extended type.
 *     The full dialog key will be <Prefix><Option.Name>
 * @param {number} [OptionsPerPage] - The number of options displayed on each page
 * @param {boolean} [ShowImages=true] - Denotes whether images should be shown for the specific item
 * @param {readonly [number, number][]} [XYPositions] - An array with custom X & Y coordinates of the buttons
 * @returns {void} Nothing
 */
declare function ExtendedItemDraw(Options: readonly ExtendedItemOption[], DialogPrefix: string, OptionsPerPage?: number, ShowImages?: boolean, XYPositions?: readonly [number, number][]): void;
/**
 * Draw a single button in the extended item type selection screen.
 * @param {ExtendedItemOption | ModularItemOption | ModularItemModule} Option - The new extended item option
 * @param {ExtendedItemOption | ModularItemOption} CurrentOption - The current extended item option
 * @param {number} X - The X coordinate of the button
 * @param {number} Y - The Y coordinate of the button
 * @param {string} DialogPrefix - The prefix to the dialog keys for the display strings describing each extended type.
 *     The full dialog key will be <Prefix><Option.Name>
 * @param {boolean} ShowImages - Denotes whether images should be shown for the specific item
 * @param {Item} Item - The item in question; defaults to {@link DialogFocusItem}
 * @param {boolean | null} IsSelected - Whether the button is already selected or not. If `null` compute this value by checking if the item's current type matches `Option`.
 * @see {@link ExtendedItemDraw}
 */
declare function ExtendedItemDrawButton(Option: ExtendedItemOption | ModularItemOption | ModularItemModule, CurrentOption: ExtendedItemOption | ModularItemOption, DialogPrefix: string, X: number, Y: number, ShowImages?: boolean, Item?: Item, IsSelected?: boolean | null): void;
/**
 * Determine the background color for the item option's button
 * @param {Character} C - The character wearing the item
 * @param {ExtendedItemOption | ModularItemOption | ModularItemModule} Option - A type for the extended item
 * @param {ExtendedItemOption | ModularItemOption} CurrentOption - The currently selected option for the item
 * @param {boolean} Hover - TRUE if the mouse cursor is on the button
 * @param {boolean} IsSelected - TRUE if the item's current type matches Option
 * @param {Item} Item - The item in question; defaults to {@link DialogFocusItem}
 * @returns {string} The name or hex code of the color
 */
declare function ExtendedItemGetButtonColor(C: Character, Option: ExtendedItemOption | ModularItemOption | ModularItemModule, CurrentOption: ExtendedItemOption | ModularItemOption, Hover: boolean, IsSelected: boolean, Item?: Item): string;
/**
 * Handles clicks on the extended item type selection screen
 * @param {readonly ExtendedItemOption[]} Options - An Array of type definitions for each allowed extended type. The first item
 *     in the array should be the default option.
 * @param {number} [OptionsPerPage] - The number of options displayed on each page
 * @param {boolean} [ShowImages=true] - Denotes whether images are shown for the specific item
 * @param {[number, number][]} [XYPositions] - An array with custom X & Y coordinates of the buttons
 * @returns {void} Nothing
 */
declare function ExtendedItemClick(Options: readonly ExtendedItemOption[], OptionsPerPage?: number, ShowImages?: boolean, XYPositions?: [number, number][]): void;
/**
 * Exit function for the extended item dialog.
 *
 * Used for:
 *  1. Removing the cache from memory
 *  2. Calling item-appropriate `Exit` functions
 *  3. Setting {@link DialogFocusItem} and {@link ExtendedItemSubscreen} back to `null`
 * @returns {void} - Nothing
 */
declare function ExtendedItemExit(): void;
/**
 * Handler function for setting the type of an extended item
 * @param {Character} C - The character wearing the item
 * @param {readonly ExtendedItemOption[]} Options - An Array of type definitions for each allowed extended type. The first item
 *     in the array should be the default option.
 * @param {ExtendedItemOption} Option - The selected type definition
 * @returns {void} Nothing
 */
declare function ExtendedItemSetType(C: Character, Options: readonly ExtendedItemOption[], Option: ExtendedItemOption): void;
/**
 * Sets a typed item's type and properties to the option provided.
 * @param {Character} C - The character on whom the item is equipped
 * @param {Item} item - The item whose type to set
 * @param {ItemProperties} previousProperty - The typed item options for the item
 * @param {ItemProperties} newProperty - The option to set
 * @param {boolean} [push] - Whether or not appearance updates should be persisted (only applies if the character is the
 * player) - defaults to false.
 * @returns {void} Nothing
 */
declare function ExtendedItemSetOption(C: Character, item: Item, previousProperty: ItemProperties, newProperty: ItemProperties, push?: boolean): void;
/**
 * Handler function called when an option on the type selection screen is clicked
 * @param {Character} C - The character wearing the item
 * @param {readonly ExtendedItemOption[]} Options - An Array of type definitions for each allowed extended type. The first item
 *     in the array should be the default option.
 * @param {ExtendedItemOption} Option - The selected type definition
 * @returns {void} Nothing
 */
declare function ExtendedItemHandleOptionClick(C: Character, Options: readonly ExtendedItemOption[], Option: ExtendedItemOption): void;
/**
 * Checks whether the character meets the requirements for an extended type option. This will check against their Bondage
 * skill if applying the item to another character, or their Self Bondage skill if applying the item to themselves.
 * @param {Item} item - The item in question
 * @param {Character} C - The character in question
 * @param {ExtendedItemOption|ModularItemOption} Option - The selected type definition
 * @param {ExtendedItemOption|ModularItemOption} CurrentOption - The current type definition
 * @returns {string|null} null if the player meets the option requirements. Otherwise a string message informing them
 * of the requirements they do not meet
 */
declare function ExtendedItemRequirementCheckMessage(item: Item, C: Character, Option: ExtendedItemOption | ModularItemOption, CurrentOption: ExtendedItemOption | ModularItemOption): string | null;
/**
 * Checks whether the player is able to select an option based on it's self-selection criteria (whether or not the
 * wearer may select the option)
 * @param {Character} C - The character on whom the bondage is applied
 * @param {ExtendedItemOption | ModularItemOption} Option - The option whose requirements should be checked against
 * @returns {string | undefined} - undefined if the
 */
declare function ExtendedItemCheckSelfSelect(C: Character, Option: ExtendedItemOption | ModularItemOption): string | undefined;
/**
 * Checks whether the player meets an option's self-bondage/bondage skill level requirements
 * @param {Character} C - The character on whom the bondage is applied
 * @param {Item} Item - The item whose options are being checked
 * @param {ExtendedItemOption|ModularItemOption} Option - The option whose requirements should be checked against
 * @returns {string|undefined} - undefined if the player meets the option's skill level requirements. Otherwise returns
 * a string message informing them of the requirements they do not meet.
 */
declare function ExtendedItemCheckSkillRequirements(C: Character, Item: Item, Option: ExtendedItemOption | ModularItemOption): string | undefined;
/**
 * Checks whether the character meets an option's required bought items
 * @param {ExtendedItemOption|ModularItemOption} Option - The option being checked
 * @returns {string|undefined} undefined if the requirement is met, otherwise the error message
 */
declare function ExtendedItemCheckBuyGroups(Option: ExtendedItemOption | ModularItemOption): string | undefined;
/**
 * Checks whether a change from the given current option to the newly selected option is valid.
 * @param {Character} C - The character wearing the item
 * @param {Item} Item - The extended item to validate
 * @param {ExtendedItemOption|ModularItemOption} Option - The selected option
 * @param {ExtendedItemOption|ModularItemOption} CurrentOption - The currently applied option on the item
 * @returns {string} - Returns a non-empty message string if the item failed validation, or an empty string otherwise
 */
declare function ExtendedItemValidate(C: Character, Item: Item, { Prerequisite, AllowLock }: ExtendedItemOption | ModularItemOption, CurrentOption: ExtendedItemOption | ModularItemOption): string;
/**
 * Simple getter for the function prefix used for the passed extended item - used for calling standard
 * extended item functions (e.g. if the currently focused it is the hemp rope arm restraint, this will return
 * "InventoryItemArmsHempRope", allowing functions like InventoryItemArmsHempRopeLoad to be called)
 * @param {Item} Item - The extended item in question; defaults to {@link DialogFocusItem}
 * @returns {string} The extended item function prefix for the currently focused item
 */
declare function ExtendedItemFunctionPrefix(Item?: Item): string;
/**
 * Simple getter for the key of the currently focused extended item in the ExtendedItemOffsets lookup
 * @returns {string} The offset lookup key for the currently focused extended item
 */
declare function ExtendedItemOffsetKey(): string;
/**
 * Gets the pagination offset of the currently focused extended item
 * @returns {number} The pagination offset for the currently focused extended item
 */
declare function ExtendedItemGetOffset(): number;
/**
 * Sets the pagination offset for the currently focused extended item
 * @param {number} Offset - The new offset to set
 * @returns {void} Nothing
 */
declare function ExtendedItemSetOffset(Offset: number): void;
/**
 * Maps a chat tag to a dictionary entry for use in item chatroom messages.
 * @param {Character} C - The target character
 * @param {Asset} asset - The asset for the typed item
 * @param {CommonChatTags} tag - The tag to map to a dictionary entry
 * @returns {ChatMessageDictionaryEntry} - The constructed dictionary entry for the tag
 */
declare function ExtendedItemMapChatTagToDictionaryEntry(C: Character, asset: Asset, tag: CommonChatTags): ChatMessageDictionaryEntry;
/**
 * Construct an array of inventory icons for a given asset and type
 * @param {Character} C - The target character
 * @param {Asset} Asset - The asset for the typed item
 * @param {string | null} Type - The type of the asse
 * @param {readonly EffectName[]} [Effects]
 * @returns {InventoryIcon[]} - The inventory icons
 */
declare function ExtendItemGetIcons(C: Character, Asset: Asset, Type?: string | null, Effects?: readonly EffectName[]): InventoryIcon[];
/**
 * Creates an asset's extended item NPC dialog function
 * @param {Asset} Asset - The asset for the typed item
 * @param {string} FunctionPrefix - The prefix of the new `NpcDialog` function
 * @param {string | ExtendedItemNPCCallback<ExtendedItemOption>} NpcPrefix - A dialog prefix or a function for creating one
 * @returns {void} - Nothing
 */
declare function ExtendedItemCreateNpcDialogFunction(Asset: Asset, FunctionPrefix: string, NpcPrefix: string | ExtendedItemNPCCallback<ExtendedItemOption>): void;
/**
 * Creates an asset's extended item validation function.
 * @param {string} functionPrefix - The prefix of the new `Validate` function
 * @param {null | ExtendedItemValidateScriptHookCallback<any>} ValidationCallback - A custom validation callback
 * @returns {void} Nothing
 */
declare function ExtendedItemCreateValidateFunction(functionPrefix: string, ValidationCallback: null | ExtendedItemValidateScriptHookCallback<any>): void;
/**
 * Helper click function for creating custom buttons, including extended item permission support.
 * @param {string} Name - The name of the button and its pseudo-type
 * @param {number} X - The X coordinate of the button
 * @param {number} Y - The Y coordinate of the button
 * @param {boolean} ShowImages — Denotes whether images should be shown for the specific item
 * @param {boolean} IsSelected - Whether the button is selected or not
 * @returns {void} Nothing
 */
declare function ExtendedItemCustomDraw(Name: string, X: number, Y: number, ShowImages?: boolean, IsSelected?: boolean): void;
/**
 * Helper click function for creating custom buttons, including extended item permission support.
 * @param {string} Name - The name of the button and its pseudo-type
 * @param {() => void} Callback - A callback to be executed whenever the button is clicked and all requirements are met
 * @param {boolean} Worn - `true` if the player is changing permissions for an item they're wearing
 * @returns {boolean} `false` if the item's requirement check failed and `true` otherwise
 */
declare function ExtendedItemCustomClick(Name: string, Callback: () => void, Worn?: boolean): boolean;
/**
 * Helper publish + exit function for creating custom buttons whose clicks exit the dialog menu.
 *
 * If exiting the dialog menu is undesirable then something akin to the following example should be used instead:
 * @example
 * if (ServerPlayerIsInChatRoom()) {
 *     ChatRoomPublishCustomAction(Name, false, Dictionary);
 * }
 * @param {string} Name - Tag of the action to send
 * @param {Character} C - The affected character
 * @param {ChatMessageDictionary | null} Dictionary - Dictionary of tags and data to send to the room (if any).
 * @returns {void} Nothing
 */
declare function ExtendedItemCustomExit(Name: string, C: Character, Dictionary?: ChatMessageDictionary | null): void;
/**
 * Common draw function for drawing the header of the extended item menu screen.
 * Automatically applies any Locked and/or Vibrating options to the preview.
 * @param {number} X - Position of the preview box on the X axis
 * @param {number} Y - Position of the preview box on the Y axis
 * @param {Item} Item - The item for whom the preview box should be drawn
 * @returns {void} Nothing
 */
declare function ExtendedItemDrawHeader(X?: number, Y?: number, Item?: Item): void;
/**
 * Extract the passed item's data from one of the extended item lookup tables
 * @template {ExtendedArchetype} Archetype
 * @param {Item} Item - The item whose data should be extracted
 * @param {Archetype} Archetype - The archetype corresponding to the lookup table
 * @param {string} Type - The item's type. Only relevant in the case of {@link VariableHeightData}
 * @returns {null | ExtendedDataLookupStruct[Archetype]} The item's data or `null` if the lookup failed
 */
declare function ExtendedItemGetData<Archetype extends ExtendedArchetype>(Item: Item, Archetype: Archetype, Type?: string): ExtendedDataLookupStruct[Archetype];
/**
 * Utility file for handling extended items
 */
/**
 * A lookup for the current pagination offset for all extended item options. Offsets are only recorded if the extended
 * item requires pagination. Example format:
 * ```json
 * {
 *     "ItemArms/HempRope": 4,
 *     "ItemArms/Web": 0
 * }
 * ```
 * @type {Record<string, number>}
 * @constant
 */
declare var ExtendedItemOffsets: Record<string, number>;
/**
 * The X & Y co-ordinates of each option's button, based on the number to be displayed per page.
 * @type {[number, number][][]}
 */
declare const ExtendedXY: [number, number][][];
/**
 * The X & Y co-ordinates of each option's button, based on the number to be displayed per page.
 * @type {[number, number][][]}
 */
declare const ExtendedXYWithoutImages: [number, number][][];
/**
 * The X & Y co-ordinates of each option's button, based on the number to be displayed per page.
 * @type {[number, number][][]}
 */
declare const ExtendedXYClothes: [number, number][][];
/** Memoization of the requirements check */
declare const ExtendedItemRequirementCheckMessageMemo: MemoizedFunction<typeof ExtendedItemRequirementCheckMessage>;
/**
 * The current display mode
 * @type {boolean}
 */
declare var ExtendedItemPermissionMode: boolean;
/**
 * Tracks whether a selected option's subscreen is active - if active, the value is the name of the current subscreen's
 * corresponding option
 * @type {string|null}
 */
declare var ExtendedItemSubscreen: string | null;
