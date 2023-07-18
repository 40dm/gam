export class Canvas {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;

        this.element = document.getElementById(this.id);
        if( !this.element ) {
            this.element = document.createElement('canvas');
            this.parent.appendChild(this.element);
            this.element.id = this.id;
        }
    }

    draw(width = this.parent.clientWidth, height = this.parent.clientHeight) {
        this.element.width = width;
        this.element.height = height;
        this.context = this.element.getContext('2d');
    }

}

