import type { ChangeEvent, FocusEvent, JSX } from "react";
import { TimingInputContainer, TimingInputTitle, TimingNumberInput } from "./styles";

type Props = {
    title: string,
    timingValue: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: FocusEvent<HTMLInputElement>) => void
};

export default function TimingInput({ title, timingValue, onChange, onBlur }: Props): JSX.Element {
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
                onBlur={onBlur}
            />
        </TimingInputContainer>
    );
}