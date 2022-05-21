import { Component, For } from "solid-js";
import { setOpenState } from "../../App";
import styles from "./Info.module.scss";
import PFP from "../../assets/pfp.png";
import Discord from "../Icons/Discord";
import copy from "../../util/copy";
import Steam from "../Icons/Steam";
import Github from "../Icons/Github";
import switchClass from "../../util/switchClass";
import ToolTipThingy from "../ToolTipThingy";
let ref: HTMLElement;
const InfoStuff: Component = () => {
    return (
        <>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <img class={styles.avatar} src={PFP} alt="" />
                    <h2>Aria</h2>
                    <div className={styles.contact}>
                        <span
                            onClick={() => {
                                copy("Aria#8171");
                                switchClass(ref);
                            }}
                            className={`${styles.item}`}
                        >
                            <ToolTipThingy ref={ref} color="green" text="Copied" position="top">
                                {() => <Discord />}
                            </ToolTipThingy>
                        </span>
                        <a href="https://steamcommunity.com/id/__Aria__" target="_blank" className={styles.item}>
                            <Steam />
                        </a>
                        <a href="https://github.com/Syncxv" target="_blank" className={styles.item}>
                            <Github />
                        </a>
                    </div>
                </div>
                <span onClick={() => setOpenState(false)} className={styles.backButton}>
                    Back
                </span>
            </div>
        </>
    );
};

export default InfoStuff;
