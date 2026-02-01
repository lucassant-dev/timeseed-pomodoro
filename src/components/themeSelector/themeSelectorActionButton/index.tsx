import type { JSX } from "react";
import { ThemeSelectorActionButtonLink } from "./styles";

type Props = {
    label: string,
    color: string,
    onClick: () => void
};

export default function ThemeSelectorActionButton({ label, color, onClick }: Props): JSX.Element {
    const title: string = `${label} theme`;
    return (
        <ThemeSelectorActionButtonLink onClick={onClick} title={title} aria-label={title} $color={color}>
            {label}
        </ThemeSelectorActionButtonLink>
    );
}