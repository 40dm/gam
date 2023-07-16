// TODO: all below prob needs to go into its own module and then get imported
// but i ran into issues when using modules. Maybe bc of github pages, or maybe
// i did something wrong

class Canvas {
    constructor (id) {
        this.element = document.getElementById(id);
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
        this.draw = this.element.getContext("2d");
    }
}

// Create a new canvas
let canvas = new Canvas("test");

canvas.draw.fillStyle = "test";
canvas.draw.fillRect(0, 0, canvas.element.width, canvas.element.height);

// TODO: create a listener to update canvas size on window resizing

// Just a test shape
canvas.draw.beginPath();
canvas.draw.arc(canvas.element.width / 2, 
                canvas.element.height / 2, 
                Math.min(canvas.element.width, canvas.element.height) / 30, 
                0, 2 * Math.PI);
canvas.draw.strokeStyle = "white";
canvas.draw.stroke();
