import type { JSX } from "react";
import ActionsMenuRow from "@/components/actions/actionsMenu/actionsMenuRow";
import InputBox from "@/components/inputBox";
import Flow from "@/components/actions/actionsMenu/actionsMenuRow/flow";
import { ActionsMenuDiv } from "./styles";
import ActionButton from "@/components/actions/actionsMenu/actionButton";

export default function ActionsMenu(): JSX.Element {
    return (
        <ActionsMenuDiv>
            <ActionsMenuRow>
                <InputBox
                    placeholder="Input task"
                    label="Task"
                    value=""
                    onChange={() => {}}
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
