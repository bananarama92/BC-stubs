/**
 * See {@link ToastManager}
 * private
 */
declare class _ToastManager {
    #private;
    /**
     * Queue of toast options waiting to be displayed.
     * @type {Required<Toasts.Options>[]}
     */
    queue: Required<Toasts.Options>[];
    /**
     * Tracks the number of active (visible) toasts.
     * @type {number}
     */
    active: number;
    /**
     * Maximum number of toast buddies that can chill together in one spot.
     * @type {number}
     * @static
     */
    maxStack: number;
    /**
     * Show an info toast, because you need to know stuff.
     *
     * @param {string | Element | readonly (string | Element)[]} msg - Text content of the toast.
     * @param {Omit<Toasts.Options, 'message' | 'type'>} [opts] - Other toast options.
     */
    info(msg: string | Element | readonly (string | Element)[], opts?: Omit<Toasts.Options, 'message' | 'type'>): void;
    /**
     * Show a success toast. It's time to celebrate! 🎉
     *
     * @param {string | Element | readonly (string | Element)[]} msg - Text content of the toast.
     * @param {Omit<Toasts.Options, 'message' | 'type'>} [opts] - Other toast options.
     */
    success(msg: string | Element | readonly (string | Element)[], opts?: Omit<Toasts.Options, 'message' | 'type'>): void;
    /**
     * Show a warning toast. Watch out, things might explode!
     *
     * @param {string | Element | readonly (string | Element)[]} msg - Text content of the toast.
     * @param {Omit<Toasts.Options, 'message' | 'type'>} [opts] - Other toast options.
     */
    warning(msg: string | Element | readonly (string | Element)[], opts?: Omit<Toasts.Options, 'message' | 'type'>): void;
    /**
     * Show an error toast. Oh noes, something broke.
     *
     * @param {string | Element | readonly (string | Element)[]} msg - Text content of the toast.
     * @param {Omit<Toasts.Options, 'message' | 'type'>} [opts] - Other toast options.
     */
    error(msg: string | Element | readonly (string | Element)[], opts?: Omit<Toasts.Options, 'message' | 'type'>): void;
    /**
     * Show a custom toast, because you're special.
     *
     * @param {string | Element | readonly (string | Element)[]} msg - Text content of the toast.
     * @param {Toasts.Type} type - Custom type string or one of the predefined types.
     * @param {Omit<Toasts.Options, 'message' | 'type'>} [opts] - Other toast options.
     */
    custom(msg: string | Element | readonly (string | Element)[], type: Toasts.Type, opts?: Omit<Toasts.Options, 'message' | 'type'>): void;
    /**
     * Kick out every single visible toast regardless of type.
     *
     * @returns {void}
     */
    dismissAll(): void;
    /**
     * Kicks out all toasts of a particular style.
     *
     * @param {Toasts.Type} type - The type of toasts to dismiss (e.g., 'info', 'error').
     * @returns {void}
     */
    dismissByType(type: Toasts.Type): void;
    /**
     * Kicks out all toasts of a category.
     *
     * @param {string} category - The type of toasts to dismiss (e.g., 'info', 'error').
     * @returns {void}
     */
    dismissByCategory(category: string): void;
}
/**
 * Manages the display and lifecycle of toast notifications.
 * Maintains a queue of toasts to display and limits the number of
 * concurrently visible toasts.
 */
declare var ToastManager: _ToastManager;
