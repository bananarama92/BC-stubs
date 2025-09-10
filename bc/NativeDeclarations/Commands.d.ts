interface ICommand {
  /** Name of the command */
  Tag: string;
  /** Description of the command */
  Description?: string | Record<ServerChatRoomLanguage | "TW", string>;
  /** Reference to another command, used for aliases */
  Reference?: string;
  /** The function that handles the command */
  Action?: (this: Optional<ICommand, 'Tag'>, argumentsString: string, message: string, arguments: string[]) => void;
  /** Function that returns whether the command can be executed */
  Prerequisite?: (this: Optional<ICommand, 'Tag'>) => boolean;
  /** Function to execute on autocomplete key (Tab default) press if chat input matches tag */
  AutoComplete?: (this: Optional<ICommand, 'Tag'>, arguments: string[], lowercaseMessage: string, message: string) => void;
  /** Whether chat input should be cleared after execution of command. True if omitted */
  Clear?: false;
  /** Whether the case of the command should be preserved. False if omitted */
  PreserveCase?: boolean;
  /** Array of commands that can be used as subcommands. */
  Subcommands?: Subcommand[];
  /** 
   * Array of arguments that the command accepts. 
   * Can be a function to generate arguments at runtime.
   * Typically used to provide additional context for users
   */
  Arguments?: ArgumentDef[];
}

type ArgumentDef = {
  name: string;
  description: string;
  suggestions?: string[] | (() => string[]);
};
type Subcommand = Omit<ICommand, 'Subcommands' | 'AutoComplete'>;
