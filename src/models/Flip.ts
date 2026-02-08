export enum FlipSide {
    Focus,
    Break
}

export enum FlipState {
    Inactive,
    Running,
    Finished
}

export type FlipContent = {
    name: string,
    description: string
};

export type FlipDateInfo = {
    start: Date,
    complete: Date | null
};

type Flip = {
    id: string,
    content: FlipContent,
    side: FlipSide,
    state: FlipState,
    dateInfo: FlipDateInfo,
    durationInSeconds: number
};

export default Flip;