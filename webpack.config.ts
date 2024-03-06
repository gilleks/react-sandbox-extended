import webpack from 'webpack';
import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvTypes, BuildPathsTypes } from './config/build/types/config';


export default (env: BuildEnvTypes) => {
    const { mode = 'development', port = 3000 } = env;

    const paths: BuildPathsTypes = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const isDev = mode === 'development';
    const PORT = port;

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    });

    return config;
};