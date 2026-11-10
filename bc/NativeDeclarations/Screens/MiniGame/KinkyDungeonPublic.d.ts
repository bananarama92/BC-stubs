/**
 * Globals defined in KinkyDungeon and read by the rest of the game.
 * The KinkyDungeon sources are typechecked separately, with strict off.
 */
declare let KinkyDungeonGameRunning: boolean;
declare let KinkyDungeonPlayerCharacter: Character | null;
declare let KinkyDungeonGameData: null;
declare function KinkyDungeonHandleData(data: string, sourceMemberNumber: number): void;
