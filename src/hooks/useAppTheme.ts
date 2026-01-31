import {  AppThemeContextType, AppThemeContext } from "@/contexts/appThemeContext";
import { useContext } from "react";

export default function useAppTheme(): AppThemeContextType {
    return useContext(AppThemeContext);
}