/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-02-02 22:28:23 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-08 20:42:19
 * 懒加载功能
 */
var load=require('../../util/common.js');
$(function(){
    /*=====================================图片懒加载==================================================*/
    $(window).scroll(function(){
        var $wTop=$(window).scrollTop();
        var $wHeight=$(window).height();
        var parm={
            url:'../../do/index-images.do.json',
            success:function(data){
                console.log("ajax请求成功");
            }
        }
        if($(".content").length>0){
            if($(".content").find("img").offset().top-$wTop<$wHeight){
                parm.success=function(data){
                    var arr=data.recommend;
                    var i=0;
                    $(".content").find("img").each(function(){
                        $(this).attr("src",arr[i++]);
                    });
                }
                load.request(parm); 
            }
            if($(".cuxiao").offset().top-$wTop<$wHeight){
                    parm.success=function(data){
                        var arr=data.cuxiao;
                        var i=0;
                        $(".cuxiao-main").find("img").each(function(){
                            $(this).attr("src",arr[i++]);
                        });
                    }
                    load.request(parm); 
            }
            if($("#fruit").offset().top-$wTop<$wHeight){
                    parm.success=function(data){
                        var arr=data.fruit;
                        var i=0;
                        $(".show-content-fruit").find("img").each(function(){
                            $(this).attr("src",arr[i++]);
                        });
                    }
                    load.request(parm); 
            }
            if($("#fish").offset().top-$wTop<$wHeight){
                parm.success=function(data){
                    var arr=data.fish;
                    var i=0;
                    $(".show-content-fish").find("img").each(function(){
                        $(this).attr("src",arr[i++]);
                    });
                }
                load.request(parm); 
            }
            if($("#rice").offset().top-$wTop<$wHeight){
                parm.success=function(data){
                    var arr=data.rice;
                    var i=0;
                    $(".show-content-rice").find("img").each(function(){
                        $(this).attr("src",arr[i++]);
                    });
                }
                load.request(parm); 
            }
            if($("#tea").offset().top-$wTop<$wHeight){
                parm.success=function(data){
                    var arr=data.tea;
                    var i=0;
                    $(".show-content-tea").find("img").each(function(){
                        $(this).attr("src",arr[i++]);
                    });
                }
                load.request(parm); 
            }
        }
        if($("#row1").length>0){
            if($("#row1").offset().top-$wTop<$wHeight){
                $("#row1").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
            if($("#row2").offset().top-$wTop<$wHeight){
                $("#row2").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
            if($("#row3").offset().top-$wTop<$wHeight){
                $("#row3").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
            if($("#row4").offset().top-$wTop<$wHeight){
                $("#row4").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
            if($("#row5").offset().top-$wTop<$wHeight){
                $("#row5").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
            if($("#row6").offset().top-$wTop<$wHeight){
                $("#row6").find(".market-each").find("img").each(function(){
                    $(this).attr("src",$(this).attr("data-src"));
                })
            }
        }
           
    })
})