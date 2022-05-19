import { Component, createSignal, createEffect } from "solid-js";
import styles from "./Hero.module.scss";
const Hero: Component = () => {
    const [opend, setOpenState] = createSignal(false);
    createEffect(() => {
        console.log(opend());
    });
    return (
        <div className={styles.wrapper} style={{ [opend() ? "--cirlce-width" : ""]: "60rem" }}>
            <div onClick={() => setOpenState(!opend())} class={`${styles.hero} ${opend() && styles.hide}`}>
                <h1>Aria</h1>
                <div className="line"></div>
                <div className={styles.descWrapper}>
                    <p>good day</p>
                    <p>Im a web developer</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
