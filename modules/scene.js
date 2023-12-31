export class Scene {
    constructor(id, parent) {
        this.id = id;
        this.parent = parent;

        this.canvas = document.getElementById(this.id);
        if( !this.canvas ) {
            this.canvas = document.createElement('canvas');
            this.parent.appendChild(this.canvas);
            this.canvas.id = this.id;
        }

        this.canvas.width = this.parent.clientWidth;
        this.canvas.height = this.parent.clientHeight;
    }

    draw() {
        this.canvas.width = this.parent.clientWidth;
        this.canvas.height = this.parent.clientHeight;
        this.context = this.canvas.getContext('2d');
    }
}
