declare namespace ItemProperty {
	/** Validation output status */
	type ValidationStatus = (
		"criticalError"		// Unrecoverable validation error, _i.e._ discarding of a value
		| "error" 			// Recoverable validation error, _i.e._ fixup of a value
		| "ok" 				// All is ok 👌
	);

	// NOTE: Error description list entries are intended exclusively for human readability. They must be JSON-safe, and that's about all that is required (type-wise).
	/** Validation output for single-property validation */
	type ValidationOutput<T> = (
		{ status: Extract<ValidationStatus, "criticalError">, value?: undefined, errorDescription: unknown[], errorTags?: undefined }
		| { status: Extract<ValidationStatus, "error">, value: T, errorDescription: unknown[], errorTags?: undefined }
		| { status: Extract<ValidationStatus, "ok">, value: T, errorDescription?: undefined, errorTags?: undefined }
	)

	/** Validation output for multi-property validation */
	interface ValidationMultiOutput {
		/** The validated property values */
		value: ItemProperties;
		/** The validation status */
		status: ValidationStatus;
		/** Custom, human-readable description for error statuses */
		errorDescriptions: Partial<Record<keyof ItemProperties, unknown>>;
		/**
		 * Not implemented.
		 *
		 * Consider adding if programatic (as opposed to human-readable) info about validation errors is desired.
		 */
		errorTags?: Partial<Record<keyof ItemProperties, never>>;
	}

	// Voodoo for transforming an item property into a set thereof, including handling of arrays and objects
	type ValueSet<T extends keyof ItemProperties> = (
		Required<ItemProperties>[T] extends ScalarType
			? ReadonlySet<Required<ItemProperties>[T]>								// A: Scalar to Set<Scalar>
			: Required<ItemProperties>[T] extends readonly ScalarType[]
				? ReadonlySet<Required<ItemProperties>[T][number]> 					// B: Scalar[] to Set<Scalar>
				: Required<ItemProperties>[T] extends Readonly<Partial<Record<string, ScalarType>>>
					? ReadonlySet<NonNullable<Required<ItemProperties>[T][string]>>	// C: Record<string, Scalar> to Set<Scalar>
					: ReadonlySet<never>
	);

	interface _MetaData<T extends keyof ItemProperties> {
		/** Minimum value of numeric properties. */
		readonly min?: number,
		/** Maximum value of numeric properties. */
		readonly max?: number,
		/** The minimum length of a sized object (array, string, set, _etc._) */
		readonly minLength?: number;
		/** The maximum length of a sized object (array, string, set, _etc._) */
		readonly maxLength?: number;
		/**
		 * Whether the numeric value represents an integer
		 * @default true
		 */
		readonly isInteger?: boolean,
		/** Default value of numeric properties */
		readonly defaultNumber?: number,
		/** A regex pattern for validation string properties */
		readonly valuePattern?: RegExp;
		readonly isColor?: boolean;
		readonly colorSchema?: ReadonlySet<BCColor>;
		/**
		 * A set of all valid property values.
		 * Should only be used when dealing with a set of literal scalars, an array therof or an object thereof
		 */
		readonly valueSet?: ValueSet<T>;
	}

	// Expand with private, `_`-prefixed properties that can be used as cache for lazy property loading
	/** All allowed property-specific metadata keys */
	type MetaData<T extends keyof ItemProperties> = Prettify<
		_MetaData<T>
		& { -readonly [k in keyof _MetaData<T> as `_${k}`]: _MetaData<T>[k] }
	>;

	interface MetaData2<T extends ScalarType> extends MetaData<any> {
		name: string;
		readonly valueSet?: ReadonlySet<T>;
	}

	// Voodoo for determining whether
	type Extract2<K extends keyof ItemProperties, ValidatorType> = (
		Required<ItemProperties>[K] extends ValidatorType
			? Required<ItemProperties>[K]
			: Extract<ItemProperties[K], ValidatorType>
	);

	type MetaDataTemplate = { [k in keyof ItemProperties]: MetaData<k> };


	/** Item property specific metadata keys */
	interface PropertyMetaData extends MetaDataTemplate {
		LayerScaleX: Mandatory<MetaData<"LayerScaleX">, "min" | "max" | "defaultNumber" | "isInteger">;
		LayerScaleY: Mandatory<MetaData<"LayerScaleY">, "min" | "max" | "defaultNumber" | "isInteger">;
		LayerTranslationX: Mandatory<MetaData<"LayerTranslationX">, "min" | "max"  | "defaultNumber">;
		LayerTranslationY: Mandatory<MetaData<"LayerTranslationY">, "min" | "max" | "defaultNumber">;
		LayerRotation: Mandatory<MetaData<"LayerRotation">, "min" | "max" | "defaultNumber">;
	}

	type DataBundle = { asset: Asset, C?: Character };

	/**
	 * An interface representing constructor input for the {@link PropertyDataEntry} class.
	 */
	interface Entry<T extends keyof ItemProperties> {
		/**
		 * Property compression function
		 * @param property The item property value
		 * @param itemData The asset
		 * @param defaults The default value of the property (if any)
		 * @returns The compressed property
		 */
		readonly compress?: (
			this: PropertyDataEntry<T>,
			property: Required<ItemProperties>[T],
			itemData: DataBundle,
			defaults?: ItemProperties[T],
		) => undefined | ItemPropertiesMinimized;
		/**
		 * Property decompression function
		 * @param property The item property value. This property value _should_ be compressed though decompressed value _must_ be handled correctly.
		 * @param itemData The asset
		 * @returns The decompressed property
		 */
		readonly decompress?: (
			this: PropertyDataEntry<T>,
			property: Required<ItemProperties>[T] | Required<ItemPropertiesMinimized>[T],
			itemData: DataBundle,
		) => undefined | ItemProperties;
		/**
		 * Property merging function
		 * @param properties The to-be merged property values; guaranteed to contain at least one element
		 * @param itemData The asset
		 * @returns The merged property
		 */
		readonly union?: (
			this: PropertyDataEntry<T>,
			properties: readonly [p0: Required<ItemProperties>[T], ...pN: Required<ItemProperties>[T][]],
			itemData: DataBundle,
		) => undefined | ItemProperties[T];
		/**
		 * Property difference function
		 * @param properties The to-be subtracted property values; guaranteed to contain at least one element
		 * @param itemData The asset
		 * @returns The differenced property
		 */
		readonly difference?: (
			this: PropertyDataEntry<T>,
			properties: readonly [p0: Required<ItemProperties>[T], p1: Required<ItemProperties>[T], ...pN: Required<ItemProperties>[T][]],
			itemData: DataBundle,
		) => undefined | ItemProperties[T];
		/**
		 * Property comparison function
		 * @param prop1 The first to-be compared property
		 * @param prop2 The second to-be compared property
		 * @param itemData The asset
		 * @returns whether both properties are equivalent
		 */
		readonly compare?: (
			this: PropertyDataEntry<T>,
			prop1: Required<ItemProperties>[T],
			prop2: Required<ItemProperties>[T],
			itemData: DataBundle,
		) => boolean;
		/**
		 * Property validation function
		 * @param prop The property
		 * @param itemData The asset
		 * @param defaults The default value of the property (if any)
		 * @returns The validated property, validation status and an optional error message
		 */
		readonly validate: (
			this: PropertyDataEntry<T>,
			prop: Required<ItemProperties>[T],
			itemData: DataBundle,
			defaults?: ItemProperties[T],
		) => ValidationOutput<ItemProperties[T]>;
		/**
		 * Check whether an object is a (deep) subset of, or equivalent to, another (_i.e._ a non-proper subset)
		 * @param subProp The first to-be compared property
		 * @param superProp The second to-be compared property
		 * @param itemData The asset
		 * @returns whether both properties are equivalent or form a subset
		 */
		readonly isSubset?: (
			this: PropertyDataEntry<T>,
			subProp: Required<ItemProperties>[T],
			superProp: Required<ItemProperties>[T],
			itemData: DataBundle,
		) => boolean;
		/**
		 * Property-specific meta data (_e.g._ minimum and maximum values)
		 */
		readonly metaData?: PropertyMetaData[T];
	}

	type Compress<T extends keyof ItemProperties> = Required<Entry<T>>["compress"];
	type Decompress<T extends keyof ItemProperties> = Required<Entry<T>>["decompress"];
	type Union<T extends keyof ItemProperties> = Required<Entry<T>>["union"];
	type Difference<T extends keyof ItemProperties> = Required<Entry<T>>["difference"];
	type Compare<T extends keyof ItemProperties> = Required<Entry<T>>["compare"];
	type Validate<T extends keyof ItemProperties> = Required<Entry<T>>["validate"];
	type IsSubset<T extends keyof ItemProperties> = Required<Entry<T>>["isSubset"];

	/**
	 * An interface representing the {@link PropertyDataEntry} class.
	 *
	 * Compared to {@link Entry} function parameter types are generally a bit broader, being able to handle a wider range of nullish values
	 */
	interface EntryNullable<T extends keyof ItemProperties> extends Unknown<Entry<T>> {
		readonly compress: (
			this: PropertyDataEntry<T>,
			property: ItemProperties[T],
			itemData: DataBundle,
			defaults?: ItemProperties[T],
		) => ItemPropertiesMinimized;
		readonly decompress: (
			this: PropertyDataEntry<T>,
			property: ItemProperties[T] | ItemPropertiesMinimized[T],
			itemData: DataBundle,
		) => ItemProperties;
		/**
		 * Property merging function
		 * @param properties The to-be merged property values
		 * @param itemData The asset
		 * @returns The merged property
		 */
		readonly union: (
			this: PropertyDataEntry<T>,
			properties: readonly ItemProperties[T][],
			itemData: DataBundle,
		) => undefined | ItemProperties[T];
		/**
		 * Property difference function
		 * @param properties The to-be merged property values
		 * @param itemData The asset
		 * @returns The differenced property
		 */
		readonly difference: (
			this: PropertyDataEntry<T>,
			properties: readonly ItemProperties[T][],
			itemData: DataBundle,
		) => undefined | ItemProperties[T];
		readonly compare: (
			this: PropertyDataEntry<T>,
			prop1: ItemProperties[T],
			prop2: ItemProperties[T],
			itemData: DataBundle,
		) => boolean;
		readonly validate: (
			this: PropertyDataEntry<T>,
			prop: ItemProperties[T],
			itemData: DataBundle,
			defaults?: ItemProperties[T],
		) => ItemProperty.ValidationOutput<ItemProperties[T]>;
		readonly isSubset: (
			this: PropertyDataEntry<T>,
			subProp: ItemProperties[T],
			superProp: ItemProperties[T],
			itemData: DataBundle,
		) => boolean;
		readonly metaData: Required<PropertyMetaData>[T];
	}
}
