import type { JSX } from "react";
import { Input, InputDiv, InputLabel, InputWrapper } from "./styles";

type InputBoxProps = {
    value: string | undefined,
    onChange: (value: string) => void,
    label?: string,
    placeholder?: string
};

export default function InputBox(props: InputBoxProps): JSX.Element {
    return (
        <InputDiv>
            {props.label && <InputLabel>{props.label}</InputLabel>}
            <InputWrapper>
                <Input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                / >
            </InputWrapper>
        </InputDiv>
    );
}