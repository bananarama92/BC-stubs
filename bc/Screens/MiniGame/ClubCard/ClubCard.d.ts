/**
 * Returns TRUE if the current game is online
 * @returns {boolean} - Nothing
 */
declare function ClubCardIsOnline(): boolean;
/**
 * Returns TRUE if the BC Player is a player in the current Club Card game
 * @returns {boolean} - Nothing
 */
declare function ClubCardIsPlaying(): boolean;
/**
 * In case one of the players disconnects from the server, the other player sends a message about it to the game chat.
 * @param {number} disconnectedMemberNumber
 */
declare function ClubCardCheckDisconnected(disconnectedMemberNumber: number): void;
/**
 * Resets club card game status and synchronizes
 */
declare function ClubCardResetGameStatus(): void;
/**
 * A hidden message to trigger all room members and a normal notification message to the chat room.
 */
declare function ClubCardSendRequestResetGame(): void;
/**
 * Adds a message to the storage for processing later.
 * Sends messages immediately if their type matches the ClubCardImmediateMessageTypes array.
 *
 * @param {string} TextGetKey - Localization key
 * @param {string} MessageType - Message type (constant)
 * @param {Record<string, any>} placeholders - Dynamic data for text replacement
 * @param {ClubCardPlayer|null} TargetPlayer - The source player
 * @param {string} MessageText - if TextGetKey is not used
 */
declare function ClubCardMessageAdd(MessageType: string, TextGetKey: string, placeholders?: Record<string, any>, TargetPlayer?: ClubCardPlayer | null, MessageText?: string): void;
/**
 * Sends a message to the render log and synchronizes it with other players.
 * This method is used for immediate messages and for sending processed messages from storage.
 *
 * @param {ClubCardMessage} message - The message object to be sent
 * @param {boolean} Push - Whether to send the message to other players
 */
declare function ClubCardMessageSend(message: ClubCardMessage, Push?: boolean): void;
/**
 * Processes stored messages, merges similar ones, clears the storage,
 * and sends all messages using the ClubCardSendMessage function.
 */
declare function ClubCardMessageSendAll(): void;
/**
 * Processes and merges specific messages from the storage.
 */
declare function ClubCardMessagePacketProcessing(): void;
/**
 * Merges multiple messages by summing their AMOUNT placeholder and keeping the last message.
 *
 * @param {Array<{ message: ClubCardMessage, index: number }>} messageArray - The array of messages with their indexes.
 */
declare function ClubCardMessagesMerge(messageArray: Array<{
    message: ClubCardMessage;
    index: number;
}>): void;
/**
 * Merges "StealMoney" and "StealFame" messages into one.
 *
 * @param {Array<{ message: ClubCardMessage, index: number }>} stealMoneyMessages - Messages related to stealing money.
 * @param {Array<{ message: ClubCardMessage, index: number }>} stealFameMessages - Messages related to stealing fame.
 */
declare function ClubCardMessagesMergeSteal(stealMoneyMessages: Array<{
    message: ClubCardMessage;
    index: number;
}>, stealFameMessages: Array<{
    message: ClubCardMessage;
    index: number;
}>): void;
/**
 * Generates a formatted message text by replacing placeholders with actual values.
 * @param {ClubCardMessage} ClubCardMessage - Message Item
 * @returns {string} MessageText
 */
declare function ClubCardMessageGetText(ClubCardMessage: ClubCardMessage): string;
/**
   * Updated the text by mask, for InnerHTML
   * The function finds the necessary words from the arrays and adds colour labels to them.
   * @param {String} text -Normal Card Text
   * @returns {String} -  Updated for InnerHTML Card Text
   */
declare function ClubCardGetFormatTextForInnerHTML(text: string): string;
/**
 * Creates a popop in the middle of the board that pauses the game
 * @param {string} Mode - The popup mode "DECK", "TEXT" or "YESNO"
 * @param {string|null} Text - The text to display
 * @param {string|null} Button1 - The label of the first button
 * @param {string|null} Button2 - The label of the second button
 * @param {string|null} Function1 - The function of the first button
 * @param {string|null} Function2 - The function of the second button
 * @returns {void} - Nothing
 */
declare function ClubCardCreatePopup(Mode: string, Text?: string | null, Button1?: string | null, Button2?: string | null, Function1?: string | null, Function2?: string | null): void;
/**
 * Destroys the current popup
 * @returns {void} - Nothing
 */
declare function ClubCardDestroyPopup(): void;
/**
 * Returns TRUE if the card is a liability (should be played on the opponent side)
 * @param {ClubCard} Card - The card to evaluate
 * @returns {boolean} - TRUE if the card is a liability
 */
declare function ClubCardIsLiability(Card: ClubCard): boolean;
/**
 * Gets the opponent of the parameter player or the player that's not on it's turn if null
 * @param {ClubCardPlayer|null} CCPlayer - The club card player or null
 * @returns {ClubCardPlayer} - The opponent
 */
declare function ClubCardGetOpponent(CCPlayer?: ClubCardPlayer | null): ClubCardPlayer;
/**
 * Gets the opponent of the parameter player or the player that's not on it's turn if null
 * @param {ClubCardPlayer} CCPlayer - The club card player or null
 * @param {Number} turnCounter
 * @returns {ClubCard[]} - The opponent
 */
declare function ClubCardGetCardsPlayedOnTurn(CCPlayer: ClubCardPlayer, turnCounter: number): ClubCard[];
/**
 * Adds money to the club card player stats
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {Number} Amount - The amount to add
 * @returns {void} - Nothing
 */
declare function ClubCardPlayerAddMoney(CCPlayer: ClubCardPlayer, Amount: number): void;
/**
 * Adds fame to the club card player stats, can trigger a victory
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {Number} Amount - The amount to add
 * @returns {void} - Nothing
 */
declare function ClubCardPlayerAddFame(CCPlayer: ClubCardPlayer, Amount: number): void;
/**
 * Add fame from a player and remove from the ohter player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {Number} moneyAmount - The money amount to steal
 * @param {Number} fameAmount - The fame amount to steal
 * @param {boolean} isStickyFingers - Whether Sticky Fingers effect should be ignored.
 * @returns {{ stolenMoney: number, stolenFame: number }} - The amounts of money and fame stolen.
 */
declare function ClubCardPlayerSteal(CCPlayer: ClubCardPlayer, moneyAmount: number, fameAmount: number, isStickyFingers?: boolean): {
    stolenMoney: number;
    stolenFame: number;
};
/**
 * Applies the "Sticky Fingers" effect, stealing extra resources if possible.
 * @param {ClubCardPlayer} CCPlayer - The club card player.
 * @param {ClubCardPlayer} opponent - The opponent player.
 */
declare function ClubCardApplyStickyFingers(CCPlayer: ClubCardPlayer, opponent: ClubCardPlayer): void;
/**
 * Raises the level of player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {void} - Nothing
 */
declare function ClubCardUpgradeLevel(CCPlayer: ClubCardPlayer): void;
/**
 * Returns TRUE if a card (by name) is currently present on a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} CardName - The name of the card
 * @returns {boolean} - TRUE if at least one card with that name is present
 */
declare function ClubCardEventNameIsInEvents(CCPlayer: ClubCardPlayer, CardName: string): boolean;
/**
 * Returns TRUE if a card (by name) is currently present on a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} CardName - The name of the card
 * @returns {boolean} - TRUE if at least one card with that name is present
 */
declare function ClubCardNameIsOnBoard(CCPlayer: ClubCardPlayer, CardName: string): boolean;
/**
 * Returns the amount of a card (by name) that are currently present on a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} CardName - The name of the card
 * @returns {number} - the amount of members with that name on board
 */
declare function ClubCardNameCountOnBoard(CCPlayer: ClubCardPlayer, CardName: string): number;
/**
 * Returns TRUE if a card (by group) is currently present on a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} GroupName - The name of the card group
 * @returns {boolean} - TRUE if at least one card from that group is present
 */
declare function ClubCardGroupIsOnBoard(CCPlayer: ClubCardPlayer, GroupName: string): boolean;
/**
 * @param {ClubCard} card to evaluate group
 * @param {string} GroupName group name to find
 * @returns {boolean} - True if the card has the group
 */
declare function ClubCardCardHasGroup(card: ClubCard, GroupName: string): boolean;
/**
 * Returns the number of cards of a specific group found on a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} GroupName - The name of the card group
 * @returns {number} - The number of cards from that group on the board
 */
declare function ClubCardGroupOnBoardCount(CCPlayer: ClubCardPlayer, GroupName: string): number;
/**
 * Returns the number of cards of a specific group found in the discard pile
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} GroupName - The name of the card group
 * @returns {number} - The number of cards from that group in the discard pile
 */
declare function ClubCardGroupInDiscardPileCount(CCPlayer: ClubCardPlayer, GroupName: string): number;
/**
 * Removes a card from a player board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card object to remove
 * @param {boolean|null} DontDiscard - If the card dont need to go to the discard pile
 * @param {string} [MessageType=ClubCardMessageType.PLAYERCARDSLEFT]
 * @returns {void} - Nothing
 */
declare function ClubCardRemoveFromBoard(CCPlayer: ClubCardPlayer, Card: ClubCard, DontDiscard?: boolean | null, MessageType?: string): void;
/**
 * Gets the updated cost for a player to level up
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {number} The cost to level up
 */
declare function ClubCardCalculateLevelCost(CCPlayer: ClubCardPlayer): number;
/**
 * Gets the club level for pets effects
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {number} club level for pets effects
 */
declare function ClubCardCalculateLevelForPets(CCPlayer: ClubCardPlayer): number;
/**
 * Gets the max effect a card should have depending on its "tier"/required level to play
 * @param {ClubCard} Card
 * @param {number} fame
 * @returns {number} max effect card should have
 */
declare function ClubCardGetMaxEffectFromCard(Card: ClubCard, fame: number): number;
/**
 * Adds a card to a players hand
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card object to add
 * @returns {void} - Nothing
 */
declare function ClubCardAddToHand(CCPlayer: ClubCardPlayer, Card: ClubCard): void;
/**
 * Removes several cards from player time events
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {readonly String[]} ListOfCardNames - The names of the cards to remove
 */
declare function ClubCardRemoveCardsFromEventByName(CCPlayer: ClubCardPlayer, ListOfCardNames: readonly string[]): void;
/**
 * Removes a card from a player time events
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {string} CardName - The card object to remove
 * @returns {void} - Nothing
 */
declare function ClubCardRemoveFromEventByName(CCPlayer: ClubCardPlayer, CardName: string): void;
/**
 * Removes all cards that belong to a group (ex: Liability) from a board
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {String} GroupName - The group name to remove
 * @returns {void} - Nothing
 */
declare function ClubCardRemoveGroupFromBoard(CCPlayer: ClubCardPlayer, GroupName: string): void;
/**
 * Shuffles an array of cards
 * @param {ClubCard[]} array - The array of cards to shuffle
 * @returns {ClubCard[]} - The shuffled cards
 */
declare function ClubCardShuffle(array: ClubCard[]): ClubCard[];
/**
 * Sets the glowing border for a card
 * @param {ClubCard} Card - The card that must glow
 * @param {string} Color - The color of the glow
 * @returns {void} - Nothing
 */
declare function ClubCardSetGlow(Card: ClubCard, Color: string): void;
/**
 * Draw cards from the player deck into it's hand
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws the cards
 * @param {number|null} Amount - The amount of cards to draw, 1 if null
 * @returns {void} - Nothing
 */
declare function ClubCardPlayerDrawCard(CCPlayer: ClubCardPlayer, Amount?: number | null): void;
/**
 * Draw cards from the player deck into it's hand
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws the cards
 * @param {readonly string[]} groups - The group to draw from
 * @param {number | undefined} level - The level
 * @returns {boolean} - if cards were drawn or not
 */
declare function ClubCardPlayerDrawGroupCard(CCPlayer: ClubCardPlayer, groups: readonly string[], level: number | undefined): boolean;
/**
 * Summon cards from the player deck into it's board
 * @param {ClubCardPlayer} CCPlayer - The club card player that summons the cards
 * @param {readonly string[]} groups - The group to summon from
 * @param {number} amount - The amount of cards to summon
 * @param {number | undefined} level - The level of the cards if needed
 * @returns {boolean} - if cards were summoned or not
 */
declare function ClubCardPlayerSummonGroupCardFromDeck(CCPlayer: ClubCardPlayer, groups: readonly string[], amount: number, level: number | undefined): boolean;
/**
 * Play a card from an effect
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} card - The card to play
 * @returns {void} - Nothing
 */
declare function ClubCardSummonCard(CCPlayer: ClubCardPlayer, card: ClubCard): void;
/**
 * Returns TRUE if a specific card can be summoned by the player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card to play
 * @returns {boolean} - TRUE if the card can be summoned
 */
declare function ClubCardCanSummonCard(CCPlayer: ClubCardPlayer, Card: ClubCard): boolean;
/**
 * When drawing card, checks for various conditions and triggers.
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws the cards
 * @returns {void} - Nothing
 *
 */
declare function ClubCardCheckDraw(CCPlayer: ClubCardPlayer): void;
/**
 * trigger effects when the player is taking the draw action
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws the cards
 * @returns {void} - Nothing
 */
declare function ClubCardOnDrawAction(CCPlayer: ClubCardPlayer): void;
/**
 * Common place to handle Alvins effect on kidnapping and Restrain
 * @param {ClubCardPlayer} CCPlayer
 * @returns {void} - Nothing
 *
 */
declare function ClubCardAlvinCondition(CCPlayer: ClubCardPlayer): void;
/**
 * Removes cards from a player hand
 * @param {ClubCardPlayer} CCPlayer - The club card player that discards
 * @param {number} Amount - The amount of cards to discard
 * @returns {void} - Nothing
 */
declare function ClubCardPlayerDiscardCard(CCPlayer: ClubCardPlayer, Amount: number): void;
/**
 * Builds a deck array of object from a deck array of numbers
 * @param {readonly number[]} InDeck - The array of number deck
 * @returns {ClubCard[]} - The resulting deck
 */
declare function ClubCardLoadDeck(InDeck: readonly number[]): ClubCard[];
/**
 * Returns the index of the player in the ClubCardPlayer array
 * @returns {number} - The array index position
 */
declare function ClubCardGetPlayerIndex(): number;
/**
 * Builds a deck array of object from a deck array of numbers
 * @param {number} DeckNum - The array of number deck
 * @returns {void} - The resulting deck
 */
declare function ClubCardLoadDeckNumber(DeckNum: number): void;
/**
 * Draw the club card player hand on screen, show only sleeves if not controlled by player
 * @param {Character} Char - The character to link to that club card player
 * @param {String} Cont - The control linked to that player
 * @param {readonly number[]} Cards - The cards to build the deck with
 * @returns {void} - Nothing
 */
declare function ClubCardAddPlayer(Char: Character, Cont: string, Cards: readonly number[]): void;
/**
 * The player can get rewarded with a new card if she wins VS a specific opponent
 * @returns {void} - Nothing
 */
declare function ClubCardGetReward(): void;
/**
 * Runs the before/after turn end handlers
 * @param {ClubCardPlayer} CCPlayer - The player whose turn is ending
 * @param {ClubCardPlayer} Opponent - The other player
 * @param {boolean} Before - true to run BeforeTurnEnd handlers, false to run AfterEndTurn handlers
 * @returns {void}
  */
declare function ClubCardRunTurnEndHandlers(CCPlayer: ClubCardPlayer, Opponent: ClubCardPlayer, Before: boolean): void;
/**
 * @param {string} StartType
 * StartType = ClubCardStartTurnType.BUNKRUPT because otherwise the bankruptcy function won't work.
 */
declare function ClubCardStartTurn(StartType?: string): void;
/**
 * When a turn ends, we move to the next player
 * @param {boolean|null} Draw - If the end of turn was triggered by a draw
 * @returns {void} - Nothing
 */
declare function ClubCardEndTurn(Draw?: boolean | null): void;
declare function ClubCardCheckEventAndCardExpired(): void;
/**
 * Checks that the focused card is still in the Player's hand
 * and defocuses it if not.
 */
declare function ClubCardDefocusCardIfDiscarded(): void;
declare function ClubCardCheckVictory(CCPlayer: any): boolean;
/**
 * Returns the number of cards that can be played in one turn by a player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {Number} - The number of cards
 */
declare function ClubCardTurnPlayableCardCount(CCPlayer: ClubCardPlayer): number;
/**
 * Returns the number of cards that will be drawn when the player choses to draw instead of playing
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {Number} - The number of cards to draw
 */
declare function ClubCardDrawCardCount(CCPlayer: ClubCardPlayer): number;
/**
 * Returns the extra time in turns for event over time
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @returns {Number} - The extra time
 */
declare function ClubCardExtraTime(CCPlayer: ClubCardPlayer): number;
/**
 * Returns the player that will be the target of a card.  Liability cards are played on the other side.
 * @param {ClubCard} Card - The card to play
 * @returns {ClubCardPlayer} - The target player
 */
declare function ClubCardFindTarget(Card: ClubCard): ClubCardPlayer;
/**
 * Returns TRUE if a specific card can be played by the player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card to play
 * @returns {boolean} - TRUE if the card can be played
 */
declare function ClubCardCanPlayCard(CCPlayer: ClubCardPlayer, Card: ClubCard): boolean;
/**
 * Returns TRUE if a specific card can be selected as a prerequisite for another card by the player
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card to select
 * @returns {boolean} - TRUE if the card can be selected
 */
declare function ClubCardCanSelectCard(CCPlayer: ClubCardPlayer, Card: ClubCard): boolean;
/**
 * Returns TRUE if a specific card can be selected as a prerequisite for another card by the player
 * @param {ClubCard} Card - The card to select
 * @returns {boolean} - TRUE if the card can be selected
 */
declare function ClubCardCardsSelectConditions(Card: ClubCard): boolean;
/**
 * When a player plays a card
 * @param {ClubCardPlayer} CCPlayer - The club card player
 * @param {ClubCard} Card - The card to play
 * @returns {void} - Nothing
 */
declare function ClubCardPlayCard(CCPlayer: ClubCardPlayer, Card: ClubCard): void;
/**
 * When it adds a card to a player's board, check if there is an effect on board that needs to be triggered.
 * @param {ClubCardPlayer} CCPlayer - The target player
 * @param {ClubCard} Card - The card that was played
 * @returns {void} - Nothing
 */
declare function ClubCardOnCardPlayedHandler(CCPlayer: ClubCardPlayer, Card: ClubCard): void;
/**
 * When it adds a card to a player's board, it updates for all index cards.
 * @param {ClubCardPlayer} Target - The target player
 * @returns {void} - Nothing
 */
declare function ClubCardUpdateBoardCardsIndex(Target: ClubCardPlayer): void;
/**
 * When a player selects a card that's a prerequisite for another card
 * @param {ClubCard} Card - The card to play
 * @returns {void} - Nothing
 */
declare function ClubCardSelectCard(Card: ClubCard): void;
/**
 * When the AI plays it's move
 * @returns {void} - Nothing
 */
declare function ClubCardAIPlay(): void;
/**
 * When the opponent (AI) starts it's turn, gives 3 seconds before it's move
 * @returns {void} - Nothing
 */
declare function ClubCardAIStart(): void;
/**
 * When a player concedes the game
 * @returns {void} - Nothing
 */
declare function ClubCardConcede(): void;
/**
 * When a player goes bankrupt, she restarts her club from scratch, draws 5 new cards and ends her turn
 * @returns {void} - Nothing
 */
declare function ClubCardBankrupt(): void;
/**
 * When the game ends
 * @param {boolean} Victory - TRUE if the player is victorious
 * @returns {void} - Nothing
 */
declare function ClubCardEndGame(Victory: boolean): void;
declare function ClubCardTextGet(Text: any): string;
/**
 * Prepares the card titles, texts and initialize the log if needed
 * @returns {void} - Nothing
 */
declare function ClubCardLoadCaption(): void;
/**
 * Assigns the club card object if needed and loads the CSV file
 * @returns {void} - Nothing
 */
declare function ClubCardCommonLoad(): void;
/**
 * Loads the club card mini-game: Assigns the opponents and draws the cards
 * @returns {void} - Nothing
 */
declare function ClubCardLoad(): void;
/**
 * Draw the club card player hand on screen, show only sleeves if not controlled by player
 * @param {Number} Value - The card to draw
 * @param {number} X - The X on screen position
 * @param {number} Y - The Y on screen position
 * @param {number} W - The width of the card
 * @param {string} Image - The buble
 * @returns {Number} - The next bubble Y position
 */
declare function ClubCardRenderBubble(Value: number, X: number, Y: number, W: number, Image: string): number;
/**
 * Returns the text description of all groups, separated by commas
 * @param {readonly string[]} Group - The card to draw
 * @returns {string} - The
 */
declare function ClubCardGetGroupText(Group: readonly string[]): string;
/**
 * Draw the club card player hand on screen, show only sleeves if not controlled by player
 * @param {ClubCard|Number} Card - The card to draw
 * @param {number} X - The X on screen position
 * @param {number} Y - The Y on screen position
 * @param {number} W - The width of the card
 * @param {string|null} Sleeve - The sleeve image to draw instead of the card
 * @param {string|null} Source - The source from where it's called
 * @returns {void} - Nothing
 */
declare function ClubCardRenderCard(Card: ClubCard | number, X: number, Y: number, W: number, Sleeve?: string | null, Source?: string | null): void;
/**
 * Draw the club card player board on screen
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws the cards
 * @param {number} X - The X on screen position
 * @param {number} Y - The Y on screen position
 * @param {number} W - The width of the game board
 * @param {number} H - The height of the game board
 * @param {boolean} Mirror - If the board should be rendered bottom to top
 * @returns {void} - Nothing
 */
declare function ClubCardRenderBoard(CCPlayer: ClubCardPlayer, X: number, Y: number, W: number, H: number, Mirror: boolean): void;
/**
 * Draw the club card player hand on screen, show only sleeves if not controlled by player
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws it's hand
 * @param {number} X - The X on screen position
 * @param {number} Y - The Y on screen position
 * @param {number} W - The width of the game board
 * @param {number} H - The height of the game board
 * @returns {void} - Nothing
 */
declare function ClubCardRenderHand(CCPlayer: ClubCardPlayer, X: number, Y: number, W: number, H: number): void;
/**
 * Draw the discard pile on screen
 * @param {ClubCardPlayer} CCPlayer - The club card player that draws it's discard pile
 * @param {number} X - The X on screen position
 * @param {number} Y - The Y on screen position
 * @param {number} W - The width of the discard pile window
 * @param {number} H - The height of the discard pile window
 * @returns {void} - Nothing
 */
declare function ClubCardRenderDiscardPile(CCPlayer: ClubCardPlayer, X: number, Y: number, W: number, H: number): void;
/**
 * Shows the status text on the bottom right
 * @param {string} Text - The status text to show
 * @returns {void} - Nothing
 */
declare function ClubCardStatusText(Text: string): void;
/**
 * Renders the right side panel
 * @returns {void} - Nothing
 */
declare function ClubCardRenderPanel(): void;
/**
 * Function to create and add system or player messages to document.getElementById(“CCLog”).
 * @param {ClubCardMessage} MessageItem - Message
 */
declare function ClubCardCreateOneDivContainer(MessageItem: ClubCardMessage): void;
/**
 * Function for creating and filling a container with all objects for a stroke by index.
 * @param {ClubCardMessage} MessageItem - Message
 */
declare function ClubCardCreateTurnDivContainer(MessageItem: ClubCardMessage): void;
/**
 * Renders the popup on the top of the game board
 * @returns {void} - Nothing
 */
declare function ClubCardRenderPopup(): void;
/**
 * Runs the club card game, draws all the controls
 * @returns {void} - Nothing
 */
declare function ClubCardRun(): void;
/**
 * Handles clicks during the club card game
 * @returns {void} - Nothing
 */
declare function ClubCardClick(): void;
declare function ClubCardKeyDown(event: KeyboardEvent): boolean;
declare var ClubCardBackground: string;
declare var ClubCardColor: string[];
declare var ClubCardFameTextColor: string;
declare var ClubCardMoneyTextColor: string;
/** @type {null | Character } */
declare var ClubCardOpponent: null | Character;
/** @type {number[]} */
declare var ClubCardOpponentDeck: number[];
/** @type {null | ClubCard} */
declare var ClubCardReward: null | ClubCard;
/** @type {null | ClubCard} */
declare var ClubCardHover: null | ClubCard;
/** @type {null | ClubCard} */
declare var ClubCardFocus: null | ClubCard;
/** @type {null | TextCache} */
declare var ClubCardTextCache: null | TextCache;
declare var ClubCardTurnIndex: number;
declare var ClubCardTurnCardPlayed: number;
declare var ClubCardTurnEndDraw: boolean;
declare var ClubCardFameGoal: number;
/** @type {{ Mode: null | string, Text: null | string, Button1: null | string, Button2: null | string, Function1: null | string, Function2: null | string }} */
declare var ClubCardPopup: {
    Mode: null | string;
    Text: null | string;
    Button1: null | string;
    Button2: null | string;
    Function1: null | string;
    Function2: null | string;
};
/** @type {null | ClubCard} */
declare var ClubCardSelection: null | ClubCard;
/** @type {null | ClubCard} */
declare var ClubCardPending: null | ClubCard;
declare var ClubCardLevelLimit: number[];
declare var ClubCardLevelCost: number[];
/** @type {ClubCardPlayer[]} */
declare var ClubCardPlayer: ClubCardPlayer[];
declare var ClubCardOnlinePlayerMemberNumber1: number;
declare var ClubCardOnlinePlayerMemberNumber2: number;
/**
 * Storage for all processed and displayed log messages
 * @type {ClubCardMessage[]}
 */
declare let ClubCardLog: ClubCardMessage[];
/**
 * Temporary buffer used for rendering messages before final log update
 * @type {ClubCardMessage[]}
 */
declare let ClubCardRenderLog: ClubCardMessage[];
/**
 * Message storage to accumulate messages before processing and sending
 * @type {ClubCardMessage[]}
 */
declare let ClubCardMessageStorage: ClubCardMessage[];
declare var ClubCardLogScroll: boolean;
declare const ClubCardMessageType: Readonly<{
    STARTTURNINFO: "StartTurnInfo";
    STARTTURNEVENT: "StartTurnEvent";
    CARDEFFECT: "CardsEffect";
    KNOTEVENT: "KnotEvent";
    TURNENDEFFECT: "TurnEndEffect";
    FAMEMONEYINFO: "FameMoneyInfo";
    VICTORYINFO: "VictoryInfo";
    ACTIONSEPARATOR: "ActionSeparator";
    PREREQUISTITE: "Prerequisite";
    ACTION: "Actions";
    SYSTEM: "SystemMessage";
    PLAYERSMESSAGE: "PlayersMessage";
    PLAYERSDISCONNECTED: "PlayersDisconnected";
}>;
declare const ClubCardImmediateMessageTypes: ("Prerequisite" | "ActionSeparator" | "Actions" | "SystemMessage" | "PlayersMessage" | "PlayersDisconnected")[];
declare const ClubCardStartTurnType: Readonly<{
    PLAYCARD: "PlayCard";
    DRAWENDTURN: "DrawAndEndTurn";
    BANKRUPT: "Bankrupt";
    UPGRADELEVEL: "UpgradeLevel";
    ENDTURN: "EndTurn";
}>;
/**
 * Keys for filling in the function parameters ClubCardMessageAdd
 */
declare const ClubCardPlaceholderKeys: Readonly<{
    AMOUNT: "AMOUNT";
    CARDNAME: "CARDNAME";
    FAMEMONEY: "FAMEMONEY";
    MONEYAMOUNT: "MONEYAMOUNT";
    FAMEAMOUNT: "FAMEAMOUNT";
}>;
/** @type {boolean} Variable to check if the start function of the turn has already been called or not. */
declare let ClubCardIsStartTurn: boolean;
/**
 * The card definitions
 *
 * The BeforeTurnEnd hooks are run before regular fame and money are calculated and
 * are a good place to remove cards so they don't add fame/money that turn. Most
 * cards should prefer this hook instead of AfterTurnEnd (including ones that just
 * add extra money / fame).
 *
 * The AfterTurnEnd hooks run after this, and can be used to adjust the total amount
 * of money / fame gained that turn.
 *
 * @type {ClubCard[]}
 */
declare var ClubCardList: ClubCard[];
