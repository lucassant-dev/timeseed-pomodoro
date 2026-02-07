import type { ChangeEvent, JSX } from "react";
import { Input, InputWrapper } from "./styles";

type Props = {
    name: string,
    value: string | undefined,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    label: string
};

export default function DefaultInput({ name, label, onChange, value }: Props): JSX.Element {
    return (
        <InputWrapper>
            <Input
                name={name}
                type="text"
                placeholder={label}
                value={value}
                onChange={onChange}
            / >
        </InputWrapper>
    );
};