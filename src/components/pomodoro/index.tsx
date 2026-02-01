import type { JSX } from "react";
import { PomodoroContainer } from "./styles";
import Timer from "@/components/pomodoro/timer";
import Menu from "@/components/pomodoro/menu";

export default function Pomodoro(): JSX.Element {
    return (
        <PomodoroContainer>
            <Timer />
            <Menu />
        </PomodoroContainer>
    )
}