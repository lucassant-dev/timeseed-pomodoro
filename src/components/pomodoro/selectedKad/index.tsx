import type { JSX } from "react";
import StageIcon from "@/components/pomodoro/stageIcon";
import { SelectedKadContainer, KadBar, KadIconWrapper } from "./styles";

export default function SelectedKad(): JSX.Element {
    return (
        <SelectedKadContainer>
            <KadBar>
                <KadIconWrapper><StageIcon side="sleep" isDone /></KadIconWrapper>
                <KadIconWrapper><StageIcon side="wake" isDone /></KadIconWrapper>
                <KadIconWrapper><StageIcon side="sleep" /></KadIconWrapper>
                <KadIconWrapper><StageIcon side="wake" /></KadIconWrapper>
                <KadIconWrapper><StageIcon side="sleep" /></KadIconWrapper>
            </KadBar>
        </SelectedKadContainer>
    );
}