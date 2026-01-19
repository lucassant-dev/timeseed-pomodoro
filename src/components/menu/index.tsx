import type { ComponentType, JSX, SVGProps } from "react";
import MenuButton from "@/components/menu/menuButton";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import { MenuDiv } from "./styles";

export default function Menu(): JSX.Element {
    const buttonsToRender: [ComponentType<SVGProps<SVGSVGElement>>, string?][] = [
        [HomeIcon],
        [HistoryIcon],
        [SunIcon],
        [SettingsIcon]
    ];
    
    return (
        <MenuDiv>
            {buttonsToRender.map((buttonToRender, index) => {
                return <MenuButton
                    key={index}
                    icon={buttonToRender[0]}
                    href={buttonToRender[1]}
                />
            })}
        </MenuDiv>
    )
}