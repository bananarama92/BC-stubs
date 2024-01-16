import * as data from "./assetVersion.json";

/**
 * A record containing the BC version (starting from >R98) in which each asset was added.
 *
 * The record consists of asset group names, mapped to asset names, which in turn are mapped to their respective BC version.
 */
declare const assetVersion: { readonly [k in keyof typeof data]: Readonly<Record<string, `R${number}`>> };
export { assetVersion };
