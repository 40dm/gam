export class Canvas {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;
    }

    create() {
        if( this.context !== undefined ) {
            return console.log('Canvas already created!');
        } else {
            this.element = document.createElement('canvas');
            this.parent.appendChild(this.element);
            this.element.id = this.id;
            this.context = this.element.getContext('2d');
        }
    }


    set width(width) {
        this.element.width = width;
    }

    get width() {
        return this.element.width;
    }

    set height(height) {
        this.element.height = height;
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

    enableResize() {
        this.observer = new ResizeObserver(elements => {
            elements.forEach(element => {
                this.width = this.getParentWidth();
                this.height = this.getParentHeight();
            });
        });
        this.observer.observe(this.parent);
    }
}

