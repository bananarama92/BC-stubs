/**
 * The main BC image cache.
 *
 * Each instance stores a caller-chosen payload in memory (ImageBitmap for 2D,
 * WebGLTextureData for GL) and is backed by the browser Cache API
 * (bc-images-v1 is the cache name).
 *
 * It bypasses the /R\d+/ version slug in the BC urls so that files can be
 * kept around even if the URL changes every release; only their mtime matters.
 *
 * The stored images are also kept on disk: a hit is returned immediately, but
 * will get revalidated and swapped in in the background; a 304 status keeps the
 * entry; a 200 replaces it and the in-memory payload is rebuilt.
 *
 * When the Cache API isn't available, `browserCache` stays unset and fetches fall
 * through to CommonFetch as usual.
 */
/**
 * What state is the image in.
 *
 * - UNCACHED (initial) -> LOADING
 * - LOADING -> LOADED (final)
 * - LOADING -> FAILED (final)
 *
 * @enum {string}
 */
declare var CachedImageState: {
    /** Image is known, but not yet cached */
    UNCACHED: string;
    /** Image is currently being loaded */
    LOADING: string;
    /** Image is available in cache */
    LOADED: string;
    /** Image couldn't be cached */
    FAILED: string;
};
/**
 * Cached image data
 * @template {{ width: number, height: number }} T
 */
declare class CachedImage<T extends {
    width: number;
    height: number;
}> {
    /**
     * Only used to inform the cache of loading progress
     * @type {ImageCache<T>}
     * private
     */
    cache: ImageCache<T>;
    /** @type {string} */
    url: string;
    /** @type {string} */
    state: string;
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
     * Create a new cached image.
     *
     * @param {ImageCache<T>} cache - The cache holding the image
     * @param {string} url - The URL for the image to cache
     */
    constructor(cache: ImageCache<T>, url: string);
    /**
     * Load the cached image if it's not already available.
     *
     * Reports its outcome through the state, and never rejects.
     * @param {Error} [errCause] - An error object the be attached as cause for failed fetch responses. Used primarily for extending the traceback
     */
    _load(errCause?: Error): Promise<void>;
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
     * @param {undefined | Error} errCause - An error object the be attached as cause for failed fetch responses. Used primarily for extending the traceback
     * @returns {Promise<Blob>}
     * private
     */
    _fetch(generation: number, errCause?: undefined | Error): Promise<Blob>;
    /**
     * Does this response carry an image media type?
     *
     * @param {Response} response
     * @returns {boolean}
     * private
     */
    _isImage(response: Response): boolean;
    /**
     * Ensure a response carries an image media type.
     *
     * @param {Response} response
     * @param {undefined | Error} [errCause]
     * @returns {void}
     * private
     */
    _assertImage(response: Response, errCause?: undefined | Error): void;
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
 * Persistent browser-level Cache store.
 *
 * What it keeps depends only on the URL and the response's caching headers.
 * Callers decide whether a stored body is one they can use, and delete it
 * themselves when it is not.
 */
declare class BrowserCache {
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
     * Revalidations still in flight, so a second hit can wait on them.
     * @type {Map<string, Promise<Response | null>>}
     * private
     */
    _revalidating: Map<string, Promise<Response | null>>;
    /**
     * Origins this store will keep. Unset means any http(s) URL.
     * @type {Set<string> | null}
     * private
     */
    _origins: Set<string> | null;
    /**
     * @param {Cache} cache
     * @param {string} name
     * @param {string[] | undefined} origins
     * private
     */
    constructor(cache: Cache, name: string, origins: string[] | undefined);
    /**
     * Open the named bucket.
     *
     * @param {string[]} [origins] When set, only these origins are stored. Entries from anywhere else are removed.
     * @returns {Promise<BrowserCache>}
     */
    static open(origins?: string[]): Promise<BrowserCache>;
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
     * Get the cache control directives from a response.
     *
     * @param {Response} response
     * @returns {Map<string, string | null>}
     * private
     */
    _cacheDirectives(response: Response): Map<string, string | null>;
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
     * Check if a given URL can be cached.
     * @param {string} url
     * @returns {boolean}
     * private
     */
    _isCacheable(url: string): boolean;
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
     * The response stored for this URL, if there is one.
     *
     * @param {string} url
     * @returns {Promise<Response | undefined>}
     */
    match(url: string): Promise<Response | undefined>;
    /**
     * Ask the server whether a stored response is still current.
     *
     * Runs at most once per key per session. Resolves with the fresh storable
     * response, or null when the stored one stands.
     *
     * @param {string} url
     * @param {Response} cached
     * @returns {Promise<Response | null>}
     */
    revalidate(url: string, cached: Response): Promise<Response | null>;
    /**
     * Keep a response when it is allowed to be stored.
     *
     * @param {string} url
     * @param {Response} response
     * @returns {Promise<void>}
     */
    put(url: string, response: Response): Promise<void>;
    /**
     * Remove the stored response for a URL.
     *
     * The entry's caching directives are not consulted.
     *
     * @param {string} url
     * @returns {Promise<boolean>} Whether an entry was removed
     */
    delete(url: string): Promise<boolean>;
    /**
     * Remove one cache key. An in-flight revalidation of that key is left
     * to finish; forgetting it here would let a second request start.
     *
     * @param {string} key
     * @returns {Promise<boolean>}
     * private
     */
    _remove(key: string): Promise<boolean>;
    /**
     * Remove stored entries this store is not allowed to keep.
     * @returns {Promise<void>}
     */
    purge(): Promise<void>;
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
     * @param {string} name
     * @param {BrowserCache | null} browserCache
     * @param {ImageCache.Options<T>} options How to turn bytes into a payload, and how to free it
     */
    constructor(name: string, browserCache: BrowserCache | null, options: ImageCache.Options<T>);
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
     * @param {boolean} force
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
