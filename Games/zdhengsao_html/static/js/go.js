$(function() {
    var obj = $("#rocket-to-top");
    var sTop = $(document).scrollTop();
    var timer, scrolldelay;
    var button = true;
    $(window).scroll(
    function() {
        var sTop = $(document).scrollTop();
        if (sTop == 0) {
            if (obj.css("background-position") == "0px 0px") {
                obj.fadeOut('slow')
            }
            else {
                if (button) {
                    button = false;
                    $(".level-2").css("opacity", 1);
                    obj.delay(100).animate(
                    {
                        marginTop: "-1000px"
                    },
                    "normal", 
                    function() {
                        obj.css({
                            "margin-top": "-125px",
                            "display": "none"
                        })
                        button = true;

                    }
                    )

                }

            }

        }
        else {
            obj.fadeIn("slow")
        }

    }
    )
    obj.hover(
    function() {
        $(".level-2").stop(true).animate({
            opacity: 1
        });

    },
    function() {
        $(".level-2").stop(true).animate({
            opacity: 0
        });

    }
    );
    $(".level-3").click(function() {
        if (!button) return;
        function changeBg() {
            var pos = obj.css("background-position");
            if (obj.css("display") == "none" || button == false) {
                clearInterval(timer);
                obj.css("background-position", "0px 0px");
                return;

            }
            switch (pos) {
                case "0px 0px":
                obj.css("background-position", "-298px 0px");
                break;
                case "-298px 0px":
                obj.css("background-position", "-447px 0px");
                break;
                case "-447px 0px":
                obj.css("background-position", "-596px 0px");
                break;
                case "-596px 0px":
                obj.css("background-position", "-745px 0px");
                break;
                case "-745px 0px":
                obj.css("background-position", "-298px 0px");
                break;

            }

        }
        timer = setInterval(changeBg, 50);
        $("html,body").animate({
            scrollTop: 0
        },
        "slow");

    });

});