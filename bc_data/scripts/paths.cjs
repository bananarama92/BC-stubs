const fs = require("fs");
const path = require("path");
const minimist = require("minimist");
const csv = require("csv-parse/sync");

const { validateArgv, runVM, entries, fromEntries } = require("./common.cjs");

const HELP = `\
Script for updating "icons.json", "backgrounds.json" and "audio.json" with new file path entries.

Usage:
node scripts/paths.cjs --root="bla/bla/BondageClub/"

Options:
	-h, --help              Show help
	--root <path>           The BC root directory
`;

/**
 *
 * @param {string} root
 * @param {ReadonlySet<string>} extensions
 * @param {"Audio" | "Icons" | "Backgrounds"} type
 * @returns {Record<string, string>}
 */
function gatherFiles(root, extensions, type) {
    /** @type {Record<string, string>} */
    const ret = {};
	for (const file of fs.readdirSync(path.join(root, type), { encoding: "utf8", recursive: true })) {
        const segments = file.split(path.sep);
        if (!segments.length) {
            continue;
        }

        const [filename, ext] = segments[segments.length - 1].split(".");
        segments[segments.length - 1] = filename;
        const key = segments.join("_").replaceAll("-", "_");
        if (extensions.has(ext)) {
            ret[key] = path.posix.normalize(path.posix.join(type, file.replaceAll("\\", "/")));
        }
	}
    return ret;
}

/**
 * @param {unknown} data
 * @param {string} errMsg
 * @returns {Record<string, string>}
 */
function parseJson(data, errMsg) {
    /** @type {Record<string, string>} */
    const ret = {};
    if (data === null || typeof data !== "object" || Array.isArray(data)) {
        throw new Error(errMsg);
    }
    for (const [k, v] of Object.entries(data)) {
        if (typeof v === "string") {
            ret[k] = v;
        }
    }
    return ret;
}

const template = `
export type {name} = {
{data}}
`.trimStart();

/**
 * @param {"audio" | "icons" | "backgrounds"} type
 * @param {Record<string, string>} data
 * @param {Record<string, string>} nameMapping
 */
function toTS(type, data, nameMapping) {
    const nameCaps = `${type[0].toUpperCase()}${type.slice(1)}Type`;
    const imgSuffix = type === "backgrounds" ? "|height=200|width=400" : "";
    let dataString = "";
    for (const [k, v] of Object.entries(data)) {
        const components = [
            type !== "audio" ? `![${k}](https://gitgud.io/BondageProjects/Bondage-College/-/raw/master/BondageClub/${v}${imgSuffix})` : undefined,
            type !== "audio" ? "" : undefined,
            nameMapping[k],
            `@see {@link https://gitgud.io/BondageProjects/Bondage-College/-/blob/master/BondageClub/${v}|BondageProjects/Bondage-College}`
        ].filter(i => i !== undefined).map(i => `\t * ${i}\n`);
        dataString += `\t/**\n`;
        dataString += components.join("");
        dataString += `\t */\n`;
        dataString += `\treadonly ${k}: "${v}";\n`;
    }
    return template.replace("{name}", nameCaps).replace("{data}", dataString);
}

/**
 * @param {string} path
 * @returns {Record<string, string>}
 */
function loadCSV(path) {
    const ret = csv.parse(fs.readFileSync(path, { encoding: "utf-8" }), {
        skip_empty_lines: true,
    });
    // @ts-ignore
    return /** @type {Record<string, string>} */(fromEntries(ret));
}

/**
 * @param {string} bcRoot
 * @param {{ audio: string, icons: string, backgrounds: string }} jsonPaths
 */
function updateJSON(bcRoot, jsonPaths) {
    for (const [type, jsonPath] of entries(jsonPaths)) {
        /** @type {Record<string, string>} */
        let oldData = {};
        if (fs.existsSync(jsonPath)) {
            console.log(`Parsing old "${jsonPath}" file`);
            oldData = parseJson(
                JSON.parse(fs.readFileSync(jsonPath, { encoding: "utf-8" }) || "{}"),
                `Invalid "${jsonPath}" JSON content`
            );
        } else {
            console.log(`No old "${jsonPath}" file`);
        }

        /** @type {Record<string, string>} */
        let newData;
        /** @type {Record<string, string>} */
        let nameMapping = {};
        switch (type) {
            case "audio":
                newData = gatherFiles(bcRoot, new Set(["mp3"]), "Audio",);
                break;
            case "icons":
                newData = gatherFiles(bcRoot, new Set(["png", "svg"]), "Icons");
                break;
            case "backgrounds":
                newData = gatherFiles(bcRoot, new Set(["jpg", "jpeg", "png"]), "Backgrounds");
                nameMapping = loadCSV(path.join(bcRoot, "Backgrounds", "Backgrounds.csv"));
                break;
        }

        const oldKeys = new Set(Object.keys(oldData));
        const newKeys = new Set(Object.keys(newData));
        const addedKeys = newKeys.difference(oldKeys);
        const removedKeys = oldKeys.difference(newKeys);
        const addedEntries = Array.from(addedKeys).sort().map(k => [k, newData[k]]);
        const removedEntries = Array.from(removedKeys).sort().map(k => [k, oldData[k]]);

        console.log(
            `Adding ${addedEntries.length} new ${type} entries:`,
            Object.fromEntries(addedEntries),
            "\n",
        );
        console.log(
            `Removing ${removedEntries.length} new ${type} entries:`,
            Object.fromEntries(removedEntries),
            "\n",
        );
        fs.writeFileSync(jsonPath, JSON.stringify(newData, undefined, 4), { encoding: "utf-8" });
        fs.writeFileSync(jsonPath.replace(".json", ".d.ts"), toTS(type, newData, nameMapping), { encoding: "utf-8" });
    }
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

	runVM(kwargs.root);
	updateJSON(kwargs.root, {
        icons: "./icons.json",
        audio: "./audio.json",
        backgrounds: "./backgrounds.json",
    });
})();
