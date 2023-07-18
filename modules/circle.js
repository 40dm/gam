export class Circle {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(x = 0, y = 0, radius = 0.05, color = 'white') {
        // inputs are evaluated relative to canvas midpoint
        // and size of min(canvas height, canvas width)
        let rel = {
            x: this.canvas.element.width / 2 - x,
            y: this.canvas.element.height / 2 - y,
            radius: Math.min(this.canvas.element.width, 
                             this.canvas.element.height) * radius
        }
        this.canvas.context.beginPath();
        this.canvas.context.arc(rel.x, rel.y, rel.radius, 0, 2 * Math.PI);
        this.canvas.context.strokeStyle = color;
        this.canvas.context.stroke();
    }
}
