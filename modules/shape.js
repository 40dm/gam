export class Shape {
    // Creates persistent memory
    #m = Object.fromEntries(
        ['parent', 'static', 'dynamic', 'stretch'].map(p => [p, {}])
    );

    // Defines class properties at object initialization
    constructor(canvas) {
        
        // Handles access of parent attributes
        this.parent = {};
        Object.defineProperties(this.parent, {
            w: {
                get: () => document.body.clientWidth,
                enumerable: true,
            },
            h: {
                get: () => document.body.clientHeight,
                enumerable: true,
            },
        });

        // Handles access of static attributes
        this.static = {};
        Object.defineProperties(this.static, {
            w: {
                set: (w) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].w = w);
                    this.#m.parent.w = this.parent.w;
                },
                get: () => Math.round(this.#m.static.w * this.#m.parent.w),
                enumerable: true,
            },
            h: {
                set: (h) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].h = h);
                    this.#m.parent.h = this.parent.h;
                },
                get: () => Math.round(this.#m.static.h * this.#m.parent.h),
                enumerable: true,
            },
        });

        // Handles access of dynamic attributes
        this.dynamic = {};
        Object.defineProperties(this.dynamic, {
            w: {
                set: (w) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].w = w);
                    this.#m.parent.w = this.parent.w;
                },
                get: () =>  Math.round(
                    this.#m.dynamic.w * Math.min(this.parent.w, this.parent.h)
                ),
                enumerable: true,
            },
            h: {
                set: (h) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].h = h);
                    this.#m.parent.w = this.parent.w;
                },
                get: () =>  Math.round(
                    this.#m.dynamic.h * Math.min(this.parent.w, this.parent.h)
                ),
                enumerable: true,
            },
        });

        // Handles access of stretch attributes
        this.stretch = {};
        Object.defineProperties(this.stretch, {
            w: {
                set: (w) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].w = w);
                    this.#m.parent.w = this.parent.w;
                },
                get: () => Math.round(this.#m.stretch.w * this.parent.w),
                enumerable: true,
            },
            h: {
                set: (h) => {
                    Object.keys(this.#m).forEach(k => this.#m[k].h = h);
                    this.#m.parent.h = this.parent.h;
                },
                get: () => Math.round(this.#m.stretch.h * this.parent.h),
                enumerable: true,
            },
        });
    }
}
