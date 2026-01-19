import type { JSX, ReactNode } from "react";
import { ContainerContent, ContainerDiv } from "./styles";

type Props = {
    children: ReactNode
};

export default function Container({ children }: Props): JSX.Element {
    return (
        <ContainerDiv>
            <ContainerContent>
                { children }
            </ContainerContent>
        </ContainerDiv>
    );
}