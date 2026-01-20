import { createContext, JSX, ReactNode, useContext, useState } from "react";
import type { DefaultTheme } from "styled-components/dist/types";
import themes from "@/styles/themes";
import { ThemeProvider } from "styled-components";

type AppThemeContextType = {
    currentTheme: DefaultTheme,
    toggleTheme: (theme: DefaultTheme) => void
};

const AppThemeContext = createContext<AppThemeContextType>({} as AppThemeContextType);

export function useAppTheme(): AppThemeContextType {
    return useContext(AppThemeContext);
}

type AppThemeProviderProps = {
    children: ReactNode
};

export function AppThemeProvider({ children }: AppThemeProviderProps): JSX.Element {
    const [theme, setTheme] = useState<DefaultTheme>(themes.dark);

    function toggleTheme(theme: DefaultTheme): void {
        setTheme(theme);
    }

    return (
        <AppThemeContext.Provider value={{currentTheme: theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
}