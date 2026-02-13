import type { JSX, ReactNode } from "react";
import FlipStorageContext from "@/contexts/appModelStorageContext/flipStorageContext";
import FlipStorageManager from "@/storage/appModelsStorage/FlipStorageManager";

type Props = {
    children: ReactNode
};

export default function FlipStorageContextProvider({ children }: Props): JSX.Element {
    return (
        <FlipStorageContext.Provider value={new FlipStorageManager()}>
            {children}
        </FlipStorageContext.Provider>
    );
}