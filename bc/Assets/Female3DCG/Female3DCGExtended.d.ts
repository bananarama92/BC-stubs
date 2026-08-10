/**
 * Female3DCGExtended.js
 * ---------------------
 * This file contains definitions and configuration for extended items. Items which are marked as Extended in
 * `Female3DCG.js` and which have an extended item definition here will have their load/draw/click functions
 * _automatically_ created when assets are loaded, saving the need for an individual extended item script.
 *
 * Currently, modular and typed items are supported, and this is likely to expand in the future.
 */
/**
 * An enum encapsulating the available extended item archetypes
 * @satisfies {Record<Uppercase<ExtendedArchetype>, ExtendedArchetype>}
 */
declare const ExtendedArchetype: {
    readonly MODULAR: "modular";
    readonly TYPED: "typed";
    readonly VIBRATING: "vibrating";
    readonly VARIABLEHEIGHT: "variableheight";
    readonly TEXT: "text";
    readonly NOARCH: "noarch";
};
/**
 * An object containing all extended item configurations.
 * @type {ExtendedItemMainConfig}
 * @const
 */
declare var AssetFemale3DCGExtended: ExtendedItemMainConfig;
