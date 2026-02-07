import AppKadModelContext, { AppKadModelContextType } from "@/contexts/appModelsContext/appKadModelContext";
import { useContext } from "react";

export default function useAppKadModelContext(): AppKadModelContextType {
    return useContext(AppKadModelContext);
}