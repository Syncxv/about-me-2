import { Component, createEffect } from "solid-js";
import styles from "./Hero.module.scss";
import "./animation.scss";
import { opend, setOpenState } from "../../App";
const Hero: Component = () => {
    createEffect(() => {
        console.log(opend());
    });
    return (
        <div onClick={() => setOpenState(true)} class={`hero ${opend() ? styles.hide : ""}`}>
            <h1>Aria</h1>
            <div className="line"></div>
            <div className={styles.descWrapper}>
                <p>good day</p>
                <p>Im a web developer</p>
            </div>
        </div>
    );
};

export default Hero;
