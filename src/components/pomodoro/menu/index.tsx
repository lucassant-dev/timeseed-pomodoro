import type { JSX } from "react";
import { MenuContainer } from "./styles";
import MenuRow from "@/components/pomodoro/menuRow";
import SelectedKad from "@/components/pomodoro/selectedKad";
import PomodoroButton from "@/components/pomodoro/pomodoroButton";
import FlipCard from "@/components/flipCard";

export default function Menu(): JSX.Element {
    return (
        <MenuContainer>
            <MenuRow>
                <FlipCard />
            </MenuRow>
            <MenuRow>
                <SelectedKad />
            </MenuRow>
            <MenuRow>
                <PomodoroButton />
            </MenuRow>
        </MenuContainer>
    );
}
