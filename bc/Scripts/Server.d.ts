/** @type {SocketIO.Socket} */
declare var ServerSocket: SocketIO.Socket;
declare var ServerURL: string;
/** @type {NotificationBeep[] } */
declare var ServerBeepQueue: NotificationBeep[];
declare var ServerIsConnected: boolean;
declare var ServerReconnectCount: number;
declare var ServerAccountEmailRegex: RegExp;
declare var ServerAccountNameRegex: RegExp;
declare var ServerAccountPasswordRegex: RegExp;
declare var ServerAccountResetNumberRegex: RegExp;
declare var ServerCharacterNameRegex: RegExp;
declare var ServerCharacterNicknameRegex: RegExp;
declare var ServerChatMessageMaxLength: number;
declare var ServerChatRoomDescriptionMaxLength: number;
declare var ServerChatRoomNameRegex: RegExp;
/** @type {ServerChatRoomLanguage[]} */
declare const ServerChatRoomSupportedLanguages: ServerChatRoomLanguage[];
declare const ServerScriptMessage: string;
declare const ServerScriptWarningStyle: string;
/** Loads the server by attaching the socket events and their respective callbacks */
declare function ServerInit(): void;
/** @readonly */
declare var ServerAccountUpdate: {
    /**
     * private
     * @type {Map<keyof ServerAccountUpdateRequest, unknown>}
     */
    Queue: Map<keyof ServerAccountUpdateRequest, unknown>;
    /**
     * private
     * @type {null | ReturnType<typeof setTimeout>}
     */
    Timeout: null | ReturnType<typeof setTimeout>;
    /**
     * private
     * @type {number}
     */
    Start: number;
    /** Clears queue and sync with server  */
    SyncToServer(): void;
    /**
     * Queues a data to be synced at a later time
     * @param {ServerAccountUpdateRequest} Data
     * @param {boolean} [Force] - force immediate sync to server
     */
    QueueData(Data: ServerAccountUpdateRequest, Force?: boolean): void;
};
/**
 * Sets the connection status of the server and updates the login page message
 * @param {boolean} connected - whether or not the websocket connection to the server has been established successfully
 * @param {string} [errorMessage] - the error message to display if not connected
 */
declare function ServerSetConnected(connected: boolean, errorMessage?: string): void;
/**
 * Use the {@link ServerIsLoggedIn} function instead.
 * private
 * @type {boolean}
 */
declare let ServerIsLoggedIn_: boolean;
/**
 * Returns whether the player has successfully logged into the game.
 *
 * See {@link ServerIsLoggedInAsync} for an asynchronous variant of this function.
 */
declare function ServerIsLoggedIn(): boolean;
/**
 * Resolve upon successfully logging into the game.
 *
 * See {@link ServerIsLoggedIn} for a synchronous variant of this function.
 */
declare function ServerIsLoggedInAsync(): Promise<void>;
/**
 * Callback when receiving a "connect" event on the socket - this will be called on initial connection and on
 * successful reconnects.
 */
declare function ServerConnect(): void;
/**
 * Callback when receiving a "reconnecting" event on the socket - this is called when socket.io initiates a retry after
 * a failed connection attempt.
 */
declare function ServerReconnecting(): void;
/**
 * Callback used to parse received information related to the server
 * @param {{OnlinePlayers: number, Time: number}} data - Data object containing the server information
 * @returns {void} - Nothing
 */
declare function ServerInfo(data: {
    OnlinePlayers: number;
    Time: number;
}): void;
/**
 * Callback used when we are disconnected from the server, try to enter the reconnection mode (relog screen) if the
 * user was logged in
 * @param {ServerForceDisconnectMessage} [data] - Error to log
 * @param {boolean} [close] - close the transport
 * @returns {void} - Nothing
 */
declare function ServerDisconnect(data?: ServerForceDisconnectMessage, close?: boolean): void;
/**
 * Handles resuming the game after a disconnect
 * @param {ServerAccountData} C
 */
declare function ServerHandleRelog(C: ServerAccountData): boolean;
type ServerChatRoomChecksOptions = {
    screen?: ScreenName;
    module?: ModuleType;
    callback?: () => boolean;
};
/** @typedef {{ screen?: ScreenName, module?: ModuleType, callback?: () => boolean }} ServerChatRoomChecksOptions */
/**
 * Namespace with callbacks for determining whether the player is in a chatroom
 * @namespace
 * @see {@link ServerPlayerIsInChatRoom}
 */
declare var ServerPlayerChatRoom: {
    /**
     * All registered callbacks representing distinct screens that must be checked in order to determine chatroom presence
     * @type {ScreenCheckCallback[]}
     */
    callbacks: ScreenCheckCallback[];
    /**
     * Register one or more screenname and/or callback for determining whether the player is in a chat room.
     * @param {ServerChatRoomChecksOptions[]} options
     */
    register(...options: ServerChatRoomChecksOptions[]): void;
};
/**
 * Returns whether the player is currently in a chatroom or viewing a subscreen while in a chatroom
 * @returns {boolean} - True if in a chatroom
 */
declare function ServerPlayerIsInChatRoom(): boolean;
/** Ratelimit: Max number of messages per interval */
declare var ServerSendRateLimit: number;
/** Ratelimit: Length of the rate-limit window, in msec */
declare var ServerSendRateLimitInterval: number;
/**
 * Queued messages waiting to be sent
 *
 * @type {SendRateLimitQueueItem[]}
 */
declare const ServerSendRateLimitQueue: SendRateLimitQueueItem[];
/** @type {number[]} */
declare let ServerSendRateLimitTimes: number[];
/**
 * Sends a message with the given data to the server via socket.emit
 * @type {<Ev extends import("@socket.io/component-emitter").EventNames<ClientToServerEvents>>(
 *     ev: Ev, ...args: import("@socket.io/component-emitter").EventParams<ClientToServerEvents, Ev>
 * ) => void}
 */
declare function ServerSend<Ev extends import("@socket.io/component-emitter").EventNames<ClientToServerEvents>>(Message: Ev, ...args: Parameters<ClientToServerEvents[Ev]>): void;
/**
 * Process the outgoing server messages queue
 */
declare function ServerSendQueueProcess(): void;
/**
 * Syncs Money, owner name and lover name with the server
 * @returns {void} - Nothing
 */
declare function ServerPlayerSync(): void;
/**
 * Syncs the full player inventory to the server.
 * @returns {void} - Nothing
 */
declare function ServerPlayerInventorySync(): void;
/**
 * Unpack the all item permissions into the quartet of blocked, limited, favorited and hidden item object
 * @param {Partial<Record<`${AssetGroupName}/${AssetName}`, ItemPermissions>>} permissionItems - The packed item permission data
 * @returns {Pick<ServerAccountUpdateRequest, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">} - The unpacked item permission data
 */
declare function ServerPackItemPermissions(permissionItems: Partial<Record<`${AssetGroupName}/${AssetName}`, ItemPermissions>>): Pick<ServerAccountUpdateRequest, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">;
/**
 * Unpack the quartet of blocked, limited, favorited and hidden item permissions into a single object
 * @param {Pick<Partial<ServerAccountDataSynced>, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">} data - The item permission data as received from the server
 * @param {boolean} onExtreme - If the expected difficulty is Extreme
 * @returns {{ permissions: Partial<Record<`${AssetGroupName}/${AssetName}`, ItemPermissions>>; shouldSync: boolean }} - The packed item permission data
 */
declare function ServerUnPackItemPermissions(data: Pick<Partial<ServerAccountDataSynced>, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">, onExtreme: boolean): {
    permissions: Partial<Record<`${AssetGroupName}/${AssetName}`, ItemPermissions>>;
    shouldSync: boolean;
};
/**
 * Syncs player's favorite, blocked, limited and hidden items to the server
 * @returns {void} - Nothing
 */
declare function ServerPlayerBlockItemsSync(): void;
/**
 * Syncs the full player log array to the server.
 * @returns {void} - Nothing
 */
declare function ServerPlayerLogSync(): void;
/**
 * Syncs the full player reputation array to the server.
 * @returns {void} - Nothing
 */
declare function ServerPlayerReputationSync(): void;
/**
 * Syncs the full player skill array to the server.
 * @returns {void} - Nothing
 */
declare function ServerPlayerSkillSync(): void;
/**
 * Syncs player's relations and related info to the server.
 * @returns {void} - Nothing
 */
declare function ServerPlayerRelationsSync(): void;
/**
 * Syncs {@link Player.ExtensionSettings} to the server.
 * @public
 * @param {keyof ExtensionSettings} dataKeyName - The single key to sync
 * @param {boolean} [_force] - unused
 */
declare function ServerPlayerExtensionSettingsSync(dataKeyName: keyof ExtensionSettings, _force?: boolean): void;
/**
 * Prepares an appearance bundle so we can push it to the server. It minimizes it by keeping only the necessary
 * information. (Asset name, group name, color, properties and difficulty)
 * @param {readonly Item[]} Appearance - The appearance array to bundle
 * @returns {AppearanceBundle} - The appearance bundle created from the given appearance array
 */
declare function ServerAppearanceBundle(Appearance: readonly Item[]): AppearanceBundle;
/**
 * Loads the appearance assets from a server bundle that only contains the main info (no asset) and validates their
 * properties to prevent griefing and respecting permissions in multiplayer
 * @param {Character} C - Character for which to load the appearance
 * @param {IAssetFamily} AssetFamily - Family of assets used for the appearance array
 * @param {AppearanceBundle} Bundle - Bundled appearance
 * @param {number} [SourceMemberNumber] - Member number of the user who triggered the change
 * @param {boolean} [AppearanceFull] - Whether or not the appearance should be assigned to an NPC's AppearanceFull
 * property
 * @returns {boolean} - Whether or not the appearance bundle update contained invalid items
 */
declare function ServerAppearanceLoadFromBundle(C: Character, AssetFamily: IAssetFamily, Bundle: AppearanceBundle, SourceMemberNumber?: number, AppearanceFull?: boolean): boolean;
/**
 * Builds a diff map for comparing changes to a character's appearance, keyed by asset group name
 * @param {IAssetFamily} assetFamily - The asset family of the appearance
 * @param {readonly Item[]} appearance - The current appearance to compare against
 * @param {AppearanceBundle} bundle - The new appearance bundle
 * @returns {AppearanceDiffMap} - An appearance diff map representing the changes that have been made to the character's
 * appearance
 */
declare function ServerBuildAppearanceDiff(assetFamily: IAssetFamily, appearance: readonly Item[], bundle: AppearanceBundle): AppearanceDiffMap;
/**
 * Maps a bundled appearance item, as stored on the server and used for appearance update messages, into a full
 * appearance item, as used by the game client
 * @param {IAssetFamily} assetFamily - The asset family of the appearance item
 * @param {ItemBundle | ServerCharacterItemUpdate} itemBundle - The bundled appearance item
 * @returns {null | Item} - A full appearance item representation of the provided bundled appearance item
 */
declare function ServerBundledItemToAppearanceItem(assetFamily: IAssetFamily, itemBundle: ItemBundle | ServerCharacterItemUpdate): null | Item;
/**
 * Convert an item into a (JSON-safe) item bundle
 * @param {Item} item The to-be converted item
 * @returns {ItemBundle} The matching item bundle
 */
declare function ServerBundledItemFromAppearanceItem(item: Item): ItemBundle;
/**
 * Parses an item color, based on the allowed colorable layers on an asset, and the asset's color schema
 * @param {Asset} asset - The asset on which the color is set
 * @param {undefined | BCColor | readonly BCColor[]} color - The color value to parse
 * @param {readonly BCColor[]} schema - The color schema to validate against
 * @returns {BCColor[]} - A parsed valid item color
 */
declare function ServerParseColor(asset: Asset, color: undefined | BCColor | readonly BCColor[], schema: readonly BCColor[]): BCColor[];
/**
 * Populates an appearance diff map with any required items, to ensure that all asset groups are present that need to
 * be.
 * @param {IAssetFamily} assetFamily - The asset family for the appearance
 * @param {AppearanceDiffMap} diffMap - The appearance diff map to populate
 * @returns {void} - Nothing
 */
declare function ServerAddRequiredAppearance(assetFamily: IAssetFamily, diffMap: AppearanceDiffMap): void;
/**
 * Syncs the player appearance with the server database.
 *
 * Note that this will *not* push appearance changes to the rest of the chatroom,
 * which requires either {@link ChatRoomCharacterItemUpdate} or {@link ChatRoomCharacterUpdate}.
 *
 * @returns {void} - Nothing
 */
declare function ServerPlayerAppearanceSync(): void;
/**
 * Syncs all the private room characters with the server
 * @returns {void} - Nothing
 */
declare function ServerPrivateCharacterSync(): void;
/**
 * Callback used to parse received information related to a query made by the player such as viewing their online
 * friends or current email status
 * @param {ServerAccountQueryResponse} data - Data object containing the query data
 * @returns {void} - Nothing
 */
declare function ServerAccountQueryResult(data: ServerAccountQueryResponse): void;
/**
 * Callback used to parse received information related to a beep from another account
 * @param {ServerAccountBeepResponse} data - Data object containing the beep object which contain at the very least a name and a member
 *     number
 * @returns {void} - Nothing
 */
declare function ServerAccountBeep(data: ServerAccountBeepResponse): void;
/**
 * Send a beep message to another player
 * @param {number} target - The member number of the target. We must be friend with them
 * @param {string} [msg] - The message to send to the target.
 * @param {object} [options] - Options for the beep message
 * @param {boolean} [options.includeRoom] - If set, we'll include the current room data we're in
 * @param {"Reply"|"Reaction"} [options.messageType]
 * @param {{ id: string, senderName: string, snippet: string }} [options.replyTo]
 * @param {string} [options.reactionTo]
 * @param {string} [options.reactionEmoji]
 * @param {boolean} [options.reactionRemove]
 */
declare function ServerSendBeepMessage(target: number, msg?: string, options?: {
    includeRoom?: boolean;
    messageType?: "Reply" | "Reaction";
    replyTo?: {
        id: string;
        senderName: string;
        snippet: string;
    };
    reactionTo?: string;
    reactionEmoji?: string;
    reactionRemove?: boolean;
}): void;
/**
 * Show a message as a beep
 * @param {string} message
 * @param {number} duration
 * @param {object} [options]
 * @param {(this: HTMLDivElement, event: PointerEvent) => void} [options.onClick]
 * @param {number} [options.memberNumber]
 * @param {string} [options.memberName]
 * @param {string} [options.chatRoomName]
 * @param {boolean} [options.silent]
 * @param {string} [title]
 */
declare function ServerShowBeep(message: string, duration: number, options?: {
    onClick?: (this: HTMLDivElement, event: PointerEvent) => void;
    memberNumber?: number;
    memberName?: string;
    chatRoomName?: string;
    silent?: boolean;
}, title?: string): void;
/**
 * Handle a leash beep from another player
 *
 * @param {ServerAccountBeepResponse} data
 */
declare function ServerHandleLeashBeep(data: ServerAccountBeepResponse): Promise<void>;
/**
 *
 * @param {unknown} data
 * @return {data is ServerAccountOwnershipStatus}
 */
declare function ServerPacketIsOwnershipStatus(data: unknown): data is ServerAccountOwnershipStatus;
/**
 *
 * @param {unknown} data
 * @return {data is ServerAccountOwnershipComplete}
 */
declare function ServerPacketIsOwnershipComplete(data: unknown): data is ServerAccountOwnershipComplete;
/**
 * @param {unknown} data
 * @return {data is ServerAccountOwnershipClear}
 */
declare function ServerPacketIsOwnershipClear(data: unknown): data is ServerAccountOwnershipClear;
/**
 * Callback used to parse received information related to the player ownership data
 * @param {ServerAccountOwnershipResponse} data - Data object containing the Owner name and Ownership object
 * @returns {void} - Nothing
 */
declare function ServerAccountOwnership(data: ServerAccountOwnershipResponse): void;
/**
 * @param {unknown} data
 * @return {data is ServerAccountLovershipStatus}
 */
declare function ServerPacketIsLovershipStatus(data: unknown): data is ServerAccountLovershipStatus;
/**
 * @param {unknown} data
 * @return {data is ServerAccountLovershipInfo}
 */
declare function ServerPacketIsLovershipInfo(data: unknown): data is ServerAccountLovershipInfo;
/**
 * Callback used to parse received information related to the player lovership data
 * @param {ServerAccountLovershipResponse} data - Data object containing the Lovership array
 * @returns {void} - Nothing
 */
declare function ServerAccountLovership(data: ServerAccountLovershipResponse): void;
/**
 * Compares the source account and target account to check if we allow using an item
 *
 * **This function MUST match server's identical function!**
 * @param {Character} Source
 * @param {Character} Target
 * @returns {boolean}
 */
declare function ServerChatRoomGetAllowItem(Source: Character, Target: Character): boolean;
declare var ServerValidation: {
    /**
     * Private helper to quickly check boolean settings
     * @param {boolean} defaultValue
     * @returns {(arg: boolean | undefined) => boolean}
     */
    isBool(defaultValue: boolean): (arg: boolean | undefined) => boolean;
    /**
     * Private helper to quickly check items in lists
     * @template T
     * @param {T[]} list
     * @param {T} defaultValue
     * @returns {(arg: unknown) => T}
     */
    isItem<T>(list: T[], defaultValue: T): (arg: unknown) => T;
    /**
     * Private helper to quickly check numbers
     * @template {number} T
     * @param {T} defaultValue
     * @returns {(arg: T | undefined) => T}
     */
    isNumber<T extends number>(defaultValue: T): (arg: T | undefined) => T;
    /**
     * Private helper to quickly check integers
     * @template {number} T
     * @param {number} min
     * @param {number} max
     * @param {T} defaultValue
     * @returns {(arg: T | undefined) => T}
     */
    isInt<T extends number>(min: number, max: number, defaultValue: T): (arg: T | undefined) => T;
    /**
     * Private helper to quickly check strings
     * @param {number} maxLength
     * @param {string} defaultValue
     * @returns {(arg: unknown) => string}
     */
    isString(maxLength: number, defaultValue: string): (arg: unknown) => string;
    /**
     * Private helper to quickly check strings
     * @param {number} maxLength
     * @param {string | undefined} defaultValue
     * @returns {(arg: unknown) => string | undefined}
     */
    isStringOrUndefined(maxLength: number, defaultValue?: string | undefined): (arg: unknown) => string | undefined;
    /**
     * Private helper to check strings against a regex
     * @param {RegExp} regex
     * @param {string} defaultValue
     * @returns {(arg: unknown) => string}
     */
    stringMatchesRegex(regex: RegExp, defaultValue: string): (arg: unknown) => string;
    /**
     * Private helper to validate array of integers
     * @template {unknown[]} T
     * @param {T} defaultValue - Default value if the array fails validation
     * @param {object} [options] - Options to use for validation
     * @param {number} [options.minInteger] - Minimum bound, inclusive, for the integers
     * @param {number} [options.maxInteger] - Maximum bound, inclusive, for the integers
     * @param {boolean} [options.strict] - Whether a number not in [minInteger, maxInteger] should fail validation;
     *   otherwise the integer will just be removed.
     * @param {boolean} [options.unique] - Ensure the array contains unique values
     * @returns {(array: unknown) => T}
     */
    isArrayOfIntegers<T extends unknown[]>(defaultValue: T, options?: {
        minInteger?: number;
        maxInteger?: number;
        strict?: boolean;
        unique?: boolean;
    }): (array: unknown) => T;
    /**
     * Private helper to check arrays whose items must appear in a fixed list
     * @template T
     * @param {readonly T[]} items
     * @param {T[]} defaultValue
     * @returns {(arg: unknown) => T[]}
     */
    isArrayOfItems<T>(items: readonly T[], defaultValue: T[]): (arg: unknown) => T[];
    /**
     * Private helper to quickly check color codes
     * @param {boolean} allowAlpha
     * @param {HexColor | undefined} defaultValue
     * @return {(arg: any) => HexColor | undefined}
     */
    isColorCode(allowAlpha: boolean | undefined, defaultValue: HexColor | undefined): (arg: any) => HexColor | undefined;
    /**
     * Private helper to quick check notification settings
     * @param {NotificationSetting} defaultNotif
     * @returns {(arg: undefined | Partial<NotificationSetting>) => NotificationSetting}
     */
    isValidNotification(defaultNotif: NotificationSetting): (arg: undefined | Partial<NotificationSetting>) => NotificationSetting;
    /**
     * Private helper to validate object shapes
     * @template {object} T
     * @param {T} shape
     * @returns {(arg: T) => T}
     */
    hasSameShape<T extends object>(shape: T): (arg: T) => T;
};
/**
 * Namespace with functions for validating {@link ServerAccountDataSynced} properties, converting them into their valid {@link Character} counterpart
 * @satisfies {{ [k in keyof (ServerAccountData | PlayerCharacter)]?: (arg: Partial<ServerAccountData[k]>, C: Character) => PlayerCharacter[k] }}
 * @namespace
 */
declare var ServerAccountDataSyncedValidate: {
    Title: (arg: Partial<TitleName | undefined>, C: Character) => Partial<TitleName | undefined>;
    Nickname: (arg: Partial<string | undefined>, C: Character) => string | undefined;
    Money: (arg: number, C: Character) => number;
    AllowedInteractions: (arg: Partial<AllowedInteractions>, C: Character) => AllowedInteractions;
    Difficulty: (arg: Partial<{
        Level: DifficultyLevel;
        LastChange?: number;
    } | undefined>, C: Character) => {
        Level: DifficultyLevel;
        LastChange?: number;
    };
    ArousalSettings: (arg: Partial<ArousalSettingsType | undefined>, C: Character) => {
        Active: ArousalActiveName;
        Visible: ArousalVisibleName;
        ShowOtherMeter: boolean;
        AffectExpression: boolean;
        AffectStutter: ArousalAffectStutterName;
        VFX: GraphicsVFXName;
        VFXVibrator: GraphicsVFXVibratorName;
        VFXFilter: GraphicsVFXFilterName;
        Progress: number;
        ProgressTimer: number;
        VibratorLevel: 0 | 1 | 2 | 3 | 4;
        ChangeTime: number;
        Activity: string;
        Zone: string;
        Fetish: string;
        OrgasmTimer: number;
        OrgasmStage: 0 | 1 | 2;
        OrgasmCount: number;
        DisableAdvancedVibes: boolean;
        AffectErection: boolean;
    };
    OnlineSharedSettings: (arg: Partial<CharacterOnlineSharedSettings | undefined>, C: Character) => {
        AllowFullWardrobeAccess: boolean;
        BlockBodyCosplay: boolean;
        AllowPlayerLeashing: boolean;
        AllowRename: boolean;
        DisablePickingLocksOnSelf: boolean;
        GameVersion: string;
        ItemsAffectExpressions: boolean;
        ScriptPermissions: ScriptPermissions;
        WheelFortune: string;
        LockTimerLimit: LockTimerLimitName;
    };
    Crafting: (arg: Partial<string | undefined>, C: Character) => (CraftingItem | null)[];
    Game: (arg: Partial<CharacterGameParameters | undefined>, C: Character) => {
        LARP: GameLARPParameters | undefined;
        MagicBattle: GameMagicBattleParameters | undefined;
        GGTS: GameGGTSParameters | undefined;
        Poker: GamePokerParameters | undefined;
        ClubCard: GameClubCardParameters | undefined;
        Prison: GamePrisonParameters | undefined;
        MagicSchoolFindsAround: GameMagicSchoolFindsAroundParameters | undefined;
    };
    LabelColor: (arg: Partial<"" | `#${string}` | undefined>, C: Character) => `#${string}`;
    Creation: (arg: number, C: Character) => number;
    Description: (arg: Partial<string | undefined>, C: Character) => string;
    Lover: (arg: Partial<string | undefined>, C: Character) => string | undefined;
    Owner: (arg: Partial<string | undefined>, C: Character) => string;
    Ownership: (arg: Partial<ServerOwnership | undefined>, C: Character) => {
        Name: string;
        MemberNumber: number;
        Notes: string | undefined;
        Stage: 0 | 1;
        Start: number;
    } | null;
    Lovership: (arg: Partial<ServerLovership[] | undefined>, C: Character) => Lovership[];
    Reputation: (arg: Partial<{
        Type: ReputationType;
        Value: number;
    }[] | undefined>, C: Character) => Reputation[];
    WhiteList: (arg: (number | undefined)[], C: Character) => never[];
    BlackList: (arg: (number | undefined)[], C: Character) => never[];
    /**
     * Validate a ChatRoomMapData object
     *
     * Note that because the position needs the actual room data (for the entry flag position),
     * you might get slightly incorrect results from this if run from outside a chat room.
     *
     * @type {((arg: Partial<ChatRoomMapData> | undefined, C: Character) => ChatRoomMapData) & { [k in keyof ChatRoomMapData]: (arg: Partial<ChatRoomMapData[k]> | undefined, C: Character) => ChatRoomMapData[k] }}
     */
    MapData: ((arg: Partial<ChatRoomMapData> | undefined, C: Character) => ChatRoomMapData) & { [k in keyof ChatRoomMapData]: (arg: Partial<ChatRoomMapData[k]> | undefined, C: Character) => ChatRoomMapData[k]; };
    /**
     * @param {Partial<ChatRoomSearchSettings> | undefined} arg
     * @param {Character} C
     * @returns {ChatRoomSearchSettings}
     */
    ChatSearchSettings: (arg: Partial<ChatRoomSearchSettings> | undefined, C: Character) => ChatRoomSearchSettings;
    WardrobeCharacterNames: (arg: Partial<string[] | undefined>, C: Character) => any[];
    RecentlyUsedMapElements: (arg: Partial<(`Effect:${number}` | `Object:${number}` | `Tile:${number}`)[] | undefined>, C: Character) => ChatRoomMapDoodad[];
    /**
     * @param {Partial<InfiltrationType> | undefined} arg
     * @param {Character} C
     * @returns {InfiltrationType}
     */
    Infiltration: (arg: Partial<InfiltrationType> | undefined, C: Character) => InfiltrationType;
};
/**
 * @param {unknown} arg
 * @returns {arg is ChatRoomMapData}
 */
declare function ServerIsMapData(arg: unknown): arg is ChatRoomMapData;
/**
 * Namespace with default values for {@link ChatRoomSearchSettings} properties.
 * @type {{ [k in keyof Required<ChatRoomSearchSettings>]: (arg: ChatRoomSearchSettings[k], obj?: undefined) => ChatRoomSearchSettings[k] }}
 * @namespace
 */
declare const ServerChatRoomSearchSettingsValidate: { [k in keyof Required<ChatRoomSearchSettings>]: (arg: ChatRoomSearchSettings[k], obj?: undefined) => ChatRoomSearchSettings[k]; };
/** @type {readonly ServerChatRoomRole[]} */
declare const ServerChatRoomRoleList: readonly ServerChatRoomRole[];
type ServerChatRoomCustomDataValidation = (((arg: ServerChatRoomCustomData | undefined, obj?: undefined) => ServerChatRoomCustomData | undefined) & {
    [k in keyof Required<ServerChatRoomCustomData>]: (arg: ServerChatRoomCustomData[k] | undefined, obj?: undefined) => ServerChatRoomCustomData[k] | undefined;
});
/**
 * Whole-record validator for {@link ServerChatRoomCustomData}, with a one-argument validator for each field.
 * @typedef {(
 *   ((arg: ServerChatRoomCustomData | undefined, obj?: undefined) => ServerChatRoomCustomData | undefined)
 *   & { [k in keyof Required<ServerChatRoomCustomData>]: (arg: ServerChatRoomCustomData[k] | undefined, obj?: undefined) => ServerChatRoomCustomData[k] | undefined }
 * )} ServerChatRoomCustomDataValidation
 */
/**
 * Per-field validators for {@link ServerChatRoomData} (for {@link ValidationApplyRecord}).
 * The second argument is unused here; call a validator with the field value alone.
 * @type {(
 *   { [k in keyof ServerChatRoomData]: (arg: ServerChatRoomData[k], obj?: undefined) => ServerChatRoomData[k] }
 *   & { Custom: ServerChatRoomCustomDataValidation }
 * )}
 */
declare var ServerChatRoomDataValidationRecord: ({ [k in keyof ServerChatRoomData]: (arg: ServerChatRoomData[k], obj?: undefined) => ServerChatRoomData[k]; } & {
    Custom: ServerChatRoomCustomDataValidation;
});
/**
 * Validates a chatroom's data
 * @param {unknown} data
 */
declare function ServerChatRoomDataValidate(data: unknown): {
    Name: string;
    Description: string;
    Admin: number[];
    Whitelist: number[];
    Ban: number[];
    Background: string;
    Limit: number;
    Game: ServerChatRoomGame;
    Visibility: ServerChatRoomRole[];
    Access: ServerChatRoomRole[];
    BlockCategory: ServerChatRoomBlockCategory[];
    Language: ServerChatRoomLanguage;
    Space: ServerChatRoomSpace;
    MapData?: any;
    Custom: ServerChatRoomCustomData;
    Character: ServerAccountDataSynced[];
};
/**
 * Per-field validators for {@link ServerChatRoomSearchData} (for {@link ValidationApplyRecord}).
 * The second argument is unused here; call a validator with the field value alone.
 * @type {{ [k in keyof ServerChatRoomSearchData]: (arg: ServerChatRoomSearchData[k], obj?: undefined) => ServerChatRoomSearchData[k] }}
 */
declare var ServerChatRoomSearchDataValidationRecord: { [k in keyof ServerChatRoomSearchData]: (arg: ServerChatRoomSearchData[k], obj?: undefined) => ServerChatRoomSearchData[k]; };
/**
 * Validates search results
 * @param {unknown} data
 * @returns {ServerChatRoomSearchData}
 */
declare function ServerChatRoomSearchDataValidate(data: unknown): ServerChatRoomSearchData;
declare const ServerDefaultTimeout = 3000;
declare class ServerError extends Error {
}
declare class ServerTimeoutError extends ServerError {
    /**
     * @param {string} [message]
     */
    constructor(message?: string);
}
declare class ServerInProgressError extends ServerError {
    /**
     * @param {string} [message]
     */
    constructor(message?: string);
}
declare class ServerJoinError extends ServerError {
    /**
     * @type {ServerChatRoomJoinFailedResponse} name
     */
    name: ServerChatRoomJoinFailedResponse;
    /**
     * @param {ServerChatRoomJoinFailedResponse} type
     * @param {string} [message]
     */
    constructor(type: ServerChatRoomJoinFailedResponse, message?: string);
}
/**
 * Run a promise along with a timeout
 *
 * @template T
 * @param {number} timeout
 * @param {((resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: Error) => void) => void)} executor
 * @returns {Promise<T>}
 */
declare function ServerPromiseWithTimeout<T>(timeout: number, executor: ((resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: Error) => void) => void)): Promise<T>;
declare let ServerRoomSearchLastQueryTime: number;
/** @type {ServerChatRoomSearchRequest | null} */
declare let ServerRoomSearchLastQuery: ServerChatRoomSearchRequest | null;
/**
 * Perform a search query against the server
 * @param {string} queryString
 * @param {Omit<ServerChatRoomSearchRequest, "Query">} options
 * @returns {Promise<Result<ServerChatRoomSearchResultResponse, ServerError>>}
 */
declare function ServerRoomSearch(queryString: string, options: Omit<ServerChatRoomSearchRequest, "Query">): Promise<Result<ServerChatRoomSearchResultResponse, ServerError>>;
declare let ServerRoomJoinLastQuery: string;
declare let ServerRoomJoinLastQueryTime: number;
/**
 * Perform a join query against the server
 * @param {string} roomName
 * @returns {Promise<Result<string, ServerError>>}
 */
declare function ServerRoomJoin(roomName: string): Promise<Result<string, ServerError>>;
/**
 * Update the player's friend- and submissive-related arrays based on the inc
 * @param {ServerFriendInfo[]} data An array of data, we receive from the server
 * @returns {boolean} Whether the player's {@link Player["FriendNames"]} and/or {@link Player["SubmissivesList"]} were updated
 */
declare function ServerUpdateFriendList(data: ServerFriendInfo[]): boolean;
