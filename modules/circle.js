export class Circle {
    constructor(canvas) {
        this.context = canvas.context;
        this.x = undefined;
        this.y = undefined;
        this.radius = undefined;
        this.color = undefined;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.strokeStyle = this.color;
        this.context.stroke();
    }

    enableResize() {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.draw();
            });
        });
        this.observer.observe(this.canvas.parent.element);
    }
}
