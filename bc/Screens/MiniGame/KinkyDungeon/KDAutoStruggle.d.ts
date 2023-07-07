/**
 * Function to reset certain state variables of auto struggle
 */
declare function KDInitAutoStruggle(): void;
/**
 * Updates the wiggle point
 * @param {entity} player
 * @param {boolean} [force]
 */
declare function KDAS_UpdateWigglePoint(player: entity, force?: boolean): void;
/**
 * Returns if the player is on the wiggle point or not
 * @param {entity} player
 * @returns {boolean}
 */
declare function KDAS_InWigglePoint(player: entity): boolean;
/**
 * Returns an array of tiles the player can move near the wiggle points
 * @param {entity} player
 * @param {boolean} goCloser - If the player has to move closer to the wiggle point
 * @returns {{x: number, y: number}[]}
 */
declare function KDAS_GetMovableWigglePoint(player: entity, goCloser: boolean): {
    x: number;
    y: number;
}[];
/**
 *
 * @param {string} result
 * @returns {number}
 */
declare function KDAS_SwitchFavor(result: string): number;
/**
 *
 * @param {string} result
 * @returns {number}
 */
declare function KDAS_SwitchDelay(result: string): number;
/**
 * Master function for handling the Auto Struggle state machine
 * @param {entity} player
 */
declare function KDHandleAutoStruggle(player: entity): void;
/**
 * Updates the KDAutoStruggleData state data to accurately reflect the player
 * @param {entity} player
 */
declare function KDAutoStruggleEvaluate(player: entity): void;
/**
 * Updates the KDAutoStruggleData decidedAction variable
 * @param {entity} player
 */
declare function KDAutoStruggleMakeDecision(player: entity): void;
/**
 * Executes the run decision
 * @param {entity} player
 */
declare function KDAutoStruggleRunDecision(player: entity): KDAS_Result;
declare function KDAutoWaitIndexID(player: any, group: any, index: any, action: any): string;
declare namespace KDAutoStruggleData {
    const lastTick: number;
    const lastActionQueue: KDAS_Result[];
    const decidedAction: string;
    const possibleActions: {
        action: KDAS_Action;
        weight: number;
    }[];
    const totalDespair: Record<string, number>;
    const currentFocusGroup: string;
    const currentFocusIndex: number;
    const currentFocusDespair: number;
    const currentFocusDespairTarget: number;
    const overallDespair: number;
    const lastDelay: number;
    const wigglePoint: {
        x: number;
        y: number;
    };
    const wiggleDist: number;
}
/** @type {Record<string, {itemweight?: (player: entity, item: item) => number, playerweight?: (player: entity) => number, action: (player: entity) => KDAS_Result}>} */
declare let KDAutoStruggleActions: Record<string, {
    itemweight?: (player: entity, item: item) => number;
    playerweight?: (player: entity) => number;
    action: (player: entity) => KDAS_Result;
}>;
type KDAS_Result = {
    action: string;
    id: string;
    result: string;
    favorability: number;
    delay: number;
};
type KDAS_Action = {
    action: string;
    id: string;
    group: string;
    index: number;
};
