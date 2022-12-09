const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src', 'front', 'public', 'js', 'index.js'),
        users: path.resolve(__dirname, 'src', 'front', 'public', 'js', 'users.js'),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/front/pages/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: './src/front/pages/users.html',
            chunks: ['users']
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}