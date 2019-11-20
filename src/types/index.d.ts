declare module 'es6-tween'

declare namespace ANIMATE {
    type Quadratic = 'Quadratic.In' | 'Quadratic.Out' | 'Quadratic.InOut'
    type Cubic = 'Cubic.In' | 'Cubic.Out' | 'Cubic.InOut'
    type Quartic = 'Quartic.In' | 'Quartic.Out' | 'Quartic.InOut'
    type Quintic = 'Quintic.In' | 'Quintic.Out' | 'Quintic.InOut'
    type Sinusoidal = 'Sinusoidal.In' | 'Sinusoidal.Out' | 'Sinusoidal.InOut'
    type Exponential = 'Exponential.In' | 'Exponential.Out' | 'Exponential.InOut'
    type Circular = 'Circular.In' | 'Circular.Out' | 'Circular.InOut'
    type Elastic = 'Elastic.In' | 'Elastic.Out' | 'Elastic.InOut'
    type Back = 'Back.In' | 'Back.Out' | 'Back.InOut'
    type Bounce = 'Bounce.In' | 'Bounce.Out' | 'Bounce.InOut'
    type Easing = Quadratic | Cubic | Quartic | Quintic | Sinusoidal | Exponential | Circular | Elastic | Back | Bounce

    interface AnimateOptions {
        to?: object,
        /**
         * @default Linear.None
         * @param EasingType.In
         * @param EasingType.Out
         * @param EasingType.InOut
         */
        easing?: Easing
        delay?: number,
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