import type { JSX } from "react";
import ActionsMenuRow from "@/components/actions/actionsMenu/actionsMenuRow";
import InputBox from "@/components/actions/actionsMenu/actionsMenuRow/inputBox";
import Flow from "@/components/actions/actionsMenu/actionsMenuRow/flow";
import ActionButton from "@/components/actions/actionsMenu/actionsMenuRow/actionButton";
import { ActionsMenuDiv } from "./styles";

export default function ActionsMenu(): JSX.Element {
    return (
        <ActionsMenuDiv>
            <ActionsMenuRow>
                <InputBox
                    placeholder="Input task"
                    label="Task"
                />
            </ActionsMenuRow>
            <ActionsMenuRow>
                <Flow />
            </ActionsMenuRow>
            <ActionsMenuRow>
                <ActionButton />
            </ActionsMenuRow>
        </ActionsMenuDiv>
    );
}
