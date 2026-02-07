import type { JSX } from "react";
import { AppButtonLink } from "./styles";

type Props = {
    label: string,
    height: number,
    width: number,
    onClick: () => void;
};

export default function AppButton({ label, height, width, onClick }: Props): JSX.Element {
    return (
        <AppButtonLink $width={width} $height={height} onClick={onClick}>
            {label}
        </AppButtonLink>
    )
}