export class Circle {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(x = 0, y = 0, r = 0.05, color = 'white') {
        // inputs are evaluated relative to canvas top left
        // and size of min(canvas height, canvas width)
        let width = this.canvas.element.width;
        let height = this.canvas.element.height;
        let smaller = Math.min(width, height);
        let size = {
            x: (0.5 + x) * width,
            y: (0.5 - y) * height,
            radius: r * smaller,
        }
        this.canvas.context.beginPath();
        this.canvas.context.arc(size.x, size.y, size.radius, 0, 2 * Math.PI);
        this.canvas.context.strokeStyle = color;
        this.canvas.context.stroke();
    }
}
