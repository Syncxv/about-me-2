import { Component } from "solid-js";
import { setOpenState } from "../../App";
import styles from "./Info.module.scss";
import PFP from "../../assets/pfp.png";
import Discord from "../Icons/Discord";
import copy from "../../util/copy";
const InfoStuff: Component = () => {
    return (
        <>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <img class={styles.avatar} src={PFP} alt="" />
                    <h2>Aria</h2>
                    <div className={styles.contact}>
                        <span onClick={() => copy("Aria#8171")} className={styles.item}>
                            <Discord />
                        </span>
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
