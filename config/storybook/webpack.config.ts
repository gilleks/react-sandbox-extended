import webpack from 'webpack';
import path from 'path';

import { BuildPathsTypes } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default async ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPathsTypes = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    //TODO SVG not loading need fixed it
    config.module?.rules?.forEach((rule) => {
        if (
            rule &&
            typeof rule === 'object' &&
            rule.test instanceof RegExp &&
            rule.test.test('.svg')
        ) {
            rule.exclude = /\.svg$/;
        }
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoader(true));

    return config;
};
