import { Component, onMount, onCleanup, createSignal, createEffect } from "solid-js";

import styles from "./CanvasStyle.module.scss";

const CIRCLE_AMMOUNT = 80;
const CIRCLE_RADIUS = 2;
const GAP = 20;
const Y_OFFSET = window.innerHeight / 3;
const X_OFFSET = window.innerWidth / 3;
const Y_CENTER = window.innerHeight / 2;
const X_CENTER = window.innerWidth / 2;

const overHalf = (n: number) => CIRCLE_AMMOUNT / 2 > n;
const pos = {
    x: 0,
    y: 0,
    radius: 100,
};

const onMouseMove = (e: MouseEvent) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
};

class Circle {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    origX: number;
    origY: number;
    size: number;
    speed: number;
    constructor(ctx: CanvasRenderingContext2D, i: number, j: number) {
        this.ctx = ctx;
        this.origX = CIRCLE_RADIUS * 2 * j + GAP * j;
        this.origY = CIRCLE_RADIUS * 2 * i + GAP * i;
        this.x = this.origX;
        this.y = this.origY;
        this.size = CIRCLE_RADIUS;
        this.speed = Math.random() * 25 + 5;
    }
    update() {
        const dx = pos.x - this.x;
        const dy = pos.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = pos.radius;
        let force = (maxDistance - distance) / maxDistance; // 0 ~ 1
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let directionX = forceDirectionX * force * this.speed;
        let directionY = forceDirectionY * force * this.speed;
        if (distance < pos.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.origX) {
                let dx = this.x - this.origX;
                this.x -= dx / 10;
            }
            if (this.y !== this.origY) {
                let dy = this.y - this.origY;
                this.y -= dy / 10;
            }
        }
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgb(255,255,255, 1)";
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
const CanvasBackgroud: Component = () => {
    let canvas: HTMLCanvasElement;
    document.addEventListener("mousemove", onMouseMove);
    // createEffect(() => {
    //     console.log("x: ", pos.x, "y: ", pos.y);
    // });
    onMount(() => {
        const ctx = canvas.getContext("2d")!;
        let frame = requestAnimationFrame(loop);

        let bruh: Circle[] = [];
        for (let i = 0; i < CIRCLE_AMMOUNT; ++i) {
            for (let j = 0; j < CIRCLE_AMMOUNT; ++j) {
                bruh.push(new Circle(ctx, i, j));
            }
        }

        function loop() {
            frame = requestAnimationFrame(loop);
            ctx.fillStyle = "rgb(0,0,0, 0.4)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            bruh.forEach((elem) => {
                elem.update();
                elem.draw();
            });
        }

        onCleanup(() => {
            cancelAnimationFrame(frame);
            document.removeEventListener;
        });
    });

    return <canvas ref={(el) => (canvas = el)} class={styles.bgThing} width={window.innerWidth} height={window.innerHeight} />;
};

export default CanvasBackgroud;
