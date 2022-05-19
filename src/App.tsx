import type { Component } from "solid-js";
import CanvasBackgroud from "./components/CanvasBackground";
import Hero from "./components/Hero";

const App: Component = () => {
    return (
        <div>
            <div className="border"></div>
            <Hero />
            <CanvasBackgroud />
        </div>
    );
};

export default App;
