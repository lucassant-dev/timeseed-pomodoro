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
    start: Date,
    complete?: Date | null
};

type Flip = {
    id: string,
    name: string,
    side: FlipSide,
    state: FlipState,
    dateInfo: FlipDateInfo,
    durationInSeconds: number
};

export default Flip;