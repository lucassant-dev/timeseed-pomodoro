import type { JSX } from "react";
import DefaultInput from "@/components/defaultInput";
import TimingInputBox from "@/components/timingInputBox";
import AppButton from "@/components/appButton";
import { FlipCardBody, FlipCardContainer, FlipCardHeader, FlipName, ScoreLabel, ScoreLabelBox } from "./styles";
import Flip, { FlipSide } from "@/models/Flip";
import { useFlipCardNameInput, useFlipCardSide, useFlipCardTimingInput } from "@/components/flipCard/hooks";
import useFlipStorageContext from "@/contexts/appModelStorageContext/flipStorageContext/hook";
import useAppThemeContext from "@/contexts/appThemeContext/hook";
import { Coins, RefreshCw } from "lucide-react";
import ModelFactory from "@/factories/ModelFactory";

const SCORE_PER_SECOND: number = 0.2;

export default function FlipCard(): JSX.Element {
    const { currentName, updateName, clearName } = useFlipCardNameInput();
    const { currentTheme } = useAppThemeContext();
    const { currentFlipCardSide, toggleFlipCardSide, flipCardSideColors } = useFlipCardSide(currentTheme.colors);
    const timingProps = useFlipCardTimingInput();
    const { save } = useFlipStorageContext();

    const { totalTimeInSeconds, inputIsFocused, clearTimingValues } = timingProps;

    const scoreValue = totalTimeInSeconds * SCORE_PER_SECOND;
    const { font, background } = flipCardSideColors;

    function handleSubmit(): void {
        const newFlip: Flip = ModelFactory.createFlip({
            name: currentName,
            side: currentFlipCardSide,
            durationInSeconds: totalTimeInSeconds
        }, SCORE_PER_SECOND);
        
        clearName();
        clearTimingValues();

        save(newFlip);
    }
    
    function applyScoreStringDecoration(): string {
        let totalScoreString: string = String(Math.floor(scoreValue));
        for (let i = totalScoreString.length; i >= 0; i -= 3) {
            if (i >= 1 && i != totalScoreString.length) {
                totalScoreString = totalScoreString.slice(0, i) + "." + totalScoreString.slice(i);
            }
        }
        return totalScoreString;
    }

    return (
        <FlipCardContainer $backgroundColors={background}>
            <FlipCardHeader>
                <FlipName>{currentFlipCardSide === FlipSide.Task ? "Task" : "Break"} Flip</FlipName>
                <RefreshCw onClick={toggleFlipCardSide} />
            </FlipCardHeader>
            <FlipCardBody>
                <DefaultInput
                    name="name"
                    label="Name"
                    value={currentName}
                    onChange={updateName}
                    fontColor={font}
                />
                <TimingInputBox
                    timingProps={timingProps}
                    fontColor={font}
                />
                {currentFlipCardSide === FlipSide.Task && scoreValue >= 1 && (
                    <ScoreLabelBox>
                        <Coins />
                        <ScoreLabel>
                            {applyScoreStringDecoration()}
                        </ScoreLabel>
                    </ScoreLabelBox>
                )}
                <AppButton
                    label="Add"
                    height={1.6}
                    width={10}
                    onClick={handleSubmit}
                    isDisabled={
                        !currentName
                        || totalTimeInSeconds <= 0
                        || inputIsFocused
                        || (currentFlipCardSide === FlipSide.Task && scoreValue < 1)
                    }
                />
            </FlipCardBody>
        </FlipCardContainer>
    );
}   