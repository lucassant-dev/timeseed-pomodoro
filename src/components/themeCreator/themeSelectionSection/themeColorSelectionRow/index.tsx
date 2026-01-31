import type { JSX } from "react";
import { ColorInput, ColorPickDiv, ColorPreview, ColorSelectionLabel, ColorSelectionRowDiv } from "./styles";
import { AppThemeColors } from "@/styles/themes/AppTheme";

type Props = {
    label: string,
    color: [keyof AppThemeColors, string],
    onUpdate: (key: keyof AppThemeColors, value: string) => void
};

export default function ThemeColorSelectionRow({ label, color, onUpdate }: Props): JSX.Element {        
    const [colorKey, colorValue] = color;
    
    return (
        <ColorSelectionRowDiv>
            <ColorSelectionLabel>{label}</ColorSelectionLabel>
            <ColorPickDiv>
                <ColorPreview $defaultColor={colorValue}></ColorPreview>
                <ColorInput
                    type="color"
                    value={colorValue}
                    onChange={(e) => onUpdate(colorKey, e.target.value)} 
                />
            </ColorPickDiv>
        </ColorSelectionRowDiv>
    );
}