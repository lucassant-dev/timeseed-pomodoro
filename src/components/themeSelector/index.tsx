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

export default function ThemeSelector(): JSX.Element {
    const { currentTheme, changeTheme } = useAppTheme();
    const [selectedTheme, setSelectedTheme] = useState<AppTheme>(currentTheme);

    const defaultAppThemes: AppTheme[] = Object.values(systemThemes);

    return (
        <ThemeSelectorDiv>
            <SelectorTitle aria-label="Theme Selection">Theme Selection</SelectorTitle>
            
            <SelectionList>
                {defaultAppThemes.map((theme) => {
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
                <AddThemeButton icon={PlusIcon} actionLabel="Add new theme" />
            </SelectionList>

            <ActionButtonsDiv>
                <ThemeActionButton
                    label="Select"
                    color={globalColors.status.success}
                    onClick={() => changeTheme(selectedTheme)}
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