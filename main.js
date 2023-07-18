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

// This creates an event listener on the body element listening for keypresses. 
// TODO: Modify the event listener to allow for keyup & keydown moves... e.g. a user holding a key should
// keep the shape moving until they release the key.
document.querySelector('body').addEventListener('keyup', move)

// This function simply logs the key the user pressed and has logic for detecting WASD presses.
// The logic below outputs the key that was pressed and for WASD presses denotes what the circle should do.
// The logic also updates the deltaX and deltaY variables based on which key was pressed.
// TODO: Pass the deltaY and deltaX variables into the draw() methods to update position. 
let deltaX = 0;
let deltaY = 0;

function move(key) {
    switch(key.code) {
        case 'KeyW':
            deltaY -= 2;
            console.log(`The user pressed ${key.code}. Move the circle UP one unit.`);
            break;
        case 'KeyA':
            deltaX -= 2;
            console.log(`The user pressed ${key.code}. Move the circle LEFT one unit.`);
            break;
        case 'KeyS':
            deltaY += 2;
            console.log(`The user pressed ${key.code}. Move the circle DOWN one unit.`);
            break;
        case 'KeyD':
            deltaX += 2;
            console.log(`The user pressed ${key.code}. Move the circle RIGHT one unit.`);
            break;
        default:
            console.log(`The user pressed: ${key.code}. Do nothing, for now.`);
    }
    // Here is where you would put the draw function for whatever shape you're moving.
    // e.g. circle.draw(deltaX, deltaY) OR rectangle.draw(deltaX, deltaY)
}
