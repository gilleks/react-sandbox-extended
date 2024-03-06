import { ResolveOptions } from "webpack";
import { BuildOptionsTypes } from './types/config';

export function buildResolvers(options: BuildOptionsTypes): ResolveOptions {
    const { paths } = options;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
