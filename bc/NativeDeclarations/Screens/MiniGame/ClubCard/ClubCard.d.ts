type ClubCardTag =
	| "All Cards"
	| "Selected Cards"
	| "Event Cards"
	| "Ungrouped"
	| "Liability"
	| "Staff"
	| "Police"
	| "Criminal"
	| "Fetishist"
	| "Porn"
	| "Maid"
	| "Asylum"
	| "Dominant / Mistress"
	| "ABDL"
	| "College"
	| "Shibari"
	| "Pet / Owner"
	| "Kemonomimi"
	| "Submissive / Slave"
	| "Exhibitionist"
	| "Latex"
	| "Online Player"
	| "Reward Cards"
;

type ClubCardType = "Member" | "Event";

type ClubCardGroup =
    | "Fetishist"
    | "Exhibitionist"
    | "Shibari"
    | "Submissive"
    | "Sensei"
    | "Staff"
    | "Police"
    | "Criminal"
    | "Liability"
    | "ABDLBaby"
    | "ABDLMommy"
    | "Maid"
    | "Slave"
    | "PornActress"
    | "Porn"
    | "Kemonomimi"
    | "AsylumPatient"
    | "AsylumNurse"
    | "Dominant"
    | "Mistress"
    | "CollegeStudent"
    | "CollegeTeacher"
    | "Player"
    | "Pet"
    | "Knot"
    | "Owner"
    | "Latex"
    | "Auction"
    | "TimedEvent"
    | "Video"
    | "ContinuousEvent"
;

interface ClubCard {
	ID: number;
	UniqueID?: string;
	Name: string;
	ArrayIndex?: number;
	Type?: ClubCardType;
	Title?: string;
	Text?: string;
	Prerequisite?: string;
	Reward?: string;
	RewardMemberNumber?: number;
	MoneyPerTurn?: number;
	FamePerTurn?: number;
	RequiredLevel?: 1 | 2 | 3 | 4 | 5;
	Time?: number;
	ExtraTime?: number;
	ExtraPlay?: number;
	Group?: ClubCardGroup[];
	Location?: string;
	Negated?: boolean; // if the card's effect should not work
	Negating?: string; // the card that its effect is stopped by this card
	GlowTimer?: number;
	GlowColor?: string;
	EffectKey?: number;
	EffectType?: string;
	Revealed?: boolean;
	CanActive?: boolean;
	//### Animations
	AnimationState?: string;
	DelayedAnimationState?: string;
	CurrentX?: number;
	CurrentY?: number;
	CurrentW?: number;
	IsVisible?: boolean;
	//### ### ### ###
	OnPlay?: (C: ClubCardPlayer) => void;
	BeforeTurnEnd?: (C: ClubCardPlayer) => void;
	AfterTurnEnd?: (C: ClubCardPlayer) => void;
	BeforeOpponentTurnEnd?: (C: ClubCardPlayer) => void;
	AfterOpponentTurnEnd?: (C: ClubCardPlayer) => void;
	CanPlay?: (C: ClubCardPlayer) => boolean;
	/**
	 * @param C Player that owns the card and played a card
	 * @param Card that was played
	 */
	onPlayedCard?: (C: ClubCardPlayer, Card: ClubCard) => void;
	/**
	 * @param C player that owns the card (not the one who played it in this case)
	 * @param Card the card that was played
	 */
	onOpponentPlayedCard?: (C: ClubCardPlayer, Card: ClubCard) => void;
	/**
	 * Hook to run when card is removed from the board.
	 * @param C Player that owns the card
	 */
	onLeaveClub?: (C: ClubCardPlayer) => void;
	onMemberLeaveClub?: (C: ClubCardPlayer, Card: ClubCard, DidntDiscard: boolean) => void;
	onRender?: (C: ClubCardPlayer, X: number, Y: number, W: number) => void;
	turnStart?: (C: ClubCardPlayer) => void;
	onLevelUp?: (C: ClubCardPlayer) => void;
	onOpponentLevelUp?: (C: ClubCardPlayer) => void;
	onDrawCard?: (C: ClubCardPlayer) => void;
	onOpponentDrawCard?: (C: ClubCardPlayer) => void;
	onDrawAction?: (C: ClubCardPlayer) => void;
	onOpponentDrawAction?: (C: ClubCardPlayer) => void;
	onSteal?: (C: ClubCardPlayer) => void;
	StreetsTurnEnd?: (C: ClubCardPlayer) => void;
	onDiscardCard?: (C: ClubCardPlayer, Card: ClubCard) => void;
	onCancelNegation?: (C: ClubCardPlayer) => void;
	WhenDrawn?: (C: ClubCardPlayer) => void;
	OnActive?: (C: ClubCardPlayer) => void;
	OnGameStart?: (C: ClubCardPlayer) => void;
}

type ClubCardDefaultDecks =
	| "Default"
	| "Princess Treatment"
	| "Permanent Stay"
	| "Pound Town"
;

interface ClubCardPlayer {
	Character: Character;
	Control: "AI" | "Player" | "Online";
	Index: number;
	Sleeve: number;
	Deck: ClubCard[];
	FullDeck: ClubCard[];
	Hand: ClubCard[];
	Board: ClubCard[];
	Event: ClubCard[];
	RenderFullBoard: ClubCard[];
	DiscardPile: ClubCard[];
	Level: number;
	Money: number;
	Fame: number;
	LastFamePerTurn?: number;
	LastMoneyPerTurn?: number;
	ClubCardTurnCounter: number;
	CardsPlayedThisTurn: Record<number, ClubCard[]>
}

interface ClubCardPopupType {
    Mode:
        | "DISCARDPILE"
        | "YESNO"
        | "TEXT"
        | "SEARCH"
        | "INFO"
        | "TIERSELECTION"
        | "DECK"
        | "TifaActive";
    Text?: string;
    Button1?: string;
    Button2?: string;
    Function1?: string;
    Function2?: string;
    CardsPool?: ClubCard[];
}

type ClubCardMessageType =
	| "Prerequisite"
	| "StartTurnInfo"
	| "SystemMessage"
	| "PlayersMessage"
	| "PlayersDisconnected"
	| "CardsEffect"
	| "TurnEndEffect"
	| "KnotEvent"
	| "Actions"
	| "ActionSeparator"
	| "FameMoneyInfo"
	| "StartTurnEvent"
	| "VictoryInfo"
;

type ClubCardPlaceholderKeysType =
	| "MONEYLABEL"
	| "FAMELABEL"
	| "AMOUNT"
	| "CARDNAME"
	| "MONEYAMOUNT"
	| "FAMEAMOUNT"
	| "TURNNUMBER"
	| "PLAYERNAME"
;

interface ClubCardMessage {
	/** Localization key */
	TextGetKey: string;
	/** Type of message (e.g., ACTION, SYSTEM, IMMEDIATE) */
	MessageType: ClubCardMessageType;
	/** ID of the player who triggered the message */
	PlayerId: string;
	/** Turn number when the message was created */
	TurnCounter: number;
	/** Dynamic data for text replacement */
	Placeholders: {
		[key in ClubCardPlaceholderKeysType]?: string;
	};
}

interface ClubCardPosition {
    x: number;
    y: number;
    w: number;
}

/**
 * Represents an active card animation in progress.
 */
interface ClubCardActiveAnimation {
	/** The card being animated. */
	Card: ClubCard;
	/** The original card (if a copy is animated). */
	OriginalCard?: ClubCard | null;
	/** Timestamp when the animation started (in milliseconds). */
	StartTime: number;
	/** Total animation duration in milliseconds. */
	Duration: number;
	/** Initial position of the card. */
	StartPosition: { x: number, y: number, w: number };
	/** Target position of the card. */
	EndPosition: { x: number, y: number, w: number };
	/** Whether to hide the original card during animation. */
	HideOriginal: boolean;
	/** Whether the original card should stay hidden after animation completes. */
	KeepOriginalHidden: boolean;
	/** Timeout ID for fallback handling (used to restore the card state in case of failure). */
	SafetyTimeout: number;
	/** Callback function called when the animation completes. */
	OnComplete?: AnyFunction|null;
	// Processed elsewhere
	// /** Callback function called when the animation starts. */
	// OnStart?: Function|null;
	/** Animation rendering level priority*/
	Priority: number;
}
