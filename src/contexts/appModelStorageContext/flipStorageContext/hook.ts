import FlipStorageManager from "@/storage/appModelsStorage/FlipStorageManager";
import FlipStorageContext from "@/contexts/appModelStorageContext/flipStorageContext";
import { useContext } from "react";

export default function useFlipStorageContext(): FlipStorageManager {
    return useContext(FlipStorageContext);
}