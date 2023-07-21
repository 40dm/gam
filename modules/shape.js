export class Shape {
    // Creates persistent memory
    #m = Object.fromEntries(['parent', 'static'].map(p => [p, {}]));

    // Defines class properties at object initialization
    constructor() {
        
        // Handles access of parent attributes
        this.parent = {};
        Object.defineProperties(this.parent, {
            w: { get: () => document.body.clientWidth },
            h: { get: () => document.body.clientHeight },
        });

        // Handles access of static attributes
        this.static = {};
        Object.defineProperties(this.static, {
            w: {
                set: (w) => {
                    this.#m.static.w = w;
                    this.#m.parent.w = this.parent.w;
                },
                get: () => Math.round(this.#m.static.w * this.#m.parent.w) 
            },
            h: {
                set: (h) => {
                    this.#m.static.h = h;
                    this.#m.parent.h = this.parent.h;
                },
                get: () => Math.round(this.#m.static.h * this.#m.parent.h)
            },
        });

        // Handles access of dynamic attributes
        this.dynamic = {};
        Object.defineProperties(this.dynamic, {
            w: {
                set: (w) => this.static.w = w,
                get: () =>  Math.round(
                    this.#m.static.w * Math.min(this.parent.w, this.parent.h)
                )
            },
            h: {
                set: (h) => this.static.h = h,
                get: () =>  Math.round(
                    this.#m.static.h * Math.min(this.parent.w, this.parent.h)
                )
            },
        });

        // Handles access of stretch attributes
        this.stretch = {};
        Object.defineProperties(this.stretch, {
            w: {
                set: (w) => this.static.w = w,
                get: () => Math.round(this.#m.static.w * this.parent.w)
            },
            h: {
                set: (h) => this.static.h = h,
                get: () => Math.round(this.#m.static.h * this.parent.h)
            },
        });
    }
}
