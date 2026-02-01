import { useState, type JSX } from "react";
import { ThemeSelectorContainer, ThemeSelectorTitle, ThemeList, ThemeListItem, ActionButtonsContainer } from "./styles";
import ThemeSelectionItem from "@/components/themeSelector/themeSelectionItem";
import AddThemeButton from "@/components/themeSelector/addThemeButton";
import ThemeSelectorActionButton from "@/components/themeSelector/themeSelectorActionButton";
import type AppTheme from "@/styles/themes/AppTheme";
import systemThemes from "@/styles/themes";
import globalColors from "@/styles/themes/globalColors";
import useAppTheme from "@/hooks/useAppTheme";
import CustomUserThemeStorage from "@/storage/CustomUserThemeStorage";
import SelectedUserThemeStorage from "@/storage/SelectedUserThemeStorage";
import { PlusIcon } from "lucide-react";

export default function ThemeSelector(): JSX.Element {
    const { currentTheme, changeTheme } = useAppTheme();
    const [selectedTheme, setSelectedTheme] = useState<AppTheme>(currentTheme);

    const defaultAppThemes: AppTheme[] = Object.values(systemThemes);
    const userCustomThemes: AppTheme[] = Object.values(CustomUserThemeStorage.getAllThemes());

    const appThemes: AppTheme[] = defaultAppThemes.concat(userCustomThemes);

    function handleSelectClick(): void {
        changeTheme(selectedTheme);
        SelectedUserThemeStorage.setTheme(selectedTheme);
    }

    return (
        <ThemeSelectorContainer>
            <ThemeSelectorTitle aria-label="Theme Selection">
                Theme Selection
            </ThemeSelectorTitle>
            
            <ThemeList>
                {appThemes.map((theme) => {
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
                <ThemeListItem>
                    <AddThemeButton icon={PlusIcon} actionLabel="Add new theme" />
                </ThemeListItem>
            </ThemeList>

            <ActionButtonsContainer>
                <ThemeSelectorActionButton
                    label="Select"
                    color={globalColors.status.success}
                    onClick={handleSelectClick}
                />
                <ThemeSelectorActionButton
                    label="Remove"
                    color={globalColors.status.danger}
                    onClick={() => {}}
                />
            </ActionButtonsContainer>
        </ThemeSelectorContainer>
    );
}