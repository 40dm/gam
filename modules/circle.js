export class Circle {
    constructor(canvas, x, y, radius, color) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        this.canvas.context.beginPath();
        this.canvas.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.canvas.context.strokeStyle = this.color;
        this.canvas.context.stroke();
    }
}
