type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, additional: string[], mods: Mods): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => { return Boolean(value); })
            .map(([className]) => { return className; }),
    ].join(' ');
};