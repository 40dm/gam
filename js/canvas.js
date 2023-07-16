export class Canvas {
    constructor (id) {
        this.element = document.getElementById(id);
        this.element.width = window.innerWidth;
        this.element.height = window.innerHeight;
        this.draw = this.element.getContext("2d");
    }
}