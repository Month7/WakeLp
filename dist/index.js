webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: yin 
	 * @Date: 2018-01-29 18:42:10 
	 * @Last Modified by: mikey.zhaopeng
	 * @Last Modified time: 2018-02-09 17:08:06
	 */
	'use strict';

	__webpack_require__(3);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(23);
	__webpack_require__(25);
	__webpack_require__(27);
	__webpack_require__(29);
	__webpack_require__(31);
	__webpack_require__(36);
	// require('./test.js');
	__webpack_require__(38);
	// require('../common/amazeui.css');
	__webpack_require__(40);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	//加载通用模块
	var common=__webpack_require__(39);
	// var Mock = require('mockjs')
	// var data = Mock.mock({
	//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	//     'list|1-10': [{
	//         // 属性 id 是一个自增数，起始值为 1，每次增 1
	//         'id|+1': 1
	//     }]
	// })
	// 输出结果
	// console.log("下面是模拟结果");
	// console.log(JSON.stringify(data, null, 4));
	// console.log("上面是模拟结果");


	// common.request({
	//     url:'../../do/test.io.json',
	//     success:function(res){
	        
	//     },
	//     error:function(errMsg){
	//         console.log("测试失败");
	//     }
	// })


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

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

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports) {

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

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	$(function(){
	    /*=========================================购物车交互================================*/
	    var $button1=$("button.title-button");
	    var $button2=$("button.bottom-button");
	    var $radioCheck=$("img.radio-check");
	    var $radiosCheck=$("img.radios-check");
	    function formatMoney(num){                       //以千进制格式化金额
	        num = num.toString().replace(/\$|\,/g,'');  
	        if(isNaN(num))  
	            num = "0";  
	        sign = (num == (num = Math.abs(num)));  
	        num = Math.floor(num*100+0.50000000001);  
	        cents = num%100;  
	        num = Math.floor(num/100).toString();  
	        if(cents<10)  
	        cents = "0" + cents;  
	        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
	        num = num.substring(0,num.length-(4*i+3))+','+  
	        num.substring(num.length-(4*i+3));  
	        return (((sign)?'':'-') + num + '.' + cents);  
	    }
	    function isAny(){
	        var isAny=false;
	        $radioCheck.each(function(){
	            if("isselected"==$(this).attr("isselected")){
	                isAny=true;
	            }
	        })
	        if(isAny){
	            $button1.css("background-color","#ff9900");
	            $button1.css("border-color","#ff9900");
	            $button2.css("background-color","#ff9900");
	            $button2.removeAttr("disabled");
	        }
	        else{
	            $button1.css("border-color","#AAAAAA");
	            $button1.css("background-color","#AAAAAA");
	            $button2.css("background-color","#AAAAAA");
	            $button2.css("disabled","disabled");
	        }
	    }
	    function checkIsAll(){
	        var isAll=true;
	        $radioCheck.each(function(){
	            if("false"==$(this).attr("isselected")){
	                isAll=false;
	            }
	        });
	        if(isAll){
	            $radiosCheck.attr("isselect","isselect");
	            $radiosCheck.attr("src","../images/cartSelected.png");
	        }
	        else{
	            $radiosCheck.attr("isselect","false");
	            $radiosCheck.attr("src","../images/cartNotSelected.png");
	        }
	    }
	    $radioCheck.click(function(){
	        var $that=$(this);
	        var isselected=$that.attr("isselected");
	        if(isselected=="isselected"){
	            $that.attr("isselected","false");
	            $that.attr("src","../images/cartNotSelected.png");
	            $that.parents("tr.cart-item").css("background-color","#fff");
	        }
	        else{
	            $that.attr("isselected","isselected");
	            $that.attr("src","../images/cartSelected.png");
	            $that.parents("tr.cart-item").css("background-color","#FFF8E1");
	        }
	        isAny();
	        cal();
	        checkIsAll();
	    })  
	    $radiosCheck.click(function(){
	        var isselect=$(this).attr("isselect");
	        if(isselect=="isselect"){
	            $(this).attr("isselect","false");
	            $(this).attr("src","../images/cartNotSelected.png");
	            $radioCheck.each(function(){
	                $(this).attr("isselected","false");
	                $(this).attr("src","../images/cartNotSelected.png");
	                $(this).parents("tr.cart-item").css("background-color","#fff");
	            })
	        }
	        else{
	            $(this).attr("isselect","isselect");
	            $(this).attr("src","../images/cartSelected.png");
	            $radioCheck.each(function(){
	                $(this).attr("isselected","isselected");
	                $(this).attr("src","../images/cartSelected.png");
	                $(this).parents("tr.cart-item").css("background-color","#FFF8E1");
	            })
	        }
	        isAny();
	        cal();
	        checkIsAll();
	    })
	    function cal(){
	        var sumPrice=0;
	        var totalNumber=0;
	        $("img.radio-check[isselected='isselected']").each(function(){
	            var oid=$(this).attr("oid");
	            var price=$(".nowPrice[oid="+oid+"]").text();
	            var num=$("input.text[oid="+oid+"]").val();
	            price=price.replace(/￥/g,"");
	            price=price*num;
	            sumPrice+=new Number(price);
	            totalNumber+=new Number(num);
	        });
	        $("span.bottom-price,span.title-price").html("￥"+sumPrice);
	        $("span.total").html(totalNumber);
	    }
	    $("a.increase").click(function(){
	        var pid=$(this).attr("pid");
	        var oid=$(".text[oid="+pid+"]").attr("oid");
	        var num=$(".text[oid="+oid+"]").val();
	        num++;
	        $(".text[oid="+oid+"]").val(num);
	        isAny();
	        cal();
	        checkIsAll();
	        var oid_=$("img.radio-check[oid="+oid+"]").attr("oid");
	        var num_=$("input.text[oid="+oid_+"]").val();
	        var price_=$(".nowPrice[oid="+oid_+"]").text();
	        price_=price_.replace(/￥/g,"");
	        price_=price_*num_;
	        var smallPrice=new Number(price_);
	        smallPrice=formatMoney(smallPrice);
	        $("span.calPrice[oid="+oid+"]").html("￥"+smallPrice);
	    });
	    $("a.decrease").click(function(){
	        var pid=$(this).attr("pid");
	        var oid=$(".text[oid="+pid+"]").attr("oid");
	        var num=$(".text[oid="+oid+"]").val();
	        num--;
	        $(".text[oid="+oid+"]").val(num);
	        isAny();
	        cal();
	        checkIsAll();
	        var oid_=$("img.radio-check[oid="+oid+"]").attr("oid");
	        var num_=$("input.text[oid="+oid_+"]").val();
	        var price_=$(".nowPrice[oid="+oid_+"]").text();
	        price_=price_.replace(/￥/g,"");
	        price_=price_*num_;
	        var smallPrice=new Number(price_);
	        smallPrice=formatMoney(smallPrice);
	        $("span.calPrice[oid="+oid+"]").html("￥"+smallPrice);
	    });
	})

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports) {

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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: mikey.zhaopeng 
	 * @Date: 2018-02-02 22:28:23 
	 * @Last Modified by: mikey.zhaopeng
	 * @Last Modified time: 2018-02-08 20:42:19
	 * 懒加载功能
	 */
	var load=__webpack_require__(39);
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

/***/ }),
/* 39 */
/***/ (function(module, exports) {

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

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * @Author: mikey.zhaopeng 
	 * @Date: 2018-01-31 17:25:59 
	 * @Last Modified by: mikey.zhaopeng
	 * @Last Modified time: 2018-01-31 19:45:43
	 */
	'use strict';

	var common=__webpack_require__(39);

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

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	$(function(){
	    /*======================================登陆注册=============================================*/
	    $("#toEmail").click(function(){
	        $(".register-email").animate({left:"0"},200);
	        $(".register-phone").animate({left:"400px"},10);
	    });
	    $("#toPhone").click(function(){
	        $(".register-phone").animate({left:"0"},200);
	        $(".register-email").animate({left:"-400px"},10);
	    })
	})

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	/*! fly - v1.0.0 - 2015-03-23
	* https://github.com/amibug/fly
	* Copyright (c) 2015 wuyuedong; Licensed MIT */
	!function(a){a.fly=function(b,c){var d={version:"1.0.0",autoPlay:!0,vertex_Rtop:20,speed:1.2,start:{},end:{},onEnd:a.noop},e=this,f=a(b);e.init=function(a){this.setOptions(a),!!this.settings.autoPlay&&this.play()},e.setOptions=function(b){this.settings=a.extend(!0,{},d,b);var c=this.settings,e=c.start,g=c.end;f.css({marginTop:"0px",marginLeft:"0px",position:"fixed"}).appendTo("body"),null!=g.width&&null!=g.height&&a.extend(!0,e,{width:f.width(),height:f.height()});var h=Math.min(e.top,g.top)-Math.abs(e.left-g.left)/3;h<c.vertex_Rtop&&(h=Math.min(c.vertex_Rtop,Math.min(e.top,g.top)));var i=Math.sqrt(Math.pow(e.top-g.top,2)+Math.pow(e.left-g.left,2)),j=Math.ceil(Math.min(Math.max(Math.log(i)/.05-75,30),100)/c.speed),k=e.top==h?0:-Math.sqrt((g.top-h)/(e.top-h)),l=(k*e.left-g.left)/(k-1),m=g.left==l?0:(g.top-h)/Math.pow(g.left-l,2);a.extend(!0,c,{count:-1,steps:j,vertex_left:l,vertex_top:h,curvature:m})},e.play=function(){this.move()},e.move=function(){var b=this.settings,c=b.start,d=b.count,e=b.steps,g=b.end,h=c.left+(g.left-c.left)*d/e,i=0==b.curvature?c.top+(g.top-c.top)*d/e:b.curvature*Math.pow(h-b.vertex_left,2)+b.vertex_top;if(null!=g.width&&null!=g.height){var j=e/2,k=g.width-(g.width-c.width)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2),l=g.height-(g.height-c.height)*Math.cos(j>d?0:(d-j)/(e-j)*Math.PI/2);f.css({width:k+"px",height:l+"px","font-size":Math.min(k,l)+"px"})}f.css({left:h+"px",top:i+"px"}),b.count++;var m=window.requestAnimationFrame(a.proxy(this.move,this));d==e&&(window.cancelAnimationFrame(m),b.onEnd.apply(this))},e.destroy=function(){f.remove()},e.init(c)},a.fn.fly=function(b){return this.each(function(){void 0==a(this).data("fly")&&a(this).data("fly",new a.fly(this,b))})}}(jQuery);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	
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

/***/ })
]);