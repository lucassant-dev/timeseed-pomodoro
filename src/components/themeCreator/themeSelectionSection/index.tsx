import type { JSX } from "react";
import { ThemeColorSelectionSectionContainer } from "./styles";
import ThemeColorSelectionRow from "@/components/themeCreator/themeColorSelectionRow";
import { AppThemeColors } from "@/styles/themes/AppTheme";

type Props = {
    newThemeColors: AppThemeColors,
    onUpdate: (newThemeColors: AppThemeColors) => void
};

export default function ThemeColorSelectionSection({ newThemeColors, onUpdate }: Props): JSX.Element {
    function updateColor(key: keyof AppThemeColors, value: string): void {
        onUpdate({
            ...newThemeColors,
            [key]: value
        });
    }
    
    return (
        <ThemeColorSelectionSectionContainer>
            <ThemeColorSelectionRow
                label="Primary"
                color={["primary", newThemeColors.primary]}
                onUpdate={updateColor}
            />

            <ThemeColorSelectionRow
                label="Text"
                color={["text", newThemeColors.text]}
                onUpdate={updateColor}
            />

            <ThemeColorSelectionRow
                label="Menus"
                color={["menu", newThemeColors.menu]}
                onUpdate={updateColor}
            />

            <ThemeColorSelectionRow
                label="Contrast"
                color={["contrast", newThemeColors.contrast]}
                onUpdate={updateColor}                
            />

            <ThemeColorSelectionRow
                label="Icons"
                color={["icon", newThemeColors.icon]}
                onUpdate={updateColor}                
            />

            <ThemeColorSelectionRow
                label="Page Top"
                color={["backgroundTop", newThemeColors.backgroundTop]}
                onUpdate={updateColor}                
            />

            <ThemeColorSelectionRow
                label="Page Bottom"
                color={["backgroundBottom", newThemeColors.backgroundBottom]}
                onUpdate={updateColor}                
            />
        </ThemeColorSelectionSectionContainer>
    );
}