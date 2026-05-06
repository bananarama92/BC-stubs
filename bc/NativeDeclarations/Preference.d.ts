// #region Preference General

type PreferenceSubscreenName =
	"General" | "Difficulty" | "Restriction" | "Chat" | "CensoredWords" | "Audio" | "Arousal" |
	"Security" | "Online" | "Visibility" | "Immersion" | "Graphics" | "Controller" | "Notifications" |
	"Gender" | "Scripts" | "Extensions" | "Main" | "Keybindings"
	;

interface PreferenceSubscreen {
	name: PreferenceSubscreenName;
	description?: string;
	icon?: string;
	hidden?: boolean;
	load?: () => void | Promise<void>;
	run: () => void;
	click: () => void;
	exit?: () => boolean | Promise<boolean>;
	unload?: () => void;
	resize?: (onLoad: boolean) => void;
	keyUp?: (event: KeyboardEvent) => void;
}

interface PreferenceDropdownOption {
	list: string[];
	current: () => string;
	onChange: (value: string) => void;
}

interface PreferenceCheckboxOption {
	label: string;
	check: () => boolean;
	click: () => void;
}

// #endregion

// #region Chat

type ChatColorThemeType = "Light" | "Dark" | "Light2" | "Dark2";
type ChatEnterLeaveType = "Normal" | "Smaller" | "Hidden";
type ChatMemberNumbersType = "Always" | "Never" | "OnMouseover";
type ChatFontSizeType = "Small" | "Medium" | "Large";

// #endregion

// #region Graphics

type GraphicsVFXName = "VFXInactive" | "VFXSolid" | "VFXAnimatedTemp" | "VFXAnimated";
type GraphicsVFXVibratorName = "VFXVibratorInactive" | "VFXVibratorSolid" | "VFXVibratorAnimated";
type GraphicsVFXFilterName = "VFXFilterLight" | "VFXFilterMedium" | "VFXFilterHeavy" | "VFXFilterNone";
type GraphicsFontName =
	"Arial" | "TimesNewRoman" | "Papyrus" | "ComicSans" | "Impact" | "HelveticaNeue" | "Verdana" |
	"CenturyGothic" | "Georgia" | "CourierNew" | "Copperplate"
	;

// #endregion

// #region Arousal

type ArousalActiveName = "Inactive" | "NoMeter" | "Manual" | "Hybrid" | "Automatic";
type ArousalVisibleName = "All" | "Access" | "Self";
type ArousalAffectStutterName = "None" | "Arousal" | "Vibration" | "All";
/** The factor of the sexual activity (0 is horrible, 2 is normal, 4 is great) */
type ArousalFactor = 0 | 1 | 2 | 3 | 4;

interface ActivityEnjoyment {
	/** The relevant activity type */
	Name: ActivityName;
	/** The arousal factor for when the activity is performed on the player character */
	Self: ArousalFactor;
	/** The arousal factor for when the activity is performed on someone else */
	Other: ArousalFactor;
}

interface ArousalZone {
	/** The relevant zone */
	Name: AssetGroupItemName;
	/** The arousal factor associated with the zone */
	Factor: ArousalFactor;
	/** Whether one can orgasm from stimulating the zone */
	Orgasm: boolean;
}

interface ArousalFetish {
	/** The name of the fetish */
	Name: FetishName;
	/** The arousal factor associated with the fetish */
	Factor: ArousalFactor;
}

interface ArousalSettingsType {
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
}

// #endregion

// #region Immersion

type ImmersionSensDepName = "SensDepLight" | "Normal" | "SensDepNames" | "SensDepTotal" | "SensDepExtreme";

// #endregion

// #region Extensions

/** Preference menu entry for extensions settings */
interface PreferenceExtensionsSettingItem {
	/**
	 * The identifier of the extension.
	 * This is used to identify the extension and must be unique.
	 */
	Identifier: string;

	/**
	 * The label for the extension button.
	 * If it's a Function, it will be called once when entering
	 * the extension setting menu. Use the return value as button text.
	 */
	ButtonText: string | (() => string);

	/**
	 * The image path of the extension.
	 *
	 * This is passed to {@link DrawButton} directly. You can use a `data` URL here.
	 *
	 * If it's a Function, it will be called once when entering
	 * the extension setting menu. Use the return value as image
	 * path.
	 * If it's undefined, there will be no image for the button
	 */
	Image?: string | (() => string);

	/**
	 * Called when the extension screen is about to be displayed.
	 *
	 * You can create your own HTML elements in here, or load your data.
	 *
	 * Note that HTML elements with the `HideOnPopup` class will be hidden
	 * automatically when a popup is shown.
	 */
	load?: () => void;

	/**
	 * Called when a click happens on the extension screen.
	 *
	 * Note: your exit button handling *must* call {@link PreferenceSubscreenExit};
	 */
	click: () => void;

	/**
	 * Called every frame while the extension screen is shown.
	 */
	run: () => void;

	/**
	 * Called when the extension screen is about to be closed.
	 *
	 * Handles the unloading of the extension setting, usually when the user clicks the exit button,
	 * but it can also be called by the relog screen being triggered because of a disconnect.
	 *
	 * If you created any HTML elements in {@link PreferenceExtensionsSettingItem.load}, this is a good place to remove them.
	 */
	unload?: () => void;

	/**
	 * Called when the extension screen is about to exit.
	 *
	 * Happens either through a click of the exit button, or the ESC key.
	 * This will **not** be called if a disconnect happens, so clean up should be
	 * done in {@link PreferenceExtensionsSettingItem.unload}.
	 *
	 * If you have some validation that needs to happen
	 * (for example, ensuring that a textfield contains a valid color code), return false;
	 * this will stop the subscreen from exiting.
	 * You might want to show a message to the user explaining why "nothing is happening" in that case,
	 * either through your own means or by setting `PreferenceMessage` to a string.
	 *
	 * If you return true or nothing, your screen's {@link PreferenceExtensionsSettingItem.unload} handler
	 * will be called afterward. And the setting screen for the extension will be closed.
	 */
	exit: () => boolean | void;

	resize?: (onLoad: boolean) => void;
}

/** Extra button on the Extensions row in Preferences */
type PreferenceExtensionsMenuButtonInfo = {
	Button: string;
	Image?: string;
	click: () => void;
};

// #endregion
