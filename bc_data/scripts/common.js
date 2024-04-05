const fs = require("fs");
const vm = require("vm");
const path = require("path");

const NEEDED_FILES = [
	"Scripts/Common.js",
	"Scripts/Game.js",
	"Scripts/Pose.js",
	"Assets/Female3DCG/Female3DCG.js",
];

/**
 * Validate the passed command line arguments
 * @template {Record<string, any>} T
 * @param {import("minimist").ParsedArgs} argv The unparsed command line arguments
 * @param {Readonly<T>} template A record containing *all* allowed keys and their default values
 * @param {(keyof T)[]} optional A list of optional keys
 * @returns {T}
 */
function validateArgv(argv, template, optional=[]) {
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

	const missingKeys = Object.entries(ret).filter(([k, v]) => !optional.includes(k) && !v).map(([k]) => k);
	if (invalidArguments.length > 0) {
		throw new Error(`Found ${invalidArguments.length} unknown arguments: ${invalidArguments.join()}`);
	} else if (missingKeys.length) {
		throw new Error(`Found ${missingKeys.length} missing arguments: ${missingKeys.join(", ")}`);
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

module.exports = {
	runVM,
	validateArgv,
};
