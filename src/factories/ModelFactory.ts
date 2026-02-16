import type Flip from "@/models/Flip"
import type { BaseFlip } from "@/models/Flip";
import { FlipSide, FlipState } from "@/models/Flip";

export type FlipCreationInput = {
    name: string,
    side: FlipSide,
    durationInSeconds: number
};

export default class ModelFactory {
    public static createFlip(input: FlipCreationInput, scorePerSecond: number): Flip {   
        const base: BaseFlip = {
            id: crypto.randomUUID(),
            name: input.name,
            state: FlipState.Inactive,
            durationInSeconds: input.durationInSeconds,
            dateInfo: {
                createdAt: new Date()
            }
        };
        
        if (input.side === FlipSide.Task) {
            return {
                ...base,
                side: FlipSide.Task,
                scoreValue: input.durationInSeconds * scorePerSecond
            };
        }

        return {
            ...base,
            side: FlipSide.Break
        };
    }
}