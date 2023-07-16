// Just doing some dumb stuff to remember how to get the ID of an element during a click event.
// This code will log in the console (in your browser) the ID of the button that you clicked.

// This is a simple way to add an event listener for all 4 buttons with just 2 measly lines of code. Pog.
const buttons = document.querySelectorAll('button')
Array.from(buttons).forEach(e => e.addEventListener('click', move))

// I personally hate this function but I have yet to learn a better way to get the ID of a clicked element.
// If you know a better way, just do it and I will learn.
function move() {
    let elementId = window.event;
    let target = elementId.target;
    let selection = target.id;
    console.log(`User clicked: ${selection}.`);
}
