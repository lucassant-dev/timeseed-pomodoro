import type { JSX } from "react";
import { Sprout } from "lucide-react";
import { Link, LogoDiv, SvgDiv, Title } from "./styles";

export default function Logo(): JSX.Element {
    return (
        <LogoDiv>
            <Link href="#">
                <SvgDiv><Sprout /></SvgDiv>
                <Title>Timeseed</Title>
            </Link>
        </LogoDiv>
    );
}