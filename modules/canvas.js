export class Canvas {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;
        this.element = null;
        this.container = null;
        this.context = null;
        this.center = {
            x: null, 
            y: null,
        };
        this.relative = {
            width: null,
            height: null,
        };
    }

    create() {
        if(this.context !== null) {
            console.log('Canvas already created!');
            return;
        } else {
        this.container = document.createElement('section');
        this.element = document.createElement('canvas');
        this.parent.appendChild(this.container);
        this.container.appendChild(this.element);
        this.element.id = this.id;
        this.context = this.element.getContext('2d');
        }
    }

    set width(w) {
        this.element.width = w;
        this.center.x = this.element.width / 2;
        this.relative.width = this.element.width / this.getParentWidth();
    }

    get width() {
        return this.element.width;
    }

    set height(h) {
        this.element.height = h;
        this.center.y = this.element.height / 2;
        this.relative.height = this.element.height / this.getParentHeight();
    }

    get height() {
        return this.element.height;
    }

    getParentWidth() {
        return this.parent.clientWidth;
    }

    getParentHeight() {
        return this.parent.clientHeight;
    }

    observe(o) {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.width = element.devicePixelContentBoxSize[0].inlineSize * this.relative.width;
                this.height = element.devicePixelContentBoxSize[0].blockSize * this.relative.height;
            });
        });
        this.observer.observe(o, { box: "device-pixel-content-box" });
    }
}

