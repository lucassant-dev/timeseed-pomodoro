import { createContext, JSX, ReactNode, useState } from "react";
import type AppTheme from "@/styles/themes/AppTheme";
import { ThemeProvider } from "styled-components";
import systemThemes from "@/styles/themes";
import SelectedUserThemeStorage from "@/storage/SelectedUserThemeStorage";

export type AppThemeContextType = {
    currentTheme: AppTheme,
    changeTheme: (theme: AppTheme) => void
};

export const AppThemeContext = createContext<AppThemeContextType>({} as AppThemeContextType);

type AppThemeProviderProps = {
    children: ReactNode
};

export function AppThemeProvider({ children }: AppThemeProviderProps): JSX.Element {
    const selectedUserTheme: AppTheme = SelectedUserThemeStorage.getTheme() ?? systemThemes.light;
    
    const [theme, setTheme] = useState<AppTheme>(selectedUserTheme);

    function changeTheme(theme: AppTheme): void {
        setTheme(theme);
    }

    return (
        <AppThemeContext.Provider value={{
            currentTheme: theme,
            changeTheme,
        }}>
            <ThemeProvider theme={theme.colors}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}