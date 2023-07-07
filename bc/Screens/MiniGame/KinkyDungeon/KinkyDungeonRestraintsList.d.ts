declare let KDMagicLocks: string[];
declare let KDKeyedLocks: string[];
declare let KDHarnessLink: string[];
declare let KDCorsetLink: string[];
declare let KDBindable: string[];
declare let KDDevices: string[];
declare let KDElbowBind: string[];
declare let KDBoxBind: string[];
declare let KDWrappable: string[];
declare let KDArmbinderLink: string[];
declare let KDDressLink: string[];
declare let KDJacketLink: string[];
declare let KDJacketRender: string[];
declare let KDLegbinderLink: string[];
declare let KDLegbinderRender: string[];
declare let KDLegRopesBind: string[];
declare let KDLegRopesRender: string[];
declare let KDTapeLink: string[];
declare let KDTapeRender: string[];
declare let KDRubberLink: string[];
declare let KDBlindfoldLink: string[];
declare let KDVisorLink: string[];
declare let KDWrappingLink: string[];
declare let KDMaskLink: any[];
declare let KDStuffingLink: string[];
declare let KDBallGagLink: string[];
declare let KDFlatGagLink: string[];
declare let KDPlugGagLink: string[];
declare let KDCollarLink: string[];
/**
 * @type {restraint[]}
 */
declare const KinkyDungeonRestraints: restraint[];
/**
 * @type {Record<string, KDLockType>}
 */
declare let KDLocks: Record<string, KDLockType>;
declare namespace KDControlHarnessCategories {
    namespace Cuffs {
        const activateCount: number;
        const activateTags: string[];
        function activateFunction(e: any, item: any, data: any, invItems: any): void;
        function updateFunction(e: any, item: any, data: any, invItems: any): void;
    }
    namespace Chastity {
        const activateCount_1: number;
        export { activateCount_1 as activateCount };
        const activateTags_1: string[];
        export { activateTags_1 as activateTags };
        export function activateFunction_1(e: any, item: any, data: any, invItems: any): void;
        export { activateFunction_1 as activateFunction };
        export function updateFunction_1(e: any, item: any, data: any, invItems: any): void;
        export { updateFunction_1 as updateFunction };
    }
}
