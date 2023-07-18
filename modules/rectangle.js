export class Rectangle {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw() {
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    enableResize() {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.draw();
            });
        });
        this.observer.observe(this.canvas.parent);
    }
}
