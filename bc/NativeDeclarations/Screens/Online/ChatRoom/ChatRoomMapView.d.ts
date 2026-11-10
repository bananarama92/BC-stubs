declare namespace MapManager {
	interface EffectsCodec {
		write(effectsFlat: ChatRoomMapEffect[][], writer: BitStringWriter): boolean;
		read(
			reader: BitStringReader,
			requiredTilesCount: number | undefined,
		): ChatRoomMapEffect[][] | undefined;
	}

	interface ObjectSettingsCodec {
		write(settingsByTile: Record<number, ChatRoomMapObjectSettings>, writer: BitStringWriter): boolean;
		read(reader: BitStringReader): Record<number, ChatRoomMapObjectSettings> | undefined;
	}

	interface MapCodec<T> {
		write(map: T, writer: BitStringWriter): boolean;
		read(
			reader: BitStringReader,
			requiredTilesCount: number | undefined,
		): T | undefined;
	}

	namespace MapEffectsCodecs_v0 {
		interface ConstSettings {
			rleBitsEmpty: number;
			rleMaxEmpty: number;
			rleBitsFilled: number;
			rleMaxFilled: number;
			bitLenBits: number;
			arrayLenInBytesBits: number;
		}

		interface DynamicSettings {
			baseIdBits: number;
			shiftedIdBits: number;
			remappedIdBits: number;
			effectIdMin: number;
			effectsLength: number;
			effectIdsShifted: number[];
			effectIdShiftedToRemapId: Map<number, number>;
			remapIdToEffectIdShifted: Map<number, number>;
		}
	}

	type UndoGroup = {
		cbs: (() => void)[];
		add(cb: () => void): void;
	}
}

interface MapDataLookupTable {
	Tile: ChatRoomMapTile;
	Object: ChatRoomMapObject;
	Effect: ChatRoomMapEffect;
}

type MapDataDoodadType = keyof MapDataLookupTable;

/**
 * Internal type to carry around the tile X,Y into index unpacking
 */
type UnpackedIndex<T extends readonly [number, ...unknown[]]> = T extends readonly [number, infer Y, ...infer Rest]
	? Y extends number ? [number, ...Rest] : T
	: T;

type MapDataIndexedArgs<args extends readonly unknown[]> = [x: number, y: number, ...args] | [index: number, ...args];

type ChatRoomMapViewObjectModeType = "Tile" | "Object" | "Effect";

type ChatRoomMapViewEditModeType = "" | ChatRoomMapViewObjectModeType | "TileType" | "ObjectType" | "ObjectSettings";

type ChatRoomMapViewTool = {
	canPaint: () => boolean;
	paint: (x: number, y: number, range: number, event: PointerEvent) => void;
	selectionColor: string;
};

type ChatRoomMapViewToolName = keyof typeof ChatRoomMapViewTools;
