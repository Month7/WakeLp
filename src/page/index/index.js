/*
 * @Author: yin 
 * @Date: 2018-01-29 18:42:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-30 23:47:52
 */
'use strict';

require('./index.css');
// require('../common/amazeui.css');
require('../login/login.css');
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log("下面是模拟结果");
console.log(JSON.stringify(data, null, 4));
console.log("上面是模拟结果");

// var common=require('../../util/common.js');
// common.request({
//     url:'../../io/test.io.json',
//     success:function(res){
//         console.log("!!");
//         console.log("测试成功"+res);
//     },
//     error:function(errMsg){
//         console.log("测试失败");
//     }
// })
