const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        // Set the single-spa config as the project entry point
        "single-spa.config": "./src/single-spa.config.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {

                        presets: ['@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                type: 'javascript/auto',
                use: {
                    loader: 'json-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html" // create a template to start from
        }),

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // Serve files from the src directory
        },
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    mode: 'development'
};