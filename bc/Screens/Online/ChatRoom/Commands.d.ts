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
 * @param {ICommand} cmd
 * @param {{ arguments?: ArgumentDef['suggestions'], subcommands?: Subcommand[] }} options - list of commands
 * @param {number} [timeout] - total time to display the help message in ms
 */
declare function CommandPrintHelpForSubcommandsArguments(cmd: ICommand, options: {
    arguments?: ArgumentDef["suggestions"];
    subcommands?: Subcommand[];
}, timeout?: number): void;
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
 *
 * @param {ICommand} cmd
 * @returns {ICommand | undefined}
 */
declare function CommandResolveReference(cmd: ICommand): ICommand | undefined;
/**
 *
 * @param {ICommand} cmd
 * @param {string[]} remaining
 * @param {string[]} parts
 * @param {{setCommand?: string}} [options]
 * @returns {boolean} if completion was handled
 */
declare function CommandHandleSubcommandCompletion(cmd: ICommand, remaining: string[], parts: string[], options?: {
    setCommand?: string;
}): boolean;
/**
 *
 * @param {ICommand | Subcommand} cmd
 * @param {string[]} remaining
 * @param {string[]} parts
 * @param {{setCommand?: string}} [options]
 * @returns {boolean | 'complete'} if completion was handled
 */
declare function CommandHandleArgumentCompletion(cmd: ICommand | Subcommand, remaining: string[], parts: string[], options?: {
    setCommand?: string;
}): boolean | "complete";
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
/** @type {ICommand[]} */
declare var Commands: ICommand[];
/** @readonly */
declare let CommandsKey: string;
/** @type {TextCache} */
declare let CommandText: TextCache;
declare namespace CommandsHelp {
    /**
     * @private
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
     * @returns {string}
     */
    function _GetDescription(command: ICommand): string;
    /**
     * @param {string | Partial<Record<ServerChatRoomLanguage | "TW", string>>} arg
     * @returns {string}
     */
    function _GetArgumentTranslated(arg: string | Partial<Record<ServerChatRoomLanguage | "TW", string>>): string;
    /**
    * @param {ICommand} command
    * @param {string} setCommand
    * @param {boolean} singleCommand
    * @returns {HTMLOptions<keyof HTMLElementTagNameMap>}
    */
    function _BuildCommand(command: ICommand, setCommand: string, singleCommand: boolean): HTMLOptions<keyof HTMLElementTagNameMap>;
    /**
     * @param {ICommand[]} commands
     * @param {{ setCommand?: string}} [options]
     * @returns
     */
    function _BuildHelp(commands: ICommand[], { setCommand }?: {
        setCommand?: string;
    }): HTMLDivElement;
    /**
     * Prints out the help for commands
     * @param {Optional<ICommand, 'Action'>[]} commands - list of commands
     * @param {{ doShowEscapeHint?: boolean, setCommand?: string, publish?: boolean }} [options] - if message about message escaping should be shown
     */
    function ShowFor(commands: Optional<ICommand, "Action">[], options?: {
        doShowEscapeHint?: boolean;
        setCommand?: string;
        publish?: boolean;
    }): HTMLDivElement;
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
        id?: null | string;
        href?: null | string;
        startID?: null | string;
        stopID?: null | string;
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
        id?: null | string;
        href?: null | string;
        startID?: null | string;
        stopID?: null | string;
    }): HTMLDivElement;
}
