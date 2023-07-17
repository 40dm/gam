export class Circle {
    constructor(context, radius, x, y, color) {
        this.context = context;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.color = color;
    }
  
    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.strokeStyle = this.color;
        this.context.stroke();
    }
}
