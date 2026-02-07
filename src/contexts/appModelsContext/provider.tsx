import Flip, { FlipSide, FlipState } from "@/models/Flip";
import Kad from "@/models/Kad";
import { JSX, ReactNode, useState } from "react";
import { AppFlipModelContext, AppKadModelContext } from "@/contexts/appModelsContext";

const initialFlipValues: Flip = {
    id: crypto.randomUUID(),
    content: {
        name: "Any",
        description: "Any"
    },
    dateInfo: {
        start: new Date(),
        complete: new Date()
    },
    side: FlipSide.Sun,
    state: FlipState.Inactive,
    durationInSeconds: 0
};

const initialKadValues: Kad = {
    id: crypto.randomUUID(),
    metaData: {
        name: "Any",
        description: "Any"
    },
    flipData: {
        all: [],
        current: null,
        index: 0
    },
    totalDurationInSeconds: 0
};

type Props = {
    children: ReactNode
};

export default function AppModelsContextProvider({ children }: Props): JSX.Element {
    const [flipValues, setFlipValues] = useState<Flip>(initialFlipValues);
    const [kadValues, setKadValues] = useState<Kad>(initialKadValues);

    return (
        <AppFlipModelContext.Provider value={{ flipValues, setFlipValues }}>
            <AppKadModelContext.Provider value={{ kadValues, setKadValues }}>
                {children}
            </AppKadModelContext.Provider>
        </AppFlipModelContext.Provider>
    );
}