declare var ChatAdminRoomCustomizationBackground: string;
/** @type {null | ServerChatRoomCustomData} */
declare var ChatAdminRoomCustomizationCurrent: null | ServerChatRoomCustomData;
/** @type {null | HTMLAudioElement} */
declare var ChatAdminRoomCustomizationAudio: null | HTMLAudioElement;
declare const ChatAdminRoomCustomizationImageFormats: string[];
declare var ChatAdminRoomCustomizationMusicLibrary: {
    Name: string;
    URL: string;
    Source: string;
}[];
declare const ChatAdminRoomCustomizationIDs: Readonly<{
    subscreen: "chatroom-admin-subscreen";
    title: "chatroom-admin-subscreen-hgroup";
    main: "chatroom-admin-subscreen-main";
    grid: "chatroom-admin-subscreen-grid";
    cancelButton: "chatroom-admin-subscreen-cancel";
    clearButton: "chatroom-admin-subscreen-clear";
    saveButton: "chatroom-admin-subscreen-save";
    imageURLInput: "InputImageURL";
    filterPicker: "room-custom-filter-picker";
    filterLabel: "room-custom-filter-label";
    imageFillModeSelect: "SelectImageFillMode";
    musicURLInput: "InputMusicURL";
    musicPlayButton: "room-custom-music-play";
    musicSyncCheckbox: "InputMusicSync";
    openLibraryButton: "OpenLibraryButton";
    library: "room-custom-library";
    libraryReturn: "room-custom-library-return";
    stage: "room-custom-stage";
    previewFrame: "room-custom-preview-frame";
    previewImage: "room-custom-preview-image";
    previewFilter: "room-custom-preview-filter";
}>;
/** @type {Readonly<Record<number, "fill" | "cover" | "contain">>} */
declare const ChatAdminRoomCustomizationSizeFit: Readonly<Record<number, "fill" | "cover" | "contain">>;
/**
 * Loads the chat Admin Custom screen properties and creates the inputs
 * @type {ScreenLoadHandler}
 */
declare function ChatAdminRoomCustomizationLoad(): Promise<void>;
/**
 * Required screen tick.
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationRun(): void;
/**
 * Handles the click events on the admin custom screen. Is called from CommonClick()
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationClick(): void;
/**
 * Handles exiting from the admin custom screen, removes the inputs
 * @type {ScreenExitHandler}
 */
declare function ChatAdminRoomCustomizationExit(): void;
declare function ChatAdminRoomCustomizationResize(): void;
declare function ChatAdminRoomCustomizationUnload(): void;
/**
 * Color picker state for a background filter. An empty filter starts fully transparent.
 * @param {string | undefined} value
 * @returns {NonNullable<ColorPickerInitOptions["colorState"]>}
 */
declare function ChatAdminRoomCustomizationFilterState(value: string | undefined): NonNullable<ColorPickerInitOptions["colorState"]>;
/**
 * Opens the color picker for the background filter. Accept writes the chosen color back onto the form.
 * @returns {void}
 */
declare function ChatAdminRoomCustomizationOpenFilterPicker(): void;
/**
 * Builds a background filter hex from a color picker result. Fully transparent values count as no filter.
 * @param {ItemColorExitState} state
 * @returns {string}
 */
declare function ChatAdminRoomCustomizationFilterFromState(state: ItemColorExitState): string;
/**
 * Updates the image preview and selected library track from the current form data.
 */
declare function ChatAdminRoomCustomizationRefreshPreview(): void;
/**
 * Matches the play button icon, label, and disabled state to the preview audio.
 */
declare function ChatAdminRoomCustomizationSyncPlayButton(): void;
/**
 * Stops music preview.
 */
declare function ChatAdminRoomCustomizationStopMusic(): void;
/**
 * Starts preview playback. An aborted play is ignored when this preview is no longer the active one.
 * @param {HTMLAudioElement} player
 * @param {string} url
 */
declare function ChatAdminRoomCustomizationPlayPreview(player: HTMLAudioElement, url: string): void;
/**
 * Plays or pauses the music URL currently entered on the form.
 */
declare function ChatAdminRoomCustomizationToggleMusic(): void;
/**
 * Keeps preview playback aligned with the music field.
 * An empty field stops preview. Picking a library track while preview is playing switches to that track.
 */
declare function ChatAdminRoomCustomizationUpdateMusicPreview(): void;
/**
 * Shows or hides the in-screen music library.
 * @param {boolean} open
 */
declare function ChatAdminRoomCustomizationSetLibraryOpen(open: boolean): void;
/**
 * Checks whether the player is allowed to change customization settings
 * @returns {boolean} - true if the player is allowed to change customization settings, false otherwise
 */
declare function ChatAdminRoomCustomizationCanEdit(): boolean;
/**
 * Reconfigures the chat room's customisation
 * @param {string[]} args - The value to set in that property
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationCommand(args: string[]): void;
/**
 * Runs the customization on the current screen, can be called from elsewhere
 * @deprecated DrawProcess knows how to handle custom backgrounds, and the music support is highly specific
 * @param {ServerChatRoomCustomData | null} Custom - The customization to apply
 * @param {Rect | null} DrawBGToRect - If non-null draw the background to these coordinates. Online chat rooms will use the tracked values elsewhere
 * @param {boolean} DrawBGEffects - If true and drawing a background then apply blur/dark/tint
 * @returns {void} - Nothing
 */
declare function ChatAdminRoomCustomizationProcess(Custom: ServerChatRoomCustomData | null, DrawBGToRect: Rect | null, DrawBGEffects: boolean): void;
