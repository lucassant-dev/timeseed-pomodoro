import type { JSX } from "react";
import type AppTheme from "@/styles/themes/AppTheme";
import { SelectionButton, ThemeNameLabel } from "./styles";

type Props = {
    theme: AppTheme,
    onSelect: () => void,
    isSelected: boolean
};

export default function ThemeSelectionButton({ theme, onSelect, isSelected }: Props): JSX.Element {
    let { name, colors } = theme;

    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const formattedThemeName: string = name.length > 10
        ? `${name.slice(0, 10).trim()}...`
        : name;

    return (
        <SelectionButton
            onClick={onSelect}
            aria-pressed={isSelected}
            title={name}
            aria-label={name}
            $fillColor={colors.page}
        >
            <ThemeNameLabel $textColor={colors.text}>
                {formattedThemeName}
            </ThemeNameLabel>
        </SelectionButton>
    );
}