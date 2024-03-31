module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:i18next/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next'],
    rules: {
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off',
        'react/button-has-type': ['error', { reset: true }],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
};
