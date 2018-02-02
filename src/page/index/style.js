/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-01-31 20:28:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-01 19:22:04
 * @description:这是控制样式的js 
 */
$(function(){
     
    /*========================================分类效果================================================*/
    var $item=$(".drop-item a");
    function showProduct(index){
        $(".product[cid="+index+"]").show();
    }
    function hideProduct(index){
        $(".product[cid="+index+"]").hide();
    }
    $item.mouseover(function(){
        var xid=$(this).attr("xid");
        showProduct(xid);
    });
    $("div.product").mouseover(function(){
        $(this).show();
    });
    $("div.product").mouseleave(function(){
        $(this).hide();
    });
    $item.mouseleave(function(){
        var xid=$(this).attr("xid");
        hideProduct(xid);
    });

    if($(".sortAll").length>0){
        (function(){
            var height=$(".mobie-bottom").css("height");
            height=height.replace(/px/,"");
            var height2=(Number($(".header").css("height").replace(/px/,""))+Number($(".sortAll").css("height").replace(/px/,"")));
            var $viewHeight=($(window).height()-height-height2);
            var $itemHeight=$viewHeight/($(".drop-item").length);
            // var $productHeight=$viewHeight/($(".row").length);
            var $productHeight=$viewHeight/8;
            $(".drop-item").css({
                "height":
                $itemHeight+"px",
                "line-height":
                $itemHeight+"px"
            });
            $(".row").css("height",$productHeight);
            
            $(".sortProduct[xid=1]").show().siblings().hide();
            
            $(".drop-item").click(function(){
                var xid=$(this).attr("xid");     
                 $(".sortProduct[xid="+xid+"]").show().siblings().hide();     
            })
        }())
    }
    /*============================================================================================*/
    if($(".show-item").length>0){
        if($(window).width()>768){
            var $height=$(".show-item").css("height");
            var $width=$(".show-item").css("width");
            $height=$height.replace(/px/,"");
            $height/=2;
            $(".show-content").css("height",$height+"px");
            $(".show-content").css("width",$width);
        }  
    }
})