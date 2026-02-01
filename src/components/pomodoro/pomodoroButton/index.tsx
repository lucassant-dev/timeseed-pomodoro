import type { JSX } from "react";
import { PomodoroButtonLink } from "./styles";
import { FlameIcon, PlayIcon } from "lucide-react";

type Props = {
    isRunning?: boolean
};

export default function PomodoroButton({ isRunning }: Props): JSX.Element {    
    return (
        <PomodoroButtonLink $isRunning={isRunning}>
            {isRunning ? <FlameIcon /> : <PlayIcon />}
        </PomodoroButtonLink>
    );
}