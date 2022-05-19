import type { Component } from "solid-js";
import CanvasBackgroud from "./components/CanvasBackground";
import Hero from "./components/Hero";

const App: Component = () => {
    return (
        <>
            <div className="border"></div>
            <Hero />
            <CanvasBackgroud />
        </>
    );
};

export default App;
