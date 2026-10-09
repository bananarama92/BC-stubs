declare namespace ItemProperty {
	/** Validation output status */
	type ValidationStatus = (
		"criticalError"		// Unrecoverable validation error; value discarded
		| "error" 			// Required a fixup, but ok after
		| "ok" 				// All is ok 👌
	);

	/** Validation output for single-property validation */
	type ValidationOutput<T> = (
		{ status: Extract<ValidationStatus, "criticalError">, value?: undefined, errorDescription: string }
		| { status: Extract<ValidationStatus, "error">, value: T, errorDescription: string }
		| { status: Extract<ValidationStatus, "ok">, value: T, errorDescription?: undefined }
	)

	/** Validation output for multi-property validation */
	interface ValidationMultiOutput {
		/** The validated property values */
		value: ItemProperties;
		/** The validation status */
		status: ValidationStatus;
		/** Custom, human-readable description for error statuses */
		errorDescriptions: Partial<Record<keyof ItemProperties, string>>;
	}

	/** All allowed property-specific metadata keys */
	export interface MetaData {
		/** Minimum value of numeric properties. Must be larger than or equal to `-2**15`. */
		min?: number,
		/** Maximum value of numeric properties. Must be smaller than or equal to `2**15 - 1`. */
		max?: number,
		/**
		 * Whether the numeric value represents an integer
		 * @default true
		 */
		isInteger?: boolean,
		/** Default value of numeric properties */
		defaultNumber?: number,
	}

	type MetaDataTemplate<T> = { [k in keyof T]: MetaData };

	/** Item property specific metadata keys */
	export interface PropertyMetaData extends MetaDataTemplate<ItemProperties> {
		LayerScaleX: Mandatory<MetaData, "min" | "max" | "defaultNumber" | "isInteger">;
		LayerScaleY: Mandatory<MetaData, "min" | "max" | "defaultNumber" | "isInteger">;
		LayerTranslationX: Mandatory<MetaData, "min" | "max"  | "defaultNumber">;
		LayerTranslationY: Mandatory<MetaData, "min" | "max" | "defaultNumber">;
		LayerRotation: Mandatory<MetaData, "min" | "max" | "defaultNumber">;
	}

	export type DataBundle = { asset: Asset, C?: Character };

	/**
	 * An interface representing constructor input for the {@link PropertyDataEntry} class.
	 */
	export interface Entry<T extends keyof ItemProperties> {
		/**
		 * Property compression function
		 * @param property The item property value
		 * @param itemData The asset
		 * @param defaults The default value of the property (if any)
		 * @returns The compressed property
		 */
		readonly compress?: (
			this: PropertyDataEntry<T>,
			property: NonNullable<ItemProperties[T]>,
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
			property: NonNullable<ItemProperties[T] | ItemPropertiesMinimized[T]>,
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
			properties: readonly [p0: NonNullable<ItemProperties[T]>, ...pN: NonNullable<ItemProperties[T]>[]],
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
			properties: readonly [p0: NonNullable<ItemProperties[T]>, p1: NonNullable<ItemProperties[T]>, ...pN: NonNullable<ItemProperties[T]>[]],
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
			prop1: NonNullable<ItemProperties[T]>,
			prop2: NonNullable<ItemProperties[T]>,
			itemData: DataBundle,
		) => boolean;
		/**
		 * Property validation function
		 * @param prop The property
		 * @param itemData The asset
		 * @param defaults The default value of the property (if any)
		 * @returns The validated property, validation status and an optional error message
		 */
		readonly validate?: (
			this: PropertyDataEntry<T>,
			prop: NonNullable<ItemProperties[T]>,
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
			subProp: NonNullable<ItemProperties[T]>,
			superProp: NonNullable<ItemProperties[T]>,
			itemData: DataBundle,
		) => boolean;
		/**
		 * Property-specific meta data (_e.g._ minimum and maximum values)
		 */
		readonly metaData: Readonly<PropertyMetaData[T]>;
	}

	export type Compress<T extends keyof ItemProperties> = NonNullable<Entry<T>["compress"]>;
	export type Decompress<T extends keyof ItemProperties> = NonNullable<Entry<T>["decompress"]>;
	export type Union<T extends keyof ItemProperties> = NonNullable<Entry<T>["union"]>;
	export type Difference<T extends keyof ItemProperties> = NonNullable<Entry<T>["difference"]>;
	export type Compare<T extends keyof ItemProperties> = NonNullable<Entry<T>["compare"]>;
	export type Validate<T extends keyof ItemProperties> = NonNullable<Entry<T>["validate"]>;
	export type IsSubset<T extends keyof ItemProperties> = NonNullable<Entry<T>["isSubset"]>;

	/**
	 * An interface representing the {@link PropertyDataEntry} class.
	 *
	 * Compared to {@link Entry} function parameter types are generally a bit broader, being able to handle a wider range of nullish values
	 */
	export interface EntryNullable<T extends keyof ItemProperties> extends Unknown<Entry<T>> {
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
		readonly metaData: Readonly<NonNullable<PropertyMetaData[T]>>;
	}
}
