import type { JSX, ReactNode } from "react";
import KadStorageContext from "@/contexts/appModelStorageContext/kadStorageContext";
import KadModelStorageManager from "@/storage/appModelsStorage/KadStorageManager";

type Props = {
    children: ReactNode
};

const kadStorageManagerSingleton = new KadModelStorageManager();

export default function KadStorageContextProvider({ children }: Props): JSX.Element {
    return (
        <KadStorageContext.Provider value={kadStorageManagerSingleton}>
            {children}
        </KadStorageContext.Provider>
    );
}