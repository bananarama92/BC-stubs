declare function Draw3DLoad(): void;
declare function Draw3DKeyDown(): void;
declare function init(): void;
declare function Draw3DEnable(Enable: any): void;
declare function Draw3DProcess(): void;
declare function Draw3DCharacter(C: any, X: any, Y: any, Zoom: any, IsHeightResizeAllowed: any): void;
declare function light(): void;
declare function color2(hexcolor: any): void;
declare function Strip3Dmodel(models: any, i: any): void;
declare function dress3DModels(group: any, path3d: any): void;
declare function refresh3DModel(group: any, path3d: any): void;
declare var renderer: any;
declare var scene: any;
declare var camera: any;
declare var model: any;
declare var group1: any;
declare var material: any;
declare var path3d: string;
declare var Draw3DEnabled: boolean;
declare var count: number;
declare var maid: any;
