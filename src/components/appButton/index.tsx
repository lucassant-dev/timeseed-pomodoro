import type { JSX } from "react";
import { AppButtonLink } from "./styles";

type Props = {
    label: string,
    height: number,
    width: number,
    onClick: () => void,
    isDisabled: boolean,
};

export default function AppButton({ label, height, width, onClick, isDisabled }: Props): JSX.Element {
    return (
        <AppButtonLink $width={width} $height={height} onClick={onClick} disabled={isDisabled}>
            {label}
        </AppButtonLink>
    )
}