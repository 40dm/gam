import { Shape } from './shape.js';

export class Circle extends Shape {
    constructor( canvas, type ) {
        super();
        this.canvas = canvas;
        this.type = type;
        this.lineColor = 'black';
        this.lineAlpha = 1;
        this.fillColor = 'transparent';
        this.fillAlpha = 1;
    }

    draw() {
        this.canvas.context.beginPath();
        this.canvas.context.arc(
            this[this.type].x.m, 
            this[this.type].y.m,
            Math.min( this[ this.type ].w, this[ this.type ].h ) / 2,
            0, 
            2 * Math.PI
            );
        this.canvas.context.strokeStyle = this.lineColor;
        this.canvas.context.globalAlpha = this.lineAlpha;
        this.canvas.context.stroke();
        this.canvas.context.globalAlpha = this.fillAlpha;
        this.canvas.context.fillStyle = this.fillColor;
        this.canvas.context.fill();

    }
}
