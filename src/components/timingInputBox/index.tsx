import { Fragment, type ChangeEvent, type JSX } from "react";
import { TimingInputBoxContainer, TimingInputSeparator } from "./styles";
import TimingInput from "@/components/timingInput";
import type { FlipCardTiming, FlipCardTimingValues } from "@/components/flipCard/hooks/useFlipCardTimingInput";

type Props = {
    timingProps: FlipCardTiming,
    fontColor: string
};

export default function TimeInputBox({ timingProps, fontColor }: Props): JSX.Element {    
    const { timingValues, updateTimingValue, focusInput, blurInputAndNormalizeTimingValue } = timingProps;
    
    type InputTitleAndKey = {
        title: string,
        timingKey: keyof FlipCardTimingValues
    }

    const inputs: InputTitleAndKey[] = [
        { title: "Hours", timingKey: "hours" },
        { title: "Minutes", timingKey: "minutes" },
        { title: "Seconds", timingKey: "seconds" }
    ];

    return (
        <TimingInputBoxContainer>
            {inputs.map(({ title, timingKey }, index) => {
                return (
                    <Fragment key={index}>
                        <TimingInput
                            title={title}
                            timingValue={timingValues[timingKey]}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                updateTimingValue(timingKey, event.target.value)
                            }}
                            onFocus={focusInput}
                            onBlur={() => blurInputAndNormalizeTimingValue(timingKey)}
                            fontColor={fontColor}
                        />
                        {index < inputs.length - 1 && (
                            <TimingInputSeparator $fontColor={fontColor}>
                                :
                            </TimingInputSeparator>
                        )}
                    </Fragment>
                );
            })}
        </TimingInputBoxContainer>
    );
}