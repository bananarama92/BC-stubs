/**
 * Create a synthetic mouse event for touch triggers.
 * @param {number} clientX
 * @param {number} clientY
 * @returns {PointerEvent}
 */
declare function ContextualMenuCreateSyntheticMouseEvent(clientX: number, clientY: number): PointerEvent;
/**
 * Contextual menu system with plugin support.
 * Plugins may only add items or submenus; separators are system-managed.
 */
declare class ContextualMenuManagerImpl {
    #private;
    /**
     * @template {ContextualMenu.ContextKey} K
     * @param {K} contextType
     * @param {ContextualMenu.ContextMap[K]} contextData
     * @param {ContextualMenu.ShowOptions} [options]
     * @returns {boolean}
     */
    show<K extends ContextualMenu.ContextKey>(contextType: K, contextData: ContextualMenu.ContextMap[K], options?: ContextualMenu.ShowOptions): boolean;
    /**
     * Register a plugin to manage contextual menu items.
     * @param {string} pluginId
     * @param {string} displayName
     * @returns {ContextualMenu.PluginAPI | null}
     */
    registerPlugin(pluginId: string, displayName: string): ContextualMenu.PluginAPI | null;
    /**
     * @returns {boolean} - `true` when the custom menu is on screen
     */
    isOpen(): boolean;
    /**
     * Open from a canvas right-click, and keep the browser menu from replacing a custom one.
     * Shift-click leaves the browser menu alone. A long-press opens before the browser event; that event is swallowed.
     * @param {MouseEvent} event
     * @returns {void}
     */
    handleContextMenu(event: MouseEvent): void;
    /**
     * Handle touch start for long-press support.
     * @param {TouchEvent} event
     */
    handleTouchStart(event: TouchEvent): void;
    /**
     * Handle touch move to cancel long-press if moved too far.
     * @param {TouchEvent} event
     */
    handleTouchMove(event: TouchEvent): void;
    /**
     * Handle touch end; returns true if click should be suppressed.
     * @param {TouchEvent} event
     * @returns {boolean}
     */
    handleTouchEnd(event: TouchEvent): boolean;
}
declare var ContextualMenu: ContextualMenuManagerImpl;
