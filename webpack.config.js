/*
 * @Author: yin
 * @Date: 2018-01-28 21:18:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-09 00:46:43
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
    new HtmlWebpackPlugin(getHtmlConfig('login')),
    new HtmlWebpackPlugin(getHtmlConfig('person')),
    new HtmlWebpackPlugin(getHtmlConfig('market')),
    new HtmlWebpackPlugin(getHtmlConfig('services')),
    new HtmlWebpackPlugin(getHtmlConfig('about')),
    new HtmlWebpackPlugin(getHtmlConfig('cart')),
    new HtmlWebpackPlugin(getHtmlConfig('sort')),
    new HtmlWebpackPlugin(getHtmlConfig('农副产品')),
    new HtmlWebpackPlugin(getHtmlConfig('新鲜蔬菜')),
    new HtmlWebpackPlugin(getHtmlConfig('畜牧水产')),
    new HtmlWebpackPlugin(getHtmlConfig('米面粮油')),
    new HtmlWebpackPlugin(getHtmlConfig('花卉苗木')),
    new HtmlWebpackPlugin(getHtmlConfig('生鲜水果')),
    new HtmlWebpackPlugin(getHtmlConfig('register')),
    new HtmlWebpackPlugin(getHtmlConfig('购买页')),
    new HtmlWebpackPlugin(getHtmlConfig('促销')),
  ]
};
module.exports = config;
