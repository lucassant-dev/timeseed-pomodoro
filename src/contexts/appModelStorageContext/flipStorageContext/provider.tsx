import type { JSX, ReactNode } from "react";
import FlipStorageContext from "@/contexts/appModelStorageContext/flipStorageContext";
import FlipStorageManager from "@/storage/appModelsStorage/FlipStorageManager";

type Props = {
    children: ReactNode
};

const flipStorageManagerSingleton = new FlipStorageManager();

export default function FlipStorageContextProvider({ children }: Props): JSX.Element {
    return (
        <FlipStorageContext.Provider value={flipStorageManagerSingleton}>
            {children}
        </FlipStorageContext.Provider>
    );
}