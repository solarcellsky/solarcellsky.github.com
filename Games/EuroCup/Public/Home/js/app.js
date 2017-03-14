$(function () {
    /*$(window).on("orientationchange", function (event) {
     if (event.orientation == "landscape") {
     $("#start11").show();
     } else {
     $("#start11").hide();
     }
     });*/
    //预加载
    var the_images = [];
    the_images.push( "Public/Home/imgs/qiu.png");
    the_images.push( "Public/Home/imgs/bank.png");
    the_images.push( "Public/Home/imgs/2logo.png");
    the_images.push( "Public/Home/imgs/2line.png");
    the_images.push( "Public/Home/imgs/2go.png");
    the_images.push( "Public/Home/imgs/2btn.png");
    the_images.push( "Public/Home/imgs/2btn2.png");
    the_images.push( "Public/Home/imgs/12bor.png");
    the_images.push( "Public/Home/imgs/close.png");
    the_images.push( "Public/Home/imgs/zhi.png");
    the_images.push( "Public/Home/imgs/2bg.png");
    the_images.push( "Public/Home/imgs/1bg.png");
    the_images.push( "Public/Home/imgs/logo.png");
    var i = 1,j=1;
    jQuery.imgpreload(the_images, {
        each: function () {
            var percent = i * 7.7;
            var percent1 = j * 6.1;
            $("#jinduse").css({width: percent + '%'});
            $(".img13").css({left: percent1 + '%'});
            i++;
            j++;
            $("#start1").show();
        },
        all: function () {
            $("#start1").hide();
            $("#start2").show();
        }
    });
    //点击随机进球
    var value = Math.floor(Math.random() * 3 + 1);
    $(".img35").click(function () {
        $(".img36").hide();
        if (value == 1) {
            $(this).animate({"top": "43%", "left": "25%", "width": "8%"}, 200)
        } else if (value == 2) {
            $(this).animate({"top": "43%", "left": "65%", "width": "8%"}, 200)
        } else {
            $(this).animate({"top": "50%", "left": "75%", "width": "5%"}, 200)
        }
        setTimeout(function () {
            $("#start3").hide();
            //value=$(this).attr("value");
            if (value == 1) {
                $(".img43,.img44").show();
                setTimeout(function () {
                    $("#start4").hide();
                    $("#start3").show();
                    $(".img43,.img44").hide();
                    $(".img36").show();
                    $(".img35").animate({
                        "top": "70%", "left": "40%", "width": "20%"
                    })
                }, 1500)
            } else if (value == 2) {
                $(".img431,.img441").show();
                setTimeout(function () {
                    $("#start4").hide();
                    $("#start3").show();
                    $(".img431,.img441").hide();
                    $(".img36").show();
                    $(".img35").animate({
                        "top": "70%", "left": "40%", "width": "20%"
                    })
                }, 1500)
            } else {
                $(".img432,.img442,.img45").show();
                $(".img36").show();
                setTimeout(function () {
                    location.replace("first.html");
                }, 1000)
            }
            $("#start4").show();
            value++;
            $(this).attr("value", value);
        }, 200)
    });
    //点击出现预测结果
    $(".img25").click(function () {
        $(".box").show();
    })
    $(".img212").click(function () {
        $(".box").hide();
    })
    //点击活动规则
    $(".img26").click(function () {
        $("#start2").hide();
        $("#start12").show();
    })
    $(".img125").click(function () {
        $("#start12").hide();
        $("#start2").show();
    })
    //点击go
    $(".img24,.img36").bind("touchstart",function () {
       // alert("该活动以下线")
       $("#start2").hide();
       $('#start3').show();
    })
    $(".img442").click(function () {
        location.replace("first.html");
    })
    //点击查看
    $(".img107").bind("click", function () {
        $(".box11").show();
    });
    //音符暂停
    $("#yf").click(function(){
        if($(this).attr("value")=="kaishi"){
            $("#audio")[0].pause();
            $(this).attr("value","zanting").removeClass("zhuan")
        }else{
            $("#audio")[0].play();
            $(this).attr("value","kaishi").addClass("zhuan")
        }
    })
    //选择球队提交
    var a = 0;

    function tijiao(r, r1) {
        $(r).bind("touchstart",function () {
            var shu = $(this).parents("ul").attr("value");
            if (shu <= 1) {
                var dizhi = $(this).next().attr("src");
                $(this).hide().next("img").show().next("input").attr("value", dizhi);
                shu++;
                $(this).parents("ul").attr("value", shu);
                a++;
                console.log(a);
            } else {
                alert("每组不能超过两个球队")
            }
        })
        $(r1).bind("touchstart",function () {
            var shu = $(this).parents("ul").attr("value");
            shu--;
            a--;
            console.log(a);
            $(this).parents("ul").attr("value", shu);
            $(this).hide().prev("img").show().siblings("input").removeAttr("value");
        })
    }

    tijiao("#start5 .a", "#start5 .a1");
    tijiao("#start5 .b", "#start5 .b1");
    tijiao("#start5 .c", "#start5 .c1");
    tijiao("#start5 .d", "#start5 .d1");
    tijiao("#start5 .e", "#start5 .e1");
    tijiao("#start5 .f", "#start5 .f1");
    $(".img55").click(function (event) {
        if (a == 12) {
        } else {
            alert("每组球队必须选两队")
            event.preventDefault()
        }
    })
    $(".img56").click(function (event) {
        //location.reload(true);
        a = 0;
        $(".ul").attr("value", "0");
        $(".a,.b,.c,.d,.e,.f").show().next().hide();
        $("input").removeAttr("value");
    })
    //验证手机号码
    $(".img213").click(function () {
        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($("form input").val()))) {
            alert("不是完整的11位手机号或者正确的手机号前七位");
            return false;
        }
    })
});
