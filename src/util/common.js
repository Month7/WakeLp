/*
 * @Author: yin 
 * @Date: 2018-01-29 18:30:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-29 21:07:18
 * @description:通用接口模块
 */
'use strict';

var _mm={
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
module.exports=_mm;