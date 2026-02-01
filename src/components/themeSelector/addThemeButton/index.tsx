import type { ComponentType, JSX, SVGProps } from "react";
import { AddThemeButtonLink } from "./styles";

type Props = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    actionLabel: string
};

export default function AddThemeButton({ icon: Icon, actionLabel}: Props): JSX.Element {
    return (
        <AddThemeButtonLink title={actionLabel} aria-label={actionLabel}>
            <Icon />
        </AddThemeButtonLink>
    );
}