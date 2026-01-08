import type { JSX } from "react";
import type JsxProps from "@/types/JsxProps";
import styles from "@/components/heading/Heading.module.css";

export default function Heading({ children }: JsxProps): JSX.Element {
    return (
        <h1 className={styles.heading}>{children}</h1>
    );
}