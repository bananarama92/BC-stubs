import * as versions from "./assetVersion.json";
import * as ids from "./assetID.json";

type AssetName = string;

/**
 * A record containing the BC version (starting from >R98) in which each asset was added.
 *
 * The record consists of asset group names, mapped to asset names, which in turn are mapped to their respective BC version.
 */
declare const assetVersion: { readonly [k in keyof typeof versions]: Readonly<Record<AssetName, `R${number}`>> };

/**
 * A record containing group & asset IDs.
 *
 * IDs are integers within the `[0, 2**16)` interval; the combination of group- and asset-ID forming a unique identifier.
 *
 * For a particular group- or asset-name an ID is guaranteed to *never* change. This has the following implications:
 * * The renaming of a group or asset will yield a new ID
 * * The removal of a group or asset will preserve the ID; it may never be reused by another group/asset
 */
declare const assetID: { readonly [k in keyof typeof ids]: { readonly id: number, readonly assets: Readonly<Record<AssetName, number>> } };

export { assetVersion, assetID };
