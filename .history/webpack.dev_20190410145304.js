let { smart } = require('webpack-merge');
let base  =  require('./webpack.base.js')
let webpack = require('webpack')
let path = require('path')

module.exports = smart(base,{
    mode: 'development',
    module: {
        rules: [
            {
                
            }
        ]
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host:'localhost',
        port:8080,
        compress:true
    },
    devtool:'source-map',
    plugins:[
        new webpack.DefinePlugin({
            DEV:'true'
        })
    ]
})