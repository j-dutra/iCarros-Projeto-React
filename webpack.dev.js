const { DefinePlugin } = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require ('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader'

                    },
                
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: './public'
        },
        historyApiFallback: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: './template.dev.html'
            }
        )
    ]
})