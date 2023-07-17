export class Canvas {
    constructor(id) {
      this.id = id;
      this.parent = document.body;
      this.element = null;
      this.container = null;
      this.context = null;
      this.center = {x: 0, y: 0};
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
        this.container.id = this.id;
        this.context = this.element.getContext('2d');
      }
    }

    set width(size) {
        this.element.width = size;
        this.center.x = size / 2;
    }

    get width() {
        return this.element.width;
    }

    set height(size) {
        this.element.height = size;
        this.center.y = size / 2;
    }

    get height() {
        return this.element.height;
    }
}

// export class Canvas {
//     constructor (id) {
//         this.element = document.getElementById(id);
//         this.element.width = window.innerWidth;
//         this.element.height = window.innerHeight;
//         this.draw = this.element.getContext("2d");
//     }
// }
