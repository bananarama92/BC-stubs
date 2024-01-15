const fs = require("fs");
const vm = require("vm");
const minimist = require("minimist");
const path = require("path");

const HELP = `\
Script for updating "asset_version.json" with new assets.

Usage:
node update_assets --root="bla/bla/BondageClub/"

Options:
	-h, --help          Show help
	--root <path>       The BC root directory
`;

const NEEDED_FILES = [
	"Scripts/Common.js",
	"Scripts/Game.js",
	"Scripts/Pose.js",
	"Assets/Female3DCG/Female3DCG.js",
];

const GAME_VERSION_FORMAT = /^R([0-9]+)(?:(Alpha|Beta)([0-9]+)?)?$/;

/**
 * Validate the passed command line arguments
 * @template {Record<string, any>} T
 * @param {import("minimist").ParsedArgs} argv The unparsed command line arguments
 * @param {Readonly<T>} template A record containing *all* allowed keys and their default values
 * @returns {T}
 */
function validateArgv(argv, template) {
	const { _, ...kwargs } = argv;

	/** @type {string[]} */
	const invalidArguments = [];
	invalidArguments.push(..._);

	const ret = { ...template };
	for (const [k, v] of Object.entries(kwargs)) {
		if (k in ret) {
			// @ts-ignore
			ret[k] = v;
		} else {
			invalidArguments.push(k);
		}
	}

	if (invalidArguments.length > 0) {
		throw new Error(`Found ${invalidArguments.length} unknown arguments: ${invalidArguments.join()}`);
	} else if (!Object.values(ret).some(Boolean)) {
		throw new Error(`Expected at least one argument`);
	}
	return ret;
}

/**
 * @param {string} root
 * @returns {{ assetDefs: AssetGroupDefinition[], version: string }}
 */
function runVM(root) {
	const context = vm.createContext({
		OuterArray: Array,
		Object: Object,
		window: {
			addEventListener: () => {},
		},
		PoseType: { HIDE: "Hide", DEFAULT: "" },
	});
	for (const file of NEEDED_FILES) {
		vm.runInContext(
			fs.readFileSync(path.join(root, file), { encoding: "utf-8" }),
			context,
			{ filename: file },
		);
	}

	if (!Array.isArray(context.AssetFemale3DCG)) {
		throw new TypeError(`Failed to resolve "AssetFemale3DCG"; invalid type: ${typeof context.AssetFemale3DCG}`);
	}
	if (typeof context.GameVersion !== "string") {
		throw new TypeError(`Failed to resolve "GameVersion"; invalid type: ${typeof context.GameVersion}`);
	}
	return { assetDefs: context.AssetFemale3DCG, version: context.GameVersion };
}

/**
 * @typedef {`R${number}`} BCVersion
 * @typedef {Record<AssetGroupName, Record<string, BCVersion>>} VersionRecord
 */

/**
 * @param {string} jsonPath
 * @param {AssetGroupDefinition[]} assetDefs
 * @param {BCVersion} version
 */
function updateJSON(jsonPath, assetDefs, version) {
	/** @type {VersionRecord} */
	const data = JSON.parse(fs.readFileSync(jsonPath, { encoding: "utf-8" }));
	if (data === null || typeof data !== "object") {
		throw new Error(`Invalid "${jsonPath}" JSON content`);
	}

	assetDefs.sort((a, b) => a.Group.localeCompare(b.Group));
	const dataSorted = /** @type {VersionRecord} */({});
	for (const { Group, Asset } of assetDefs) {
		const assetNames = Asset.map(a => typeof a === "string" ? a : a.Name).sort();
		for (const name of assetNames) {
			const versionOld = data[Group]?.[name];
			dataSorted[Group] ??= {};
			dataSorted[Group][name] = versionOld ?? version;
		}
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
		throw new Error(`Invalid BC version: "${versionArray}"`);
	} else if (versionArray[2] !== undefined) {
		// We're in the beta; strip the "Beta*" suffix
		versionInt = Number.parseInt(versionArray[1]);
	} else {
		// We're not in the beta; increment the version by 1 as the actual BC `GameVersion`
		// is only increment at the start of the beta and not during the monthly dev cycle
		versionInt = Number.parseInt(versionArray[1]) + 1;
	}

	if (Number.isNaN(versionInt)) {
		throw new Error(`Invalid BC version: "${versionArray}"`);
	}
	return `R${versionInt}`;
}

(function () {
	const kwargsTemplate = { root: "", help: false, h: false };
	const kwargs = validateArgv(minimist(
		process.argv.slice(2),
		{ string: ["root"], alias: { "h": "help" } },
	), kwargsTemplate);

	if (kwargs.help) {
		console.log(HELP);
		return;
	}

	const context = runVM(kwargs.root);
	const version = parseVersion(context.version);
	updateJSON("./asset_version.json", context.assetDefs, version);
})();
