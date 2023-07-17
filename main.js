import { Canvas } from "./modules/canvas.js";
import { Circle } from "./modules/circle.js";
import { Rectangle } from "./modules/rectangle.js";

// Creates new canvas
let canvas = new Canvas("game", document.body);
canvas.create();
canvas.width = canvas.getParentWidth();
canvas.height = canvas.getParentHeight();
canvas.observe(canvas.parent);

// Creates new rectangle
let rectangle = new Rectangle(canvas, canvas.width, canvas.height, 0, 0, "black");
rectangle.draw();
rectangle.observe(canvas.parent);

// Creates new circle
let circle = new Circle(canvas.context, 5, canvas.center.x, canvas.center.y, "white");
circle.draw();

// TODO: create movement of the circle using WASD
