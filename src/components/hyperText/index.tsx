import type { JSX, ReactNode } from "react";
import { HyperTextContainer } from "./styles";

type Props = {
    children: ReactNode
};

export default function HyperText({ children }: Props): JSX.Element {
    return <HyperTextContainer>{children}</HyperTextContainer>;
}