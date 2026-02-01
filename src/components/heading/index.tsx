import type { JSX } from "react";
import { HeadingContainer } from "./styles";
import Logo from "@/components/heading/logo";
import NavigationMenu from "@/components/heading/menu";

export default function Heading(): JSX.Element {
    return (
        <HeadingContainer>
            <Logo />
            <NavigationMenu />
        </HeadingContainer>
    );
}