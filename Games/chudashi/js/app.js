$(function() {
    $(document).on("touchstart touchmove mousedown mousemove", function(event) {
        var thistag = event.target.tagName;
        event.target.id;
        "INPUT" != thistag && (event.preventDefault(), $("input").blur())
    }), $("body").height($(window).height()), a1 = document.getElementById("a1"), a2 = document.getElementById("a2"), $("#btn500").on("touchend", function() {
        var geturl = window.location.search;
        window.location.href = "./get.html" + geturl
    }), $(document).on("touchstart", function() {
        a1.load(), a2.load()
    }), $fbf1 = new FBF("#page1", {
        img: img1,
        speed: 80
    }), $fbf2 = new FBF("#page2", {
        img: img2,
        speed: 50
    }), myShakeEvent = new Shake({
        threshold: 12
    }), $(window).on("shake", function() {
        shake += 1, 1 === shake ? ($("#page3").hide(), a1.play(), $fbf1.play({}, function() {
            setTimeout(function() {
                $("#page1").hide(), a2.play(), $fbf2.play()
            }, 1e3)
        })) : 2 === shake ? ($("#page3").hide(), a1.play(), $fbf1.play({}, function() {
            setTimeout(function() {
                $("#page1").hide(), a2.play(), $fbf2.play()
            }, 1e3)
        })) : ($("#page3").hide(), a1.play(), $fbf1.play({}, function() {
            setTimeout(function() {
                $("#page1").hide(), a2.play(), $fbf2.play()
            }, 1e3)
        }))
    })
});
var shake = 0;
! function() {
    Pace.options = {
        ajax: !1,
        restartOnPushState: !1
    }, Pace.on("done", function() {
        console.log("done"), setTimeout(function() {
            $("#page3").show(), myShakeEvent.start()
        }, 1e3)
    })
}();
