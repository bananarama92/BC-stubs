/**
 * Loads the next thank you bubble
 * @returns {void} Nothing
 */
declare function LoginDoNextThankYou(): void;
/**
 * Draw the credits
 * @returns {void} Nothing
 */
declare function LoginDrawCredits(): void;
/**
 * Loads the character login screen
 * @returns {void} Nothing
 */
declare function LoginLoad(): void;
/**
 * Runs the character login screen
 * @returns {void} Nothing
 */
declare function LoginRun(): void;
declare function LoginResize(load: boolean): void;
/**
 * Perform the inventory fixups needed.
 * @param {InventoryBundle[]} Inventory - The server-provided inventory object
 */
declare function LoginPerformInventoryFixups(Inventory: InventoryBundle[]): void;
/**
 * Perform the appearance fixups needed.
 * TODO: only typed items are supported.
 * @param {ItemBundle[]} Appearance - The server-provided appearance object
 * @return {boolean}
 */
declare function LoginPerformAppearanceFixups(Appearance: ItemBundle[]): boolean;
/**
 * Perform the crafting fixups needed
 * @param {readonly CraftingItem[]} Crafting - The server-provided, uncompressed crafting data
 */
declare function LoginPerformCraftingFixups(Crafting: readonly CraftingItem[]): void;
/**
 * Make sure the slave collar is equipped or unequipped based on the owner
 * @returns {void} Nothing
 */
declare function LoginValidCollar(): void;
/**
 * Adds or confiscates Club Mistress items from the player. Only players that are club Mistresses can have the Mistress
 * Padlock & Key
 * @returns {void} Nothing
 */
declare function LoginMistressItems(): void;
/**
 * Give the matching RewardMemberNumber Club Card to the player
 * @returns {void} Nothing
 */
declare function LoginClubCard(): void;
/**
 * Adds or confiscates pony equipment from the player. Only players that are ponies or trainers can have the pony
 * equipment.
 * @returns {void} Nothing
 */
declare function LoginStableItems(): void;
/**
 * Adds or confiscates maid items from the player. Only players that have joined the Maid Sorority can have these items.
 * @returns {void} - Nothing
 */
declare function LoginMaidItems(): void;
/**
 * Ensures lover-exclusive items are removed if the player has no lovers.
 * @returns {void} Nothing
 */
declare function LoginLoversItems(): void;
/**
 * Adds or removes Asylum items. Only players that have previously maxed out their patient or nurse reputation are
 * eligible for their own set of Asylum restraints outside the Asylum.
 * @returns {void} - Nothing
 */
declare function LoginAsylumItems(): void;
/**
 * Adds items if specific cheats are enabled
 * @returns {void} - Nothing
 */
declare function LoginCheatItems(): void;
/**
 * Checks every owned item to see if its BuyGroup contains an item the player does not have. This allows the player to
 * collect any items that have been added to the game which are in a BuyGroup that they have already purchased.
 * @returns {void} Nothing
 */
declare function LoginValideBuyGroups(): void;
/**
 * Makes sure the difficulty restrictions are applied to the player
 * @param {boolean} applyDefaults - If changing to the difficulty, set this to True to set LimitedItems to the default settings
 * @returns {void} Nothing
 */
declare function LoginDifficulty(applyDefaults: boolean): void;
/**
 * Set the item permissions for the Extreme difficulty
 * @param {boolean} applyDefaults - When initially changing to extreme/whitelist, TRUE sets strong locks to limited permissions. When enforcing
 * settings, FALSE allows them to remain as they are since the player could have changed them to fully open.
 * @returns {void} Nothing
 */
declare function LoginExtremeItemSettings(applyDefaults: boolean): void;
/**
 * Handles server response, when login has been queued
 * @param {number} Pos - The position in queue
 * @returns {void} Nothing
 */
declare function LoginQueue(Pos: number): void;
/**
 * Fixes the Owner property on the player object if it's wrongly set
 * @returns {void} Nothing
 */
declare function LoginFixOwner(): void;
/**
 * Sets the player character info from the server data
 * @param {ServerAccountData} C
 */
declare function LoginSetupPlayer(C: ServerAccountData): void;
/**
 * Handles player login response data
 * @param {ServerLoginResponse} C - The Login response data - this will either be the player's character data if the
 * login was successful, or a string error message if the login failed.
 * @returns {void} Nothing
 */
declare function LoginResponse(C: ServerLoginResponse): void;
/** Check if the player's browser has ES2020 support */
declare function LoginCheckES2020(): void;
/**
 * Handles player click events on the character login screen
 * @returns {void} Nothing
 */
declare function LoginClick(): void;
declare function LoginKeyDown(event: KeyboardEvent): boolean;
/**
 * Attempt to log the user in based on their input username and password
 * @param {string} Name
 * @param {string} Password
 * @returns {void} Nothing
 */
declare function LoginDoLogin(Name: string, Password: string): void;
/**
 * Resets the login submission state
 * @returns {void} Nothing
 */
declare function LoginStatusReset(): void;
/**
 *
 * @param {string} [ErrorMessage] - the login error message to set if the login is invalid - if not specified, will clear the login error message
 */
declare function LoginSetStatus(ErrorMessage?: string, reset?: boolean): void;
/**
 * Retrieves the correct message key based on the current state of the login page
 * @returns {string | null} The current login status, or null if we're not currently attempting to log in
 */
declare function LoginGetStatus(): string | null;
declare function LoginExit(): void;
/**
 * Unload function - called when the login page unloads
 */
declare function LoginUnload(): void;
declare var LoginBackground: string;
/**
 * Contents of the GameCredits.csv file
 * Initialized once on screen load
 * @type {string[][]}
 */
declare var LoginCredits: string[][];
declare var LoginCreditsPosition: number;
declare var LoginThankYou: string;
declare var LoginThankYouList: string[];
declare var LoginThankYouNext: number;
declare var LoginSubmitted: boolean;
declare var LoginQueuePosition: number;
/** The server login status */
declare var LoginErrorMessage: string;
/**
 * The dummy on the login screen.
 *
 * Lifetime bound to the screen.
 * @type {NPCCharacter} */
declare var LoginCharacter: NPCCharacter;
declare namespace LoginEventListeners {
    function _KeyDownInputName(this: HTMLInputElement, ev: KeyboardEvent): void;
    function _KeyDownInputPassword(this: HTMLInputElement, ev: KeyboardEvent): void;
}
/**
 * The list of item fixups to apply on login.
 *
 * Those are applied by the login code, after the player's item lists are set up
 * but before the inventory and appearance are loaded from the server's data,
 * and applies the specified asset fixups by swapping Old with New in the list
 * of owned items, in the various player item lists, and in the appearance.
 *
 * If you're only moving items around, it should work just fine as long as
 * the `Old` and `New` asset definitions are compatible.
 * If it's an asset merge (say 3 into one typed asset), it will either set
 * the fixed up item to the specified `Option` or the first one if unspecified.
 *
 * @type {{ Old: { Group: string, Name: string | '*' }, New: { Group: AssetGroupName, Name?: string, Option?: string } }[]}
 */
declare let LoginInventoryFixups: {
    Old: {
        Group: string;
        Name: string | "*";
    };
    New: {
        Group: AssetGroupName;
        Name?: string;
        Option?: string;
    };
}[];
