import AppThemeContext, { AppThemeContextType } from "@/contexts/appThemeContext";
import { useContext } from "react";

export default function useAppThemeContext(): AppThemeContextType {
    return useContext(AppThemeContext);
}