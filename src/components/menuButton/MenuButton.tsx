import type { ComponentType, JSX, SVGProps } from "react";
import styles from "@/components/menuButton/MenuButton.module.css";

type MenuButtonProps = {
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    href?: string
};

export default function MenuButton({
    icon: Icon,
    href
}: MenuButtonProps): JSX.Element {
    return (
        <a className={styles.menuButton} href={href ?? "#"}>
            <Icon />
        </a>
    );
}