import { Scene } from './modules/scene.js';
import { Rectangle } from './modules/rectangle.js';
import { Circle } from './modules/circle.js';

// Creates the scene
let scene = new Scene( 'scene', document.body )
scene.draw();

// Creates scene background
let background = new Rectangle( scene, 'stretch' );
background.width = 1;
background.height = 1;
background.fillColor = 'darkslategray';
background.draw();

// Creates hostile npc
let hostile = new Rectangle( scene, 'dynamic' );
hostile.width = .05;
hostile.height = .05;
hostile.x = -.3;
hostile.y = -.3;
hostile.fillColor = 'orangered';
hostile.draw();

// Creates player character
let player = new Rectangle( scene, 'dynamic' );
player.width = .05;
player.height = .05;
player.fillColor = 'midnightblue';
player.draw();

// Creates cursor
let cursor = new Circle( scene, 'static' );
cursor.width = .05;
cursor.height = .05;
cursor.lineColor = 'white';
cursor.draw();

// Handles keyboard key press and release events
let isKeyDown = {};
addEventListener( 'keydown', ( e ) => isKeyDown[e.code] = true );
addEventListener( 'keyup', ( e ) => isKeyDown[e.code] = false );

// Initiates scene refresh
let fps = 60;
let speed = 15;
let delay = 1000 / fps;
let frame = () => {
    // Sets player position offset (WASD controls)
    if ( isKeyDown[ 'KeyW' ] ) player.y -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyS' ] ) player.y += .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyA' ] ) player.x -= .01 * ( speed / fps );
    if ( isKeyDown[ 'KeyD' ] ) player.x += .01 * ( speed / fps );

    // Sets player position offset (touch controls)
    if ( isTouched.up ) player.y -= .01 * ( speed / fps );
    if ( isTouched.down ) player.y += .01 * ( speed / fps );
    if ( isTouched.left ) player.x -= .01 * ( speed / fps );
    if ( isTouched.right ) player.x += .01 * ( speed / fps );

    // Sets cursor position offset (touch controls)
    if ( isTouched.cursor ) cursor.x = isTouched.x / document.body.clientWidth -.5;
    if ( isTouched.cursor ) cursor.y = isTouched.y / document.body.clientHeight -.5;
    if ( isTouched.cursor ) console.log(isTouched.x, document.body.clientWidth, cursor.x);

    // Draws scene layer
    scene.draw();
    background.draw();

    // Draws friendly layer
    player.draw();

    // Draws hostile layer
    hostile.draw();

    // Draws UI layer
    if ( isTouched.cursor ) cursor.draw();
}
setInterval( frame, delay );

// Handles touch start and end events
let isTouched = { };
scene.canvas.addEventListener( 'touchstart', ( e ) => { 
    e.preventDefault();
    isTouched.cursor  = true;
    isTouched.x = e.changedTouches[0].pageX;
    isTouched.y = e.changedTouches[0].pageY;
    console.log(e.changedTouches[0].pageX, e.changedTouches[0].clientX, document.body.clientWidth);
});
scene.canvas.addEventListener( 'touchmove', ( e ) => { 
    e.preventDefault();
    let tolerance = 45;
    let newX = e.changedTouches[0].pageX;
    let newY = e.changedTouches[0].pageY;
    isTouched.up    = newY + tolerance < isTouched.y;
    isTouched.down  = newY - tolerance > isTouched.y;
    isTouched.left  = newX + tolerance < isTouched.x;
    isTouched.right = newX - tolerance > isTouched.x;
});
scene.canvas.addEventListener( 'touchend', ( e ) => { 
    e.preventDefault();
    isTouched.cursor = false;
    isTouched.x      = undefined;
    isTouched.y      = undefined;
    isTouched.up     = false;
    isTouched.down   = false;
    isTouched.left   = false;
    isTouched.right  = false;
});
