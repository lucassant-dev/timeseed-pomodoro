import type { ComponentType, JSX, SVGProps } from "react";
import { Button, SvgDiv } from "./styles";

type MenuButtonProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    href?: string
};

export default function MenuButton({
    icon: Icon,
    href
}: MenuButtonProps): JSX.Element {
    return (
        <Button href={href ?? "#"}>
            <SvgDiv><Icon /></SvgDiv>
        </Button>
    );
}