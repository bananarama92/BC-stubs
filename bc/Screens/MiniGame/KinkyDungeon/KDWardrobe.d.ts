declare function KDInitCurrentPose(blank: any): void;
declare function KDDrawSavedColors(X: any, Y: any, max: any, C: any): void;
/**
 *
 * @param {number} X
 * @param {number} Y
 * @param {Character} C
 * @param {Model} Model
 */
declare function KDDrawColorSliders(X: number, Y: number, C: Character, Model: Model): void;
declare function KDDrawPoseButtons(C: any, X?: number, Y?: number, allowRemove?: boolean, dress?: boolean, updateDesired?: boolean): void;
/**
 * Updates the mopel list, only altering a level if the specified altered level is that low
 * @param {*} level
 */
declare function KDUpdateModelList(level?: any): void;
/** Call BEFORE making any changes */
declare function KDChangeWardrobe(C: any): void;
/**
 *
 * @param {Character} C
 */
declare function KDDrawModelList(X: any, C: Character): void;
declare function KDDrawWardrobe(screen: any, Character: any): void;
declare function KDSaveCodeOutfit(): void;
declare function KDRestoreOutfit(): void;
declare function KDSaveOutfitInfo(): void;
declare function KDRefreshOutfitInfo(): void;
declare let KDConfirmType: string;
declare let KinkyDungeonReplaceConfirm: number;
declare let KDCurrentOutfit: number;
declare let KDMaxOutfits: number;
declare let KDMaxOutfitsDisplay: number;
declare let KDMaxOutfitsIndex: number;
declare let KDOutfitInfo: any[];
declare let KDOutfitStore: {};
declare let KDOutfitOriginalStore: {};
declare let KDModelListMax: number;
declare let KDModelListViewSkip: number;
declare let KDModelList_Categories_index: number;
declare namespace KDModelList_Categories_viewindex {
    const index: number;
}
declare let KDModelList_Categories: any[];
declare let KDModelList_Toplevel_index: number;
declare namespace KDModelList_Toplevel_viewindex {
    const index_1: number;
    export { index_1 as index };
}
declare let KDModelList_Toplevel: any[];
declare let KDModelList_Sublevel_index: number;
declare namespace KDModelList_Sublevel_viewindex {
    const index_2: number;
    export { index_2 as index };
}
declare let KDModelList_Sublevel: any[];
declare let KDWardrobeCategories: string[];
declare let KDSelectedModel: any;
/** @type {LayerFilter} */
declare let KDColorSliders: LayerFilter;
declare namespace KDColorSliderColor {
    const red: string;
    const green: string;
    const blue: string;
}
declare let KDCurrentLayer: string;
declare let KDSavedColorCount: number;
declare let KDSavedColors: any[];
declare let KDWardrobe_PoseArms: string[];
declare let KDWardrobe_PoseLegs: string[];
declare let KDWardrobe_PoseEyes: any[];
declare let KDWardrobe_PoseEyes2: any[];
declare let KDWardrobe_PoseBrows: any[];
declare let KDWardrobe_PoseBrows2: any[];
declare let KDWardrobe_PoseMouth: any[];
declare let KDWardrobe_PoseBlush: any[];
declare let KDWardrobe_CurrentPoseArms: string;
declare let KDWardrobe_CurrentPoseLegs: string;
declare let KDWardrobe_CurrentPoseEyes: any;
declare let KDWardrobe_CurrentPoseEyes2: any;
declare let KDWardrobe_CurrentPoseBrows: any;
declare let KDWardrobe_CurrentPoseBrows2: any;
declare let KDWardrobe_CurrentPoseMouth: any;
declare let KDWardrobe_CurrentPoseBlush: any;
