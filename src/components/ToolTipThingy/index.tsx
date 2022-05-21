import { createSignal, JSX } from "solid-js";
import styles from "./bruh.module.scss";
interface Props {
    onClick?: (
        e: MouseEvent & {
            currentTarget: HTMLSpanElement;
            target: Element;
        }
    ) => void;
    opacity?: number;
    color?: "black" | "white" | "green" | "red";
    text: string;
    position: "top" | "bottom" | "left" | "right";
    ref?: HTMLElement;

    children: (onMouseEnter: () => any, onMouseLeave: () => any) => JSX.Element;
}

const ToolTipThingy = ({ ref, text, position, color = "white", opacity = 0, onClick = () => {}, ...props }: Props) => {
    const [visible, setVisable] = createSignal(false);
    const what = props.children(
        () => setVisable(true),
        () => setVisable(false)
    );
    return (
        <span ref={ref} className={`${styles.ok} ${styles[color]}`} onClick={onClick} style={{ "--opacity": visible() ? 1 : 0 }}>
            <div className={`${styles.tooltip} ${styles[position]}`}>
                <div className={styles.text}>{text}</div>
                <div className={styles.thingy} />
            </div>
            <div className={styles.content}>{what}</div>
        </span>
    );
};

export default ToolTipThingy;
