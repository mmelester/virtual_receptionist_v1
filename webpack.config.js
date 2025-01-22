const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './frontend-js/main.js',
        output: {
            filename: 'main-bundled.js',
            path: path.resolve(__dirname, 'public'),
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map', // Disable source maps in production
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        optimization: {
            minimize: isProduction, // Minify only in production
        },
    };
};
