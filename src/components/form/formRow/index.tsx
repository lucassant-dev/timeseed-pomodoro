import type { JSX, ReactNode } from "react";
import { FormRowDiv } from "./styles";

type FormRowProps = {
    children: ReactNode,
    isHidden?: boolean
};

export default function FormRow({ children, isHidden }: FormRowProps): JSX.Element | null {
    return (
        isHidden
            ? null
            : (<FormRowDiv>
                {children}
              </FormRowDiv>)
    );
}