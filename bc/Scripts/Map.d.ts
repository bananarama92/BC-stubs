declare var ChatRoomMapViewWidth: number;
declare var ChatRoomMapViewHeight: number;
declare var ChatRoomMapMaxLength: number;
declare var ChatRoomMapViewObjectStartID: number;
declare var ChatRoomMapViewEffectStartID: number;
declare var ChatRoomMapViewObjectEntryID: number;
/** @type {Map<number, ChatRoomMapTile>} */
declare const MapDataTiles: Map<number, ChatRoomMapTile>;
/** @type {Map<number, ChatRoomMapObject>} */
declare const MapDataObjects: Map<number, ChatRoomMapObject>;
/** @type {Map<number, ChatRoomMapEffect>} */
declare const MapDataEffects: Map<number, ChatRoomMapEffect>;
declare const MapDataTileTypes: Set<any>;
declare const MapDataObjectTypes: Set<any>;
declare const MapDataEffectTypes: Set<any>;
/**
 * @namespace
 * @description
 * # Binary-encoded map data
 * This module implements the new way of encoding the map data.
 *
 * At its core lies the concept of a BitString: a stream of tightly-packed
 * numbers with arbitrary bit width. This allows us to store data way more efficiently
 * than using plain JSONs, even if they are packed with LZString.
 *
 * # Compatibility
 * Binary encoding, while efficient, requires a very careful architectural approach to ensure
 * maximum compatibility. Notable, we must ensure that:
 *
 * - Exported map strings from any older game version *always* remain compatible
 *   with the newer game versions. Players losing their old saved maps is an unacceptable
 *   outcome; we must ensure that we recover as much data as possible from those old saves.
 * - Map data synced between the players in a map-enabled room must be readable
 *   by the clients one version older than the current one. This is to ensure
 *   that during the beta period the main branch players could join and play
 *   the rooms created by beta players. This is not as strict of a requirement
 *   as the previous point, but is still important.
 * - Exported map strings from the newer version must be usable by the players
 *   using a game one version older. This ensures that the beta players can share
 *   map strings with non-beta ones, and is the least concern among others, since
 *   beta periods are quite short and *sharing* the map string doesn't happen too often.
 *   Still, it is good to at least make some effort to allow it.
 *
 * Binary encoding makes achieving those requirements non-trivial, because
 * to decode a given BitString the game must know exactly what were the bit widths
 * of the integers encoded into it, and also their meaning. If we just change
 * the code that encodes the map data, then we would no longer able to decode the old data.
 *
 * To solve this issue, we introduce the concept of codec versions. A version
 * is a number that we write into the bit stream before the actual data, which
 * would allow the game to understand which codec was used to encode the data,
 * and call it to decode the data.
 *
 * Whenever we need to sufficiently change the encoding scheme, we copy
 * the latest codec, increase its version and make the required changes.
 * Copying and pasting the code, while usually not advised, would be a better approach
 * in this specific case. This way, we ensure that the old codecs remain "frozen"
 * in time, so no matter how old the map data is, we always have an appropriate codec
 * for it.
 *
 * One issue which may arise in the future is the change in the schemas
 * of the objects we encode. In this case, we would need an additional "migrations" layer
 * which would take the old decoded data and convert it to the one we currently require.
 *
 * Solving the issue of letting the old clients to use the data from beta versions
 * is not that straightforward, and on the most occasions we would require ad-hoc solutions.
 * For example, during the beta period we may use two fields, `Data` and `DataOld`,
 * with the former containing the data encoded with the most recent codec,
 * and the latter having the data encoded with the previous codec.
 * Of course, depending on the nature of the required changes, it may be possible
 * to make a more space-efficient solution.
 *
 * # Future work
 * Currently, we only binary-encode the map effects, to remain in the scope of the original MR.
 * We do this by storing the encoded map effects in the {@link ChatRoomData.MapData.Effects}
 * global value, while {@link ChatRoomData.MapData.Tiles} and {@link ChatRoomData.MapData.Objects}
 * remain unchanged. Thus, we don't need to change much of the existing code, which
 * continues to use those latter fields.
 *
 * In future MRs we hope to unify the encoding of tiles, objects and effects, writing them all
 * into a single BitString. This would allow us to have much greater compression and save
 * a lot of traffic.
 *
 * Later, all map data would be stored in {@link MapManager.Map} global value
 * instead of {@link ChatRoomData.MapData}. This is because we're no longer storing
 * the map data as simple strings which we can trivially serialize and send to the server.
 * Ideally, the outside code would use {@link MapManager} methods to obtain
 * the encoded map data when needed (e.g. sending it to the server, or saving the map data
 * for room recreation, or exporting the room via a room code). Failing that,
 * we can continue the approach used in the initial version of this system: having the decoded
 * map data in {@link MapManager.Map} and maintain the encoded representation
 * of this map in {@link ChatRoomData.MapData}.
 *
 * After that we would have an avenue for encoding additional arbitrary data within each tile
 * while retaining the compact encoding. This, then, would allow us to have any sorts of "tile settings",
 * which would be a great addition to the map rooms in the Club.
 *
 * # Mod compatibility
 * This module is a work in progress and would change significantly in the future.
 * As such, only the minimum amount of public APIs is exposed as of now. Mod authors
 * are advised to not rely on its current behavior if at all possible.
 * We expect to expose more public APIs in the future as the module matures.
 *
 * # General design choices
 * While being public, {@link MapManager.Map} preferably should be only
 * accessed inside this file as it is an implementation detail of this module.
 * If the outside code requires to access something in this module, it's best
 * to provide a separate function in the {@link MapManager} namespace,
 * or a global one.
 *
 * # Codecs general overview
 * ## Version 0
 * The initial codecs version. Only encoding map effects. Only allows for a single
 * map effect per tile (the groundwork for having multiple effects per tile is laid,
 * but the rest of the code is not ready for it).
 *
 * Effects are encoded by their IDs, similar to the original Tiles and Objects encoding.
 * A simple RLE compression is applied to the "flat" effects array, with a small twist:
 * we use larger bit width for storing run-lengths of the blank effect sequences.
 * This allows us to more efficiently encode the typical maps where the most of
 * the tiles would have blank effects.
 *
 * Additionally, we modify the effect IDs in the following way:
 * 1. First, we subtract the lowest used effect ID
 *    ({@link ChatRoomMapViewEffectStartID} in the most cases) from them, getting
 *    what we call "shifted" IDs which begin from zero.
 * 2. Next, we create the list of all used "shifted" IDs and write them in the stream.
 *    The usage of "shifted" IDs ensures this array is very compact no matter what
 *    our {@link ChatRoomMapViewEffectStartID} is.
 * 3. Finally, when writing the effect IDs, we instead use the indexes in the list
 *    from the previous step, and call them the "remapped" IDs.
 *
 * This allows us to write the least possible amount of data per effect ID: for example,
 * if only one effect - besides the blank - is used in a map, then each mention of that ID
 * would only require a single bit of data, no matter what the actual value of this effect is.
 *
 * This scheme results in a sufficiently efficient compression rate in practice.
 * - For maps without effects we will be sending 24 additional bytes (after base64 encoding).
 * - Maps with a few patches of effects require around 0.5-1 bits per tile (after base64 encoding).
 * - Moderately sophisticated maps with a lot of different effects require somewhere around 1.5-3 bits per tile.
 * - In the worst case scenario (a map fully filled with all possible effects without repetitions),
 *   we would require slightly above 5.3 bits per tile after base64 encoding.
 */
declare var MapManager: {
    Map: {
        /**
         * Turns either `(index, ...args)` or `(x, y, ...args)` forms into `[index, ...args]`.
         * The second value is Y when it is a number; otherwise the first value is already an index.
         * @template {readonly [number, ...unknown[]]} T
         * @param {T} args
         * @returns {UnpackedIndex<T>}
         */
        unpackIndex<T extends readonly [number, ...unknown[]]>(...args: T): UnpackedIndex<T>;
        getTileId(index: number): number | null;
        getTileId(x: number, y: number): number | null;
        getTile(index: number): ChatRoomMapTile | null;
        getTile(x: number, y: number): ChatRoomMapTile | null;
        setTile(index: number, tile: ChatRoomMapTile | null, range?: number): boolean;
        setTile(x: number, y: number, tile: ChatRoomMapTile | null, range?: number): boolean;
        canSetTile(index: number, tile: ChatRoomMapTile | null): boolean;
        canSetTile(x: number, y: number, tile: ChatRoomMapTile | null): boolean;
        getObjectId(index: number): number | null;
        getObjectId(x: number, y: number): number | null;
        getObject(index: number): ChatRoomMapObject | null;
        getObject(x: number, y: number): ChatRoomMapObject | null;
        setObject(index: number, object: ChatRoomMapObject | null | undefined, range?: number): boolean;
        setObject(x: number, y: number, object: ChatRoomMapObject | null | undefined, range?: number): boolean;
        canSetObject(index: number, object: ChatRoomMapObject | null): boolean;
        canSetObject(x: number, y: number, object: ChatRoomMapObject | null): boolean;
        isValidObjectConfig(index: number, type: ChatRoomMapObjectConfig["Type"]): boolean;
        isValidObjectConfig(x: number, y: number, object: ChatRoomMapObjectConfig["Type"]): boolean;
        /**
         * Gets where the teleport pad at the given coordinates sends to
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {ChatRoomMapPos | null} - null if it's not a teleport pad or it doesn't send anywhere yet
         */
        getTeleporterDestination<T extends MapDataIndexedArgs<[]>>(...args: T): ChatRoomMapPos | null;
        /**
         * Sets where the teleport pad at the given coordinates sends to
         * @template {MapDataIndexedArgs<[destination: ChatRoomMapPos | null]>} T
         * @param {T} args
         * @return {boolean} - false if it's not a teleport pad, or the destination is the pad itself, a wall or outside the map
         */
        setTeleporterDestination<T extends MapDataIndexedArgs<[destination: ChatRoomMapPos | null]>>(...args: T): boolean;
        /**
         * Whether a teleport pad sends to the given coordinates
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {boolean}
         */
        isTeleporterDestination<T extends MapDataIndexedArgs<[]>>(...args: T): boolean;
        /**
         * Gets the color of the teleport pad at the given coordinates, with its opacity when it's see-through
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {HexColor | null} - null if it's not a teleport pad or it has no color
         */
        getTeleporterColor<T extends MapDataIndexedArgs<[]>>(...args: T): HexColor | null;
        /**
         * Sets the color of the teleport pad at the given coordinates
         * @template {MapDataIndexedArgs<[color: HexColor]>} T - The color, opacity included (#RRGGBBAA)
         * @param {T} args
         * @return {boolean} - false if it's not a teleport pad or the color isn't a color
         */
        setTeleporterColor<T extends MapDataIndexedArgs<[color: HexColor]>>(...args: T): boolean;
        getObjectConfig(index: number): ChatRoomMapObjectConfig | null;
        getObjectConfig(x: number, y: number): ChatRoomMapObjectConfig | null;
        setObjectConfig(x: number, y: number, config?: ChatRoomMapObjectConfig): boolean;
        setObjectConfig(index: number, config?: ChatRoomMapObjectConfig): boolean;
        getObjectSettings(index: number): ChatRoomMapObjectSettings | null;
        getObjectSettings(x: number, y: number): ChatRoomMapObjectSettings | null;
        setObjectSettings(index: number, changes: Omit<ChatRoomMapObjectSettings, "ID">, undoable?: boolean): boolean;
        setObjectSettings(x: number, y: number, changes: Omit<ChatRoomMapObjectSettings, "ID">, undoable?: boolean): boolean;
        getEffects(index: number): ChatRoomMapEffect[];
        getEffects(x: number, y: number): ChatRoomMapEffect[];
        /**
         * Get the current active effects array at a given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {ChatRoomMapEffect[]}
         * @deprecated Use {@link Manager.getEffects}
         */
        getEffectsByXY(x: number, y: number): ChatRoomMapEffect[];
        /**
         * Get the current active effects array at a given tile index.
         * @param {number} tileIndex the index of a map tile, as returned by MapCoordinatesToIndex.
         * @returns {ChatRoomMapEffect[]}
         * @deprecated Use {@link Manager.getEffects}
         */
        getEffectsByIndex(tileIndex: number): ChatRoomMapEffect[];
        addEffect(index: number, effect: ChatRoomMapEffect, range?: number): boolean;
        addEffect(x: number, y: number, effect: ChatRoomMapEffect, range?: number): boolean;
        setEffects(index: number, effects: ChatRoomMapEffect[], range?: number): boolean;
        setEffects(x: number, y: number, effects: ChatRoomMapEffect[], range?: number): boolean;
        /**
         * Sets the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        setEffectsByXY(x: number, y: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Sets the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        setEffectsByIndex(tileIndex: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Clears the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        clearEffectsByXY(x: number, y: number): void;
        /**
         * Clears the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        clearEffectsByIndex(tileIndex: number): void;
        /**
         * Returns the effects list for each tile in the map, one array element per tile.
         * Currently for efficiency does not copy the underlying array.
         * The users must not modify the returned array directly.
         * @returns {ChatRoomMapEffect[][]}
         */
        getAllEffects(): ChatRoomMapEffect[][];
        /**
         * Replaces all current effects with the parsed effects array.
         * @param {ChatRoomMapEffect[][]} effectsList
         * @returns {void}
         */
        replaceAllEffects(effectsList: ChatRoomMapEffect[][]): void;
        /**
         * Removes all effects from the map.
         * @returns {void}
         */
        removeAllEffects(): void;
        get hasFogEnabled(): boolean;
        /**
         * Enables or disables fog of war and persists it into the room map data for sync.
         * @param {boolean} val
         */
        set hasFogEnabled(val: boolean);
        /**
         * Marks the current effects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyEffects(): void;
        /**
         * Marks the current effects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanEffects(): void;
        /**
         * Checks whether the current effects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyEffects(): boolean;
        /**
         * Marks the current tiles data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyTiles(): void;
        /**
         * Marks the current tiles data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanTiles(): void;
        /**
         * Checks whether the current tiles data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyTiles(): boolean;
        /**
         * Marks the current objects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjects(): void;
        /**
         * Marks the current objects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjects(): void;
        /**
         * Checks whether the current objects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjects(): boolean;
        /**
         * Marks the object configs as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjectConfigs(): void;
        /**
         * Marks the object configs as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjectConfigs(): void;
        /**
         * Checks whether the object configs are dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjectConfigs(): boolean;
        /**
         * Marks the object settings as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjectSettings(): void;
        /**
         * Marks the object settings as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjectSettings(): void;
        /**
         * Checks whether the object settings are dirty, that is, whether they need
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjectSettings(): boolean;
        /**
         * Mark all data in the current map as clean.
         * @returns {void}
         */
        markCleanAll(): void;
        /**
         * Exports the current map data, including the tiles/objects,
         * as a string that could be copied and stored by the players.
         * @returns {string | undefined} the exported string, or `undefined`
         * if there was an error while exporting the map.
         */
        exportString(): string | undefined;
        /**
         * Imports the map string that was exported earlier with {@link Manager.exportString}
         * method.
         *
         * This method must be as much compatible as possible, recovering as much information
         * as possible from the exported map strings from any previous version of the game
         * to prevent the players losing their stored maps.
         *
         * This method modifies the state of the current map and returns `true` in case of a successful import.
         * If the string is malformed and cannot be parsed, the method returns `false` and doesn't modify
         * any state.
         * @param {string} mapString
         * @returns {boolean} `true` if the string was successfully parsed and the current map data is updated,
         * `false` otherwise
         */
        importString(mapString: string): boolean;
        /** @type {boolean[]} */
        sightMask: boolean[];
        /** @type {boolean[]} */
        hearingMask: boolean[];
        isTileVisible(x: number, y: number): boolean;
        isTileVisible(index: number): boolean;
        isTileHearable(x: number, y: number): boolean;
        isTileHearable(index: number): boolean;
        /**
         * Updates the map tiles' visibility & hearability based on the player's position
         * @returns {void}
         */
        updatePlayerPerception(): void;
        validateMap(): void;
        /**
         * Encodes the current map data and updates the global {@link ChatRoomData.MapData} value.
         * This function must be called after the map was changed and before it is sent to the server.
         * Ideally we want to have a single function to build the encoded map data only
         * when required, but it would require a significant API change of the outside code.
         *
         * For places where the synchronization happens, see {@link ChatRoomGetSettings} usages.
         *
         * This function is not supposed to fail; if it indicates an error by returning `false`,
         * this means we have a bug in our code.
         * @returns {boolean} `true` if we successfully encoded the map data; `false` if
         * there was an error and the global state remains unchanged.
         */
        updateGlobalMapData(): boolean;
        /**
         * Loads the data from {@link ChatRoomData.MapData} and replaces the current map data with the one
         * stored in it.
         * @param {ServerChatRoomMapData | undefined} data
         * @returns {boolean} `true` if the global map data was parsed successfully.
         * `false` if the global map data is invalid; no data is changed in this case.
         */
        loadGlobalMapData(data: ServerChatRoomMapData | undefined): boolean;
        /**
         * Starts a brush stroke: the edits made until {@link endUndoStroke} are undone as a single step
         */
        startUndoStroke(): void;
        /**
         * Ends the brush stroke started with {@link startUndoStroke}
         */
        endUndoStroke(): void;
        /**
         * Undo the last edit done to the map
         * @returns {boolean} Whether there was anything to undo
         */
        undo(): boolean;
        /**
         * Clear and reset the entire map
         * @param {boolean} [keepUndo] - Whether to keep the undo history
         */
        clear(keepUndo?: boolean): void;
    };
    /**
     * This function should be called each time the external code updates {@link ChatRoomData.MapData}.
     *
     * This function decodes the updated map data and replaces
     * the data stored in ${@link Manager.Map} with the decoded map.
     * @returns {void}
     */
    OnMapDataUpdated(): void;
    /**
     * Initializes the map with the current global data if needed.
     * Must be called in {@link ChatRoomMapViewActivate}.
     * @returns {void}
     */
    OnViewActivate(): void;
};
/** @deprecated Use {@link MapManager} instead */
declare var ChatRoomMapManager: {
    Map: {
        /**
         * Turns either `(index, ...args)` or `(x, y, ...args)` forms into `[index, ...args]`.
         * The second value is Y when it is a number; otherwise the first value is already an index.
         * @template {readonly [number, ...unknown[]]} T
         * @param {T} args
         * @returns {UnpackedIndex<T>}
         */
        unpackIndex<T extends readonly [number, ...unknown[]]>(...args: T): UnpackedIndex<T>;
        getTileId(index: number): number | null;
        getTileId(x: number, y: number): number | null;
        getTile(index: number): ChatRoomMapTile | null;
        getTile(x: number, y: number): ChatRoomMapTile | null;
        setTile(index: number, tile: ChatRoomMapTile | null, range?: number): boolean;
        setTile(x: number, y: number, tile: ChatRoomMapTile | null, range?: number): boolean;
        canSetTile(index: number, tile: ChatRoomMapTile | null): boolean;
        canSetTile(x: number, y: number, tile: ChatRoomMapTile | null): boolean;
        getObjectId(index: number): number | null;
        getObjectId(x: number, y: number): number | null;
        getObject(index: number): ChatRoomMapObject | null;
        getObject(x: number, y: number): ChatRoomMapObject | null;
        setObject(index: number, object: ChatRoomMapObject | null | undefined, range?: number): boolean;
        setObject(x: number, y: number, object: ChatRoomMapObject | null | undefined, range?: number): boolean;
        canSetObject(index: number, object: ChatRoomMapObject | null): boolean;
        canSetObject(x: number, y: number, object: ChatRoomMapObject | null): boolean;
        isValidObjectConfig(index: number, type: ChatRoomMapObjectConfig["Type"]): boolean;
        isValidObjectConfig(x: number, y: number, object: ChatRoomMapObjectConfig["Type"]): boolean;
        /**
         * Gets where the teleport pad at the given coordinates sends to
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {ChatRoomMapPos | null} - null if it's not a teleport pad or it doesn't send anywhere yet
         */
        getTeleporterDestination<T extends MapDataIndexedArgs<[]>>(...args: T): ChatRoomMapPos | null;
        /**
         * Sets where the teleport pad at the given coordinates sends to
         * @template {MapDataIndexedArgs<[destination: ChatRoomMapPos | null]>} T
         * @param {T} args
         * @return {boolean} - false if it's not a teleport pad, or the destination is the pad itself, a wall or outside the map
         */
        setTeleporterDestination<T extends MapDataIndexedArgs<[destination: ChatRoomMapPos | null]>>(...args: T): boolean;
        /**
         * Whether a teleport pad sends to the given coordinates
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {boolean}
         */
        isTeleporterDestination<T extends MapDataIndexedArgs<[]>>(...args: T): boolean;
        /**
         * Gets the color of the teleport pad at the given coordinates, with its opacity when it's see-through
         * @template {MapDataIndexedArgs<[]>} T
         * @param {T} args
         * @return {HexColor | null} - null if it's not a teleport pad or it has no color
         */
        getTeleporterColor<T extends MapDataIndexedArgs<[]>>(...args: T): HexColor | null;
        /**
         * Sets the color of the teleport pad at the given coordinates
         * @template {MapDataIndexedArgs<[color: HexColor]>} T - The color, opacity included (#RRGGBBAA)
         * @param {T} args
         * @return {boolean} - false if it's not a teleport pad or the color isn't a color
         */
        setTeleporterColor<T extends MapDataIndexedArgs<[color: HexColor]>>(...args: T): boolean;
        getObjectConfig(index: number): ChatRoomMapObjectConfig | null;
        getObjectConfig(x: number, y: number): ChatRoomMapObjectConfig | null;
        setObjectConfig(x: number, y: number, config?: ChatRoomMapObjectConfig): boolean;
        setObjectConfig(index: number, config?: ChatRoomMapObjectConfig): boolean;
        getObjectSettings(index: number): ChatRoomMapObjectSettings | null;
        getObjectSettings(x: number, y: number): ChatRoomMapObjectSettings | null;
        setObjectSettings(index: number, changes: Omit<ChatRoomMapObjectSettings, "ID">, undoable?: boolean): boolean;
        setObjectSettings(x: number, y: number, changes: Omit<ChatRoomMapObjectSettings, "ID">, undoable?: boolean): boolean;
        getEffects(index: number): ChatRoomMapEffect[];
        getEffects(x: number, y: number): ChatRoomMapEffect[];
        /**
         * Get the current active effects array at a given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {ChatRoomMapEffect[]}
         * @deprecated Use {@link Manager.getEffects}
         */
        getEffectsByXY(x: number, y: number): ChatRoomMapEffect[];
        /**
         * Get the current active effects array at a given tile index.
         * @param {number} tileIndex the index of a map tile, as returned by MapCoordinatesToIndex.
         * @returns {ChatRoomMapEffect[]}
         * @deprecated Use {@link Manager.getEffects}
         */
        getEffectsByIndex(tileIndex: number): ChatRoomMapEffect[];
        addEffect(index: number, effect: ChatRoomMapEffect, range?: number): boolean;
        addEffect(x: number, y: number, effect: ChatRoomMapEffect, range?: number): boolean;
        setEffects(index: number, effects: ChatRoomMapEffect[], range?: number): boolean;
        setEffects(x: number, y: number, effects: ChatRoomMapEffect[], range?: number): boolean;
        /**
         * Sets the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        setEffectsByXY(x: number, y: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Sets the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @param {ChatRoomMapEffect[]} effects
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        setEffectsByIndex(tileIndex: number, effects: ChatRoomMapEffect[]): void;
        /**
         * Clears the list of active effects at given coordinates.
         * @param {number} x
         * @param {number} y
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        clearEffectsByXY(x: number, y: number): void;
        /**
         * Clears the list of active effects at a given tile index.
         * @param {number} tileIndex
         * @returns {void}
         * @deprecated Use {@link Manager.setEffects}
         */
        clearEffectsByIndex(tileIndex: number): void;
        /**
         * Returns the effects list for each tile in the map, one array element per tile.
         * Currently for efficiency does not copy the underlying array.
         * The users must not modify the returned array directly.
         * @returns {ChatRoomMapEffect[][]}
         */
        getAllEffects(): ChatRoomMapEffect[][];
        /**
         * Replaces all current effects with the parsed effects array.
         * @param {ChatRoomMapEffect[][]} effectsList
         * @returns {void}
         */
        replaceAllEffects(effectsList: ChatRoomMapEffect[][]): void;
        /**
         * Removes all effects from the map.
         * @returns {void}
         */
        removeAllEffects(): void;
        get hasFogEnabled(): boolean;
        /**
         * Enables or disables fog of war and persists it into the room map data for sync.
         * @param {boolean} val
         */
        set hasFogEnabled(val: boolean);
        /**
         * Marks the current effects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyEffects(): void;
        /**
         * Marks the current effects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanEffects(): void;
        /**
         * Checks whether the current effects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyEffects(): boolean;
        /**
         * Marks the current tiles data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyTiles(): void;
        /**
         * Marks the current tiles data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanTiles(): void;
        /**
         * Checks whether the current tiles data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyTiles(): boolean;
        /**
         * Marks the current objects data as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjects(): void;
        /**
         * Marks the current objects data as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjects(): void;
        /**
         * Checks whether the current objects data is dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjects(): boolean;
        /**
         * Marks the object configs as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjectConfigs(): void;
        /**
         * Marks the object configs as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjectConfigs(): void;
        /**
         * Checks whether the object configs are dirty, that is, whether it needs
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjectConfigs(): boolean;
        /**
         * Marks the object settings as dirty, that is, changed and not yet synchronized with the server.
         * @returns {void}
         */
        markDirtyObjectSettings(): void;
        /**
         * Marks the object settings as clean, that is, synchronized with the server.
         * @returns {void}
         */
        markCleanObjectSettings(): void;
        /**
         * Checks whether the object settings are dirty, that is, whether they need
         * to be synchronized with the server.
         * @returns {boolean}
         */
        isDirtyObjectSettings(): boolean;
        /**
         * Mark all data in the current map as clean.
         * @returns {void}
         */
        markCleanAll(): void;
        /**
         * Exports the current map data, including the tiles/objects,
         * as a string that could be copied and stored by the players.
         * @returns {string | undefined} the exported string, or `undefined`
         * if there was an error while exporting the map.
         */
        exportString(): string | undefined;
        /**
         * Imports the map string that was exported earlier with {@link Manager.exportString}
         * method.
         *
         * This method must be as much compatible as possible, recovering as much information
         * as possible from the exported map strings from any previous version of the game
         * to prevent the players losing their stored maps.
         *
         * This method modifies the state of the current map and returns `true` in case of a successful import.
         * If the string is malformed and cannot be parsed, the method returns `false` and doesn't modify
         * any state.
         * @param {string} mapString
         * @returns {boolean} `true` if the string was successfully parsed and the current map data is updated,
         * `false` otherwise
         */
        importString(mapString: string): boolean;
        /** @type {boolean[]} */
        sightMask: boolean[];
        /** @type {boolean[]} */
        hearingMask: boolean[];
        isTileVisible(x: number, y: number): boolean;
        isTileVisible(index: number): boolean;
        isTileHearable(x: number, y: number): boolean;
        isTileHearable(index: number): boolean;
        /**
         * Updates the map tiles' visibility & hearability based on the player's position
         * @returns {void}
         */
        updatePlayerPerception(): void;
        validateMap(): void;
        /**
         * Encodes the current map data and updates the global {@link ChatRoomData.MapData} value.
         * This function must be called after the map was changed and before it is sent to the server.
         * Ideally we want to have a single function to build the encoded map data only
         * when required, but it would require a significant API change of the outside code.
         *
         * For places where the synchronization happens, see {@link ChatRoomGetSettings} usages.
         *
         * This function is not supposed to fail; if it indicates an error by returning `false`,
         * this means we have a bug in our code.
         * @returns {boolean} `true` if we successfully encoded the map data; `false` if
         * there was an error and the global state remains unchanged.
         */
        updateGlobalMapData(): boolean;
        /**
         * Loads the data from {@link ChatRoomData.MapData} and replaces the current map data with the one
         * stored in it.
         * @param {ServerChatRoomMapData | undefined} data
         * @returns {boolean} `true` if the global map data was parsed successfully.
         * `false` if the global map data is invalid; no data is changed in this case.
         */
        loadGlobalMapData(data: ServerChatRoomMapData | undefined): boolean;
        /**
         * Starts a brush stroke: the edits made until {@link endUndoStroke} are undone as a single step
         */
        startUndoStroke(): void;
        /**
         * Ends the brush stroke started with {@link startUndoStroke}
         */
        endUndoStroke(): void;
        /**
         * Undo the last edit done to the map
         * @returns {boolean} Whether there was anything to undo
         */
        undo(): boolean;
        /**
         * Clear and reset the entire map
         * @param {boolean} [keepUndo] - Whether to keep the undo history
         */
        clear(keepUndo?: boolean): void;
    };
    /**
     * This function should be called each time the external code updates {@link ChatRoomData.MapData}.
     *
     * This function decodes the updated map data and replaces
     * the data stored in ${@link Manager.Map} with the decoded map.
     * @returns {void}
     */
    OnMapDataUpdated(): void;
    /**
     * Initializes the map with the current global data if needed.
     * Must be called in {@link ChatRoomMapViewActivate}.
     * @returns {void}
     */
    OnViewActivate(): void;
};
/**
 * A single colorable layer over the whole plain image, for the white-filled numbers, letters and icons
 * @type {readonly ChatRoomMapLayer[]}
 */
declare const MapDataLayersFill: readonly ChatRoomMapLayer[];
/**
 * The layer of objects that don't list any: the plain image, with its own colors
 * @type {readonly ChatRoomMapLayer[]}
 */
declare const MapDataLayersPlain: readonly ChatRoomMapLayer[];
/** @type {Partial<Record<ChatRoomMapObject["Type"], Partial<Omit<ChatRoomMapObject, "ID">>>>} */
declare const ChatRoomMapViewObjectDefaultValues: Partial<Record<ChatRoomMapObject["Type"], Partial<Omit<ChatRoomMapObject, "ID">>>>;
/** @deprecated Duplicate IDs are checked on load */
declare function ChatRoomMapViewCheckForDuplicateIds(): void;
/**
 * Check that a doodad's {@link ChatRoomMapDoodad.DeprecatedID} chain resolves.
 * The chain may point at a doodad already stored in `registry`, or at one still waiting in `incoming`.
 * @template {ChatRoomMapDoodad} T
 * @param {T} doodad
 * @param {Map<number, T>} registry - Doodads of this kind already loaded
 * @param {readonly T[]} incoming - The list being loaded, so later entries can be referenced
 * @param {string} kind - "tile", "object" or "effect", used in error messages
 * @returns {boolean} - false when the chain cycles or points at an unknown id
 */
declare function MapDataCheckDeprecatedChain<T extends ChatRoomMapDoodad>(doodad: T, registry: Map<number, T>, incoming: readonly T[], kind: string): boolean;
/**
 * Load map tiles into the registry
 * @param {ChatRoomMapTile[]} tiles
 */
declare function MapDataLoadTiles(tiles: ChatRoomMapTile[]): void;
/**
 * Load map objects into the registry
 * @param {ChatRoomMapObject[]} object
 */
declare function MapDataLoadObjects(object: ChatRoomMapObject[]): void;
/**
 * Load map effects into the registry
 * @param {ChatRoomMapEffect[]} effects
 */
declare function MapDataLoadEffects(effects: ChatRoomMapEffect[]): void;
/**
 * Load the base map data into the registry
 */
declare function MapDataLoad(): void;
/**
 * Get the URL for a given asset.
 * @param {"Tile" | "Object"} doodadType
 * @param {string} [type]
 * @param {string} [style]
 */
declare function MapGetAssetUrl(doodadType: "Tile" | "Object", type?: string, style?: string): string;
/**
 * Get the asset URL for a given doodad.
 * @param {ChatRoomMapDoodad} doodad
 * @returns {string | undefined}
 */
declare function MapGetDoodadAssetUrl(doodad: ChatRoomMapDoodad): string | undefined;
/**
 * Typecheck for {@link ChatRoomMapEffect}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapEffect}
 */
declare function MapDoodadIsEffect(element: ChatRoomMapDoodad): element is ChatRoomMapEffect;
/**
 * Typecheck for {@link ChatRoomMapPhysicalElement}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapPhysicalElement}
 */
declare function MapDoodadIsPhysicalElement(element: ChatRoomMapDoodad): element is ChatRoomMapPhysicalElement;
/**
 * Typecheck for {@link ChatRoomMapObject}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapObject}
 */
declare function MapDoodadIsObject(element: ChatRoomMapDoodad): element is ChatRoomMapObject;
/**
 * Typecheck for {@link ChatRoomMapTile}
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {element is ChatRoomMapTile}
 */
declare function MapDoodadIsTile(element: ChatRoomMapDoodad): element is ChatRoomMapTile;
/**
 * Typecheck for deprecated doodads
 * @param {ChatRoomMapDoodad} element - The element to check
 * @returns {boolean}
 */
declare function MapDoodadIsDeprecated(element: ChatRoomMapDoodad): boolean;
/**
 * @param {number} tileId
 * @returns {ChatRoomMapTile}
 */
declare function MapDataGetTile(tileId: number): ChatRoomMapTile;
/**
 * Returns the object for an id.
 * @param {number} objectId
 * @returns {ChatRoomMapObject}
 */
declare function MapDataGetObject(objectId: number): ChatRoomMapObject;
/**
 * @param {number} effectId
 * @returns {ChatRoomMapEffect}
 */
declare function MapDataGetEffect(effectId: number): ChatRoomMapEffect;
/**
 * Gets coordinates in X and Y and returns the corresponding index number for the tile and object list
 * @param {number} x - X-coordinate to be translated
 * @param {number} y - Y-coordinate to be translated
 * @returns {number} - Index number for the tile and object lists
 */
declare function MapCoordinatesToIndex(x: number, y: number): number;
/**
 * Gets a index number for the tile and object lists and returns the corresponding coordinates in X and Y
 * @param {number} index - Index number for the tile and object lists
 * @returns {ChatRoomMapPos} - Object containing the resulting x and y coordinates.
 */
declare function MapIndexToCoordinates(index: number): ChatRoomMapPos;
/**
 * Gets the distance between two map positions, in tiles; a diagonal step counts as one
 * @param {ChatRoomMapPos} pos1
 * @param {ChatRoomMapPos} pos2
 * @returns {number}
 */
declare function MapGetDistance(pos1: ChatRoomMapPos, pos2: ChatRoomMapPos): number;
/**
 * Checks if a value is a position within the map
 * @param {unknown} pos
 * @returns {pos is ChatRoomMapPos}
 */
declare function MapIsPosition(pos: unknown): pos is ChatRoomMapPos;
/**
 * Visit each tile in the square from (x, y) through (x + range, y + range), inclusive.
 * @param {number} x
 * @param {number} y
 * @param {number} range
 * @param {(x: number, y: number) => void} cb
 */
declare function MapForEachXYInRange(x: number, y: number, range: number, cb: (x: number, y: number) => void): void;
/**
 * Index-based form of {@link MapForEachXYInRange}.
 * @param {number} index
 * @param {number} range
 * @param {(index: number) => void} cb
 */
declare function MapForEachIndexInRange(index: number, range: number, cb: (index: number) => void): void;
/**
 * @template {MapDataDoodadType} T
 * @param {T} type
 * @param {number} id
 * @returns {MapDataLookupTable[T] | null}
 */
declare function MapGetDoodad<T extends MapDataDoodadType>(type: T, id: number): MapDataLookupTable[T] | null;
/**
 * Pack an array of doodads into a flat array of doodad references.
 * @param {ChatRoomMapDoodad[]} doodads
 * @returns {MapDoodadRef[]}
 */
declare function MapPackDoodads(doodads: ChatRoomMapDoodad[]): MapDoodadRef[];
/**
 * Gets the effect / object / tile on the map
 * @template {MapDataDoodadType} T
 * @param {T} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @returns {number | null}
 * @deprecated Use {@link MapManager.Map.getObjectId}/{@link MapManager.Map.getTileId}
 */
declare function MapGetCellId<T extends MapDataDoodadType>(type: T, x: number, y: number): number | null;
/**
 * Gets the effect / object / tile on the map
 * @template {MapDataDoodadType} T
 * @param {T} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @returns {MapDataLookupTable[T] | null}
 * @deprecated Use {@link MapManager.Map.getObject}/{@link MapManager.Map.getTile}
 */
declare function MapGetCell<T extends MapDataDoodadType>(type: T, x: number, y: number): MapDataLookupTable[T] | null;
/**
 * Sets the tile of the map
 * @param {number} id - The ID of the tile
 * @param {MapDataDoodadType} type - The type of the tile
 * @param {number} x - The X position of the tile
 * @param {number} y - The Y position of the tile
 * @param {boolean} refresh - Whether to refresh the map
 * @returns {boolean} - TRUE if the tile was set
 */
declare function MapSetCell(id: number, type: MapDataDoodadType, x: number, y: number, refresh?: boolean): boolean;
/**
 * Clears the unique tiles
 * @param {number} id - The ID of the tile
 * @param {MapDataDoodadType} type - The type of the tile
 * @returns {boolean} - TRUE if the tile was cleared
 * @deprecated
 */
declare function MapClearUniqueCells(id: number, type: MapDataDoodadType): boolean;
/**
 * Checks if the cell can be set
 * @param {number} id - The ID of the doodad
 * @param {MapDataDoodadType} type - The type of the doodad
 * @param {number} x - The X position of the cell
 * @param {number} y - The Y position of the cell
 * @returns {boolean}
 * @deprecated Use {@link MapManager.Map.canSetTile}/{@link MapManager.Map.canSetObject}.
 */
declare function MapCanSetCell(id: number, type: MapDataDoodadType, x: number, y: number): boolean;
/**
 * Checks if the cell is still valid
 * @param {number} id - The ID of the doodad
 * @param {MapDataDoodadType} type - The type of the doodad
 * @param {number} x - The X position of the cell
 * @param {number} y - The Y position of the cell
 * @returns {boolean}
 * @deprecated Use {@link MapManager.Map.canSetTile}/{@link MapManager.Map.canSetObject}.
 */
declare function MapIsCellValid(id: number, type: MapDataDoodadType, x: number, y: number): boolean;
/** The size of a placed map object, in percent, when an admin didn't change it */
declare const MapObjectDefaultSize = 100;
/**
 * Whether admins can turn, size or color an object, see {@link ChatRoomMapObject.CanBeCustomized}
 * @param {ChatRoomMapObject} object
 * @returns {boolean}
 */
declare function MapCanCustomizeObject(object: ChatRoomMapObject): boolean;
/**
 * Whether admins can turn and size an object; ones that join up with their neighbors or hang on walls only take colors
 * @param {ChatRoomMapObject} object
 * @returns {boolean}
 */
declare function MapCanTransformObject(object: ChatRoomMapObject): boolean;
/**
 * Converts a color to the number written in a BitString; short #RGB colors are taken as #RRGGBB
 * @param {HexColor} color
 * @returns {number}
 */
declare function MapColorToNumber(color: HexColor): number;
/**
 * Converts a number read from a BitString back to a #RRGGBB color
 * @param {number} value
 * @returns {HexColor}
 */
declare function MapNumberToColor(value: number): HexColor;
/**
 * Checks whether a decal can go on an object: the object has a {@link ChatRoomMapObject.DecalArea} and the decal is one of {@link AssetGetDecals}
 * @param {string | undefined} decal
 * @param {ChatRoomMapObject | null} object
 * @returns {decal is AssetName}
 */
declare function MapIsValidObjectDecal(decal: string | undefined, object: ChatRoomMapObject | null): decal is AssetName;
/**
 * Gets the layers of an object that admins can color
 * @param {ChatRoomMapObject | null} object
 * @returns {ChatRoomMapColorableLayer[]}
 */
declare function MapGetColorableLayers(object: ChatRoomMapObject | null): ChatRoomMapColorableLayer[];
/**
 * Checks whether colors match the colorable layers of an object: one per layer, each `"Default"` or a color
 * @param {string[] | undefined} colors
 * @param {ChatRoomMapObject | null} object
 * @returns {colors is NonNullable<ChatRoomMapObjectSettings["Colors"]>}
 */
declare function MapIsValidObjectColors(colors: string[] | undefined, object: ChatRoomMapObject | null): colors is NonNullable<ChatRoomMapObjectSettings["Colors"]>;
/**
 * Checks whether a copied color format can be pasted on an object.
 * Objects with the same colorable layers (same names and default colors, like the numbers and letters) accept each other's formats.
 * @param {ChatRoomMapColorFormat | null} format
 * @param {ChatRoomMapObject | null} object
 * @returns {boolean}
 */
declare function MapCanPasteColorFormat(format: ChatRoomMapColorFormat | null, object: ChatRoomMapObject | null): boolean;
/**
 * Gets the colors to draw each color layer of the object placed on a tile with; layers left at default get their default color
 * @param {ChatRoomMapPos} pos
 * @param {ChatRoomMapObject} object
 * @returns {HexColor[]}
 */
declare function MapGetObjectLayerColors(pos: ChatRoomMapPos, object: ChatRoomMapObject): HexColor[];
/**
 * Sets the next update flag for the room if it's not already set, the delay is 5 seconds
 * @deprecated No replacement
 * @returns {void} - Nothing
 */
declare function MapValidateCells(): void;
