/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-02-01 19:21:22 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-02-01 19:21:22 
 */
$(function(){
    /*===========================================轮播图===================================*/
    (function(){
        var i=0;
        var timer=null;
        var $dataC=$(".data-carousel").find("li");
        var $carBg=$(".carouselBg");
        $dataC.eq(i).show();
        run();
        if(($(".data-carousel").length>0)&&($(window).width()>764)){
            var $imgH=$(".data-carousel img").css("height");
            var windowHeight=$(window).height();
            $(".right-banner-content").css("height",windowHeight);
            var $bg=$(".carouselBg");
            $imgH=$imgH.replace(/px/,"");
            $(".carouselBg").css("height",$(".dropMenu").css("height"));
        }
        $(".carousel-li").find("ul").find("li").each(function(index){
            $(this).click(function(){
                i=index;
                $dataC.eq(i).stop().fadeIn(1500).siblings().fadeOut();
            })
        })
        function run(){
            timer=setInterval(function(){
                i++;
                if(i>3){
                    i=0;
                }
                $dataC.eq(i).stop().fadeIn(1500).siblings().fadeOut();
            },3000);
        }
        $carBg.mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            run();
        });
    }());
})