// chessboard.min.js
declare module "chess" {
	class Chessboard {
		constructor(elem: HTMLElement, options: {
			position: "start";
			orientation: keyof typeof COLOR;
			style: any;
			sprite: {
				url: string;
				size: number;
				cache: boolean;
			}
		});
		enableMoveInput(cb: (event: MoveInputEvent) => void, turn: keyof typeof COLOR): void;
		setPosition(fen: string, _: boolean): void;
		props: {
			animationDuration: number;
		};
	}

	class MoveInputEvent {
		type: keyof typeof INPUT_EVENT_TYPE;
		square: never;
		squareFrom: never;
		squareTo: never;
	}

	const INPUT_EVENT_TYPE: {
		moveStart: any;
		moveDone: any;
	};

	const COLOR: {
		white: "white",
		black: "black",
	};

	const BORDER_TYPE: {
		thin: "thin",
	};
}

// chess.min.js
declare var chess: typeof import("chess");

type ChessPieceType = "p" | "n" | "b" | "r" | "q" | "k";
type ChessPieceColor = "w" | "b";

interface ChessPiece {
	type: ChessPieceType;
	color: ChessPieceColor;
}

declare class Chess {
	moves(opts?: {square?: any, verbose?: boolean}): string[];
	move(opts: { from: string, to: string, promotion: ChessPieceType } | string | null): any;
	fen(): string;
	reset(): void;
	turn(): ChessPieceColor;
	board(): ChessPiece[][];
	undo(): void;

	game_over(): boolean;
	in_checkmate(): boolean;
	in_stalemate(): boolean;
	in_draw(): boolean;
	in_threefold_repetition(): boolean;
}
