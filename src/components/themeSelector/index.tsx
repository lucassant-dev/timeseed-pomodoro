import { useState, type JSX } from "react";
import AddThemeButton from "@/components/themeSelector/addThemeButton";
import ThemeSelectionButton from "@/components/themeSelector/themeSelectionButton";
import { ActionButtonsDiv, SelectionList, SelectionListItem, SelectorTitle, ThemeSelectorDiv } from "./styles";
import AppTheme from "@/styles/themes/AppTheme";
import systemThemes from "@/styles/themes";
import { PlusIcon } from "lucide-react";
import ThemeActionButton from "./themeActionButton";
import globalColors from "@/styles/themes/globalColors";
import useAppTheme from "@/hooks/useAppTheme";
import CustomUserThemeStorage from "@/storage/CustomUserThemeStorage";
import SelectedUserThemeStorage from "@/storage/SelectedUserThemeStorage";

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
        <ThemeSelectorDiv>
            <SelectorTitle aria-label="Theme Selection">Theme Selection</SelectorTitle>
            
            <SelectionList>
                {appThemes.map((theme) => {
                    return (
                        <SelectionListItem key={theme.name}>
                            <ThemeSelectionButton
                                theme={theme}
                                isSelected={theme.name === selectedTheme?.name}
                                onSelect={() => setSelectedTheme(theme)}
                            />
                        </SelectionListItem>
                    );
                })}
                <SelectionListItem>
                    <AddThemeButton icon={PlusIcon} actionLabel="Add new theme" />
                </SelectionListItem>
            </SelectionList>

            <ActionButtonsDiv>
                <ThemeActionButton
                    label="Select"
                    color={globalColors.status.success}
                    onClick={handleSelectClick}
                />
                <ThemeActionButton
                    label="Remove"
                    color={globalColors.status.danger}
                    onClick={() => {}}
                />
            </ActionButtonsDiv>
        </ThemeSelectorDiv>
    );
}