type BuildModeType = 'production' | 'development';

export type BuildPathsTypes = {
    entry: string,
    build: string,
    html: string,
    src: string,
};

export type BuildOptionsTypes = {
    mode: BuildModeType,
    paths: BuildPathsTypes,
    isDev: boolean,
    port: number,
};

export type BuildEnvTypes = {
    mode: BuildModeType,
    port: number,
};