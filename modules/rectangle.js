export class Rectangle {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(x = 0, 
         y = 0,
         width = this.canvas.element.width, 
         height = this.canvas.element.height, 
         color = 'darkblue'
        ) {
        this.canvas.context.fillStyle = color;
        this.canvas.context.fillRect(x, y, width, height);
    }
}
