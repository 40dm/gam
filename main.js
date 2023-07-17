import { Canvas } from "./modules/canvas.js";
import { Circle } from "./modules/circle.js";
import { Rectangle } from "./modules/rectangle.js";

// Creates new canvas
let canvas = new Canvas("game", document.body);
canvas.create();
canvas.width = canvas.getParentWidth();
canvas.height = canvas.getParentHeight();

// TODO: clean up this observer code for resizing
// const myObserver = new ResizeObserver(entries => {
//     entries.forEach(entry => {
//         canvas.width = canvas.getParentWidth();
//         canvas.height = canvas.getParentHeight();
//         // canvas.context.fillStyle = "black";
//         // canvas.context.fillRect(0, 0, canvas.width, canvas.height);
//         // let circle = new Circle(canvas.context, 5, canvas.center.x, canvas.center.y, "white");
//         // circle.draw();
//     });
// });
// myObserver.observe(canvas.parent);

// Creates new rectangle
// TODO: add rectangle class module
let rectangle = new Rectangle(canvas.context, canvas.width, canvas.height, 0, 0, "black");
rectangle.draw();

// Creates new circle
// TODO: center coords need to update with resize so
// that i don't need to duplicate this line in the observer
let circle = new Circle(canvas.context, 5, canvas.center.x, canvas.center.y, "white");
circle.draw();

// TODO: create movement of the circle using WASD
