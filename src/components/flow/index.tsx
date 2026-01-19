import type { JSX } from "react";
import StageIcon from "@/components/flow/stageIcon";
import { FlowBar, FlowDiv, Icon } from "./styles";

export default function Flow(): JSX.Element {
    return (
        <FlowDiv>
            <FlowBar>
                <Icon><StageIcon side="moon" isDone /></Icon>
                <Icon><StageIcon side="sun" isDone /></Icon>
                <Icon><StageIcon side="moon" /></Icon>
                <Icon><StageIcon side="sun" /></Icon>
                <Icon><StageIcon side="moon" /></Icon>
            </FlowBar>
        </FlowDiv>
    );
}