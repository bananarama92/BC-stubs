interface ICommand {
  /** Name of the command */
  Tag: string;
  /** Description of the command */
  Description?: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;
  /** Reference to another command, used for aliases */
  Reference?: string;
  /** The function that handles the command */
  Action?: (this: ICommand[], argumentsString: string, message: string, arguments: string[]) => void;
  /** Function that returns whether the command can be executed */
  Prerequisite?: (this: ICommand) => boolean;
  /** Function to execute on autocomplete key (Tab default) press if chat input matches tag */
  AutoComplete?: (this: ICommand, arguments: string[], lowercaseMessage: string, message: string) => void;
  /** Whether chat input should be cleared after execution of command. True if omitted */
  Clear?: false;
  /** Whether the case of the command should be preserved. False if omitted */
  PreserveCase?: boolean;
  /** Array of commands that can be used as subcommands. */
  Subcommands?: Thunk<Subcommand[]>;
  /**
   * Array of arguments that the command accepts.
   * Can be a function to generate arguments at runtime.
   * Typically used to provide additional context for users
   */
  Arguments?: ArgumentDef[];
}

type ArgumentDef = {
	// FIXME: Make id required after some time
	/** Unique identifier */
	id?: string;
	/** Name of the argument */
  name?: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;
	/** Description of the argument */
  description?: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>;
	/** Thunk that returns suggestions for the argument */
  suggestions?: Thunk<string[], [CommandSuggestionsContext]>;
};
type Subcommand = Omit<ICommand, 'Subcommands' | 'AutoComplete'>;

/** A command or subcommand definition */
type CommandLike = ICommand | Subcommand;

/** Command properties that can be inherited through {@link Reference} aliases */
type CommandResolvableKey = Exclude<keyof ICommand, "Tag" | "Reference">;

/** Resolved value type for a given inheritable command property */
type CommandResolvedValue<K extends CommandResolvableKey> = ICommand[K];

type CommandSuggestionsContext = {
  /** Root command definition */
  command: ICommand;
  /** Selected subcommand, if any */
  subcommand?: Subcommand;
  /** Command or subcommand whose arguments are being completed */
  active: ICommand | Subcommand;
  /** Parsed argument values keyed by argument name, or id when name is absent */
  args: Record<string, string | undefined>;
  /** Index of the argument currently being completed */
  argIndex: number;
  /** Unparsed argument tokens after the command/subcommand */
  remaining: string[];
};

type CommandHelpOptions = {
  doShowEscapeHint?: boolean;
  setCommand?: string;
  publish?: boolean;
  remaining?: string[];
  command?: ICommand;
  subcommand?: Subcommand;
};

type CommandsModListStatus = "ok" | "declined" | "error" | "timeout";
type CommandsModListResult = { status: CommandsModListStatus; mods?: ModSDKModInfo[] };
type CommandsModListRequest = {
	requestId: string;
	pending: Set<number>;
	timeoutId: number;
	rootEl: HTMLDivElement;
	results: Map<number, CommandsModListResult>;
	total: number;
	finalized: boolean;
};
