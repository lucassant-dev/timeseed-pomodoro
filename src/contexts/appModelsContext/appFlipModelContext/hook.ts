import AppFlipModelContext, { AppFlipModelContextType } from "@/contexts/appModelsContext/appFlipModelContext";
import { useContext } from "react";

export default function useAppFlipModelContext(): AppFlipModelContextType {
    return useContext(AppFlipModelContext);
}