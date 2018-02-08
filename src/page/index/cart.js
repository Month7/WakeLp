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