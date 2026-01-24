import type AppTheme from "@/styles/themes/AppTheme";
import { createContext } from "react";

export type AppThemeContextType = {
    currentTheme: AppTheme,
    changeTheme: (theme: AppTheme) => void
};

const AppThemeContext = createContext<AppThemeContextType>({} as AppThemeContextType);

export default AppThemeContext;