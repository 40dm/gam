export class Rectangle {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(x = 0, y = 0, w = 1,  h = 1, color = 'darkblue', stretch = true) {
        // inputs are evaluated relative to canvas top left
        // and size of min(canvas height, canvas width)
        let width = this.canvas.element.width;
        let height = this.canvas.element.height;
        let smaller = Math.min(width, height);

        // Resizes dimensions when stretch is on
        let resize = {
            width: w * ( stretch ? width : smaller ),
            height: h * ( stretch ? height : smaller ),
        }
        let r = {
            w: resize.width / width,
            h: resize.height / height,
        }
        let pos = {
            x: width * ( 0.5 - r.w / 2 + x ),
            y: height * ( 0.5 - r.h / 2 - y ),
        }

        this.canvas.context.fillStyle = color;
        this.canvas.context.fillRect(pos.x, pos.y, resize.width, resize.height);
    }
}
