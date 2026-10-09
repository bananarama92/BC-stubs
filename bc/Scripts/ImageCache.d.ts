/**
 * What state is the image in.
 *
 * - UNCACHED (initial) -> LOADING
 * - LOADING -> LOADED (final)
 * - LOADING -> FAILED (final)
 */
type CachedImageState = string;
declare namespace CachedImageState {
    let UNCACHED: string;
    let LOADING: string;
    let LOADED: string;
    let FAILED: string;
}
/**
 * Cached image data
 * @template {{ width: number, height: number }} T
 */
declare class CachedImage<T extends {
    width: number;
    height: number;
}> {
    /**
     * Create a new cached image.
     *
     * @param {ImageCache<T>} cache - The cache holding the image
     * @param {string} url - The URL for the image to cache
     */
    constructor(cache: ImageCache<T>, url: string);
    /**
     * Only used to inform the cache of loading progress
     * @type {ImageCache<T>}
     * private
     */
    cache: ImageCache<T>;
    /** @type {string} */
    url: string;
    /** @type {CachedImageState} */
    state: CachedImageState;
    /**
     * The decoded payload; `null` until decoding completes.
     * @type {T | null}
     */
    data: T | null;
    /** @type {number} */
    lastUsed: number;
    /**
     * Bumped on every unload so that in-flight asynchronous work knows its
     * result is no longer wanted.
     * @type {number}
     * private
     */
    _generation: number;
    /**
     * Load the cached image if it's not already available.
     *
     * Reports its outcome through the state, and never rejects.
     */
    _load(): Promise<void>;
    /**
     * Unload the image from the cache
     */
    unload(): void;
    /**
     * Release the stored payload, if any.
     * private
     */
    _dispose(): void;
    /**
     * Fetch the raw bytes of the image.
     *
     * @param {number} generation - The generation the fetch belongs to
     * @returns {Promise<Blob>}
     * private
     */
    _fetch(generation: number): Promise<Blob>;
    /**
     * Decode fetched bytes into the cache's payload.
     *
     * If this entry was unloaded while decoding, the result is disposed and
     * `null` is returned.
     *
     * @param {Blob} blob - The image bytes
     * @param {number} generation - The generation the decode belongs to
     * @returns {Promise<T | null>}
     * private
     */
    _decode(blob: Blob, generation: number): Promise<T | null>;
    /**
     * Swap in a newer version of the image found by a background revalidation.
     *
     * Behaves like an unload immediately followed by a load, so that anything
     * derived from the old payload is rebuilt.
     *
     * @param {number} generation - The generation of the load that got updated
     * @param {Response} response - The fresh response
     * @returns {Promise<void>}
     * private
     */
    _update(generation: number, response: Response): Promise<void>;
    /**
     * Is the image an asset image?
     * @returns {boolean}
     */
    isAsset(): boolean;
    /**
     * Is the image currently being loaded?
     */
    isLoading(): boolean;
    /**
     * Is the image loading complete (either succesfully or not)?
     */
    isDoneLoading(): boolean;
    /**
     * Is the image experiencing problems loading?
     */
    isFailing(): boolean;
    /**
     * Is the image loaded and ready?
     *
     * When this is true, `data` is available.
     * @returns {this is LoadedCachedImage<T>}
     */
    isLoaded(): this is LoadedCachedImage<T>;
    get complete(): boolean;
    /**
     * Get the image's width
     * @returns {number}
     */
    get width(): number;
    /**
     * Get the image's height
     * @returns {number}
     */
    get height(): number;
}
/**
 * Persistent browser-level Cache store for images.
 */
declare class BrowserCache {
    /**
     * Open the named bucket.
     * @returns {Promise<BrowserCache>}
     */
    static open(): Promise<BrowserCache>;
    /**
     * @param {Cache} cache
     * @param {string} name
     * private
     */
    constructor(cache: Cache, name: string);
    /**
     * Name of the Cache bucket. Bump only if what's stored in it
     * changes shape.
     * @type {string}
     */
    name: string;
    /**
     * The opened Cache.
     * @type {Cache}
     */
    cache: Cache;
    /**
     * Matches the release directory at the start of a resource path, e.g. the
     * `/R123/` in `/R123/Game/Assets/...`.
     * @type {RegExp}
     * private
     */
    _releasePattern: RegExp;
    /**
     * Keys that have been revalidated this session.
     * @type {Set<string>}
     * private
     */
    _revalidated: Set<string>;
    /**
     * Compute the key an image URL is stored under.
     *
     * The R$VERSION directory, query string and fragment are dropped, so that the
     * same file can be reused across versions, assuming its mtime doesn't change.
     *
     * @param {string} url
     * @returns {string}
     */
    key(url: string): string;
    /**
     * Can this response go in the store?
     *
     * Only complete, successful, readable responses are worth keeping. Opaque
     * ones have a status of 0, so they're excluded by the status check.
     *
     * @param {Response} response
     * @returns {boolean}
     * private
     */
    _isStorable(response: Response): boolean;
    /**
     * Store a response into the cache.
     *
     * @param {string} key The cache key of the resource
     * @param {Response} response - The response to store.
     * @returns {Promise<boolean>} Whether the response was stored.
     * private
     */
    _put(key: string, response: Response): Promise<boolean>;
    /**
     * Check with the server whether a stored image is still current.
     *
     * Runs at most once per key per session.
     *
     * @param {string} key - The cache key of the resource
     * @param {string} url - The URL to revalidate against
     * @param {Response} cached - The response we currently hold
     * @param {BrowserCache.FetchOptions} options
     * @returns {void}
     * private
     */
    _revalidate(key: string, url: string, cached: Response, options: BrowserCache.FetchOptions): void;
    /**
     * Fetch an image, through the persistent store when possible.
     *
     * @param {string} url - The URL of the image
     * @param {BrowserCache.FetchOptions} [options]
     * @returns {Promise<Response>}
     */
    fetch(url: string, options?: BrowserCache.FetchOptions): Promise<Response>;
    /**
     * Throw the whole persistent store away and open a fresh bucket.
     * @returns {Promise<boolean>} Whether there was a store to delete
     */
    clear(): Promise<boolean>;
}
/**
 * The delay between each cache purge event, in milliseconds.
 *
 * When the cache purges, this value is halved, and used to find any assets that
 * haven't been used. Those are the ones that will be removed.
 */
declare var ImageCachePurgeDelay: number;
/**
 * The class responsible for loading and caching images
 * @template {{ width: number, height: number }} T
 */
declare class ImageCache<T extends {
    width: number;
    height: number;
}> {
    /**
     * @param {string} name
     * @param {BrowserCache | null} browserCache
     * @param {ImageCache.Options<T>} options How to turn bytes into a payload, and how to free it
     */
    constructor(name: string, browserCache: BrowserCache | null, options: ImageCache.Options<T>);
    /** @type {Map<string, CachedImage<T>>} */
    cache: Map<string, CachedImage<T>>;
    name: string;
    lastPurge: number;
    /**
     * Persistent byte store, or null if the Cache API isn't usable.
     * @type {BrowserCache | null}
     */
    browserCache: BrowserCache | null;
    /** @type {(blob: Blob) => T | Promise<T>} */
    _decode: (blob: Blob) => T | Promise<T>;
    /** @type {((data: T) => void) | undefined} */
    _dispose: ((data: T) => void) | undefined;
    /**
     * Check whether an image is in the cache
     *
     * @param {string} url - The URL of the image to lookup
     */
    has(url: string): boolean;
    /**
     * Get a cached image from the cache.
     *
     * @param {string} url - The URL of the image to lookup
     * @returns {CachedImage<T>} The cached image
     */
    get(url: string): CachedImage<T>;
    /**
     * Remove a cached image by its URL.
     * @param {string} url - The URL of the image to delete
     */
    delete(url: string): void;
    /**
     * Iterate over all cached images
     * @param {(img: CachedImage<T>, key: string, map: Map<string, CachedImage<T>>) => void} callback - The callback to call on each (URL, image) pair
     */
    forEach(callback: (img: CachedImage<T>, key: string, map: Map<string, CachedImage<T>>) => void): void;
    /**
     * Clear all cached images
     */
    clear(): void;
    /**
     * Private function called when an image state changes.
     *
     * @param {CachedImage<T>} image - The image whose state changed
     */
    _imageStateDidChange(image: CachedImage<T>): void;
    /**
     * Given an image, refresh all characters that would be impacted by its load
     *
     * @param {CachedImage<T>} img
     * @returns {void}
     */
    _refreshCharactersForImage(img: CachedImage<T>): void;
    /**
     * Purge all images errored or not used in the last half-purge delay
     */
    purge(force?: boolean): void;
    /**
     * Output some stats about the cache
     */
    stats(): void;
    /**
     * Get the count of cached images.
     */
    totalImages(): number;
}
declare var CachedImageClass: typeof CachedImage;
declare var BrowserCacheClass: typeof BrowserCache;
declare var ImageCacheClass: typeof ImageCache;
