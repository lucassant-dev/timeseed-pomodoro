import type { ComponentType, JSX, MouseEvent, SVGProps } from "react";
import { MenuButtonLink, MenuButtonIconWrapper } from "./styles";

type Props = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    onClick?: (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void,
    label: string
};

export default function MenuButton({ icon: Icon, onClick, label }: Props): JSX.Element {
    return (
        <MenuButtonLink onClick={onClick} aria-label={label} title={label}>
            <MenuButtonIconWrapper><Icon /></MenuButtonIconWrapper>
        </MenuButtonLink>
    );
}