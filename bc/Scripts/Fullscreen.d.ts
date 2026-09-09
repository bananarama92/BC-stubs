/**
 * @typedef {Document & {
 *   webkitFullscreenElement?: Element | null,
 *   webkitExitFullscreen?: () => Promise<void>,
 * }} FullscreenDocument
 * @typedef {Element & { webkitRequestFullscreen?: () => Promise<void> }} FullscreenHost
 */
/**
 * Fullscreen toggle button.
 * @namespace
 */
declare var Fullscreen: {
    Init(): void;
    UpdateButton(): void;
};
type FullscreenDocument = Document & {
    webkitFullscreenElement?: Element | null;
    webkitExitFullscreen?: () => Promise<void>;
};
type FullscreenHost = Element & {
    webkitRequestFullscreen?: () => Promise<void>;
};
