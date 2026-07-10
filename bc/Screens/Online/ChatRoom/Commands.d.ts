/**
 * Loads the commands for the Player
 * @returns {void} - Nothing
 */
declare function CommandsLoad(): void;
/**
 * Translates the help for commands
 * @returns {void} - Nothing
 */
declare function CommandsTranslate(): void;
/**
 * Gets all available commands
 * @returns [ICommand[]]
 */
declare function GetCommands(): ICommand[];
/**
 * Fill the user input with the command
 * @param {string} command
 * @returns {void} - Nothing
 */
declare function CommandSet(command: string): void;
/**
 * Add a list of commands
 * @param {ICommand | ICommand[]} add - Commands to add
 * @returns {void} - Nothing
 */
declare function CommandCombine(add: ICommand | ICommand[]): void;
/**
 * Parse the input chat message
 * @param {string} msg - Input string, cannot be empty
 * @returns {string | boolean} a (de-escaped) string if msg looks like an normal message,
 * true if a command successfully executed, false otherwise.
 */
declare function CommandParse(msg: string): string | boolean;
/**
 * Prints out the help for commands with tags that include `low`
 * @deprecated
 * @param {string} low - lower case search keyword for tags
 * @param {number} [timeout] - total time to display the help message in ms
 * @returns {void} - Nothing
 */
declare function CommandHelp(low: string, timeout?: number): void;
/**
 * Prints out the help for commands
 * @deprecated
 * @param {Optional<ICommand, 'Action'>[]} commands - list of commands
 * @param {number} [timeout] - total time to display the help message in ms
 * @param {boolean} [doShowEscapeHint] - if message about message escaping should be shown
 */
declare function CommandPrintHelpFor(commands: Optional<ICommand, "Action">[], timeout?: number, doShowEscapeHint?: boolean): void;
/**
 * Prints out the help for commands
 * @deprecated
 * @param {ICommand} cmd
 * @param {Pick<CommandHelpOptions, "remaining" | "subcommand">} [options]
 * @param {number} [timeout] - total time to display the help message in ms
 */
declare function CommandPrintHelpForSubcommandsArguments(cmd: ICommand, options?: Pick<CommandHelpOptions, "remaining" | "subcommand">, timeout?: number): void;
/**
 * Finds command and executes it from the message
 * @param {string} msg - User input
 * @returns {boolean} - true if a command was executed, false otherwise
 */
declare function CommandExecute(msg: string): boolean;
/**
 * Tries to complete the message to a command or print help about it
 * @param {string} msg - InputChat content
 * @returns {boolean} - If the message was a command
 */
declare function CommandAutoComplete(msg: string): boolean;
/**
 *
 * @param {ICommand[]} candidates
 * @param {string} key
 */
declare function CommandHandleMultipleCandidates(candidates: ICommand[], key: string): void;
/**
 *
 * @param {ICommand} initialCmd
 * @param {string[]} forward
 * @param {string[]} parts
 * @param {string} low
 * @param {string} msg
 * @returns
 */
declare function CommandHandleSingleCandidate(initialCmd: ICommand, forward: string[], parts: string[], low: string, msg: string): void | HTMLDivElement;
/**
 * Returns the first defined value for a command property, following Reference aliases
 * @template {CommandResolvableKey} K
 * @param {CommandLike} cmd
 * @param {K} property
 * @returns {CommandResolvedValue<K> | undefined}
 */
declare function CommandResolveProperty<K extends CommandResolvableKey>(cmd: CommandLike, property: K): CommandResolvedValue<K> | undefined;
/**
 * Returns the final command definition after following Reference aliases
 * @param {CommandLike} cmd
 * @returns {CommandLike}
 */
declare function CommandResolveReference(cmd: CommandLike): CommandLike;
/**
 *
 * @param {ICommand} cmd
 * @param {string[]} remaining
 * @param {string[]} parts
 * @param {{setCommand?: string} & Pick<CommandHelpOptions, "command" | "subcommand" | "remaining">} [options]
 * @returns {boolean} if completion was handled
 */
declare function CommandHandleSubcommandCompletion(cmd: ICommand, remaining: string[], parts: string[], options?: {
    setCommand?: string;
} & Pick<CommandHelpOptions, "command" | "subcommand" | "remaining">): boolean;
/**
 *
 * @param {ICommand | Subcommand} cmd
 * @param {string[]} remaining
 * @param {string[]} parts
 * @param {{setCommand?: string} & Pick<CommandHelpOptions, "command" | "subcommand">} [options]
 * @returns {boolean | 'complete'} if completion was handled
 */
declare function CommandHandleArgumentCompletion(cmd: ICommand | Subcommand, remaining: string[], parts: string[], options?: {
    setCommand?: string;
} & Pick<CommandHelpOptions, "command" | "subcommand">): boolean | "complete";
/**
 *
 * @param {string} setCommand
 * @param {string[]} remaining
 * @param {number} argumentDepth
 * @param {string} completion
 * @param {boolean} completed
 */
declare function CommandCompleteCommand(setCommand: string, remaining: string[], argumentDepth: number, completion: string, completed?: boolean): void;
/**
 *
 * @param {string} msg
 */
declare function CommandChangeChatInputContent(msg: string): void;
/**
 * Returns the caret position of the chat input or -1 if user selected text or if there is no input
 * @returns {number}
 */
declare function CommandGetChatRoomCaretPosition(): number;
/**
 * @param {ArgumentDef} arg
 * @returns {string}
 */
declare function CommandGetArgumentKey(arg: ArgumentDef): string;
/**
 * @param {string} msg
 * @param {string} setCommand
 * @returns {string[]}
 */
declare function CommandGetRemainingArguments(msg: string, setCommand: string): string[];
/**
 * @param {{
 *   command: ICommand,
 *   subcommand?: Subcommand,
 *   active: ICommand | Subcommand,
 *   remaining: string[],
 *   argIndex: number,
 * }} options
 * @returns {CommandSuggestionsContext}
 */
declare function CommandBuildSuggestionsContext(options: {
    command: ICommand;
    subcommand?: Subcommand;
    active: ICommand | Subcommand;
    remaining: string[];
    argIndex: number;
}): CommandSuggestionsContext;
/** @type {ICommand[]} */
declare var Commands: ICommand[];
/** @readonly */
declare let CommandsKey: string;
/** @type {TextCache} */
declare let CommandText: TextCache;
declare namespace CommandsHelp {
    /**
     * private
     * @param {HTMLElement} help
     */
    function _Publish(help: HTMLElement): void;
    function _BuildDelete(id: any): HTMLButtonElement;
    /**
     *
     * @param {string} id
     * @param {boolean} expanded
     * @returns
     */
    function _BuildToggle(id: string, expanded: boolean): HTMLButtonElement;
    /**
     *
     * @param {ICommand} command
     * @param {string} [translationTag]
     * @returns {string}
     */
    function _GetDescription(command: ICommand, translationTag?: string): string;
    /**
     * @param {ArgumentDef} arg
     * @param {string} translationTag
     * @param {"name" | "desc"} type
     * @returns {string}
     */
    function _GetArgumentTranslated(arg: ArgumentDef, translationTag?: string, type?: "name" | "desc"): string;
    /**
    * @param {ICommand} command
    * @param {string} setCommand
    * @param {boolean} singleCommand
    * @param {Pick<CommandHelpOptions, "remaining" | "command" | "subcommand">} [options]
    * @returns {HTMLOptionsUnion}
    */
    function _BuildCommand(command: ICommand, setCommand: string, singleCommand: boolean, options?: Pick<CommandHelpOptions, "remaining" | "command" | "subcommand">): HTMLOptionsUnion;
    /**
     * @param {ICommand[]} commands
     * @param {CommandHelpOptions} [options]
     * @returns
     */
    function _BuildHelp(commands: ICommand[], { setCommand, remaining, command, subcommand }?: CommandHelpOptions): HTMLDivElement;
    /**
     * Prints out the help for commands
     * @param {Optional<ICommand, 'Action'>[]} commands - list of commands
     * @param {CommandHelpOptions} [options] - if message about message escaping should be shown
     */
    function ShowFor(commands: Optional<ICommand, "Action">[], options?: CommandHelpOptions): HTMLDivElement;
    /**
     * Prints out the help for commands with tags that include `low`
     * @param {string} low - lower case search keyword for tags
     * @returns {void} - Nothing
     */
    function ShowForPartial(low: string): void;
    function Complete(): void;
}
declare namespace CommandsChangelog {
    /**
     * Iterate through the passed changelog element and remove all (redundant) elements outside the `[startID, stopID)` interval.
     * @param {Element} root - The changelog-containing element
     * @param {string} startID - The ID of the element representing the interval's start
     * @param {string | null} stopID - The ID of the element representing the interval's end.
     * If not provided, use the first element matching the tag name of the `startID` element instead.
     */
    function _FilterContent(root: Element, startID: string, stopID?: string | null): void;
    /**
     * Construct a button for all `h1` buttons for deleting the changelog in question.
     * @param {string} id
     * @param {HTMLHeadingElement} header
     * @param {number} level
     * @returns {HTMLButtonElement}
     */
    function _GetH1Button(id: string, header: HTMLHeadingElement, level: number): HTMLButtonElement;
    /**
     * Construct a button for all `hn` buttons (with `n > 1`) for collapsing their respective section sibblings.
     * @param {string} id
     * @param {HTMLHeadingElement} header
     * @param {number} level
     * @returns {HTMLButtonElement}
     */
    function _GetHNButton(id: string, header: HTMLHeadingElement, level: number): HTMLButtonElement;
    /**
     * Ensure that all elements at the passed header level get a companion button, and ensure they and their respective contents are nested together in a `<section>`.
     * @param {Element} root
     * @param {string} id
     * @param {string} href
     * @param {number} headerLevel
     * @param {null | string} headerPrefix
     */
    function _ParseHeader(root: Element, id: string, href: string, headerLevel: number, headerPrefix?: null | string): void;
    /**
     * Ensure that all `<img>` elements can be clicked, opening their image in a new tab.
     * @param {Element} root
     */
    function _ParseImg(root: Element): void;
    /**
     * Ensure that all `<a>` elements open their links in a new tab.
     * @param {Element} root
     */
    function _ParseA(root: Element): void;
    function _SetTranslationText(changelog: Element): Promise<void>;
    /**
     * Construct a changelog from the passed stringified HTML (constructed via _e.g._ the [marked](https://www.npmjs.com/package/marked) package).
     *
     * The stringified HTML is expected to have the following structure:
     * * A single `<h1>` element _may_ be present in order to represent a general changelog title
     * * Version-specific sections of the changelog _must_ be represented by `<h2>` elements and _may_ contain an arbitrary number of sub-headers
     * * Headers and their sections _must not_ be grouped together inside an element; an overal flat structure is expected
     * @param {string} innerHTML - The inner html representing containing a superset of the changelog's final content
     * @param {Object} [options]
     * @param {null | string} [options.id] - The (root) ID of the to-be created changelog; defaults to `chat-room-changelog`
     * @param {null | string} [options.href] - The URL leading to the (external) changelog; defaults to `./changelog.html`
     * @param {null | string} [options.startID] - The header ID of the first to-be included segment within the changelog; defaults to the latest BC version (`r[0-9]{3}`)
     * @param {null | string} [options.stopID] - The header ID of the final to-be included segment within the changelog; defaults to `options.startID` if unspecified
     * @returns {HTMLDivElement} - The newly created changelog
     */
    function Parse(innerHTML: string, options?: {
        id?: string | null | undefined;
        href?: string | null | undefined;
        startID?: string | null | undefined;
        stopID?: string | null | undefined;
    }): HTMLDivElement;
    /**
     * Construct a changelog from the passed stringified HTML and publish it to the chat room chatlog.
     *
     * @param {string} innerHTML - The inner html representing containing a superset of the changelog's final content
     * @param {Object} [options]
     * @param {null | string} [options.id] - The (root) ID of the to-be created changelog; defaults to `chat-room-changelog`
     * @param {null | string} [options.href] - The URL leading to the (external) changelog; defaults to `./changelog.html`
     * @param {null | string} [options.startID] - The header ID of the first to-be included segment within the changelog; defaults to the latest BC version (`r[0-9]{3}`)
     * @param {null | string} [options.stopID] - The header ID of the final to-be included segment within the changelog; defaults to `options.startID` if unspecified
     * @returns {HTMLDivElement} - The newly created changelog
     */
    function Publish(innerHTML: string, options?: {
        id?: string | null | undefined;
        href?: string | null | undefined;
        startID?: string | null | undefined;
        stopID?: string | null | undefined;
    }): HTMLDivElement;
}
declare namespace CommandsModsList {
    let _RemoteTimeoutMs: number;
    let _ActiveRemoteRequest: null | CommandsModListRequest;
    function ShowLocal(): void;
    /**
     * @param {ServerChatRoomMessage} data
     * @param {Character} senderCharacter
     */
    function ProcessHiddenRemote(data: ServerChatRoomMessage, senderCharacter: Character): void;
    /** @param {string} argsTrimmed */
    function StartRemote(argsTrimmed: string): void;
    function _CancelActiveRemote(): void;
    function _GetLocalSorted(): ModSDKModInfo[];
    /** @param {ModSDKModInfo[]} mods @param {Character} char */
    function _FormatModListForCopy(mods: ModSDKModInfo[], char: Character): string;
    /**
     * @param {string} id
     * @param {ModSDKModInfo[]} mods
     * @param {Character} char
     */
    function _BuildCopyButton(id: string, mods: ModSDKModInfo[], char: Character): HTMLButtonElement;
    /** @param {string} id */
    function _BuildDeleteButton(id: string): HTMLButtonElement;
    /** @param {ModSDKModInfo[]} mods */
    function _BuildList(mods: ModSDKModInfo[]): HTMLUListElement;
    function _UpdateRemoteProgress(): void;
    /** @param {Map<number, CommandsModListResult>} results */
    function _BuildDetailsBody(results: Map<number, CommandsModListResult>): HTMLDivElement;
    function _FinalizeRemote(): void;
    function _OnRemoteTimeout(): void;
    /** @param {ServerChatRoomMessage} data */
    function _HandleRemoteQuery(data: ServerChatRoomMessage): void;
    /**
     * @param {ServerChatRoomMessage} data
     * @param {Character} senderCharacter
     */
    function _HandleRemoteReply(data: ServerChatRoomMessage, senderCharacter: Character): void;
}
