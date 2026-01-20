import type { JSX } from "react";
import { IconDiv } from "./styles";
import { CheckIcon } from "lucide-react";

type Props = {
    isVisible?: boolean
};

export default function DoneIcon({ isVisible }: Props): JSX.Element {    
    return (
        <IconDiv $isVisible={!!isVisible}><CheckIcon /></IconDiv>
    );
}