import { Tween, Easing, autoPlay } from 'es6-tween'
import { extract, getEasing } from './common'

autoPlay(true)

export default function ({ Sprite, AnimatedSprite, Text, Graphics, Container }: any) {
    const components = [Sprite, AnimatedSprite, Text, Graphics, Container]
    components.map((component) => {
        component.prototype.animate = function animate(options: any = {}) {
            let target = this
            const {
                to = {},
                easing = getEasing('Linear.None'),
                duration = 300,
                reverse = false,
                repeat = 0,
                on = {
                    start: () => { },
                    update: () => { },
                    complete: () => { },
                    reverse: () => { },
                    restart: () => { },
                    play: () => { },
                    stop: () => { },
                },
            } = options
            const tween = new Tween(extract(target, to))
                .to(to, duration)
                .easing(easing)
                .repeat(repeat)
                .reverse(reverse)
                .on('start', on.start)
                .on('update', (options: any) => {
                    target = Object.assign(target, options)
                    on.update(options)
                })
                .on('complete', on.complete)
                .on('reverse', on.reverse)
                .on('restart', on.restart)
                .on('play', on.play)
                .on('stop', on.stop)
                .start()
            return tween
        }
    })
}
