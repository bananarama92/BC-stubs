/**
 * @type {LogRecord[]}
 * @deprecated Use {@link Player.Log}
 */
declare var Log: LogRecord[];
/**
 * Get the log entry corresponding to the given name and group.
 *
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name
 * @param {T} Group
 * @returns {LogRecord | undefined}
 */
declare function LogGet<T extends LogGroupType>(Name: LogNameType[T], Group: T): LogRecord | undefined;
declare const LogMaxStringArrayLength = 100;
declare const LogMaxStringLength = 100;
/**
 * Adds a new entry to the player's logs, renews the value if it already exists.
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log
 * @param {T} Group - The name of the log's group
 * @param {number|string[]} [Value] - Value for the log as the time in ms. Is undefined if the value is permanent
 * @param {boolean} [Push=true] - TRUE if we must push the log to the server
 * @returns {void} - Nothing
 */
declare function LogAdd<T extends LogGroupType>(Name: LogNameType[T], Group: T, Value?: number | string[], Push?: boolean): void;
/**
 * Deletes a log entry.
 * @template {LogGroupType} T
 * @param {LogNameType[T] | null | undefined} Name - The name of the log. Pass null or undefined to delete the whole group.
 * @param {T} Group - The name of the log's group
 * @param {boolean} [Push=true] - TRUE if we must push the log to the server
 * @returns {void} - Nothing
 */
declare function LogDelete<T extends LogGroupType>(Name: LogNameType[T] | null | undefined, Group: T, Push?: boolean): void;
/**
 * Deletes all log entries to starts with the name.
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log
 * @param {T} Group - The name of the log's group
 * @param {boolean} [Push=true] - TRUE if we must push the log to the server
 * @returns {void} - Nothing
 */
declare function LogDeleteStarting<T extends LogGroupType>(Name: LogNameType[T], Group: T, Push?: boolean): void;
/**
 * Checks for an existing record being expired.
 *
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log to search for
 * @param {T} Group - The name of the log's group
 * @returns {boolean} - Returns false if there's no record, or if the found record's numeric value is less than the current time.
 */
declare function LogQuery<T extends LogGroupType>(Name: LogNameType[T], Group: T): boolean;
/**
 * Checks if the wanted record contains the given ID.
 *
 * This will only return true for stringarray records.
 *
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The log name to scan
 * @param {T} Group - The log group to scan
 * @param {string} ID - The ID to validate (letter, number or other chars are fine)
 * @returns {boolean} - Returns true, if the log contains that ID
 */
declare function LogContain<T extends LogGroupType>(Name: LogNameType[T], Group: T, ID: string): boolean;
/**
 * Returns the numeric value associated to a log.
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log to query the value
 * @param {T} Group - The name of the log's group
 * @returns {number | null} - The log's numeric value if it exists, or null.
 */
declare function LogValue<T extends LogGroupType>(Name: LogNameType[T], Group: T): number | null;
/**
 * Returns the string associated to a log.
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log to query the value
 * @param {T} Group - The name of the log's group
 * @returns {string | null} - The log's string value if it exists, or null.
 */
declare function LogGetString<T extends LogGroupType>(Name: LogNameType[T], Group: T): string | null;
/**
 * Returns the string array associated to a log.
 * @template {LogGroupType} T
 * @param {LogNameType[T]} Name - The name of the log to query the value
 * @param {T} Group - The name of the log's group
 * @returns {string[] | null} - The log's string array value if it exists, or null.
 */
declare function LogGetStringArray<T extends LogGroupType>(Name: LogNameType[T], Group: T): string[] | null;
declare const MainHallAllowIDToScreenMap: {
    readonly Shop: "A";
    readonly Private: "B";
    readonly Introduction: "C";
    readonly MaidQuarters: "D";
    readonly KidnapLeague: "E";
    readonly ShibariDojo: "F";
    readonly Sarah: "G";
    readonly Trouble: "H";
    readonly SlaveMarket: "I";
    readonly Cell: "J";
    readonly LARPBattle: "K";
    readonly College: "L";
    readonly Asylum: "M";
    readonly Poker: "N";
    readonly Infiltration: "O";
    readonly MovieStudio: "P";
    readonly MagicSchool: "Q";
    readonly Platform: "R";
    readonly Crafting: "S";
    readonly ClubCard: "T";
    readonly Gambling: "0";
    readonly Prison: "1";
    readonly Photographic: "2";
    readonly Stable: "3";
    readonly Magic: "4";
    readonly Nursery: "5";
    readonly Cafe: "6";
    readonly Arcade: "7";
};
/**
 * A list of conversions to apply to rules, for backward-compatibility with
 * how Advanced Rules were set.
 */
declare var AdvancedRulesBackCompat: {
    readonly BlockScreen: Record<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T", "Arcade" | "Asylum" | "Cafe" | "Cell" | "ClubCard" | "College" | "Crafting" | "Gambling" | "Infiltration" | "Introduction" | "KidnapLeague" | "LARPBattle" | "Magic" | "MagicSchool" | "MaidQuarters" | "MovieStudio" | "Nursery" | "Photographic" | "Platform" | "Poker" | "Prison" | "Private" | "Sarah" | "ShibariDojo" | "Shop" | "SlaveMarket" | "Stable" | "Trouble">;
    readonly BlockAppearance: {
        readonly A: "Cloth";
        readonly B: "ClothAccessory";
        readonly C: "Necklace";
        readonly D: "Suit";
        readonly E: "ClothLower";
        readonly F: "SuitLower";
        readonly G: "Bra";
        readonly H: "Corset";
        readonly I: "Panties";
        readonly J: "Socks";
        readonly "(": "SocksRight";
        readonly ")": "SocksLeft";
        readonly K: "AnkletRight";
        readonly L: "AnkletLeft";
        readonly M: "Garters";
        readonly N: "Shoes";
        readonly O: "Hat";
        readonly P: "HairAccessory3";
        readonly Q: "HairAccessory1";
        readonly R: "HairAccessory2";
        readonly S: "Gloves";
        readonly "!": "HandAccessoryLeft";
        readonly $: "HandAccessoryRight";
        readonly T: "Bracelet";
        readonly U: "Glasses";
        readonly "[": "Jewelry";
        readonly V: "Mask";
        readonly W: "TailStraps";
        readonly X: "Wings";
        readonly "0": "Height";
        readonly "1": "BodyUpper";
        readonly "2": "BodyLower";
        readonly "3": "HairFront";
        readonly "?": "FacialHair";
        readonly "4": "HairBack";
        readonly "*": "Eyebrows";
        readonly "]": "Head";
        readonly "5": "Eyes";
        readonly "6": "Eyes2";
        readonly "7": "Mouth";
        readonly "8": "Nipples";
        readonly "9": "Pussy";
        readonly "%": "Pronouns";
        readonly "^": "EyeShadow";
    };
    readonly BlockItemGroup: {
        readonly A: "ItemBoots";
        readonly B: "ItemFeet";
        readonly C: "ItemLegs";
        readonly D: "ItemVulva";
        readonly E: "ItemVulvaPiercings";
        readonly F: "ItemButt";
        readonly G: "ItemPelvis";
        readonly H: "ItemTorso";
        readonly I: "ItemTorso2";
        readonly J: "ItemNipples";
        readonly K: "ItemNipplesPiercings";
        readonly L: "ItemBreast";
        readonly M: "ItemHands";
        readonly N: "ItemArms";
        readonly O: "ItemNeck";
        readonly P: "ItemNeckAccessories";
        readonly Q: "ItemNeckRestraints";
        readonly R: "ItemMouth";
        readonly S: "ItemMouth2";
        readonly T: "ItemMouth3";
        readonly U: "ItemNose";
        readonly V: "ItemEars";
        readonly W: "ItemHead";
        readonly X: "ItemHood";
        readonly "0": "ItemMisc";
        readonly "1": "ItemDevices";
        readonly "2": "ItemAddon";
    };
};
/**
 * Loads the account log.
 * @param {readonly LogRecord[]} NewLog - Existing logs received by the server
 * @returns {void} - Nothing
 */
declare function LogLoad(NewLog: readonly LogRecord[]): void;
/**
 * Searches for an existing log entry on another character.
 * @template {LogGroupType} T
 * @param {Character} C - Character to search on
 * @param {LogNameType[T]} Name - The name of the log to search for
 * @param {T} Group - The name of the log's group
 * @returns {boolean} - Returns TRUE if there is an existing log matching the Name/Group with no value or a value above the current time in ms.
 */
declare function LogQueryRemote<T extends LogGroupType>(C: Character, Name: LogNameType[T], Group: T): boolean;
/**
 * Filters the Player's log and returns the rule entries that the player's owner is allowed to see.
 * @param {boolean} OwnerIsLover - Indicates that the requester is also the player's lover.
 * @returns {LogRecord[]} - A list of rules that the player's owner is permitted to see
 */
declare function LogGetOwnerReadableRules(OwnerIsLover: boolean): LogRecord[];
/**
 * Filters the Player's log and returns the rule entries that the player's lover is allowed to see.
 * @returns {LogRecord[]} - A list of rules that the player's lover is permitted to see
 */
declare function LogGetLoverReadableRules(): LogRecord[];
