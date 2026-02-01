import type { JSX } from "react";
import { ThemeColorSelectionRowContainer, RowLabel, RowColorPickWrapper, RowColorPickPreview, RowColorPickInput } from "./styles";
import type { AppThemeColors } from "@/styles/themes/AppTheme";

type Props = {
    label: string,
    color: [keyof AppThemeColors, string],
    onUpdate: (key: keyof AppThemeColors, value: string) => void
};

export default function ThemeColorSelectionRow({ label, color, onUpdate }: Props): JSX.Element {        
    const [colorKey, colorValue] = color;
    
    return (
        <ThemeColorSelectionRowContainer>
            <RowLabel>
                {label}
            </RowLabel>
            <RowColorPickWrapper>
                <RowColorPickPreview $defaultColor={colorValue}></RowColorPickPreview>
                <RowColorPickInput
                    type="color"
                    value={colorValue}
                    onChange={(e) => onUpdate(colorKey, e.target.value)} 
                />
            </RowColorPickWrapper>
        </ThemeColorSelectionRowContainer>
    );
}