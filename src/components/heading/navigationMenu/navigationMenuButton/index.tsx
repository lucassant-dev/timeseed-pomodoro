import type { ComponentType, JSX, MouseEvent, SVGProps } from "react";
import { Button, SvgDiv } from "./styles";

type NavigationMenuButtonProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    onClick?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void,
    label: string
};

export default function NavigationMenuButton({
    icon: Icon,
    onClick,
    label
}: NavigationMenuButtonProps): JSX.Element {
    return (
        <Button onClick={onClick} aria-label={label} title={label}>
            <SvgDiv><Icon /></SvgDiv>
        </Button>
    );
}