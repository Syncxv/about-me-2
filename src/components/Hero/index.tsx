import { Component, createSignal, createEffect } from "solid-js";
import { Transition } from "solid-transition-group";
import styles from "./Hero.module.scss";
import "./animation.scss";
const Hero: Component = () => {
    const [opend, setOpenState] = createSignal(false);
    createEffect(() => {
        console.log(opend());
    });
    return (
        <div className={styles.wrapper} style={{ [opend() ? "--cirlce-width" : ""]: "60rem" }}>
            <Transition name="hide">
                {!opend() && (
                    <div onClick={() => setOpenState(true)} class={styles.hero}>
                        <h1>Aria</h1>
                        <div className="line"></div>
                        <div className={styles.descWrapper}>
                            <p>good day</p>
                            <p>Im a web developer</p>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default Hero;
