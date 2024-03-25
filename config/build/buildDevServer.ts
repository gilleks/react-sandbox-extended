import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptionsTypes } from './types/config';

export function buildDevServer(
    options: BuildOptionsTypes,
): DevServerConfiguration {
    const { port } = options;

    return {
        port: port,
        open: true,
        historyApiFallback: true,
    };
}
