declare function RhythmGameLoad(): Promise<void>;
/**
 * Runs and draws the canvas for the rythm mini game. The game uses objects to handle various processes.
 * @returns {void} - Nothing
 */
declare function RhythmGameRun(): void;
/**
 * Handles the clicks in the rhythm mini-game.
 * @returns {void} - Nothing
 */
declare function RhythmGameClick(): void;
declare var RhythmGameBackground: string;
declare let RhythmGameBeatmap: string;
declare let RhythmGameDifficulty: string;
declare let RhythmGameStarted: boolean;
declare let RhythmGameEnded: boolean;
declare let RhythmGamePassed: boolean;
declare let RhythmGamePreloadCompleted: boolean;
declare namespace RhythmGameInit {
    function RhythmGamePreload(): void;
    function RhythmGamePreloadCheck(): void;
    function RhythmGamePostLoad(): void;
    function RhythmGameLoadingPage(): void;
}
declare namespace RhythmGameImage {
    let preloadTotal: number;
    let preloadLoaded: number;
    let preloadComplted: boolean;
    let stage_light: HTMLImageElement;
    let key_black_up: HTMLImageElement;
    let key_black_down: HTMLImageElement;
    let key_white_up: HTMLImageElement;
    let key_white_down: HTMLImageElement;
    function preload(): void;
}
declare namespace RhythmGameAudio {
    let preloadComplted_1: boolean;
    export { preloadComplted_1 as preloadComplted };
    export let audioCtx: AudioContext | null;
    export let bufferSource: AudioBufferSourceNode | null;
    export function preload(): void;
    /**
     * @param {number} offset
     */
    export function play(offset: number): void;
    export function stop(): void;
}
declare namespace RhythmGameChart {
    let preloadCompleted: boolean;
    let chartFile: Document | null;
    let title: string;
    let artist: string;
    let creator: string;
    let bpm: number;
    let length: number;
    let notes: {
        id: number;
        key: number;
        time: number;
        para: number;
    }[];
    let notes_state: {
        id: number;
        judge: string;
    }[];
    let notes_judge: {
        id: number;
        time: number;
        para: number;
    }[][];
    let notes_render: {
        id: number;
        time: number;
        para: number;
    }[][];
    let timestamps: {
        id: number;
        time: number;
        data: number;
    }[];
    let timestamps_render: {
        id: number;
        time: number;
        data: number;
    }[];
    function preload(): void;
    function load(): void;
}
declare namespace RhythmGameKey {
    export let keyPressed: boolean[];
    export let key_log: {
        key: 0 | 1 | 2 | 3;
        type: "up" | "down";
        time: number;
    }[];
    export let key_log_ref: never[];
    export let KEY_0: string;
    export let KEY_1: string;
    export let KEY_2: string;
    export let KEY_3: string;
    export function load_1(): void;
    export { load_1 as load };
    export function addKeyListener(): void;
    export function removeKeyListener(): void;
    export namespace keyDownEvent {
        /**
         *
         * @param {KeyboardEvent} event
         */
        function handleEvent(event: KeyboardEvent): void;
    }
    export namespace keyUpEvent {
        /**
         *
         * @param {KeyboardEvent} event
         */
        function handleEvent(event: KeyboardEvent): void;
    }
}
declare namespace RhythmGameKernel {
    export let offsetTime: number;
    export let onFirstInvoke: boolean;
    export let pastTime: number;
    export let currentTime: number;
    export let initTime: number;
    export let elapsedTime: number;
    export let deltaTime: number;
    export let frame: number;
    export function load_2(): void;
    export { load_2 as load };
    export function update(): void;
}
declare namespace RhythmGameScript {
    export let judge_perfect: number;
    export let judge_great: number;
    export let judge_miss: number;
    export let judge_end: number;
    export let score: number;
    export namespace acc {
        let value: number;
        let perfect: number;
        let great: number;
        let miss: number;
        let endMiss: number;
    }
    export let combo: {
        value: number;
        rendered: boolean;
        max: number;
        startFrame?: number;
        frame?: number;
    };
    export let judge: {
        judge: string;
        key: number;
        para: number;
    }[];
    export let health: number;
    export function load_3(): void;
    export { load_3 as load };
    export function update_1(): void;
    export { update_1 as update };
    export function map_judge(): void;
    /**
     * @param {number} noteID
     * @param {string} judge
     */
    export function setJudge(noteID: number, judge: string): void;
    export function judgeType(timeDiff: number): "late miss" | "early miss" | "early great" | "early perfect" | "late perfect" | "late great" | undefined;
    export function judgeToVal(judge: string): 0 | 1 | 2 | 3 | -1;
    export function update_combo(): void;
    export function update_accuracy(): void;
    export function update_score(): void;
    export function update_health(): void;
}
declare namespace RhythmGameRender {
    export let scrollSpeed: number;
    export let cache_judge: {
        val: number;
        startFrame?: number;
    };
    export let cache_hitEffect: {
        judge: number;
        para?: number;
        startFrame?: number;
        frame?: number;
    }[];
    export namespace cache_sv {
        let startFrame: number;
        let endFrame: number;
        let startSpeed: number;
        let endSpeed: number;
    }
    export function load_4(): void;
    export { load_4 as load };
    export function update_2(): void;
    export { update_2 as update };
    export function keyPressEffectStageLight(): void;
    export function keyPressEffectKeyLight(): void;
    export function hitEffect(): void;
    export function noteDrop(): void;
    export function drawSingleNote(key: 0 | 1 | 2 | 3, y: number, judge: string): void;
    export function drawLongNote(key: 0 | 1 | 2 | 3, y: number, h: number, judge: string): void;
    export function showResult(): void;
    export function showJudge(): void;
    export function judgeRender(obj: {
        startFrame?: number;
        frame?: number;
        val: number;
    }): void;
    export function showCombo(): void;
    export function showAcc(): void;
    export function showScore(): void;
    export function showJudgeCount(): void;
    export function showHealth(): void;
}
declare namespace RhythmGameIntegration {
    export let punishment_level: number;
    export function load_5(): void;
    export { load_5 as load };
    export function update_3(): void;
    export { update_3 as update };
    export function setPunishment(): void;
}
