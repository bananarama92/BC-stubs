declare var RhythmGameBackground: string;
declare let RhythmGameBeatmap: string;
declare let RhythmGameDifficulty: string;
declare let RhythmGameStarted: boolean;
declare let RhythmGameEnded: boolean;
declare let RhythmGamePassed: boolean;
declare let RhythmGamePreloadCompleted: boolean;
/**
 * Rhythm game initialization object: Handles pre and post loading, invokes initialization of other objects.
 * @constant
 * The game initialization object. Contains the functions required to load the game.
 */
declare let RhythmGameInit: {
    RhythmGamePreload: () => void;
    RhythmGamePreloadCheck: () => void;
    RhythmGamePostLoad: () => void;
    RhythmGameLoadingPage: () => void;
};
/**
 * Rhythm game image object: Loads and caches the image resources.
 * @constant
 * The game image object. Contains the functions required to load the images.
 */
declare let RhythmGameImage: {
    preloadTotal: number;
    preloadLoaded: number;
    preloadComplted: boolean;
    /** @type {HTMLImageElement} */
    stage_light: HTMLImageElement;
    /** @type {HTMLImageElement} */
    key_black_up: HTMLImageElement;
    /** @type {HTMLImageElement} */
    key_black_down: HTMLImageElement;
    /** @type {HTMLImageElement} */
    key_white_up: HTMLImageElement;
    /** @type {HTMLImageElement} */
    key_white_down: HTMLImageElement;
    preload(): void;
};
/**
 * Rhythm game audio object: Handles loading audio and starting the music
 * @constant
 * The game audio object. Contains the functions required to load, start and stop the audio files.
 */
declare let RhythmGameAudio: {
    preloadComplted: boolean;
    /** @type {AudioContext | null} */
    audioCtx: AudioContext | null;
    /** @type {AudioBufferSourceNode | null} */
    bufferSource: AudioBufferSourceNode | null;
    preload: () => void;
    /**
     * @param {number} offset
     */
    play(offset: number): void;
    stop(): void;
};
/**
 * Rhythm game chart object: Handles loading chart, parsing xml, caching chart for rendering and judging.
 * @constant
 * The game chart object. Contains the functions required to load the charts.
 */
declare let RhythmGameChart: {
    preloadCompleted: boolean;
    /** @type {Document | null} */
    chartFile: Document | null;
    title: string;
    artist: string;
    creator: string;
    bpm: number;
    length: number;
    /** @type {{id: number, key: number, time: number, para: number}[]} */
    notes: {
        id: number;
        key: number;
        time: number;
        para: number;
    }[];
    /** @type {{id: number, judge: string}[]} */
    notes_state: {
        id: number;
        judge: string;
    }[];
    /** @type {{id: number, time: number, para: number}[][]} */
    notes_judge: {
        id: number;
        time: number;
        para: number;
    }[][];
    /** @type {{id: number, time: number, para: number}[][]} */
    notes_render: {
        id: number;
        time: number;
        para: number;
    }[][];
    /** @type {{id: number, time: number, data: number}[]} */
    timestamps: {
        id: number;
        time: number;
        data: number;
    }[];
    /** @type {{id: number, time: number, data: number}[]} */
    timestamps_render: {
        id: number;
        time: number;
        data: number;
    }[];
    preload(): void;
    load: () => void;
};
/**
 * Rhythm game keyboard input handler object: Handles keyboard inputs.
 * @constant
 * The game keyboard input handler object. Contains the functions and properties required to handle key press events.
 */
declare let RhythmGameKey: {
    keyPressed: boolean[];
    /** @type {{ key: 0 | 1 | 2 | 3, type: "up" | "down", time: number }[]} */
    key_log: {
        key: 0 | 1 | 2 | 3;
        type: "up" | "down";
        time: number;
    }[];
    key_log_ref: never[];
    KEY_0: string;
    KEY_1: string;
    KEY_2: string;
    KEY_3: string;
    load: () => void;
    addKeyListener: () => void;
    removeKeyListener: () => void;
    keyDownEvent: {
        /**
         *
         * @param {KeyboardEvent} event
         */
        handleEvent(event: KeyboardEvent): void;
    };
    keyUpEvent: {
        /**
         *
         * @param {KeyboardEvent} event
         */
        handleEvent(event: KeyboardEvent): void;
    };
};
/**
 * Rhythm game kernel object: Handles game timing.
 * @constant
 * The game kernel object. Contains the functions required to handle the game's timing.
 */
declare let RhythmGameKernel: {
    offsetTime: number;
    onFirstInvoke: boolean;
    pastTime: number;
    currentTime: number;
    initTime: number;
    elapsedTime: number;
    deltaTime: number;
    frame: number;
    load: () => void;
    update: () => void;
};
/**
 * Rhythm game script object: Handles game mechanics.
 * @constant
 * The game kernel object. Contains the functions related to game mechanics such as health, score and accuracy.
 */
declare let RhythmGameScript: {
    judge_perfect: number;
    judge_great: number;
    judge_miss: number;
    judge_end: number;
    score: number;
    acc: {
        value: number;
        perfect: number;
        great: number;
        miss: number;
        endMiss: number;
    };
    /** @type {{ value: number, rendered: boolean, max: number, startFrame?: number, frame?: number }} */
    combo: {
        value: number;
        rendered: boolean;
        max: number;
        startFrame?: number;
        frame?: number;
    };
    /** @type {{ judge: string, key: number, para: number }[]} */
    judge: {
        judge: string;
        key: number;
        para: number;
    }[];
    health: number;
    load: () => void;
    update: () => void;
    map_judge: () => void;
    /**
     * @param {number} noteID
     * @param {string} judge
     */
    setJudge(noteID: number, judge: string): void;
    /**
     * @param {number} timeDiff
     * @returns
     */
    judgeType: (timeDiff: number) => "early great" | "early miss" | "early perfect" | "late great" | "late miss" | "late perfect" | undefined;
    /**
     * @param {string} judge
     */
    judgeToVal: (judge: string) => -1 | 0 | 1 | 2 | 3;
    update_combo: () => void;
    update_accuracy: () => void;
    update_score: () => void;
    update_health: () => void;
};
/**
 * Rhythm game render object: Handles game rendering.
 * @constant
 * The game render object. Contains the functions related to game rendering such as the visual effects and notes.
 */
declare let RhythmGameRender: {
    scrollSpeed: number;
    /** @type {{ val: number, startFrame?: number }} */
    cache_judge: {
        val: number;
        startFrame?: number;
    };
    /** @type {{judge: number, para?: number, startFrame?: number, frame?: number }[]} */
    cache_hitEffect: {
        judge: number;
        para?: number;
        startFrame?: number;
        frame?: number;
    }[];
    cache_sv: {
        startFrame: number;
        endFrame: number;
        startSpeed: number;
        endSpeed: number;
    };
    load: () => void;
    update: () => void;
    keyPressEffectStageLight: () => void;
    keyPressEffectKeyLight: () => void;
    hitEffect: () => void;
    noteDrop: () => void;
    /**
     * @param {0 | 1 | 2 | 3} key
     * @param {number} y
     * @param {string} judge
     */
    drawSingleNote: (key: 0 | 1 | 2 | 3, y: number, judge: string) => void;
    /**
     *
     * @param {0 | 1 | 2 | 3} key
     * @param {number} y
     * @param {number} h
     * @param {string} judge
     */
    drawLongNote: (key: 0 | 1 | 2 | 3, y: number, h: number, judge: string) => void;
    showResult: () => void;
    showJudge: () => void;
    /**
     *
     * @param {{ startFrame?: number, frame?: number, val: number }} obj
     */
    judgeRender: (obj: {
        startFrame?: number;
        frame?: number;
        val: number;
    }) => void;
    showCombo: () => void;
    showAcc: () => void;
    showScore: () => void;
    showJudgeCount: () => void;
    showHealth: () => void;
};
/**
 * Rhythm game integration object: Handles bondage club specific functions.
 * @constant
 * The game integration object. Contains the functions related to handling functions from the club such as punishing the player for being inaccurate.
 */
declare let RhythmGameIntegration: {
    punishment_level: number;
    load: () => void;
    update: () => void;
    setPunishment: () => void;
};
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
