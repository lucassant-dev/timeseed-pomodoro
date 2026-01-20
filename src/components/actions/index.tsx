import type { JSX } from "react";
import ActionsMenu from "@/components/actions/actionsMenu";
import Timer from "@/components/actions/timer";
import { ActionsDiv } from "./styles";

export default function Actions(): JSX.Element {
    return (
        <ActionsDiv>
            <Timer />
            <ActionsMenu />
        </ActionsDiv>
    )
}