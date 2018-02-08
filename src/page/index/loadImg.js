$(function(){
    /*====================================缩略图效果=====================================*/
    var $imgSmall=$("img.small");
    $imgSmall.mouseenter(function(){
        var bigUrl=$(this).attr("bigUrl");
        $("img.big").attr("src",bigUrl);
    });
    $("img.big").load(function(){
        $imgSmall.each(function(){
            var url=$(this).attr("bigUrl");
            img =new Image();
            img.src=url;
            img.onload=function(){
                $("div.img4load").append($(img));
            }
        })
    });
    $(".cuxiao").children().click(function(){
        window.location.href="促销.html";
    });
})