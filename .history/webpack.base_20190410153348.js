const path = require('path');
const HtmWebpackPlugin =require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin')


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
            {test:/\.(jpg|png|gif)$/,use:{loader: 'url-loader',options:{limit:30*1024}},exclude:/node_modules/}
        ]
    },
    /*   resolve: {
          modules: [
              path.resolve(__dirname, 'node_modules'),
              sourcePath,
          ],
      },*/
    plugins:[
        new copyWebpackPlugin({
            from: path.resolve(__dirname, 'static'),
            to: path.resolve(__dirname, 'static')
        }),
        new HtmWebpackPlugin({
            template: './index.html'
        })
    ]
};