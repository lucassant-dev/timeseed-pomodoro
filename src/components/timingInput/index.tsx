import type { ChangeEvent, JSX } from "react";
import { TimingInputContainer, TimingInputTitle, TimingNumberInput } from "./styles";

type Props = {
    title: string,
    timingValue: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onFocus: () => void,
    onBlur: () => void,
    fontColor: string
};

export default function TimingInput({ title, timingValue, onChange, onFocus, onBlur, fontColor }: Props): JSX.Element {
    return (
        <TimingInputContainer>
            <TimingInputTitle>
                {title}
            </TimingInputTitle>
            
            <TimingNumberInput
                value={timingValue}
                inputMode="numeric"
                placeholder="00"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                $fontColor={fontColor}
            />
        </TimingInputContainer>
    );
}