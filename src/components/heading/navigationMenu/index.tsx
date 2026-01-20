import type { JSX } from "react";
import NavigationMenuButton from "@/components/heading/navigationMenu/navigationMenuButton";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import { NavigationMenuDiv } from "./styles";

export default function NavigationMenu(): JSX.Element {
    return (
        <NavigationMenuDiv>
            <NavigationMenuButton
                icon={HomeIcon}
                label={"Go to home"}
            />

            <NavigationMenuButton
                icon={HistoryIcon}
                label={"Show history"}
            />

            <NavigationMenuButton
                icon={SunIcon}
                label={"Change theme"}
            />
    
            <NavigationMenuButton
                icon={SettingsIcon}
                label={"Settings"}
            />
        </NavigationMenuDiv>
    )
}