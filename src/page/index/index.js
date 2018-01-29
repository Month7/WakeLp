/*
 * @Author: yin 
 * @Date: 2018-01-29 18:42:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-29 21:52:18
 */
'use strict';
require('../login/test.js');
require('./index.css');
var _tt={
    request:function(parm){
        $.ajax({
            type:parm.method || 'get',
            url:parm.url || '',
            dataType:parm.type || 'json'
,           data:parm.data ||'',
            success:function(res){
                if(res.status==0){
                    // typeof parm.success=='function'&&parm.success
                    console.log("成功获取ajax数据");
                }
                //没有登录状态 需要强制登录
                else if(res.status==10){
                    console.log("Fuck");
                }
            },
            error:function(err){

            }
        })
    }
}
// _tt.request('../../../json/test.json');
var xhr=new XMLHttpRequest();
xhr.open('GET','../../json/test.json',true);
xhr.send();
xhr.onreadystatechange=function(){
    console.log("xhr.readyState="+xhr.readyState);
    console.log(xhr.status);
    if (xhr.readyState==4)
    {
        alert("!!!");
        console.log("!!!!!!");
    }
}
// var common=require('../../util/common.js');
// var parm={
//     url:'../../../json/test.json'
// }
