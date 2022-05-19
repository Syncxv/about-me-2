import { Component } from "solid-js";
import styles from "./Hero.module.scss";
const Hero: Component = () => {
    return (
        <div class={styles.hero}>
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
