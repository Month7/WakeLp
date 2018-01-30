/*
 * @Author: yin 
 * @Date: 2018-01-29 18:30:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-30 23:01:20
 * @description:通用接口模块
 */
'use strict';

var _mm={
    //这是网络请求
    request:function(parm){
        $.ajax({
            type:parm.method || 'get',
            url:parm.url || '',
            dataType:parm.type || 'json'
,           data:parm.data ||'',
            success:function(res){
                console.log(res.status);
                if(res.status==4){
                    // typeof parm.success=='function'&&parm.success
                    console.log("成功获取ajax数据");
                }
                //没有登录状态 需要强制登录
                else if(res.status==10){
                    console.log("Fuck");
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    }
}

module.exports=_mm;