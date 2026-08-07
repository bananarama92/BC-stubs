/**
 * Detects specific voice commands from a chat message.
 *
 * This is shared by most voice-detection items that pass in their configured trigger values,
 * and gives back the matching indexes of those.
 *
 * @param {string} msg
 * @param {readonly string[]} TriggerValues
 * @returns {number[]}
 */
declare function ItemModuleVoiceCommandDetect(msg: string, TriggerValues: readonly string[]): number[];
/**
 * Handles the generic processing of voice commands.
 *
 * This is used by most voice detection items to get back a list of triggers
 * from the last time the chat log was processed.
 *
 * @param {Character} C
 * @param {Item} item
 * @param {number} LastTime
 * @param {readonly VoiceTriggerType[]} VoiceTriggers
 * @param {readonly string[]} TriggerValues
 * @returns {VoiceTriggerType[]}
 */
declare function ItemModuleVoiceCommandHandle(C: Character, item: Item, LastTime: number, VoiceTriggers: readonly VoiceTriggerType[], TriggerValues: readonly string[]): VoiceTriggerType[];
/**
 * @param {Character} C
 * @param {Item} item
 * @param {number} shockCooldown
 * @param {AssetGroupItemName[]} tamperZones
 */
declare function ItemModulePunishCheck(C: Character, item: Item, shockCooldown: number, tamperZones: AssetGroupItemName[]): "Struggle" | "Orgasm" | "StandUp" | "StruggleOther" | null;
declare namespace Item {
    /**
     * Construct an item from the passed asset
     * @param {Asset} asset The asset in question
     * @param {null | Item.Options} options Further options
     * @returns {Item} The new item
     */
    function fromAsset(asset: Asset, options?: null | Item.Options): Item;
    /**
     * Construct an item from the passed group- and asset names
     * @param {AssetGroupName} groupName The asset's group name
     * @param {string} assetName The asset's name
     * @param {null | Item.Options} options Further options
     * @returns {null | Item} The new item or `null` if no matching asset can be found
     */
    function fromName(groupName: AssetGroupName, assetName: string, options?: null | Item.Options): null | Item;
}
