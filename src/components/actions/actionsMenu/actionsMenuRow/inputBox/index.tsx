import type React from "react";
import type { JSX } from "react";
import { Input, InputDiv, InputLabel, InputWrapper } from "./styles";

type InputBoxProps = {
    label?: string,
    id?: string
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    isDisabled?: boolean,
    defaultValue?: string
}

export default function InputBox(props: InputBoxProps): JSX.Element {
    return (
        <InputDiv>
            {props.label && <InputLabel htmlFor={props.id}>{props.label}</InputLabel>}
            <InputWrapper>
                <Input
                    id={props.id}
                    type={props.type ?? "text"}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    disabled={props.isDisabled}
                / >
            </InputWrapper>
        </InputDiv>
    );
}