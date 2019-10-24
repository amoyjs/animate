export function extract(from: any, to: any) {
    return Object.keys(to).reduce((prev: any, current: any) => {
        prev[current] = from[current]
        return prev
    }, {})
}