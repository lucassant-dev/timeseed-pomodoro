import type { JSX, ReactNode } from "react";
import { InputContainer, InputLabel } from "./styles";

type Props = {
    children: ReactNode,
    title: string
};

export default function InputBox({ children, title }: Props): JSX.Element {
    return (
        <InputContainer>
            <InputLabel>{title}</InputLabel>
            {children}
        </InputContainer>
    );
}