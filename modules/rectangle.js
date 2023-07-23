import { Shape } from './shape.js';

export class Rectangle extends Shape {
    constructor( canvas, type ) {
        super();
        this.canvas = canvas;
        this.type = type;
        this.lineColor = 'black';
        this.fillColor = 'transparent';
        this.fillAlpha = 1;
    }

    draw() {
        this.canvas.context.fillStyle = this.fillColor;
        this.canvas.context.fillRect(
            this[this.type].x.l, 
            this[this.type].y.t, 
            this[this.type].w, 
            this[this.type].h
        );
    }
}
