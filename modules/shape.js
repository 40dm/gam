class Shape {
    #width;
    #height;
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.fixed = {};
        Object.defineProperties(this.fixed, {
            width: {
                set: (width) => (this.#width = width),
                get: () => this.context,
            },
            height: {
                set: (height) => (this.#height = height),
                get: () => this.context,
            }
        });
    }
}
