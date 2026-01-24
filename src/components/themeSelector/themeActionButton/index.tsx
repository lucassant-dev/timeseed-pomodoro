import type { JSX } from "react";
import { ActionButton } from "./styles";

type Props = {
    label: string,
    color: string,
    onClick: () => void
};

export default function ThemeActionButton({ label, color, onClick }: Props): JSX.Element {
    const title: string = `${label} theme`;
    
    return (
        <ActionButton onClick={onClick} title={title} aria-label={title} $color={color}>
            {label}
        </ActionButton>
    );
}