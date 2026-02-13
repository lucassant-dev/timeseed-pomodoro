import { useEffect, useState, type JSX } from "react";
import { ThemeSelectorContainer, ThemeSelectorTitle, ThemeList, ThemeListItem } from "./styles";
import ThemeSelectionItem from "@/components/themeSelector/themeSelectionItem";
import type AppTheme from "@/styles/themes/AppTheme";
import systemThemes from "@/styles/themes";
import useAppThemeContext from "@/contexts/appThemeContext/hook";
import SelectedUserThemeStorage from "@/storage/SelectedUserThemeStorage";

export default function ThemeSelector(): JSX.Element {
    const { currentTheme, changeTheme } = useAppThemeContext();
    const [selectedTheme, setSelectedTheme] = useState<AppTheme>(currentTheme);
    
    useEffect(() => {
        changeTheme(selectedTheme);
        SelectedUserThemeStorage.setTheme(selectedTheme);
    }, [selectedTheme]);

    return (
        <ThemeSelectorContainer>
            <ThemeSelectorTitle aria-label="Theme Selection">
                Theme Selection
            </ThemeSelectorTitle>
            
            <ThemeList>
                {Object.values(systemThemes).map((theme) => {
                    return (
                        <ThemeListItem key={theme.name}>
                            <ThemeSelectionItem
                                theme={theme}
                                isSelected={theme.name === selectedTheme?.name}
                                onSelect={() => setSelectedTheme(theme)}
                            />
                        </ThemeListItem>
                    );
                })}
            </ThemeList>

        </ThemeSelectorContainer>
    );
}