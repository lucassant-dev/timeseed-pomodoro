import type { ComponentType, JSX, SVGProps } from "react";
import { AddButton } from "./styles";

type Props = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    actionLabel: string
};

export default function AddThemeButton({ icon: Icon, actionLabel}: Props): JSX.Element {
    return (
        <AddButton title={actionLabel} aria-label={actionLabel}>
            <Icon />
        </AddButton>
    );
}