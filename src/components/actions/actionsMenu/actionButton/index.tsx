import type { JSX } from "react";
import { Button } from "./styles";
import { FlameIcon, PlaneIcon } from "lucide-react";

type Props = {
    isRunning?: boolean
};

export default function ActionButton({ isRunning }: Props): JSX.Element {    
    return (
        <Button $isRunning={isRunning}>
            {isRunning ? <FlameIcon /> : <PlaneIcon />}
        </Button>
    );
}