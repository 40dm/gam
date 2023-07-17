import { Canvas } from "./modules/canvas.js";
import { Circle } from "./modules/circle.js";
// TODO: import { Rectangle } from "./modules/rectangle.js";

// Creates new canvas
let canvas = new Canvas("game", document.body);
canvas.create();
canvas.width = canvas.getParentWidth();
canvas.height = canvas.getParentHeight();

// TODO: clean up this observer code for resizing
const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        console.log('width', entry.contentRect.width);
        console.log('height', entry.contentRect.height);
        canvas.width = canvas.getParentWidth();
        canvas.height = canvas.getParentHeight();
        canvas.context.fillStyle = "black";
        canvas.context.fillRect(0, 0, canvas.width, canvas.height);
        let circle = new Circle(canvas.context, canvas.center.x, canvas.center.y, 5, "white");
        circle.draw();
    });
});
myObserver.observe(canvas.parent);

// Creates new rectangle
// TODO: add rectangle class module
canvas.context.fillStyle = "black";
canvas.context.fillRect(0, 0, canvas.width, canvas.height);

// Creates new circle
// TODO: center coords need to update with resize so
// that i don't need to duplicate this line in the observer
let circle = new Circle(canvas.context, canvas.center.x, canvas.center.y, 5, "white");
circle.draw();

// TODO: create movement of the circle using WASD
