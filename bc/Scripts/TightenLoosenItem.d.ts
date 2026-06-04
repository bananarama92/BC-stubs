/**
 * Loads the item properties
 * @param {Item} item
 * @returns {void} Nothing
 */
declare function TightenLoosenItemLoad(item: Item): void;
/**
 * Draws the extended tighten / loosen menu
 * @param {Item} item
 * @returns {void} Nothing
 */
declare function TightenLoosenItemDraw(item: Item): void;
/**
 * Sets a facial expression for the character being tightneded/loosened
 * @param {Character} C - The character affected
 * @param {"" | ExpressionNameMap["Blush"]} Blush - The blush style
 * @param {"" | ExpressionNameMap["Eyes"]} Eyes - The eyes style
 * @param {"" | ExpressionNameMap["Eyebrows"]} Eyebrows - The eyebrows style
 * @returns {void} Nothing
 */
declare function TightenLoosenFacialExpression(C: Character, Blush: "" | ExpressionNameMap["Blush"], Eyes: "" | ExpressionNameMap["Eyes"], Eyebrows: "" | ExpressionNameMap["Eyebrows"]): void;
/**
 * Handles clicks on the tighten / loosen menu
 * @param {Character} C
 * @param {Item} item
 * @returns {void} Nothing
 */
declare function TightenLoosenItemClick(C: Character, item: Item): void;
/**
 * Exit function for sub menu
 * @returns {void} - Nothing
 */
declare function TightenLoosenItemExit(): void;
declare var TightenLoosenItemMaximumDifficulty: number;
declare var TightenLoosenItemMinimumDifficulty: number;
/** A set of screen names for which one should *not* be able to access the tighten/loosen interface via the extended item menu */
declare const TightenLoosenScreenBlacklist: Set<string>;
