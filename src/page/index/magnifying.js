$(function(){
    /*==================================产品界面放大镜效果=======================================*/
    $.fn.fangDa = function(){
        var that = $(this);
        $imgNormal=that.find(".normal"); //正常图片容器
        $Img=$imgNormal.find("img");
        $Drag=that.find(".huaKuai");             //滑块容器
        $show=that.find(".fangDa");              //放大图片容器
        $showImg=$show.find("img");
        num=$show.width()/$Drag.width();
        $imgNormal.mousemove(function(e){
            $Drag.css("display","block");  
            $show.css("display","block");
            var iX=e.pageX-$(this).offset().left-$Drag.width()/2;
            var iY=e.pageY-$(this).offset().top-$Drag.height()/2;
            var MaxX=$imgNormal.width()-$Drag.width();
            var MaxY=$imgNormal.height()-$Drag.height();
            iX = iX > 0 ? iX : 0;  
            iX = iX < MaxX ? iX : MaxX;  
            iY = iY > 0 ? iY : 0;  
            iY = iY < MaxY ? iY : MaxY;    
            $showImg.css("width",num*$imgNormal.width());
            $showImg.css("height",num*$imgNormal.height());
            $Drag.css({left:iX+"px",top:iY+"px"});            
            $showImg.css({marginLeft:-num*iX+'px',marginTop:-num*iY+'px'});  
        });
        $imgNormal.mouseout(function(){  
            $Drag.css("display","none");  
            $show.css("display","none");  
        });  
    };
    $("#fangdajing").fangDa();  
})