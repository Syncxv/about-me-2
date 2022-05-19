import { Component } from "solid-js";
import { setOpenState } from "../../App";
import styles from "./Info.module.scss";
const InfoStuff: Component = () => {
    return (
        <>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <img
                        class={styles.avatar}
                        src="https://cdn.discordapp.com/avatars/549244932213309442/5b3984903ff4d507f93465a1e1d86ec7.webp"
                        alt=""
                    />
                    <h2>Aria</h2>
                </div>
                <span onClick={() => setOpenState(false)} className={styles.backButton}>
                    Back
                </span>
            </div>
        </>
    );
};

export default InfoStuff;
