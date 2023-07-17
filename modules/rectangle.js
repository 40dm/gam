export class Rectangle {
    constructor(canvas, width, height, x, y, color) {
        this.canvas = canvas;
        this.context = canvas.context;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.relative = {
            width: this.width / canvas.width,
            height: this.height / canvas.height,
        };
    }
  
    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    observe(o) {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.width = element.devicePixelContentBoxSize[0].inlineSize * this.relative.width;
                this.height = element.devicePixelContentBoxSize[0].blockSize * this.relative.height;
                this.relative.width = this.width / element.devicePixelContentBoxSize[0].inlineSize;
                this.relative.height = this.height / element.devicePixelContentBoxSize[0].blockSize;
                this.draw();
            });
        });
        this.observer.observe(o, { box: 'device-pixel-content-box' });
    }
}
