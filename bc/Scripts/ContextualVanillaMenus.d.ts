/** @type {{ [K in keyof ContextualMenu.ContextMap]?: (contextData: ContextualMenu.ContextMap[K]) => ContextualMenu.Item[] }} */
declare var ContextualVanillaMenus: { [K in keyof ContextualMenu.ContextMap]?: (contextData: ContextualMenu.ContextMap[K]) => ContextualMenu.Item[]; };
