declare var InformationSheetBackground: string;
/**
 * The character we're showing the information of.
 *
 * Also used by OnlineProfile.js
 * @type {null | Character | NPCCharacter}
 */
declare var InformationSheetSelection: null | Character | NPCCharacter;
/** @type {ScreenSpecifier | null} */
declare var InformationSheetReturnScreen: ScreenSpecifier | null;
declare const InformationSheetIDs: Readonly<{
    screen: "information-sheet-screen";
    exit: "information-sheet-exit";
    title: "information-sheet-title";
    preference: "information-sheet-preference";
    friendList: "information-sheet-friend-list";
    profile: "information-sheet-profile";
    ownersNotes: "information-sheet-owners-notes";
    tooltip: "information-sheet-tooltip";
    portrait: "information-sheet-portrait";
    allowedInteractions: "information-sheet-allowed-interactions";
}>;
declare const InformationSheetLoverStages: {
    readonly 0: "Dating";
    readonly 1: "Engaged";
    readonly 2: "Married";
};
/**
 * Skill rows whose modifier can expire while the sheet is open.
 * @type {{ type: SkillType, value: HTMLElement, modifier: HTMLElement }[]}
 */
declare let InformationSheetSkillWatches: {
    type: SkillType;
    value: HTMLElement;
    modifier: HTMLElement;
}[];
/** @type {number} */
declare let InformationSheetSkillRefreshAt: number;
/**
 * Loads the Information Sheet, cache the sub screens
 * @type {ScreenLoadHandler}
 */
declare function InformationSheetLoad(): Promise<void>;
/**
 * Main function of the character info screen. It's called continuously, so be careful
 * to add time consuming functions or loops here
 * @returns {void} - Nothing
 */
declare function InformationSheetRun(): void;
/**
 * Handles the click events on the screen
 * @type {MouseEventListener}
 */
declare function InformationSheetClick(): void;
declare function InformationSheetResize(): void;
/**
 * Cleanup all elements, if the user exits the screen
 * @type {ScreenExitHandler}
 */
declare function InformationSheetExit(): void;
declare function InformationSheetUnload(): void;
/**
 * Loads the information sheet for a character
 * @param {Character} C - The character whose information sheet should be displayed
 * @returns {void} - Nothing
 */
declare function InformationSheetLoadCharacter(C: Character): void;
/**
 * Generate menu buttons for the given character.
 * @param {Character} C
 * @returns {HTMLElement[]}
 */
declare function InformationSheetMenuButtons(C: Character): HTMLElement[];
/**
 * @param {string} id
 * @param {(this: HTMLButtonElement, ev: PointerEvent) => void} onClick
 * @param {string} image
 * @param {string} tooltip
 * @param {readonly string[]} [classList]
 * @returns {HTMLButtonElement}
 */
declare function InformationSheetMenuButton(id: string, onClick: (this: HTMLButtonElement, ev: PointerEvent) => void, image: string, tooltip: string, classList?: readonly string[]): HTMLButtonElement;
/**
 * Generate DOM elements for the screen's contents.
 * @param {Character} C
 * @returns {HTMLDivElement}
 */
declare function InformationSheetContent(C: Character): HTMLDivElement;
/**
 * Returns the screen layout to use for the given character.
 * @param {Character} C
 * @returns {CharacterType}
 */
declare function InformationSheetLayout(C: Character): CharacterType;
/**
 * @param {Character} C
 * @returns {HTMLElement}
 */
declare function InformationSheetIdentitySection(C: Character): HTMLElement;
/**
 * @param {string} key
 * @param {string} value
 * @param {string | null} [valueClass]
 * @param {boolean} [copy]
 * @returns {[HTMLElement, HTMLElement]}
 */
declare function InformationSheetFact(key: string, value: string, valueClass?: string | null, copy?: boolean): [HTMLElement, HTMLElement];
/**
 * Copies the value on press.
 * @param {string} text
 * @returns {HTMLSpanElement}
 */
declare function InformationSheetCopy(text: string): HTMLSpanElement;
/**
 * @param {Character} C
 * @returns {HTMLParagraphElement}
 */
declare function InformationSheetDifficulty(C: Character): HTMLParagraphElement;
/**
 * @param {string} label
 * @param {number} start
 * @param {readonly string[]} [classList]
 * @returns {HTMLParagraphElement}
 */
declare function InformationSheetDuration(label: string, start: number, classList?: readonly string[]): HTMLParagraphElement;
/**
 * @param {number} start
 * @returns {string}
 */
declare function InformationSheetTimestampTooltip(start: number): string;
/**
 * @param {HTMLElement} host
 * @param {string} text
 */
declare function InformationSheetHover(host: HTMLElement, text: string): void;
/**
 * @param {HTMLElement} anchor
 * @param {string} text
 */
declare function InformationSheetShowTooltip(anchor: HTMLElement, text: string): void;
declare function InformationSheetHideTooltip(): void;
/**
 * @param {Character} C
 * @returns {HTMLElement}
 */
declare function InformationSheetOwnership(C: Character): HTMLElement;
/**
 * @param {string} titleKey
 * @param {readonly HTMLElement[]} entries
 * @param {string} [emptyKey]
 * @param {string} [area]
 * @param {boolean} [scroll]
 * @returns {HTMLElement}
 */
declare function InformationSheetSection(titleKey: string, entries: readonly HTMLElement[], emptyKey?: string, area?: string, scroll?: boolean): HTMLElement;
/**
 * @param {Character} C
 * @returns {HTMLElement}
 */
declare function InformationSheetOwnerSection(C: Character): HTMLElement;
/**
 * @param {Character} C
 * @returns {HTMLElement}
 */
declare function InformationSheetRelationshipSection(C: Character): HTMLElement;
/**
 * @param {string} name
 * @param {0 | 1 | 2 | undefined} stage
 * @param {number} start
 * @param {number} [memberNumber]
 * @returns {HTMLElement}
 */
declare function InformationSheetLoverEntry(name: string, stage: 0 | 1 | 2 | undefined, start: number, memberNumber?: number): HTMLElement;
/**
 * @param {number} love
 * @returns {string}
 */
declare function InformationSheetLoveQualifier(love: number): string;
/**
 * @param {number} love
 * @returns {HTMLDivElement}
 */
declare function InformationSheetAffection(love: number): HTMLDivElement;
/**
 * Zero sits on the center line. Negative values grow left, positive values grow right.
 * @param {number} value
 * @param {number} max
 * @param {readonly string[]} [classList]
 * @param {string} [color]
 * @returns {HTMLDivElement}
 */
declare function InformationSheetBimeter(value: number, max: number, classList?: readonly string[], color?: string): HTMLDivElement;
/**
 * @param {PlayerCharacter} C
 * @returns {HTMLElement}
 */
declare function InformationSheetSkillSection(C: PlayerCharacter): HTMLElement;
/**
 * @param {PlayerCharacter} C
 * @param {SkillType} type
 * @returns {HTMLDivElement}
 */
declare function InformationSheetSkill(C: PlayerCharacter, type: SkillType): HTMLDivElement;
/**
 * Generates the skill progress bar widget.
 * @param {number} level
 * @param {number} progress
 * @param {number} ratio
 * @returns {HTMLDivElement}
 */
declare function InformationSheetSkillPips(level: number, progress: number, ratio: number): HTMLDivElement;
/**
 * @param {PlayerCharacter} C
 * @param {SkillType} type
 * @returns {string}
 */
declare function InformationSheetSkillValue(C: PlayerCharacter, type: SkillType): string;
/**
 * @param {number} modifier
 * @param {number} duration
 * @returns {string}
 */
declare function InformationSheetModifierText(modifier: number, duration: number): string;
/**
 * @param {PlayerCharacter} C
 */
declare function InformationSheetRefreshSkills(C: PlayerCharacter): void;
/**
 * @param {Character} C
 * @returns {HTMLElement}
 */
declare function InformationSheetReputationSection(C: Character): HTMLElement;
/**
 * @param {Character} C
 * @param {ReputationType} type
 * @param {number} value
 * @returns {HTMLDivElement}
 */
declare function InformationSheetDualReputation(C: Character, type: ReputationType, value: number): HTMLDivElement;
/** @type {Record<ServerChatRoomLanguage | "TW", string>} */
declare const InformationSheetSortLocale: Record<ServerChatRoomLanguage | "TW", string>;
/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
declare function InformationSheetCompareText(a: string, b: string): number;
/**
 * @param {string} label
 * @param {string} value
 * @param {number} amount
 * @param {number} max
 * @param {string} color
 * @returns {HTMLDivElement}
 */
declare function InformationSheetMeterStat(label: string, value: string, amount: number, max: number, color: string): HTMLDivElement;
/**
 * @param {NPCCharacter} C
 * @returns {HTMLElement}
 */
declare function InformationSheetTraitSection(C: NPCCharacter): HTMLElement;
/**
 * Label and value on one row. Further nodes, such as a meter, sit under that row.
 * Pass an element for `value` when the value is not plain text.
 * @param {string} label
 * @param {string | HTMLElement} value
 * @param {readonly HTMLElement[]} [extra]
 * @param {readonly string[]} [classList]
 * @returns {HTMLDivElement}
 */
declare function InformationSheetTextStat(label: string, value: string | HTMLElement, extra?: readonly HTMLElement[], classList?: readonly string[]): HTMLDivElement;
/**
 * @returns {HTMLLabelElement}
 */
declare function InformationSheetPermissionsSection(): HTMLLabelElement;
