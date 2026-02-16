import { FlipSide } from "@/models/Flip";
import type { AppThemeColors, AppThemePageBackgroundGradientColors } from "@/styles/themes/AppTheme";
import { useState } from "react";

export type FlipCardSideColors = {
    font: string,
    background: AppThemePageBackgroundGradientColors
};

export type FlipCardSide = {
    currentFlipCardSide: FlipSide,
    toggleFlipCardSide: () => void,
    flipCardSideColors: FlipCardSideColors
};

export default function useFlipCardSide(themeColors: AppThemeColors): FlipCardSide {
    const [side, setSide] = useState<FlipSide>(FlipSide.Task);

    function toggleFlipCardSide(): void {
        setSide(side === FlipSide.Task ? FlipSide.Break : FlipSide.Task);
    }

    const isTaskFlip = side === FlipSide.Task;
    const sideColor: "default" | "contrast" = isTaskFlip ? "default" : "contrast";
    
    const flipCardSideColors: FlipCardSideColors = {
        font: themeColors.text[sideColor],
        background: themeColors.background[sideColor]
    };

    return {
        currentFlipCardSide: side,
        toggleFlipCardSide,
        flipCardSideColors
    }
}