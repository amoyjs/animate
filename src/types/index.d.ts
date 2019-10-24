declare module 'es6-tween'

declare namespace ANIMATE {
    interface AnimateOptions {
        to?: object,
        easing?: () => void,
        duration?: number,
        reverse?: boolean,
        repeat?: number,
        on?: {
            start?: () => { },
            update?: () => { },
            complete?: () => { },
            reverse?: () => { },
            restart?: () => { },
            play?: () => { },
            stop?: () => { },
        },
    }
}

declare namespace PIXI {
    export interface Enchance {
        animate(options: ANIMATE.AnimateOptions): void
    }
    export interface Sprite extends Enchance { }
    export interface Text extends Enchance { }
    export interface Container extends Enchance { }
    export interface Graphics extends Enchance { }
}

declare module '@amoy/animate' {
    export default function animate(options: ANIMATE.AnimateOptions): void
}