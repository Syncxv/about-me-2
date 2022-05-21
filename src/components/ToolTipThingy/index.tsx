import { Component } from "solid-js";
import styles from "./bruh.module.scss";
interface Props {
    opacity?: number;
    onClick?: (
        e: MouseEvent & {
            currentTarget: HTMLSpanElement;
            target: Element;
        }
    ) => void;
    text: string;
    position: "top" | "bottom" | "left" | "right";
    ref?: HTMLElement;
}

const ToolTipThingy: Component<Props> = ({ children, ref, text, position, opacity = 0, onClick = () => {} }) => {
    return (
        <span ref={ref} className={styles.ok} onClick={onClick} style={{ "--opacity": opacity }}>
            <div className={`${styles.tooltip} ${styles[position]}`}>
                <div className={styles.text}>{text}</div>
                <div className={styles.thingy} />
            </div>
            <div className={styles.content}>{children}</div>
        </span>
    );
};

export default ToolTipThingy;
