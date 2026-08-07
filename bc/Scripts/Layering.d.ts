/**
 * Namespace with functions for managing the layering sub screen
 *
 * Below is an example of some basic usage of the {@link Layering} subscreen,
 * including a `Click` function for initializing the screen and a set of
 * `Resize` and `Exit` functions for, respectively, handling the screens
 * drawing/resizing and exiting
 *
 * @namespace
 * @example
 *
 * let FancyScreenMode: "default" | "layering" = "default";
 *
 * // Make sure the fancy screen mode is changed back to its default upon exiting the layering subscreen
 * Layering.RegisterExitCallbacks({
 *     screen: "FancyScreen",
 *     callback: () => FancyScreenMode = "default",
 * });
 *
 * function FancyScreenClick() {
 *     const C: Character;
 *     const item: Item;
 *     switch (FancyScreenMode) {
 *         case "default": {
 *             if Mousein(...) {
 *                 FancyScreenMode = "layering";
 *                 Layering.Init(C, item);
 *             }
 *             return;
 *         }
 *     }
 * }
 *
 * function FancyScreenResize(load) {
 *     switch (FancyScreenMode) {
 *         case "layering":
 *             Layering.Resize(load);
 *             return;
 *     }
 * }
 *
 * function FancyScreenExit() {
 *     switch (FancyScreenMode) {
 *         case "layering":
 *             Layering.Exit();
 *             return;
 *     }
 * }
 */
declare var Layering: any;
