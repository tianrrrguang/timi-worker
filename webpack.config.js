
const path = require('path');

module.exports = {
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    entry: {
        'timi-worker': './src-iframe/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'TimiWorker',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    node: {
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: {
        'http': 'http',
        'fs': 'fs',
        'path': 'path'
    },
    plugins: [

    ]
};
