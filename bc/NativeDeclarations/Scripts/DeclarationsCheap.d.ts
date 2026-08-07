/**
 * BC global object types.
 *
 * Computationally cheap variants for everyday use.
 */
type ScreenFunctionsSymbols = Prettify<(
	// Backgrounds
	{ [key in `${RoomName}Background`]?: string }

	// Screen functions
	& { [key in `${RoomName}Run`]: ScreenRunHandler }
	& { [key in `${RoomName}MouseDown`]?: MouseEventListener }
	& { [key in `${RoomName}MouseUp`]?: MouseEventListener }
	& { [key in `${RoomName}MouseMove`]?: MouseEventListener }
	& { [key in `${RoomName}MouseWheel`]?: MouseWheelEventListener }
	& { [key in `${RoomName}Click`]: MouseEventListener }
	& { [key in `${RoomName}Load`]?: ScreenLoadHandler }
	& { [key in `${RoomName}Unload`]?: ScreenUnloadHandler }
	& { [key in `${RoomName}Draw`]?: ScreenDrawHandler }
	& { [key in `${RoomName}Resize`]?: ScreenResizeHandler }
	& { [key in `${RoomName}KeyDown`]?: KeyboardEventListener }
	& { [key in `${RoomName}KeyUp`]?: KeyboardEventListener }
	& { [key in `${RoomName}Paste`]?: ClipboardEventListener }
	& { [key in `${RoomName}Exit`]?: ScreenExitHandler }

	// Extended item functions (dynamically generated and assigned to `Window`)
	& { [key in `Inventory${string}Init`]?: ExtendedItemCallbacks.Init }
	& { [key in `Inventory${string}Load`]?: ExtendedItemCallbacks.Load }
	& { [key in `Inventory${string}Draw`]?: ExtendedItemCallbacks.Draw }
	& { [key in `Inventory${string}Click`]?: ExtendedItemCallbacks.Click }
	& { [key in `Inventory${string}Exit`]?: ExtendedItemCallbacks.Exit }
	& { [key in `Inventory${string}Validate`]?: ExtendedItemCallbacks.Validate }
	& { [key in `Inventory${string}PublishAction`]?: ExtendedItemCallbacks.PublishAction }
	& { [key in `Inventory${string}SetOption`]?: ExtendedItemCallbacks.SetOption }
	& { [key in `Assets${string}BeforeDraw`]?: ExtendedItemCallbacks.BeforeDraw }
	& { [key in `Assets${string}AfterDraw`]?: ExtendedItemCallbacks.AfterDraw }
	& { [key in `Assets${string}ScriptDraw`]?: ExtendedItemCallbacks.ScriptDraw }
	& { [key in `Inventory${string}NpcDialog`]?: (C: Character, Option: ExtendedItemOption, PreviousOption: ExtendedItemOption) => void }
)>;
interface Window extends ScreenFunctionsSymbols {}
