import { Shape } from './shape.js';

export class Heart extends Shape {
    constructor( canvas, type ) {
        super();
        this.canvas = canvas;
        this.type = type;
        this.lineColor = 'black';
        this.lineAlpha = 1;
        this.fillColor = 'transparent';
        this.fillAlpha = 1;
    }

    // So... there's a lotta stuff in here I don't fully understand.
    // I copied all of the quadraticCurveTo stuff from the internet, it seems to work.
    // this.position is probably not the right thing to call this
    // I also am not sure how to move the heart around. 
    // Pls help.
    draw() {
        this.canvas.context.strokeStyle = this.strokeStyle;
        this.canvas.context.strokeWeight = this.strokeWeight;
        this.canvas.context.shadowOffsetX = this.shadowOffsetX;
        this.canvas.context.shadowOffsetY = this.shadowOffsetY;
        this.canvas.context.lineWidth = this.lineWidth;
        this.canvas.context.fillStyle = this.fillColor;
        this.canvas.context.size = this.size;
        this.canvas.context.position = this.position;
        this.canvas.context.quadraticCurveTo(this.position, this.position, this.position + this.size / 4, this.position);
        this.canvas.context.quadraticCurveTo(this.position + this.size / 2, this.position, this.position + this.size / 2, this.position + this.size / 4);
        this.canvas.context.quadraticCurveTo(this.position + this.size / 2, this.position, this.position + this.size * 3/4, this.position);
        this.canvas.context.quadraticCurveTo(this.position + this.size, this.position, this.position + this.size, this.position + this.size / 4);
        this.canvas.context.quadraticCurveTo(this.position + this.size, this.position + this.size / 2, this.position + this.size * 3/4, this.position + this.size * 3/4);
        this.canvas.context.lineTo(this.position + this.size / 2, this.position + this.size);
        this.canvas.context.lineTo(this.position + this.size / 4, this.position + this.size * 3/4);
        this.canvas.context.quadraticCurveTo(this.position, this.position + this.size / 2, this.position, this.position + this.size / 4);
        this.canvas.context.stroke();
        this.canvas.context.fill();
    }
}
