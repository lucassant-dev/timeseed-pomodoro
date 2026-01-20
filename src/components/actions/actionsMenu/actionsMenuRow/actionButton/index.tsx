import type { JSX } from "react";
import { FlameIcon, PlayIcon } from "lucide-react";
import { Button } from "./styles";

type Props = {
    isRunning?: boolean
};

export default function ActionButton({ isRunning }: Props): JSX.Element {    
    return (
        <Button $isRunning={!!isRunning}>
            {isRunning ? <FlameIcon /> : <PlayIcon />}
        </Button>
    );
}