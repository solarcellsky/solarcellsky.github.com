var manifest;

manifest = [
          { src: "res/window_load.jpg", id: "loading" },
          { src: "res/pingzifenshuidonghua.png", id: "penshui" },
          { src: "res/pingzidonghua.png", id: "pingzi" },
          { src: "res/card_back.png", id: "kabei" },
          { src: "res/sm_yishoulu.png", id: "yishouji" },
          { src: "res/btn_begingame.png", id: "beginBtn" },
          { src: "res/window_gameteach1.png", id: "beginBg" },
          { src: "res/game_background_update.jpg", id: "mainBg" },
          { src: "res/time.png", id: "timeloading" },
          { src: "res/timeBar.png", id: "timebar" },
          { src: "res/timeico.png", id: "timeico" },
          { src: "res/pingzi_bottom.png", id: "pingziBottom" },
          { src: "res/btn_finger.png",id:"shouzhi" }
];

var cards1919 = ["res/cards/card1.png", "res/cards/card2.png", "res/cards/card3.png", "res/cards/card4.png", "res/cards/card5.png", "res/cards/card6.png", "res/cards/card7.png", "res/cards/card8.png", "res/cards/card9.png",
    "res/cards/card10.png", "res/cards/card11.png", "res/cards/card12.png", "res/cards/card13.png", "res/cards/card14.png", "res/cards/card15.png", "res/cards/card16.png", "res/cards/card17.png", "res/cards/card18.png", "res/cards/card19.png",
    "res/cards/card20.png", "res/cards/card21.png", "res/cards/card22.png", "res/cards/card23.png", "res/cards/card24.png", "res/cards/card25.png", "res/cards/card26.png", "res/cards/card27.png", "res/cards/card28.png", "res/cards/card29.png",
    "res/cards/card30.png", "res/cards/card31.png", "res/cards/card32.png", "res/cards/card33.png", "res/cards/card34.png", "res/cards/card35.png", "res/cards/card36.png", "res/cards/card37.png", "res/cards/card38.png", "res/cards/card39.png",
    "res/cards/card40.png", "res/cards/card41.png"
]
for (var i = 0; i < 6; i++) {
    manifest.push({ src: cards1919[Math.floor(Math.random() * cards1919.length)], id: "kapian" + i });
}