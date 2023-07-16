import { Canvas } from "./modules/canvas.js";

// Creates new canvas
let canvas = new Canvas("test", document.body);
canvas.create();
canvas.width = 600;
canvas.height = 300;

canvas.context.fillStyle = "black";
canvas.context.fillRect(0, 0, canvas.width, canvas.height);

// TODO: create a listener to update canvas size on window resizing

// Just a test shape
canvas.context.beginPath();
canvas.context.arc(canvas.width / 2, 
                canvas.height / 2, 
                Math.min(canvas.width, canvas.height) / 30, 
                0, 2 * Math.PI);
canvas.context.strokeStyle = "white";
canvas.context.stroke();

// TODO: create movement of the circle using WASD
