/**
 * @module BitString
 * @author Lisa the Orange <lisatheorange@proton.me>
 * @description
 * BitString: a module allowing a space-efficient packing of a sequence
 * of arbitrary-width integers (up to {@link Number.MAX_SAFE_INTEGER}) into
 * a {@link String}.
 *
 * This works by treating a {@link String} as a bit sequence and packing
 * the values as little-endian integers into it, using
 * twos complement for representing signed numbers.
 *
 * The module contains many excessive checks of the invariants due to
 * the complexity of the code. The errors associated with those excessive
 * are marked with *Internal error* and can be removed in the future for
 * minor speed gains. Note that the users are not supposed to catch those
 * errors, because the internal state of the reader/writer object
 * is NOT guaranteed to be correct after throwing those errors.
 *
 * Another type of errors is *Invalid argument*. While the reader/writer objects
 * do preserve the state in case those errors are thrown, it is nonetheless not
 * recommended to catch them either. The only recoverable error of those
 * objects is thrown on reading overflow, which is best handled by using
 * {@link BitStringReader.tryReadUnsigned}/{@link BitStringReader.tryReadSigned}
 * methods, which return `undefined` when and only when there is
 * not enough bits of data remaining.
 *
 * ---
 *
 * It is important to remember that this module supports zero-width fields.
 * This means that {@link BitStringHelper.getBitsCountForUnsigned} would return
 * `0` if given a zero value.
 *
 * Writing a literal `0` into a zero-width field with {@link BitStringWriter.writeUnsigned}
 * is a no-op; trying to write any other value would throw an error.
 *
 * Reading zero bits with {@link BitStringReader.readUnsigned} would always return `0`
 * and not change the internal state.
 *
 * The user then must take additional care when working with dynamic-width fields, and bear in mind
 * that the calculated maximum width of an array can be zero, in which case errors
 * like division by zero might occur. Another problem might occur when the user tries to
 * read the string with {@link BitStringReader.tryReadUnsigned}
 * until the rest of the bits are consumed. If the requested bit width is zero,
 * {@link BitStringReader.tryReadUnsigned} would never return `undefined`.
 *
 * ---
 *
 * Note that this module by itself does not offer any compression capabilities like LZW or RLE
 * besides the ability to efficiently pack and unpack a set of variable-width numbers.
 *
 * Additionally, be careful to not use byte-/character-level compression algorithms
 * (for example, the one implemented by `LZString`) on a BitString, since doing so would most likely
 * increase the size of the resulting string instead of compressing it.
 * This happens because even if the BitString contains a lot of repeating values, the resulting
 * characters more often than not would be chaotic, without obvious patterns for
 * a byte-level compression to spot.
 *
 * ---
 *
 * @todo
 * Currently, there is no floating point numbers encoding support in this module.
 * If the need to support packing floating point numbers or other kind of data arises,
 * feel free to reach out to the initial author for help.
 *
 * @example <caption>A simple workflow example</caption>
 * const writer = new BitStringWriter();
 * writer.writeUnsigned(42, 15);  // writes a 15-bit unsigned integer
 * writer.writeSigned(-999, 23);  // writes a 23-bit signed integer
 * writer.writeUnsigned(1023, 10);  // writes a 10-bit signed integer
 *
 * const bitStr = writer.toBitString();  // creates a 3-characters long string holding
 *                                       // 48 bits of data.
 *
 * // Reading
 *
 * const reader = new BitStringReader(bitStr);
 * reader.readUnsigned(15);  // returns 42
 * reader.readSigned(23);  // returns -999
 * reader.readUnsigned(10);  // returns 1023
 *
 * @example <caption>A more complex workflow; dynamic calculation of the required bit width.</caption>
 * // The data to pack.
 * let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32];
 *
 * // Calculate the maximum bit width of the data values.
 * let requiredBitWidth = 0;
 * for (const value of arr) {
 *   requiredBitWidth = Math.max(requiredBitWidth, BitStringHelper.getBitsCountForUnsigned(value));
 * }
 * // requiredBitWidth == 6 given the arr above. Slightly inefficient because of one big integer at the end.
 * // Otherwise, it would've been 4.
 *
 * let writer = new BitStringWriter();
 * // Write the amount of elements and their width. Using 16 bit for length, should add more checks or logic
 * // if it is expected that arr can be arbitrarily long.
 * writer.writeUnsigned(arr.length, 16);
 * writer.writeUnsigned(requiredBitWidth, 6);  // 6 bit is enough to store bit width of any safe JavaScript integer
 *
 * // Write the elements themselves. Again, assuming unsigned values here.
 * for (const value of arr) {
 *   writer.writeUnsigned(value, requiredBitWidth);
 * }
 *
 * const bitStr = writer.toBitString();
 * // bitStr is only 6 characters.
 * // Compare to 25 characters required to store the minified JSON representation of the same array.
 *
 * // Reading
 *
 * const reader = new BitStringReader(bitStr);
 * const len = reader.readUnsigned(16);
 * const bitsPerElement = reader.readUnsigned(6);
 * arr = [];
 * for (let i = 0; i < len; i++) {
 *   arr.push(reader.readUnsigned(bitsPerElement));
 * }
 *
 * // arr is now equals to [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32].
 */
/**
 * Same as String.fromCharCode(...array), but supports very long arrays unlike the original.
 * @param {number[]} array
 * @returns {string}
 */
declare function CreateStringFromCharCodes(array: number[]): string;
/**
 * A collection of helper functions used throughout the module.
 * They should be used by the users when working with dynamically-sized fields.
 */
declare class BitStringHelper {
    /**
     * @param {number} value a non-negative integer. The value to be encoded.
     * @param {number} bits a non-negative integer between 0 and `SAFE_INTEGER_BITS`, inclusive.
     * The amount of bits the value should be encoded in.
     * @returns {boolean} Whether we can encode an unsigned `value` in `bits` bits.
     */
    static canFitUnsigned(value: number, bits: number): boolean;
    /**
     * @param {number} value an integer. The value to be encoded.
     * @param {number} bits a non-negative integer between 0 and `SAFE_INTEGER_BITS`, inclusive.
     * The amount of bits the value should be encoded in.
     * @returns {boolean} Whether we can encode a signed `value` in `bits` bits.
     */
    static canFitSigned(value: number, bits: number): boolean;
    /**
     * @param {number} value a non-negative integer. The value to be encoded.
     * @returns {number} The minimal amount of bits required to encode a given unsigned value.
     * For zero values returns zero.
     */
    static getBitsCountForUnsigned(value: number): number;
    /**
     * @param {number} value an integer. The value to be encoded.
     * @returns {number} The minimal amount of bits required to encode a given signed value.
     * For zero values returns zero.
     */
    static getBitsCountForSigned(value: number): number;
    /**
     * The maximum unsigned number which can fit into a given number of bits.
     * @param {number} bits
     * @return {number}
     */
    static maxUnsignedInBits(bits: number): number;
    /**
     * The maximum signed number which can fit into a given number of bits.
     * @param {number} bits
     * @return {number}
     */
    static maxSignedInBits(bits: number): number;
    /**
     * The minimum signed number which can fit into a given number of bits.
     * @param {number} bits
     * @return {number}
     */
    static minSignedInBits(bits: number): number;
}
/**
 * Internal functions used by the module.
 */
declare class _BitStringHelperInternal {
    static CHAR_BITS: number;
    static CHAR_BYTES: number;
    static CHAR_MASK: number;
    static SAFE_INTEGER_BITS: number;
    /**
     * @param {number} bits
     * @returns {number} An integer mask with `bits` lower bits set to 1.
     */
    static getMask(bits: number): number;
    /**
     * @param {number} uval a non-negative integer
     * @param {number} bits
     * @returns {number} a signed integer from an unsigned interpretation of a `bits`-long twos complement integer `uval`.
     */
    static twosComplementToSigned(uval: number, bits: number): number;
    /**
     * @param {number} val a signed integer
     * @param {number} bits
     * @returns {number} an unsigned `bits`-long twos complement interpretation of a given signed integer.
     */
    static twosComplementToUnsigned(val: number, bits: number): number;
    /**
     * A helper checking user-provided `bits` range.
     * @param {number} bits
     * @param {string} funcName
     * @throws {Error} if `bits` is out of [0; SAFE_INTEGER_BITS] range.
     */
    static checkBitsCountCorrect(bits: number, funcName: string): void;
    /**
     * Converts a given array of unsigned 16-bit integers into a base64 string.
     *
     * @param {number[]} array
     * @returns {string}
     */
    static u16ArrayToBase64(array: number[]): string;
    /**
     * Converts a base64 string obtained from calling {@link _BitStringHelperInternal.u16ArrayToBase64}
     * into a string which the {@link BitStringReader} can read.
     *
     * @param {string} b64Str
     * @returns {string | undefined}
     */
    static base64ToU16String(b64Str: string): string | undefined;
}
/**
 * The writer class. It is responsible for creating a BitString from a sequence of variable-sized integers.
 */
declare class BitStringWriter {
    /**
     * The current buffer: an array of 16-bit unsigned integers representing the bit stream this class writes to.
     * @type {number[]}
     * private
     */
    _buffer: number[];
    /**
     * The amount of free bits in the last char of the {@link BitStringWriter._buffer}.
     *
     * Always inside `[CHAR_BITS, 0]`.
     *
     * Writing to the bit stream decreases this value until 0 is hit, in which case
     * the next non-zero-bits writing attempt pushes `0` into the {@link BitStringWriter._buffer}
     * and resets {@link BitStringWriter._freeBitsLastChar}
     * back to {@link _BitStringHelperInternal.CHAR_BITS}.
     *
     * @type {number}
     * private
     */
    _freeBitsLastChar: number;
    /**
     * Resets the current writer, discarding any data written so far.
     * @returns {this}
     */
    reset(): this;
    /**
     * Converts the currently held data into a `string` and returns it. Does not modify the internal buffer.
     * @returns {string}
     */
    toBitString(): string;
    /**
     * Converts the currently held data into a `base64` string and returns it. Does not modify the internal buffer.
     * @returns {string}
     */
    toBase64(): string;
    /**
     * Converts the currently held data into a `string` and returns it. Resets the internal buffer.
     * @returns {string}
     */
    flush(): string;
    /**
     * Converts the currently held data into a `base64` string and returns it. Resets the internal buffer.
     * @returns {string}
     */
    flushBase64(): string;
    /**
     * Writes an unsigned integer with `bits` width.
     *
     * Throws an `Invalid argument` error when any of the following is true:
     * - `value` is negative;
     * - `bits` is outside [0; SAFE_INTEGER_BITS] range;
     * - `bits` bits is not enough to store `value`.
     *
     * @param {number} value a non-negative integer to be encoded.
     * @param {number} bits a non-negative integer. The amount of bits the value should take.
     * @returns {this}
     */
    writeUnsigned(value: number, bits: number): this;
    /**
     * Writes a signed integer with `bits` width.
     *
     * Throws an `Invalid argument` error when any of the following is true:
     * - `bits` is outside [0; SAFE_INTEGER_BITS] range;
     * - `bits` bits is not enough to store `value`.
     *
     * @param {number} value a signed integer to be encoded.
     * @param {number} bits a non-negative integer. The amount of bits the value should take.
     * @returns {this}
     */
    writeSigned(value: number, bits: number): this;
    /**
     * A convenience function for writing a single bit expressed as an integer of value of either `0` or `1`.
     *
     * With the correct arguments behaves exactly like `writeUnsigned(value, 1)`.
     *
     * Any other value passed to this function would result in an error.
     * @param {number} value either `0` or `1`.
     * @throws {Error} when a value not equal to either `0` or `1` is received.
     * @returns {this}
     */
    writeBit(value: number): this;
    /**
     * A convenience function for writing a single boolean value.
     *
     * Coerces {@link value} to a boolean, then writes `1` if the result is truthy, `0` otherwise.
     *
     * @param {any} value
     * @returns {this}
     */
    writeBool(value: any): this;
    /**
     * Writes an unsigned value without bit-width checks.
     * @param {number} value
     * @param {number} bits
     * private
     */
    _writeUnsignedValueNoChecks(value: number, bits: number): void;
    /**
     * Writes `value`, a `bits`-wide integer, to the free space in the last character being written.
     *
     * The last char must contain at least `bits` free bits.
     *
     * @param {number} value
     * @param {number} bits
     * private
     */
    _addBitsToBufferLastChar(value: number, bits: number): void;
    /**
     * Adds a full `CHAR_BIT`-wide value to the buffer.
     *
     * The last char of the buffer must NOT contain any free bits.
     *
     * @param {number} value
     * private
     */
    _pushFullCharToBuffer(value: number): void;
    /**
     * A specialized version of {@link BitStringWriter._addBitsToBufferLastChar}.
     * Instead of modifying the last char, it pushes a new one and writes {@link value}
     * to its first bits.
     *
     * The last char of the buffer must NOT contain any free bits.
     *
     * @param {number} value
     * @param {number} bits
     * private
     */
    _pushPartCharToBuffer(value: number, bits: number): void;
    /**
     * An efficient way to add a single bit to the buffer.
     * @param {number} value
     * private
     */
    _writeBitNoChecks(value: number): void;
}
/**
 * The reader class. It is responsible for reading packed integers from a BitString.
 */
declare class BitStringReader {
    /**
     * Create a new {@link BitStringReader} instance from a base64-encoded string obtained
     * from a call to {@link BitStringWriter.toBase64}.
     *
     * @param {string} b64String
     * @returns {BitStringReader | undefined}
     */
    static fromBase64(b64String: string): BitStringReader | undefined;
    /**
     * Initialize the reader with a string obtained from calling
     * {@link BitStringWriter.toBitString} or similar methods.
     *
     * @param {string} bitString the input BitString.
     */
    constructor(bitString: string);
    /**
     * The current buffer, representing the input bit stream.
     * @type {string}
     * private
     */
    _buffer: string;
    /**
     * The index of the current char in the {@link BitStringReader._buffer}.
     *
     * Together with {@link BitStringReader._bitPosLastChar} it specifies the exact
     * bit position in the input bit stream.
     *
     * @type {number}
     * private
     */
    _charPos: number;
    /**
     * The amount of bits read from the current char. Always inside `[0; CHAR_BITS - 1]`.
     * @type {number}
     * private
     */
    _bitPosLastChar: number;
    /**
     * Reads an unsigned integer from the reader. Throws an *Invalid argument* error if
     * there is not enough data left to read full {@link bits} bits.
     *
     * If {@link bits} is zero, returns `0` and does not change the state, even if
     * {@link BitStringReader.overflown} is true.
     *
     * @param {number} bits a non-negative integer. The amount of bits to read.
     * @returns {number} a non-negative integer. The read value.
     * @throws {Error} if there is not enough bits to read, that is,
     * if {@link bits} `>` {@link BitStringReader.bitsAvailable}.
     */
    readUnsigned(bits: number): number;
    /**
     * Reads an unsigned integer from the reader. Returns `undefined` if
     * there is not enough data left to read full {@link bits} bits.
     *
     * If {@link bits} is zero, returns `0` and does not change the state, even if
     * {@link BitStringReader.overflown} is true.
     *
     * @param {number} bits a non-negative integer. The amount of bits to read.
     * @returns {number | undefined} a non-negative integer or `undefined`.
     * The read value or `undefined` if there is not enough data left to read the full {@link bits} bits.
     */
    tryReadUnsigned(bits: number): number | undefined;
    /**
     * Reads a signed integer from the reader. Throws an *Invalid argument* error if
     * there is not enough data left to read full {@link bits} bits.
     *
     * If {@link bits} is zero, returns `0` and does not change the state, even if
     * {@link BitStringReader.overflown} is true.
     *
     * @param {number} bits a non-negative integer. The amount of bits to read.
     * @returns {number} a signed integer. The read value.
     * @throws {Error} if there is not enough bits to read, that is,
     * if {@link bits} `>` {@link BitStringReader.bitsAvailable}.
     */
    readSigned(bits: number): number;
    /**
     * Reads a signed integer from the reader. Returns `undefined` if
     * there is not enough data left to read full {@link bits} bits.
     *
     * If {@link bits} is zero, returns `0` and does not change the state, even if
     * {@link BitStringReader.overflown} is true.
     *
     * @param {number} bits a non-negative integer. The amount of bits to read.
     * @returns {number | undefined} a signed integer or `undefined`.
     * The read value or `undefined` if there is not enough data left to read the full {@link bits} bits.
     */
    tryReadSigned(bits: number): number | undefined;
    /**
     * A helper function for efficient reading of a single bit.
     *
     * Behaves exactly like `readUnsigned(1)` but is more efficient.
     *
     * @returns {0 | 1} either `0` or `1`.
     * @throws {Error} if there is no more data available.
     */
    readBit(): 0 | 1;
    /**
     * A helper function for efficient reading of a single bit.
     *
     * Behaves exactly like `tryReadUnsigned(1)` but is more efficient.
     *
     * @returns {0 | 1 | undefined} either `0`, `1`, or `undefined`, the latter indicating
     * there is no more data to read.
     */
    tryReadBit(): 0 | 1 | undefined;
    /**
     * A helper function for efficient reading of a single bit.
     *
     * Behaves exactly like {@link BitStringReader.readBit}, but returns a boolean
     * value instead of a number.
     *
     * @returns {boolean}
     * @throws {Error} if there is no more data available.
     */
    readBool(): boolean;
    /**
     * A helper function for efficient reading of a single bit.
     *
     * Behaves exactly like {@link BitStringReader.tryReadBit}, but returns a boolean
     * value instead of a number.
     *
     * @returns {boolean | undefined} either the value of the bit, or `undefined`
     * if there is no more data to read.
     */
    tryReadBool(): boolean | undefined;
    /**
     * @returns {boolean} whether the current reader has any more data to read.
     */
    get overflown(): boolean;
    /**
     * @returns {number} the amount of bits in total that can be read from the current reader,
     * not including already read ones.
     */
    get bitsAvailable(): number;
    /**
     * Reads {@link bits} bits from the current char and returns them as an unsigned integer.
     *
     * The current char MUST contain at least {@link bits} unread bits.
     *
     * @param {number} bits
     * @returns {number}
     * private
     */
    _readBitsLastChar(bits: number): number;
    /**
     * Reads a full {@link _BitStringHelperInternal.CHAR_BITS}-bits unsigned integer
     * from the current char, and advances to the next one.
     *
     * Must only be called when {@link BitStringReader._bitPosLastChar} === 0.
     *
     * @returns {number}
     * private
     */
    _readFullChar(): number;
    /**
     * A faster way of reading a single bit.
     *
     * @returns {0 | 1 | undefined} 0, 1, or `undefined`, the latter indicating
     * there is no more data to read.
     * private
     */
    _tryReadBitFast(): 0 | 1 | undefined;
    /**
     * Advances the current bit position in the buffer.
     *
     * The resulting {@link BitStringReader._bitPosLastChar} after calling this function
     * always lies inside `[0; CHAR_BITS - 1]` range, meaning there is always at least one bit
     * to read in the current char, unless {@link BitStringReader._charPos} is >= the length
     * of {@link BitStringReader._buffer}, which indicates that there is no more data to read.
     *
     * @param {number} bits how many bits to advance.
     * private
     */
    _advanceBits(bits: number): void;
    /**
     * @returns {number} the amount of bits available for reading in the current char.
     * Always > 0, even if {@link BitStringReader.overflown} is `true`.
     * private
     */
    get _unreadBitsLastChar(): number;
}
