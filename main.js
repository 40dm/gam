import { Canvas } from './modules/canvas.js';
import { Circle } from './modules/circle.js';
import { Rectangle } from './modules/rectangle.js';


// Creates canvas and shapes
let canvas = new Canvas('game', document.body);
let scene = {
    model: new Rectangle(canvas),
    pos: { x: 0, y: 0 },
    size: 1.0,
    color: 'darkblue',
}
let player = {
    model: new Circle(canvas),
    pos: { x: 0, y: 0 },
    size: 0.05,
};
let enemy = {
    model: new Rectangle(canvas),
    pos: { x: -0.25, y: 0.25 },
    size: 0.05,
    color: 'black',
};

// Draws and redraws canvas and shapes
new ResizeObserver(draw).observe(canvas.parent);
function draw() {
    canvas.draw();
    scene.model.draw(scene.pos.x, scene.pos.y, scene.size, scene.size, scene.color, true);
    enemy.model.draw(enemy.pos.x, enemy.pos.y, enemy.size, enemy.size, enemy.color, false);
    player.model.draw(player.pos.x, player.pos.y, player.size);
}

// This creates the event listeners on the window listening for keypresses/releases.
window.addEventListener('keydown', event => { keysPressed(event, player.pos); draw() }, false);
window.addEventListener('keyup', keysReleased, false);

// Simply storing the keycode values in a more readable format.
const keyW = 87;
const keyA = 65;
const keyS = 83;
const keyD = 68;
let keys = {};

// Removed the switch statement for handling keypresses and instead I'm using an if statement now
// Updated the console logging to include the actual keycode pressed for better debugging in the future.
function keysPressed(key, position) {
    // store an entry for every key pressed
    keys[key.keyCode] = true;
    
    // left movement
    if (keys[keyA]) {
        position.x -= 0.01;
        console.log(`User pressed ${key.keyCode}. Object moved: ${position.x}`)
    }
    // right movement
    if (keys[keyD]) {
        position.x += 0.01;
        console.log(`User pressed ${key.keyCode}. Object moved: ${position.x}`)
    }
    //down movement 
    if (keys[keyS]) {
        position.y -= 0.01;
        console.log(`User pressed ${key.keyCode}. Object moved: ${position.y}`)
    }
    // up movement 
    if (keys[keyW]) {
        position.y += 0.01;
        console.log(`User pressed ${key.keyCode}. Object moved: ${position.y}`)
    }

    // prevents default system behavior from being triggered by keypresses in the window
    key.preventDefault();
}

function keysReleased(key) {
    // mark keys that were released as false
    keys[key.keyCode] = false;
    console.log(keys)
    // When a key is released, check keys for any keys that STILL have a value of true.
    // If a key ahs a value of true, then call the keysPressed function with the value of whatever key is still true.
    Object.values(keys).forEach(value => {
        if (value) {
            if (keys[keyA]) {
                console.log('keep moving left')
                keysPressed(keyA)
                console.log(keys)
            }
            if (keys[keyD]) {
                console.log('keep moving right')
                keysPressed(keyD)
                console.log(keys)
            }
            if (keys[keyS]) {
                console.log('keep moving down')
                keysPressed(keyS)
                console.log(keys)
            }
            if (keys[keyW]) {
                console.log('keep moving up')
                keysPressed(keyW)
                console.log(keys)
            }
        } 
    })
}
