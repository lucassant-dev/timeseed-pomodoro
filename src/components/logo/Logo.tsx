import type { JSX } from "react";
import styles from "@/components/logo/Logo.module.css";
import { Sprout } from "lucide-react";

export default function Logo(): JSX.Element {
    return (
        <div className={styles.logo}>
            <a className={styles.logoLink} href="#">
                <Sprout/>
                <span>Timeseed</span>
            </a>
        </div>
    );
}