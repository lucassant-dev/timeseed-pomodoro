import type { ComponentType, JSX, SVGProps } from "react";
import { StageIconContainer, StageIconWrapper } from "./styles";
import DoneIcon from "@/components/pomodoro/doneIcon";
import { RiZzzFill } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

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
        <StageIconContainer>
            <StageIconWrapper $isDone={!!isDone}>
                <CurrentIcon />
            </StageIconWrapper>
            <DoneIcon isVisible={isDone} />
        </StageIconContainer>
    );
}