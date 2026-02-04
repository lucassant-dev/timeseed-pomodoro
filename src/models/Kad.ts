import type Flip from "@/models/Flip";

export type KadMetaData = {
    name: string,
    description: string
};

export type KadFlips= {
    all: Flip[],
    current: Flip,
    index: number
};

type Kad = {
    id: string,
    metaData: KadMetaData,
    flipData: KadFlips,
    totalDurationInSeconds: number
};

export default Kad;