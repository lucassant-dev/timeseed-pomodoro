import type { JSX, ReactNode } from "react";
import FlipStorageContextProvider from "@/contexts/appModelStorageContext/flipStorageContext/provider";
import KadStorageContextProvider from "@/contexts/appModelStorageContext/kadStorageContext/provider";

type Props = {
    children: ReactNode
};

export default function AppModelStorageContextProvider({ children }: Props): JSX.Element {
    return (
        <FlipStorageContextProvider>
            <KadStorageContextProvider>
                {children}
            </KadStorageContextProvider>
        </FlipStorageContextProvider>
    );
}