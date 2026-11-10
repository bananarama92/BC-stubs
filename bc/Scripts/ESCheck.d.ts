type ESVersions = 2020 | 2021 | 2022 | 2023 | 2024 | 2025;
/**
 * See {@link ESCheckEntries}
 * @typedef {2020 | 2021 | 2022 | 2023 | 2024 | 2025} ESVersions
 */
/**
 * ES versions and {@link eval} code strings for verifying support for its features
 * @type {Map<ESVersions, Record<string, string>>}
 */
declare var ESCheckEntries: Map<ESVersions, Record<string, string>>;
/**
 * Check if the player's browser supports up to and including the provided ES version
 * @param {ESVersions} minVersion
 */
declare function ESCheck(minVersion: ESVersions): void;
