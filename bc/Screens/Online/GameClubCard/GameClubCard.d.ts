/**
 * Gets the current state of online Club Card.
 * @returns {OnlineGameStatus}
 */
declare function GameClubCardGetStatus(): OnlineGameStatus;
/**
 * Set the current state of online Club Card.
 * @param {OnlineGameStatus} NewStatus
 * @returns {void}
 */
declare function GameClubCardSetStatus(NewStatus: OnlineGameStatus): void;
/**
 * Checks if the character is an admin for the room/game.
 * @param {Character} C - Character to check for
 * @returns {boolean} -  Returns TRUE if that character is an admin/the game administrator
 */
declare function GameClubCardIsAdmin(C: Character): boolean;
/**
 * Draws the Club Card icon of a character
 * @param {Character} C - Character for which to draw the icons
 * @param {number} X - Position on the X axis of the canvas
 * @param {number} Y - Position on the Y axis of the canvas
 * @param {number} Zoom - Zoom factor of the character
 * @returns {void} - Nothing
 */
declare function GameClubCardDrawIcon(C: Character, X: number, Y: number, Zoom: number): void;
/**
 * Draws the online game images/text needed on the characters
 * @param {Character} C - Character to draw the info for
 * @param {number} X - Position of the character the X axis
 * @param {number} Y - Position of the character the Y axis
 * @param {number} Zoom - Amount of zoom the character has (Height)
 * @returns {void} - Nothing
 */
declare function GameClubCardDrawCharacter(C: Character, X: number, Y: number, Zoom: number): void;
declare function GameClubCardLoad(): Promise<void>;
/**
 * Runs the online Club Card configuration screen
 * @returns {void} - Nothing
 */
declare function GameClubCardRun(): void;
/**
 * Handles clicks in the online Club Card configuration screen
 * @returns {void} - Nothing
 */
declare function GameClubCardClick(): void;
declare function GameClubCardExit(): void;
/**
 *  Checks there's 1 player in slot 1 and slot 2 so we can start the game.
 * @returns {boolean} - Returns TRUE if the game can be launched
 */
declare function GameClubCardCanLaunchGame(): boolean;
/**
 * Returns TRUE if the game is running and can be joined
 * @returns {boolean} - TRUE if the player can join
 */
declare function GameClubCardCanJoinGame(): boolean;
/**
 * Resets the online Club Card game so a new game might be started
 * @returns {void} - Nothing
 */
declare function GameClubCardReset(): void;
/**
 * Ensure all character's Club Card game status are the same
 * @returns {void} - Nothing
 */
declare function GameClubCardLoadStatus(): void;
/**
 * Creates a bundle of cards in a string to push to the server.
 * @param {readonly ClubCard[]} Cards - An array of c
 * @param {boolean} IncludeTime - If we must include the time property
 * @returns {string} - A string with all the cards
 */
declare function GameClubCardDoBundle(Cards: readonly ClubCard[], IncludeTime?: boolean): string;
/**
 * Creates a bundle of cards in a string to push to the server.
 * @param {readonly ClubCard[]} Cards - An array of ClubCard objects
 * @returns {string} - A string with all the cards
 */
declare function GameClubCardBoardDoBundle(Cards: readonly ClubCard[]): string;
/**
 * Creates a bundle of cards in a string to push to the server.
 * @param {readonly ClubCard[]} Cards - An array of ClubCard objects
 * @returns {string} - A string with all the cards
 */
declare function GameClubCardHandDoBundle(Cards: readonly ClubCard[]): string;
declare function GameClubCardUndoBundle(Bundle: any, IncludeTime?: boolean, Location?: null): any[];
/**
 * Parses a string to return an updated array of ClubCard objects.
 * @param {string} bundle - A string containing all the cards
 * @param {string} Location - The location of the card
 * @returns {ClubCard[]} - An array of updated ClubCard objects
 */
declare function GameClubCardBoardUndoBundle(bundle: string, Location: string): ClubCard[];
declare function GameClubCardHandUndoBundle(Bundle: any, Location?: null): any[];
/**
 * Loads the full server bundle for a player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {any} Bundle - An array of c
 * @returns {void} - Nothing
 */
declare function GameClubCardLoadBundle(CCPlayer: ClubCardPlayer, Bundle: any): void;
/**
 * Assigns both club card players based on the players selection
 * @param {ServerGameClubCardDataStart | ServerGameClubCardDataQueryResponse} data - The data packet to process
 * @param {number} rng
 * @param {Character} Char - The character that's sending the packet
 * @returns {void} - Nothing
 */
declare function GameClubCardAssignPlayers(data: ServerGameClubCardDataStart | ServerGameClubCardDataQueryResponse, rng: number, Char: Character): void;
/**
 * Loads the club card game data
 * @param {ServerGameClubCardDataQueryResponse | ServerGameClubCardDataAction} data - The data packet to process
 * @returns {void} - Nothing
 */
declare function GameClubCardLoadData(data: ServerGameClubCardDataQueryResponse | ServerGameClubCardDataAction): void;
/**
 *
 * @param {unknown} data
 * @returns {data is ServerGameClubCardDataStart}
 */
declare function ClubCardIsStartPacket(data: unknown): data is ServerGameClubCardDataStart;
/**
 * @param {unknown} data
 * @returns {data is ServerGameClubCardDataQueryRequest}
 */
declare function ClubCardIsQueryRequestPacket(data: unknown): data is ServerGameClubCardDataQueryRequest;
/**
 *
 * @param {unknown} data
 * @returns {data is ServerGameClubCardDataQueryResponse}
 */
declare function ClubCardIsQueryResponsePacket(data: unknown): data is ServerGameClubCardDataQueryResponse;
/**
 *
 * @param {unknown} data
 * @returns {data is ServerGameClubCardDataAction}
 */
declare function ClubCardIsActionPacket(data: unknown): data is ServerGameClubCardDataAction;
/**
 * Processes the club card game data received from the server
 * @param {number} senderNumber
 * @param {number} rng
 * @param {unknown} data - The data packet to process
 * @returns {Promise<void>} - Nothing
 */
declare function GameClubCardProcess(senderNumber: number, rng: number, data: unknown): Promise<void>;
/**
 * Syncs the online data with all players
 * @param {string} Progress - The progress status to push (default to action)
 * @param {boolean} LocalPlayerOnly - If true, send only the local player. Otherwise, send both.
 * @returns {void} - Nothing
 */
declare function GameClubCardSyncOnlineData(Progress?: string, LocalPlayerOnly?: boolean): void;
/**
 * When the game ends, we go back to the online chat room
 * @returns {void} - Nothing
 */
declare function GameClubCardEnd(): void;
declare var GameClubCardBackground: string;
declare var GameClubCardEntryPlayerSlot: number;
declare var GameClubCardExpectQuery: boolean;
declare var GameClubCardQueryAdmin: boolean;
declare var GameClubCardChangedRunningSettings: boolean;
