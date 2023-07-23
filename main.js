import { Canvas } from './modules/canvas.js';
import { Rectangle } from './modules/rectangle.js';

// Creates the scene
let canvas = new Canvas('canvas', document.body)
canvas.draw();

// Creates scene background
let background = new Rectangle(canvas, 'stretch');
background.width = 1;
background.height = 1;
background.color = 'black';
background.draw();

// Creates hostile npc
let hostile = new Rectangle(canvas, 'dynamic');
hostile.width = .05;
hostile.height = .05;
hostile.x = -.3;
hostile.y = -.3;
hostile.color = 'orange';
hostile.draw();

// Creates player character
let player = new Rectangle(canvas, 'dynamic');
player.width = .05;
player.height = .05;
player.color = 'darkblue';
player.draw();

// Initiates scene refresh
let fps = 1000 / 60;
let draw = () => {
    canvas.draw();
    background.draw();
    player.draw();
    hostile.draw();
}
setInterval( draw, fps );

// This creates the event listeners on the window listening for keypresses/releases.
window.addEventListener( 'keydown', event => keysPressed( event, player ) );
window.addEventListener( 'keyup', event => keysReleased( event ) );

// Simply storing the keycode values in a more readable format.
const keyW = 87;
const keyA = 65;
const keyS = 83;
const keyD = 68;
let keys = {};

// Removed the switch statement for handling keypresses and instead I'm using an if statement now
// Updated the console logging to include the actual keycode pressed for better debugging in the future.
function keysPressed(event, player) {
    // store an entry for every key pressed
    keys[event.keyCode] = true;
    
    // left movement
    if (keys[keyA]) {
        player.x -= 0.01;
        console.log(`User pressed ${event.keyCode}. Object moved: ${player.x}`)
    }
    // right movement
    if (keys[keyD]) {
        player.x += 0.01;
        console.log(`User pressed ${event.keyCode}. Object moved: ${player.x}`)
    }
    //down movement 
    if (keys[keyS]) {
        player.y += 0.01;
        console.log(`User pressed ${event.keyCode}. Object moved: ${player.y}`)
    }
    // up movement 
    if (keys[keyW]) {
        player.y -= 0.01;
        console.log(`User pressed ${event.keyCode}. Object moved: ${player.y}`)
    }

    // prevents default system behavior from being triggered by keypresses in the window
    event.preventDefault();
}

function keysReleased(event) {
    // mark keys that were released 
    keys[event.keyCode] = false;
}
