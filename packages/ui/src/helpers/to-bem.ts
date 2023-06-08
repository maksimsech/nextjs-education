type Styles = Record<string, string>


export function toBem(styles: Styles) {
    return function(selector: string) {
        const selectors = selector.split(' ')

        const moduleStyles = selectors.map(s => styles[s]) as string[]
        if (moduleStyles.length == 0 || moduleStyles.some(s => s === undefined)) {
            throw Error('One of styles is incorrect. Please verify provided styles')
        }

        return moduleStyles.join(' ')
    }
}
