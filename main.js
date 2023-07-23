import { Canvas } from './modules/canvas.js';
import { Rectangle } from './modules/rectangle.js';

// Creates the scene
let canvas = new Canvas( 'canvas', document.body )
canvas.draw();

// Creates scene background
let background = new Rectangle( canvas, 'stretch' );
background.width = 1;
background.height = 1;
background.color = 'darkslategray';
background.draw();

// Creates hostile npc
let hostile = new Rectangle( canvas, 'dynamic' );
hostile.width = .05;
hostile.height = .05;
hostile.x = -.3;
hostile.y = -.3;
hostile.color = 'orangered';
hostile.draw();

// Creates player character
let player = new Rectangle( canvas, 'dynamic' );
player.width = .05;
player.height = .05;
player.color = 'midnightblue';
player.draw();

// Handles keyboard key press and release events
let isKeyDown = {};
addEventListener( 'keydown', ( e ) => isKeyDown[e.code] = true );
addEventListener( 'keyup', ( e ) => isKeyDown[e.code] = false );

// Initiates scene refresh
let fps = 60;
let speed = 15;
let delay = 1000 / fps;
let frame = () => {
    // Draws scene
    canvas.draw();

    // Draws shapes
    background.draw();
    player.draw();
    hostile.draw();

    // Sets player movement
    if ( isKeyDown[ 'KeyW' ] ) player.y -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyS' ] ) player.y += .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyA' ] ) player.x -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyD' ] ) player.x += .01 * ( speed / fps );
}
setInterval( frame, delay );
