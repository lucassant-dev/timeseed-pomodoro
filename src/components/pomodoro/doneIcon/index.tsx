import type { JSX } from "react";
import { IconContainer } from "./styles";
import { CheckIcon } from "lucide-react";

type Props = {
    isVisible?: boolean
};

export default function PomodoroDoneIcon({ isVisible }: Props): JSX.Element {    
    return (
        <IconContainer $isVisible={!!isVisible}>
            <CheckIcon />
        </IconContainer>
    );
}