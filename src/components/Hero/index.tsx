import { Component, createEffect } from "solid-js";
import styles from "./Hero.module.scss";
import "./animation.scss";
import { opend, setOpenState } from "../../App";
import ToolTipThingy from "../ToolTipThingy";
const Hero: Component = () => {
    createEffect(() => {
        console.log(opend());
    });
    return (
        <ToolTipThingy text="CLICK ME" position="top">
            {(onMouseOver, onMouseLeave) => (
                <div
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    onClick={() => setOpenState(true)}
                    class={`hero ${opend() ? styles.hide : ""}`}
                >
                    <h1>Aria</h1>
                    <div className="line"></div>
                    <div className="descWrapper">
                        <p>good day</p>
                        <p>Im a web developer</p>
                    </div>
                </div>
            )}
        </ToolTipThingy>
    );
};

export default Hero;
