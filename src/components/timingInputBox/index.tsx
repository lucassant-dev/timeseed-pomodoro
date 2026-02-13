import type { ChangeEvent, Dispatch, FocusEvent, JSX, SetStateAction } from "react";
import { TimingInputBoxContainer, TimingInputSeparator } from "./styles";
import TimingInput from "@/components/timingInput";

type TimingInputValues = {
    hours?: number,
    minutes?: number,
    seconds?: number
};

type Props = {
    timingValues: TimingInputValues,
    onUpdate: Dispatch<SetStateAction<TimingInputValues>>,
    fontColor: string
};

export default function TimeInputBox({ timingValues, onUpdate, fontColor }: Props): JSX.Element {    
    function updateTimingValue(field: keyof TimingInputValues, value: string): void {
        const onlyDigits: string = value.replace(/\D/g, "");
        
        onlyDigits.length <= 2 && onUpdate((prev) => ({
            ...prev,
            [field]: onlyDigits
        }));
    }

    function applyZeros(field: keyof TimingInputValues, value: string): void {
        value != "" && updateTimingValue(field, value.padStart(2, "0"));
    }
    
    return (
        <TimingInputBoxContainer>
            <TimingInput
                title="hours"
                timingValue={timingValues.hours}
                onChange={(event: ChangeEvent<HTMLInputElement>) => 
                    updateTimingValue("hours", event.target.value)
                }
                onBlur={(event: FocusEvent<HTMLInputElement>) => 
                    applyZeros("hours", event.target.value)
                }
                fontColor={fontColor}
            />
            <TimingInputSeparator $fontColor={fontColor}>:</TimingInputSeparator>
            <TimingInput
                title="Minutes"
                timingValue={timingValues.minutes}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateTimingValue("minutes", event.target.value)
                }
                onBlur={(event: FocusEvent<HTMLInputElement>) => 
                    applyZeros("minutes", event.target.value)
                }
                fontColor={fontColor}
            />
            <TimingInputSeparator $fontColor={fontColor}>:</TimingInputSeparator>
            <TimingInput
                title="Seconds"
                timingValue={timingValues.seconds}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateTimingValue("seconds", event.target.value)}
                onBlur={(event: FocusEvent<HTMLInputElement>) => 
                    applyZeros("seconds", event.target.value)
                }
                fontColor={fontColor}
            />
        </TimingInputBoxContainer>
    );
}