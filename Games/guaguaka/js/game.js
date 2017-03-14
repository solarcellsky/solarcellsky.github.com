window.sncode = "null";
window.prize = "谢谢参与";

var zjl = false;
var num = 0;
var goon = true;
$(function() {
    $("#scratchpad").wScratchPad({
        width: 285,
        height: 141,
        color: "#a9a9a7",
        scratchMove: function() {
            num++;
            if (num == 2) {
                //一等奖机率10% 二等奖20% 三等奖30% 幸运奖40%
                var randNum = Math.round(Math.random() * 99 + 1)
                if (randNum >= 1 && randNum <= 10) {
                    var award = "一等奖";
                    zjl = true;
                }
                if (randNum >= 11 && randNum <= 30) {
                    var award = "二等奖";
                    zjl = true;
                }
                if (randNum >= 31 && randNum <= 60) {
                    var award = "三等奖";
                    zjl = true;
                }
                if (randNum >= 61 && randNum <= 100) {
                    var award = "谢谢参与";
                }
                document.getElementById('prize').innerHTML = award;
                $("#theAward").html(award);
            }

            if (zjl && num > 10 && goon) {

                //$("#zjl").fadeIn();
                goon = false;

                $("#zjl").slideToggle(500);
                //$("#outercont").slideUp(500)
            }
        }
    });

    //$("#prize").html("谢谢参与");
    //loadingObj.hide();
    //$(".loading-mask").remove();
});
