/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-02-01 19:22:06 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-02-01 19:22:06 
 */
$(function(){
    /*=================================浮动导航栏=============================================*/
    var $flowSearch=$(".hide-nav");
    var $flowNav=$(".floatled");
    if($("#fruit").length>0){
        var fruit=$("#fruit").offset().top;
        var fish=$("#fish").offset().top;
        var rice=$("#rice").offset().top;
        var tea=$("#tea").offset().top;
        var footer=$(".footer").offset().top;
        var left_=$("#fruit").offset().left-81;
    }
    var $htmlBody=$("html,body");
    var $publish=$(".publish");
    fruit-=40;
    fish-=40;
    rice-=40;
    tea-=40;
    var $ID1=$("#1");
    var $ID2=$("#2");
    var $ID3=$("#3");
    var $ID4=$("#4");
    var $ID5=$("#5");
    left_=left_+"px";
    $flowNav.css("left",left_);
    if($(window).width()>768){
        $(window).scroll(function(){
            var _top=$(window).scrollTop();
            if(_top>400&&_top<(tea)){
                $flowSearch.show();
                $flowNav.show();
                $publish.show();
               
                if(_top>(fruit-220)&&_top<(fish-220)){
                    $ID2.removeClass("active-blue");
                    $ID3.removeClass("active-green");
                    $ID4.removeClass("active-orange");
                    $ID1.addClass("active-red");
                }
                if(_top>(fish-220)&&_top<(rice-220)){
                    $ID1.removeClass("active-red");
                    $ID3.removeClass("active-green");
                    $ID4.removeClass("active-orange");
                    $ID2.addClass("active-blue");
                }
                if(_top>(rice-220)&&_top<(tea-220)){
                    $ID1.removeClass("active-red");
                    $ID2.removeClass("active-blue");
                    $ID4.removeClass("active-orange");
                    $ID3.addClass("active-green");
                }
                if(_top>(tea-220)&&_top<footer){
                    $ID1.removeClass("active-red");
                    $ID2.removeClass("active-blue");
                    $ID3.removeClass("active-green");
                    $ID4.addClass("active-orange");
                }
            }
        else{
            $flowSearch.hide();
            $flowNav.hide();
            $publish.hide();
        }
   });
   }
   
   $(".user").mouseover(function(){
       $(".rbl-user").show();
   });
   $(".rbl-user").mouseover(function(){
       $(".rbl-user").show();
   })
   $(".rbl-user").mouseout(function(){
       $(".rbl-user").hide();
   });
   $(".user").mouseout(function(){
       $(".rbl-user").hide();
   });
   $(".rs-like").mouseover(function(){
       $(".rbl-love").show();
   });
  
   $(".rs-like").mouseout(function(){
       $(".rbl-love").hide();
   });
  
   $(".rs-money").mouseover(function(){
       $(".rbl-hurt").show();
   });
  
   $(".rs-money").mouseout(function(){
       $(".rbl-hurt").hide();
   });
})