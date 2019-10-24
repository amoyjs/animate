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

declare module '@amoy/scene' {
    export default function animate(options: ANIMATE.AnimateOptions): void
}