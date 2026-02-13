import type { JSX } from "react";
import { ThemeSelectionItemButton, ThemeNameLabel } from "./styles";
import type AppTheme from "@/styles/themes/AppTheme";

type Props = {
    theme: AppTheme,
    onSelect: () => void,
    isSelected: boolean
};

export default function ThemeSelectionItem({ theme, onSelect, isSelected }: Props): JSX.Element {
    let { name, colors } = theme;

    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const formattedThemeName: string = name.length > 10
        ? `${name.slice(0, 10).trim()}...`
        : name;

    return (
        <ThemeSelectionItemButton
            onClick={onSelect}
            aria-pressed={isSelected}
            title={name}
            aria-label={name}
            $fillColor={`linear-gradient(${colors.background.default.bottom} 0%, ${colors.background.default.top} 100%)`}
        >
            <ThemeNameLabel $textColor={colors.text.default}>
                {formattedThemeName}
            </ThemeNameLabel>
        </ThemeSelectionItemButton>
    );
}