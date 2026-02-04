export enum FlipSide {
    Sun,
    Moon
}

export enum FlipState {
    Inactive,
    Running,
    Finished
}

export type FlipTask = {
    name: string,
    description: string
};

export type FlipDateInfo = {
    start: number,
    complete: number | null
};

type Flip = {
    id: string,
    task: FlipTask,
    side: FlipSide,
    state: FlipState,
    dateInfo: FlipDateInfo,
    durationInSeconds: number
};

export default Flip;