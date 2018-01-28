/*
 * @Author: yin
 * @Date: 2018-01-28 21:18:52 
 * @Last Modified by: yin
 * @Last Modified time: 2018-01-28 21:21:17
 */
const path = require('path');
var webpack=require('webpack');
var config = {
  entry: {    //多入口文件
    'common':['./src/page/common/index.js'],//通用模块
    'index':['./src/page/index/index.js'],
    'login':['./src/page/login/login.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  //外部变量
  // externals:{

  // },
  //插件
  plugins:[
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js'
    })
  ]
};
module.exports = config;