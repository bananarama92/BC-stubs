type WardrobeReorderType = "None" | "Select" | "Place";
type WardrobeActionPreview = "Load" | "Save";
type WardrobeFastLoadOptions = {
	/** Keep body from {@link WardrobeFastLoadOptions.BodyCharacter} and apply only clothes from the slot. Honored only when {@link Wardrobe.excludeBodyparts} is set. */
	ExcludeBodyparts?: boolean;
	/** Body source when excluding body parts; defaults to {@link Wardrobe.selectedCharacter}. */
	BodyCharacter?: Character;
	/** Restore facial expressions from this character after loading. Defaults to the player when `C` is the player. */
	ExpressionSource?: Character;
	/** Load this bundle instead of `Player.Wardrobe[W]`. */
	Appearance?: ItemBundle[];
};
