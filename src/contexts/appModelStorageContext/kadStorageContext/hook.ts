import KadStorageContext from "@/contexts/appModelStorageContext/kadStorageContext";
import KadStorageManager from "@/storage/appModelsStorage/KadStorageManager";
import { useContext } from "react";

export default function useKadStorageContext(): KadStorageManager {
    return useContext(KadStorageContext);
}