import AppThemeContext, { type AppThemeContextType } from "@/contexts/appThemeContext/context";
import { useContext } from "react";

export default function useAppTheme(): AppThemeContextType {
    return useContext(AppThemeContext);
}