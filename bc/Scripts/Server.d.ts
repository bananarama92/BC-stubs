/** Loads the server by attaching the socket events and their respective callbacks */
declare function ServerInit(): void;
/**
 * Sets the connection status of the server and updates the login page message
 * @param {boolean} connected - whether or not the websocket connection to the server has been established successfully
 * @param {string} [errorMessage] - the error message to display if not connected
 */
declare function ServerSetConnected(connected: boolean, errorMessage?: string): void;
declare function ServerIsLoggedIn(): boolean;
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
 * @param {boolean} [close=false] - close the transport
 * @returns {void} - Nothing
 */
declare function ServerDisconnect(data?: ServerForceDisconnectMessage, close?: boolean): void;
/**
 * Returns whether the player is currently in a chatroom or viewing a subscreen while in a chatroom
 * @returns {boolean} - True if in a chatroom
 */
declare function ServerPlayerIsInChatRoom(): boolean;
declare function ServerSend<Ev extends import("@socket.io/component-emitter").EventNames<ClientToServerEvents>>(ev: Ev, ...args: import("@socket.io/component-emitter").EventParams<ClientToServerEvents, Ev>): void;
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
 * @param {Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>} permissionItems - The packed item permission data
 * @returns {Pick<ServerAccountUpdateRequest, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">} - The unpacked item permission data
 */
declare function ServerPackItemPermissions(permissionItems: Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>): Pick<ServerAccountUpdateRequest, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">;
/**
 * Unpack the quartet of blocked, limited, favorited and hidden item permissions into a single object
 * @param {Pick<Partial<ServerAccountDataSynced>, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">} data - The item permission data as received from the server
 * @param {boolean} onExtreme - If the expected difficulty is Extreme
 * @returns {{ permissions: Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>; shouldSync: boolean }} - The packed item permission data
 */
declare function ServerUnPackItemPermissions(data: Pick<Partial<ServerAccountDataSynced>, "BlockItems" | "LimitedItems" | "FavoriteItems" | "HiddenItems">, onExtreme: boolean): {
    permissions: Partial<Record<`${AssetGroupName}/${string}`, ItemPermissions>>;
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
 * @param {boolean} [AppearanceFull=false] - Whether or not the appearance should be assigned to an NPC's AppearanceFull
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
 * @param {ItemBundle} item - The bundled appearance item
 * @returns {null | Item} - A full appearance item representation of the provided bundled appearance item
 */
declare function ServerBundledItemToAppearanceItem(assetFamily: IAssetFamily, item: ItemBundle): null | Item;
/**
 * Parses an item color, based on the allowed colorable layers on an asset, and the asset's color schema
 * @param {Asset} asset - The asset on which the color is set
 * @param {string | readonly string[]} color - The color value to parse
 * @param {readonly string[]} schema - The color schema to validate against
 * @returns {string|string[]} - A parsed valid item color
 */
declare function ServerParseColor(asset: Asset, color: string | readonly string[], schema: readonly string[]): string | string[];
/**
 * Populates an appearance diff map with any required items, to ensure that all asset groups are present that need to
 * be.
 * @param {IAssetFamily} assetFamily - The asset family for the appearance
 * @param {AppearanceDiffMap} diffMap - The appearance diff map to populate
 * @returns {void} - Nothing
 */
declare function ServerAddRequiredAppearance(assetFamily: IAssetFamily, diffMap: AppearanceDiffMap): void;
/**
 * Validates and returns a color against a color schema
 * @param {string} Color - The color to validate
 * @param {readonly string[]} Schema - The color schema to validate against (a list of accepted Color values)
 * @returns {string} - The color if it is a valid hex color string or part of the color schema, or the default color
 *     from the color schema otherwise
 */
declare function ServerValidateColorAgainstSchema(Color: string, Schema: readonly string[]): string;
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
 */
declare function ServerSendBeepMessage(target: number, msg?: string, options?: {
    includeRoom?: boolean;
}): void;
/**
 * Show a message as a beep
 * @param {string} message
 * @param {number} duration
 * @param {object} [options]
 * @param {(this: HTMLDivElement, event: MouseEvent) => void} [options.onClick]
 * @param {number} [options.memberNumber]
 * @param {string} [options.memberName]
 * @param {string} [options.chatRoomName]
 * @param {boolean} [options.silent]
 * @param {string} [title]
 */
declare function ServerShowBeep(message: string, duration: number, options?: {
    onClick?: (this: HTMLDivElement, event: MouseEvent) => void;
    memberNumber?: number;
    memberName?: string;
    chatRoomName?: string;
    silent?: boolean;
}, title?: string): void;
/** Draws the last beep sent by the server if the timer is still valid, used during the drawing process
 * @deprecated
 */
declare function ServerDrawBeep(): void;
/** Handles a click on the beep rectangle if mail is included */
declare function ServerClickBeep(): void;
/**
 * Opens the friendlist from any screen
 * @deprecated Use {@link FriendListShow()};
 */
declare function ServerOpenFriendList(): void;
/**
 * Callback used to parse received information related to the player ownership data
 * @param {object} data - Data object containing the Owner name and Ownership object
 * @returns {void} - Nothing
 */
declare function ServerAccountOwnership(data: object): void;
/**
 * Callback used to parse received information related to the player lovership data
 * @param {object} data - Data object containing the Lovership array
 * @returns {void} - Nothing
 */
declare function ServerAccountLovership(data: object): void;
/**
 * Compares the source account and target account to check if we allow using an item
 *
 * **This function MUST match server's identical function!**
 * @param {Character} Source
 * @param {Character} Target
 * @returns {boolean}
 */
declare function ServerChatRoomGetAllowItem(Source: Character, Target: Character): boolean;
/** @type {SocketIO.Socket} */
declare var ServerSocket: SocketIO.Socket;
declare var ServerURL: string;
/**
 * @type { { Message: string; Timer: number; ChatRoomName?: string | null; IsMail?: boolean; } }
 * @deprecated Use {@link ServerShowBeep} instead.
 */
declare var ServerBeep: {
    Message: string;
    Timer: number;
    ChatRoomName?: string | null;
    IsMail?: boolean;
};
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
declare const ServerScriptMessage: string;
declare const ServerScriptWarningStyle: string;
/** @readonly */
declare var ServerAccountUpdate: {
    /**
     * @type {Map<keyof ServerAccountUpdateRequest, any>}
     */
    Queue: Map<keyof ServerAccountUpdateRequest, any>;
    /**
     * @type {null | ReturnType<typeof setTimeout>}
     */
    Timeout: null | ReturnType<typeof setTimeout>;
    /**
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
declare namespace ServerPlayerChatRoom {
    let callbacks: ((screen: string) => boolean)[];
    /**
     * Register one or more screenname and/or callback for determining whether the player is in a chat room.
     * @param {ServerChatRoomChecksOptions[]} options
     */
    function register(...options: ServerChatRoomChecksOptions[]): void;
}
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
declare namespace ServerAccountDataSyncedValidate {
    function Title(arg: Partial<TitleName>, C: Character): Partial<TitleName>;
    function Nickname(arg: string, C: Character): string;
    function ItemPermission(arg: Partial<0 | 2 | 1 | 3 | 4 | 5>, C: Character): 0 | 2 | 1 | 3 | 4 | 5;
    function Difficulty(arg: Partial<{
        Level: DifficultyLevel;
        LastChange: number;
    }>, C: Character): {
        Level: DifficultyLevel;
        LastChange: number;
    };
    function ArousalSettings(arg: Partial<ArousalSettingsType>, C: Character): {
        Active: ArousalActiveName;
        Visible: ArousalVisibleName;
        ShowOtherMeter: boolean;
        AffectExpression: boolean;
        AffectStutter: ArousalAffectStutterName;
        VFX: SettingsVFXName;
        VFXVibrator: SettingsVFXVibratorName;
        VFXFilter: SettingsVFXFilterName;
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
    };
    function OnlineSharedSettings(arg: Partial<CharacterOnlineSharedSettings>, C: Character): {
        AllowFullWardrobeAccess: boolean;
        BlockBodyCosplay: boolean;
        AllowPlayerLeashing: boolean;
        AllowRename: boolean;
        DisablePickingLocksOnSelf: boolean;
        GameVersion: string;
        ItemsAffectExpressions: boolean;
        ScriptPermissions: ScriptPermissions;
        WheelFortune: string;
    };
    function Crafting(arg: string, C: Character): CraftingItem[];
    function Game(arg: Partial<CharacterGameParameters>, C: Character): {
        LARP: Record<string, unknown>;
        MagicBattle: GameMagicBattleParameters & Record<string, unknown>;
        GGTS: GameGGTSParameters & Record<string, unknown>;
        Poker: Record<string, unknown>;
        ClubCard: GameClubCardParameters & Record<string, unknown>;
        Prison: Record<string, unknown>;
    };
    function LabelColor(arg: string, C: Character): string;
    function Creation(arg: number, C: Character): number;
    function Description(arg: string, C: Character): string;
    function Ownership(arg: Partial<ServerOwnership>, C: Character): {
        Name: string;
        MemberNumber: number;
        Stage: 0 | 1;
        Start: number;
    };
    function Lovership(arg: ServerLovership[], C: Character): Lovership[];
    function Reputation(arg: {
        Type: ReputationType;
        Value: number;
    }[], C: Character): Reputation[];
    function WhiteList(arg: number[], C: Character): number[];
    function BlackList(arg: number[], C: Character): number[];
    function MapData(arg: Partial<ChatRoomMapData>, C: Character): ChatRoomMapData;
}
type ServerChatRoomChecksOptions = {
    screen?: string;
    callback?: () => boolean;
};
