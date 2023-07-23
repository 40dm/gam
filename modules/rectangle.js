import { Shape } from './shape.js';

export class Rectangle extends Shape {
    constructor( canvas, type ) {
        super();
        this.canvas = canvas;
        this.type = type;
        this.color = 'black';
    }

    draw() {
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fillRect(
            this[this.type].x.l, 
            this[this.type].y.t, 
            this[this.type].w, 
            this[this.type].h
        );
    }
}
