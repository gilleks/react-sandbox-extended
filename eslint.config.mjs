import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import eslintPluginI18next from 'eslint-plugin-i18next';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tsEslint.config(
    {
        plugins: {
            '@typescript-eslint': tsEslint.plugin,
            react: eslintPluginReact,
            prettier: eslintPluginPrettier,
            storybook: eslintPluginStorybook,
            i18next: eslintPluginI18next,
            'react-hooks': eslintPluginReactHooks,
        },
    },
    {
        ignores: [
            'eslint.config.mjs',
            'scripts/generate-visual-json-report.js',
            'json-server/index.js',
        ],
    },
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.jest,
                ...globals.node,
            },
            parserOptions: { project: ['tsconfig.json'] },
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            ...eslintPluginPrettier.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/button-has-type': ['error', { reset: true }],
            '@typescript-eslint/no-unused-vars': ['warn'],
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],
            //TODO: https://github.com/facebook/react/issues/28313 wait for something better than import { fixupPluginRules } from '@eslint/compat';
            // ...eslintPluginReactHooks.configs.recommended.rules,
            //TODO: https://github.com/edvardchen/eslint-plugin-i18next/issues/123
            // 'i18next/no-literal-string': [
            //     'error',
            //     { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
            // ],
        },
    },
    {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    },
);
