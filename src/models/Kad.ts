import type Flip from "@/models/Flip";

export type KadFlips= {
    all: Flip[],
    current: Flip | null,
    index: number
};

type Kad = {
    id: string,
    name: string,
    flips: KadFlips,
    totalDurationInSeconds: number
};

export default Kad;