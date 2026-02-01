import type { JSX } from "react";
import MainTemplate from "@/templates/MainTemplate";
import Container from "@/components/container";
import Pomodoro from "@/components/pomodoro";

export default function Home(): JSX.Element {
    return (
        <MainTemplate>
            <Container>
                <Pomodoro />
            </Container>
        </MainTemplate>
    );
}