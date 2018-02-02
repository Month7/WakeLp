/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-01-31 17:25:59 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-31 19:45:43
 */
'use strict';

var common=require('../../util/common.js');

var page={
    //初始化
    init:function(){
        this.bindEvent();
    },
    //绑定事件
    bindEvent:function(){
        var that=this;
        $(".loginsubmit").click(function(){
            that.submit();
        })
    },
    //提交事件
    submit:function(){
        var formData={
            username:$("#user").val(),
            password:$("#password").val()
        }
        var result=this.formValidate(formData);
        if(result.pass){
            common.doLogin();    
        }
        else{
            alert(result.msg);
        }
        console.log(result);
    },
    //表单字段的验证
    formValidate:function(formData){
        var result={
            pass:false,
            msg:''
        }
        if(formData.username==''){
            result.msg="用户名不能为空!";
            return result;
        }
        if(formData.password==''){
            result.msg="密码不能为空!";
            return result;
        }
        result.pass=true;
        result.msg="通过验证";
        return result;
    }
};
$(function(){
    page.init();
})