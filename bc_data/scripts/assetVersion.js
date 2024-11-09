const fs = require("fs");
const minimist = require("minimist");
const { validateArgv, runVM } = require("./common");

const HELP = `\
Script for updating "assetVersion.json" with new assets.

Usage:
node scripts/assetVersion --root="bla/bla/BondageClub/"

Options:
	-h, --help              Show help
	--root <path>           The BC root directory
	--bc_version <version>  The (optional) BC version. Extract the version from the BC directory if not provided
`;

const GAME_VERSION_FORMAT = /R([0-9]+)/;

/**
 * @typedef {`R${number}`} BCVersion
 * @typedef {Partial<Record<AssetGroupName, Partial<Record<string, BCVersion>>>>} VersionRecord
 */

/**
 * @param {string} jsonPath
 * @param {AssetGroupDefinition[]} assetDefs
 * @param {BCVersion} version
 */
function updateJSON(jsonPath, assetDefs, version) {
	// Load all pre-existing data
	/** @type {VersionRecord} */
	let data;
	if (fs.existsSync(jsonPath)) {
		console.log(`Parsing old "${jsonPath}" file`);
		data = JSON.parse(fs.readFileSync(jsonPath, { encoding: "utf-8" }) || "{}");
		if (data === null || typeof data !== "object" || Array.isArray(data)) {
			throw new Error(`Invalid "${jsonPath}" JSON content`);
		}
	} else {
		data = /** @type {VersionRecord} */({});
		console.log(`No old "${jsonPath}" file`);
	}

	// Update the JSON data with all new assets
	assetDefs.sort((a, b) => a.Group.localeCompare(b.Group));
	const newAssets = [];
	const dataSorted = /** @type {VersionRecord} */({});
	for (const { Group, Asset } of assetDefs) {
		const assetNames = Asset.map(a => typeof a === "string" ? a : a.Name).sort();
		for (const name of assetNames) {
			const versionOld = data[Group]?.[name];
			dataSorted[Group] ??= {};
			dataSorted[Group][name] = versionOld ?? version;
			if (versionOld == null) {
				newAssets.push(`${Group}${name}`);
			}
		}
	}

	if (newAssets.length > 0) {
		const assets = newAssets.length > 30 ? [...newAssets.slice(0, 30), "..."] : newAssets;
		console.log(
			`Adding ${newAssets.length} new ${version} assets:`,
			JSON.stringify(assets, undefined, 4),
			"\n",
		);
	} else {
		console.log("No new assets", "\n");
	}
	fs.writeFileSync(jsonPath, JSON.stringify(dataSorted, undefined, 4), { encoding: "utf-8" });
}

/**
 * @param {string} version
 * @returns {BCVersion}
 */
function parseVersion(version) {
	const versionArray = GAME_VERSION_FORMAT.exec(version);

	let versionInt = NaN;
	if (versionArray === null) {
		throw new Error(`Invalid BC version: "${version}"`);
	} else {
		versionInt = Number.parseInt(versionArray[1]);
	}

	if (Number.isNaN(versionInt)) {
		throw new Error(`Invalid BC version: "${version}"`);
	}
	return `R${versionInt}`;
}

(function () {
	const kwargsTemplate = { bc_version: "", root: "", help: false, h: false };
	const kwargs = validateArgv(minimist(
		process.argv.slice(2),
		{ string: ["root", "bc_version"], alias: { "h": "help" } },
	), kwargsTemplate, ["bc_version", "help", "h"]);

	if (kwargs.help) {
		console.log(HELP);
		return;
	}

	const context = runVM(kwargs.root);
	const version = parseVersion(kwargs.bc_version || context.version);
	updateJSON("./assetVersion.json", context.assetDefs, version);
})();
