/** @type {[number, number, number, number]} */
declare const AssetUpperOverflowAlpha: [number, number, number, number];
/** @type {[number, number, number, number]} */
declare const AssetLowerOverflowAlpha: [number, number, number, number];
/**
 * The list of available effects.
 *
 * @satisfies {Partial<Record<EffectName, EffectName>>}
 */
declare const E: {
    /** Prevents walking and kneeling without the kneel/stand minigame. */
    readonly Freeze: "Freeze";
    /** Prevents accessing the wardrobe. */
    readonly BlockWardrobe: "BlockWardrobe";
    /** Indicates that the character is "blocked". Acts as a restraint. */
    readonly Block: "Block";
    /** Indicates that the character is mounted onto something. Acts as a restraint and blocks moving around. */
    readonly Mounted: "Mounted";
    /** Enable items that have the CuffedFeet prerequisite to be applied. */
    readonly CuffedFeet: "CuffedFeet";
    /** Enable items that have the CuffedLegs prerequisite to be applied. */
    readonly CuffedLegs: "CuffedLegs";
    /** Enable items that have the CuffedArms prerequisite to be applied. */
    readonly CuffedArms: "CuffedArms";
    /** Prevents items that have the NotChained prerequisite from being applied. */
    readonly IsChained: "IsChained";
    /** Locks the character's head in-place. Prevents nodding and shaking activities on it. */
    readonly FixedHead: "FixedHead";
    /** Indicates the character can't use their fingers normally. Limits activities. */
    readonly MergedFingers: "MergedFingers";
    /** Prevents items that have the NotShackled prerequisite from being applied. */
    readonly Shackled: "Shackled";
    /** Prevents leashing items from working. */
    readonly Tethered: "Tethered";
    /** Indicates the character cannot be interacted with and can't interact back. */
    readonly Enclose: "Enclose";
    /** If set, this effect will make a player immobile on the map. */
    readonly MapImmobile: "MapImmobile";
    /** If set, this effect will make a player move at full speed through water tiles. */
    readonly MapSwim: "MapSwim";
    /** Indicates the character can be interacted with but can't interact back. */
    readonly OneWayEnclose: "OneWayEnclose";
    /** Enable items that have the OnBed prerequisite to be applied. */
    readonly OnBed: "OnBed";
    /** Prevents items that have the NotLifted prerequisite to be applied. */
    readonly Lifted: "Lifted";
    readonly Suspended: "Suspended";
    /** Indicates the character is slowed. Used when exiting chatrooms. */
    readonly Slow: "Slow";
    /**
     * Marks the item as filling the character's vulva.
     *
     * Used when checking activities' prerequisites and the stimulation events
     */
    readonly FillVulva: "FillVulva";
    /**
     * Marks the item as being some sort of shaft extending out of the vulva.
     *
     * Used to block things like chastity from closing.
     */
    readonly VulvaShaft: "VulvaShaft";
    /**
     * Marks the item as filling the character's butt.
     *
     * Used when checking activities' prerequisites and the auto-stimulation events.
     */
    readonly IsPlugged: "IsPlugged";
    /**
     * Marks the item as a urethral insert.
     *
     * Used when checking if the item should allow the penis to be limp.
     */
    readonly ForcedErection: "ForcedErection";
    /**
     * Marks the item as being a "vibrator" kind-of item.
     *
     * Make the item's Vibrator-related properties be taken into account for arousal,
     * as well as the stuttering effect.
     */
    readonly Egged: "Egged";
    /**
     * Indicates an Effect.Egged item as being vibrating.
     *
     * Normally handled automatically by VibrationMode. Makes the item preview wobble
     * in the inventory, as well as cause auto-stimulation events.
     */
    readonly Vibrating: "Vibrating";
    /**
     * Marks the item as causing the character to be edged.
     *
     * Normally handled automatically by VibrationMode. Causes the character's arousal
     * to be capped, and ruins its orgasms.
     */
    readonly Edged: "Edged";
    /**
     * Marks the item as causing the character to be denied.
     *
     * Causes the character's arousal to be capped (higher that Edged).
     */
    readonly DenialMode: "DenialMode";
    /**
     * Marks the item as ruining orgasms.
     *
     * Requires DenialMode. Makes the character unable to fully orgasm.
     */
    readonly RuinOrgasms: "RuinOrgasms";
    /** Marks the item as a remote. Looks non-functional. */
    readonly Remote: "Remote";
    /** Marks the item as needing a remote to be changed. */
    readonly UseRemote: "UseRemote";
    /** Marks the item as preventing remotes from being used on the character. */
    readonly BlockRemotes: "BlockRemotes";
    /**
     * Marks the item as applying chastity.
     *
     * Prevents items that have the NotChaste prerequisite from being applied.
     * Allows the item to be taken off at the club management.
     */
    readonly Chaste: "Chaste";
    /**
     * Marks the item as applying breast chastity.
     *
     * Allows the item to be taken off at the club management.
     */
    readonly BreastChaste: "BreastChaste";
    readonly ButtChaste: "ButtChaste";
    /** Marks the item as being usable as a leash. */
    readonly Leash: "Leash";
    /** Marks a leash item as being held. */
    readonly IsLeashed: "IsLeashed";
    /**
     * Marks the item as being a crotchrope-style item.
     *
     * Used for the auto-stimulation events.
     */
    readonly CrotchRope: "CrotchRope";
    /**
     * Indicates that the item hangs from the character and can wiggle from it.
     *
     * Used as part of the stimulation event system.
     */
    readonly Wiggling: "Wiggling";
    /** Marks the item as being a shock-dispensing item. */
    readonly ReceiveShock: "ReceiveShock";
    /** Marks the item as being a trigger for shock-dispensing items. */
    readonly TriggerShock: "TriggerShock";
    /** Marks the item as requiring collar-permissions (Futuristic). */
    readonly OpenPermission: "OpenPermission";
    /** Marks the item as requiring arm-permissions (Futuristic). */
    readonly OpenPermissionArm: "OpenPermissionArm";
    /** Marks the item as requiring arm-permissions (Futuristic). */
    readonly OpenPermissionLeg: "OpenPermissionLeg";
    /** Marks the item as requiring chastity-permissions (Futuristic). */
    readonly OpenPermissionChastity: "OpenPermissionChastity";
    readonly VR: "VR";
    readonly VRAvatars: "VRAvatars";
    readonly KinkyDungeonParty: "KinkyDungeonParty";
    readonly HideRestraints: "HideRestraints";
    /** Marks the item as being some kind of lock. @todo not renamed because layers usually have that name */
    readonly Lock: "Lock";
    /** Disables the item from being lock-picked by its wearer. */
    readonly NotSelfPickable: "NotSelfPickable";
    readonly UnlockMetalPadlock: "UnlockMetalPadlock";
    readonly UnlockOwnerPadlock: "UnlockOwnerPadlock";
    readonly UnlockOwnerTimerPadlock: "UnlockOwnerTimerPadlock";
    readonly UnlockLoversPadlock: "UnlockLoversPadlock";
    readonly UnlockLoversTimerPadlock: "UnlockLoversTimerPadlock";
    readonly UnlockFamilyPadlock: "UnlockFamilyPadlock";
    readonly UnlockMistressPadlock: "UnlockMistressPadlock";
    readonly UnlockMistressTimerPadlock: "UnlockMistressTimerPadlock";
    readonly UnlockPandoraPadlock: "UnlockPandoraPadlock";
    readonly UnlockMetalCuffs: "UnlockMetalCuffs";
    readonly UnlockEscortAnkleCuffs: "UnlockEscortAnkleCuffs";
    readonly UnlockPortalPanties: "UnlockPortalPanties";
    /**
     * Marks the item as blocking the character's mouth.
     *
     * Prevents items that have the NotLifted prerequisite to be applied.
     * Also used when checking activities' prerequisites.
     */
    readonly BlockMouth: "BlockMouth";
    /**
     * Marks the item as opening the character's mouth.
     *
     * Used when checking activities' prerequisites.
     */
    readonly OpenMouth: "OpenMouth";
    /**
     * Indicates that the item bulges out from the character's mouth.
     *
     * Prevents items that wrap the head to be applied.
     */
    readonly ProtrudingMouth: "ProtrudingMouth";
    readonly GagVeryLight: "GagVeryLight";
    readonly GagEasy: "GagEasy";
    readonly GagLight: "GagLight";
    readonly GagNormal: "GagNormal";
    readonly GagMedium: "GagMedium";
    readonly GagHeavy: "GagHeavy";
    readonly GagVeryHeavy: "GagVeryHeavy";
    readonly GagTotal: "GagTotal";
    readonly GagTotal2: "GagTotal2";
    readonly GagTotal3: "GagTotal3";
    readonly GagTotal4: "GagTotal4";
    readonly RegressedTalk: "RegressedTalk";
    readonly BlindLight: "BlindLight";
    readonly BlindNormal: "BlindNormal";
    readonly BlindHeavy: "BlindHeavy";
    readonly BlindTotal: "BlindTotal";
    readonly BlurLight: "BlurLight";
    readonly BlurNormal: "BlurNormal";
    readonly BlurHeavy: "BlurHeavy";
    readonly BlurTotal: "BlurTotal";
    readonly DeafLight: "DeafLight";
    readonly DeafNormal: "DeafNormal";
    readonly DeafHeavy: "DeafHeavy";
    readonly DeafTotal: "DeafTotal";
    readonly CanEdge: "CanEdge";
};
/**
 * All the default {@link AssetGroupDefinition.PoseMapping} values for the various groups.
 * @satisfies {Partial<Record<AssetGroupName, AssetPoseMapping>>}
 */
declare const AssetPoseMapping: {
    readonly BodyLower: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly BodyUpper: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hogtied";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "";
        readonly Yoked: "Yoked";
    };
    readonly Bra: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Yoked: "Yoked";
    };
    readonly Bracelet: {
        readonly AllFours: "Hide";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "Hide";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly Yoked: "Yoked";
    };
    readonly Cloth: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hogtied";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly ClothLower: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly Corset: {
        readonly Hogtied: "Hogtied";
    };
    readonly Garters: {
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
        readonly AllFours: "Hide";
    };
    readonly Glasses: {};
    readonly Gloves: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly HandsLeft: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "Hide";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "Hide";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly HandsRight: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "Hide";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "Hide";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly ItemBoots: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
    };
    readonly ItemBreast: {
        readonly AllFours: "AllFours";
    };
    readonly ItemFeet: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Hide";
        readonly KneelingSpread: "Hide";
    };
    readonly ItemHandheld: {
        readonly AllFours: "Hide";
        readonly BackBoxTie: "Hide";
        readonly BackCuffs: "Hide";
        readonly BackElbowTouch: "Hide";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "Hide";
        readonly Yoked: "Hide";
    };
    readonly ItemHands: {
        readonly AllFours: "AllFours";
        readonly Hogtied: "Hide";
        readonly BackBoxTie: "Hide";
        readonly BackElbowTouch: "Hide";
        readonly BackCuffs: "BackCuffs";
        readonly OverTheHead: "OverTheHead";
        readonly Yoked: "Yoked";
    };
    readonly ItemHead: {};
    readonly ItemLegs: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
    };
    readonly ItemNipples: {
        readonly AllFours: "AllFours";
    };
    readonly ItemNipplesPiercings: {
        readonly AllFours: "AllFours";
    };
    readonly ItemPelvis: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
    };
    readonly ItemTorso2: {
        readonly AllFours: "AllFours";
        readonly Hogtied: "Hogtied";
    };
    readonly ItemTorso: {
        readonly AllFours: "AllFours";
        readonly Hogtied: "Hogtied";
    };
    readonly ItemVulva: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
    };
    readonly ItemVulvaPiercings: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
    };
    readonly Jewelry: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly AnkletLeft: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Hide";
        readonly KneelingSpread: "Hide";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly HandAccessoryLeft: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly Nipples: {
        readonly AllFours: "Hide";
    };
    readonly Panties: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
    };
    readonly Pussy: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
    };
    readonly AnkletRight: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
        readonly Kneel: "Hide";
        readonly KneelingSpread: "Hide";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly HandAccessoryRight: {
        readonly AllFours: "AllFours";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hide";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly Shoes: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly Socks: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly SocksLeft: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly SocksRight: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly Suit: {
        readonly AllFours: "Hide";
        readonly BackBoxTie: "BackBoxTie";
        readonly BackCuffs: "BackCuffs";
        readonly BackElbowTouch: "BackElbowTouch";
        readonly Hogtied: "Hogtied";
        readonly OverTheHead: "OverTheHead";
        readonly TapedHands: "TapedHands";
        readonly Yoked: "Yoked";
    };
    readonly SuitLower: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hogtied";
        readonly Kneel: "Kneel";
        readonly KneelingSpread: "KneelingSpread";
        readonly LegsClosed: "LegsClosed";
        readonly Spread: "Spread";
    };
    readonly Wings: {
        readonly AllFours: "Hide";
        readonly Hogtied: "Hide";
    };
};
/** @type {string[]} */
declare const AssetMalePantiesList: string[];
/** @type {string[]} */
declare const AssetMaleChasityCagesList: string[];
/**
 * 3D Custom Girl based assets
 * @type {AssetGroupDefinition[]}
 */
declare var AssetFemale3DCG: AssetGroupDefinition[];
/** 3D Custom Girl based pose
 * @type {Pose[]}
 */
declare var PoseFemale3DCG: Pose[];
/**
 * List of all available pose names in the game
 * @constant {AssetPoseName[]}
 */
declare var PoseFemale3DCGNames: AssetPoseName[];
/**
 * 3D Custom Girl based activities
 *
 * The ordering is supposed to match what body part they use, in order:
 * mouth, hand, feet, whole-body, head, then the item-related ones.
 * Inside that, they get sorted by softest to harshest, when that makes sense.
 *
 * @type {Activity[]}
 */
declare var ActivityFemale3DCG: Activity[];
/**
 * Display order for activities.
 * @type {ActivityName[]}
 */
declare let ActivityFemale3DCGOrdering: ActivityName[];
/**
 * 3D Custom Girl based fetishes
 * Modify PreferenceArousalFetishDefaultCompressedString if you add a new fetish
 * @type {Fetish[]}
 */
declare var FetishFemale3DCG: Fetish[];
/**
 * A set with all available fetish names.
 */
declare const FetishFemale3DCGNames: Set<FetishName>;
