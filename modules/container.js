export class Container {
    constructor(element) {
        this.element = element;
        this.midpoint = {
            x: undefined,
            y: undefined,
        };
        this.relative = {
            width: undefined,
            height: undefined,
        };
    }

    set width(w) {
        this.element.width = w;
        this.midpoint.x = this.element.width / 2;
        this.relative.width = this.element.width / this.getParentWidth();
    }

    get width() {
        return this.element.width;
    }

    set height(h) {
        this.element.height = h;
        this.midpoint.y = this.element.height / 2;
        this.relative.height = this.element.height / this.getParentHeight();
    }

    get height() {
        return this.element.height;
    }

    getParentElement() {
        return this.element.parentElement;
    }

    getParentWidth() {
        return this.parent.element.clientWidth;
    }

    getParentHeight() {
        return this.parent.element.clientHeight;
    }

    getParentMidpoint() {
        let midpoint = { 
            x: this.getParentWidth() / 2, 
            y: this.getParentHeight() / 2,
        };

        return midpoint;
    }

    enableResize() {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.width = this.getParentWidth();
                this.height = this.getParentHeight();
                // TODO: need to figure out how to set relative sizes like below
                // but this method loses size every time it resizes due to precision
                // this.width = this.getParentWidth() * this.relative.width;
                // this.height = this.getParentHeight() * this.relative.height;
            });
        });
        this.observer.observe(this.parent.element);
    }
}
