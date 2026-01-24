import { JSX, ReactNode, useState } from "react";
import type AppTheme from "@/styles/themes/AppTheme";
import { ThemeProvider } from "styled-components";
import systemThemes from "@/styles/themes";
import AppThemeContext from "@/contexts/appThemeContext/context";

type AppThemeProviderProps = {
    children: ReactNode
};

export function AppThemeProvider({ children }: AppThemeProviderProps): JSX.Element {
    const [theme, setTheme] = useState<AppTheme>(systemThemes.dark);

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