var path = require('path');
var webpack = require('webpack');
let HtmWebpackPlugin =require('html-webpack-plugin');
let webpack = require('webpack')


const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

module.exports = {
    entry:{
        home:'./src/index.js',
    },
    output: {
        path: outputPath,
        filename: '[name].js',
    },
    module: {
        rules: [
            {test:/\.(js|jsx)$/,use:{
                loader: 'babel-loader',
                options: {
                    presets: ['env','react', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                }
            },exclude:/node_modules/},
            {test:/\.css$/,use:["style-loader","css-loader"],exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"],exclude:/node_modules/},
            {test:/\.(jpg|png|gif)$/,use:"url-loader",exclude:/node_modules/}
        ]
    },
   devtool: "source-map",
    /*   resolve: {
          modules: [
              path.resolve(__dirname, 'node_modules'),
              sourcePath,
          ],
      },*/
    plugins:[
        new HtmWebpackPlugin({
            template: './index.html'
        })
    ]
};