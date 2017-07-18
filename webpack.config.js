const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})

module.exports = {
    entry: {
        app: './client/index.js',
        vendors: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                secure: false
            }
        }
    },
    watchOptions: {
        ignored: [/node_modules/]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' })
        //UglifyJsPlugin
    ]
}