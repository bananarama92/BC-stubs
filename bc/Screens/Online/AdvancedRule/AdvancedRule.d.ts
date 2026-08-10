declare var AdvancedRuleBackground: string;
/** @type {null | Character | NPCCharacter} */
declare var AdvancedRuleTarget: null | Character | NPCCharacter;
/** @type {LogNameAdvanced} */
declare var AdvancedRuleType: LogNameAdvanced;
/** @type {string[]} */
declare var AdvancedRuleOption: string[];
declare const AdvancedRuleOptionsPerPage = 44;
declare var AdvancedRulePage: number;
/**
 * @type {Set<string>}
 */
declare var AdvancedRuleSelection: Set<string>;
/** @type {AdvancedRuleScreen[]} */
declare const AdvancedRuleScreens: AdvancedRuleScreen[];
/**
 * Starts the advanced rule screen and loads it
 * @param {LogNameAdvanced} RuleType
 * @returns {void} - Nothing
 */
declare function AdvancedRuleOpen(RuleType: LogNameAdvanced): void;
/**
 * Convert an option to its descriptive name
 * @param {AdvancedRuleType} type
 * @param {string} option
 */
declare function AdvancedRuleTextGet(type: AdvancedRuleType, option: string): string;
/**
 * Draws the advanced rule text and check boxes
 * @returns {void} - Nothing
 */
declare function AdvancedRuleRun(): void;
/**
 * Handles the click events. Is called from CommonClick()
 * @returns {void} - Nothing
 */
declare function AdvancedRuleClick(): void;
