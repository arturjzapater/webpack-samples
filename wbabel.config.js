const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/babel.js',
    output: {
        filename: 'client.js',
        path: path.resolve('dist/babel'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        },{
            test: /\.m?js$/,
            exclude: /(node_modules|bowser_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env' ],
                    plugins: [
                        [
                            '@babel/plugin-proposal-pipeline-operator',
                            { proposal: 'minimal'},
                        ],
                    ],
                },
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