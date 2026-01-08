import type { JSX, ReactNode } from "react";
import styles from "@/components/container/Container.module.css";

type ContainerProps = {
    children: ReactNode
}

export default function Container({ children }: ContainerProps): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    );
}