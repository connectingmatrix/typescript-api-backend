module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],

    // Adjusting with current code style
    // please don't add overrides after initial migration
    rules: {
        indent: ['error', 4],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' },
        ],
        semi: 'off',
        '@typescript-eslint/semi': ['error'],
        'comma-dangle': ['error', 'always-multiline'],
        'node/no-callback-literal': 'off',
        'no-prototype-builtins': 'off',
    },

    overrides: [
        {
            files: ['src/**/**'],
            rules: {
                camelcase: 'off',
                'no-unused-vars': 'off',
            },
        },
        {
            files: ['src/**'],
            rules: {
                camelcase: 'off',
                'no-useless-constructor': 'off',
                'no-useless-escape': 'off',
            },
        }, {
            files: ['e2e/**'],
            rules: {
                'jest/no-conditional-expect': 'off',
            },
        },
    ],
};
