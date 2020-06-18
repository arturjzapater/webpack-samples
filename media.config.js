const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/media.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/media'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        },{
            test: /\.(?:png|jpe?g|gif)$/,
            loader: 'file-loader',
            options: {
                name: 'media/[name].[ext]',
            },
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