export class Shape {
    // Creates persistent memory
    #m = Object.fromEntries( [ 'parent', 'static' ].map( p => [ p, { x: {}, y: {} } ] ) );

    // Defines class properties at object initialization
    constructor() {

        // Handles access of parent attributes
        this.parent = { x: {}, y: {} };
        Object.defineProperties( this.parent, {
            w: { get: () => document.body.clientWidth },
            h: { get: () => document.body.clientHeight },
        } );
        Object.defineProperties( this.parent.x, {
            l: { get: () => 0 },
            m: { get: () => Math.round( this.parent.w / 2 ) },
            r: { get: () => this.parent.w },
        } );
        Object.defineProperties( this.parent.y, {
            t: { get: () => 0 },
            m: { get: () => Math.round( this.parent.h / 2 ) },
            b: { get: () => this.parent.h },
        } );

        // Handles access of static attributes
        this.static = { x: {}, y: {} };
        Object.defineProperties( this.static, {
            w: {
                set: ( w ) => {
                    this.#m.static.w = w;
                    this.#m.static.x.o = 0;
                    this.#m.parent.w = this.parent.w;
                },
                get: () => Math.round( this.#m.static.w * this.#m.parent.w ) 
            },
            h: {
                set: ( h ) => {
                    this.#m.static.h = h;
                    this.#m.static.y.o = 0;
                    this.#m.parent.h = this.parent.h;
                },
                get: () => Math.round( this.#m.static.h * this.#m.parent.h )
            },
        } );
        Object.defineProperties( this.static.x, {
            o: { 
                set: ( o ) => this.#m.static.x.o = o, 
                get: () => Math.round( this.#m.static.x.o * this.#m.parent.w ),
            },
            l: { get: () => this.parent.x.m - this.static.w / 2 + this.static.x.o },
            m: { get: () => this.parent.x.m + this.static.x.o },
            r: { get: () => this.parent.x.m + this.static.w / 2 + this.static.x.o },
        } );
        Object.defineProperties( this.static.y, {
            o: { 
                set: ( o ) => this.#m.static.y.o = o, 
                get: () => Math.round( this.#m.static.y.o * this.#m.parent.h ),
            },
            t: { get: () => this.parent.y.m - this.static.h / 2 + this.static.y.o },
            m: { get: () => this.parent.y.m + this.static.y.o },
            b: { get: () => this.parent.y.m + this.static.h / 2 + this.static.y.o },
        } );

        // Handles access of dynamic attributes
        this.dynamic = { x: {}, y: {} };
        Object.defineProperties( this.dynamic, {
            w: {
                set: ( w ) => this.static.w = w,
                get: () =>  Math.round(
                    this.#m.static.w * Math.min( this.parent.w, this.parent.h )
                )
            },
            h: {
                set: ( h ) => this.static.h = h,
                get: () =>  Math.round(
                    this.#m.static.h * Math.min( this.parent.w, this.parent.h )
                )
            },
        } );
        Object.defineProperties( this.dynamic.x, {
            o: { 
                set: ( o ) => this.static.x.o = o, 
                get: () => Math.round(
                    this.#m.static.x.o * Math.min( this.parent.w, this.parent.h )
                ),
            },
            l: { get: () => this.parent.x.m - this.dynamic.w / 2 + this.dynamic.x.o },
            m: { get: () => this.parent.x.m + this.dynamic.x.o },
            r: { get: () => this.parent.x.m + this.dynamic.w / 2 + this.dynamic.x.o },
        } );
        Object.defineProperties( this.dynamic.y, {
            o: { 
                set: ( o ) => this.static.y.o = o, 
                get: () => Math.round(
                    this.#m.static.y.o * Math.min( this.parent.w, this.parent.h )
                ),
            },
            t: { get: () => this.parent.y.m - this.dynamic.h / 2 + this.dynamic.y.o },
            m: { get: () => this.parent.y.m + this.dynamic.y.o },
            b: { get: () => this.parent.y.m + this.dynamic.h / 2 + this.dynamic.y.o },
        } );

        // Handles access of stretch attributes
        this.stretch = { x: {}, y: {} };
        Object.defineProperties( this.stretch, {
            w: {
                set: ( w ) => this.static.w = w,
                get: () => Math.round( this.#m.static.w * this.parent.w )
            },
            h: {
                set: ( h ) => this.static.h = h,
                get: () => Math.round( this.#m.static.h * this.parent.h )
            },
        } );
        Object.defineProperties( this.stretch.x, {
            o: { 
                set: ( o ) => this.static.x.o = o, 
                get: () => Math.round(
                    Math.round( this.#m.static.x.o * this.parent.w )
                ),
            },
            l: { get: () => this.parent.x.m - this.stretch.w / 2 + this.stretch.x.o },
            m: { get: () => this.parent.x.m + this.stretch.x.o },
            r: { get: () => this.parent.x.m + this.stretch.w / 2 + this.stretch.x.o },
        } );
        Object.defineProperties( this.stretch.y, {
            o: { 
                set: ( o ) => this.static.y.o = o, 
                get: () => Math.round(
                    Math.round( this.#m.static.y.o * this.parent.h )
                ),
            },
            t: { get: () => this.parent.y.m - this.stretch.h / 2 + this.stretch.y.o },
            m: { get: () => this.parent.y.m + this.stretch.y.o },
            b: { get: () => this.parent.y.m + this.stretch.h / 2 + this.stretch.y.o },
        } );
    }

    // Handles user-facing proxies
    set width(w) { this.static.w = w; }
    get width() { return this.#m.static.w; }
    set height(h) { this.static.h = h; }
    get height() { return this.#m.static.h; }
    set x(o) { this.static.x.o = o; }
    get x() { return this.#m.static.x.o; }
    set y(o) { this.static.y.o = o; }
    get y() { return this.#m.static.y.o; }
}
