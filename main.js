import { Canvas } from './modules/canvas.js';
import { Rectangle } from './modules/rectangle.js';

// Creates the scene
let scene = new Canvas( 'scene', document.body )
scene.draw();

// Creates scene background
let background = new Rectangle( scene, 'stretch' );
background.width = 1;
background.height = 1;
background.color = 'darkslategray';
background.draw();

// Creates hostile npc
let hostile = new Rectangle( scene, 'dynamic' );
hostile.width = .05;
hostile.height = .05;
hostile.x = -.3;
hostile.y = -.3;
hostile.color = 'orangered';
hostile.draw();

// Creates player character
let player = new Rectangle( scene, 'dynamic' );
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
    scene.draw();

    // Draws shapes
    background.draw();
    player.draw();
    hostile.draw();

    // Sets player movement (WASD)
    if ( isKeyDown[ 'KeyW' ] ) player.y -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyS' ] ) player.y += .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyA' ] ) player.x -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyD' ] ) player.x += .01 * ( speed / fps );

    // Sets player movement (touch)
    if ( isTouched.up ) player.y -= .01 * ( speed / fps );
    if ( isTouched.down ) player.y += .01 * ( speed / fps );
    if ( isTouched.left ) player.x -= .01 * ( speed / fps );
    if ( isTouched.right ) player.x += .01 * ( speed / fps );
}
setInterval( frame, delay );

// Handles touch start and end events
let isTouched = { start: {} };
let fingerSize = 60;
scene.element.addEventListener( 'touchstart', ( e ) => { 
    let x = Math.round( e.changedTouches[0].pageX / fingerSize ) * fingerSize;
    let y = Math.round( e.changedTouches[0].pageY / fingerSize ) * fingerSize;
    isTouched.start.x = Math.round( x / fingerSize ) * fingerSize;
    isTouched.start.y = Math.round( y / fingerSize ) * fingerSize;
});
scene.element.addEventListener( 'touchmove', ( e ) => { 
    let x = Math.round( e.changedTouches[0].pageX / fingerSize ) * fingerSize;
    let y = Math.round( e.changedTouches[0].pageY / fingerSize ) * fingerSize;
    isTouched.up = y < isTouched.start.y;
    isTouched.down = y > isTouched.start.y;
    isTouched.left = x < isTouched.start.x;
    isTouched.right = x > isTouched.start.x;
});
scene.element.addEventListener( 'touchend', ( e ) => { 
    isTouched.start.x = undefined;
    isTouched.start.y = undefined;
    isTouched.up = false;
    isTouched.down = false;
    isTouched.left = false;
    isTouched.right = false;
});
