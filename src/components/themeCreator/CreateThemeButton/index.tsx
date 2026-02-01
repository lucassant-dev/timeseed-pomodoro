import type { JSX } from "react";
import { CreateThemeButtonLink } from "./styles";

type Props = {
    onClick: () => void;
};

export default function CreateThemeButton({ onClick }: Props): JSX.Element {    
    return (
        <CreateThemeButtonLink onClick={onClick}>
            Confirm
        </CreateThemeButtonLink>
    );
}