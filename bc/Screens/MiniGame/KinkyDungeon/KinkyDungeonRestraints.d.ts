/**
 * Returns the multiplier of a restraint based on the player's current restraint counts
 * @param {entity} player
 * @param {restraint} restraint
 * @returns {number} - multiplier for apparent power
 */
declare function KDRestraintPowerMult(player: entity, restraint: restraint): number;
/**
 *
 * @returns {number}
 */
declare function KDGetWillPenalty(): number;
/**
 * gets a restraint
 * @param {Named} item
 * @returns {restraint}
 */
declare function KDRestraint(item: Named): restraint;
/**
 * gets a restraint
 * @param {item} item
 * @returns {boolean}
 */
declare function KDItemIsMagic(item: item): boolean;
/**
 *
 * @param {entity} Entity
 * @param {number} CamX
 * @param {number} CamY
 * @returns {void}
 */
declare function KinkyDungeonDrawTethers(Entity: entity, CamX: number, CamY: number): void;
declare function KDIsPlayerTethered(player: any): boolean;
declare function KinkyDungeonAttachTetherToEntity(dist: any, entity: any): boolean;
/**
 *
 * @param {entity} player
 * @param {number} x
 * @param {number} y
 * @param {entity} entity
 */
declare function KDIsPlayerTetheredToLocation(player: entity, x: number, y: number, entity: entity): boolean;
/**
 *
 * @param {entity} player
 * @param {entity} entity
 */
declare function KDIsPlayerTetheredToEntity(player: entity, entity: entity): boolean;
declare function KDBreakTether(): void;
/**
 *
 * @param {boolean} Msg
 * @param {entity} Entity
 * @param {number} [xTo]
 * @param {number} [yTo]
 * @returns {boolean}
 */
declare function KinkyDungeonUpdateTether(Msg: boolean, Entity: entity, xTo?: number, yTo?: number): boolean;
/**
 * Gets the length of the neck tether
 * @returns {number}
 */
declare function KinkyDungeonTetherLength(): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonKeyGetPickBreakChance(modifier?: number): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonGetKnifeBreakChance(modifier?: number): number;
/**
 *
 * @param {number} [modifier]
 * @returns {number}
 */
declare function KinkyDungeonGetEnchKnifeBreakChance(modifier?: number): number;
declare function KinkyDungeonIsLockable(restraint: any): boolean;
/**
 *
 * @param {item} item
 * @param {string} lock
 */
declare function KinkyDungeonLock(item: item, lock: string): void;
/**
 * Gets the curse of an item, ither intrinsic or applied
 * @param {item} item
 * @returns {string}
 */
declare function KDGetCurse(item: item): string;
/**
 *
 * @param {string} shrine
 * @returns {item[]}
 */
declare function KinkyDungeonGetRestraintsWithShrine(shrine: string, ignoreGold: any, recursive: any, ignoreNoShrine: any): item[];
/**
 *
 * @param {string} shrine
 * @returns {number}
 */
declare function KinkyDungeonRemoveRestraintsWithShrine(shrine: string, maxCount: any, recursive: any, noPlayer: any, ignoreGold: any, ignoreNoShrine: any): number;
/**
 *
 * @param {string} name
 * @returns {number}
 */
declare function KinkyDungeonRemoveRestraintsWithName(name: string): number;
/**
 *
 * @param {string} shrine
 * @returns {number}
 */
declare function KinkyDungeonUnlockRestraintsWithShrine(shrine: string): number;
/**
 *
 * @returns {item[]}
 */
declare function KinkyDungeonPlayerGetLockableRestraints(): item[];
/**
 * @param {string[]} Locks
 * @returns {item[]}
 */
declare function KinkyDungeonPlayerGetRestraintsWithLocks(Locks: string[], recursive: any): item[];
/**
 *
 * @param {string} lock
 */
declare function KinkyDungeonRemoveKeysUnlock(lock: string): void;
/**
 *
 * @param {string} lock
 * @returns {string}
 */
declare function KinkyDungeonGetKey(lock: string): string;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasGhostHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasAllyHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonHasAngelHelp(): boolean;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonIsWearingLeash(): boolean;
/**
 *
 * @param {boolean} Message - Show a message?
 * @param {string} affinity
 * @returns {boolean}
 */
declare function KinkyDungeonGetAffinity(Message: boolean, affinity: string, group: any): boolean;
declare function KinkyDungeonWallCrackAndKnife(Message: any): boolean;
/**
 * Determines if the entire dynamic item tree has at least one inaccessable item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeAccessible(item: item): boolean;
/**
 * Determines if the entire dynamic item tree has at least one chastity item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeChastity(item: item): boolean;
/**
 * Determines if the entire dynamic item tree has at least one chastity bra item
 * @param {item} item
 * @returns {boolean}
 */
declare function KDIsTreeChastityBra(item: item): boolean;
/**
 *
 * @param {string} Group - Group
 * @param {boolean} [External] - By enemies or by player?
 * @returns {boolean}
 */
declare function KDGroupBlocked(Group: string, External?: boolean): boolean;
/**
 * @param {string} Group
 * @param {boolean} External
 * @return {item[]}
 * Gets a list of restraints blocking this group */
declare function KDGetBlockingRestraints(Group: string, External: boolean): item[];
/**
 * @param {string} Group
 * @param {boolean} External
 * @return {item[]}
 * Gets a list of restraints with Security that block this */
declare function KDGetBlockingSecurity(Group: string, External: boolean): item[];
/**
 *
 * @param {boolean} Other - false = self, true = other prisoner door etc
 * @returns {boolean} - Can you use keys on target
 */
declare function KinkyDungeonCanUseKey(Other?: boolean): boolean;
/**
 *
 * @param {boolean} [ApplyGhost] - Can you receive help in this context?
 * @param {boolean} [Other] - Is this on yourself or another?
 * @param {number} Threshold - Threshold
 * @returns {boolean}
 */
declare function KinkyDungeonIsHandsBound(ApplyGhost?: boolean, Other?: boolean, Threshold?: number): boolean;
/**
 * Returns the total level of hands bondage, 1.0 or higher meaning unable to use hands
 * @param {boolean} Other - on other or self
 * @return  {number} - The bindhands level, sum of all bindhands properties of worn restraints
 */
declare function KDHandBondageTotal(Other?: boolean): number;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonCanUseFeet(): boolean;
/**
 *
 * @param {boolean} [ApplyGhost]
 * @param {boolean} [Other] - Is this on yourself or another?
 * @returns {boolean}
 */
declare function KinkyDungeonIsArmsBound(ApplyGhost?: boolean, Other?: boolean): boolean;
/**
 *
 * @param {boolean} ApplyGhost
 * @param {string} Group
 * @param {item} [excludeItem]
 * @returns {number}
 */
declare function KinkyDungeonStrictness(ApplyGhost: boolean, Group: string, excludeItem?: item): number;
/**
 * Gets the list of restraint nammes affecting the Group
 * @param {string} Group
 * @param {item} excludeItem
 * @returns {string[]}
 */
declare function KinkyDungeonGetStrictnessItems(Group: string, excludeItem: item): string[];
/**
 *
 * @returns {number}
 */
declare function KinkyDungeonGetPickBaseChance(): number;
/**
 *
 * @returns {number}
 */
declare function KinkyDungeonGetPickBonus(): number;
/**
 *
 * @returns {boolean}
 */
declare function KinkyDungeonPickAttempt(): boolean;
/**
 *
 * @param {string} lock
 * @returns {boolean}
 */
declare function KinkyDungeonUnlockAttempt(lock: string): boolean;
/** Gets the affinity of a restraint */
declare function KDGetRestraintAffinity(item: any, data: any): any;
/**
 *
 */
declare function KDGetEscapeChance(restraint: any, StruggleType: any, escapeChancePre: any, limitChancePre: any, ApplyGhost: any, ApplyPlayerBonus: any, Msg: any): {
    escapeChance: any;
    limitChance: any;
    escapeChanceData: {
        restraint: any;
        escapeChance: any;
        limitChance: any;
        struggleType: any;
        escapeChancePre: any;
        limitChancePre: any;
        ApplyGhost: any;
        ApplyPlayerBonus: any;
        GoddessBonus: number;
        Msg: any;
    };
};
declare function KDGetDynamicItem(group: any, index: any): {
    restraint: item;
    host: item;
};
/**
 *
 * @param {string} struggleGroup
 * @param {string} StruggleType
 * @returns {string}
 */
declare function KinkyDungeonStruggle(struggleGroup: string, StruggleType: string, index: any): string;
/**
 * "Return the first restraint item in the game that belongs to the given group."
 * @param {string} group - The group of the restraint item you want to get.
 * @param {number} [index] - The index of the restraint item you want to get.
 * @returns {item} The item that matches the group.
 */
declare function KinkyDungeonGetRestraintItem(group: string, index?: number): item;
/**
 * Refreshes the restraints map
 */
declare function KinkyDungeonRefreshRestraintsCache(): void;
/**
 *
 * @param {string} Name
 * @returns {restraint}
 */
declare function KinkyDungeonGetRestraintByName(Name: string): restraint;
/**
 *
 * @param {string} Lock
 * @returns {number}
 */
declare function KinkyDungeonGetLockMult(Lock: string): number;
/**
 *
 * @param {KDHasTags} enemy
 * @param {*} Level
 * @param {*} Index
 * @param {*} Bypass
 * @param {*} Lock
 * @param {*} RequireWill
 * @param {*} LeashingOnly
 * @param {*} NoStack
 * @param {*} extraTags
 * @param {*} agnostic - Determines if playertags and current bondage are ignored
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[]}} [filter] - Filters for items
 * @returns {{restraint: restraint, weight: number}[]}
 */
declare function KDGetRestraintsEligible(enemy: KDHasTags, Level: any, Index: any, Bypass: any, Lock: any, RequireWill: any, LeashingOnly: any, NoStack: any, extraTags: any, agnostic: any, filter?: {
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
}, securityEnemy?: entity): {
    restraint: restraint;
    weight: number;
}[];
/**
 *
 * @param {KDHasTags} enemy
 * @param {*} Level
 * @param {*} Index
 * @param {*} Bypass
 * @param {*} Lock
 * @param {*} RequireWill
 * @param {*} LeashingOnly
 * @param {*} NoStack
 * @param {*} extraTags
 * @param {*} agnostic - Determines if playertags and current bondage are ignored
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[]}} [filter] - Filters for items
 * @returns
 */
declare function KinkyDungeonGetRestraint(enemy: KDHasTags, Level: any, Index: any, Bypass: any, Lock: any, RequireWill: any, LeashingOnly: any, NoStack: any, extraTags: any, agnostic: any, filter?: {
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
}, securityEnemy?: entity): restraint;
declare function KinkyDungeonUpdateRestraints(delta: any): Map<any, any>;
/**
 *
 * @param {item} item
 * @param {boolean} [NoLink]
 * @param {restraint} [toLink]
 * @returns
 */
declare function KinkyDungeonRestraintPower(item: item, NoLink?: boolean, toLink?: restraint): number;
/**
 * @param {restraint} oldRestraint
 * @param {restraint} newRestraint
 * @param {item} [item]
 * @param {string} [newLock]
 * @returns {boolean}
 */
declare function KinkyDungeonLinkableAndStricter(oldRestraint: restraint, newRestraint: restraint, item?: item, newLock?: string): boolean;
declare function KinkyDungeonGenerateRestraintTrap(): string;
declare function KDGetLockVisual(item: any): string;
/**
 *
 * @param {restraint} restraint
 * @param {boolean} Bypass
 * @param {boolean} NoStack
 * @param {string} Lock
 * @param {item} [r]
 * @param {boolean} [Deep]
 * @param {boolean} [noOverpower]
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [useAugmentedPower] - Bypass is treated separately for these groups
 * @returns {boolean} - Restraint can be added
 */
declare function KDCanAddRestraint(restraint: restraint, Bypass: boolean, Lock: string, NoStack: boolean, r?: item, Deep?: boolean, noOverpower?: boolean, securityEnemy?: entity, useAugmentedPower?: boolean): boolean;
/**
 *
 * @param {string} Group
 * @param {entity} enemy
 * @returns {boolean}
 */
declare function KDEnemyPassesSecurity(Group: string, enemy: entity): boolean;
/**
 * Returns the first restraint in the stack that can link the given restraint
 * @param {item} currentRestraint
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {boolean} [Deep] - Whether or not it can look deeper into the stack
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @returns {item}
 */
declare function KDGetLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, Deep?: boolean, securityEnemy?: entity): item;
/**
 * Returns whether or not the restraint can go under the currentRestraint
 * @param {item} currentRestraint
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @returns {boolean}
 */
declare function KDCanLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, securityEnemy?: entity): boolean;
/**
 *
 * @param {item} currentRestraint
 * @param {item} [ignoreItem] - Item to ignore
 * @param {restraint} restraint
 * @param {boolean} [bypass]
 * @param {boolean} [NoStack]
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @returns {boolean}
 */
declare function KDCheckLinkSize(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, securityEnemy?: entity, ignoreItem?: item): boolean;
/**
 * @param {restraint | string} restraint
 * @param {number} [Tightness]
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Trapped]
 * @param {KinkyDungeonEvent[]} [events]
 * @param {string} [faction]
 * @param {boolean} [Deep] - whether or not it can go deeply in the stack
 * @param {string} [Curse] - Curse to apply
 * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
 * @param {boolean} [useAugmentedPower] - Augment power to keep consistency
 * @returns {number}
 */
declare function KinkyDungeonAddRestraintIfWeaker(restraint: restraint | string, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, events?: KinkyDungeonEvent[], faction?: string, Deep?: boolean, Curse?: string, securityEnemy?: entity, useAugmentedPower?: boolean): number;
/**
 *
 * @param {restraint} oldRestraint
 * @param {restraint} newRestraint
 * @param {item} [item]
 * @param {item} [ignoreItem] - Item to ignore for purpose of calculating size
 * @param {item} [linkUnderItem] - Item to ignore for total link chain calculation
 * @returns {boolean}
 */
declare function KinkyDungeonIsLinkable(oldRestraint: restraint, newRestraint: restraint, item?: item, ignoreItem?: item, linkUnderItem?: item): boolean;
/**
 * Checks if all the items linked under allow this item
 * @param {item} oldRestraint
 * @param {restraint} newRestraint
 * @param {item} [ignoreItem]
 * @returns {boolean}
 */
declare function KDCheckLinkTotal(oldRestraint: item, newRestraint: restraint, ignoreItem?: item): boolean;
/**
 * Gets the linkability cache
 * @param {item} restraint
 */
declare function KDUpdateLinkCaches(restraint: item): void;
/**
 * Gets the linkability cache
 * @param {item} restraint
 * @returns {string[]}
 */
declare function KDGetLinkCache(restraint: item): string[];
/**
 * @param {restraint} restraint
 * @param {number} Tightness
 * @param {boolean} [Bypass]
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {boolean} [Link]
 * @param {boolean} [SwitchItems]
 * @param {KinkyDungeonEvent[]} [events]
 * @param {boolean} [Unlink]
 * @param {string} [faction]
 * @param {item} [dynamicLink]
 * @param {string} [Curse] - Curse to apply
 * @param {boolean} [autoMessage] - Whether or not to automatically dispatch messages
 * @param {entity} [securityEnemy] - Whether or not to automatically dispatch messages
 * @returns
 */
declare function KinkyDungeonAddRestraint(restraint: restraint, Tightness: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Link?: boolean, SwitchItems?: boolean, events?: KinkyDungeonEvent[], faction?: string, Unlink?: boolean, dynamicLink?: item, Curse?: string, autoMessage?: boolean, securityEnemy?: entity): number;
/**
 * It removes a restraint from the player
 * @param {string} Group - The group of the item to remove.
 * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
 * @param {boolean} [Add] - If true, this is part of the process of adding another item and should not trigger infinite recursion
 * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
 * @param {boolean} [Shrine] - If the item is being removed from a shrine, this is true.
 * @param {boolean} [UnLink] - If the item is being removed as part of an unlinking process
 * @param {entity} [Remover] - Who removes this
 * @returns {boolean} true if the item was removed, false if it was not.
 */
declare function KinkyDungeonRemoveRestraint(Group: string, Keep?: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity): boolean;
declare function KDIInsertRestraintUnderneath(restraint: any): boolean;
/**
 * It removes the item's dynamic link
 * @param {item} hostItem - The group of the item to remove.
 * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
 * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
 * @param {entity} [Remover] - Who removes this
 * @returns {boolean} true if the item was removed, false if it was not.
 */
declare function KinkyDungeonRemoveDynamicRestraint(hostItem: item, Keep?: boolean, NoEvent?: boolean, Remover?: entity): boolean;
/**
 * "Returns an array of all the shrine types that have at least one restraint item."
 *
 * The function takes one argument, `ShrineFilter`, which is an array of shrine types. If the argument is not provided, the
 * function will return all shrine types. If the argument is provided, the function will only return shrine types that are
 * in the argument
 * @param ShrineFilter - An array of strings, each string being the name of a shrine.
 * @returns An array of all the restraint types that can be used in the shrine.
 */
declare function KinkyDungeonRestraintTypes(ShrineFilter: any): string[];
/**
 *
 * @param {restraint} newRestraint
 * @param {item} oldItem
 * @param {number} tightness
 * @param {string} [Lock]
 * @param {boolean} [Keep]
 * @param {string} [faction]
 * @param {string} [Curse]
 * @param {boolean} [autoMessage] - Whether or not to automatically dispatch a message
 * @returns {boolean}
 */
declare function KinkyDungeonLinkItem(newRestraint: restraint, oldItem: item, tightness: number, Lock?: string, Keep?: boolean, faction?: string, Curse?: string, autoMessage?: boolean): boolean;
/**
 *
 * @param {item} item
 * @param {boolean} Keep
 * @returns
 */
declare function KinkyDungeonUnLinkItem(item: item, Keep: boolean, dynamic: any): boolean;
/**
 *
 * @param {number} x
 * @param {number} y
 * @param {{aoe: number, number: number, dist: number, kind: string, duration?: number, durationExtra?: number}} options
 */
declare function KDCreateDebris(x: number, y: number, options: {
    aoe: number;
    number: number;
    dist: number;
    kind: string;
    duration?: number;
    durationExtra?: number;
}): void;
/**
 *
 * @param {string} StruggleType
 * @param {item} restraint
 * @param {KDLockType} lockType
 * @param {number} index
 * @param {any} data
 * @param {item} host
 */
declare function KDSuccessRemove(StruggleType: string, restraint: item, lockType: KDLockType, index: number, data: any, host: item): boolean;
declare function KDAddDelayedStruggle(amount: any, time: any, StruggleType: any, struggleGroup: any, index: any, data: any, progress?: number, limit?: number): void;
/**
 * Gets the goddess bonus for this item
 * @param {item} item
 * @param {any} data - Escape chance data
 */
declare function KDGetItemGoddessBonus(item: item, data: any): number;
/**
 * Gets string data from an item
 * @param {item} item
 * @param {string} key
 * @returns {string | undefined}
 */
declare function getItemDataString(item: item, key: string): string | undefined;
/**
 * Gets string data from an item
 * @param {item} item
 * @param {string} key
 * @returns {number | undefined}
 */
declare function getItemDataNumber(item: item, key: string): number | undefined;
/**
 * Sets string data for
 * @param {item} item
 * @param {string} key
 * @param {string | undefined} value
 */
declare function setItemDataString(item: item, key: string, value: string | undefined): void;
/**
 * Sets string data for
 * @param {item} item
 * @param {string} key
 * @param {number | undefined} value
 */
declare function setItemDataNumber(item: item, key: string, value: number | undefined): void;
/**
 * Gets a restraint from a list of eligible restraints and a group prioritization order
 * @param {{restraint: restraint, weight: number}[]} RestraintList
 * @param {string[]} GroupOrder
 * @returns {restraint}
 */
declare function KDChooseRestraintFromListGroupPri(RestraintList: {
    restraint: restraint;
    weight: number;
}[], GroupOrder: string[]): restraint;
/**
 *
 * @param {string} CopyOf - The rope family to copy
 * @param {string} idSuffix - The suffix to add to the rope family
 * @param {string} ModelSuffix - The suffix for the rope model to use
 * @param {string} tagBase - The base for the enemy tags
 * @param {string[]} allTag - adds a tag to all of the ropes if specified
 * @param {number} basePower - Base opower level
 * @param {KDRestraintPropsBase} properties - Restraint properties to override
 * @param {KinkyDungeonEvent[]} extraEvents - Extra events to add on
 * @param {KDEscapeChanceList} baseStruggle - Increase to base struggle amounts
 * @param {KDEscapeChanceList} multStruggle - Multiplier to base struggle amounts, AFTER baseStruggle
 * @param {LayerFilter} [Filters] - Multiplier to base struggle amounts, AFTER baseStruggle
 * param {{name: string, description: string}} strings - Generic strings for the rope type
 */
declare function KDAddRopeVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, allTag: string[], basePower: number, properties: KDRestraintPropsBase, extraEvents: KinkyDungeonEvent[], baseStruggle: KDEscapeChanceList, multStruggle: KDEscapeChanceList, Filters?: LayerFilter): void;
/**
 * Converts restraint tags to a copy that is also a list (in case data structure changes)
 * @param {restraint} restraint
 * @returns {string[]}
 */
declare function KDGetRestraintTags(restraint: restraint): string[];
declare let KinkyDungeonRestraintsLocked: any[];
declare let KDWillEscapePenalty: number;
declare let KDWillEscapePenaltyArms: number;
declare let KDWillEscapePenaltyStart: number;
declare let KDWillEscapePenaltyStartArms: number;
declare let KDWillEscapePenaltyEnd: number;
declare let KDMinEscapeRate: number;
declare let KDMinPickRate: number;
declare let KDStruggleTime: number;
declare namespace StruggleTypeHandThresh {
    const Struggle: number;
    const Unlock: number;
    const Pick: number;
    const Cut: number;
    const Remove: number;
}
declare let KDRestraintArchetypes: string[];
declare let KinkyDungeonCurrentEscapingItem: any;
declare let KinkyDungeonCurrentEscapingMethod: any;
declare let KinkyDungeonStruggleTime: number;
declare let KinkyDungeonMultiplayerInventoryFlag: boolean;
declare let KinkyDungeonItemDropChanceArmsBound: number;
declare let KinkyDungeonKeyJamChance: number;
declare let KinkyDungeonKeyPickBreakAmount: number;
declare let KinkyDungeonKeyPickBreakAmountBase: number;
declare let KinkyDungeonPickBreakProgress: number;
declare let KinkyDungeonKnifeBreakAmount: number;
declare let KinkyDungeonKnifeBreakAmountBase: number;
declare let KinkyDungeonKnifeBreakProgress: number;
declare let KinkyDungeonEnchKnifeBreakAmount: number;
declare let KinkyDungeonEnchKnifeBreakAmountBase: number;
declare let KinkyDungeonEnchKnifeBreakProgress: number;
declare let KinkyDungeonMaxImpossibleAttempts: number;
declare let KinkyDungeonEnchantedKnifeBonus: number;
declare let KDLocksmithPickBonus: number;
declare let KDLocksmithBonus: number;
declare let KDLocksmithSpeedBonus: number;
declare let KDCluelessPickBonus: number;
declare let KDCluelessBonus: number;
declare let KDCluelessSpeedBonus: number;
declare let KDFlexibleBonus: number;
declare let KDFlexibleSpeedBonus: number;
declare let KDInflexibleMult: number;
declare let KDInflexibleSpeedBonus: number;
declare let KDUnchainedBonus: number;
declare let KDDamselBonus: number;
declare let KDDamselPickAmount: number;
declare let KDArtistBonus: number;
declare let KDBunnyBonus: number;
declare let KDBunnyKnifeAmount: number;
declare let KDBunnyEnchKnifeAmount: number;
declare let KDSlipperyBonus: number;
declare let KDDollBonus: number;
declare let KDEscapeeBonus: number;
declare let KDDragonBonus: number;
declare let KDStrongBonus: number;
declare let KDWeakBonus: number;
declare let KDBondageLoverAmount: number;
/**
 * @type {Map<string, restraint>}
 */
declare let KinkyDungeonRestraintsCache: Map<string, restraint>;
declare const KinkyDungeonStrictnessTable: Map<string, string[]>;
/** Enforces a sort of progression of restraining loosely based on strictness, useful for progressive stuff like applying curses to zones */
declare let KDRestraintGroupProgressiveOrderStrict: string[];
/** A funner restraining order, starting with non-impactful then locking down spells and finally sealing in helplessness */
declare let KDRestraintGroupProgressiveOrderFun: string[];
/**
 * @type {Map<string, {r: restraint, w:number}[]>}
 */
declare let KDRestraintsCache: Map<string, {
    r: restraint;
    w: number;
}[]>;
declare let KDTetherGraphics: import("pixi.js").Graphics;
declare let KDGameBoardAddedTethers: boolean;
declare let KDLeashPullCost: number;
declare let KDLeashPullKneelTime: number;
declare let KDAffinityList: string[];
declare namespace KDUnboundAffinityOverride {
    const Sticky: boolean;
    const Edge: boolean;
    const Hook: boolean;
}
/** Tags which the 'agnostic' option on KinkyDungeonGetRestraint does not override */
declare let KDNoOverrideTags: string[];
declare let KinkyDungeonRestraintAdded: boolean;
declare let KinkyDungeonCancelFlag: boolean;
declare namespace KDRopeParts {
    const ArmsBoxtie: {};
    const ArmsWrist: {};
    const Cuffs: {};
    const CuffsAdv: {};
    namespace Hogtie {
        const enemyTagSuffix: string;
    }
    const Feet: {};
    const Legs: {};
    const Belt: {};
    const Harness: {};
    const Crotch: {};
}
