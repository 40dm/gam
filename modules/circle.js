export class Circle {
    constructor(context, x, y, radius, color) {
      this.context = context;
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }
  
    draw() {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.context.strokeStyle = this.color;
      this.context.stroke();
    }
}
