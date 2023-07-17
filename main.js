import { Canvas } from "./modules/canvas.js";
import { Circle } from "./modules/circle.js";

// Creates new canvas
let canvas = new Canvas("test");
canvas.create();
canvas.width = 600;
canvas.height = 300;
canvas.context.fillStyle = "black";
canvas.context.fillRect(0, 0, canvas.width, canvas.height);

// Creates new circle
let circle = new Circle(canvas.context, canvas.center.x, canvas.center.y, 5, "white");
circle.draw();

// TODO: create movement of the circle using WASD
