/**
* Add a new item by group & name to character inventory
* @param {Character} C - The character that gets the new item added to her inventory
* @param {string} NewItemName - The name of the new item to add
* @param {AssetGroupName} NewItemGroup - The group name of the new item to add
* @param {boolean} [Push=true] - Set to TRUE to push to the server
*/
declare function InventoryAdd(C: Character, NewItemName: string, NewItemGroup: AssetGroupName, Push?: boolean): void;
/**
 * Adds multiple new items by group & name to the character inventory
 * @param {Character} C - The character that gets the new items added to her inventory
 * @param {InventoryBundle[]} NewItems - The new items to add
 * @param {Boolean} [Push=true] - Set to TRUE to push to the server, pushed by default
 */
declare function InventoryAddMany(C: Character, NewItems: InventoryBundle[], Push?: boolean): void;
/**
 * Creates a new item for a character based on asset group and name
 * @param {Character} C - The character to create the item for
 * @param {AssetGroupName} Group - The name of the asset group the item belongs to
 * @param {string} Name - The name of the asset for the item
 * @return {InventoryItem | null} A new item for character using the specified asset name, or null if the specified asset could not be
 *     found in the named group
 */
declare function InventoryItemCreate(C: Character, Group: AssetGroupName, Name: string): InventoryItem | null;
/**
* Deletes an item from the character inventory
* @param {Character} C - The character on which we should remove the item
* @param {string} DelItemName - The name of the item to delete
* @param {AssetGroupName} DelItemGroup - The group name of the item to delete
* @param {boolean} [Push=true] - Set to TRUE to push to the server
* @return {InventoryItem}
*/
declare function InventoryDelete(C: Character, DelItemName: string, DelItemGroup: AssetGroupName, Push?: boolean): InventoryItem;
/**
 * Deletes all currently-owned items from a given group.
 *
 * @param {Character} C - The character to remove items from
 * @param {AssetGroupName} group - The group name to clear
 * @param {boolean} [push=true] - Whether to send an update to the server
 * @return {InventoryItem[]} The list of deleted items
 */
declare function InventoryDeleteGroup(C: Character, group: AssetGroupName, push?: boolean): InventoryItem[];
/**
 * Loads the current inventory for a character, can be loaded from an object of Name/Group or a compressed array using LZString
 * @param {string | readonly ItemBundle[] | Partial<Record<AssetGroupName, readonly string[]>>} Inventory - An array of Name / Group of items to load
 * @return {InventoryBundle[]}
 */
declare function InventoryLoad(Inventory: string | readonly ItemBundle[] | Partial<Record<AssetGroupName, readonly string[]>>, InventoryData: any): InventoryBundle[];
/**
 * Decompress inventory data into an item bundle
 * @param {string} Data - The string of data to load
 * @return {InventoryBundle[]}
 */
declare function InventoryLoadCompressedData(Data: string): InventoryBundle[];
/**
* Creates the inventory data string from current inventory
* @param {Character} C - The character on which we should load the inventory data string
*/
declare function InventoryDataBuild(C: Character): string;
/**
* Checks if the character has the inventory available
* @param {Character} C - The character on which we should remove the item
* @param {string} Name - The name of the item to validate
* @param {AssetGroupName} Group - The group name of the item to validate
*/
declare function InventoryAvailable(C: Character, Name: string, Group: AssetGroupName): boolean;
/**
 * Returns an error message if a prerequisite clashes with the character's items and clothes
 * @param {Character} C - The character on which we check for prerequisites
 * @param {AssetPrerequisite} Prerequisite - The name of the prerequisite
 * @param {null | Asset} asset - The asset (if any) for whom the prerequisite is checked
 * @returns {string} - The error tag, can be converted to an error message
 */
declare function InventoryPrerequisiteMessage(C: Character, Prerequisite: AssetPrerequisite, asset?: null | Asset): string;
/**
 * Prerequisite utility function that returns TRUE if the given character has an item equipped in the provided group
 * whose name matches one of the names in the provided list.
 * @param {Character} C - The character for whom to check equipped items
 * @param {AssetGroupName} ItemGroup - The name of the item group to check
 * @param {readonly string[]} ItemList - A list of item names to check against
 * @returns {boolean} - TRUE if the character has an item from the item list equipped in the named slot, FALSE
 * otherwise
 */
declare function InventoryIsItemInList(C: Character, ItemGroup: AssetGroupName, ItemList: readonly string[]): boolean;
/**
 * Prerequisite utility function that returns TRUE if the given character has an item equipped in the provided group
 * which has the provided prerequisite.
 * @param {Character} C - The character whose items should be checked
 * @param {AssetGroupName} ItemGroup - The name of the item group to check
 * @param {AssetPrerequisite} Prerequisite - The name of the prerequisite to look for
 * @returns {boolean} - TRUE if the character has an item equipped in the named slot which has the named prerequisite,
 * FALSE otherwise
 */
declare function InventoryDoesItemHavePrerequisite(C: Character, ItemGroup: AssetGroupName, Prerequisite: AssetPrerequisite): boolean;
/**
 * Prerequisite utility function to check whether the target group for the given character is blocked by any of the
 * given groups to check.
 * @param {Character} C - The character whose items should be checked
 * @param {AssetGroupItemName} TargetGroup - The name of the group that should be checked for being blocked
 * @param {readonly AssetGroupName[]} GroupsToCheck - The name(s) of the groups whose items should be checked
 * @returns {boolean} - TRUE if the character has an item equipped in any of the given groups to check which blocks the
 * target group, FALSE otherwise.
 */
declare function InventoryDoItemsBlockGroup(C: Character, TargetGroup: AssetGroupItemName, GroupsToCheck: readonly AssetGroupName[]): boolean;
/**
 * Prerequisite utility function to check whether the target group for the given character is exposed by all of the
 * given groups to check.
 * @param {Character} C - The character whose items should be checked
 * @param {AssetGroupItemName} TargetGroup - The name of the group that should be checked for being exposed
 * @param {readonly AssetGroupName[]} GroupsToCheck - The name(s) of the groups whose items should be checked
 * @returns {boolean} - FALSE if the character has an item equipped in ANY of the given groups to check that does not
 * expose the target group. Returns TRUE otherwise.
 */
declare function InventoryDoItemsExposeGroup(C: Character, TargetGroup: AssetGroupItemName, GroupsToCheck: readonly AssetGroupName[]): boolean;
/**
 * Prerequisite utility function that returns TRUE if the given character has an item equipped in any of the named group
 * slots.
 * @param {Character} C - The character whose items should be checked
 * @param {readonly AssetGroupName[]} GroupList - The list of groups to check for items in
 * @returns {boolean} - TRUE if the character has any item equipped in any of the named groups, FALSE otherwise.
 */
declare function InventoryHasItemInAnyGroup(C: Character, GroupList: readonly AssetGroupName[]): boolean;
/**
 * Returns an error message if we cannot add the item, no other items must block that prerequisite; `null` is returned otherwise
 * @param {Character} C - The character on which we check for prerequisites
 * @param {Asset} asset - The asset for which prerequisites should be checked. Any item equipped in the asset's group
 * will be ignored for the purposes of the prerequisite check.
 * @param {AssetPrerequisite | readonly AssetPrerequisite[]} [prerequisites=asset.Prerequisite] - An array of prerequisites or a string for a single
 * prerequisite. If nothing is provided, the asset's default prerequisites will be used
 * @param {readonly AssetPoseName[]} [allowActivePose=asset.AllowActivePose]
 * @returns {string | null} - An error message (if any)
 */
declare function InventoryDisallow(C: Character, asset: Asset, prerequisites?: AssetPrerequisite | readonly AssetPrerequisite[], allowActivePose?: readonly AssetPoseName[]): string | null;
/**
 * Returns TRUE if we can add the item, no other items must block that prerequisite
 * @param {Character} C - The character on which we check for prerequisites
 * @param {Asset} asset - The asset for which prerequisites should be checked. Any item equipped in the asset's group
 * will be ignored for the purposes of the prerequisite check.
 * @param {AssetPrerequisite | readonly AssetPrerequisite[]} [prerequisites=asset.Prerequisite] - An array of prerequisites or a string for a single
 * prerequisite. If nothing is provided, the asset's default prerequisites will be used
 * @param {boolean} [setDialog=true] - If TRUE, set the screen dialog message at the same time
 * @param {readonly AssetPoseName[]} [allowActivePose=asset.AllowActivePose]
 * @returns {boolean} - TRUE if the item can be added to the character
 */
declare function InventoryAllow(C: Character, asset: Asset, prerequisites?: AssetPrerequisite | readonly AssetPrerequisite[], setDialog?: boolean, allowActivePose?: readonly AssetPoseName[]): boolean;
/**
* Gets the current item / cloth worn a specific area (AssetGroup)
* @param {Character} C - The character on which we must check the appearance
* @param {AssetGroupName} AssetGroup - The name of the asset group to scan
* @returns {Item|null} - Returns the appearance which is the item / cloth asset, color and properties
*/
declare function InventoryGet(C: Character, AssetGroup: AssetGroupName): Item | null;
/**
* Applies crafted properties to the item used
* @param {null | Character} Source - The character that used the item (if any)
* @param {Character} Target - The character on which the item is used
* @param {AssetGroupItemName} GroupName - The name of the asset group to scan
* @param {CraftingItem} Craft - The crafted properties to apply
* @param {Boolean} Refresh - TRUE if we must refresh the character
* @param {Boolean} PreConfigureItem - TRUE if the default, pre-configured item state of the crafted item must be (re-)applied
* @param {Boolean} CraftWarn - Whether a warning should logged whenever the crafting validation fails
* @returns {void}
*/
declare function InventoryCraft(Source: null | Character, Target: Character, GroupName: AssetGroupItemName, Craft: CraftingItem, Refresh: boolean, PreConfigureItem?: boolean, CraftWarn?: boolean): void;
/**
* Returns the number of items on a character with a specific property
* @param {Character} C - The character to validate
* @param {CraftingPropertyType} Property - The property to count
* @returns {Number} - The number of times the property is found
*/
declare function InventoryCraftCount(C: Character, Property: CraftingPropertyType): number;
/**
* Returns TRUE if an item as the specified crafted property
* @param {Item} Item - The item to validate
* @param {CraftingPropertyType} Property - The property to check
* @returns {boolean} - TRUE if the property matches
*/
declare function InventoryCraftPropertyIs(Item: Item, Property: CraftingPropertyType): boolean;
/**
 * Makes the character wear an item on a body area
 * @param {Character} C - The character that must wear the item
 * @param {string} AssetName - The name of the asset to wear
 * @param {AssetGroupName} AssetGroup - The name of the asset group to wear
 * @param {string | string[]} [ItemColor] - The hex color of the item, can be undefined or "Default"
 * @param {number} [Difficulty] - The difficulty, on top of the base asset difficulty, to assign to the item
 * @param {number} [MemberNumber] - The member number of the character putting the item on - defaults to -1
 * @param {CraftingItem} [Craft] - The crafting properties of the item
 * @param {boolean} [Refresh] - Whether to refresh the character and push the changes to the server
 * @returns {null | Item} - Thew newly created item or `null` if the asset does not exist
 */
declare function InventoryWear(C: Character, AssetName: string, AssetGroup: AssetGroupName, ItemColor?: string | string[], Difficulty?: number, MemberNumber?: number, Craft?: CraftingItem, Refresh?: boolean): null | Item;
/**
* Sets the difficulty to remove an item for a body area
* @param {Character} C - The character that is wearing the item
* @param {AssetGroupItemName} AssetGroup - The name of the asset group
* @param {number} Difficulty - The new difficulty level to escape from the item
*/
declare function InventorySetDifficulty(C: Character, AssetGroup: AssetGroupItemName, Difficulty: number): void;
/**
* Returns TRUE if there's already a locked item at a given body area
* @param {Character} C - The character that is wearing the item
* @param {AssetGroupItemName} AssetGroup - The name of the asset group (body area)
* @param {Boolean} CheckProperties - Set to TRUE to check for additionnal properties
* @returns {Boolean} - TRUE if the item is locked
*/
declare function InventoryLocked(C: Character, AssetGroup: AssetGroupItemName, CheckProperties: boolean): boolean;
/**
 * Makes the character wear a random item from a body area
 * @param {Character} C - The character that must wear the item
 * @param {AssetGroupName} GroupName - The name of the asset group (body area)
 * @param {number} [Difficulty] - The difficulty, on top of the base asset difficulty, to assign to the item
 * @param {boolean} [Refresh=true] - Do not call CharacterRefresh if false
 * @param {boolean} [MustOwn=false] - If TRUE, only assets that the character owns can be worn. Otherwise any asset can
 * be used
 * @param {boolean} [Extend=true] - Whether or not to randomly extend the item (i.e. set the item type), provided it has
 * an archetype that supports random extension
 * @param {readonly string[]} [AllowedAssets=null] - A list of assets from which one must be selected
 * @param {boolean} [IgnoreRequirements=false] - If True, the group being blocked and prerequisites will not prevent the item being added.
 *  NOTE: Long-term this should be replaced with better checks before calling this function.
 * @returns {Item | null} - The equipped item (if any)
 */
declare function InventoryWearRandom(C: Character, GroupName: AssetGroupName, Difficulty?: number, Refresh?: boolean, MustOwn?: boolean, Extend?: boolean, AllowedAssets?: readonly string[], IgnoreRequirements?: boolean): Item | null;
/**
 * Randomly extends an item (sets an item type, etc.) on a character
 * @param {Character} C - The character wearing the item
 * @param {AssetGroupName} GroupName - The name of the item's group
 * @param {null | Character} [C_Source] - The character setting the new item option. If `null`, assume that it is _not_ the player character.
 * @returns {Item | null} - The equipped item (if any)
 */
declare function InventoryRandomExtend(C: Character, GroupName: AssetGroupName, C_Source?: null | Character): Item | null;
/**
 * Select a random asset from a group, narrowed to the most preferable available options (i.e
 * unblocked/visible/unlimited) based on their binary "rank"
 * @param {Character} C - The character to pick the asset for
 * @param {AssetGroupName} GroupName - The asset group to pick the asset from. Set to an empty string to not filter by group.
 * @param {readonly Asset[]} [AllowedAssets] - Optional parameter: A list of assets from which one can be selected. If not provided,
 *     the full list of all assets is used.
 * @param {boolean} [IgnorePrerequisites=false] - If True, skip the step to check whether prerequisites are met
 *  NOTE: Long-term this should be replaced with better checks before calling this function.
 * @returns {Asset|null} - The randomly selected asset or `null` if none found
 */
declare function InventoryGetRandom(C: Character, GroupName: AssetGroupName, AllowedAssets?: readonly Asset[], IgnorePrerequisites?: boolean): Asset | null;
/**
* Removes a specific item from a character body area
* @param {Character} C - The character on which we must remove the item
* @param {AssetGroupName} AssetGroup - The name of the asset group (body area)
* @param {boolean} [Refresh] - Whether or not to trigger a character refresh. Defaults to false
*/
declare function InventoryRemove(C: Character, AssetGroup: AssetGroupName, Refresh?: boolean): void;
/**
* Returns TRUE if the body area (Asset Group) for a character is blocked for either restraints (default) or activities and cannot be used
* @param {Character} C - The character on which we validate the group
* @param {null | AssetGroupItemName} [GroupName] - The name of the asset group (body area), defaults to `C.FocusGroup`
* @param {boolean} [Activity=false] - if TRUE check if activity is allowed on the asset group
* @returns {boolean} - TRUE if the group is blocked
*/
declare function InventoryGroupIsBlockedForCharacter(C: Character, GroupName?: null | AssetGroupItemName, Activity?: boolean): boolean;
/**
 * Returns TRUE if no item can be used by the player on the character because of the map distance
 * @param {Character} C - The character on which we validate the distance
 * @returns {boolean} - TRUE if distance is too far
 */
declare function InventoryIsBlockedByDistance(C: Character): boolean;
/**
* Returns TRUE if the body area is blocked by an owner rule
* @param {Character} C - The character on which we validate the group
* @param {AssetGroupName} [GroupName] - The name of the asset group (body area)
* @returns {boolean} - TRUE if the group is blocked
*/
declare function InventoryGroupIsBlockedByOwnerRule(C: Character, GroupName?: AssetGroupName): boolean;
/**
 * Returns an error message if the body area (Asset Group) for a character is blocked, and `null` otherwise.
 *
 * Similar to {@link InventoryGroupIsBlockedForCharacter} but also checks for map range and owner rules.
 * @param {Character} C - The character on which we validate the group
 * @param {null | AssetGroupItemName} [GroupName] - The name of the asset group (body area)
 * @param {boolean} [Activity] - if TRUE check if activity is allowed on the asset group
 * @returns {null | string} - The error message (if any)
 */
declare function InventoryGroupIsAvailable(C: Character, GroupName?: null | AssetGroupItemName, Activity?: boolean): null | string;
/**
 * Returns TRUE if the body area (Asset Group) for a character is blocked and cannot be used.
 *
 * Similar to {@link InventoryGroupIsBlockedForCharacter} but also checks for map range and owner rules.
 * @param {Character} C - The character on which we validate the group
 * @param {null | AssetGroupItemName} [GroupName] - The name of the asset group (body area)
 * @param {boolean} [Activity] - if TRUE check if activity is allowed on the asset group
 * @returns {boolean} - TRUE if the group is blocked
 */
declare function InventoryGroupIsBlocked(C: Character, GroupName?: null | AssetGroupItemName, Activity?: boolean): boolean;
/**
* Returns TRUE if an item has a specific effect
* @param {Item} Item - The item from appearance that must be validated
* @param {EffectName} [Effect] - The name of the effect to validate, can be undefined to check for any effect
* @param {boolean} [CheckProperties=true] - If properties should be checked (defaults to `true`)
* @returns {boolean} `true` if the effect is on the item
*/
declare function InventoryItemHasEffect(Item: Item, Effect?: EffectName, CheckProperties?: boolean): boolean;
/**
* Returns TRUE if an item lock is pickable
* @param {Item} Item - The item from appearance that must be validated
* @returns {Boolean} - TRUE if PickDifficulty is on the item
*/
declare function InventoryItemIsPickable(Item: Item): boolean;
/**
 * Returns the value of a given property of an appearance item, prioritizes the Property object.
 * @template {keyof ItemProperties | keyof Asset | keyof AssetGroup} Name
 * @param {Item} Item - The appearance item to scan
 * @param {Name} PropertyName - The property name to get.
 * @param {boolean} [CheckGroup=false] - Whether or not to fall back to the item's group if the property is not found on
 * Property or Asset.
 * @returns {(ItemProperties & Asset & AssetGroup)[Name] | undefined} - The value of the requested property for the given item.
 * Returns either undefined, an empty array or object if the property or the item itself does not exist.
 */
declare function InventoryGetItemProperty<Name extends keyof ItemProperties | keyof Asset | keyof AssetGroup>(Item: Item, PropertyName: Name, CheckGroup?: boolean): (ItemProperties & Asset & AssetGroup)[Name] | undefined;
/**
 * Apply an item's expression trigger to a character if able
 * @param {Character} C - The character to update
 * @param {readonly ExpressionTrigger[]} expressions - The expression change to apply to each group
 */
declare function InventoryExpressionTriggerApply(C: Character, expressions: readonly ExpressionTrigger[]): void;
/**
* Returns the padlock item that locks another item
* @param {Item} Item - The item from appearance that must be scanned
* @returns {Item} - A padlock item or NULL if none
*/
declare function InventoryGetLock(Item: Item): Item;
/**
* Returns TRUE if the item has an OwnerOnly flag, such as the owner padlock
* @param {Item} Item - The item from appearance that must be scanned
* @returns {Boolean} - TRUE if owner only
*/
declare function InventoryOwnerOnlyItem(Item: Item): boolean;
/**
* Returns TRUE if the item has a LoverOnly flag, such as the lover padlock
* @param {Item} Item - The item from appearance that must be scanned
* @returns {Boolean} - TRUE if lover only
*/
declare function InventoryLoverOnlyItem(Item: Item): boolean;
/**
* Returns TRUE if the item has a FamilyOnly flag, such as the D/s family padlock
* @param {Item} Item - The item from appearance that must be scanned
* @returns {Boolean} - TRUE if family only
*/
declare function InventoryFamilyOnlyItem(Item: Item): boolean;
/**
* Returns TRUE if the character is wearing at least one restraint that's locked with an extra lock
* @param {Character} C - The character to scan
* @returns {Boolean} - TRUE if one restraint with an extra lock is found
*/
declare function InventoryCharacterHasLockedRestraint(C: Character): boolean;
/**
 *
 * @param {Character} C - The character to scan
 * @param {AssetLockType} LockName - The type of lock to check for
 * @returns {Boolean} - Returns TRUE if any item has the specified lock locked onto it
 */
declare function InventoryCharacterIsWearingLock(C: Character, LockName: AssetLockType): boolean;
/**
* Returns TRUE if the character is wearing at least one item that's a restraint with a OwnerOnly flag, such as the
* owner padlock
* @param {Character} C - The character to scan
* @returns {Boolean} - TRUE if one owner only restraint is found
*/
declare function InventoryCharacterHasOwnerOnlyRestraint(C: Character): boolean;
/**
* Returns TRUE if the character is wearing at least one item that's a restraint with a LoverOnly flag, such as the
* lover padlock
* @param {Character} C - The character to scan
* @returns {Boolean} - TRUE if one lover only restraint is found
*/
declare function InventoryCharacterHasLoverOnlyRestraint(C: Character): boolean;
/**
* Returns TRUE if the character is wearing at least one item that's a restraint with a FamilyOnly flag
* @param {Character} C - The character to scan
* @returns {Boolean} - TRUE if one family only restraint is found
*/
declare function InventoryCharacterHasFamilyOnlyRestraint(C: Character): boolean;
/**
* Returns TRUE if at least one item on the character can be locked
* @param {Character} C - The character to scan
* @returns {Boolean} - TRUE if at least one item can be locked
*/
declare function InventoryHasLockableItems(C: Character): boolean;
/**
 * Determines whether an item in its current state permits locks.
 * @param {Item} item - The item to check
 * @returns {boolean} - TRUE if the asset's current type permits locks
 */
declare function InventoryDoesItemAllowLock(item: Item): boolean;
/**
 * Applies a lock to an appearance item of a character
 * @param {Character} C - The character on which the lock must be applied
 * @param {Item|AssetGroupName} Item - The item from appearance to lock
 * @param {Item|AssetLockType} Lock - The asset of the lock or the name of the lock asset
 * @param {null|number|string} [MemberNumber] - The member number to put on the lock, or message to show
 * @param {boolean} [Update=true] - Whether or not to update the character
 */
declare function InventoryLock(C: Character, Item: Item | AssetGroupName, Lock: Item | AssetLockType, MemberNumber?: null | number | string, Update?: boolean): void;
/**
 * Unlocks an item and removes all related properties
 * @param {Character} C - The character on which the item must be unlocked
 * @param {Item|AssetGroupItemName} Item - The item from appearance to unlock
 * @param RefreshDialog — Refreshes the character dialog
 */
declare function InventoryUnlock(C: Character, Item: Item | AssetGroupItemName, refreshDialog?: boolean): void;
/**
* Applies a random lock on an item
* @param {Character} C - The character on which the item must be locked
* @param {Item} Item - The item from appearance to lock
* @param {Boolean} FromOwner - Set to TRUE if the source is the owner, to apply owner locks
*/
declare function InventoryLockRandom(C: Character, Item: Item, FromOwner: boolean): void;
/**
* Applies random locks on each character items that can be locked
* @param {Character} C - The character on which the items must be locked
* @param {Boolean} FromOwner - Set to TRUE if the source is the owner, to apply owner locks
*/
declare function InventoryFullLockRandom(C: Character, FromOwner: boolean): void;
/**
* Applies a specific lock  on each character items that can be locked
* @param {Character} C - The character on which the items must be locked
* @param {AssetLockType} LockType - The lock type to apply
*/
declare function InventoryFullLock(C: Character, LockType: AssetLockType): void;
/**
* Removes all common keys from the player inventory
*/
declare function InventoryConfiscateKey(): void;
/**
* Removes the remotes of the vibrators from the player inventory
*/
declare function InventoryConfiscateRemote(): void;
/**
* Returns TRUE if the item is worn by the character
* @param {Character} C - The character to scan
* @param {String} AssetName - The asset / item name to scan
* @param {AssetGroupName} AssetGroup - The asset group name to scan
* @returns {Boolean} - TRUE if item is worn
*/
declare function InventoryIsWorn(C: Character, AssetName: string, AssetGroup: AssetGroupName): boolean;
/**
 * Set the item's permission to a specific value for the player.
 * @param {AssetGroupName} groupName
 * @param {string} assetName
 * @param {ItemPermissionMode} permissionType
 * @param {null | string} type - The relevant extended item option identifier of the item (if any)
 * @param {boolean} push - Whether to push the permission changes to the server
 * @returns {void} - Nothing
 */
declare function InventorySetPermission(groupName: AssetGroupName, assetName: string, permissionType: ItemPermissionMode, type?: null | string, push?: boolean): void;
/**
 * Toggles an item's permission for the player
 * @param {Item} Item - Appearance item to toggle
 * @param {string} [Type] - The relevant extended item option identifier of the item (if any)
 * @param {boolean} [Worn] - True if the player is changing permissions for an item they're wearing or if it's the first option
 * @param {boolean} push - Whether to push the permission changes to the server
 * @returns {ItemPermissionMode} - The new item permission
 */
declare function InventoryTogglePermission(Item: Item, Type?: string, Worn?: boolean, push?: boolean): ItemPermissionMode;
/**
* Returns TRUE if a specific item / asset is blocked by the character item permissions
* @param {Character} C - The character on which we check the permissions
* @param {string} AssetName - The asset / item name to scan
* @param {AssetGroupName} AssetGroup - The asset group name to scan
* @param {string} [AssetType] - The asset type to scan
* @returns {boolean} - TRUE if asset / item is blocked
*/
declare function InventoryIsPermissionBlocked(C: Character, AssetName: string, AssetGroup: AssetGroupName, AssetType?: string): boolean;
/**
* Returns TRUE if a specific item / asset is favorited by the character item permissions
* @param {Character} C - The character on which we check the permissions
* @param {string} AssetName - The asset / item name to scan
* @param {AssetGroupName} AssetGroup - The asset group name to scan
* @param {string} [AssetType] - The asset type to scan
* @returns {boolean} - TRUE if asset / item is a favorite
*/
declare function InventoryIsFavorite(C: Character, AssetName: string, AssetGroup: AssetGroupName, AssetType?: string): boolean;
/**
 * Returns TRUE if a specific item / asset is limited by the character item permissions
 * @param {Character} C - The character on which we check the permissions
 * @param {string} AssetName - The asset / item name to scan
 * @param {AssetGroupName} AssetGroup - The asset group name to scan
 * @param {string} [AssetType] - The asset type to scan
 * @returns {boolean} - TRUE if asset / item is limited
 */
declare function InventoryIsPermissionLimited(C: Character, AssetName: string, AssetGroup: AssetGroupName, AssetType?: string): boolean;
/**
 * Returns TRUE if the item is not limited, if the player is an owner or a lover of the character, or on their whitelist
 * @param {Character} C - The character on which we check the limited permissions for the item
 * @param {Item} Item - The item being interacted with
 * @param {String} [ItemType] - The asset type to scan
 * @returns {Boolean} - TRUE if item is allowed
 */
declare function InventoryCheckLimitedPermission(C: Character, Item: Item, ItemType?: string): boolean;
/**
 * Returns TRUE if a specific item / asset is blocked or limited for the player by the character item permissions
 * @param {Character} C - The character on which we check the permissions
 * @param {Item} Item - The item being interacted with
 * @param {string | null} [ItemType] - The asset type to scan
 * @returns {Boolean} - Returns TRUE if the item cannot be used
 */
declare function InventoryBlockedOrLimited(C: Character, Item: Item, ItemType?: string | null): boolean;
/**
 * Determines whether a given item is an allowed limited item for the player (i.e. has limited permissions, but can be
 * used by the player)
 * @param {Character} C - The character whose permissions to check
 * @param {Item} item - The item to check
 * @param {string | undefined} [type] - the item type to check
 * @returns {boolean} - Returns TRUE if the given item & type is limited but allowed for the player
 */
declare function InventoryIsAllowedLimited(C: Character, item: Item, type?: string | undefined): boolean;
/**
 * Returns TRUE if the item is a key, having the effect of unlocking other items
 * @param {Item} Item - The item to validate
 * @returns {Boolean} - TRUE if item is a key
 */
declare function InventoryIsKey(Item: Item): boolean;
/**
 * Serialises the provided character's inventory into a string for easy comparisons, inventory items are uniquely
 * identified by their name and group
 * @param {PlayerCharacter} C - The character whose inventory we should serialise
 * @return {string} - A simple string representation of the character's inventory
 */
declare function InventoryStringify(C: PlayerCharacter): string;
/**
 * Returns TRUE if the inventory category is blocked in the current chat room
 * @param {readonly ServerChatRoomBlockCategory[]} Category - An array of string containing all the categories to validate
 * @return {boolean} - TRUE if it's blocked
 */
declare function InventoryChatRoomAllow(Category: readonly ServerChatRoomBlockCategory[]): boolean;
/**
 * Applies a preset expression from being shocked to the character if able
 * @param {Character} C - The character to update
 * @returns {void} - Nothing
 */
declare function InventoryShockExpression(C: Character): void;
/**
 * Extracts all lock-related properties from an item's property object
 * @param {ItemProperties} property - The property object to extract from
 * @returns {ItemProperties} - A property object containing only the lock-related properties from the provided property
 * object
 */
declare function InventoryExtractLockProperties(property: ItemProperties): ItemProperties;
declare namespace InventoryPrerequisiteConflicts {
    let GagPriorities: Partial<Record<AssetGroupName, number>>;
    /**
     * @private
     * @template {keyof PropertiesArray} T
     * @param {T} fieldName
     * @param {Character} C - The character on which we check for prerequisites
     * @param {PropertiesArray[T]} blockingPrereqs - The prerequisites we check for on lower gags
     * @param {Asset} asset - The new gag
     * @param {Object} options
     * @param {string} [options.errMessage] - The to-be returned message if the gag is blocked
     * @param {boolean} [options.invert] - Whether the prerequisite check should be inverted (_i.e._ if "not any" instead of "any")
     * @returns {string} - Returns the error message if the gag is blocked, or an empty string if not
     */
    function _GagCheck<T extends keyof PropertiesArray>(fieldName: T, C: Character, blockingPrereqs: PropertiesArray[T], asset?: Asset, options?: {
        errMessage?: string;
        invert?: boolean;
    }): string;
    /**
     * Check if there are any lower gags with prerequisites that block the new gag from being applied
     * @param {Character} C - The character on which we check for prerequisites
     * @param {readonly AssetPrerequisite[]} blockingPrereqs - The prerequisites we check for on lower gags
     * @param {Asset} asset - The new gag
     * @param {Object} options
     * @param {string} [options.errMessage] - The to-be returned message if the gag is blocked
     * @param {boolean} [options.invert] - Whether the prerequisite check should be inverted (_i.e._ if "not any" instead of "any")
     * @returns {string} - Returns the error message if the gag is blocked, or an empty string if not
     */
    function GagPrerequisite(C: Character, blockingPrereqs: readonly AssetPrerequisite[], asset?: Asset, options?: {
        errMessage?: string;
        invert?: boolean;
    }): string;
    /**
     * Check if there are any lower gags with effects that block the new gag from being applied
     * @param {Character} C - The character on which we check for prerequisites
     * @param {readonly EffectName[]} blockingEffects - The prerequisites we check for on lower gags
     * @param {Asset} asset - The new gag
     * @param {Object} options
     * @param {string} [options.errMessage] - The to-be returned message if the gag is blocked
     * @param {boolean} [options.invert] - Whether the prerequisite check should be inverted (_i.e._ if "not any" instead of "any")
     * @returns {string} - Returns the error message if the gag is blocked, or an empty string if not
     */
    function GagEffect(C: Character, blockingEffects: readonly EffectName[], asset?: Asset, options?: {
        errMessage?: string;
        invert?: boolean;
    }): string;
}
/**
* Sets the craft and type on the item, uses the achetype properties if possible.
* Note that appearance changes are _not_ pushed to the server.
* @deprecated Use {@link InventoryCraft} instead (or use {@link InventoryWear} directly if appropriate)
*/
declare var InventoryWearCraft: never;
/** @satisfies {Set<keyof PropertiesArray>} */
declare const PropertiesArrayLike: Set<"Block" | "Hide" | "AllowActivity" | "AllowActivityOn" | "Expose" | "HideItem" | "HideItemExclude" | "Require" | "AllowActivePose" | "Prerequisite" | "ExpressionTrigger" | "AllowEffect" | "AllowBlock" | "AllowHide" | "AllowHideItem" | "DefaultColor" | "Category" | "Fetish" | "AvailableLocations" | "Attribute" | "Tint" | "ExpressionPrerequisite" | "Effect" | "SetPose" | "AllowExpression" | "Alpha" | "MemberNumberList" | "UnHide" | "Texts">;
/** @satisfies {Set<keyof PropertiesRecord>} */
declare const PropertiesObjectLike: Set<"AllowLockType" | "ActivityExpression" | "RemoveItemOnRemove" | "PoseMapping" | "TypeRecord">;
