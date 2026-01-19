import type { JSX } from "react";
import SunIconSvg from "@/assets/sun.svg";
import MoonIconSvg from "@/assets/moon.svg";
import DoneIcon from "@/components/flow/doneIcon";
import { Icon, IconDiv } from "./styles";

type Props = {
    side: "sun" | "moon",
    isDone?: boolean
};

export default function StageIcon({ side, isDone }: Props): JSX.Element {    
    return (
        <IconDiv>
            {side === "sun"
                ? <Icon $isDone={!!isDone} src={SunIconSvg} alt="Sun" />
                : <Icon $isDone={!!isDone} src={MoonIconSvg} alt="Moon" />}
            <DoneIcon isVisible={isDone} />
        </IconDiv>
    );
}