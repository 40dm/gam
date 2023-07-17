import { Container } from "./container.js";

export class Canvas extends Container {
    constructor(id, parent) {
        super();
        this.id = id;
        this.parent = new Container(parent);
    }

    create() {
        if( this.context !== undefined ) {
            return console.log('Canvas already created!');
        } else {
            this.element = document.createElement('canvas');
            this.parent.element.appendChild(this.element);
            this.element.id = this.id;
            this.context = this.element.getContext('2d');
        }
    }
}

