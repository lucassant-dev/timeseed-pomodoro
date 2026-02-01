import type { JSX } from "react";
import { Sprout } from "lucide-react";
import { LogoContainer, LogoLink, LogoIconWrapper, LogoTitle } from "./styles";

export default function Logo(): JSX.Element {
    return (
        <LogoContainer>
            <LogoLink href="#">
                <LogoIconWrapper><Sprout /></LogoIconWrapper>
                <LogoTitle>Timeseed</LogoTitle>
            </LogoLink>
        </LogoContainer>
    );
}