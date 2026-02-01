import type { JSX } from "react";
import { MenuContainer } from "./styles";
import MenuRow from "@/components/pomodoro/menuRow";
import InputBox from "@/components/inputBox";
import SelectedKad from "@/components/pomodoro/selectedKad";
import PomodoroButton from "@/components/pomodoro/pomodoroButton";

export default function Menu(): JSX.Element {
    return (
        <MenuContainer>
            <MenuRow>
                <InputBox
                    placeholder="Input task"
                    label="Task"
                    value=""
                    onChange={() => {}}
                />
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
