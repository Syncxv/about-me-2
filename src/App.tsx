import { Component, createSignal, Match, Show, Switch } from "solid-js";
import { Transition } from "solid-transition-group";
import CanvasBackgroud from "./components/CanvasBackground";
import Hero from "./components/Hero";
import InfoStuff from "./components/Info";
export const [opend, setOpenState] = createSignal(false);

const App: Component = () => {
    return (
        <>
            <div className="border"></div>
            <div className="wrapper" style={{ [opend() ? "--cirlce-width" : ""]: "60rem" }}>
                <Transition name="fade" mode="outin">
                    <Switch>
                        <Match when={opend()}>
                            <InfoStuff />
                        </Match>
                        <Match when={!opend()}>
                            <Hero />
                        </Match>
                    </Switch>
                </Transition>
                {/* <Show when={opend()} fallback={<Hero />}>
                    <InfoStuff />
                </Show> */}
            </div>
            <CanvasBackgroud />
        </>
    );
};

export default App;
