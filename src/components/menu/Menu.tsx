import type { ComponentType, JSX, SVGProps } from "react";
import styles from "@/components/menu/Menu.module.css";
import MenuButton from "@/components/menuButton/MenuButton";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";

export default function Menu(): JSX.Element {
    const iconsToRender: ComponentType<SVGProps<SVGSVGElement>>[] = [
        HomeIcon,
        HistoryIcon,
        SunIcon,
        SettingsIcon
    ];
    
    return (
        <nav className={styles.menu}>
            {iconsToRender.map((iconToRender, index) => {
                return <MenuButton key={index} icon={iconToRender}/>
            })}
        </nav>
    );
}