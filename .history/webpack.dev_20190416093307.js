let {smart} = require('webpack-merge');
let base = require('./webpack.base.js')
let webpack = require('webpack')
let path = require('path')

module.exports = smart(base, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: {
                    loader: 'eslint-loader',
                    enforce: 'pre',
                }, exclude: /node_modules/
            },
        ]
    },
    watch:true,
    watchOptions:{
        poll:1000,//每秒 问我 1000次
        aggregateTimeout:500,//防抖， 一直输入代码
        ignored: /node_modules///不需要监控
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8080,
        compress: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            DEV: 'true'
        })
    ]
})