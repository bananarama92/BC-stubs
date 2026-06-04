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
declare function InfiltrationPerksLoad(): Promise<void>;
declare function InfiltrationPerksRun(time: number): void;
declare function InfiltrationPerksClick(event: PointerEvent): void;
declare function InfiltrationPerksExit(): void;
declare var InfiltrationPerksBackground: string;
/** @type {InfiltrationPerks[]} */
declare var InfiltrationPerksList: InfiltrationPerks[];
