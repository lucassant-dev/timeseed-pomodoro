import type { JSX, ReactNode } from "react";
import styles from "@/components/heading/Heading.module.css";

type HeadingProps = {
    children: ReactNode
};

export default function Heading({ children }: HeadingProps): JSX.Element {
    return (
        <h1 className={styles.heading}>{children}</h1>
    );
}