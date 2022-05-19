import { Component, onMount, onCleanup } from "solid-js";

import styles from "./CanvasStyle.module.scss";

const CIRCLE_AMMOUNT = 40;
const CIRCLE_RADIUS = 3;
const GAP = 60;

let canvas: HTMLCanvasElement;
let h: number;
let w: number;
let circles: Circle[] = [];
const pos = {
    x: 0,
    y: 0,
    radius: 75,
};

const onMouseMove = (e: MouseEvent) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
};
const onMouseOut = () => {
    pos.x = -1;
    pos.y = -1;
};

class Circle {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    origX: number;
    origY: number;
    size: number;
    speed: number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
        this.ctx = ctx;
        this.origX = x;
        this.origY = y;
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
    onMount(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseout", onMouseOut);
        document.addEventListener("resize", onResize);
        const ctx = canvas.getContext("2d")!;
        let frame = requestAnimationFrame(loop);
        function onResize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;

            for (let y = (((h - GAP) % GAP) + GAP) / 2; y < h; y += GAP) {
                for (let x = (((w - GAP) % GAP) + GAP) / 2; x < w; x += GAP) {
                    circles.push(new Circle(ctx, x, y));
                }
            }
        }
        onResize();
        function loop() {
            frame = requestAnimationFrame(loop);
            ctx.fillStyle = "rgb(0,0,0, 0.8)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            circles.forEach((elem) => {
                elem.update();
                elem.draw();
            });
        }

        onCleanup(() => {
            cancelAnimationFrame(frame);
            document.removeEventListener("resize", onResize);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseout", onMouseOut);
        });
    });

    return <canvas ref={(el) => (canvas = el)} class={styles.bgThing} width={window.innerWidth} height={window.innerHeight} />;
};

export default CanvasBackgroud;
