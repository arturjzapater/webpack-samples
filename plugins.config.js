const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve('dist/plugins'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            scriptLoading: 'defer',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    optimization: {
        minimizer: [ new OptimiseCssAssetsPlugin() ],
    },
    mode: 'production',
}