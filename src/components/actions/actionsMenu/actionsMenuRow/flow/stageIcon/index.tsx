import type { ComponentType, JSX, SVGProps } from "react";
import { RiZzzFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import DoneIcon from "@/components/actions/actionsMenu/actionsMenuRow/flow/doneIcon";
import { Icon, IconDiv } from "./styles";

type Props = {
    side: "wake" | "sleep",
    isDone?: boolean,
    customIcons?: {
        wake?: ComponentType<SVGProps<SVGSVGElement>>,
        sleep?: ComponentType<SVGProps<SVGElement>>
    }
};

export default function StageIcon({ side, isDone, customIcons }: Props): JSX.Element {    
    const WakeIcon = customIcons?.wake ?? MdElectricBolt;
    const SleepIcon = customIcons?.sleep ?? RiZzzFill;
    const CurrentIcon = side == "wake" ? WakeIcon : SleepIcon;

    return (
        <IconDiv>
            <Icon $isDone={!!isDone}>
                <CurrentIcon />
            </Icon>
            <DoneIcon isVisible={isDone} />
        </IconDiv>
    );
}