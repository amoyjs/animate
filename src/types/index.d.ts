declare module 'es6-tween'

declare namespace ANIMATE {
    interface AnimateOptions {
        to?: object,
        /**
         * @default Linear.None
         * @param EasingType.In
         * @param EasingType.Out
         * @param EasingType.InOut
         */
        easing?: 'Quadratic' | 'Cubic' | 'Quartic' | 'Quintic' | 'Sinusoidal' | 'Exponential' | 'Circular' | 'Elastic' | 'Back' | 'Bounce'
        duration?: number,
        reverse?: boolean,
        repeat?: number,
        on?: {
            start?: (options: any) => void,
            update?: (options: any) => void,
            complete?: (options: any) => void,
            reverse?: (options: any) => void,
            restart?: (options: any) => void,
            play?: (options: any) => void,
            stop?: (options: any) => void,
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