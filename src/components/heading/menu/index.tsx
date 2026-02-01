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
            />

            <MenuButton
                icon={HistoryIcon}
                label={"Show history"}
            />

            <MenuButton
                icon={SunIcon}
                label={"Change theme"}
            />
    
            <MenuButton
                icon={SettingsIcon}
                label={"Settings"}
            />
        </MenuContainer>
    )
}