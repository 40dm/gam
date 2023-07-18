export class Rectangle {
    constructor(canvas, x, y, width, height, color) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fillRect(
            this.x, 
            this.y, 
            // Sets size equal to canvas if input undefined
            (this.width ? this.width : this.canvas.element.width), 
            (this.height ? this.height : this.canvas.element.height)
        );
    }
}
