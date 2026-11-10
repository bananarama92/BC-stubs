/** @type {Record<ReputationType, { negative?: true, color: string }>} */
declare var ReputationConfig: Record<ReputationType, {
    negative?: true;
    color: string;
}>;
/** @type {ReputationType[]} */
declare var ReputationValidReputations: ReputationType[];
/**
 * Alters a given reputation value for the player
 * @param {ReputationType} RepType - The name/type of the reputation to alter
 * @param {number} RepValue - Reputation to add/subtract to the current reputation value.
 * @param {boolean} [Push] - Pushes the reputation to the server if TRUE
 * @returns {void} - Nothing
 */
declare function ReputationChange(RepType: ReputationType, RepValue: number, Push?: boolean): void;
/**
 * Get the human-readable label for a given reputation type and value
 *
 * Because there's a couple "mirrored" reputation, where a positive value is labelled one way,
 * and a negative one another way, this allows getting the proper name based on the value it has.
 *
 * @param {ReputationType} type
 * @param {number} value
 * @returns {string | null}
 */
declare function ReputationLabel(type: ReputationType, value: number): string | null;
/**
 * Loads the reputation data from the server
 * @param {readonly Reputation[]} [NewRep] - The array of reputation-value pairs to load for the current player
 * @returns {void} - Nothing
 */
declare function ReputationLoad(NewRep?: readonly Reputation[]): void;
declare function ReputationGet(C: Character, RepType: ReputationType): number;
declare function ReputationGet(ReputationType: ReputationType): number;
/**
 * Returns a specific reputation value for a given character
 * @param {Character} character - Character to get the reputation for.
 * @param {ReputationType} repType - Type/name of the reputation to get the value of.
 * @returns {number} - Returns the value of the reputation. It can range from 100 to -100, and it defaults to 0 if the given character never earned this type of reputation before.
 * @deprecated - Deprecated alias for {@link ReputationGet}
 */
declare function ReputationCharacterGet(character: Character, repType: ReputationType): number;
/**
 * Alter the reputation progress by a factor. The higher the rep, the slower it gets, a reputation is easier to break than to build. Takes the cheater version factor into account.
 * @param {ReputationType} RepType - Type/name of the reputation
 * @param {number} Value - Value of the reputation change before the factor is applied
 * @returns {void} - Nothing
 */
declare function ReputationProgress(RepType: ReputationType, Value: number): void;
