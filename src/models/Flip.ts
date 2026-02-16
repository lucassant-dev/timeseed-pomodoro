export enum FlipSide {
    Task,
    Break
}

export enum FlipState {
    Inactive,
    Running,
    Finished
}

export type FlipDateInfo = {
    createdAt: Date,
    startedAt?: Date,
    finishedAt?: Date
};

export type BaseFlip = {
    id: string,
    name: string,
    state: FlipState,
    dateInfo: FlipDateInfo,
    durationInSeconds: number
};

export type TaskFlip = BaseFlip & {
    side: FlipSide.Task,
    scoreValue: number
};

export type BreakFlip = BaseFlip & {
    side: FlipSide.Break
};

type Flip = TaskFlip | BreakFlip;

export default Flip;