type ModsType = Record<string, boolean | string>;

export const classNames = (cls: string, mods: ModsType, additional: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => { return Boolean(value); })
            .map(([className]) => { return className; }),
    ].join(' ');
};