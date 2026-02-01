import type { JSX } from "react";
import { InputContainer, InputLabel, InputWrapper, Input } from "./styles";

type Props = {
    value: string | undefined,
    onChange: (value: string) => void,
    label?: string,
    placeholder?: string
};

export default function InputBox(props: Props): JSX.Element {
    return (
        <InputContainer>
            {props.label && <InputLabel>{props.label}</InputLabel>}
            <InputWrapper>
                <Input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                / >
            </InputWrapper>
        </InputContainer>
    );
}