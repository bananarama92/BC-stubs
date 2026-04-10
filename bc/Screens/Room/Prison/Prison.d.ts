declare function PrisonPlayerIsHandcuffed(): boolean;
declare function PrisonPlayerIsPanelGag(): boolean;
declare function PrisonPlayerIsLegTied(): boolean;
declare function PrisonPlayerIsFeetTied(): boolean;
declare function PrisonPlayerIsOTMGag(): boolean;
declare function PrisonPlayerIsStriped(): boolean;
declare function PrisonPlayerIsBadGirl(): boolean;
declare function PrisonPlayerIsBadGirlThief(): boolean;
declare function PrisonPlayerHasSleepingPills(): boolean;
declare function PrisonPlayerHasSpankingToys(): boolean;
declare function PrisonPlayerHasKeys(): boolean;
declare function PrisonSubIsHandcuffedOut(): boolean;
declare function PrisonSubIsBehindBars(): boolean;
declare function PrisonSubIsFree(): boolean;
declare function PrisonSubAskForCuff(): boolean;
declare function PrisonSubCanStripSearch(): boolean;
declare function PrisonSubCanClothBack(): boolean;
declare function PrisonLoad(): Promise<void>;
declare function PrisonRun(time: number): void;
declare function PrisonClick(event: PointerEvent): void;
/**
 * Player going in cell
 */
declare function PrisonCellPlayerIn(): void;
/**
 * Player leave in cell
 */
declare function PrisonCellPlayerOut(): void;
/**
 * Add the item as a confiscated item
 * @param {InventoryItem[]} items
 */
declare function PrisonSaveConfiscatedItems(items: InventoryItem[]): void;
/**
 * Restore all of the confiscated items and clear the list
 */
declare function PrisonRestoreConfiscatedItems(): void;
/**
 * Maid leave the Prison for 5-15 second
 */
declare function PrisonMaidLeave(): void;
/**
 * Player releases and get back his Cloth, only if the Maid is not angry
 * @param {Character} C
 */
declare function PrisonCellRelease(C: Character): void;
/**
 * The Strip Search Process for the Player
 * @param {Character} C
 */
declare function PrisonHavySearch(C: Character): void;
/**
 * The Light Search Prozess for the Player
 * @param {Character} C
 */
declare function PrisonLightSearch(C: Character): void;
/**
 * The Cloth Back Prozess for Prisoner
 * @param {Character} C
 */
declare function PrisonerClothBack(C: Character): void;
/**
 * Remove the Letherbelts from the Prisoner
 */
declare function PrisonCuffsRelief(): void;
/**
 * Light Torture for the Prison Player
 */
declare function PrisonMaidLightTorture(): void;
/**
 * Heavy Torture for the Prison Player
 */
declare function PrisonMaidHevyTorture(): void;
/**
 * Get Hadcuffed Key from Prisoner
 * @param {Character} C
 */
declare function PrisonDisableKey(C: Character): void;
/**
 * Player Ask in Dialog
 */
declare function PrisonCellPlayerAsk(): void;
/**
 * Player Shake the Cellbars
 */
declare function PrisonCellPlayerShake(): void;
/**
 * Player try to escape
 */
declare function PrisonCellPlayerTry(): void;
/**
 * Player Wimper to Maid
 */
declare function PrisonCellPlayerWimper(): void;
/**
 * Player wait for Maids-Action
 */
declare function PrisonCellPlayerWait(): void;
/**
 * PrisonSub leave the Room
 */
declare function PrisonSubSendAway(): void;
/**
 * Check if Prison NPC Wear Handcuffes
 */
declare function PrisonSubHandcuffing(): void;
/**
 * Shoves NPC in Cell
 */
declare function PrisonCellSubIn(): void;
/**
 * Strip Search the NPC
 */
declare function PrisonSubHavySearch(): void;
/**
 * Let NPC out of Cell
 */
declare function PrisonCellSubOut(): void;
/**
 * The Prison NPC Leave the Cell
 */
declare function PrisonLeaveCell(): void;
/**
 * Give Cloth back to Sub
 */
declare function PrisonSubClothBack(): void;
/**
 * Become a Member of the BadGirlGang
 */
declare function PrisonBecomeBadGirl(): void;
/**
 * Leave the BadGirlGang
 */
declare function PrisonLeaveBadGirl(): void;
/**
 * Wear NPC as Police
 */
declare function PrisonWearPoliceEquipment(C: any): void;
/**
 * Determine how strongly the player is wanted for MainHall
 */
declare function PrisonWantedPlayer(): 1 | 3 | 5 | 7 | undefined;
/**
 * Catch by Police in MainHall
 */
declare function PrisonMeetPoliceIntro(RoomBackground: any): Promise<void>;
declare function PrisonPutHandsInTheAir(): void;
declare function PrisonRaiseHandsHigher(): void;
declare function PrisonCatchKneel(): void;
declare function PrisonCatchHandcuffed(): void;
/**
 * player fails to escape if they try after kneeling, Police puts them in hogtie as punishment
 */
declare function PrisonCatchKneelingEscape(): void;
declare function PrisonCatchComplain(): void;
declare function PrisonCatchAdmitDefeat(): void;
/**
 * When a fight starts between the player and the Police
 */
declare function PrisonFightPolice(): void;
/**
 * When the fight against Police ends
 */
declare function PrisonFightPoliceEnd(): Promise<void>;
/**
 * Outro for the Fight if Player win
 */
declare function PrisonFightPoliceOutro(): void;
/**
 * Player is caught by Police and imprisoned
 */
declare function PrisonCatchByPolice(): Promise<void>;
/**
 * Change the Prison Behavior >0 Good, <0 Bad
 */
declare function PrisonSetBehavior(Behavior: any): void;
declare function PrisonArrestHandoverDices(): void;
declare function PrisonArrestHandoverKeys(): void;
declare function PrisonArrestHandoverSleepingPills(): void;
declare function PrisonArrestHandoverSpankingToys(): void;
declare function PrisonArrestStripOuterCloth(): void;
declare function PrisonCharacterIsInUnderwear(): boolean;
declare function PrisonArrestStripUnderware(): void;
declare function PrisonArrestSuit(): void;
declare function PrisonArrestShackle(): void;
declare function PrisonArrestEquipmentSearch(): void;
declare function PrisonArrestConfiscatDices(): void;
declare function PrisonArrestConfiscatKeys(): void;
declare function PrisonArrestConfiscatSleepingPills(): void;
declare function PrisonArrestConfiscatSpankingToys(): void;
declare function PrisonArrestLeave(): void;
declare function PrisonDiceBack(): void;
declare var PrisonBackground: string;
/** @type {null | number} */
declare var PrisonNextEventTimer: null | number;
declare var PrisonNextEvent: boolean;
declare var PrisonBehavior: number;
/** @type {null | NPCCharacter} */
declare var PrisonMaid: null | NPCCharacter;
/** @type {null | Item[]} */
declare var PrisonMaidAppearance: null | Item[];
declare var PrisonMaidIsPresent: boolean;
declare var PrisonMaidIsAngry: boolean;
/** @type {null | string} */
declare var PrisonMaidCharacter: null | string;
declare var PrisonMaidCharacterList: string[];
/** @type {null | number} */
declare var PrisonMaidChaotic: null | number;
/** @type {null | NPCCharacter} */
declare var PrisonSub: null | NPCCharacter;
/** @type {null | Item[]} */
declare var PrisonSubAppearance: null | Item[];
declare var PrisonSubBehindBars: boolean;
declare var PrisonSubSelfCuffed: boolean;
declare var PrisonSubIsPresent: boolean;
declare var PrisonSubAskedCuff: boolean;
declare var PrisonSubIsLeaveOut: boolean;
declare var PrisonSubIsStripSearch: boolean;
/** @type {null | NPCCharacter} */
declare var PrisonPolice: null | NPCCharacter;
declare var PrisonPoliceIsPresent: boolean;
declare var PrisonPlayerCatchedBadGirl: boolean;
/** @type {null | Item[]} */
declare var PrisonPlayerAppearance: null | Item[];
declare var PrisonPlayerBehindBars: boolean;
declare var PrisonPlayerForIllegalChange: boolean;
