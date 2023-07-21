export class Shape {
    // Creates persistent memory
    #m = Object.fromEntries(['parent', 'static'].map(p => [p, { x: {}, y: {} }]));

    // Defines class properties at object initialization
    constructor() {

        // Handles access of parent attributes
        this.parent = { x: {}, y: {} };
        Object.defineProperties(this.parent, {
            w: { get: () => document.body.clientWidth },
            h: { get: () => document.body.clientHeight },
        });
        Object.defineProperties(this.parent.x, {
            l: { get: () => 0 },
            m: { get: () => Math.round(this.parent.w / 2) },
            r: { get: () => this.parent.w },
        });
        Object.defineProperties(this.parent.y, {
            t: { get: () => 0 },
            m: { get: () => Math.round(this.parent.h / 2) },
            b: { get: () => this.parent.h },
        });

        // Handles access of static attributes
        this.static = { x: {}, y: {} };
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
        Object.defineProperties(this.static.x, {
            l: { get: () => this.parent.x.m - this.static.w / 2 },
            m: { get: () => this.parent.x.m },
            r: { get: () => this.parent.x.m + this.static.w / 2 },
        });
        Object.defineProperties(this.static.y, {
            t: { get: () => this.parent.y.m - this.static.h / 2 },
            m: { get: () => this.parent.y.m },
            b: { get: () => this.parent.y.m + this.static.h / 2 },
        });

        // Handles access of dynamic attributes
        this.dynamic = { x: {}, y: {} };
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
        Object.defineProperties(this.dynamic.x, {
            l: { get: () => this.parent.x.m - this.dynamic.w / 2 },
            m: { get: () => this.parent.x.m },
            r: { get: () => this.parent.x.m + this.dynamic.w / 2 },
        });
        Object.defineProperties(this.dynamic.y, {
            t: { get: () => this.parent.y.m - this.dynamic.h / 2 },
            m: { get: () => this.parent.y.m },
            b: { get: () => this.parent.y.m + this.dynamic.h / 2 },
        });

        // Handles access of stretch attributes
        this.stretch = { x: {}, y: {} };
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
        Object.defineProperties(this.stretch.x, {
            l: { get: () => this.parent.x.m - this.stretch.w / 2 },
            m: { get: () => this.parent.x.m },
            r: { get: () => this.parent.x.m + this.stretch.w / 2 },
        });
        Object.defineProperties(this.stretch.y, {
            t: { get: () => this.parent.y.m - this.stretch.h / 2 },
            m: { get: () => this.parent.y.m },
            b: { get: () => this.parent.y.m + this.stretch.h / 2 },
        });

    }
}
