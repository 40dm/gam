import { Canvas } from './modules/canvas.js';
import { Circle } from './modules/circle.js';
import { Rectangle } from './modules/rectangle.js';


// Creates resizable canvas with relative shape sizes
let canvas = new Canvas('game', document.body);
let rectangle = new Rectangle(canvas);
let circle = new Circle(canvas);

let draw = new ResizeObserver(elements => {
    elements.forEach(element => {
        canvas.draw();
        rectangle.draw();
        circle.draw();
    });
});
draw.observe(canvas.parent);

// This creates the event listeners on the window listening for keypresses/releases. 
window.addEventListener('keydown', keysPressed, false);
window.addEventListener('keyup', keysReleased, false);

let deltaX = 0;
let deltaY = 0;
// Simply storing the keycode values in a more readable format.
const keyW = 87;
const keyA = 65;
const keyS = 83;
const keyD = 68;
let keys = [];

// Removed the switch statement for handling keypresses and instead I'm using an if statement now
// TODO: pass deltaX and deltaY into some kind of redrawing method/function for moving the object.
function keysPressed(key) {
    // store an entry for every key pressed
    keys[key.keyCode] = true;
    // left movement
    if (keys[keyA]) {
        deltaX -= 2;
        console.log(`User pressed ${key}. Object moved: ${deltaX}`)
    }
    // right movement
    if (keys[keyD]) {
        deltaX += 2;
        console.log(`User pressed ${key}. Object moved: ${deltaX}`)
    }
    //down movement 
    if (keys[keyS]) {
        deltaY -= 2;
        console.log(`User pressed ${key}. Object moved: ${deltaY}`)
    }
    // up movement 
    if (keys[keyW]) {
        deltaY += 2;
        console.log(`User pressed ${key}. Object moved: ${deltaY}`)
    }

    // prevents default system behavior from being triggered by keypresses in the window
    key.preventDefault();

    // redraw function goes here in the future
    // e.g. drawSomething();
}

function keysReleased(key) {
    // mark keys that were released 
    keys[key.keyCode] = false;
}