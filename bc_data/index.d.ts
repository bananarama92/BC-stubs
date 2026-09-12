import * as versions from "./assetVersion.json";
import * as ids from "./assetID.json";
import type { IconsType } from "./icons.d.ts";
import type { BackgroundsType } from "./backgrounds.d.ts";
import type { AudioType } from "./audio.d.ts";

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

/**
 * All .png and .svg icon files in the BC `Icons/` directory.
 */
declare const iconPaths: { [k in keyof IconsType]: IconsType[k] };

/**
 * All .jpg, .jpeg and .png background files in the BC `Backgrounds/` directory.
 */
declare const backgroundPaths: { [k in keyof BackgroundsType]: BackgroundsType[k] };

/**
 * All .mp3 audio files in the BC `Audio/` directory.
 */
declare const audioPaths: { [k in keyof AudioType]: AudioType[k] };

/** All {@link iconPaths} keys */
type Icons = keyof IconsType;

/** All {@link backgroundPaths} keys */
type Backgrounds = keyof BackgroundsType;

/** All {@link audioPaths} keys */
type Audio = keyof AudioType;

export { assetVersion, assetID, iconPaths, backgroundPaths, audioPaths };
export type { Icons, Audio, Backgrounds }
