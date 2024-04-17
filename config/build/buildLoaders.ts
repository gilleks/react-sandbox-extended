import webpack from 'webpack';

import { BuildOptionsTypes } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(
    options: BuildOptionsTypes,
): webpack.RuleSetRule[] {
    const { isDev } = options;

    const cssLoader = buildCssLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    //* REMEMBER: The order in which loaders are loaded matters
    return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader];
}
