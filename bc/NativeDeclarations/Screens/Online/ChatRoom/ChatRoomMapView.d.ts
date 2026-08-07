declare namespace ChatRoomMapManager {
	interface EffectsCodec {
		write(effectsFlat: ChatRoomMapEffect[][], writer: BitStringWriter): boolean;
		read(
			reader: BitStringReader,
			requiredTilesCount: number | undefined,
		): ChatRoomMapEffect[][] | undefined;
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
}
