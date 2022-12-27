const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const {
    NODE_ENV = 'development',
} = process.env;

module.exports = {
    entry: {
        "webaverse-backend": './src/index',
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
    },
    externals: nodeExternals(),
    optimization: {
        splitChunks: { name: 'vendor', chunks: 'all' },
    },
    resolve: {
        alias: {
            '@webaverse': path.resolve('./src'),
        },
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: '**.json', to: '.' },
                // { from: 'public/**/*', to: '.' },
            ],
        }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // include specific files based on a RegExp
            include: /srv/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
    ],
};
