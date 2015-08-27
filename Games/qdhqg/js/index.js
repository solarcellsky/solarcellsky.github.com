/*
* author:wangjia
* date:20150811
*/
$(function(){

    var girl1= 'images/girl1.png',
        girl2= 'images/girl2.png',
        girl3= 'images/girl3.png',
        girl4= 'images/girl4.png';

    var words = ['才这么点手速，你是没吃早饭吗？',
                 '少侠你的手速已经突破天际，想必单身20年了吧？',
                 '你的手速与faker只有一步之遥啦，骚年这么厉害，',
                 '难道这就是传说中的麒麟臂？',
                 '你的手速已经超过全国98%的花千迷，'
                 ];
    
    //初始化
    var hits,
        blood,
        bloodNum,
        leftTime,
        timer;

    function init(){
        hits = 0;
        blood = 100; //总血量
        bloodNum=4;
        leftTime=20; //20s倒计时
         $("#blood").css("width","350px");
        $("#second").html("20");
        $("#bloodNum").html("X4");
        $("#hitsNum").html("0");
        $(".girlbox").css('backgroundImage','url("'+girl1+'")')
        $(".words,.status,.scorebox,.girlbox,.pandabox").show();
        $("#j-light").removeClass("light");
        $("#j-boom").removeClass("boom");
        $(".bigpanda").hide();

        $(".stage").bind("tap",function(){
            girlPlay();
            pandaPlay();
            playSound();
            addScore();
        })
        timer = setInterval(countDown,1000); 
    }


    //开始
    $("#starBtn").click(function(){
       // alert("开始");
        ih5game.start();
        $(".begin").hide();
        $(".stage").show();
        init();
        
    })

    //倒计时
    
    
    function countDown(){
        if(leftTime>0){
            leftTime--;
            $("#second").html(leftTime);
        }else{
            gameover();
            
        }
    }

    


    //女孩动画
    var gIndex = 0;
    function girlPlay(){
        if(gIndex>0){
            gIndex=0;
        }else{
            gIndex++;
            setTimeout(girlPlay,50);
        }
        $(".girlbox").css("backgroundPosition",-gIndex*300+'px');
    }

    //熊猫动画
    var pIndex = 0;
    function pandaPlay(){
        if(pIndex>3){
            pIndex=0;
        }else{
            pIndex++;
            setTimeout(pandaPlay,50);
        }
        $(".pandabox").css("backgroundPosition",-pIndex*300+'px');
    }

    //加载声音
    var soundID = "Thunder";
    function loadSound () {
        createjs.Sound.registerSound("media/pa.mp3", soundID);
    }
    loadSound ();

    function playSound () {
        createjs.Sound.play(soundID);
    }

    
    
    //增加分数
    function addScore(){
        var scoreNum = Math.floor(Math.random()*2+2);
        var $score = $('<div class="score"><img src="images/score.png"></div>')
        $score.appendTo(".scorebox");
        $(".score").animate({"marginTop":"-100px","opacity":"0"},500,function(){
            var _this = this;
            $(function(){
                $(_this).remove();
            })
        })

        hits++;
        $("#hitsNum").html(hits);
        blood--;
        subBlood(blood);

        if(blood<1){
            subBloodNum();
        }


    }

    //血条数
    function subBloodNum(){
        blood=100; //总血量 
        bloodNum--;
        if(bloodNum>0){

            
            $("#bloodNum").html("X"+bloodNum);
           
            if(bloodNum==3){
                 $(".girlbox").css('backgroundImage','url("'+girl2+'")');
            }else if(bloodNum==2){
                $(".girlbox").css('backgroundImage','url("'+girl3+'")');
            }else if(bloodNum==1){
                $(".girlbox").css('backgroundImage','url("'+girl4+'")');
            }
           

        }else{

            $("#bloodNum").html("X"+0);
            //游戏结束
            gameover();
        }
        
        dropDiamonds();
    }

    //血量减少
    function subBlood(blood){
        $("#blood").css("width",blood*3.5);
    }

    //钻石降落
    var diamondNum=0;
    function dropDiamonds(){
        if(diamondNum<=50){
            var left = Math.random()*600;
            var top = -(Math.random()*60);
            var $diamond = $('<div class="diamond"></div>');
            $diamond.appendTo(".stage");
            $diamond.css({"left":left,"top":top});
            $diamond.animate({"marginTop":"1100px"},Math.random()*2000,function(){
                $(this).remove();
            })
            diamondNum++;
            dropDiamonds()
        }else{
            return false;
        }
        setTimeout(function(){
            diamondNum=0;
        },3000)
    }

    //熊猫跳出
    function boom(){
       $("#j-boom").removeClass("boom").addClass("boomed");
    }

    function pandaJump(){
        $("#j-boom").removeClass("boomed");
        $(".status").hide();
        $(".words").hide();
        $(".bigpanda").show();
    }

    //显示结果
    function showResult(){
        $(".stage").hide();
        $(".resultpage").show();
    }

    //游戏结束
    function gameover(){
        $(".stage").unbind("tap");
        clearInterval(timer);
        $(".girlbox,.pandabox").hide();
        $("#j-light").addClass("light");
        $("#j-boom").addClass("boom");
        setTimeout(boom,1500);
        setTimeout(pandaJump,2000);
        //显示结果页面
        $("#allHits").html(hits);
        if(hits<70){
            $("#resulutWord").html(words[0])
        }else if(hits>=70 && hits<80){
            $("#resulutWord").html(words[1])
        }else if(hits>=80 && hits<90){
            $("#resulutWord").html(words[2])
        }else if(hits>=90 && hits<100){
            $("#resulutWord").html(words[3])
        }else{
            $("#resulutWord").html(words[4])
        }
       // setTimeout(showResult,5000);
		showResult();
		dp_submitScore(hits);
    }

    //在玩一次
    $("#playagain").click(function(){
        $(".resultpage").hide();
        $(".begin").show();
    })

    $("#sharebtn").click(function(){
       dp_share();
    })
	 $("#morebtn").click(function(){
       clickMore();
    })

    $(".wxshare").click(function(){
        $(this).hide();
    })


    // 预加载图片
    var loadImg = {};
    function loadRate(loaded, loadLen){
      var num = Math.floor(loaded / loadLen * 100);
      $('#j-loadrate').html(num + '%');
    }
    function loadImgFn(srcArray, callback){
      var loadLen = srcArray.length;
      var loaded = 0;
      $.each(srcArray, function(){
        loadImg[this] = new Image();
        loadImg[this].src = 'images/' + this;
        if (loadImg[this].complete) {
          loaded ++;
          loadRate(loaded, loadLen);
          if (loaded == loadLen) {
            callback();
          }
        } else {
          loadImg[this].onload = loadImg[this].onerror = function(){
            loaded ++;
            loadRate(loaded, loadLen);
            if (loaded == loadLen) {
              callback();
            }
          };
        };
      });
    }

    //loading动画
    var loadImgArrar = [
      'again.jpg', 'bg1.jpg', 'bigpanda.png',
      'blood.png','bloodbg.png','boom.png',
      'diamond.png', 'girl1.png','girl2.png','girl3.png','girl4.png',
      'girlhd.png','girl-header.jpg','light.png','num.png','panda.png',
      'resultbg.jpg', 'score.png',
      'share.jpg', 'sharebtn.jpg', 
      'stagebg.jpg', 'starbtn.png',
      'wxshare.png'
    ];
    loadImgFn(loadImgArrar, function(){
        $(".load").hide();
        $(".begin").show();

    });





})