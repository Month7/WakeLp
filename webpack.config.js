/*
 * @Author: yin
 * @Date: 2018-01-28 21:18:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-31 21:07:15
 */
const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getHtmlConfig=function(name){  //获取html-webpack-plugin参数的方法
    return {
      filename: 'views/'+name+'.html',
      template: './src/view/'+name+'.html', 
    }
}
var config = {
  entry: {    //多入口文件
    'common':['./src/page/common/index.js'],//通用模块
    'index':['./src/page/index/index.js'],
    // 'login':['./src/page/login/login.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'../'
  },
  //外部变量
  // externals:{
  //     'jquery' : 'window.jQuery'
  // },
  module: {
      loaders:  [
      {
      test: /\.css$/,
      loader:  ExtractTextPlugin.extract("style-loader","css-loader")
  },{ 
      test: /\.(jpeg|gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=10000&name=images/[name].[ext]' }]
  },
  //插件
  plugins:[
    //提取公共模块
    //独立通用模块到js/base.js
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js'
    }),
    //css单独打包到文件
    new ExtractTextPlugin("css/[name].css"),
    //html模板的处理
    new HtmlWebpackPlugin(), // Generates default index.html 
    // new HtmlWebpackPlugin({  // Also generate a test.html 
    //   filename: 'views/[name].html',
    //   template: './src/view/index.html', // Load a custom 
      
    // })
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login'))
  ]
};
module.exports = config;
