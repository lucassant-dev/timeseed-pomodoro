import type { JSX } from "react";
import { ConfirmButton } from "./styles";

type Props = {
    onClick: () => void;
};

export default function ConfirmThemeButton({ onClick }: Props): JSX.Element {    
    return (
        <ConfirmButton onClick={onClick}>Confirm</ConfirmButton>
    );
}