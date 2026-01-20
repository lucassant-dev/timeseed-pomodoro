import type { JSX } from "react";
import { HeadingDiv } from "./style";
import Logo from "@/components/heading/logo";
import NavigationMenu from "@/components/heading/navigationMenu";

export default function Heading(): JSX.Element {
    return (
        <HeadingDiv>
            <Logo />
            <NavigationMenu />
        </HeadingDiv>
    );
}