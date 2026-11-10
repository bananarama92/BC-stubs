declare var InfiltrationPerksBackground: string;
/** @type {InfiltrationPerks[]} */
declare var InfiltrationPerksList: InfiltrationPerks[];
/**
 * Checks if a named perk is activated or not
 * @param {InfiltrationPerks} PerkName
 * @returns {boolean} - TRUE if the perk is active
 */
declare function InfiltrationPerksActive(PerkName: InfiltrationPerks): boolean;
/**
 * Activate or deactivate a perk from the player choice
 * @param {InfiltrationPerks} PerkName
 * @returns {void} - Nothing
 */
declare function InfiltrationPerksActivate(PerkName: InfiltrationPerks): void;
/**
 * Returns the number of perks taken by the player
 * @returns {number} - Number of perks taken by the player
 */
declare function InfiltrationPerksTaken(): number;
/**
 * Returns the number of perks available for the player
 * @returns {number} - Number of perks available for the player
 */
declare function InfiltrationPerksAvail(): number;
/**
 * Loads the infiltration perks screen, checks if there's an invalid perk and clears the list if it's the case
 * @type {ScreenLoadHandler}
 */
declare function InfiltrationPerksLoad(): Promise<void>;
/**
 * Runs and draws the infiltration perks screen
 * @type {ScreenRunHandler}
 */
declare function InfiltrationPerksRun(): void;
/**
 * Handles clicks in the infiltration perks screen.
 * @type {MouseEventListener}
 */
declare function InfiltrationPerksClick(): void;
/**
 * Updates the infiltration data for the player
 * @type {ScreenExitHandler}
 */
declare function InfiltrationPerksExit(): void;
