import { Component, createSignal, JSX } from "solid-js";
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
    children: (onMouseOver: () => any, onMouseLeave: () => any) => JSX.Element;
}

const ToolTipThingy = ({ ref, text, position, opacity = 0, onClick = () => {}, ...props }: Props) => {
    const [visible, setVisable] = createSignal(false);
    const what = props.children(
        () => setVisable(true),
        () => setVisable(false)
    );
    return (
        <span ref={ref} className={styles.ok} onClick={onClick} style={{ "--opacity": visible() ? 1 : 0 }}>
            <div className={`${styles.tooltip} ${styles[position]}`}>
                <div className={styles.text}>{text}</div>
                <div className={styles.thingy} />
            </div>
            <div className={styles.content}>{what}</div>
        </span>
    );
};

export default ToolTipThingy;
