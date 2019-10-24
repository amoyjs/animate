import { Easing } from 'es6-tween'

export function extract(from: any, to: any) {
    return Object.keys(to).reduce((prev: any, current: any) => {
        prev[current] = from[current]
        return prev
    }, {})
}

export function getEasing(easing: string) {
    const easings = ['Quadratic', 'Cubic', 'Quartic', 'Quintic', 'Sinusoidal', 'Exponential', 'Circular', 'Elastic', 'Back', 'Bounce']
    if (easings.some((_easing) => easing.startsWith(_easing))) return Easing.Linear.None
    return easing.split('.').reduce((prev: any, current: any) => (prev = prev[current], prev), Easing)
}