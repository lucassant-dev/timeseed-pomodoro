import SelectedUserThemeStorage from "@/storage/SelectedUserThemeStorage";
import type AppTheme from "@/styles/themes/AppTheme";
import { JSX, ReactNode, useState } from "react";
import AppThemeContext from "@/contexts/appThemeContext";
import systemThemes from "@/styles/themes";
import { ThemeProvider } from "styled-components";

type Props = {
    children: ReactNode
};

export default function AppThemeProvider({ children }: Props): JSX.Element {
    const selectedUserTheme: AppTheme = SelectedUserThemeStorage.getTheme() ?? systemThemes.light;
    
    const [theme, setTheme] = useState<AppTheme>(selectedUserTheme);

    function changeTheme(theme: AppTheme): void {
        setTheme(theme);
    }

    return (
        <AppThemeContext.Provider value={{
            currentTheme: theme,
            changeTheme
        }}>
            <ThemeProvider theme={theme.colors}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}