/*
 * @Author: yin 
 * @Date: 2018-01-29 18:30:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-02 23:23:43
 * @description:通用接口模块
 */
'use strict';

var _mm={
    //这是网络请求
    request:function(parm){
        $.ajax({
            type:parm.method || 'get',
            url:parm.url || '',
            dataType:parm.type || 'json',           
            data:parm.data ||'',
            success:parm.success,
            // success:function(data){
            //     if(data.carousel){
            //         var img1=data.carousel.ad1;
            //         console.log(img1);
            //     }
            //     if(data.fruit){
            //         return data.fruit;
            //     }
            // },
            error:function(err){
                console.log("ajax请求错误"+err);
            }
        })
    },
   
    //获取后端接口地址
    getServerUrl:function(path){
        return path;
    },
    //登录
    doLogin:function(){
        window.location.href='index.html';
    }
}

module.exports=_mm;