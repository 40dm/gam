export class Canvas {
    constructor(id, parent) {
      this.id = id;
      this.parent = parent;
      this.element = null;
      this.container = null;
      this.context = null;
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
    }

    get width() {
        return this.element.width;
    }

    set height(size) {
        this.element.height = size;
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
