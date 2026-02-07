import { createContext } from "react";
import type AppTheme from "@/styles/themes/AppTheme";

export type AppThemeContextType = {
    currentTheme: AppTheme,
    changeTheme: (theme: AppTheme) => void
};

const AppThemeContext = createContext<AppThemeContextType>({} as AppThemeContextType);

export default AppThemeContext;