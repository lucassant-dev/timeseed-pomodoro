import type { JSX } from "react";
import StageIcon from "@/components/actions/actionsMenu/actionsMenuRow/flow/stageIcon";
import { FlowBar, FlowDiv, Icon } from "./styles";

export default function Flow(): JSX.Element {
    return (
        <FlowDiv>
            <FlowBar>
                <Icon><StageIcon side="sleep" isDone /></Icon>
                <Icon><StageIcon side="wake" isDone /></Icon>
                <Icon><StageIcon side="sleep" /></Icon>
                <Icon><StageIcon side="wake" /></Icon>
                <Icon><StageIcon side="sleep" /></Icon>
            </FlowBar>
        </FlowDiv>
    );
}