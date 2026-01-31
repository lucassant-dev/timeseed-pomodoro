import { useState, type JSX } from "react";
import { CreatorDiv } from "./styles";
import ConfirmThemeButton from "@/components/themeCreator/ConfirmThemeButton";
import ThemeColorSelectionSection from "@/components/themeCreator/themeSelectionSection";
import InputBox from "@/components/inputBox";
import AppTheme, { AppThemeColors } from "@/styles/themes/AppTheme";
import useAppTheme from "@/hooks/useAppTheme";
import CustomUserThemeStorage from "@/storage/CustomUserThemeStorage";
import ErrorHandler from "@/utils/errorHandler";

export default function ThemeCreator(): JSX.Element {            
    const { currentTheme } = useAppTheme();

    const [themeName, setThemeName] = useState<string>("");
    const [themeColors, setThemeColors] = useState<AppThemeColors>(currentTheme.colors);    

    function handleClick(): void {
        if (!themeName) {
            alert("Please enter a name.");
            return;
        }

        try {
            const userTheme: AppTheme = {
                name: themeName,
                colors: themeColors
            };
    
            CustomUserThemeStorage.setTheme(userTheme);
            alert("Theme created successfully.");
        }

        catch(e: unknown) {
            alert(ErrorHandler.handle(e));
        }
        
        setThemeName("");
        setThemeColors(currentTheme.colors);
    }

    return (
        <CreatorDiv>
            <InputBox
                label="Theme Name"
                value={themeName}
                onChange={setThemeName}
            />

            <ThemeColorSelectionSection
                newThemeColors={themeColors}
                onUpdate={setThemeColors}
            />

            <ConfirmThemeButton onClick={handleClick} />      
        </CreatorDiv>
    );
}