import type { JSX } from "react";
import styles from "@/components/timer/Timer.module.css"

export default function Timer(): JSX.Element {
    return (
        <div className={styles.timer}>
            00:00
        </div>
    );
}