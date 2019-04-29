let { smart } = require('webpack-merge');
let base  =  require('./webpack.base.js')
let webpack = require('webpack')

module.exports = smart(base,{
    mode: 'development',
    devServer:{

    },
    devtool:'source-map',
    plugins:[
        new webpack.DefinePlugin({
            DEV:'true'
        })
    ]
})