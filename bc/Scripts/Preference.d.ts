/**
 * Get the sensory deprivation setting for the player
 * @returns {boolean} - Return true if sensory deprivation is active, false otherwise
 */
declare function PreferenceIsPlayerInSensDep(): boolean;
/**
 * Compares the arousal preference level and returns TRUE if that level is met, or an higher level is met
 * @param {Character} C - The player who performs the sexual activity
 * @param {ArousalActiveName} Level - The name of the level ("Inactive", "NoMeter", "Manual", "Hybrid", "Automatic")
 * @returns {boolean} - Returns TRUE if the level is met or more
 */
declare function PreferenceArousalAtLeast(C: Character, Level: ArousalActiveName): boolean;
/**
 * Gets the effect of a sexual activity on the player
 * @param {Character} C - The player who performs the sexual activity
 * @param {ActivityName} Type - The type of the activity that is performed
 * @param {boolean} Self - Determines, if the current player is giving (false) or receiving (true)
 * @returns {ArousalFactor} - Returns the love factor of the activity for the character (0 is horrible, 2 is normal, 4 is great)
 */
declare function PreferenceGetActivityFactor(C: Character, Type: ActivityName, Self: boolean): ArousalFactor;
/**
 * Sets the love factor of a sexual activity for the character
 * @param {Character} C - The character for whom the activity factor should be set
 * @param {ActivityName} Type - The type of the activity that is performed
 * @param {boolean} Self - Determines, if the current player is giving (false) or receiving (true)
 * @param {ArousalFactor} Factor - The factor of the sexual activity (0 is horrible, 2 is normal, 4 is great)
 */
declare function PreferenceSetActivityFactor(C: Character, Type: ActivityName, Self: boolean, Factor: ArousalFactor): void;
/**
 * Gets the factor of a fetish for the player, "2" for normal is default if factor isn't found
 * @param {Character} C - The character to query
 * @param {FetishName} Type - The name of the fetish
 * @returns {ArousalFactor} - Returns the love factor of the fetish for the character (0 is horrible, 2 is normal, 4 is great)
 */
declare function PreferenceGetFetishFactor(C: Character, Type: FetishName): ArousalFactor;
/**
 * Sets the arousal factor of a fetish for a character
 * @param {Character} C - The character to set
 * @param {FetishName} Type - The name of the fetish
 * @param {ArousalFactor} Factor - New arousal factor for that fetish (0 is horrible, 2 is normal, 4 is great)
 * @returns {void} - Nothing
 */
declare function PreferenceSetFetishFactor(C: Character, Type: FetishName, Factor: ArousalFactor): void;
/**
 * Validates the character arousal object and converts it's objects to compressed string if needed
 * @param {ArousalFactor} factor - The factor of enjoyability from 0 (turn off) to 4 (very high)
 * @param {boolean} allowOrgasm - Whether the zone can give an orgasm
 * @returns {string} - A string of 1 char that represents the compressed zone
 */
declare function PreferenceArousalZoneToChar(factor: ArousalFactor, allowOrgasm: boolean): string;
/**
 * Turn a fetish factor value into its serialized character representation
 * @param {ArousalFactor} factor - The factor of enjoyability from 0 (turn off) to 4 (very high)
 * @returns {string} - A string of 1 char that represents the compressed zone
 */
declare function PreferenceArousalFetishToChar(factor: ArousalFactor): string;
/**
 * Validates the character arousal object and converts it's objects to compressed string if needed
 * @param {number} selfFactor - The first factor of enjoyability from 0 (turn off) to 4 (very high)
 * @param {number} otherFactor - The second factor of enjoyability from 0 (turn off) to 4 (very high)
 * @returns {string} - A string of 1 char that represents the compressed zone
 */
declare function PreferenceArousalActivityToChar(selfFactor: number, otherFactor: number): string;
/**
 * Gets the corresponding arousal zone definition from a player's preferences (if the group's activities are mirrored,
 * returns the arousal zone definition for the mirrored group).
 * @param {Character} C - The character for whom to get the arousal zone
 * @param {AssetGroupItemName} ZoneName - The name of the zone to get
 * @returns {null | ArousalZone} - Returns the arousal zone preference object,
 * or null if a corresponding zone definition could not be found.
 */
declare function PreferenceGetArousalZone(C: Character, ZoneName: AssetGroupItemName): null | ArousalZone;
/**
 * Gets the love factor of a zone for the character
 * @param {Character} C - The character for whom the love factor of a particular zone should be gotten
 * @param {AssetGroupItemName} ZoneName - The name of the zone to get the love factor for
 * @returns {ArousalFactor} - Returns the love factor of a zone for the character (0 is horrible, 2 is normal, 4 is great)
 */
declare function PreferenceGetZoneFactor(C: Character, ZoneName: AssetGroupItemName): ArousalFactor;
/**
 * Sets the arousal zone data for a specific body zone on the player
 * @param {Character} C - The character, for whom the love factor of a particular zone should be set
 * @param {AssetGroupItemName} ZoneName - The name of the zone, the factor should be set for
 * @param {null | ArousalFactor} [Factor] - The factor of the zone (0 is horrible, 2 is normal, 4 is great)
 * @param {null | boolean} [CanOrgasm] - Sets, if the character can cum from the given zone (true) or not (false)
 * @returns {void} - Nothing
 */
declare function PreferenceSetArousalZone(C: Character, ZoneName: AssetGroupItemName, Factor?: null | ArousalFactor, CanOrgasm?: null | boolean): void;
/**
 * Determines, if a player can reach on orgasm from a particular zone
 * @param {Character} C - The character whose ability to orgasm we check
 * @param {AssetGroupItemName} ZoneName - The name of the zone to check
 * @returns {boolean} - Returns true if the zone allows orgasms for a character, false otherwise
 */
declare function PreferenceGetZoneOrgasm(C: Character, ZoneName: AssetGroupItemName): boolean;
/**
 * Checks, if the arousal activity controls must be activated
 * @returns {boolean} - Returns true if we must activate the preference controls, false otherwise
 */
declare function PreferenceArousalIsActive(): boolean;
/**
 * Initialize and validates the character settings
 * @param {Character} C - The character, whose preferences are initialized
 * @returns {void} - Nothing
 */
declare function PreferenceInit(C: Character): void;
/**
 * Initialize and validates Player settings
 * @param {PlayerCharacter} C
 * @param {Partial<ServerAccountData>} data
 * @returns {void} - Nothing
 */
declare function PreferenceInitPlayer(C: PlayerCharacter, data: Partial<ServerAccountData>): void;
/**
 * Initialise the Notifications settings, converting the old boolean types to objects
 * @param {boolean} setting - The old version of the setting
 * @param {NotificationAudioType} audio - The audio setting
 * @param {NotificationAlertType} [defaultAlertType] - The default AlertType to use
 * @returns {NotificationSetting} - The setting to use
 * @deprecated
 */
declare function PreferenceInitNotificationSetting(setting: boolean, audio: NotificationAudioType, defaultAlertType?: NotificationAlertType): NotificationSetting;
/**
 * Updates all of the validation "keys" based on the currently registered assets, groups, and activities
 */
declare function PreferenceArousalUpdateValidation(): void;
/**
 * Registers a new extension setting to the preference screen
 * @public
 * @param {PreferenceExtensionsSettingItem} Setting - The extension setting to register
 * @returns {void} - Nothing
 */
declare function PreferenceRegisterExtensionSetting(Setting: PreferenceExtensionsSettingItem): void;
/**
 * Return a new object with default item permissions
 * @returns {ItemPermissions} - The item permissions
 */
declare function PreferencePermissionGetDefault(): ItemPermissions;
/** @type {ChatColorThemeType[]} */
declare var PreferenceChatColorThemeList: ChatColorThemeType[];
/** @type {ChatEnterLeaveType[]} */
declare var PreferenceChatEnterLeaveList: ChatEnterLeaveType[];
/** @type {ChatMemberNumbersType[]} */
declare var PreferenceChatMemberNumbersList: ChatMemberNumbersType[];
/** @type {ChatFontSizeType[]} */
declare var PreferenceChatFontSizeList: ChatFontSizeType[];
declare var PreferenceSettingsSensitivityList: number[];
declare var PreferenceSettingsSensitivityIndex: number;
declare var PreferenceSettingsDeadZoneList: number[];
declare var PreferenceSettingsDeadZoneIndex: number;
declare var PreferenceCalibrationStage: number;
/** @type {ImmersionSensDepName[]} */
declare var PreferenceSettingsSensDepList: ImmersionSensDepName[];
/** @type {LockTimerLimitName[]} */
declare var PreferenceSettingsLockTimerLimitList: LockTimerLimitName[];
/** @type {GraphicsVFXName[]} */
declare var PreferenceSettingsVFXList: GraphicsVFXName[];
/** @deprecated */
declare var PreferenceSettingsVFXIndex: number;
/** @type {GraphicsVFXVibratorName[]} */
declare var PreferenceSettingsVFXVibratorList: GraphicsVFXVibratorName[];
/** @deprecated */
declare var PreferenceSettingsVFXVibratorIndex: number;
/** @type {GraphicsVFXFilterName[]} */
declare var PreferenceSettingsVFXFilterList: GraphicsVFXFilterName[];
/** @deprecated */
declare var PreferenceSettingsVFXFilterIndex: number;
/** @type {GraphicsFontName[]} */
declare var PreferenceGraphicsFontList: GraphicsFontName[];
/** @type {WebGLPowerPreference[]} */
declare var PreferenceGraphicsPowerModes: WebGLPowerPreference[];
/** @deprecated */
declare var PreferenceGraphicsFontIndex: number;
/** @deprecated @type {number} */
declare var PreferenceGraphicsAnimationQualityIndex: number;
/** @deprecated @type {number} */
declare var PreferenceGraphicsPowerModeIndex: number;
declare var PreferenceGraphicsAnimationQualityList: number[];
declare var PreferenceGraphicsFrameLimit: number[];
/** @type {GraphicsShowFullscreenButton[]} */
declare var PreferenceGraphicsFullscreenButtonList: GraphicsShowFullscreenButton[];
/** @type {ArousalActiveName[]} */
declare var PreferenceArousalActiveList: ArousalActiveName[];
declare var PreferenceArousalActiveIndex: number;
/** @type {ArousalVisibleName[]} */
declare var PreferenceArousalVisibleList: ArousalVisibleName[];
declare var PreferenceArousalVisibleIndex: number;
/** @type {ArousalAffectStutterName[]} */
declare var PreferenceArousalAffectStutterList: ArousalAffectStutterName[];
declare var PreferenceArousalAffectStutterIndex: number;
/**
 * Initialized by {@link PreferenceSubscreenArousalLoad}
 * @type {ActivityName[]}
 */
declare var PreferenceArousalActivityList: ActivityName[];
declare var PreferenceArousalActivityIndex: number;
/**
 * @type {never}
 * @deprecated
 */
declare var PreferenceArousalActivityFactorSelf: never;
/**
 * @type {never}
 * @deprecated
 */
declare var PreferenceArousalActivityFactorOther: never;
/**
 * @type {never}
 * @deprecated
 */
declare var PreferenceArousalZoneFactor: never;
/**
 * Initialized by {@link PreferenceSubscreenArousalLoad}
 * @type {FetishName[]}
 */
declare var PreferenceArousalFetishList: FetishName[];
declare var PreferenceArousalFetishIndex: number;
/**
 * @type {never}
 * @deprecated
 */
declare var PreferenceArousalFetishFactor: never;
declare namespace PreferenceActivityEnjoymentDefault {
    let Name: never;
    let Self: ArousalFactor;
    let Other: ArousalFactor;
}
declare namespace PreferenceArousalFetishDefault {
    let Name_1: never;
    export { Name_1 as Name };
    export let Factor: ArousalFactor;
}
declare namespace PreferenceArousalZoneDefault {
    let Name_2: never;
    export { Name_2 as Name };
    let Factor_1: ArousalFactor;
    export { Factor_1 as Factor };
    export let Orgasm: boolean;
}
/**
 * Which zones are considered erogenous by default
 * @type {AssetGroupName[]}
 */
declare var PreferenceArousalZoneOrgasmDefault: AssetGroupName[];
/**
 * Namespace with default values for {@link ArousalSettingsType} properties.
 * @type {Required<ArousalSettingsType>}
 * @namespace
 */
declare var PreferenceArousalSettingsDefault: Required<ArousalSettingsType>;
/**
 * Namespace with functions for validating {@link ArousalSettingsType} properties
 * @type {{ [k in keyof Required<ArousalSettingsType>]: (arg: ArousalSettingsType[k], C: Character) => ArousalSettingsType[k] }}
 * @namespace
 */
declare var PreferenceArousalSettingsValidate: { [k in keyof Required<ArousalSettingsType>]: (arg: ArousalSettingsType[k], C: Character) => ArousalSettingsType[k]; };
/**
 * Namespace with default values for {@link CharacterOnlineSharedSettings} properties.
 * @type {CharacterOnlineSharedSettings}
 * @namespace
 */
declare var PreferenceOnlineSharedSettingsDefault: CharacterOnlineSharedSettings;
/**
 * Namespace with default values for {@link CharacterOnlineSharedSettings} properties.
 * @type {{ [k in keyof Required<CharacterOnlineSharedSettings>]: (arg: CharacterOnlineSharedSettings[k], C: Character) => CharacterOnlineSharedSettings[k] }}
 * @namespace
 */
declare var PreferenceOnlineSharedSettingsValidate: { [k in keyof Required<CharacterOnlineSharedSettings>]: (arg: CharacterOnlineSharedSettings[k], C: Character) => CharacterOnlineSharedSettings[k]; };
/**
 * Namespace with default values for {@link ChatSettingsType} properties.
 * @type {Required<ChatSettingsType>}
 * @namespace
 */
declare var PreferenceChatSettingsDefault: Required<ChatSettingsType>;
/**
 * Namespace with functions for validating {@link ChatSettingsType} properties
 * @type {{ [k in keyof Required<ChatSettingsType>]: (arg: ChatSettingsType[k], C: Character) => ChatSettingsType[k] }}
 * @namespace
 */
declare var PreferenceChatSettingsValidate: { [k in keyof Required<ChatSettingsType>]: (arg: ChatSettingsType[k], C: Character) => ChatSettingsType[k]; };
/**
 * Namespace with default values for {@link VisualSettingsType} properties.
 * @type {VisualSettingsType}
 * @namespace
 */
declare var PreferenceVisualSettingsDefault: VisualSettingsType;
/**
 * Namespace with functions for validating {@link VisualSettingsType} properties
 * @type {{ [k in keyof Required<VisualSettingsType>]: (arg: VisualSettingsType[k], C: Character) => VisualSettingsType[k] }}
 * @namespace
 */
declare var PreferenceVisualSettingsValidate: { [k in keyof Required<VisualSettingsType>]: (arg: VisualSettingsType[k], C: Character) => VisualSettingsType[k]; };
/**
 * Namespace with default values for {@link AudioSettingsType} properties.
 * @type {Required<AudioSettingsType>}
 * @namespace
 */
declare var PreferenceAudioSettingsDefault: Required<AudioSettingsType>;
/**
 * Namespace with functions for validating {@link AudioSettingsType} properties
 * @type {{ [k in keyof Required<AudioSettingsType>]: (arg: AudioSettingsType[k], C: Character) => AudioSettingsType[k] }}
 * @namespace
 */
declare var PreferenceAudioSettingsValidate: { [k in keyof Required<AudioSettingsType>]: (arg: AudioSettingsType[k], C: Character) => AudioSettingsType[k]; };
/**
 * Namespace with default values for {@link ControllerSettingsType} properties.
 * @type {Required<ControllerSettingsType>}
 * @namespace
 */
declare var PreferenceControllerSettingsDefault: Required<ControllerSettingsType>;
/**
 * Namespace with functions for validating {@link ControllerSettingsType} properties
 * @type {{ [k in keyof Required<ControllerSettingsType>]: (arg: ControllerSettingsType[k], C: Character) => ControllerSettingsType[k] }}
 * @namespace
 */
declare var PreferenceControllerSettingsValidate: { [k in keyof Required<ControllerSettingsType>]: (arg: ControllerSettingsType[k], C: Character) => ControllerSettingsType[k]; };
/**
 * Namespace with default values for {@link GameplaySettingsType} properties.
 * @type {Required<GameplaySettingsType>}
 * @namespace
 */
declare var PreferenceGameplaySettingsDefault: Required<GameplaySettingsType>;
/**
 * Namespace with functions for validating {@link GameplaySettingsType} properties
 * @type {{ [k in keyof Required<GameplaySettingsType>]: (arg: GameplaySettingsType[k], C: Character) => GameplaySettingsType[k] }}
 * @namespace
 */
declare var PreferenceGameplaySettingsValidate: { [k in keyof Required<GameplaySettingsType>]: (arg: GameplaySettingsType[k], C: Character) => GameplaySettingsType[k]; };
/**
 * Namespace with default values for {@link ImmersionSettingsType} properties.
 * @type {Required<ImmersionSettingsType>}
 * @namespace
 */
declare var PreferenceImmersionSettingsDefault: Required<ImmersionSettingsType>;
/**
 * Namespace with functions for validating {@link ImmersionSettingsType} properties
 * @type {{ [k in keyof Required<ImmersionSettingsType>]: (arg: ImmersionSettingsType[k], C: Character) => ImmersionSettingsType[k] }}
 * @namespace
 */
declare var PreferenceImmersionSettingsValidate: { [k in keyof Required<ImmersionSettingsType>]: (arg: ImmersionSettingsType[k], C: Character) => ImmersionSettingsType[k]; };
/**
 * Namespace with default values for {@link RestrictionSettingsType} properties.
 * @type {Required<RestrictionSettingsType>}
 * @namespace
 */
declare var PreferenceRestrictionSettingsDefault: Required<RestrictionSettingsType>;
/**
 * Namespace with functions for validating {@link RestrictionSettingsType} properties
 * @type {{ [k in keyof Required<RestrictionSettingsType>]: (arg: RestrictionSettingsType[k], C: Character) => RestrictionSettingsType[k] }}
 * @namespace
 */
declare var PreferenceRestrictionSettingsValidate: { [k in keyof Required<RestrictionSettingsType>]: (arg: RestrictionSettingsType[k], C: Character) => RestrictionSettingsType[k]; };
/**
 * Namespace with default values for {@link PlayerOnlineSettings} properties.
 * @type {Required<PlayerOnlineSettings>}
 * @namespace
 */
declare var PreferenceOnlineSettingsDefault: Required<PlayerOnlineSettings>;
/**
 * Namespace with functions for validating {@link PlayerOnlineSettings} properties
 * @type {{ [k in keyof Required<PlayerOnlineSettings>]: (arg: PlayerOnlineSettings[k], C: Character) => PlayerOnlineSettings[k] }}
 * @namespace
 */
declare var PreferenceOnlineSettingsValidate: { [k in keyof Required<PlayerOnlineSettings>]: (arg: PlayerOnlineSettings[k], C: Character) => PlayerOnlineSettings[k]; };
/**
 * Namespace with default values for {@link GraphicsSettingsType} properties.
 * @type {Required<GraphicsSettingsType>}
 * @namespace
 */
declare var PreferenceGraphicsSettingsDefault: Required<GraphicsSettingsType>;
/**
 * Namespace with functions for validating {@link GraphicsSettingsType} properties
 * @type {{ [k in keyof Required<GraphicsSettingsType>]: (arg: GraphicsSettingsType[k], C: Character) => GraphicsSettingsType[k] }}
 * @namespace
 */
declare var PreferenceGraphicsSettingsValidate: { [k in keyof Required<GraphicsSettingsType>]: (arg: GraphicsSettingsType[k], C: Character) => GraphicsSettingsType[k]; };
/**
 * Namespace with default values for {@link GenderSettingsType} properties.
 * @type {Required<GenderSettingsType>}
 * @namespace
 */
declare var PreferenceGenderSettingsDefault: Required<GenderSettingsType>;
/**
 * Namespace with functions for validating {@link GenderSettingsType} properties
 * @type {{ [k in keyof Required<GenderSettingsType>]: (arg: GenderSettingsType[k], C: Character) => GenderSettingsType[k] }}
 * @namespace
 */
declare var PreferenceGenderSettingsValidate: { [k in keyof Required<GenderSettingsType>]: (arg: GenderSettingsType[k], C: Character) => GenderSettingsType[k]; };
/**
 * Namespace with default values for {@link NotificationSettingsType} properties.
 * @type {Required<NotificationSettingsType>}
 * @namespace
 */
declare var PreferenceNotificationSettingsDefault: Required<NotificationSettingsType>;
/**
 * Namespace with functions for validating {@link NotificationSettingsType} properties
 * @type {{ [k in keyof Required<NotificationSettingsType>]: (arg: Partial<NotificationSettingsType[k]>, C: Character) => NotificationSettingsType[k] }}
 * @namespace
 */
declare var PreferenceNotificationSettingsValidate: { [k in keyof Required<NotificationSettingsType>]: (arg: Partial<NotificationSettingsType[k]>, C: Character) => NotificationSettingsType[k]; };
