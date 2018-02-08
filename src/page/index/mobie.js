$(function(){
    /*====================================移动端适配================================*/
    //全部分类页面
    if($(window).width()<=768){
        //购物车页面
      $(".cart-item").find("td").each(function(){
          if($(this).find("a").text()=="删除"){
              if($(this).attr("class")!="mobie-item"){
                  $(this).hide();
              }     
          }
      });
      var $wHeight=$(window).height();
      var $wWidth=$(window).width();
      var dcH=$(document).height();  
      var dcH2;
      var dcH3;
      var dcH4;
      /*=====================上拉加载=================*/
      $(window).scroll(function(){
          if($(window).scrollTop() + $(window).height() >=dcH-100){
              setTimeout(function(){
                      $("#row3").show();  
                      dcH2=$(document).height();         
              },1000);
          }
          if($(window).scrollTop() + $(window).height() >=dcH2-50){
              setTimeout(function(){
                      $("#row4").show();  
                      dcH3=$(document).height();  
              },1000);
          }
          if($(window).scrollTop() + $(window).height() >=dcH3-50){
              setTimeout(function(){
                      $("#row5").show();  
                      dcH4=$(document).height();  
              },1000);
          }
          if($(window).scrollTop() + $(window).height() >=dcH4-100){
              setTimeout(function(){
                      $("#row6").show();  
                      $(".mobie-slide").text("别拉啦,我是有底线的");
                      $("#spF").show();
              },1000);
          }
      })
  }
})