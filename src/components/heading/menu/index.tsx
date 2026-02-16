import type { JSX } from "react";
import MenuButton from "@/components/heading/menuButton";
import { MenuContainer } from "./styles";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";

export default function Menu(): JSX.Element {
    return (
        <MenuContainer>
            <MenuButton
                icon={HomeIcon}
                label={"Go to home"}
                onClick={() => {}}
            />

            <MenuButton
                icon={HistoryIcon}
                label={"Show history"}
                onClick={() => {}}
            />

            <MenuButton
                icon={SunIcon}
                label={"Change theme"}
                onClick={() => {}}
            />
    
            <MenuButton
                icon={SettingsIcon}
                label={"Settings"}
                onClick={() => {}}
            />
        </MenuContainer>
    )
}