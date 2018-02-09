
/*=============================================商品飞入购物车效果===============================*/
$("#addCart").click(function(){
    var imgSrc=$(".big").attr("src"); 
    if($(".normal").length>0){
        var $rbCart=$(".rb-cart");
        var endLeft=$rbCart.offset().left;
        var endTop=$rbCart.offset().top;
    }
    var flyer=$("<img class='flyer-img' src="+imgSrc+">");
    flyer.fly({   
        start: {   
            left: event.pageX,//抛物体起点横坐标   
            top: event.pageY //抛物体起点纵坐标   
        },   
        end: {   
            left: endLeft,//抛物体终点横坐标   
            top: endTop, //抛物体终点纵坐标   
        },   
        onEnd: function() {   
            // $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果   
            // this.destory(); //销毁抛物体   
            $(this).remove();
        }   
    });   
})