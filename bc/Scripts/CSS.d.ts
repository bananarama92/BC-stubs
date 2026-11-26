/**
 * Determine how much (if any!) space the scrollbar occupies and alter the reserved scrollbar gutter size accordingly.
 */
declare function CSSSetScrollbarVariables(): void;
/** @satisfies {Record<string, { url: string, condition: string }>} */
declare const CSSSupportCases: {
    "Dynamic viewport units": {
        url: string;
        condition: string;
    };
    "Color mixing": {
        url: string;
        condition: string;
    };
    "CSS Masks": {
        url: string;
        condition: string;
    };
};
/**
 *
 * @param {Record<string, { url: string, condition: string }>} cases
 */
declare function CSSCheckSupport(cases: Record<string, {
    url: string;
    condition: string;
}>): void;
