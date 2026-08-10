declare var PlatformDialog: any;
/** @type {undefined | string} */
declare var PlatformDialogBackground: undefined | string;
declare var PlatformDialogText: any;
declare var PlatformDialogAnswer: any;
declare var PlatformDialogAnswerPosition: number;
declare var PlatformDialogAnswerLength: number;
declare var PlatformDialogReply: any;
declare var PlatformDialogGoto: any;
declare var PlatformDialogCharacterDisplay: any;
declare var PlatformDialogPosition: number;
/** @type {Platform.DialogCharacter[]} */
declare var PlatformDialogCharacter: Platform.DialogCharacter[];
declare var PlatformDialogAudio: any;
declare var PlatformDialogControllerHandle: boolean;
declare var PlatformDialogAudioStyle: string[];
/** @type {Platform.DialogCharacter[]} */
declare var PlatformDialogCharacterTemplate: Platform.DialogCharacter[];
declare var PlatformDialogData: ({
    Name: string;
    Music: string;
    Dialog: ({
        Text: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
            Y: number;
        }[];
        Audio?: undefined;
    } | {
        Text: string;
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
    } | {
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
            Y: number;
        }[];
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
    } | {
        Text: string;
        Audio: string;
        Background?: undefined;
        Character?: undefined;
    } | {
        Background: string;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer?: undefined;
        ID?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Text: string;
        Answer?: undefined;
        ID?: undefined;
    } | {
        Background?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Goto?: undefined;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        })[];
        ID?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer?: undefined;
        ID?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: {
            Text: string;
            Reply: string;
            Audio: string;
        }[];
        ID?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID: string;
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: {
            Text: string;
            Reply: string;
            Audio: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Text: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Domination?: undefined;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Love?: undefined;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Answer?: undefined;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
        }[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID: string;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry(): void;
        TextScript?: undefined;
        AudioScript?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID: string;
        Text: string;
        Audio: string;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Audio?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Audio?: undefined;
            Goto?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Audio?: undefined;
            Goto?: undefined;
            Domination?: undefined;
            Text: string;
            Reply: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        })[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Text: string;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript(): "Can I have my orgasm Lady Olivia?" | "It's time for the climax.";
        AudioScript(): "O221" | "O222";
        Entry?: undefined;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript(): "(She smiles and watches you carefully.)" | "Yes, you can have your orgasm my maid.";
        AudioScript(): "O231" | null;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Entry?: undefined;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        ID?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: {
            Text: string;
            Reply: string;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        AudioStyle?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            AudioStyle: string;
            Audio: string;
            Love: number;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            AudioStyle: string;
            Audio: string;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            AudioStyle: string;
            Audio: string;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        TextScript(): "Hey!  I'm Edlaran, a wood elf, are you a zombie?" | "Is it you Melody?  Are you a zombie?";
        AudioScript(): "11" | "12";
    } | {
        Background?: undefined;
        Character?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Script?: undefined;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Script?: undefined;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Reply?: undefined;
            Text: string;
            Script(): void;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Audio?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Goto?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Goto?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Answer: ({
            Audio?: undefined;
            Goto?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Domination: number;
        } | {
            Audio?: undefined;
            Goto?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Goto?: undefined;
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Goto?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Answer: ({
            Audio?: undefined;
            Goto?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: ({
            Audio?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        ID: string;
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Goto: string;
        } | {
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: ({
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        } | {
            X?: undefined;
            Name: string;
            Status: string;
            Pose: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Goto: string;
        } | {
            Audio?: undefined;
            Goto?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        Text: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        ID: string;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        } | {
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: ({
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        } | {
            X?: undefined;
            Name: string;
            Status: string;
            Pose: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        ID: string;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Audio?: undefined;
        Answer?: undefined;
        Text: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Text: string;
        Answer: ({
            Script?: undefined;
            Text: string;
            Reply: string;
        } | {
            Reply?: undefined;
            Text: string;
            Script(): void;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Audio?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Perk?: undefined;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Perk?: undefined;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Perk?: undefined;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text: string;
        Audio: string;
        AudioStyle: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Background: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Answer?: undefined;
        Text: string;
        Audio: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        })[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Perk: boolean;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Audio?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        })[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        TextScript(): "Lady Olivia, I'll be there to help you." | "Lady Olivia, your maid will be there to serve and obey you.  (You do a maid curtsy.)" | "Little lady, I'll be there to lock you up every night." | "My dear Olivia, together we are unstoppable." | "Olivia, I'll be there to protect you." | "Olivia, I'm glad we are in this mess together.";
        AudioScript(): "81" | "82" | "83" | "84" | "85" | "86";
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Audio?: undefined;
            Goto?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Audio?: undefined;
            Goto?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        TextScript?: undefined;
        AudioScript?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Text: string;
        Audio: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Entry(): void;
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Perk: boolean;
        })[];
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            AudioStyle?: undefined;
            Script?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Script(): void;
        } | {
            AudioStyle?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        AudioStyle: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        AudioStyle: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        AudioStyle: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Script(): void;
        } | {
            Domination?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Perk: boolean;
        })[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: ({
            Name: string;
            Status: string;
            X: number;
            Pose: string;
            Animation?: undefined;
        } | {
            Pose?: undefined;
            Name: string;
            Status: string;
            X: number;
            Animation: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: ({
            Pose?: undefined;
            Name: string;
            Status: string;
            X: number;
            Animation: string;
        } | {
            Animation?: undefined;
            Name: string;
            Status: string;
            X: number;
            Pose: string;
        })[];
        Answer: ({
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Script(): void;
        } | {
            Script?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Audio?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            Reply?: undefined;
            Text: string;
            Script(): void;
        } | {
            Reply?: undefined;
            Text: string;
            Domination: number;
            Love: number;
            Script(): void;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Script(): void;
        })[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        TextScript?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Entry(): void;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        TextScript(): "(It's too dangerous to inspect the crate while it's guarded.)" | "(The crate is open and empty.)";
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Answer: ({
            Text: string;
            Reply: string;
            Script(): void;
        } | {
            Reply?: undefined;
            Text: string;
            Script(): void;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: ({
            Animation?: undefined;
            Name: string;
            Status: string;
            Pose: string;
        } | {
            Pose?: undefined;
            Name: string;
            Status: string;
            Animation: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        ID: string;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Audio?: undefined;
            Goto?: undefined;
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Audio?: undefined;
            Goto?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Perk: boolean;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: ({
            Name: string;
            Status: string;
            Pose: string;
            X: number;
            Y: number;
        } | {
            X?: undefined;
            Y?: undefined;
            Name: string;
            Status: string;
            Pose: string;
        })[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Audio?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Love: number;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Answer: ({
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Goto: string;
        } | {
            Goto?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
        } | {
            Goto?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Text: string;
        Audio: string;
    })[];
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Entry?: undefined;
        Text: string;
        Answer: ({
            Reply?: undefined;
            Text: string;
            Script(): void;
        } | {
            Script?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry(): void;
        Text: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            X: number;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background: string;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            X: number;
            Y: number;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            AudioStyle: string;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            AudioStyle: string;
        } | {
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            AudioStyle: string;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Script?: undefined;
            Text: string;
            Reply: string;
            Love: number;
        } | {
            Love?: undefined;
            Reply?: undefined;
            Text: string;
            Script(): void;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Character: {
            Name: string;
            Status: string;
            Animation: string;
            Y: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
        } | {
            Audio?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Background: string;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Entry(): void;
    })[];
    Exit?: undefined;
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            AudioStyle?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Perk: boolean;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Entry(): void;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Perk: boolean;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Love: number;
            Script(): void;
        } | {
            Love?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Audio?: undefined;
            Love?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        ID: string;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
        Text: string;
        Audio: string;
        AudioStyle: string;
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        })[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit: () => void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Love: number;
        })[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Text: string;
        Audio: string;
        Answer: {
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        }[];
    })[];
} | {
    Name: string;
    Music: string;
    Exit(): void;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Prerequisite(): boolean;
        Entry(): void;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: {
            Text: string;
            Reply: string;
            Audio: string;
        }[];
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Goto: string;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Script(): void;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Audio?: undefined;
            Domination?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Script(): void;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Goto: string;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
            Love: number;
        } | {
            Love?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
            Goto: string;
        })[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Text: string;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Script(): void;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        } | {
            Domination?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
        })[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Script(): void;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Script?: undefined;
            Text: string;
            Reply: string;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Goto?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Love: number;
            Goto: string;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Background?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Background?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
    } | {
        Background?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Background: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Text: string;
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Background?: undefined;
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Domination: number;
        })[];
    } | {
        Background?: undefined;
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Audio?: undefined;
            AudioStyle?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
        })[];
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
        Answer: ({
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        })[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
} | {
    Exit?: undefined;
    Name: string;
    Music: string;
    Dialog: ({
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Goto?: undefined;
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
        } | {
            Perk?: undefined;
            Text: string;
            Reply: string;
            Domination: number;
            Goto: string;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
            Perk: boolean;
            Goto: string;
        })[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        AudioStyle: string;
        Answer: ({
            Text: string;
            Reply: string;
            Domination: number;
        } | {
            Domination?: undefined;
            Text: string;
            Reply: string;
        })[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Prerequisite?: undefined;
        Entry(): void;
        Text: string;
        Audio: string;
        AudioStyle: string;
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Character: {
            Name: string;
            Status: string;
            Pose: string;
            X: number;
        }[];
    } | {
        Character?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        Text: string;
        Audio: string;
        Answer: ({
            Domination?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
        } | {
            Domination?: undefined;
            Love?: undefined;
            Perk?: undefined;
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
        } | {
            Text: string;
            Reply: string;
            Audio: string;
            AudioStyle: string;
            Love: number;
            Domination: number;
            Perk: boolean;
        })[];
    } | {
        Character?: undefined;
        Answer?: undefined;
        ID?: undefined;
        Entry?: undefined;
        AudioStyle?: undefined;
        Prerequisite(): boolean;
        Text: string;
        Audio: string;
    } | {
        Text?: undefined;
        Audio?: undefined;
        Character?: undefined;
        Answer?: undefined;
        AudioStyle?: undefined;
        Prerequisite?: undefined;
        ID: string;
        Entry(): void;
    })[];
})[];
/**
 * Players the audio track for the dialog
 * @param {string} Source - The source file to use
 * @returns {void} - Nothing
 */
declare function PlatformDialogVoice(Source: string): void;
/**
 * Loads the dialog at a specific position
 * @param {number} Position - The position # to load
 * @returns {void} - Nothing
 */
declare function PlatformDialogLoadPosition(Position: number): void;
/**
 * Starts a specific dialog
 * @param {string} DialogName - The name of the dialog to start
 * @returns {void} - Nothing
 */
declare function PlatformDialogStart(DialogName: string): void;
/**
 * Draws the dialog character, text & answers
 * @returns {void} - Nothing
 */
declare function PlatformDialogDrawDialog(): void;
/**
 * Runs and draws the screen.
 * @returns {void} - Nothing
 */
declare function PlatformDialogRun(): void;
/**
 * Change the love/domination value based on the option picked, influenced also by perks
 * @param {number} CurrentValue - The current value
 * @param {number} Change - The modifier to apply
 * @param {boolean} Bonus - If there's a bonus to apply or not
 * @returns {Number} - The new stat after changes
 */
declare function PlatformDialogChangeValue(CurrentValue: number, Change: number, Bonus: boolean, Level: any): number;
/**
 * Pick a specific idle pose if the character allows it
 * @param {Platform.DialogCharacter} Character - The character to evaluate
 * @param {number} Love - The love value that changed
 * @param {number} Domination - The domination value that changed
 * @returns {Object} - A unused object
 */
declare function PlatformDialogSetIdlePose(Character: Platform.DialogCharacter, Love: number, Domination: number): Object;
/**
 * Pick an answer in a specific dialog
 * @param {number} Position - The position of the answer picked
 * @returns {void} - Nothing
 */
declare function PlatformDialogPickAnswer(Position: number): void;
/**
 * Alters a property (love or domination) for a specific character
 * @param {string} CharacterName - The name of the character to alter
 * @param {"Love" | "Domination"} Property - The name of the property to alter
 * @param {Number} Value - The value to change
 * @returns {void} - Nothing
 */
declare function PlatformDialogAlterProperty(CharacterName: string, Property: "Love" | "Domination", Value: number): void;
/**
 * Processes the current dialog, can answer or skip to the next phase
 * @returns {void} - Nothing
 */
declare function PlatformDialogProcess(): void;
/**
 * Exits the dialog and returns to the game
 * @returns {void} - Nothing
 */
declare function PlatformDialogLeave(): void;
/**
 * Handles clicks in the screen
 * @returns {void} - Nothing
 */
declare function PlatformDialogClick(): void;
/**
 * Returns a dialog character
 * @param {string} Name - The name of a character
 * @returns {Platform.DialogCharacter} - The character object
 */
declare function PlatformDialogGetCharacter(Name: string): Platform.DialogCharacter;
/**
 * Handles the controller inputs
 * @param {readonly GamepadButton[]} buttons - The buttons pressed on the controller
 * @returns {boolean} - Always TRUE to indicate that the controller is handled
 */
declare function PlatformDialogController(buttons: readonly GamepadButton[]): boolean;
/**
 * Returns TRUE if the party leader (Melody) has a specific social perk
 * @param {Platform.PerkName} PerkName - The name of the perk
 * @returns {boolean} - TRUE if the perk is active
 */
declare function PlatformDialogLeaderHasPerk(PerkName: Platform.PerkName): boolean;
/**
 * Sets up some special event parameters based on the game progress
 * @returns {void}
 */
declare function PlatformDialogEvent(): void;
/**
 * Returns TRUE if the character is Melody's lover, make sure that character or Melody is currently active
 * @param {string} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsLover(Name: string): boolean;
/**
 * Returns TRUE if two characters are lovers
 * @param {string} Char1 - The name of the first character
 * @param {string} Char2 - The name of the second character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogCharactersAreLovers(Char1: string, Char2: string): boolean;
/**
 * Returns TRUE if the character is Melody's slave, make sure that character or Melody is currently active
 * @param {string} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsSlave(Name: string): boolean;
/**
 * Returns TRUE if the first character is the slave of the second character
 * @param {string} Char1 - The name of the first character
 * @param {string} Char2 - The name of the second character
 * @returns {boolean} - TRUE if slave
 */
declare function PlatformDialogIsSlaveOfCharacter(Char1: string, Char2: string): boolean;
/**
 * Returns TRUE if the character is Melody's owner, make sure that character or Melody is currently active
 * @param {string} Name - The name of a character
 * @returns {boolean} - TRUE if lover
 */
declare function PlatformDialogIsOwner(Name: string): boolean;
/**
 * Returns TRUE if the character doesn't have any lover
 * @param {string} Name - The name of a character
 * @returns {boolean} - TRUE if no lover
 */
declare function PlatformDialogCharacterIsSingle(Name: string): boolean;
/**
 * Returns 0 if the source character and target character are not in a relationship, 1 if lover or slave, 2 if lover and slave
 * @param {string} SourceName - The source character name to evaluate
 * @param {string} TargetName - The target character name to evaluate
 * @returns {number} - TRUE if lover
 */
declare function PlatformDialogLoverAndSlaveFactor(SourceName: string, TargetName: string): number;
/**
 * Called each time a relationship changes through dialog
 * @returns {void} - Nothing
 */
declare function PlatformDialogRelationshipChange(): void;
/**
 * Called manually to output the full dialog text to the console for text proofing
 * @public
 * @returns {void} - Nothing
 */
declare function PlatformDialogOutputAll(): void;
