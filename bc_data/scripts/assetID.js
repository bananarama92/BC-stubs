const fs = require("fs");
const minimist = require("minimist");
const { validateArgv, runVM } = require("./common");

const HELP = `\
Script for updating "assetID.json" with new assets.

Usage:
node scripts/assetID --root="bla/bla/BondageClub/"

Options:
	-h, --help              Show help
	--root <path>           The BC root directory
`;

/**
 * @typedef {Record<AssetGroupName, { id: number, assets: Record<string, number> }>} IDRecord
 */

/**
 * @param {string} jsonPath
 * @param {AssetGroupDefinition[]} assetDefs
 */
function updateJSON(jsonPath, assetDefs) {
	/** @type {IDRecord} */
	let data;
	if (fs.existsSync(jsonPath)) {
		console.log(`Parsing old "${jsonPath}" file`);
		data = JSON.parse(fs.readFileSync(jsonPath, { encoding: "utf-8" }) || "{}");
		if (data === null || typeof data !== "object" || Array.isArray(data)) {
			throw new Error(`Invalid "${jsonPath}" JSON content`);
		}
	} else {
		data = /** @type {IDRecord} */({});
		console.log(`No old "${jsonPath}" file`);
	}

	const newAssets = [];
	const newGroups = [];
	assetDefs.sort((a, b) => a.Group.localeCompare(b.Group));
	let groupID = Math.max(...Object.values(data).map(({ id }) => id), -1);
	for (const groupDef of assetDefs) {
		let groupData = data[groupDef.Group];
		if (groupData === undefined) {
			groupID++;
			data[groupDef.Group] = groupData = { id: groupID, assets: {} };
			newGroups.push(groupDef.Group);
		}

		groupDef.Asset.sort((a, b) => {
			a = typeof a === "string" ? a : a.Name;
			b = typeof b === "string" ? b : b.Name;
			return a.localeCompare(b);
		});
		let assetID = Math.max(...Object.values(groupData.assets), -1);
		for (const assetDef of groupDef.Asset) {
			const assetName = typeof assetDef === "string" ? assetDef : assetDef.Name;
			if (groupData.assets[assetName] === undefined) {
				assetID++;
				groupData.assets[assetName] = assetID;
				newAssets.push(assetName);
			}
		}

		if (assetID >= 2**16) {
			throw new RangeError(`All asset IDs of the ${groupDef.Group} must fall within the [0, 2**16) interval`);
		}
	}
	if (groupID >= 2**16) {
		throw new RangeError(`Asset group IDs must fall within the [0, 2**16) interval`);
	}

	newAssets.sort();
	newGroups.sort();
	if (newAssets.length > 0 || newGroups.length > 0) {
		const assets = newAssets.length > 30 ? [...newAssets.slice(0, 30), "..."] : newAssets;
		const groups = newGroups.length > 30 ? [...newGroups.slice(0, 30), "..."] : newGroups;
		console.log(`Adding ${newAssets.length} new assets and ${newGroups.length} new groups\nassets:`, assets, "\ngroups:", groups);
	} else {
		console.log("No new assets or groups");
	}
	fs.writeFileSync(jsonPath, JSON.stringify(data, undefined, 4), { encoding: "utf-8" });
}

(function () {
	const kwargsTemplate = { root: "", help: false, h: false };
	const kwargs = validateArgv(minimist(
		process.argv.slice(2),
		{ string: ["root"], alias: { "h": "help" } },
	), kwargsTemplate, ["help", "h"]);

	if (kwargs.help) {
		console.log(HELP);
		return;
	}

	const context = runVM(kwargs.root);
	updateJSON("./assetID.json", context.assetDefs);
})();
