import type { JSX, ReactNode } from "react";
import KadStorageContext from "@/contexts/appModelStorageContext/kadStorageContext";
import KadModelStorage from "@/storage/appModelsStorage/KadStorageManager";

type Props = {
    children: ReactNode
};

export default function KadStorageContextProvider({ children }: Props): JSX.Element {
    return (
        <KadStorageContext.Provider value={new KadModelStorage()}>
            {children}
        </KadStorageContext.Provider>
    );
}