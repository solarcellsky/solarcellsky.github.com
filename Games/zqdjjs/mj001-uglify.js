this.mjcg = this.mjcg || {}, function () {
    var a = function () {
        throw"R cannot be instantiated."
    };
    a.STAGE = {w: 768, h: 998}, a.FPS = 15, a.DRAW_SCALE = 1, a.PLACE_SCALE = .5, a.STORAGE_KEY_PREFIX = "mj001_", a.STORAGE_KEY_HISCORE = "hi_score", a.STORAGE_KEY_ITEM_NATIONAL = "item_national", a.STORAGE_KEY_ITEM_AURA = "item_aura", a.STORAGE_KEY_TRICKS = "tricks", a.INCENTIVE_ID_TRICKS = "share_tricks", a.INCENTIVE_ID_ITEM = "share_item", a.SCORE_DIGIT_MAX = 6, a.TIME_DIGIT_MAX = 2, a.COMBO_DIGIT_MAX = 2, a.KICK_SCORE_DIGIT_MAX = 6, a.KICK_SCORE_Y = 180, a.KICK_SCORE_SCALE_MAX = 2 * (32 / 52), a.KICK_SCORE_SCALE_MIN = .5 * (32 / 52), a.KICK_SCORE_SCALE = [1, 2, 3, 6], a.KICK_SCORE_DISP_TIME = 1e4 / 15, a.INITIAL_TIME = 60, a.NIGHTMARE_LEFT_TIME = 15, a.OCCUR_CRITERION_YELLOW = 2, a.OCCUR_CRITERION_RED = 4, a.SCORE_COEFFICIENT_NORMAL = 1, a.SCORE_COEFFICIENT_YELLOW = 1.5, a.SCORE_COEFFICIENT_RED = 1.5, a.SCORE_COEFFICIENT_FREEKICK = 2, a.SCORE_COMBO_FACTOR = 100, a.BALL_VELOCITY = 868 / 12, a.BALL_SCALE_DOWN_VELOCITY = 3, a.BALL_ROTATION_VELOCITY = -10, a.BALL_VANISH_Y = 70, a.BALL_MIN_DY_PER_DX = 65 / (437 / 9), a.BALL_BLOCK_LEFT = [
        {x: 242, y: 302},
        {x: 50, y: 646}
    ], a.BALL_BLOCK_RIGHT = [
        {x: 768, y: 0},
        {x: 768, y: 998}
    ], a.COMBO_MOVE_X = 440, a.COMBO_MOVE_TIME = 4e3 / 15, a.COMBO_DISP_TIME = 1e4 / 15, a.SPECIAL_METER_MAX = 100, a.SPECIAL_METER_FACTOR_NORMAL = 5, a.SPECIAL_METER_FACTOR_BLUE = 10, a.KICKER_ANIM_MAP = [
        {max_dx_per_dy: Math.tan(20 / 180 * Math.PI), anim_r: {stand: "PL_KICKER_STAND_3", kick: "PL_KICKER_KICK_3", aura: "PL_KICKER_AURA_3"}, anim_l: {stand: "PL_KICKER_STAND_3", kick: "PL_KICKER_KICK_3", aura: "PL_KICKER_AURA_3"}, anim_r_n: {stand: "PL_KICKER_STAND_3_N", kick: "PL_KICKER_KICK_3_N", aura: "PL_KICKER_AURA_3"}, anim_l_n: {stand: "PL_KICKER_STAND_3_N", kick: "PL_KICKER_KICK_3_N", aura: "PL_KICKER_AURA_3"}},
        {max_dx_per_dy: Math.tan(40 / 180 * Math.PI), anim_r: {stand: "PL_KICKER_STAND_4", kick: "PL_KICKER_KICK_4", aura: "PL_KICKER_AURA_4"}, anim_l: {stand: "PL_KICKER_STAND_2", kick: "PL_KICKER_KICK_2", aura: "PL_KICKER_AURA_2"}, anim_r_n: {stand: "PL_KICKER_STAND_4_N", kick: "PL_KICKER_KICK_4_N", aura: "PL_KICKER_AURA_4"}, anim_l_n: {stand: "PL_KICKER_STAND_2_N", kick: "PL_KICKER_KICK_2_N", aura: "PL_KICKER_AURA_2"}},
        {max_dx_per_dy: 0 / 0, anim_r: {stand: "PL_KICKER_STAND_5", kick: "PL_KICKER_KICK_5", aura: "PL_KICKER_AURA_5"}, anim_l: {stand: "PL_KICKER_STAND_1", kick: "PL_KICKER_KICK_1", aura: "PL_KICKER_AURA_1"}, anim_r_n: {stand: "PL_KICKER_STAND_5_N", kick: "PL_KICKER_KICK_5_N", aura: "PL_KICKER_AURA_5"}, anim_l_n: {stand: "PL_KICKER_STAND_1_N", kick: "PL_KICKER_KICK_1_N", aura: "PL_KICKER_AURA_1"}}
    ], a.HOUSE_DURABILITY = 9, a.HOUSE_ANIM_MAP = [
        {anim: "PL_HOUSE_1", min: 7},
        {anim: "PL_HOUSE_2", min: 5},
        {anim: "PL_HOUSE_3", min: 3},
        {anim: "PL_HOUSE_4", min: 1}
    ], a.DAMAGE_INTERVAL = 1e3, a.HELP_WAIT = 500, a.HELP_TIME = 900, a.ZZZ_INTERVAL_MIN = 3e3, a.ZZZ_INTERVAL_MAX = 4e3, a.TENT_ANIMS = {Zzz: {tent: "PL_TENT_1", help: "PL_HELP_1"}, Awake: {tent: "PL_TENT_2", help: "PL_HELP_2"}, Help: {tent: "PL_TENT_3", help: "PL_HELP_3"}}, a.HOUSE_DURABILITY_HELP = 5, a.ENEMY_TYPE_PARAM = {Normal: {anim_walk: "PL_ENEMY_1", anim_crash: "PL_ENEMY_1_CRASH", speed_min: 2, speed_max: 4, power: 2, score: 500, ratio_normal: 5, ratio_red: 1}, Speed: {anim_walk: "PL_ENEMY_4", anim_crash: "PL_ENEMY_4_CRASH", speed_min: 5, speed_max: 6, power: 1, score: 800, ratio_normal: 2, ratio_red: 2}, Power: {anim_walk: "PL_ENEMY_3", anim_crash: "PL_ENEMY_3_CRASH", speed_min: 1, speed_max: 2, power: 3, score: 800, ratio_normal: 3, ratio_red: 2}, Red: {anim_walk: "PL_ENEMY_2", anim_crash: "PL_ENEMY_2_CRASH", speed_min: 2, speed_max: 4, power: 2, score: 2e3, ratio_normal: 0, ratio_red: 5}, Hand: {anim_walk: "PL_ENEMY_5", anim_crash: "PL_ENEMY_5_CRASH", speed_min: 1, speed_max: 2, power: 1, score: 500, ratio_normal: 1, ratio_red: 1}, Wall: {anim_walk: "PL_ENEMY_6", anim_crash: "PL_ENEMY_6_CRASH", speed_min: 1, speed_max: 2, power: 1, score: 500, ratio_normal: 0, ratio_red: 0}}, a.ENEMY_TYPE_PARAM_NIGHTMARE = {Power: {anim_walk: "PL_ENEMY_3_N", speed_min: 4, speed_max: 5}}, a.ENEMY_SPEED_FACTOR = 4, a.LANE_PARAM = [
        {house_x: -691, house_y: 156, house_scale: 1, help_x: 40, help_y: 130, help_scale: 1, enemy_scale: 1, enemy_right: 768, enemy_left: 46, enemy_top: 326},
        {house_x: -403.75, house_y: 92.5, house_scale: .75, help_x: 149, help_y: 96.5, help_scale: .75, enemy_scale: 208.6 / 228.9, enemy_right: 768, enemy_left: 128, enemy_top: 162},
        {house_x: -196.57142857142856, house_y: 50.28571428571428, house_scale: 64 / 112, help_x: 200 + 36 * (1 - 64 / 112), help_y: 47.14285714285715, help_scale: 64 / 112, enemy_scale: 178 / 228.9, enemy_right: 768, enemy_left: 198, enemy_top: 87.42857142857144},
        {house_x: -22.9107142857143, house_y: 37.89285714285711, house_scale: 46 / 112, help_x: 271.2142857142857, help_y: 21.321428571428584, help_scale: 46 / 112, enemy_scale: 137.2 / 228.9, enemy_right: 768, enemy_left: 258, enemy_top: 47.714285714285666}
    ], a.ENEMY_H = 224, a.ENEMY_W = 224, a.ENEMY_W_HIGHPOWER = 448, a.ENEMY_ORG_X = 160, a.HAND_POINT = {x: 100, y: 194}, a.HAND_TIMEOUT = 15e3, a.HAND_INTERVAL_MIN = 1e4, a.HAND_INTERVAL_MAX = 2e4, a.RESULT_SCENE_BGCOLOR = "#7ecef4", a.RESULT_SKIP_TIMEOUT = 2e3, a.RESULT_COUNT_DIGIT_MAX = 2, a.TALK_DISP_TIME = 2e3, a.RESULT_CATEGORY_ID_NA = 0, a.COMM_ERROR_CLASSNAME = "error_cls", a.LANDSCAPE_ALERT_CLASSNAME = "alert_cls", a.BROWSER_ALERT_CLASSNAME = "browser_alert_cls", a.BROWSER_ALERT_UA_NAMES = ["HTL21", "HTX21"], a.START_WAIT_UA_NAMES = ["ISW11SC"], a.START_WAIT_TIME = 2e3, a.START_WAIT_MIN_TIME = 100, a.RELOAD_ON_ROTATE_WAIT_TIME = 1e3, a.QUARTER_IMAGE_UA_NAMES = ["SC-02B"], a.IMAGES = {TT_BG: {src: "logo.png", x: 0, y: 0, w: 768, h: 998}},
        a.TEXTS = {LOCALE: "ja", TEXT_BLOCK_SCALE_X: 1, TT_BG_SRC: "logo.png",
            LANDSCAPE_ALERT: "请竖屏玩此游戏",
            BROWSER_ALERT: "请使用Chrome浏览器",
            COMM_ERROR: "无法连接到网络",
            LD_PROGRESS: {text: "Loading...", fontpx: 45, fontname: "monospace", color: "#FFF", bgcolor: "#000", x: 384, y: 499, textAlign: "center", textBaseline: "middle"},
            TT_ITEM_BALL_INFO: {text: "获\n能量波射门\n神技！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 326, y: 407, textAlign: "left", textBaseline: "top"},
            TT_ITEM_WEAR_INFO: {text: "获得\n特别蓝色队服！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 322, y: 367, textAlign: "left", textBaseline: "top"},
            TT_ITEM_BALL_LABEL: {text: "使用能量将足球变大！", fontpx: 30, fontname: "monospace", color: "#FFF", x: 251, y: 329, textAlign: "left", textBaseline: "top"},
            TT_ITEM_WEAR_LABEL: {text: "必杀技能量储存速度加速", fontpx: 30, fontname: "monospace", color: "#FFF", x: 251, y: 513, textAlign: "left", textBaseline: "top"},
            RS_HISCORE_LABEL: {text: "最高分", fontpx: 45, fontname: "monospace", color: "#FFF", x: 366, y: 20, textAlign: "right", textBaseline: "top"},
            RS_HISCORE: {text: "00000000", fontpx: 45, fontname: "monospace", color: "#FFF", x: 558, y: 20, textAlign: "right", textBaseline: "top"},
            RS_SCORE_LABEL: {text: "得分", fontpx: 45, fontname: "monospace", color: "#FFF", x: 366, y: 70, textAlign: "right", textBaseline: "top"},
            RS_SCORE: {text: "00000000", fontpx: 45, fontname: "monospace", color: "#FFF", x: 558, y: 70, textAlign: "right", textBaseline: "top"},
            RS_TRICKS_MESSAGE: {text: "将“足球大战僵尸”\n推荐给好友可以\n解锁游戏秘籍！"},
            RS_ITEM_MESSAGE: {text: "“足球大战僵尸”\n推荐给好友可以\n获得隐藏道具！"},
            RS_POST_MESSAGE: {text: '用足球也可以打僵尸了！？我得到了 "score"分！', token_score: '"score"'},
            RS_TRICKS_INFO: {text: "某个僵尸连续攻击同\n一个栅栏时，会被判\n为犯规领到黄牌，\n游戏将进入任意球模式。\n在任意球模式中的得分\n是平时的1.5倍！\n 如果继续重复犯规行为，就会吃到红牌！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 89.8, y: 369, textAlign: "left", textBaseline: "top"},
            RS_ITEM_BALL_INFO: {text: "分享“足球大战僵尸”\n给你的好友，你就能\n获得神器的能量波射\n门能力！ \n\n快用超级射门打败\n僵尸大军吧！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 316, y: 336, textAlign: "left", textBaseline: "top"},
            RS_ITEM_WEAR_INFO: {text: "分享“足球大战僵尸”\n给你的好友，你就能\n得到特殊队服，加速\n必杀技能量恢复速度！\n更容易出现连击射门！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 312, y: 357, textAlign: "left", textBaseline: "top"}},
        a.TEXTS_EN = {LOCALE: "en", TEXT_BLOCK_SCALE_X: .83, TT_BG_SRC: "logo_english.png",
            LANDSCAPE_ALERT: "请竖屏玩此游戏",
            BROWSER_ALERT: "请使用Chrome浏览器",
            COMM_ERROR: "无法连接到网络",
            LD_PROGRESS: {text: "读取中...", fontpx: 45, fontname: "monospace", color: "#FFF", bgcolor: "#000", x: 384, y: 499, textAlign: "center", textBaseline: "middle"},
            TT_ITEM_BALL_INFO: {text: "获\n能量波射门\n神技！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 306, y: 407, textAlign: "left", textBaseline: "top"},
            TT_ITEM_WEAR_INFO: {text: "获得\n特别蓝色队服！", fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 302, y: 367, textAlign: "left", textBaseline: "top"},
            TT_ITEM_BALL_LABEL: {text: "使用能量将足球变大!", fontpx: 30, fontname: "monospace", color: "#FFF", x: 251, y: 329, textAlign: "left", textBaseline: "top"},
            TT_ITEM_WEAR_LABEL: {text: "必杀技能量储存速度加速", fontpx: 30, fontname: "monospace", color: "#FFF", x: 251, y: 513, textAlign: "left", textBaseline: "top"},
            RS_HISCORE_LABEL: {text: "最高分", fontpx: 45, fontname: "monospace", color: "#FFF", x: 366, y: 20, textAlign: "right", textBaseline: "top"},
            RS_HISCORE: {text: "00000000", fontpx: 45, fontname: "monospace", color: "#FFF", x: 558, y: 20, textAlign: "right", textBaseline: "top"},
            RS_SCORE_LABEL: {text: "得分", fontpx: 45, fontname: "monospace", color: "#FFF", x: 366, y: 70, textAlign: "right", textBaseline: "top"},
            RS_SCORE: {text: "00000000", fontpx: 45, fontname: "monospace", color: "#FFF", x: 558, y: 70, textAlign: "right", textBaseline: "top"},
            RS_TRICKS_MESSAGE: {text: "将“足球大战僵尸”推荐给好友可以解锁游戏秘籍！"},
            RS_ITEM_MESSAGE: {text: "“足球大战僵尸”推荐给好友可以获得隐藏道具！"},
            RS_POST_MESSAGE: {text: '用足球也可以打僵尸了！？我得到了 "score"分！', token_score: '"score"'},
            RS_TRICKS_INFO: {text: '某个僵尸连续攻击同一个栅栏时，\n会被判为犯规领到黄牌，\n游戏将进入任意球模式。\n在任意球模式中的得分是平时的1.5倍！\n 如果继续重复犯规行为，就会吃到红牌！', fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 106, y: 369, textAlign: "left", textBaseline: "top"},
            RS_ITEM_BALL_INFO: {text: '分享“足球大战僵尸”给你的好友，\n你就能获得神器的能量波射门能力！ \n快有超级射门打败僵尸大军吧！', fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 316, y: 336, textAlign: "left", textBaseline: "top"},
            RS_ITEM_WEAR_INFO: {text: '分享“足球大战僵尸”给你的好友，你就能得到特殊队服，加速必杀技能量恢复速度！更容易出现连击射门！', fontpx: 32.4, fontname: "monospace", color: "#FFF", x: 312, y: 357, textAlign: "left", textBaseline: "top"}},
        a.CONTAINERS = {TT_WIDGET: {x: 10, y: 326}, RS_WIDGET: {x: 10, y: 156940 / 998}},
        a.SPRITESHEETS = {TT_WINDOW: {src: "window.png"}, PL_ENEMY_BALL: {src: "main.png"}, PL_HOUSE_BG: {src: "hosue_bg_ed_half.png"}, PL_KICKER: {src: "main.png"}, PL_UI: {src: "main.png"}, PL_HELP_HAND: {src: "main.png"}, PL_TORNADO: {src: "effect_skill_1067.png"}, RS_RESULT: {src: "hosue_bg_ed_half.png"}, RS_WINDOW: {src: "window.png"}}, a.Q_SPRITESHEETS = {TT_WINDOW: {src: "q_window.png", scale: 2}, PL_ENEMY_BALL: {src: "q_main.png", scale: 2}, PL_HOUSE_BG: {src: "q_hosue_bg_ed_half.png", scale: 2}, PL_KICKER: {src: "q_main.png", scale: 2}, PL_UI: {src: "q_main.png", scale: 2}, PL_HELP_HAND: {src: "q_main.png", scale: 2}, PL_TORNADO: {src: "effect_skill_1067.png"}, RS_RESULT: {src: "q_hosue_bg_ed_half.png", scale: 2}, RS_WINDOW: {src: "q_window.png", scale: 2}}, a.BITMAPANIMS = {TT_BTN_START: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0004"}
    ]}, TT_BTN_ITEM: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0002"}
    ]}, TT_ITEMGET_BALL_WINDOW: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0013"}
    ]}, TT_ITEMGET_WEAR_WINDOW: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0014"}
    ]}, TT_CLOSE: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0016"}
    ]}, TT_ITEMSET_WINDOW: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0005"}
    ]}, TT_ITEMSET_OFF_ON: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0006"}
    ]}, TT_ITEMSET_OFF_OFF: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0007"}
    ]}, TT_ITEMSET_ON_ON: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0008"}
    ]}, TT_ITEMSET_ON_OFF: {sheet: "TT_WINDOW", frames: [
        {frame: "@@画像群0009"}
    ]}, PL_BG: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0004"}
    ]}, PL_TENT_1: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0007"}
    ]}, PL_TENT_2: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0008"}
    ]}, PL_TENT_3: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0009"}
    ]}, PL_HELP_1: {sheet: "PL_HELP_HAND", frames: [
        {frame: "@@画像群0121"}
    ]}, PL_HELP_2: {sheet: "PL_HELP_HAND", frames: [
        {frame: "@@画像群0122"}
    ]}, PL_HELP_3: {sheet: "PL_HELP_HAND", frames: [
        {frame: "@@画像群0110"}
    ]}, PL_BONFIRE: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0010"}
    ]}, PL_ROCK: {sheet: "PL_HOUSE_BG", frames: [
        {frame: "@@画像群0011"}
    ]}, PL_HOUSE_1: {sheet: "PL_HOUSE_BG", regX: -7.9375, regY: -119 / 120, frames: [
        {frame: "@@画像群0000"}
    ]}, PL_HOUSE_2: {sheet: "PL_HOUSE_BG", regX: -7.9375, regY: -121 / 118, frames: [
        {frame: "@@画像群0001"}
    ]}, PL_HOUSE_3: {sheet: "PL_HOUSE_BG", regX: -378 / 51, regY: -121 / 118, frames: [
        {frame: "@@画像群0002"}
    ]}, PL_HOUSE_4: {sheet: "PL_HOUSE_BG", regX: -4.72, regY: -120 / 119, frames: [
        {frame: "@@画像群0003"}
    ]}, PL_ENEMY_1: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0000", count: 4},
        {frame: "@@画像群0001", count: 4},
        {frame: "@@画像群0002", count: 4},
        {frame: "@@画像群0001", count: 4}
    ]}, PL_ENEMY_1_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0003"},
        {frame: "@@画像群0004"}
    ]}, PL_ENEMY_2: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0005", count: 4},
        {frame: "@@画像群0006", count: 4},
        {frame: "@@画像群0007", count: 4},
        {frame: "@@画像群0006", count: 4}
    ]}, PL_ENEMY_2_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0008"},
        {frame: "@@画像群0009"}
    ]}, PL_ENEMY_3: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0010", count: 4},
        {frame: "@@画像群0011", count: 4},
        {frame: "@@画像群0012", count: 4},
        {frame: "@@画像群0011", count: 4}
    ]}, PL_ENEMY_3_N: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0010", count: 1},
        {frame: "@@画像群0011", count: 1},
        {frame: "@@画像群0012", count: 1},
        {frame: "@@画像群0011", count: 1}
    ]}, PL_ENEMY_3_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0013"},
        {frame: "@@画像群0014"}
    ]}, PL_ENEMY_4: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0015", count: 4},
        {frame: "@@画像群0016", count: 4},
        {frame: "@@画像群0017", count: 4},
        {frame: "@@画像群0016", count: 4}
    ]}, PL_ENEMY_4_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0018"},
        {frame: "@@画像群0019"}
    ]}, PL_ENEMY_5: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0020", count: 4},
        {frame: "@@画像群0021", count: 4}
    ]}, PL_ENEMY_5_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0022"},
        {frame: "@@画像群0023"}
    ]}, PL_ENEMY_5_CATCH: {sheet: "PL_HELP_HAND", frames: [
        {frame: "@@画像群0111"},
        {frame: "@@画像群0112"}
    ]}, PL_ENEMY_6: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0024", count: 4},
        {frame: "@@画像群0025", count: 4}
    ]}, PL_ENEMY_6_CRASH: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0026"},
        {frame: "@@画像群0027"}
    ]}, PL_BALL: {sheet: "PL_ENEMY_BALL", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0059"}
    ]}, PL_BALL_AURA: {sheet: "PL_ENEMY_BALL", regX: .5, regY: .5 - 20 / 90, frames: [
        {frame: "@@画像群0058"}
    ]}, PL_BALL_SP_AURA: {sheet: "PL_ENEMY_BALL", regX: .5, regY: .5 - 32 / 99, frames: [
        {frame: "@@画像群0109"}
    ]}, PL_KICKER_AURA: {sheet: "PL_KICKER", loop: !0, regX: .5, regY: .5, frames: [
        {frame: "@@画像群0045"},
        {frame: "@@画像群0046"},
        {frame: "@@画像群0047"}
    ]}, PL_KICKER_STAND_1: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0028"}
    ]}, PL_KICKER_STAND_2: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0029"}
    ]}, PL_KICKER_STAND_3: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0030"}
    ]}, PL_KICKER_STAND_4: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0031"}
    ]}, PL_KICKER_STAND_5: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0032"}
    ]}, PL_KICKER_KICK_1: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0033"}
    ]}, PL_KICKER_KICK_2: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0034"}
    ]}, PL_KICKER_KICK_3: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0035"}
    ]}, PL_KICKER_KICK_4: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0036"}
    ]}, PL_KICKER_KICK_5: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0037"}
    ]}, PL_KICKER_STAND_1_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0048"}
    ]}, PL_KICKER_STAND_2_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0049"}
    ]}, PL_KICKER_STAND_3_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0050"}
    ]}, PL_KICKER_STAND_4_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0051"}
    ]}, PL_KICKER_STAND_5_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0052"}
    ]}, PL_KICKER_KICK_1_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0053"}
    ]}, PL_KICKER_KICK_2_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0054"}
    ]}, PL_KICKER_KICK_3_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0055"}
    ]}, PL_KICKER_KICK_4_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0056"}
    ]}, PL_KICKER_KICK_5_N: {sheet: "PL_KICKER", frames: [
        {frame: "@@画像群0057"}
    ]}, PL_EFFECT_KICK: {sheet: "PL_KICKER", regX: 0, regY: 1, frames: [
        {frame: "@@画像群0038"},
        {frame: "@@画像群0039"},
        {frame: "@@画像群0040"},
        {frame: "@@画像群0041"}
    ]}, PL_EFFECT_HIT: {sheet: "PL_KICKER", regX: 0, regY: 1, frames: [
        {frame: "@@画像群0042"},
        {frame: "@@画像群0043"},
        {frame: "@@画像群0044"}
    ]}, PL_SP_BTN_OFF: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0060"}
    ]}, PL_SP_BTN_DOWN: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0061"}
    ]}, PL_SP_BTN_UP: {sheet: "PL_UI", loop: !0, frames: [
        {frame: "@@画像群0060", count: 4},
        {frame: "@@画像群0062", count: 4}
    ]}, PL_SP_METER: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0074"}
    ]}, PL_SP_METER_MASK: {sheet: "PL_UI", regX: 1, regY: 0, frames: [
        {frame: "@@画像群0075"}
    ]}, PL_SP_METER_FRAME: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0073"}
    ]}, PL_NUM_COMBO_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0063"}
    ]}, PL_NUM_COMBO_2: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0064"}
    ]}, PL_NUM_COMBO_3: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0065"}
    ]}, PL_NUM_COMBO_4: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0066"}
    ]}, PL_NUM_COMBO_5: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0067"}
    ]}, PL_NUM_COMBO_6: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0068"}
    ]}, PL_NUM_COMBO_7: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0069"}
    ]}, PL_NUM_COMBO_8: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0070"}
    ]}, PL_NUM_COMBO_9: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0071"}
    ]}, PL_NUM_COMBO_0: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0072"}
    ]}, PL_COMBO_PLATE: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0088"}
    ]}, PL_SCORE_LABEL: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0086"}
    ]}, PL_TIME_LABEL: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0087"}
    ]}, PL_NUM_SCORE_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0076"}
    ]}, PL_NUM_SCORE_2: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0077"}
    ]}, PL_NUM_SCORE_3: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0078"}
    ]}, PL_NUM_SCORE_4: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0079"}
    ]}, PL_NUM_SCORE_5: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0080"}
    ]}, PL_NUM_SCORE_6: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0081"}
    ]}, PL_NUM_SCORE_7: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0082"}
    ]}, PL_NUM_SCORE_8: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0083"}
    ]}, PL_NUM_SCORE_9: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0084"}
    ]}, PL_NUM_SCORE_0: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0085"}
    ]}, PL_HELP_LABEL: {sheet: "PL_HELP_HAND", frames: [
        {frame: "@@画像群0110"}
    ]}, PL_MODE_FREEKICK: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0090"}
    ]}, PL_MODE_YELLOW: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0114"}
    ]}, PL_MODE_RED: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0115"}
    ]}, PL_CUTIN_KICKOFF: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0093"}
    ]}, PL_CUTIN_HAND: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0094"}
    ]}, PL_CUTIN_YELLOW: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0095"}
    ]}, PL_CUTIN_RED: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0096"}
    ]}, PL_CUTIN_SPECIAL: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0097"}
    ]}, PL_RED_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0098"}
    ]}, PL_RED_2: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0099"}
    ]}, PL_SPECIAL_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0100"}
    ]}, PL_RED_3: {sheet: "PL_UI", loop: !0, frames: [
        {frame: "@@画像群0101", count: 4},
        {frame: "@@画像群0102", count: 4}
    ]}, PL_KICKOFF_TEXT: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0103"}
    ]}, PL_HAND_TEXT: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0104"}
    ]}, PL_YELLOW_TEXT: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0105"}
    ]}, PL_RED_TEXT: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0106"}
    ]}, PL_RED_4: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0107"}
    ]}, PL_SPECIAL_2: {sheet: "PL_UI", regX: 176 / 310, regY: .68, frames: [
        {frame: "@@画像群0108"}
    ]}, PL_NIGHTMARE_TEXT: {sheet: "PL_UI", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0116"}
    ]}, PL_CUTIN_NIGHTMARE: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0117"}
    ]}, PL_TORNADO: {sheet: "PL_TORNADO", loop: !0, frames: [
        {frame: "@@画像群0000"},
        {frame: "@@画像群0001"},
        {frame: "@@画像群0002"},
        {frame: "@@画像群0003"},
        {frame: "@@画像群0004"},
        {frame: "@@画像群0005"}
    ]}, PL_NUM_KICK_SCORE_0: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0149"}
    ]}, PL_NUM_KICK_SCORE_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0150"}
    ]}, PL_NUM_KICK_SCORE_2: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0151"}
    ]}, PL_NUM_KICK_SCORE_3: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0152"}
    ]}, PL_NUM_KICK_SCORE_4: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0153"}
    ]}, PL_NUM_KICK_SCORE_5: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0154"}
    ]}, PL_NUM_KICK_SCORE_6: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0155"}
    ]}, PL_NUM_KICK_SCORE_7: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0156"}
    ]}, PL_NUM_KICK_SCORE_8: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0157"}
    ]}, PL_NUM_KICK_SCORE_9: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0158"}
    ]}, RS_GOOD_ED: {sheet: "RS_RESULT", frames: [
        {frame: "@@画像群0006"}
    ]}, RS_BAD_ED: {sheet: "RS_RESULT", frames: [
        {frame: "@@画像群0005"}
    ]}, RS_BTN_NEXT: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0120"}
    ]}, RS_NUM_COUNT_1: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0076"}
    ]}, RS_NUM_COUNT_2: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0077"}
    ]}, RS_NUM_COUNT_3: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0078"}
    ]}, RS_NUM_COUNT_4: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0079"}
    ]}, RS_NUM_COUNT_5: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0080"}
    ]}, RS_NUM_COUNT_6: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0081"}
    ]}, RS_NUM_COUNT_7: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0082"}
    ]}, RS_NUM_COUNT_8: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0083"}
    ]}, RS_NUM_COUNT_9: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0084"}
    ]}, RS_NUM_COUNT_0: {sheet: "PL_UI", frames: [
        {frame: "@@画像群0085"}
    ]}, RS_ENEMY_1: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0133", count: 4},
        {frame: "@@画像群0134", count: 4}
    ]}, RS_ENEMY_2: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0141", count: 4},
        {frame: "@@画像群0142", count: 4}
    ]}, RS_ENEMY_3: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0135", count: 4},
        {frame: "@@画像群0136", count: 4}
    ]}, RS_ENEMY_4: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0137", count: 4},
        {frame: "@@画像群0138", count: 4}
    ]}, RS_ENEMY_5: {sheet: "PL_ENEMY_BALL", loop: !0, frames: [
        {frame: "@@画像群0139", count: 4},
        {frame: "@@画像群0140", count: 4}
    ]}, RS_BOARD_1: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0143"}
    ]}, RS_BOARD_2: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0147"}
    ]}, RS_BOARD_3: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0144"}
    ]}, RS_BOARD_4: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0145"}
    ]}, RS_BOARD_5: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0146"}
    ]}, RS_BOARD_1_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0163"}
    ]}, RS_BOARD_2_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0167"}
    ]}, RS_BOARD_3_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0165"}
    ]}, RS_BOARD_4_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0164"}
    ]}, RS_BOARD_5_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0166"}
    ]}, RS_TALK_1: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0123"}
    ]}, RS_TALK_2: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0124"}
    ]}, RS_TALK_3: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0125"}
    ]}, RS_TALK_4: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0126"}
    ]}, RS_TALK_5: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0127"}
    ]}, RS_TALK_6: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0128"}
    ]}, RS_TALK_7: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0129"}
    ]}, RS_TALK_8: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0130"}
    ]}, RS_TALK_9: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0131"}
    ]}, RS_TALK_10: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0132"}
    ]}, RS_TALK_1_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0159"}
    ]}, RS_TALK_2_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0160"}
    ]}, RS_TALK_3_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0161"}
    ]}, RS_TALK_4_EN: {sheet: "PL_ENEMY_BALL", frames: [
        {frame: "@@画像群0162"}
    ]}, RS_HISCORE: {sheet: "PL_ENEMY_BALL", regX: .5, regY: .5, frames: [
        {frame: "@@画像群0118"}
    ]}, RS_BTN_REPLAY: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0003"}
    ]}, RS_BTN_TITLE: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0018"}
    ]}, RS_BTN_TITLE_EN: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0017"}
    ]}, RS_BTN_TRICKS: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0000"}
    ]}, RS_BTN_TRICKS_EN: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0001"}
    ]}, RS_BTN_ITEM: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0002"}
    ]}, RS_TRICKS_WINDOW: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0015"}
    ]}, RS_CLOSE: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0016"}
    ]}, RS_ITEMINFO_BALL_WINDOW: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0010"}
    ]}, RS_ITEMINFO_WEAR_WINDOW: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0011"}
    ]}, RS_GO: {sheet: "RS_WINDOW", frames: [
        {frame: "@@画像群0012"}
    ]}}, a.ANIMSPLACE = {TT_BTN_START: {anims: ["TT_BTN_START"], x: 200, y: 592, w: 368, h: 124}, TT_BTN_ITEM: {anims: ["TT_BTN_ITEM"], x: 184, y: 740.8, scaleX: .8, scaleY: .8, w: 500, h: 224}, TT_ITEMGET_BALL_WINDOW: {anims: ["TT_ITEMGET_BALL_WINDOW"], x: 76, y: 351}, TT_ITEMGET_BALL_CLOSE: {anims: ["TT_CLOSE"], x: 633, y: 309, w: 94, h: 96}, TT_ITEMGET_WEAR_WINDOW: {anims: ["TT_ITEMGET_WEAR_WINDOW"], x: 72, y: 311}, TT_ITEMGET_WEAR_CLOSE: {anims: ["TT_CLOSE"], x: 637, y: 269, w: 94, h: 96}, TT_ITEMSET_WINDOW: {anims: ["TT_ITEMSET_WINDOW"], x: 75, y: 281}, TT_ITEMSET_WINDOW_CLOSE: {anims: ["TT_CLOSE"], x: 634, y: 239, w: 94, h: 96}, TT_ITEMSET_BALL_ON: {anims: ["TT_ITEMSET_ON_ON", "TT_ITEMSET_ON_OFF"], x: 311, y: 381, w: 112, h: 76}, TT_ITEMSET_BALL_OFF: {anims: ["TT_ITEMSET_OFF_ON", "TT_ITEMSET_OFF_OFF"], x: 469, y: 385, w: 160, h: 70}, TT_ITEMSET_WEAR_ON: {anims: ["TT_ITEMSET_ON_ON", "TT_ITEMSET_ON_OFF"], x: 311, y: 567, w: 112, h: 76}, TT_ITEMSET_WEAR_OFF: {anims: ["TT_ITEMSET_OFF_ON", "TT_ITEMSET_OFF_OFF"], x: 469, y: 571, w: 160, h: 70}, PL_BG: {anims: ["PL_BG"], x: 0, y: 0, w: 768, h: 1e3}, PL_BALL: {anims: ["PL_BALL"], x: 404, y: 908}, PL_BALL_AURA: {anims: ["PL_BALL_AURA", "PL_BALL_SP_AURA"], x: 404, y: 908}, PL_KICKER_AURA_1: {anims: ["PL_KICKER_AURA"], x: 404, y: 890}, PL_KICKER_AURA_2: {anims: ["PL_KICKER_AURA"], x: 416, y: 892}, PL_KICKER_AURA_3: {anims: ["PL_KICKER_AURA"], x: 426, y: 900}, PL_KICKER_AURA_4: {anims: ["PL_KICKER_AURA"], x: 418, y: 908}, PL_KICKER_AURA_5: {anims: ["PL_KICKER_AURA"], x: 408, y: 910}, PL_TENT: {anims: ["PL_TENT_1", "PL_TENT_2", "PL_TENT_3"], x: -144, y: 206}, PL_HELP: {anims: ["PL_HELP_1", "PL_HELP_2", "PL_HELP_3"], x: 62, y: 128}, PL_BONFIRE: {anims: ["PL_BONFIRE"], x: -40, y: 392}, PL_ROCK: {anims: ["PL_ROCK"], x: -60, y: 554}, PL_HOUSE: {anims: ["PL_HOUSE_1", "PL_HOUSE_2", "PL_HOUSE_3", "PL_HOUSE_4"], x: -691, y: 156}, PL_ENEMY: {anims: ["PL_ENEMY_1", "PL_ENEMY_1_CRASH", "PL_ENEMY_2", "PL_ENEMY_2_CRASH", "PL_ENEMY_3", "PL_ENEMY_3_CRASH", "PL_ENEMY_3_N", "PL_ENEMY_4", "PL_ENEMY_4_CRASH", "PL_ENEMY_5", "PL_ENEMY_5_CRASH", "PL_ENEMY_5_CATCH", "PL_ENEMY_6", "PL_ENEMY_6_CRASH"], x: 516, y: 326}, PL_KICKER: {anims: ["PL_KICKER_STAND_1", "PL_KICKER_KICK_1", "PL_KICKER_STAND_2", "PL_KICKER_KICK_2", "PL_KICKER_STAND_3", "PL_KICKER_KICK_3", "PL_KICKER_STAND_4", "PL_KICKER_KICK_4", "PL_KICKER_STAND_5", "PL_KICKER_KICK_5"], x: 246, y: 676}, PL_KICKER_N: {anims: ["PL_KICKER_STAND_1_N", "PL_KICKER_KICK_1_N", "PL_KICKER_STAND_2_N", "PL_KICKER_KICK_2_N", "PL_KICKER_STAND_3_N", "PL_KICKER_KICK_3_N", "PL_KICKER_STAND_4_N", "PL_KICKER_KICK_4_N", "PL_KICKER_STAND_5_N", "PL_KICKER_KICK_5_N"], x: 246, y: 676}, PL_EFFECT_KICK_RU: {anims: ["PL_EFFECT_KICK"], x: 0, y: 0}, PL_EFFECT_HIT_RU: {anims: ["PL_EFFECT_HIT"], x: 0, y: 0}, PL_SP_BTN: {anims: ["PL_SP_BTN_OFF", "PL_SP_BTN_DOWN", "PL_SP_BTN_UP"], x: 568, y: 858, w: 200, h: 132}, PL_SP_METER: {anims: ["PL_SP_METER"], x: 10, y: 908}, PL_SP_METER_MASK: {anims: ["PL_SP_METER_MASK"], x: 551, y: 926}, PL_SP_METER_FRAME: {anims: ["PL_SP_METER_FRAME"], x: 10, y: 908}, PL_COMBO_PLATE: {anims: ["PL_COMBO_PLATE"], x: 328, y: 60}, PL_NUM_COMBO: {anims: ["PL_NUM_COMBO_0", "PL_NUM_COMBO_1", "PL_NUM_COMBO_2", "PL_NUM_COMBO_3", "PL_NUM_COMBO_4", "PL_NUM_COMBO_5", "PL_NUM_COMBO_6", "PL_NUM_COMBO_7", "PL_NUM_COMBO_8", "PL_NUM_COMBO_9"], x: 340, y: 56, w: 70}, PL_SCORE_LABEL: {anims: ["PL_SCORE_LABEL"], x: 0, y: 0}, PL_TIME_LABEL: {anims: ["PL_TIME_LABEL"], x: 512, y: 0}, PL_NUM_SCORE: {anims: ["PL_NUM_SCORE_0", "PL_NUM_SCORE_1", "PL_NUM_SCORE_2", "PL_NUM_SCORE_3", "PL_NUM_SCORE_4", "PL_NUM_SCORE_5", "PL_NUM_SCORE_6", "PL_NUM_SCORE_7", "PL_NUM_SCORE_8", "PL_NUM_SCORE_9"], x: 140, y: 0, w: 50}, PL_NUM_TIME: {anims: ["PL_NUM_SCORE_0", "PL_NUM_SCORE_1", "PL_NUM_SCORE_2", "PL_NUM_SCORE_3", "PL_NUM_SCORE_4", "PL_NUM_SCORE_5", "PL_NUM_SCORE_6", "PL_NUM_SCORE_7", "PL_NUM_SCORE_8", "PL_NUM_SCORE_9"], x: 652, y: 0, w: 50}, PL_NUM_KICK_SCORE: {anims: ["PL_NUM_KICK_SCORE_0", "PL_NUM_KICK_SCORE_1", "PL_NUM_KICK_SCORE_2", "PL_NUM_KICK_SCORE_3", "PL_NUM_KICK_SCORE_4", "PL_NUM_KICK_SCORE_5", "PL_NUM_KICK_SCORE_6", "PL_NUM_KICK_SCORE_7", "PL_NUM_KICK_SCORE_8", "PL_NUM_KICK_SCORE_9"], x: 0, y: -52, w: 86}, PL_HELP_LABEL: {anims: ["PL_HELP_LABEL"], x: 250, y: 270}, PL_MODE_LABEL: {anims: ["PL_MODE_FREEKICK", "PL_MODE_YELLOW", "PL_MODE_RED"], x: 0, y: 60}, PL_CUTIN_KICKOFF: {anims: ["PL_CUTIN_KICKOFF"], x: 0, y: 345}, PL_KICKOFF_TEXT: {anims: ["PL_KICKOFF_TEXT"], x: 384, y: 299}, PL_CUTIN_HAND: {anims: ["PL_CUTIN_HAND"], x: 0, y: 345}, PL_HAND_TEXT: {anims: ["PL_HAND_TEXT"], x: 384, y: 299}, PL_CUTIN_YELLOW: {anims: ["PL_CUTIN_YELLOW"], x: 0, y: 345}, PL_YELLOW_TEXT: {anims: ["PL_YELLOW_TEXT"], x: 384, y: 299}, PL_CUTIN_RED: {anims: ["PL_CUTIN_RED"], x: 0, y: 345}, PL_RED_TEXT: {anims: ["PL_RED_TEXT"], x: 384, y: 299}, PL_RED_1: {anims: ["PL_RED_1"], x: 24, y: 371}, PL_RED_2: {anims: ["PL_RED_2"], x: 452, y: 383}, PL_RED_3: {anims: ["PL_RED_3"], x: 236, y: 365}, PL_RED_4: {anims: ["PL_RED_4"], x: 384, y: 499}, PL_CUTIN_SPECIAL: {anims: ["PL_CUTIN_SPECIAL"], x: 0, y: 345}, PL_SPECIAL_1: {anims: ["PL_SPECIAL_1"], x: 414, y: 365}, PL_SPECIAL_2: {anims: ["PL_SPECIAL_2"], x: 280, y: 495}, PL_CUTIN_NIGHTMARE: {anims: ["PL_CUTIN_NIGHTMARE"], x: 0, y: 345}, PL_NIGHTMARE_TEXT: {anims: ["PL_NIGHTMARE_TEXT"], x: 384, y: 299}, PL_TORNADO: {anims: ["PL_TORNADO"], x: 0, y: 0}, RS_GOOD_ED: {anims: ["RS_GOOD_ED"], x: -16, y: 150}, RS_BAD_ED: {anims: ["RS_BAD_ED"], x: -16, y: 150}, RS_BTN_NEXT: {anims: ["RS_BTN_NEXT"], x: 237, y: 730, w: 294, h: 112}, RS_NUM_COUNT_1: {anims: ["RS_NUM_COUNT_0", "RS_NUM_COUNT_1", "RS_NUM_COUNT_2", "RS_NUM_COUNT_3", "RS_NUM_COUNT_4", "RS_NUM_COUNT_5", "RS_NUM_COUNT_6", "RS_NUM_COUNT_7", "RS_NUM_COUNT_8", "RS_NUM_COUNT_9"], x: 32, y: 588, w: 50}, RS_NUM_COUNT_2: {anims: ["RS_NUM_COUNT_0", "RS_NUM_COUNT_1", "RS_NUM_COUNT_2", "RS_NUM_COUNT_3", "RS_NUM_COUNT_4", "RS_NUM_COUNT_5", "RS_NUM_COUNT_6", "RS_NUM_COUNT_7", "RS_NUM_COUNT_8", "RS_NUM_COUNT_9"], x: 640, y: 588, w: 50}, RS_NUM_COUNT_3: {anims: ["RS_NUM_COUNT_0", "RS_NUM_COUNT_1", "RS_NUM_COUNT_2", "RS_NUM_COUNT_3", "RS_NUM_COUNT_4", "RS_NUM_COUNT_5", "RS_NUM_COUNT_6", "RS_NUM_COUNT_7", "RS_NUM_COUNT_8", "RS_NUM_COUNT_9"], x: 336, y: 588, w: 50}, RS_NUM_COUNT_4: {anims: ["RS_NUM_COUNT_0", "RS_NUM_COUNT_1", "RS_NUM_COUNT_2", "RS_NUM_COUNT_3", "RS_NUM_COUNT_4", "RS_NUM_COUNT_5", "RS_NUM_COUNT_6", "RS_NUM_COUNT_7", "RS_NUM_COUNT_8", "RS_NUM_COUNT_9"], x: 184, y: 588, w: 50}, RS_NUM_COUNT_5: {anims: ["RS_NUM_COUNT_0", "RS_NUM_COUNT_1", "RS_NUM_COUNT_2", "RS_NUM_COUNT_3", "RS_NUM_COUNT_4", "RS_NUM_COUNT_5", "RS_NUM_COUNT_6", "RS_NUM_COUNT_7", "RS_NUM_COUNT_8", "RS_NUM_COUNT_9"], x: 488, y: 588, w: 50}, RS_ENEMY_1: {anims: ["RS_ENEMY_1"], x: 8, y: 858, w: 72, h: 50}, RS_ENEMY_2: {anims: ["RS_ENEMY_2"], x: 616, y: 858, w: 72, h: 50}, RS_ENEMY_3: {anims: ["RS_ENEMY_3"], x: 312, y: 858, w: 72, h: 50}, RS_ENEMY_4: {anims: ["RS_ENEMY_4"], x: 160, y: 858, w: 72, h: 50}, RS_ENEMY_5: {anims: ["RS_ENEMY_5"], x: 464, y: 858, w: 72, h: 50}, RS_BOARD_1: {anims: ["RS_BOARD_1"], x: 8, y: 908}, RS_BOARD_2: {anims: ["RS_BOARD_2"], x: 616, y: 908}, RS_BOARD_3: {anims: ["RS_BOARD_3"], x: 312, y: 908}, RS_BOARD_4: {anims: ["RS_BOARD_4"], x: 160, y: 908}, RS_BOARD_5: {anims: ["RS_BOARD_5"], x: 464, y: 908}, RS_TALK: {anims: ["RS_TALK_1", "RS_TALK_2", "RS_TALK_3", "RS_TALK_4", "RS_TALK_5", "RS_TALK_6", "RS_TALK_7", "RS_TALK_8", "RS_TALK_9", "RS_TALK_10"], x: 44, y: -56}, RS_TALK_EN: {anims: ["RS_TALK_1_EN", "RS_TALK_2_EN", "RS_TALK_3_EN", "RS_TALK_4_EN"], x: 44, y: -56}, RS_HISCORE: {anims: ["RS_HISCORE"], x: 384, y: 483}, RS_BTN_REPLAY: {anims: ["RS_BTN_REPLAY"], x: 140, y: 202 - 62 * (488 / 458), scaleX: 488 / 458, scaleY: 488 / 458, w: 458, h: 124}, RS_BTN_TITLE: {anims: ["RS_BTN_TITLE"], x: 42, y: 323 - 52 * (196 / 344), scaleX: 196 / 344, scaleY: 196 / 344, w: 344, h: 104}, RS_BTN_TITLE_EN: {anims: ["RS_BTN_TITLE_EN"], x: 42, y: 323 - 54 * (196 / 352), scaleX: 196 / 352, scaleY: 196 / 352, w: 352, h: 108}, RS_BTN_TITLE_SIGLE: {anims: ["RS_BTN_TITLE"], x: 164, y: 323 - 52 * (196 / 344), scaleX: 196 / 344, scaleY: 196 / 344, w: 344, h: 104}, RS_BTN_TITLE_SIGLE_EN: {anims: ["RS_BTN_TITLE_EN"], x: 164, y: 323 - 54 * (196 / 352), scaleX: 196 / 352, scaleY: 196 / 352, w: 352, h: 108}, RS_BTN_TRICKS: {anims: ["RS_BTN_TRICKS"], x: 274, y: 280.65, scaleX: .55, scaleY: .55, w: 400, h: 154}, RS_BTN_TRICKS_EN: {anims: ["RS_BTN_TRICKS_EN"], x: 274, y: 323 - 58 * (220 / 432), scaleX: 220 / 432, scaleY: 220 / 432, w: 432, h: 116}, RS_BTN_TRICKS_SIGLE: {anims: ["RS_BTN_TRICKS"], x: 396, y: 280.65, scaleX: .55, scaleY: .55, w: 400, h: 154}, RS_BTN_TRICKS_SIGLE_EN: {anims: ["RS_BTN_TRICKS_EN"], x: 396, y: 323 - 58 * (220 / 432), scaleX: 220 / 432, scaleY: 220 / 432, w: 432, h: 116}, RS_BTN_ITEM: {anims: ["RS_BTN_ITEM"], x: 539, y: 280.44, scaleX: .38, scaleY: .38, w: 500, h: 224}, RS_TRICKS_WINDOW: {anims: ["RS_TRICKS_WINDOW"], x: 76, y: 137}, RS_TRICKS_CLOSE: {anims: ["RS_CLOSE"], x: 633, y: 95, w: 94, h: 96}, RS_ITEMINFO_BALL_WINDOW: {anims: ["RS_ITEMINFO_BALL_WINDOW"], x: 76, y: 280}, RS_ITEMINFO_BALL_CLOSE: {anims: ["RS_CLOSE"], x: 633, y: 238, w: 94, h: 96}, RS_ITEMINFO_BALL_GO: {anims: ["RS_GO"], x: 464, y: 656, w: 248, h: 124}, RS_ITEMINFO_WEAR_WINDOW: {anims: ["RS_ITEMINFO_WEAR_WINDOW"], x: 72, y: 301}, RS_ITEMINFO_WEAR_CLOSE: {anims: ["RS_CLOSE"], x: 637, y: 259, w: 94, h: 96}, RS_ITEMINFO_WEAR_GO: {anims: ["RS_GO"], x: 468, y: 635, w: 248, h: 124}}, mjcg.R = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function () {
        throw"SpriteFrames cannot be instantiated."
    };
    a.Sheets = {"main.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0001": {frame: {x: 160, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0002": {frame: {x: 320, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0003": {frame: {x: 480, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0004": {frame: {x: 640, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0005": {frame: {x: 800, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0006": {frame: {x: 960, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0007": {frame: {x: 1120, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0008": {frame: {x: 1280, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0009": {frame: {x: 1440, y: 0, w: 161, h: 161}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 111, y: 5, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0010": {frame: {x: 1601, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0011": {frame: {x: 1761, y: 0, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0012": {frame: {x: 0, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0013": {frame: {x: 160, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0014": {frame: {x: 320, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0015": {frame: {x: 480, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0016": {frame: {x: 640, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0017": {frame: {x: 800, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0018": {frame: {x: 960, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0019": {frame: {x: 1120, y: 161, w: 161, h: 161}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 105, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0020": {frame: {x: 1281, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0021": {frame: {x: 1441, y: 161, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0022": {frame: {x: 1601, y: 161, w: 160, h: 161}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 1, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0023": {frame: {x: 1761, y: 161, w: 161, h: 161}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 116, y: 2, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0024": {frame: {x: 0, y: 322, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0025": {frame: {x: 160, y: 322, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0026": {frame: {x: 320, y: 322, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0027": {frame: {x: 480, y: 322, w: 161, h: 161}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 117, y: 0, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0028": {frame: {x: 641, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0029": {frame: {x: 787, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0030": {frame: {x: 933, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0031": {frame: {x: 1079, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0032": {frame: {x: 1225, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0033": {frame: {x: 1371, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0034": {frame: {x: 1517, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0035": {frame: {x: 1663, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0036": {frame: {x: 1809, y: 322, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0037": {frame: {x: 0, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 13, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0038": {frame: {x: 146, y: 483, w: 27, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 170, y: 83, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0039": {frame: {x: 173, y: 483, w: 37, h: 40}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 170, y: 69, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0040": {frame: {x: 210, y: 483, w: 44, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 170, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0041": {frame: {x: 254, y: 483, w: 40, h: 40}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 64, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0042": {frame: {x: 294, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0043": {frame: {x: 354, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0044": {frame: {x: 414, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0045": {frame: {x: 474, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0046": {frame: {x: 534, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0047": {frame: {x: 594, y: 483, w: 60, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0048": {frame: {x: 654, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0049": {frame: {x: 800, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0050": {frame: {x: 946, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0051": {frame: {x: 1092, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0052": {frame: {x: 1238, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0053": {frame: {x: 1384, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0054": {frame: {x: 1530, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0055": {frame: {x: 1676, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0056": {frame: {x: 1822, y: 483, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0057": {frame: {x: 0, y: 629, w: 146, h: 146}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 119, y: 16, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0058": {frame: {x: 146, y: 629, w: 66, h: 90}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 159, y: 41, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0059": {frame: {x: 212, y: 629, w: 66, h: 90}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 159, y: 41, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0060": {frame: {x: 278, y: 629, w: 100, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 142, y: 53, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0061": {frame: {x: 378, y: 629, w: 100, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 142, y: 53, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0062": {frame: {x: 478, y: 629, w: 100, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 142, y: 53, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0063": {frame: {x: 578, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0064": {frame: {x: 614, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0065": {frame: {x: 650, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0066": {frame: {x: 686, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0067": {frame: {x: 722, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0068": {frame: {x: 758, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0069": {frame: {x: 794, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0070": {frame: {x: 830, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0071": {frame: {x: 866, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0072": {frame: {x: 902, y: 629, w: 36, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0073": {frame: {x: 938, y: 629, w: 280, h: 40}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 52, y: 66, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0074": {frame: {x: 1218, y: 629, w: 280, h: 40}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 52, y: 66, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0075": {frame: {x: 1498, y: 629, w: 262, h: 22}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 61, y: 75, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0076": {frame: {x: 1760, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0077": {frame: {x: 1786, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0078": {frame: {x: 1812, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0079": {frame: {x: 1838, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0080": {frame: {x: 1864, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0081": {frame: {x: 1890, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0082": {frame: {x: 1916, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0083": {frame: {x: 1942, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0084": {frame: {x: 1968, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0085": {frame: {x: 1994, y: 629, w: 26, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 179, y: 70, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0086": {frame: {x: 0, y: 775, w: 70, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 157, y: 73, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0087": {frame: {x: 70, y: 775, w: 70, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 157, y: 73, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0088": {frame: {x: 140, y: 775, w: 220, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 82, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0089": {frame: {x: 360, y: 775, w: 266, h: 158}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 7, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0090": {frame: {x: 626, y: 775, w: 170, h: 70}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 107, y: 51, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0091": {frame: {x: 796, y: 775, w: 170, h: 70}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 107, y: 51, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0092": {frame: {x: 966, y: 775, w: 170, h: 70}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 107, y: 51, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0093": {frame: {x: 1136, y: 775, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0094": {frame: {x: 1520, y: 775, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0095": {frame: {x: 0, y: 933, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0096": {frame: {x: 384, y: 933, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0097": {frame: {x: 768, y: 933, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0098": {frame: {x: 1152, y: 933, w: 166, h: 127}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 3, y: 24, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0099": {frame: {x: 1318, y: 933, w: 145, h: 121}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 218, y: 30, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0100": {frame: {x: 1463, y: 933, w: 177, h: 130}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 207, y: 21, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0101": {frame: {x: 1640, y: 933, w: 158, h: 130}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 113, y: 21, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0102": {frame: {x: 1798, y: 933, w: 158, h: 130}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 113, y: 21, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0103": {frame: {x: 0, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0104": {frame: {x: 310, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0105": {frame: {x: 620, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0106": {frame: {x: 930, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0107": {frame: {x: 1240, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0108": {frame: {x: 1550, y: 1083, w: 310, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 37, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0109": {frame: {x: 1860, y: 1083, w: 99, h: 166}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 143, y: 27, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0110": {frame: {x: 0, y: 1249, w: 160, h: 95}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 37, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0111": {frame: {x: 160, y: 1249, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0112": {frame: {x: 320, y: 1249, w: 160, h: 160}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 6, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0113": {frame: {x: 1520, y: 775, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0114": {frame: {x: 480, y: 1249, w: 141, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 113, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0115": {frame: {x: 621, y: 1249, w: 141, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 113, y: 56, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0116": {frame: {x: 762, y: 1249, w: 350, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 17, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0117": {frame: {x: 1112, y: 1249, w: 384, h: 150}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 11, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0118": {frame: {x: 1496, y: 1249, w: 277, h: 58}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 55, y: 53, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0119": {frame: {x: 1773, y: 1249, w: 202, h: 58}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 94, y: 53, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0120": {frame: {x: 0, y: 1409, w: 147, h: 56}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 117, y: 57, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0121": {frame: {x: 147, y: 1409, w: 160, h: 95}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 37, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0122": {frame: {x: 307, y: 1409, w: 160, h: 95}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 112, y: 37, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0123": {frame: {x: 467, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0124": {frame: {x: 557, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0125": {frame: {x: 647, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0126": {frame: {x: 737, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0127": {frame: {x: 827, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0128": {frame: {x: 917, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0129": {frame: {x: 1007, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0130": {frame: {x: 1097, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0131": {frame: {x: 1187, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0132": {frame: {x: 1277, y: 1409, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0133": {frame: {x: 1367, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0134": {frame: {x: 1403, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0135": {frame: {x: 1439, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0136": {frame: {x: 1475, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0137": {frame: {x: 1511, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0138": {frame: {x: 1547, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0139": {frame: {x: 1583, y: 1409, w: 36, h: 37}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0140": {frame: {x: 1619, y: 1409, w: 36, h: 37}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0141": {frame: {x: 1655, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0142": {frame: {x: 1691, y: 1409, w: 36, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 174, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0143": {frame: {x: 1727, y: 1409, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0144": {frame: {x: 1799, y: 1409, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0145": {frame: {x: 1871, y: 1409, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0146": {frame: {x: 1943, y: 1409, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0147": {frame: {x: 0, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0148": {frame: {x: 0, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0149": {frame: {x: 72, y: 1504, w: 42, h: 52}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 163, y: 67, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0150": {frame: {x: 114, y: 1504, w: 32, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 168, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0151": {frame: {x: 146, y: 1504, w: 43, h: 52}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 163, y: 67, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0152": {frame: {x: 189, y: 1504, w: 43, h: 55}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 163, y: 66, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0153": {frame: {x: 232, y: 1504, w: 45, h: 51}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 67, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0154": {frame: {x: 277, y: 1504, w: 45, h: 52}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 163, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0155": {frame: {x: 322, y: 1504, w: 42, h: 51}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 164, y: 68, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0156": {frame: {x: 364, y: 1504, w: 43, h: 49}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 164, y: 69, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0157": {frame: {x: 407, y: 1504, w: 42, h: 53}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 164, y: 66, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0158": {frame: {x: 449, y: 1504, w: 44, h: 53}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 162, y: 66, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0159": {frame: {x: 493, y: 1504, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0160": {frame: {x: 583, y: 1504, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0161": {frame: {x: 673, y: 1504, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0162": {frame: {x: 763, y: 1504, w: 90, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 147, y: 63, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0163": {frame: {x: 853, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0164": {frame: {x: 925, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0165": {frame: {x: 997, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0166": {frame: {x: 1069, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}, "@@画像群0167": {frame: {x: 1141, y: 1504, w: 72, h: 50}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 156, y: 61, w: 384, h: 193}, sourceSize: {w: 384, h: 193}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "main.png", format: "RGBA8888", size: {w: 2048, h: 2048}, scale: "1"}}, "hosue_bg_ed_half.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 48, h: 120}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 191, y: 190, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0001": {frame: {x: 48, y: 0, w: 48, h: 118}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 191, y: 192, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0002": {frame: {x: 96, y: 0, w: 51, h: 118}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 187, y: 192, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0003": {frame: {x: 147, y: 0, w: 76, h: 119}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 159, y: 191, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0004": {frame: {x: 223, y: 0, w: 384, h: 500}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 8, y: 0, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0005": {frame: {x: 607, y: 0, w: 400, h: 240}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 130, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0006": {frame: {x: 0, y: 500, w: 400, h: 240}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 130, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0007": {frame: {x: 400, y: 500, w: 173, h: 105}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 114, y: 197, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0008": {frame: {x: 573, y: 500, w: 173, h: 105}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 114, y: 197, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0009": {frame: {x: 746, y: 500, w: 173, h: 105}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 114, y: 197, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0010": {frame: {x: 919, y: 500, w: 73, h: 55}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 164, y: 224, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}, "@@画像群0011": {frame: {x: 0, y: 740, w: 94, h: 122}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 153, y: 189, w: 400, h: 500}, sourceSize: {w: 400, h: 500}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "お家と背景とED_02halfCS3_s.png", format: "RGBA8888", size: {w: 1024, h: 1024}, scale: "1"}}, "window.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 200, h: 77}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 55, y: 142, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0001": {frame: {x: 200, y: 0, w: 216, h: 58}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 47, y: 152, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0002": {frame: {x: 416, y: 0, w: 250, h: 112}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 30, y: 125, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0003": {frame: {x: 666, y: 0, w: 229, h: 62}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 40, y: 150, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0004": {frame: {x: 0, y: 112, w: 184, h: 62}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 63, y: 150, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0005": {frame: {x: 184, y: 112, w: 309, h: 218}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 72, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0006": {frame: {x: 493, y: 112, w: 80, h: 35}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 115, y: 163, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0007": {frame: {x: 573, y: 112, w: 80, h: 35}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 115, y: 163, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0008": {frame: {x: 653, y: 112, w: 56, h: 38}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 127, y: 162, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0009": {frame: {x: 709, y: 112, w: 56, h: 38}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 127, y: 162, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0010": {frame: {x: 0, y: 330, w: 308, h: 219}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 71, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0011": {frame: {x: 308, y: 330, w: 312, h: 198}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 82, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0012": {frame: {x: 620, y: 330, w: 124, h: 62}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 93, y: 150, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0013": {frame: {x: 0, y: 549, w: 308, h: 148}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 107, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0014": {frame: {x: 308, y: 549, w: 312, h: 188}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 87, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0015": {frame: {x: 620, y: 549, w: 308, h: 362}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 0, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0016": {frame: {x: 928, y: 549, w: 47, h: 48}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 132, y: 158, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0017": {frame: {x: 0, y: 911, w: 176, h: 54}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 67, y: 154, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}, "@@画像群0018": {frame: {x: 176, y: 911, w: 172, h: 52}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 69, y: 155, w: 312, h: 362}, sourceSize: {w: 312, h: 362}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "window.png", format: "RGBA8888", size: {w: 1024, h: 1024}, scale: "1"}}, "effect_skill_1067.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}, "@@画像群0001": {frame: {x: 480, y: 0, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}, "@@画像群0002": {frame: {x: 0, y: 320, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}, "@@画像群0003": {frame: {x: 480, y: 320, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}, "@@画像群0004": {frame: {x: 0, y: 640, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}, "@@画像群0005": {frame: {x: 480, y: 640, w: 480, h: 320}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 480, h: 320}, sourceSize: {w: 480, h: 320}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "effect_skill_1067.png", format: "RGBA8888", size: {w: 1024, h: 1024}, scale: "1"}}, "q_main.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0001": {frame: {x: 80, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0002": {frame: {x: 160, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0003": {frame: {x: 240, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0004": {frame: {x: 320, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0005": {frame: {x: 400, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0006": {frame: {x: 480, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0007": {frame: {x: 560, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0008": {frame: {x: 640, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0009": {frame: {x: 720, y: 0, w: 81, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 58, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0010": {frame: {x: 801, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0011": {frame: {x: 881, y: 0, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0012": {frame: {x: 0, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0013": {frame: {x: 80, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0014": {frame: {x: 160, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0015": {frame: {x: 240, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0016": {frame: {x: 320, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0017": {frame: {x: 400, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0018": {frame: {x: 480, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0019": {frame: {x: 560, y: 81, w: 81, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 52, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0020": {frame: {x: 641, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0021": {frame: {x: 721, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0022": {frame: {x: 801, y: 81, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0023": {frame: {x: 881, y: 81, w: 81, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 63, y: 1, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0024": {frame: {x: 0, y: 162, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0025": {frame: {x: 80, y: 162, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0026": {frame: {x: 160, y: 162, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 2, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0027": {frame: {x: 240, y: 162, w: 81, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 64, y: 0, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0028": {frame: {x: 321, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0029": {frame: {x: 395, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0030": {frame: {x: 469, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0031": {frame: {x: 543, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0032": {frame: {x: 617, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0033": {frame: {x: 691, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0034": {frame: {x: 765, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0035": {frame: {x: 839, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0036": {frame: {x: 913, y: 162, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0037": {frame: {x: 0, y: 243, w: 74, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 6, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0038": {frame: {x: 74, y: 243, w: 14, h: 13}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 45, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0039": {frame: {x: 88, y: 243, w: 19, h: 20}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 38, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0040": {frame: {x: 107, y: 243, w: 22, h: 23}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0041": {frame: {x: 129, y: 243, w: 20, h: 21}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 86, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0042": {frame: {x: 149, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0043": {frame: {x: 179, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0044": {frame: {x: 209, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0045": {frame: {x: 239, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0046": {frame: {x: 269, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0047": {frame: {x: 299, y: 243, w: 30, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 84, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0048": {frame: {x: 329, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0049": {frame: {x: 403, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0050": {frame: {x: 477, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0051": {frame: {x: 551, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0052": {frame: {x: 625, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0053": {frame: {x: 699, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0054": {frame: {x: 773, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0055": {frame: {x: 847, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0056": {frame: {x: 921, y: 243, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0057": {frame: {x: 0, y: 317, w: 74, h: 73}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 62, y: 8, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0058": {frame: {x: 74, y: 317, w: 34, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 82, y: 20, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0059": {frame: {x: 108, y: 317, w: 34, h: 46}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 82, y: 20, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0060": {frame: {x: 142, y: 317, w: 52, h: 34}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 73, y: 26, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0061": {frame: {x: 194, y: 317, w: 52, h: 34}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 73, y: 26, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0062": {frame: {x: 246, y: 317, w: 52, h: 34}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 73, y: 26, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0063": {frame: {x: 298, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0064": {frame: {x: 316, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0065": {frame: {x: 334, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0066": {frame: {x: 352, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0067": {frame: {x: 370, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0068": {frame: {x: 388, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0069": {frame: {x: 406, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0070": {frame: {x: 424, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0071": {frame: {x: 442, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0072": {frame: {x: 460, y: 317, w: 18, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0073": {frame: {x: 478, y: 317, w: 140, h: 20}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 29, y: 33, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0074": {frame: {x: 618, y: 317, w: 140, h: 20}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 29, y: 33, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0075": {frame: {x: 758, y: 317, w: 132, h: 12}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 33, y: 37, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0076": {frame: {x: 890, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0077": {frame: {x: 904, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0078": {frame: {x: 918, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0079": {frame: {x: 932, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0080": {frame: {x: 946, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0081": {frame: {x: 960, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0082": {frame: {x: 974, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0083": {frame: {x: 988, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0084": {frame: {x: 1002, y: 317, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0085": {frame: {x: 0, y: 390, w: 14, h: 16}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 92, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0086": {frame: {x: 14, y: 390, w: 36, h: 14}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 36, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0087": {frame: {x: 50, y: 390, w: 36, h: 14}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 36, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0088": {frame: {x: 86, y: 390, w: 110, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 44, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0089": {frame: {x: 196, y: 390, w: 134, h: 80}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 32, y: 3, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0090": {frame: {x: 330, y: 390, w: 86, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 56, y: 25, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0091": {frame: {x: 416, y: 390, w: 86, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 56, y: 25, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0092": {frame: {x: 502, y: 390, w: 86, h: 36}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 56, y: 25, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0093": {frame: {x: 588, y: 390, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0094": {frame: {x: 781, y: 390, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0095": {frame: {x: 0, y: 470, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0096": {frame: {x: 193, y: 470, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0097": {frame: {x: 386, y: 470, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0098": {frame: {x: 579, y: 470, w: 83, h: 64}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 6, y: 12, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0099": {frame: {x: 662, y: 470, w: 73, h: 61}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 113, y: 15, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0100": {frame: {x: 735, y: 470, w: 90, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 107, y: 10, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0101": {frame: {x: 825, y: 470, w: 79, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 61, y: 10, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0102": {frame: {x: 904, y: 470, w: 79, h: 66}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 61, y: 10, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0103": {frame: {x: 0, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0104": {frame: {x: 156, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0105": {frame: {x: 312, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0106": {frame: {x: 468, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0107": {frame: {x: 624, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0108": {frame: {x: 780, y: 546, w: 156, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 22, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0109": {frame: {x: 936, y: 546, w: 50, h: 84}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 74, y: 1, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0110": {frame: {x: 0, y: 630, w: 80, h: 48}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 19, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0111": {frame: {x: 80, y: 630, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0112": {frame: {x: 160, y: 630, w: 80, h: 81}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 35, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0113": {frame: {x: 781, y: 390, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0114": {frame: {x: 240, y: 630, w: 71, h: 31}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0115": {frame: {x: 311, y: 630, w: 71, h: 31}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0116": {frame: {x: 382, y: 630, w: 176, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 12, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0117": {frame: {x: 558, y: 630, w: 193, h: 76}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 5, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0118": {frame: {x: 751, y: 630, w: 139, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 30, y: 26, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0119": {frame: {x: 890, y: 630, w: 101, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 50, y: 26, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0120": {frame: {x: 0, y: 711, w: 74, h: 29}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 61, y: 28, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0121": {frame: {x: 74, y: 711, w: 80, h: 48}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 19, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0122": {frame: {x: 154, y: 711, w: 80, h: 48}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 59, y: 19, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0123": {frame: {x: 234, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0124": {frame: {x: 280, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0125": {frame: {x: 326, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0126": {frame: {x: 372, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0127": {frame: {x: 418, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0128": {frame: {x: 464, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0129": {frame: {x: 510, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0130": {frame: {x: 556, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0131": {frame: {x: 602, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0132": {frame: {x: 648, y: 711, w: 46, h: 24}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 31, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0133": {frame: {x: 694, y: 711, w: 18, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0134": {frame: {x: 712, y: 711, w: 18, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0135": {frame: {x: 730, y: 711, w: 18, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0136": {frame: {x: 748, y: 711, w: 18, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0137": {frame: {x: 766, y: 711, w: 19, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 33, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0138": {frame: {x: 785, y: 711, w: 19, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 33, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0139": {frame: {x: 804, y: 711, w: 19, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 89, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0140": {frame: {x: 823, y: 711, w: 19, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 89, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0141": {frame: {x: 842, y: 711, w: 18, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0142": {frame: {x: 860, y: 711, w: 18, h: 19}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 90, y: 34, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0143": {frame: {x: 878, y: 711, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0144": {frame: {x: 914, y: 711, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0145": {frame: {x: 950, y: 711, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0146": {frame: {x: 986, y: 711, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0147": {frame: {x: 0, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0148": {frame: {x: 0, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0149": {frame: {x: 36, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0150": {frame: {x: 58, y: 759, w: 16, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 91, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0151": {frame: {x: 74, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0152": {frame: {x: 96, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0153": {frame: {x: 118, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0154": {frame: {x: 140, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0155": {frame: {x: 162, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0156": {frame: {x: 184, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0157": {frame: {x: 206, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0158": {frame: {x: 228, y: 759, w: 22, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 88, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0159": {frame: {x: 250, y: 759, w: 46, h: 23}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0160": {frame: {x: 296, y: 759, w: 46, h: 23}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0161": {frame: {x: 342, y: 759, w: 46, h: 23}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0162": {frame: {x: 388, y: 759, w: 46, h: 23}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 32, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0163": {frame: {x: 434, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0164": {frame: {x: 470, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0165": {frame: {x: 506, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0166": {frame: {x: 542, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}, "@@画像群0167": {frame: {x: 578, y: 759, w: 36, h: 26}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 30, w: 197, h: 116}, sourceSize: {w: 197, h: 116}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "main.png", format: "RGBA8888", size: {w: 1024, h: 1024}, scale: "1"}}, "q_hosue_bg_ed_half.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 25, h: 61}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 96, y: 96, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0001": {frame: {x: 25, y: 0, w: 25, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 96, y: 97, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0002": {frame: {x: 50, y: 0, w: 26, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 94, y: 97, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0003": {frame: {x: 76, y: 0, w: 39, h: 60}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 80, y: 97, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0004": {frame: {x: 115, y: 0, w: 192, h: 250}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 4, y: 0, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0005": {frame: {x: 307, y: 0, w: 200, h: 120}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 65, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0006": {frame: {x: 0, y: 250, w: 200, h: 120}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 65, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0007": {frame: {x: 200, y: 250, w: 87, h: 53}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 57, y: 98, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0008": {frame: {x: 287, y: 250, w: 87, h: 53}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 57, y: 98, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0009": {frame: {x: 374, y: 250, w: 87, h: 53}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 57, y: 98, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0010": {frame: {x: 461, y: 250, w: 39, h: 29}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 81, y: 112, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}, "@@画像群0011": {frame: {x: 0, y: 370, w: 48, h: 61}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 76, y: 95, w: 200, h: 250}, sourceSize: {w: 200, h: 250}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "お家と背景とED_02halfCS3_s.png", format: "RGBA8888", size: {w: 512, h: 512}, scale: "1"}}, "q_window.png": {frames: {"@@画像群0000": {frame: {x: 0, y: 0, w: 101, h: 40}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 27, y: 71, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0001": {frame: {x: 101, y: 0, w: 108, h: 30}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 24, y: 76, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0002": {frame: {x: 209, y: 0, w: 126, h: 56}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 15, y: 63, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0003": {frame: {x: 335, y: 0, w: 115, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 20, y: 75, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0004": {frame: {x: 0, y: 56, w: 92, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 32, y: 75, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0005": {frame: {x: 92, y: 56, w: 155, h: 110}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 36, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0006": {frame: {x: 247, y: 56, w: 42, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 57, y: 82, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0007": {frame: {x: 289, y: 56, w: 42, h: 18}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 57, y: 82, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0008": {frame: {x: 331, y: 56, w: 29, h: 20}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 64, y: 81, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0009": {frame: {x: 360, y: 56, w: 29, h: 20}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 64, y: 81, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0010": {frame: {x: 0, y: 166, w: 155, h: 110}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 36, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0011": {frame: {x: 155, y: 166, w: 157, h: 100}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 41, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0012": {frame: {x: 312, y: 166, w: 62, h: 32}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 47, y: 75, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0013": {frame: {x: 0, y: 276, w: 154, h: 74}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 54, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0014": {frame: {x: 154, y: 276, w: 157, h: 94}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 1, y: 44, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0015": {frame: {x: 311, y: 276, w: 155, h: 182}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 0, y: 0, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0016": {frame: {x: 466, y: 276, w: 24, h: 25}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 66, y: 79, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0017": {frame: {x: 0, y: 458, w: 89, h: 28}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 33, y: 77, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}, "@@画像群0018": {frame: {x: 89, y: 458, w: 86, h: 27}, rotated: !1, trimmed: !0, spriteSourceSize: {x: 33, y: 77, w: 158, h: 182}, sourceSize: {w: 158, h: 182}}}, meta: {app: "Adobe Flash CS6", version: "12.0.2.529", image: "window.png", format: "RGBA8888", size: {w: 512, h: 512}, scale: "1"}}}, mjcg.SpriteFrames = a
}();
var mjcg = mjcg || {};
!function () {
    var a = function () {
        throw"Util cannot be instantiated."
    };
    a.deleteAddressBar = function () {
        setTimeout(function () {
            scrollTo(1, 0)
        }, 800)
    }, a.clickElement = function (a) {
        if (a) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), !a.dispatchEvent(b)
        }
    }, a.openWindow = function (a, b) {
        var c = navigator.userAgent, d = -1 != c.indexOf(" Android ") && -1 != c.indexOf(" Chrome/");
        if (d)window.location = a; else {
            var e = document.createElement("input");
            e.setAttribute("type", "button"), e.setAttribute("name", "opener"), e.setAttribute("style", "display:none;"), document.body.appendChild(e), e.onclick = function () {
                window.open(a, b), document.body.removeChild(e), e = null
            }, setTimeout(function () {
                e.click()
            }, 100)
        }
    }, a._orgImageSrcMap = {}, a.getOrgImageSrc = function (a) {
        var b = null;
        return mjcg.Util._orgImageSrcMap.hasOwnProperty(a) && (b = mjcg.Util._orgImageSrcMap[a]), b
    },
        //图片载入
        a.applyImageSrcBase = function (b, c) {
            for (var d in c) {
                var e = b + c[d].src + VERSION;
                a.DisableImageCache && (e = e + "&salt=" + String((new Date).getTime())), mjcg.Util._orgImageSrcMap.hasOwnProperty(e) || (mjcg.Util._orgImageSrcMap[e] = c[d].src), c[d].src = e
            }
        },
        a.applyImagesBase = function (b, c) {
            for (var d = c.length, e = 0; d > e; e++) {
                var f = b + c[e] + VERSION;
                a.DisableImageCache && (f = f + "&salt=" + String((new Date).getTime())), mjcg.Util._orgImageSrcMap.hasOwnProperty(f) || (mjcg.Util._orgImageSrcMap[f] = c[e]), c[e] = f
            }
        }, a.isChrome = function () {
        var a = navigator.userAgent, b = -1 != a.indexOf(" Android ") && -1 != a.indexOf(" Chrome/");
        return b
    }, a.isNamesInUa = function (a) {
        var b = !1, c = 0, d = 0, e = navigator.userAgent;
        for (d = a.length, c = 0; d > c; c++)if (-1 != e.indexOf(a[c])) {
            b = !0;
            break
        }
        return b
    }, a.changeElementsDisplayByClassName = function (a, b) {
        var c = document.getElementsByClassName(a), d = 0, e = c.length;
        for (d = 0; e > d; d++)c[d].style.display = b
    }, a.setNumBmps = function (a, b, c) {
        for (var d = null, e = String(Math.abs(0 | c)), f = e.length - 1, g = a.length - 1; g >= 0;)d = a[g], f >= 0 ? (d.gotoAndPlay(b[parseInt(e[f], 10)]), d.visible = !0, f -= 1) : d.visible = !1, d = null, g -= 1
    }, mjcg.Util = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new Object;
    a.ItemState = {}, a.ItemState.None = 0, a.ItemState.New = 1, a.ItemState.Have = 2, a.ItemState.Off = 3, a.UnlockState = {}, a.UnlockState.Lock = 0, a.UnlockState.Unlock = 1, b.initialize = function (a) {
        this.EnableRetryButton = !0,
            this.DispFps = !0,
            this.DispMsNotFps = !0,
            this.InvisibleFps = !0,
            this.EnableMoratorium = !0,
            this.UseRatioForMoratorium = !0,
            this.EnableHandCatch = !0,
            this.UseBmpTornado = !0,
            this.EnableScoreByKick = !0,
            this.AlwayUseHitArea = !0,
            this.EnableQuarterImage = !0,
            this.EnableTalkInOrder = !0,
            (this.ForceQuarterImage || this.EnableQuarterImage && mjcg.Util.isNamesInUa(mjcg.R.QUARTER_IMAGE_UA_NAMES)) &&
                (mjcg.R.SPRITESHEETS = mjcg.R.Q_SPRITESHEETS),
            this.UseSdk = !!window.mobage, this.UseSdk &&
            "ja" != mobage.casualgame.getLocale() &&
            (mjcg.R.TEXTS = mjcg.R.TEXTS_EN,
                mjcg.R.IMAGES.TT_BG.src = mjcg.R.TEXTS.TT_BG_SRC,
                mjcg.R.BITMAPANIMS.RS_BOARD_1 = mjcg.R.BITMAPANIMS.RS_BOARD_1_EN,
                mjcg.R.BITMAPANIMS.RS_BOARD_2 = mjcg.R.BITMAPANIMS.RS_BOARD_2_EN,
                mjcg.R.BITMAPANIMS.RS_BOARD_3 = mjcg.R.BITMAPANIMS.RS_BOARD_3_EN,
                mjcg.R.BITMAPANIMS.RS_BOARD_4 = mjcg.R.BITMAPANIMS.RS_BOARD_4_EN,
                mjcg.R.BITMAPANIMS.RS_BOARD_5 = mjcg.R.BITMAPANIMS.RS_BOARD_5_EN,
                mjcg.R.ANIMSPLACE.RS_TALK = mjcg.R.ANIMSPLACE.RS_TALK_EN,
                mjcg.R.ANIMSPLACE.RS_BTN_TITLE = mjcg.R.ANIMSPLACE.RS_BTN_TITLE_EN,
                mjcg.R.ANIMSPLACE.RS_BTN_TITLE_SIGLE = mjcg.R.ANIMSPLACE.RS_BTN_TITLE_SIGLE_EN,
                mjcg.R.ANIMSPLACE.RS_BTN_TRICKS = mjcg.R.ANIMSPLACE.RS_BTN_TRICKS_EN,
                mjcg.R.ANIMSPLACE.RS_BTN_TRICKS_SIGLE = mjcg.R.ANIMSPLACE.RS_BTN_TRICKS_SIGLE_EN),
            document.getElementById(LANDSCAPE_ALERT_DIV).innerHTML = mjcg.R.TEXTS.LANDSCAPE_ALERT,
            document.getElementById(BROWSER_ALERT_DIV).innerHTML = mjcg.R.TEXTS.BROWSER_ALERT,
            document.getElementById(COMM_ERROR_DIV).innerHTML = mjcg.R.TEXTS.COMM_ERROR,
            mjcg.Util.isNamesInUa(mjcg.R.START_WAIT_UA_NAMES) && (this.NeedWaitForWindowSize = !0),
            this.container = a, this.NeedWaitForWindowSize && (this.initTime = (new Date).getTime()), this.scale = 1, this.displayScale = 1, this.windowWperH = 1, this.stage = null, this.preload = new createjs.PreloadJS(!1), this.preload.setMaxConnections(4), this.preload.stopOnError = !0, this.beShowBrowserAlert = !1, this.EnableBrowserAlert && this.checkBrowserAlert(), !this.EnableLandscapeAlert && !this.EnableLandscapeReload || isNaN(window.orientation) || this.beShowBrowserAlert || (this.isLandscape = !1, this.onWindowResize(), window.addEventListener("resize", function (a) {
            return function () {
                a.onWindowResize()
            }
        }(this), !1)), this.checkLocalStrage(), window.localStorage, this.resetGameState()
    }, b.checkLocalStrage = function () {
        if (window.localStorage) {
            var b = [
                {key: mjcg.R.STORAGE_KEY_HISCORE, type: "Number", value: 0},
                {key: mjcg.R.STORAGE_KEY_ITEM_NATIONAL, type: "Number", value: a.ItemState.None},
                {key: mjcg.R.STORAGE_KEY_ITEM_AURA, type: "Number", value: a.ItemState.None},
                {key: mjcg.R.STORAGE_KEY_TRICKS, type: "Number", value: a.UnlockState.Lock}
            ];
            for (var c in b) {
                var d = !1, e = mjcg.R.STORAGE_KEY_PREFIX + b[c].key, f = window.localStorage.hasOwnProperty(e);
                if (f) {
                    var g = window.localStorage[e];
                    "Number" == b[c].type && isNaN(g) && (d = !0)
                } else d = !0;
                d && (window.localStorage[e] = b[c].value)
            }
        } else console.error("checkLocalStrage: window.localStorage is not supported.")
    }, b.checkBrowserAlert = function () {
        mjcg.Util.isChrome() || mjcg.Util.isNamesInUa(mjcg.R.BROWSER_ALERT_UA_NAMES) && (this.beShowBrowserAlert = !0)
    }, b.showBrowserAlertDisplay = function () {
        mjcg.Util.changeElementsDisplayByClassName(mjcg.R.BROWSER_ALERT_CLASSNAME, "block")
    }, b.onWindowResize = function () {
        window.innerWidth, window.innerHeight;
        var c = window.innerWidth > window.innerHeight;
        c != this.isLandscape && (this.isLandscape = c, c ? this.EnableLandscapeAlert && this.changeLandscapeAlertDisplay("block") : 1 < this.windowWperH ? setTimeout(function () {
            window.location.reload()
        }, mjcg.R.RELOAD_ON_ROTATE_WAIT_TIME) : this.EnableLandscapeAlert && this.changeLandscapeAlertDisplay("none"))
    }, b.changeLandscapeAlertDisplay = function (a) {
        mjcg.Util.changeElementsDisplayByClassName(mjcg.R.LANDSCAPE_ALERT_CLASSNAME, a)
    }, b.setScale = function () {
        var a = window.innerWidth, b = window.innerHeight;
        b > a && 480 == a && 624 > b ? b = 624 : b > a && 480 == a && b > 624 && 756 > b && (b = 756);
        var c = a / b, d = mjcg.R.STAGE.w / mjcg.R.STAGE.h, e = 0, f = 0;
        d > c ? (e = a, f = 0 | e / d) : (f = b, e = 0 | f * d), this.container.style.width = String(e) + "px", this.container.style.height = String(f) + "px", this.container.style["margin-left"] = String(0 | (a - e) / 2) + "px", this.scale = mjcg.R.PLACE_SCALE, this.displayScale = e / (mjcg.R.STAGE.w * this.scale * mjcg.R.DRAW_SCALE), this.windowWperH = c
    }, b.initCanvas = function () {
        this.setScale();
        var a = document.createElement("canvas");
        a.width = mjcg.R.STAGE.w * this.scale * mjcg.R.DRAW_SCALE, a.height = mjcg.R.STAGE.h * this.scale * mjcg.R.DRAW_SCALE, a.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)", a.style.width = (0 | a.width * this.displayScale) + "px", a.style.height = (0 | a.height * this.displayScale) + "px", this.container.appendChild(a);
        var b = document.createElement("span");
        if (b.style.position = "relative", b.style.top = "-" + String(a.height) + "px", b.style["z-index"] = "-99", b.innerText = "0", this.dummySpan = b, this.container.appendChild(b), this.stage = new createjs.Stage(a), this.stage.snapToPixelEnabled = !0, this.stage.autoClear = !1, this.stage.scaleX = this.stage.scaleY = mjcg.R.DRAW_SCALE, this.DispFps) {
            var c = new createjs.Text("0/" + mjcg.R.FPS, String(0 | 60 * mjcg.R.STAGE.w * this.scale / 768) + "px Arial", "#777");
            c.textBaseline = "top", c.textAlign = "right", c.x = a.width / mjcg.R.DRAW_SCALE, c.y = 0, this.InvisibleFps && (c.y = -60), this.stage.addChild(c), this.fps = c, this.stage.onTick = function (a) {
                return function () {
                    a.fps && (a.fps.text = String(parseInt(createjs.Ticker.getMeasuredFPS())) + "/" + mjcg.R.FPS, a.DispMsNotFps && (a.fps.text = String(parseInt((new Date).getTime() % 1e3)) + "/" + mjcg.R.FPS)), a.dummySpan && (a.dummySpan.innerText = String((new Date).getTime()))
                }
            }(this)
        }
        this.beShowBrowserAlert && setTimeout(this.showBrowserAlertDisplay, 500), setTimeout(function () {
            mjcg.Util.deleteAddressBar(), window.addEventListener("orientationchange", mjcg.Util.deleteAddressBar, !1)
        }, 300)
    }, b.initGame = function () {
        this.startScreenSetting()
    }, b.startScreenSetting = function () {
        var a = this, b = setInterval(function () {
            0 != window.innerWidth && (window.innerWidth, clearInterval(b), a.startInitCanvas())
        }, 100)
    }, b.startInitCanvas = function () {
        if (this.NeedWaitForWindowSize) {
            var a = mjcg.R.START_WAIT_TIME - ((new Date).getTime() - this.initTime);
            return a < mjcg.R.START_WAIT_MIN_TIME && (a = mjcg.R.START_WAIT_MIN_TIME), this.NeedWaitForWindowSize = !1, setTimeout(function (a) {
                return function () {
                    a.startInitCanvas()
                }
            }(this), a), void 0
        }
        this.initCanvas(), this.startLoading()
    }, b.startLoading = function () {
        createjs.Ticker.setFPS(mjcg.R.FPS), createjs.Ticker.addListener(this.stage), createjs.Touch.isSupported() && createjs.Touch.enable(this.stage, !1, !1), this.changeSceneToLoading()
    }, b.changeScene = function (a) {
        this.stage.removeAllChildren(), this.stage.addChild(a), this.DispFps && this.stage.addChild(this.fps), createjs.Ticker.setPaused(!1), this.stage.update()
    }, b.changeSceneToLoading = function () {
        this.changeScene(new mjcg.LoadingScene(this))
    }, b.changeSceneToTitle = function () {
        this.changeScene(new mjcg.TitleScene(this))
    }, b.changeSceneToPlay = function () {
        this.changeScene(new mjcg.PlayScene(this))
    }, b.changeSceneToResult = function () {
        this.changeScene(new mjcg.ResultScene(this))
    }, b.createBitmap = function (a) {
        var b = new createjs.Bitmap(this.preload.getResult(a.src).result);
        return this.place(b, a), b.scaleX = this.scale * a.w / b.image.width, b.scaleY = this.scale * a.h / b.image.height, a.hasOwnProperty("regX") && (b.regX = a.regX), a.hasOwnProperty("regY") && (b.regY = a.regY), a.hasOwnProperty("scaleX") && (b.scaleX *= a.scaleX), a.hasOwnProperty("scaleY") && (b.scaleY *= a.scaleY), b
    }, b.changeBitmapImage = function (a, b) {
        a.image = this.preload.getResult(b).result
    }, b.setHitAreaRect = function (a, b) {
        var c = b.w * this.scale, d = b.h * this.scale;
        a.hasOwnProperty("data_sheetScale") && (c /= a.data_sheetScale, d /= a.data_sheetScale), a.hitArea = new createjs.Shape, a.hitArea.graphics.beginFill("#FFFFFF").drawRect(0, 0, c, d).endFill()
    }, b.createBitmapAnimation = function (a) {
        var b = this.makeSpriteSheet(a.anims), c = new createjs.BitmapAnimation(b);
        this.place(c, a);
        var d = mjcg.R.SPRITESHEETS[mjcg.R.BITMAPANIMS[a.anims[0]].sheet];
        return d && d.hasOwnProperty("scale") && (c.data_sheetScale = d.scale, c.scaleX *= d.scale, c.scaleY *= d.scale), a.hasOwnProperty("scaleX") && (c.scaleX *= a.scaleX), a.hasOwnProperty("scaleY") && (c.scaleY *= a.scaleY), c.gotoAndPlay(a.anims[0]), c
    }, b.makeSpriteSheet = function (a) {
        var b = 0, c = 0, d = null, e = null, f = null, g = null, h = !1, i = 0, j = 0, k = 0, l = 0, m = null, n = null, o = null, p = null, q = null, r = 0, s = 0, t = 0, u = 0, v = {}, w = [], x = [], y = {};
        v.images = w, v.frames = x, v.animations = y;
        var z = {};
        for (c = a.length, b = 0; c > b; b++) {
            for (d = a[b], e = mjcg.R.BITMAPANIMS[d], f = e.frames, g = [], h = e.hasOwnProperty("loop") ? e.loop : !1, l = f.length, k = 0; l > k; k++) {
                for (m = f[k], n = m.hasOwnProperty("sheet") ? m.sheet : e.sheet, p = mjcg.R.SPRITESHEETS[n], o = mjcg.Util.getOrgImageSrc(p.src), q = mjcg.SpriteFrames.Sheets[o].frames[m.frame], z.hasOwnProperty(p.src) ? r = z[p.src] : (r = w.length, w[r] = p.src, z[m.src] = r), i = q.hasOwnProperty("regX") ? q.regX : e.hasOwnProperty("regX") ? e.regX : 0, 0 != i && (i = 0 | q.frame.w * i), j = q.hasOwnProperty("regY") ? q.regY : e.hasOwnProperty("regY") ? e.regY : 0, 0 != j && (j = 0 | q.frame.h * j), s = x.length, x[s] = [q.frame.x, q.frame.y, q.frame.w, q.frame.h, r, i, j], t = 1, m.hasOwnProperty("count") && (t = m.count), u = 0; t > u; u++)g[g.length] = s;
                p = null, q = null, n = null, o = null, m = null
            }
            y[d] = {frames: g, next: h}, g = null, f = null, e = null, d = null
        }
        z = null;
        var A = new createjs.SpriteSheet(v);
        return A
    }, b.createText = function (a) {
        var b = "";
        a.hasOwnProperty("font") && (b = a.font), a.hasOwnProperty("fontpx") && a.hasOwnProperty("fontname") && (b = (0 | a.fontpx * this.scale + .5) + "px " + a.fontname);
        var c = new createjs.Text(a.text, b, a.color);
        return this.place(c, a), a.hasOwnProperty("textAlign") && (c.textAlign = a.textAlign), a.hasOwnProperty("textBaseline") && (c.textBaseline = a.textBaseline), c
    }, b.place = function (a, b) {
        a.x = b.x * this.scale, a.y = b.y * this.scale
    }, b.cloneJson = function (a) {
        var b = {};
        for (var c in a)b[c] = a[c];
        return b
    }, b.resetGameState = function () {
        this.game_result = !1, this.game_score = 0, this.game_hitcount = {};
        for (var a in mjcg.Lane.EnemyType)a != mjcg.Lane.EnemyType.Wall && (this.game_hitcount[a] = 0)
    }, b.setGameResult = function (a) {
        this.game_result = a
    }, b.getGameResult = function () {
        return this.game_result
    }, b.setGameScore = function (a) {
        this.game_score = a
    }, b.getGameScore = function () {
        return this.game_score
    }, b.incrementGameHitCount = function (a) {
        a == mjcg.Lane.EnemyType.Wall && (a = mjcg.Lane.EnemyType.Normal), this.game_hitcount.hasOwnProperty(a) ? this.game_hitcount[a] += 1 : (console.error("getGameHitCount: enemyType:" + a), this.game_hitcount[a] = 1)
    }, b.getGameHitCount = function (a) {
        var b = 0;
        return this.game_hitcount.hasOwnProperty(a) ? b = this.game_hitcount[a] : console.error("getGameHitCount: enemyType:" + a), b
    }, b.setStorageItem = function (a, b) {
        window.localStorage ? (a = mjcg.R.STORAGE_KEY_PREFIX + a, window.localStorage[a] = b) : console.log("setStorageItem: window.localStorage is not supported.")
    }, b.getStorageItem = function (a, b) {
        var c = null;
        return 1 < arguments.length && (c = b), window.localStorage ? (a = mjcg.R.STORAGE_KEY_PREFIX + a, c = window.localStorage[a]) : console.log("getStorageItem: window.localStorage is not supported."), c
    }, mjcg.Game = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a, b) {
        this.initialize(a, b)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.initialize = function (a, b) {
        var c = 0, d = 0, e = null, f = null;
        this.Container_initialize(), this.scaleX = mjcg.R.TEXTS.TEXT_BLOCK_SCALE_X;
        var g = b.text.split("\n");
        for (e = a.cloneJson(b), e.x /= this.scaleX, d = g.length, c = 0; d > c; c++)e.text = g[c], f = a.createText(e), this.addChild(f), f = null, e.y += e.fontpx;
        e = null
    }, mjcg.TextBlock = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.preload = this.game.preload, this.EnableLoadingBg = !0, this.DispLoadPercent = !0, this.resourceNames = {}, this.txtPregress = a.createText(mjcg.R.TEXTS.LD_PROGRESS), this.shpBg = new createjs.Shape, this.shpBg.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill();
        var b = new createjs.Shape;
        b.graphics.beginFill(mjcg.R.TEXTS.LD_PROGRESS.bgcolor).drawRect(0, (mjcg.R.STAGE.h / 2 - mjcg.R.TEXTS.LD_PROGRESS.fontpx) * this.game.scale, mjcg.R.STAGE.w * this.game.scale, 2 * mjcg.R.TEXTS.LD_PROGRESS.fontpx * this.game.scale).endFill(), b.alpha = .8, this.addChild(this.shpBg), this.addChild(b), this.addChild(this.txtPregress), mjcg.Util.applyImageSrcBase(mjcg.IMAGE_BASE, mjcg.R.IMAGES), mjcg.Util.applyImageSrcBase(mjcg.IMAGE_BASE, mjcg.R.SPRITESHEETS), this.game.UseSdk && (mobage.casualgame.setTotalLoadItems(100), mobage.casualgame.setCurrentLoaded(0)), this.EnableLoadingBg ? this.loadBg() : this.loadResource()
    }, b.loadBg = function () {
        var a = this;
        this.preload.onLoadStart = function () {
        }, this.preload.onProgress = function () {
        }, this.preload.onError = function (b) {
            console.log("loadBg: onError:[" + b.src + "]"), a.preload.onLoadStart = a.preload.onProgress = a.preload.onError = a.preload.onComplete = null, mjcg.Util.changeElementsDisplayByClassName(mjcg.R.COMM_ERROR_CLASSNAME, "block")
        }, this.preload.onComplete = function () {
            a.preload.onLoadStart = a.preload.onProgress = a.preload.onError = a.preload.onComplete = null;
            var c = a.game.createBitmap(mjcg.R.IMAGES.TT_BG);
            a.addChildAt(c, a.getChildIndex(a.shpBg) + 1), a.loadResource()
        };
        var b = mjcg.R.IMAGES.TT_BG.src;
        this.resourceNames[b] = !0, this.preload.loadManifest([
            {src: b, type: createjs.PreloadJS.IMAGE}
        ]), b = null
    }, b.loadResource = function () {
        var a = this;
        this.preload.onLoadStart = function () {
        }, this.preload.onProgress = function (b) {
            var c = 0 | 100 * b.loaded;
            a.DispLoadPercent && (a.txtPregress.text = mjcg.R.TEXTS.LD_PROGRESS.text + String(c) + "%"), a.game.UseSdk && mobage.casualgame.setCurrentLoaded(c)
        },
            this.preload.onError = function (b) {
            console.log("loadResource: onError:[" + b.src + "]"),
                a.preload.onLoadStart = a.preload.onProgress = a.preload.onError = a.preload.onComplete = null;
                window.location.reload();//刷新本页
                //,mjcg.Util.changeElementsDisplayByClassName(mjcg.R.COMM_ERROR_CLASSNAME, "block");
        },
            this.preload.onComplete = function () {
            a.preload.onLoadStart = a.preload.onProgress = a.preload.onError = a.preload.onComplete = null;
            var c = 100;
            a.DispLoadPercent && (a.txtPregress.text = mjcg.R.TEXTS.LD_PROGRESS.text + String(c) + "%"), a.game.UseSdk && mobage.casualgame.setCurrentLoaded(c), a.startGame()
        };
        var b = [], c = this.resourceNames, d = null, e = null;
        for (d in mjcg.R.IMAGES)e = mjcg.R.IMAGES[d].src, e in c || (c[e] = !0, b.push({src: e, type: createjs.PreloadJS.IMAGE}));
        for (d in mjcg.R.SPRITESHEETS)e = mjcg.R.SPRITESHEETS[d].src, e in c || (c[e] = !0, b.push({src: e, type: createjs.PreloadJS.IMAGE}));
        c = null, d = null, e = null, this.preload.loadManifest(b), b = null
    }, b.startGame = function () {
        this.preload.onLoadStart = null, this.preload.onProgress = null, this.preload.onError = null, this.preload.onComplete = null, this.game.changeSceneToTitle(), this.removeAllChildren()
    }, mjcg.LoadingScene = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1, this.onClose = null, this.shpShade = new createjs.Shape, this.shpShade.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shpShade.alpha = .5;
        var b = mjcg.R.ANIMSPLACE.TT_ITEMGET_BALL_WINDOW, c = mjcg.R.TEXTS.TT_ITEM_BALL_INFO, d = mjcg.R.ANIMSPLACE.TT_ITEMGET_BALL_CLOSE, e = mjcg.Game.ItemState.New == parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.None), 10);
        e || (b = mjcg.R.ANIMSPLACE.TT_ITEMGET_WEAR_WINDOW, c = mjcg.R.TEXTS.TT_ITEM_WEAR_INFO, d = mjcg.R.ANIMSPLACE.TT_ITEMGET_WEAR_CLOSE), this.bmpWindow = a.createBitmapAnimation(b), this.txtInfo = new mjcg.TextBlock(a, c), this.bmpBtnClose = a.createBitmapAnimation(d), a.AlwayUseHitArea && a.setHitAreaRect(this.bmpBtnClose, d), this.shpShade.onClick = function (a) {
            a.nativeEvent.preventDefault()
        }, this.bmpBtnClose.onClick = function (a) {
            return function () {
                a.enableButton && a.onCloseClick()
            }
        }(this), this.hideWindow(), this.addChild(this.shpShade), this.addChild(this.bmpWindow), this.addChild(this.txtInfo), this.addChild(this.bmpBtnClose)
    }, b.onCloseClick = function () {
        this.bmpBtnClose.visible && ("function" == typeof this.onClose ? this.onClose() : this.hideWindow())
    }, b.showWindow = function () {
        return;
        this.visible = !0, this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, b.hideWindow = function () {
        this.visible = !1
    }, mjcg.ItemGetWindow = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1, this.onClose = null, this.shpShade = new createjs.Shape, this.shpShade.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shpShade.alpha = .5, this.bmpWindow = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_WINDOW), this.bmpBtnClose = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_WINDOW_CLOSE), a.AlwayUseHitArea && a.setHitAreaRect(this.bmpBtnClose, mjcg.R.ANIMSPLACE.TT_ITEMSET_WINDOW_CLOSE), this.txtBall = new mjcg.TextBlock(a, mjcg.R.TEXTS.TT_ITEM_BALL_LABEL), this.txtWear = new mjcg.TextBlock(a, mjcg.R.TEXTS.TT_ITEM_WEAR_LABEL), this.bmpBtnOnBall = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_BALL_ON), this.bmpBtnOffBall = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_BALL_OFF), this.bmpBtnOnWear = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_WEAR_ON), this.bmpBtnOffWear = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_ITEMSET_WEAR_OFF), a.setHitAreaRect(this.bmpBtnOnBall, mjcg.R.ANIMSPLACE.TT_ITEMSET_BALL_ON), a.setHitAreaRect(this.bmpBtnOffBall, mjcg.R.ANIMSPLACE.TT_ITEMSET_BALL_OFF), a.setHitAreaRect(this.bmpBtnOnWear, mjcg.R.ANIMSPLACE.TT_ITEMSET_WEAR_ON), a.setHitAreaRect(this.bmpBtnOffWear, mjcg.R.ANIMSPLACE.TT_ITEMSET_WEAR_OFF), this.setCurrentState(), this.shpShade.onClick = function (a) {
            a.nativeEvent.preventDefault()
        }, this.bmpBtnOnBall.onClick = function (a) {
            return function () {
                a.isItemBallOn || (a.isItemBallOn = !0, a.updateBallState(), a.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.Have))
            }
        }(this), this.bmpBtnOffBall.onClick = function (a) {
            return function () {
                a.isItemBallOn && (a.isItemBallOn = !1, a.updateBallState(), a.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.Off))
            }
        }(this), this.bmpBtnOnWear.onClick = function (a) {
            return function () {
                a.isItemWearOn || (a.isItemWearOn = !0, a.updateWearState(), a.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.Have))
            }
        }(this), this.bmpBtnOffWear.onClick = function (a) {
            return function () {
                a.isItemWearOn && (a.isItemWearOn = !1, a.updateWearState(), a.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.Off))
            }
        }(this), this.bmpBtnClose.onClick = function (a) {
            return function () {
                a.enableButton && a.onCloseClick()
            }
        }(this), this.hideWindow(), this.addChild(this.shpShade), this.addChild(this.bmpWindow), this.addChild(this.txtBall), this.addChild(this.txtWear), this.addChild(this.bmpBtnOnBall), this.addChild(this.bmpBtnOffBall), this.addChild(this.bmpBtnOnWear), this.addChild(this.bmpBtnOffWear), this.addChild(this.bmpBtnClose)
    }, b.setCurrentState = function () {
        var a = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.None), 10), b = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.None), 10), c = mjcg.Game.ItemState.None != a, d = mjcg.Game.ItemState.None != b;
        c || (this.txtBall.visible = !1, this.bmpBtnOnBall.visible = !1, this.bmpBtnOffBall.visible = !1), d || (this.txtWear.visible = !1, this.bmpBtnOnWear.visible = !1, this.bmpBtnOffWear.visible = !1), this.isItemBallOn = mjcg.Game.ItemState.Have == a, this.updateBallState(), this.isItemWearOn = mjcg.Game.ItemState.Have == b, this.updateWearState()
    }, b.onCloseClick = function () {
        this.bmpBtnClose.visible && ("function" == typeof this.onClose ? this.onClose() : this.hideWindow())
    }, b.updateBallState = function () {
        var a = "TT_ITEMSET_ON_OFF", b = "TT_ITEMSET_OFF_ON";
        this.isItemBallOn && (a = "TT_ITEMSET_ON_ON", b = "TT_ITEMSET_OFF_OFF"), this.bmpBtnOnBall.gotoAndPlay(a), this.bmpBtnOffBall.gotoAndPlay(b)
    }, b.updateWearState = function () {
        var a = "TT_ITEMSET_ON_OFF", b = "TT_ITEMSET_OFF_ON";
        this.isItemWearOn && (a = "TT_ITEMSET_ON_ON", b = "TT_ITEMSET_OFF_OFF"), this.bmpBtnOnWear.gotoAndPlay(a), this.bmpBtnOffWear.gotoAndPlay(b)
    }, b.showWindow = function () {
        return;
        this.setCurrentState(), this.visible = !0, this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, b.hideWindow = function () {
        this.visible = !1
    }, mjcg.ItemSetWindow = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1;
        var b = a.createBitmap(mjcg.R.IMAGES.TT_BG), c = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_BTN_START);
        a.setHitAreaRect(c, mjcg.R.ANIMSPLACE.TT_BTN_START), c.onClick = function (a) {
            return function () {
                a.enableButton && a.game.changeSceneToPlay()
            }
        }(this);
        var d = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.TT_BTN_ITEM);
        a.setHitAreaRect(d, mjcg.R.ANIMSPLACE.TT_BTN_ITEM), d.onClick = function (a) {
            return function () {
                a.enableButton && a.ctnItemSetWindow.showWindow()
            }
        }(this), this.ctnItemSetWindow = new mjcg.ItemSetWindow(a), this.ctnItemSetWindow.onCloseClick = function (a) {
            return function () {
                a.ctnItemSetWindow.hideWindow(), a.setButtonWait()
            }
        }(this);
        var e = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.None), 10), f = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.None), 10), g = mjcg.Game.ItemState.None != e, h = mjcg.Game.ItemState.None != f;
        this.hasNewItemBall = mjcg.Game.ItemState.New == e, this.hasNewItemWear = mjcg.Game.ItemState.New == f, this.ctnItemGetWindow = null, (this.hasNewItemBall || this.hasNewItemWear) && (this.ctnItemGetWindow = new mjcg.ItemGetWindow(a), this.ctnItemGetWindow.onCloseClick = function (a) {
            return function () {
                a.ctnItemGetWindow.hideWindow(), a.setButtonWait()
            }
        }(this), this.ctnItemGetWindow.showWindow(), this.hasNewItemBall ? this.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.Have) : this.hasNewItemWear && this.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.Have)), d.visible = !1, (g || h) && (d.visible = !0), this.addChild(b), this.addChild(c), this.addChild(d), this.addChild(this.ctnItemSetWindow), this.ctnItemGetWindow && this.addChild(this.ctnItemGetWindow), this.game.UseSdk && mobage.casualgame.readyToStartGame(), this.setButtonWait()
    }, b.setButtonWait = function () {
        this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, mjcg.TitleScene = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a, b, c, d) {
        this.initialize(a, b, c, d)
    }, b = a.prototype = new createjs.Container;
    a.EnemyType = {}, a.EnemyType.Normal = "Normal", a.EnemyType.Speed = "Speed", a.EnemyType.Power = "Power", a.EnemyType.Red = "Red", a.EnemyType.Hand = "Hand", a.EnemyType.Wall = "Wall", a.EnemyState = {}, a.EnemyState.None = 0, a.EnemyState.Walk = 1, a.EnemyState.Crash = 2, a.EnemyState.CrashEnd = 3, a.CheckState = {}, a.CheckState.Before = 0, a.CheckState.After = 1, a.EnemyMode = {}, a.EnemyMode.Normal = "ratio_normal", a.EnemyMode.Red = "ratio_red", b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a, b, c, d) {
        var e = null, f = null;
        if (this.Container_initialize(), this.game = a, this.id = b, this.gameState = c, this.info = d, this.paused = !1, this.enemyType = mjcg.Lane.EnemyType.Normal, this.enemyState = mjcg.Lane.EnemyState.CrashEnd, this.checkState = mjcg.Lane.CheckState.Before, this.houseDurability = mjcg.R.HOUSE_DURABILITY, this.enemyDx = 0, this.damageInterval = -1, this.rightLimit = (mjcg.R.STAGE.w - (mjcg.R.ENEMY_ORG_X + mjcg.R.ENEMY_W / 5) * d.enemy_scale) * this.game.scale, this.game.EnableMoratorium && (this.isCrashable = !1), this.onStartAttack = null, this.onBreakHouse = null, this.onCrashEnemy = null, this.bmpHouse = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_HOUSE), this.bmpHouse.x = d.house_x * this.game.scale, this.bmpHouse.y = d.house_y * this.game.scale, this.bmpHouse.scaleX = this.bmpHouse.scaleY = this.bmpHouse.scaleX * d.house_scale, this.updateHouseAnim(), this.bmpEnemy = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_ENEMY), this.bmpEnemy.y = d.enemy_top * this.game.scale, this.bmpEnemy.scaleX = this.bmpEnemy.scaleY = this.bmpEnemy.scaleX * d.enemy_scale, this.bmpEnemy.paused = !0, this.bmpEnemy.visible = !1, this.bmpEnemy.onAnimationEnd = function (a) {
            return function () {
                mjcg.Lane.EnemyState.Crash == a.enemyState && (a.enemyState = mjcg.Lane.EnemyState.CrashEnd)
            }
        }(this), this.game.EnableMoratorium && this.game.UseColorFilterForMoratorium) {
            this.bmpEnemy.filters = [new createjs.ColorFilter(1, 1, 1, 1)];
            var g = this.bmpEnemy.spriteSheet.getFrame(0).rect;
            this.bmpEnemy.cache(0, 0, g.width, g.height), this.bmpEnemyCacheInfo = {}, this.bmpEnemyCacheInfo.multi = this.bmpEnemy.filters[0].redMultiplier, this.bmpEnemyCacheInfo.anim = this.bmpEnemy.currentAnimation, this.bmpEnemyCacheInfo.frame = this.bmpEnemy.currentFrame
        }
        this.ctnHitEffect = new createjs.Container, this.ctnHitEffect.visible = !1, this.bmpsHitEffect = [a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_HIT_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_HIT_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_HIT_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_HIT_RU)], this.bmpsHitEffect[1].scaleY *= -1, this.bmpsHitEffect[2].scaleX *= -1, this.bmpsHitEffect[3].scaleY *= -1, this.bmpsHitEffect[3].scaleX *= -1;
        for (e in this.bmpsHitEffect)f = this.bmpsHitEffect[e], f.paused = !0, f.visible = !1, f.onAnimationEnd = function (a) {
            a.paused = !0, a.visible = !1
        }, this.ctnHitEffect.addChild(f), f = null;
        this.bmpHelp = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_HELP_LABEL), this.bmpHelp.x = d.help_x * this.game.scale, this.bmpHelp.y = d.help_y * this.game.scale, this.bmpHelp.scaleX = this.bmpHelp.scaleY = this.bmpHelp.scaleX * d.help_scale, this.bmpHelp.visible = !1, this.tweenHelp = null, this.addChild(this.bmpHouse), this.addChild(this.bmpEnemy), this.addChild(this.ctnHitEffect), this.addChild(this.bmpHelp)
    }, b.onTick = function () {
        if (this.paused); else if (mjcg.Lane.EnemyType.Wall == this.enemyType)mjcg.Lane.EnemyState.CrashEnd == this.enemyState && (this.bmpEnemy.x = this.info.enemy_right * this.game.scale); else if (mjcg.Lane.EnemyState.CrashEnd == this.enemyState)this.enemyState = mjcg.Lane.EnemyState.Walk, this.respawnEnemy(); else if (mjcg.Lane.EnemyState.Walk == this.enemyState) {
            if (this.info.enemy_left * this.game.scale < this.bmpEnemy.x && (this.bmpEnemy.x -= this.enemyDx, this.bmpEnemy.x < this.info.enemy_left * this.game.scale && (this.bmpEnemy.x = this.info.enemy_left * this.game.scale), this.game.EnableMoratorium))if (this.rightLimit >= this.bmpEnemy.x && (this.game.UseColorFilterForMoratorium && (this.isCrashable || this.bmpEnemy.uncache()), this.isCrashable = !0), this.game.UseColorFilterForMoratorium) {
                var a = 1;
                if (!this.isCrashable)if (this.game.UseRatioForMoratorium) {
                    var b = (this.bmpEnemy.x - this.info.enemy_right * this.game.scale) / (this.rightLimit - this.info.enemy_right * this.game.scale);
                    a = b > .7 ? (b - .7) / .3 : 0, .2 > a && (a = .2)
                } else a = .2;
                this.bmpEnemy.filters[0].redMultiplier = this.bmpEnemy.filters[0].greenMultiplier = this.bmpEnemy.filters[0].blueMultiplier = a
            } else if (this.game.UseRatioForMoratorium) {
                var b = (this.bmpEnemy.x - this.info.enemy_right * this.game.scale) / (this.rightLimit - this.info.enemy_right * this.game.scale);
                this.bmpEnemy.alpha = b > .7 ? (b - .7) / .3 : 0, .5 > this.bmpEnemy.alpha && (this.bmpEnemy.alpha = .5)
            } else this.bmpEnemy.alpha = this.isCrashable ? 1 : .5;
            this.game.DisableDamage || this.info.enemy_left * this.game.scale >= this.bmpEnemy.x && (0 > this.damageInterval ? (this.damageInterval = mjcg.R.DAMAGE_INTERVAL, 0 < this.houseDurability && (this.startHelpDisp(), "function" == typeof this.onStartAttack && this.onStartAttack(this))) : (this.damageInterval -= 1e3 / mjcg.R.FPS, 0 >= this.damageInterval && (0 < this.houseDurability && (this.houseDurability -= mjcg.R.ENEMY_TYPE_PARAM[this.enemyType].power, 0 >= this.houseDurability && (this.houseDurability = 0), this.updateHouseAnim(), this.startHelpDisp(), "function" == typeof this.onBreakHouse && this.onBreakHouse(this)), this.damageInterval = mjcg.R.DAMAGE_INTERVAL)))
        }
        this.game.EnableMoratorium && this.game.UseColorFilterForMoratorium && this.bmpEnemy && (this.isCrashable || this.bmpEnemyCacheInfo.multi == this.bmpEnemy.filters[0].redMultiplier && this.bmpEnemyCacheInfo.anim == this.bmpEnemy.currentAnimation && this.bmpEnemyCacheInfo.frame == this.bmpEnemy.currentFrame || (this.bmpEnemy.updateCache(), this.bmpEnemyCacheInfo.multi = this.bmpEnemy.filters[0].redMultiplier, this.bmpEnemyCacheInfo.anim = this.bmpEnemy.currentAnimation, this.bmpEnemyCacheInfo.frame = this.bmpEnemy.currentFrame))
    }, b.setPause = function (a) {
        var b = null, c = null;
        if (a != this.paused) {
            this.paused = a, this.tweenHelp && this.tweenHelp.setPaused(a), this.bmpHouse.paused = a, this.bmpEnemy.paused = a;
            for (b in this.bmpsHitEffect)c = this.bmpsHitEffect[b], c.visible && (c.paused = a);
            this.bmpHelp.paused = a
        }
    }, b.isPaused = function () {
        return this.paused
    }, b.startHelpDisp = function () {
    }, b.respawnEnemy = function () {
        if (this.bmpEnemy.x = this.info.enemy_right * this.game.scale, this.game.EnableMoratorium)if (this.game.UseColorFilterForMoratorium && (this.isCrashable || this.bmpEnemy.uncache()), this.isCrashable = !1, this.game.UseColorFilterForMoratorium) {
            this.bmpEnemy.filters[0].redMultiplier = this.bmpEnemy.filters[0].greenMultiplier = this.bmpEnemy.filters[0].blueMultiplier = 0;
            var a = this.bmpEnemy.spriteSheet.getFrame(0).rect;
            this.bmpEnemy.cache(0, 0, a.width, a.height), this.bmpEnemyCacheInfo = {}, this.bmpEnemyCacheInfo.multi = this.bmpEnemy.filters[0].redMultiplier, this.bmpEnemyCacheInfo.anim = this.bmpEnemy.currentAnimation, this.bmpEnemyCacheInfo.frame = this.bmpEnemy.currentFrame
        } else this.bmpEnemy.alpha = .5;
        var b = null, c = mjcg.R.ENEMY_TYPE_PARAM, d = 0, e = this.gameState.isRedMode() ? mjcg.Lane.EnemyMode.Red : mjcg.Lane.EnemyMode.Normal;
        for (b in c)d += c[b][e];
        this.gameState.enableHand() || (d -= c[mjcg.Lane.EnemyType.Hand][e]), this.enemyType = mjcg.Lane.EnemyType.Normal;
        var f = 0 | Math.random() * d, g = 0;
        for (b in c)if (g += c[b][e], g > f) {
            this.enemyType = mjcg.Lane.EnemyType[b];
            break
        }
        mjcg.Lane.EnemyType.Hand == this.enemyType && this.gameState.onHandAppear();
        var h = c[this.enemyType];
        if (this.gameState.isNightmareMode() && mjcg.Lane.EnemyType.Power == this.enemyType) {
            var i = mjcg.R.ENEMY_TYPE_PARAM_NIGHTMARE[this.enemyType];
            this.enemyDx = (0 | Math.random() * (i.speed_max - i.speed_min)) + i.speed_min, this.bmpEnemy.gotoAndPlay(i.anim_walk)
        } else this.enemyDx = (0 | Math.random() * (h.speed_max - h.speed_min)) + h.speed_min, this.bmpEnemy.gotoAndPlay(h.anim_walk);
        this.enemyDx *= this.game.scale, this.enemyDx *= mjcg.R.ENEMY_SPEED_FACTOR, this.damageInterval = -1, this.bmpEnemy.paused = !1, this.bmpEnemy.visible = !0
    }, b.startNightmare = function () {
        if (mjcg.Lane.EnemyType.Power == this.enemyType) {
            var a = mjcg.R.ENEMY_TYPE_PARAM[this.enemyType], b = mjcg.R.ENEMY_TYPE_PARAM_NIGHTMARE[this.enemyType], c = (b.speed_max - b.speed_min) / (a.speed_max - a.speed_min), d = this.enemyDx - a.speed_min;
            this.enemyDx = c * d + b.speed_min, a.anim_walk == this.bmpEnemy.currentAnimation && this.bmpEnemy.gotoAndPlay(b.anim_walk)
        }
    }, b.setWall = function (a) {
        a -= mjcg.R.ENEMY_ORG_X * this.game.scale * this.info.enemy_scale;
        var b = this.info.enemy_left * this.game.scale;
        b > a && (a = b), a > this.rightLimit && (a = this.rightLimit), this.bmpEnemy.x = a, this.game.EnableMoratorium && (this.game.UseColorFilterForMoratorium && (this.isCrashable || this.bmpEnemy.uncache()), this.isCrashable = !0, this.game.UseColorFilterForMoratorium ? this.bmpEnemy.filters[0].redMultiplier = this.bmpEnemy.filters[0].greenMultiplier = this.bmpEnemy.filters[0].blueMultiplier = 1 : this.bmpEnemy.alpha = 1), this.enemyState = mjcg.Lane.EnemyState.Walk, this.enemyType = mjcg.Lane.EnemyType.Wall;
        var c = mjcg.R.ENEMY_TYPE_PARAM[this.enemyType];
        this.enemyDx = 0, this.damageInterval = -1, this.bmpEnemy.gotoAndPlay(c.anim_walk), this.bmpEnemy.paused = !1, this.bmpEnemy.visible = !0
    }, b.resetWall = function () {
        if (mjcg.Lane.EnemyState.Walk == this.enemyState) {
            this.enemyType = mjcg.Lane.EnemyType.Normal;
            var a = mjcg.R.ENEMY_TYPE_PARAM[this.enemyType];
            this.enemyDx = (0 | Math.random() * (a.speed_max - a.speed_min)) + a.speed_min, this.enemyDx *= this.game.scale, this.enemyDx *= mjcg.R.ENEMY_SPEED_FACTOR, this.damageInterval = -1, this.bmpEnemy.gotoAndPlay(a.anim_walk), this.bmpEnemy.paused = !1, this.bmpEnemy.visible = !0
        } else this.respawnEnemy()
    }, b.updateHouseAnim = function () {
        var a = 0, b = 0, c = null, d = null, e = this.houseDurability, f = mjcg.R.HOUSE_ANIM_MAP;
        for (c = this.bmpHouse.currentAnimation, d = null, b = f.length, a = 0; b > a && (d = f[a].anim, !(e >= f[a].min)); a++);
        null != d && c != d && this.bmpHouse.gotoAndPlay(d)
    }, b.resetCheckState = function () {
        this.checkState = mjcg.Lane.CheckState.Before
    }, b.getEnemyY = function () {
        return this.bmpEnemy.y + mjcg.R.ENEMY_H * this.game.scale * this.info.enemy_scale
    }, b.checkCrash = function (a) {
        var b = null, c = null;
        if (mjcg.Lane.EnemyState.Walk == this.enemyState && mjcg.Lane.CheckState.Before == this.checkState) {
            var d = !1, e = this.getEnemyY();
            if (a.y <= e) {
                var f = this.bmpEnemy.x + mjcg.R.ENEMY_ORG_X * this.game.scale * this.info.enemy_scale;
                if (this.gameState.isSpecialBall())d = !0; else if (this.game.EnableMoratorium && !this.isCrashable)d = !1; else {
                    var g = (this.gameState.isHighPowerBall() ? mjcg.R.ENEMY_W_HIGHPOWER : mjcg.R.ENEMY_W) * this.game.scale / 2, h = f - g, i = f + g;
                    h <= a.x && a.x <= i && (d = !0)
                }
                if (this.game.EnableHandCatch && !this.gameState.isSpecialBall() && d && mjcg.Lane.EnemyType.Hand == this.enemyType)this.enemyDx = 0, this.bmpEnemy.gotoAndPlay("PL_ENEMY_5_CATCH"), this.bmpEnemy.paused = !0, "function" == typeof this.onCrashEnemy && this.onCrashEnemy(this.enemyType, this.bmpEnemy); else if (d) {
                    this.enemyState = mjcg.Lane.EnemyState.Crash, this.bmpEnemy.gotoAndPlay(mjcg.R.ENEMY_TYPE_PARAM[this.enemyType].anim_crash);
                    for (b in this.bmpsHitEffect)c = this.bmpsHitEffect[b], c.gotoAndPlay(c.currentAnimation), c.paused = !1, c.visible = !0, c = null;
                    this.ctnHitEffect.x = this.gameState.isSpecialBall() ? f : a.x, this.ctnHitEffect.y = e, this.ctnHitEffect.visible = !0, "function" == typeof this.onCrashEnemy && this.onCrashEnemy(this.enemyType)
                }
                this.checkState = mjcg.Lane.CheckState.After
            }
        }
    }, mjcg.Lane = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    a.GameMode = {}, a.GameMode.Normal = 0, a.GameMode.Yellow = 1, a.GameMode.Red = 2, a.GameMode.Freekick = 3, a.BallType = {}, a.BallType.Normal = 0, a.BallType.Special = 1, a.BallState = {}, a.BallState.Set = 0, a.BallState.Move = 1, a.SpecialState = {}, a.SpecialState.Disable = 0, a.SpecialState.Enable = 1, a.SpecialState.Using = 2, a.TentState = {}, a.TentState.Zzz = "Zzz", a.TentState.Awake = "Awake", a.TentState.Help = "Help", b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        var b = null, c = null, d = 0, e = null;
        this.Container_initialize(), this.game = a, a.resetGameState(), this.gameMode = mjcg.PlayScene.GameMode.Normal, this.scoreCoefficient = mjcg.R.SCORE_COEFFICIENT_NORMAL, this.ballType = mjcg.PlayScene.BallType.Normal, this.ballState = mjcg.PlayScene.BallState.Set, this.ballDx = 0, this.ballDy = 0, this.hitCount = 0, this.baseScore = 0, this.comboCount = 0, this.power = 0, this.specialState = mjcg.PlayScene.SpecialState.Disable, this.score = 0, this.tentState = mjcg.PlayScene.TentState.Zzz, this.helpDispFrame = -1, this.helpIntervalFrame = -1, this.beStartHand = !1, this.isFreeKick = !1, this.isNightmare = !1, this.tweenHand = null;
        var f = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.None), 10), g = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.None), 10);
        this.isHighPower = mjcg.Game.ItemState.Have == f, this.isEasySpecial = mjcg.Game.ItemState.Have == g, this.time = mjcg.R.INITIAL_TIME, this.paused = !1, this.timeCounter = 0, this.handTimeout = 0 | mjcg.R.HAND_TIMEOUT / (1e3 / mjcg.R.FPS), this.damageHistory = [];
        var h = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_BG);
        a.AlwayUseHitArea && a.setHitAreaRect(h, mjcg.R.ANIMSPLACE.PL_BG), h.onPress = function (a) {
            return function (b) {
                b.onMouseMove = function (a) {
                    return function (b) {
                        a.onMove(b.stageX / mjcg.R.DRAW_SCALE, b.stageY / mjcg.R.DRAW_SCALE)
                    }
                }(a), b.onMouseUp = function (a) {
                    return function (b) {
                        a.onKick(b.stageX / mjcg.R.DRAW_SCALE, b.stageY / mjcg.R.DRAW_SCALE)
                    }
                }(a), a.onMove(b.stageX / mjcg.R.DRAW_SCALE, b.stageY / mjcg.R.DRAW_SCALE)
            }
        }(this), this.bmpTent = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_TENT), this.bmpHelp = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_HELP), this.bmpHelp.visible = !1, this.changeTentState(mjcg.PlayScene.TentState.Zzz);
        var i = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_BONFIRE), j = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_ROCK);
        this.ctnLane1 = new mjcg.Lane(a, 0, this, mjcg.R.LANE_PARAM[0]), this.ctnLane2 = new mjcg.Lane(a, 1, this, mjcg.R.LANE_PARAM[1]), this.ctnLane3 = new mjcg.Lane(a, 2, this, mjcg.R.LANE_PARAM[2]), this.ctnLane4 = new mjcg.Lane(a, 3, this, mjcg.R.LANE_PARAM[3]), this.ctnsLane = [this.ctnLane1, this.ctnLane2, this.ctnLane3, this.ctnLane4], this.ctnLane1.onCrashEnemy = this.ctnLane2.onCrashEnemy = this.ctnLane3.onCrashEnemy = this.ctnLane4.onCrashEnemy = function (a) {
            return function (b, c) {
                a.onHit(b, c)
            }
        }(this), this.ctnLane1.onBreakHouse = this.ctnLane2.onBreakHouse = this.ctnLane3.onBreakHouse = this.ctnLane4.onBreakHouse = function (a) {
            return function (b) {
                a.onDamage(b)
            }
        }(this), this.ctnLane1.onStartAttack = this.ctnLane2.onStartAttack = this.ctnLane3.onStartAttack = this.ctnLane4.onStartAttack = function (a) {
            return function () {
                mjcg.PlayScene.TentState.Zzz != a.tentState && a.startDispHelp()
            }
        }(this), this.bmpBall = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_BALL), this.ballScale = this.bmpBall.scaleX, this.bmpBallAura = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_BALL_AURA), this.bmpBallAura.visible = !1, this.bmpBallAura.alpha = .7, this.ctnKickEffect = new createjs.Container, a.place(this.ctnKickEffect, mjcg.R.ANIMSPLACE.PL_BALL), this.ctnKickEffect.visible = !1, this.bmpsKickEffect = [a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_KICK_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_KICK_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_KICK_RU), a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_EFFECT_KICK_RU)], this.bmpsKickEffect[1].scaleY *= -1, this.bmpsKickEffect[2].scaleX *= -1, this.bmpsKickEffect[3].scaleY *= -1, this.bmpsKickEffect[3].scaleX *= -1;
        for (b in this.bmpsKickEffect)c = this.bmpsKickEffect[b], c.paused = !0, c.visible = !1, c.onAnimationEnd = function (a) {
            a.paused = !0, a.visible = !1
        }, this.ctnKickEffect.addChild(c), c = null;
        this.bmpKicker = a.createBitmapAnimation(this.isEasySpecial ? mjcg.R.ANIMSPLACE.PL_KICKER_N : mjcg.R.ANIMSPLACE.PL_KICKER), this.bmpKickerAura = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_KICKER_AURA_3), this.bmpKickerAura.paused = !1, this.bmpKickerAura.visible = this.isHighPower, this.bmpKickerAura.alpha = .7, this.kickerAnim = null, this.onMove(mjcg.R.ANIMSPLACE.PL_BALL.x * this.game.scale, 0), this.bmpBall.visible = !1, this.bmpSpecialButton = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SP_BTN), a.AlwayUseHitArea && a.setHitAreaRect(this.bmpSpecialButton, mjcg.R.ANIMSPLACE.PL_SP_BTN), this.bmpSpecialButton.onClick = null;
        var k = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SP_METER);
        this.bmpPowerMeterMask = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SP_METER_MASK);
        var l = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SP_METER_FRAME), m = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SCORE_LABEL), n = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_TIME_LABEL);
        for (e = mjcg.R.ANIMSPLACE.PL_NUM_SCORE, this.bmpsNumScore = [], d = mjcg.R.SCORE_DIGIT_MAX, b = 0; d > b; b++)c = a.createBitmapAnimation(e), c.x += b * e.w * this.game.scale, this.bmpsNumScore[b] = c, c = null;
        for (e = null, mjcg.Util.setNumBmps(this.bmpsNumScore, mjcg.R.ANIMSPLACE.PL_NUM_SCORE.anims, this.score), e = mjcg.R.ANIMSPLACE.PL_NUM_TIME, this.bmpsNumTime = [], d = mjcg.R.TIME_DIGIT_MAX, b = 0; d > b; b++)c = a.createBitmapAnimation(e), c.x += b * e.w * this.game.scale, this.bmpsNumTime[b] = c, c = null;
        e = null, this.game.DisableTime || mjcg.Util.setNumBmps(this.bmpsNumTime, mjcg.R.ANIMSPLACE.PL_NUM_TIME.anims, this.time);
        var o = new createjs.Container;
        for (o.x = mjcg.R.ANIMSPLACE.PL_BALL.x * this.game.scale, o.y = mjcg.R.KICK_SCORE_Y * this.game.scale, o.alpha = 0, this.ctnScoreByKick = o, this.tweenKickScore = null, e = mjcg.R.ANIMSPLACE.PL_NUM_KICK_SCORE, this.bmpsNumKickScore = [], d = mjcg.R.KICK_SCORE_DIGIT_MAX, b = 0; d > b; b++)c = a.createBitmapAnimation(e), c.x += (b - d) * e.w * this.game.scale, o.addChild(c), this.bmpsNumKickScore[b] = c, c = null;
        e = null, mjcg.Util.setNumBmps(this.bmpsNumKickScore, mjcg.R.ANIMSPLACE.PL_NUM_KICK_SCORE.anims, 123456), this.ctnCombo = new createjs.Container, this.ctnCombo.x = mjcg.R.COMBO_MOVE_X, this.ctnCombo.visible = !1;
        var p = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_COMBO_PLATE);
        for (this.ctnCombo.addChild(p), this.tweenCombo = null, e = mjcg.R.ANIMSPLACE.PL_NUM_COMBO, this.bmpsNumCombo = [], d = mjcg.R.COMBO_DIGIT_MAX, b = 0; d > b; b++)c = a.createBitmapAnimation(e), c.x += b * e.w * this.game.scale, this.bmpsNumCombo[b] = c, this.ctnCombo.addChild(c), c = null;
        e = null, this.bmpMode = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_MODE_LABEL), this.bmpMode.visible = !1, this.modeDispCount = 0, this.shpLightning = new createjs.Shape, this.shpLightning.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shpLightning.alpha = .3, this.shpLightning.visible = !1, this.inLightning = !1, this.lightningDispCount = 0, this.game.UseBmpTornado && (this.bmpTornado = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_TORNADO), this.bmpTornado.visible = !1), this.ctnCutin = new createjs.Container, this.ctnCutin.visible = !1, this.shade = new createjs.Shape, this.shade.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shade.alpha = 0, this.addChild(h), this.addChild(this.bmpTent), this.addChild(i), this.addChild(this.ctnLane4), this.addChild(this.ctnLane3), this.addChild(this.ctnLane2), this.addChild(this.ctnLane1), this.addChild(j), this.addChild(this.bmpHelp), this.addChild(this.bmpBall), this.addChild(this.bmpBallAura), this.addChild(this.bmpKicker), this.addChild(this.bmpKickerAura), this.addChild(k), this.addChild(this.bmpPowerMeterMask), this.addChild(l), this.addChild(this.bmpSpecialButton), this.addChild(this.ctnKickEffect), this.addChild(m), this.addChild(n);
        for (b in this.bmpsNumScore)this.addChild(this.bmpsNumScore[b]);
        for (b in this.bmpsNumTime)this.addChild(this.bmpsNumTime[b]);
        this.addChild(this.bmpMode), this.addChild(this.ctnCombo), this.addChild(o), this.game.UseBmpTornado ? this.addChild(this.bmpTornado) : this.addChild(this.shpLightning), this.addChild(this.ctnCutin), this.addChild(this.shade), this.game.UseSdk && mobage.casualgame.startGame(), this.startKickoffCutin()
    }, b.onTick = function () {
        var a = null, b = 0;
        if (this.paused || this.tentState != mjcg.PlayScene.TentState.Zzz || -1 == this.helpDispFrame && (-1 == this.helpIntervalFrame ? (this.helpIntervalFrame = 0 | Math.random() * (mjcg.R.ZZZ_INTERVAL_MAX - mjcg.R.ZZZ_INTERVAL_MIN), this.helpIntervalFrame += mjcg.R.ZZZ_INTERVAL_MIN, this.helpIntervalFrame = 0 | this.helpIntervalFrame * mjcg.R.FPS / 1e3) : (this.helpIntervalFrame -= 1, 0 >= this.helpIntervalFrame && (this.helpIntervalFrame = -1, this.startDispHelp()))), !this.paused && 0 < this.helpDispFrame && (this.helpDispFrame -= 1, 0 >= this.helpDispFrame && (this.helpDispFrame = -1, this.bmpHelp.visible = !1)), !this.paused && !this.isFreeKick && 0 < this.time && !this.game.DisableTime) {
            this.timeCounter += 1, 0 < this.handTimeout && (this.handTimeout -= 1, 0 == this.handTimeout);
            var c = mjcg.R.INITIAL_TIME - (0 | this.timeCounter / mjcg.R.FPS);
            if (c != this.time && (this.time = c, mjcg.Util.setNumBmps(this.bmpsNumTime, mjcg.R.ANIMSPLACE.PL_NUM_TIME.anims, this.time), 0 == this.time), !this.paused && !this.isNightmare && mjcg.R.NIGHTMARE_LEFT_TIME >= this.time) {
                this.isNightmare = !0;
                for (a in this.ctnsLane)this.ctnsLane[a].startNightmare();
                this.startNightmareCutin()
            }
        }
        if (!this.paused && !this.isFreeKick && 0 >= this.time && !this.game.DisableTime && this.ballState == mjcg.PlayScene.BallState.Set && (this.setPause(!0), createjs.Tween.get(this.shade).to({alpha: 1}, 1e3).call(function () {
            this.startGameClear()
        }, null, this)), !this.paused && this.inLightning && (this.lightningDispCount += 1, (this.shpLightning.visible ? 1 : 1) <= this.lightningDispCount && (this.shpLightning.visible = !this.shpLightning.visible, this.lightningDispCount = 0)), !this.paused && this.isFreeKick && (this.modeDispCount += 1, (0 < this.bmpMode.alpha ? 15 : 3) <= this.modeDispCount && (this.bmpMode.alpha = 1 - this.bmpMode.alpha, this.modeDispCount = 0)), !this.paused && mjcg.PlayScene.BallState.Move == this.ballState) {
            this.bmpBall.x += this.ballDx, this.bmpBall.y += this.ballDy, b = this.getBoundDx(this.ballDx, this.bmpBall.x, this.bmpBall.y), this.ballDx != b && (this.ballDx = b), 0 != this.ballDy && (this.bmpBall.scaleX -= this.ballScale * (mjcg.R.BALL_SCALE_DOWN_VELOCITY / 100), this.bmpBall.scaleY = this.bmpBall.scaleX, this.bmpBall.rotation += mjcg.R.BALL_ROTATION_VELOCITY), this.bmpBallAura.x = this.bmpBall.x, this.bmpBallAura.y = this.bmpBall.y, this.bmpBallAura.scaleX = this.bmpBallAura.scaleY = this.bmpBall.scaleX;
            for (a in this.ctnsLane)this.ctnsLane[a].checkCrash(this.bmpBall);
            mjcg.R.BALL_VANISH_Y * this.game.scale > this.bmpBall.y && this.finishKick()
        }
    }, b.changeTentState = function (a) {
        mjcg.R.TENT_ANIMS.hasOwnProperty(a) && (this.tentState = a, this.bmpTent.gotoAndPlay(mjcg.R.TENT_ANIMS[a].tent), this.bmpHelp.gotoAndPlay(mjcg.R.TENT_ANIMS[a].help), this.startDispHelp())
    }, b.startDispHelp = function () {
        this.bmpHelp.visible = !0, this.helpDispFrame = 0 | mjcg.R.HELP_TIME * mjcg.R.FPS / 1e3
    }, b.finishKick = function () {
        var a = this.bmpBall.x;
        if (this.ballState = mjcg.PlayScene.BallState.Set, this.game.place(this.bmpBall, mjcg.R.ANIMSPLACE.PL_BALL), this.bmpBall.scaleX = this.bmpBall.scaleY = 1 * this.ballScale, this.bmpBall.rotation = 0, this.bmpBallAura.x = this.bmpBall.x, this.bmpBallAura.y = this.bmpBall.y, this.bmpBallAura.scaleX = this.bmpBallAura.scaleY = this.bmpBall.scaleX, mjcg.PlayScene.BallType.Special == this.ballType && (this.bmpSpecialButton.gotoAndPlay("PL_SP_BTN_OFF"), this.specialState = mjcg.PlayScene.SpecialState.Disable, this.power = 0, this.updatePowerMeterMask()), this.inLightning && (this.shpLightning.visible = !1, this.inLightning = !1, this.lightningDispCount = 0), this.game.UseBmpTornado && this.bmpTornado.visible && (this.bmpTornado.visible = !1), 2 <= this.hitCount || this.beStartHand ? (this.comboCount += this.hitCount, this.game.DisableSpecial || mjcg.PlayScene.SpecialState.Disable == this.specialState && (this.power += this.hitCount * (this.isEasySpecial ? mjcg.R.SPECIAL_METER_FACTOR_BLUE : mjcg.R.SPECIAL_METER_FACTOR_NORMAL), mjcg.R.SPECIAL_METER_MAX <= this.power && (this.power = mjcg.R.SPECIAL_METER_MAX, this.bmpSpecialButton.gotoAndPlay("PL_SP_BTN_UP"), this.bmpSpecialButton.onClick = function (a) {
            return function () {
                a.onClickSpecialButton()
            }
        }(this), this.specialState = mjcg.PlayScene.SpecialState.Enable), this.updatePowerMeterMask())) : this.comboCount = 0, this.game.EnableScoreByKick && 1 <= this.hitCount) {
            var b = this.scoreCoefficient;
            this.isFreeKick && (b *= mjcg.R.SCORE_COEFFICIENT_FREEKICK);
            var c = this.baseScore * this.hitCount;
            2 <= this.comboCount && (c += this.comboCount * mjcg.R.SCORE_COMBO_FACTOR), c *= b, c > 0 && (c = 0 | c, this.score += c, mjcg.Util.setNumBmps(this.bmpsNumScore, mjcg.R.ANIMSPLACE.PL_NUM_SCORE.anims, this.score), this.dispScoreByKick(c, this.hitCount, a))
        }
        createjs.Tween.removeTweens(this.ctnCombo), this.ctnCombo.x = mjcg.R.COMBO_MOVE_X * this.game.scale, mjcg.Util.setNumBmps(this.bmpsNumCombo, mjcg.R.ANIMSPLACE.PL_NUM_COMBO.anims, this.comboCount), 1 < this.comboCount ? (this.ctnCombo.visible = !0, this.tweenCombo = createjs.Tween.get(this.ctnCombo).to({x: 0}, mjcg.R.COMBO_MOVE_TIME, createjs.Ease.circOut).to({visible: !1}, mjcg.R.COMBO_DISP_TIME)) : this.ctnCombo.visible = !1, this.bmpKicker.gotoAndPlay(this.kickerAnim.stand), this.bmpBall.visible = !1, this.bmpBallAura.visible = !1, this.bmpKickerAura.visible = this.isHighPower, this.game.place(this.bmpKickerAura, mjcg.R.ANIMSPLACE[this.kickerAnim.aura]), this.isFreeKick && (this.isFreeKick = !1, mjcg.PlayScene.GameMode.Red == this.gameMode ? this.bmpMode.gotoAndPlay("PL_MODE_RED") : mjcg.PlayScene.GameMode.Yellow == this.gameMode ? this.bmpMode.gotoAndPlay("PL_MODE_YELLOW") : this.bmpMode.visible = !1, this.bmpMode.alpha = 1, this.finishFreekick()), this.beStartHand && (this.beStartHand = !1, this.isFreeKick = !0, this.startHandCutin())
    }, b.dispScoreByKick = function (a, b, c) {
        b -= 1, 0 > b ? b = 0 : mjcg.R.KICK_SCORE_SCALE.length <= b && (b = mjcg.R.KICK_SCORE_SCALE.length - 1);
        var d = this.ctnScoreByKick, e = mjcg.R.KICK_SCORE_SCALE_MIN;
        e += (mjcg.R.KICK_SCORE_SCALE_MAX - mjcg.R.KICK_SCORE_SCALE_MIN) * (mjcg.R.KICK_SCORE_SCALE[b] - mjcg.R.KICK_SCORE_SCALE[0]) / (mjcg.R.KICK_SCORE_SCALE[mjcg.R.KICK_SCORE_SCALE.length - 1] - mjcg.R.KICK_SCORE_SCALE[0]), d.scaleX = d.scaleY = e;
        var f = String(Math.abs(0 | a)), g = f.length, h = g * mjcg.R.ANIMSPLACE.PL_NUM_KICK_SCORE.w * d.scaleX * this.game.scale;
        d.x = c + h / 2;
        var i = mjcg.R.STAGE.w * this.game.scale;
        i < d.x && (d.x = i), h > d.x && (d.x = h), mjcg.Util.setNumBmps(this.bmpsNumKickScore, mjcg.R.ANIMSPLACE.PL_NUM_KICK_SCORE.anims, a), d.alpha = 1, this.tweenKickScore = createjs.Tween.get(d).wait(.7 * mjcg.R.KICK_SCORE_DISP_TIME).to({alpha: 0}, .3 * mjcg.R.KICK_SCORE_DISP_TIME)
    }, b.getBoundDx = function (a, b, c) {
        var d = !1, e = 0;
        return 0 > a ? (e = this.getXBound(c, mjcg.R.BALL_BLOCK_LEFT), e >= b && (d = !0)) : (e = this.getXBound(c, mjcg.R.BALL_BLOCK_RIGHT), b >= e && (d = !0)), d && (a *= -1.5), a
    }, b.setPause = function (a) {
        var b = null, c = null;
        if (a != this.paused) {
            this.paused = a, this.tweenHand && this.tweenHand.setPaused(a), this.tweenKickScore && this.tweenKickScore.setPaused(a), this.tweenCombo && this.tweenCombo.setPaused(a), this.bmpBallAura.paused = a, this.bmpBall.paused = a, this.bmpKicker.paused = a, this.bmpKickerAura.paused = a;
            for (b in this.bmpsKickEffect)c = this.bmpsKickEffect[b], c.visible && (c.paused = a);
            this.bmpSpecialButton.paused = a;
            for (b in this.ctnsLane)this.ctnsLane[b].setPause(a)
        }
    }, b.isPaused = function () {
        return this.paused
    }, b.getXBound = function (a, b) {
        var c = 0, d = b[0].x * this.game.scale, e = b[0].y * this.game.scale, f = b[1].x * this.game.scale, g = b[1].y * this.game.scale;
        if (0 == f - d)c = d; else {
            var h = (g - e) / (f - d), i = e - h * d;
            c = (a - i) / h
        }
        return c
    }, b.onClickSpecialButton = function () {
        this.paused || mjcg.PlayScene.SpecialState.Enable != this.specialState || mjcg.PlayScene.BallState.Set != this.ballState || (this.bmpSpecialButton.onClick = null, this.specialState = mjcg.PlayScene.SpecialState.Using, this.onSpecialKick())
    }, b.onMove = function (a, b) {
        this.paused || mjcg.PlayScene.BallState.Set != this.ballState || (this.kickerAnim = this.getKickerAnim(a, b), this.kickerAnim.stand != this.bmpKicker.currentAnimation && (this.bmpKicker.gotoAndPlay(this.kickerAnim.stand), this.game.place(this.bmpKickerAura, mjcg.R.ANIMSPLACE[this.kickerAnim.aura])))
    }, b.onKick = function (a, b) {
        var c = null, d = null;
        if (!this.paused && mjcg.PlayScene.BallState.Set == this.ballState) {
            this.ballType = mjcg.PlayScene.BallType.Normal, this.ballState = mjcg.PlayScene.BallState.Move;
            var e = a - this.bmpBall.x, f = 0 - (b - this.bmpBall.y);
            if (f / Math.abs(e) < mjcg.R.BALL_MIN_DY_PER_DX) {
                var g = 0 > e ? -1 : 1;
                e = Math.sqrt(mjcg.R.BALL_VELOCITY * this.game.scale * mjcg.R.BALL_VELOCITY * this.game.scale / (mjcg.R.BALL_MIN_DY_PER_DX * mjcg.R.BALL_MIN_DY_PER_DX + 1)), f = e * mjcg.R.BALL_MIN_DY_PER_DX, 0 > g && (e = 0 - e)
            } else {
                var h = Math.sqrt(e * e + f * f), i = mjcg.R.BALL_VELOCITY * this.game.scale / h;
                e *= i, f *= i
            }
            this.ballDx = e, this.ballDy = 0 - f, this.hitCount = 0, this.baseScore = 0;
            for (c in this.ctnsLane)this.ctnsLane[c].resetCheckState();
            for (c in this.bmpsKickEffect)d = this.bmpsKickEffect[c], d.gotoAndPlay(d.currentAnimation), d.paused = !1, d.visible = !0, d = null;
            this.ctnKickEffect.visible = !0, this.kickerAnim = this.getKickerAnim(a, b), this.bmpKicker.gotoAndPlay(this.kickerAnim.kick), this.bmpBall.visible = !0, this.isHighPower && (this.bmpBallAura.gotoAndPlay("PL_BALL_AURA"), this.bmpBallAura.visible = !0, this.bmpKickerAura.visible = !1)
        }
    }, b.getKickerAnim = function (a, b) {
        var c = null, d = 0, e = 0, f = null, g = mjcg.R.ANIMSPLACE.PL_BALL, h = a - g.x * this.game.scale, i = 0 - (b - g.y * this.game.scale);
        if (e = mjcg.R.KICKER_ANIM_MAP.length, 0 >= i)f = mjcg.R.KICKER_ANIM_MAP[e - 1]; else {
            var j = Math.abs(h) / i;
            for (d = 0; e > d && (f = mjcg.R.KICKER_ANIM_MAP[d], !(isNaN(f.max_dx_per_dy) || j <= f.max_dx_per_dy)); d++);
        }
        return c = this.isEasySpecial ? 0 > h ? f.anim_l_n : f.anim_r_n : 0 > h ? f.anim_l : f.anim_r
    }, b.onSpecialKick = function () {
        this.onKick(mjcg.R.ANIMSPLACE.PL_BALL.x * this.game.scale, 0), this.ballType = mjcg.PlayScene.BallType.Special, this.bmpSpecialButton.gotoAndPlay("PL_SP_BTN_DOWN"), this.startSpecialCutin()
    }, b.onHit = function (a, b) {
        if (this.hitCount += 1, this.game.incrementGameHitCount(a), this.game.EnableScoreByKick)this.baseScore += mjcg.R.ENEMY_TYPE_PARAM[a].score; else {
            var c = this.scoreCoefficient;
            this.isFreeKick && (c *= mjcg.R.SCORE_COEFFICIENT_FREEKICK);
            var d = mjcg.R.ENEMY_TYPE_PARAM[a].score * c, e = this.comboCount + this.hitCount;
            e > 1 && (d += d / 10 * e), this.score += 0 | d, mjcg.Util.setNumBmps(this.bmpsNumScore, mjcg.R.ANIMSPLACE.PL_NUM_SCORE.anims, this.score)
        }
        this.isSpecialBall() || mjcg.Lane.EnemyType.Hand != a || (this.beStartHand = !0, this.game.EnableHandCatch && (this.ballDx = 0, this.ballDy = 0, this.bmpBall.x = b.x + mjcg.R.HAND_POINT.x * this.game.scale * b.scaleX, this.bmpBall.y = b.y + mjcg.R.HAND_POINT.y * this.game.scale * b.scaleY, this.bmpBallAura.x = this.bmpBall.x, this.bmpBallAura.y = this.bmpBall.y, this.bmpBall.visible = !1, this.bmpBallAura.visible = !1, this.tweenHand = createjs.Tween.get(this).wait(1e3).call(function () {
            this.finishKick()
        }, null, this)))
    }, b.onDamage = function (a) {
        var b = this.damageHistory;
        b[b.length] = a.id, 0 >= a.houseDurability ? (this.setPause(!0), createjs.Tween.get(this.shade).to({alpha: 1}, 1e3).call(function () {
            this.startGameOver()
        }, null, this)) : mjcg.PlayScene.GameMode.Normal == this.gameMode ? this.checkDamageHistory(mjcg.R.OCCUR_CRITERION_YELLOW) && (this.gameMode = mjcg.PlayScene.GameMode.Yellow, this.scoreCoefficient = mjcg.R.SCORE_COEFFICIENT_YELLOW, this.startYellowCardCutin()) : mjcg.PlayScene.GameMode.Yellow == this.gameMode && this.checkDamageHistory(mjcg.R.OCCUR_CRITERION_RED) && (this.gameMode = mjcg.PlayScene.GameMode.Red, this.scoreCoefficient = mjcg.R.SCORE_COEFFICIENT_RED, this.startRedCardCutin()), mjcg.PlayScene.TentState.Zzz == this.tentState ? this.changeTentState(mjcg.PlayScene.TentState.Awake) : mjcg.PlayScene.TentState.Awake == this.tentState ? mjcg.R.HOUSE_DURABILITY_HELP >= a.houseDurability ? this.changeTentState(mjcg.PlayScene.TentState.Help) : this.startDispHelp() : this.startDispHelp()
    }, b.checkDamageHistory = function (a) {
        var b = !1, c = 0, d = 0, e = 0, f = this.damageHistory;
        for (b = !0, d = f.length - 1, e = f[d], c = f.length - a; d > c; c++)if (e != f[c]) {
            b = !1;
            break
        }
        return b
    }, b.updatePowerMeterMask = function () {
        var a = mjcg.R.SPECIAL_METER_MAX;
        this.bmpPowerMeterMask.scaleX = this.bmpPowerMeterMask.scaleY * (a - this.power) / a
    }, b.enableHand = function () {
        return 0 == this.handTimeout
    }, b.onHandAppear = function () {
        var a = 0 | (mjcg.R.HAND_INTERVAL_MAX - mjcg.R.HAND_INTERVAL_MIN) * Math.random();
        this.handTimeout = 0 | (a + mjcg.R.HAND_INTERVAL_MIN) / (1e3 / mjcg.R.FPS)
    }, b.isNightmareMode = function () {
        return this.isNightmare
    }, b.isRedMode = function () {
        return mjcg.PlayScene.GameMode.Red == this.gameMode
    }, b.isSpecialBall = function () {
        return mjcg.PlayScene.BallType.Special == this.ballType
    }, b.isHighPowerBall = function () {
        return this.isHighPower
    }, b.startKickoffCutin = function () {
        this.setPause(!0);
        var a = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_KICKOFF);
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 12), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_KICKOFF_TEXT);
        b.visible = !1;
        var c = b.scaleX;
        b.scaleX = b.scaleY = 1.3 * c, createjs.Tween.get(b).to({visible: !0}, 5e3 / 12).to({scaleX: .9 * c, scaleY: .9 * c}, 1e3 / 12).to({scaleX: 1 * c, scaleY: 1 * c}, 2e3 / 12), this.ctnCutin.addChild(b), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(17e3 / 12).call(function () {
            this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.setPause(!1)
        }, null, this)
    }, b.startNightmareCutin = function () {
        this.setPause(!0);
        var a = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_NIGHTMARE);
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 12), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_NIGHTMARE_TEXT);
        b.visible = !1;
        var c = b.scaleX;
        b.scaleX = b.scaleY = 1.3 * c, createjs.Tween.get(b).to({visible: !0}, 5e3 / 12).to({scaleX: .9 * c, scaleY: .9 * c}, 1e3 / 12).to({scaleX: 1 * c, scaleY: 1 * c}, 2e3 / 12), this.ctnCutin.addChild(b), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(17e3 / 12).call(function () {
            this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.setPause(!1)
        }, null, this)
    }, b.startSpecialCutin = function () {
        this.setPause(!0);
        var a = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_SPECIAL);
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 15), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SPECIAL_1);
        b.x = mjcg.R.STAGE.w * this.game.scale, b.visible = !1, createjs.Tween.get(b).to({visible: !0}, 200).to({x: mjcg.R.ANIMSPLACE.PL_SPECIAL_1.x * this.game.scale}, 200), this.ctnCutin.addChild(b);
        var c = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_SPECIAL_2);
        c.visible = !1;
        var d = c.scaleX;
        c.scaleX = c.scaleY = .858 * d / .66, createjs.Tween.get(c).to({visible: !0}, 1e4 / 15).wait(1e3 / 15).to({scaleX: .594 * d / .66, scaleY: .594 * d / .66}, 1e3 / 15).to({scaleX: .66 * d / .66, scaleY: .66 * d / .66}, 2e3 / 15), this.ctnCutin.addChild(c), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(32e3 / 15).call(function () {
            this.bmpBallAura.gotoAndPlay("PL_BALL_SP_AURA"), this.bmpBallAura.visible = !0, this.bmpBallAura.scaleX = this.bmpBallAura.scaleY = this.bmpBall.scaleX, this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.shpLightning.visible = !0, this.game.UseBmpTornado && (this.bmpTornado.visible = !0), this.inLightning = !0, this.lightningDispCount = 0, this.setPause(!1)
        }, null, this)
    }, b.startHandCutin = function () {
        this.setPause(!0);
        var a = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_HAND);
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 12), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_HAND_TEXT);
        b.visible = !1;
        var c = b.scaleX;
        b.scaleX = b.scaleY = 1.3 * c, createjs.Tween.get(b).to({visible: !0}, 5e3 / 12).to({scaleX: .9 * c, scaleY: .9 * c}, 1e3 / 12).to({scaleX: 1 * c, scaleY: 1 * c}, 2e3 / 12), this.ctnCutin.addChild(b), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(17e3 / 12).call(function () {
            this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.bmpMode.gotoAndPlay("PL_MODE_FREEKICK"), this.bmpMode.visible = !0, this.bmpMode.alpha = 1, this.modeDispCount = 0, this.startFreekick(), this.setPause(!1)
        }, null, this)
    }, b.startFreekick = function () {
        var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
        for (e = Math.sqrt(mjcg.R.BALL_VELOCITY * this.game.scale * mjcg.R.BALL_VELOCITY * this.game.scale / (mjcg.R.BALL_MIN_DY_PER_DX * mjcg.R.BALL_MIN_DY_PER_DX + 1)), h = ((0 | 11 * Math.random()) - 5) / 5, e *= h, f = Math.sqrt(mjcg.R.BALL_VELOCITY * this.game.scale * mjcg.R.BALL_VELOCITY * this.game.scale - e * e), f = 0 - f, c = mjcg.R.ANIMSPLACE.PL_BALL.x * this.game.scale, d = mjcg.R.ANIMSPLACE.PL_BALL.y * this.game.scale, b = this.ctnsLane.length, a = 0; b > a; a++) {
            for (g = this.ctnsLane[a].getEnemyY(); d > g;)c += e, d += f, i = this.getBoundDx(e, c, d), e != i && (e = i);
            this.ctnsLane[a].setWall(c)
        }
    }, b.finishFreekick = function () {
        var a = null;
        for (a in this.ctnsLane)this.ctnsLane[a].resetWall()
    }, b.startYellowCardCutin = function () {
        this.setPause(!0);
        var a = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_YELLOW);
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 12), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_YELLOW_TEXT);
        b.visible = !1;
        var c = b.scaleX;
        b.scaleX = b.scaleY = 1.3 * c, createjs.Tween.get(b).to({visible: !0}, 5e3 / 12).to({scaleX: .9 * c, scaleY: .9 * c}, 1e3 / 12).to({scaleX: 1 * c, scaleY: 1 * c}, 2e3 / 12), this.ctnCutin.addChild(b), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(17e3 / 12).call(function () {
            this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.bmpMode.gotoAndPlay("PL_MODE_YELLOW"), this.bmpMode.visible = !0, this.setPause(!1)
        }, null, this)
    }, b.startRedCardCutin = function () {
        this.setPause(!0);
        var a = new createjs.Container;
        a.x = mjcg.R.STAGE.w * this.game.scale, createjs.Tween.get(a).to({x: 0}, 4e3 / 12), this.ctnCutin.addChild(a);
        var b = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_CUTIN_RED);
        a.addChild(b);
        var c = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_RED_1);
        createjs.Tween.get(c).wait(17e3 / 12).to({x: -166}, 250), a.addChild(c);
        var d = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_RED_2);
        createjs.Tween.get(d).wait(17e3 / 12).to({x: mjcg.R.STAGE.w * this.game.scale}, 250), a.addChild(d);
        var e = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_RED_3);
        e.x = mjcg.R.STAGE.w * this.game.scale, e.gotoAndPlay("PL_RED_3"), e.paused = !1, e.visible = !1, createjs.Tween.get(e).to({visible: !0}, 28e3 / 12).to({x: mjcg.R.ANIMSPLACE.PL_RED_3.x * this.game.scale}, 250).to({x: (mjcg.R.ANIMSPLACE.PL_RED_3.x - 20) * this.game.scale}, 13e3 / 12), a.addChild(e);
        var f = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_RED_TEXT);
        f.visible = !1;
        var g = f.scaleX;
        f.scaleX = f.scaleY = 1.3 * g, createjs.Tween.get(f).to({visible: !0}, 5e3 / 12).to({scaleX: .9 * g, scaleY: .9 * g}, 1e3 / 12).to({scaleX: 1 * g, scaleY: 1 * g}, 2e3 / 12), a.addChild(f);
        var h = this.game.createBitmapAnimation(mjcg.R.ANIMSPLACE.PL_RED_4);
        h.visible = !1;
        var g = h.scaleX;
        h.scaleX = h.scaleY = 2 * g / 1.4, createjs.Tween.get(h).to({visible: !0}, 17e3 / 12).to({scaleX: 1.2 * g / 1.4, scaleY: 1.2 * g / 1.4}, 1e3 / 12).to({scaleX: 1.4 * g / 1.4, scaleY: 1.4 * g / 1.4}, 1e3 / 12).wait(11e3 / 15).to({x: -(310 * g)}, 250).to({visible: !1}, 1e3 / 12), a.addChild(h), this.ctnCutin.visible = !0, createjs.Tween.get(this).wait(4e3).call(function () {
            this.ctnCutin.removeAllChildren(), this.ctnCutin.visible = !1, this.bmpMode.gotoAndPlay("PL_MODE_RED"), this.bmpMode.visible = !0, this.setPause(!1)
        }, null, this)
    }, b.startGameClear = function () {
        this.game.setGameResult(!0), this.game.setGameScore(this.score), this.game.changeSceneToResult()
    }, b.startGameOver = function () {
        this.game.setGameResult(!1), this.game.setGameScore(this.score), this.game.changeSceneToResult()
    }, mjcg.PlayScene = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1, this.onClose = null, this.shpShade = new createjs.Shape, this.shpShade.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shpShade.alpha = .5, this.bmpWindow = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_TRICKS_WINDOW), this.txtInfo = new mjcg.TextBlock(a, mjcg.R.TEXTS.RS_TRICKS_INFO), this.bmpBtnClose = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_TRICKS_CLOSE), a.AlwayUseHitArea && a.setHitAreaRect(this.bmpBtnClose, mjcg.R.ANIMSPLACE.RS_TRICKS_CLOSE), this.shpShade.onClick = function (a) {
            a.nativeEvent.preventDefault()
        }, this.bmpBtnClose.onClick = function (a) {
            return function () {
                a.enableButton && a.onCloseClick()
            }
        }(this), this.hideWindow(), this.addChild(this.shpShade), this.addChild(this.bmpWindow), this.addChild(this.txtInfo), this.addChild(this.bmpBtnClose)
    }, b.onCloseClick = function () {
        this.bmpBtnClose.visible && ("function" == typeof this.onClose ? this.onClose() : this.hideWindow())
    }, b.showWindow = function () {
        return;
        this.visible = !0, this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, b.hideWindow = function () {
        this.visible = !1
    }, mjcg.TricksWindow = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1, this.onClose = null, this.onGo = null, this.shpShade = new createjs.Shape, this.shpShade.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0)).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.shpShade.alpha = .5;
        var b = mjcg.R.ANIMSPLACE.RS_ITEMINFO_BALL_WINDOW, c = mjcg.R.TEXTS.RS_ITEM_BALL_INFO, d = mjcg.R.ANIMSPLACE.RS_ITEMINFO_BALL_CLOSE, e = mjcg.R.ANIMSPLACE.RS_ITEMINFO_BALL_GO, f = mjcg.Game.ItemState.None != parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA), 10);
        f && (b = mjcg.R.ANIMSPLACE.RS_ITEMINFO_WEAR_WINDOW, c = mjcg.R.TEXTS.RS_ITEM_WEAR_INFO, d = mjcg.R.ANIMSPLACE.RS_ITEMINFO_WEAR_CLOSE, e = mjcg.R.ANIMSPLACE.RS_ITEMINFO_WEAR_GO), this.bmpWindow = a.createBitmapAnimation(b), this.txtInfo = new mjcg.TextBlock(a, c), this.bmpBtnClose = a.createBitmapAnimation(d), this.bmpBtnGo = a.createBitmapAnimation(e), a.AlwayUseHitArea && (a.setHitAreaRect(this.bmpBtnClose, d), a.setHitAreaRect(this.bmpBtnGo, e)), this.shpShade.onClick = function (a) {
            a.nativeEvent.preventDefault()
        }, this.bmpBtnClose.onClick = function (a) {
            return function () {
                a.enableButton && a.onCloseClick()
            }
        }(this), this.bmpBtnGo.onClick = function (a) {
            return function () {
                a.enableButton && a.onGoClick()
            }
        }(this), this.hideWindow(), this.addChild(this.shpShade), this.addChild(this.bmpWindow), this.addChild(this.txtInfo), this.addChild(this.bmpBtnClose), this.addChild(this.bmpBtnGo)
    }, b.onCloseClick = function () {
        this.bmpBtnClose.visible && ("function" == typeof this.onClose ? this.onClose() : this.hideWindow())
    }, b.onGoClick = function () {
        this.bmpBtnGo.visible && ("function" == typeof this.onGo ? this.onGo() : this.hideWindow())
    }, b.showWindow = function () {
        return;
        this.visible = !0, this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, b.hideWindow = function () {
        this.visible = !1
    }, mjcg.ItemInfoWindow = a
}(), this.mjcg = this.mjcg || {}, function () {
    var a = function (a) {
        this.initialize(a)
    }, b = a.prototype = new createjs.Container;
    b.Container_initialize = b.initialize, b.game = null, b.initialize = function (a) {
        this.Container_initialize(), this.game = a, this.enableButton = !1, this.isScorePage = !1;
        var b = this.game.getGameScore(), c = parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_HISCORE, 0), 10), d = b > c;
        d && (this.game.setStorageItem(mjcg.R.STORAGE_KEY_HISCORE, b), c = b), this.isBestScore = d, this.hi_score = c, this.score = b, this.shareMessage = mjcg.R.TEXTS.RS_POST_MESSAGE.text.replace(mjcg.R.TEXTS.RS_POST_MESSAGE.token_score, String(this.score)), this.eventIdForTricks = null, this.eventIdForItem = null, this.eventIdForWidget = null, this.widgetId = null, this.game.EnableTalkInOrder && (this.bmpsTalk = [], this.talkIndex = 0, this.talkCount = 0), this.dispEndingPage(), this.game.UseSdk && (mobage.casualgame.finishGame(mjcg.R.RESULT_CATEGORY_ID_NA, b), this.didShare = function (a) {
            return function (b, c) {
                a.handleDidShare(b, c)
            }
        }(this), mobage.casualgame.delegate = this), this.setButtonWait()
    }, b.onTick = function () {
        this.game.EnableTalkInOrder && 2 <= this.bmpsTalk.length && (0 == this.talkCount ? (this.talkCount = mjcg.R.TALK_DISP_TIME * mjcg.R.FPS / 1e3, this.bmpsTalk[this.talkIndex].visible = !0) : (this.talkCount -= 1, 0 >= this.talkCount && (this.talkCount = 0, this.bmpsTalk[this.talkIndex].visible = !1, this.talkIndex += 1, this.talkIndex >= this.bmpsTalk.length && (this.talkIndex = 0))))
    }, b.setButtonWait = function () {
        this.enableButton = !1, createjs.Tween.get(this).wait(500).call(function () {
            this.enableButton = !0
        }, null, this)
    }, b.handleDidShare = function (a) {
        a == this.eventIdForTricks ? (this.game.setStorageItem(mjcg.R.STORAGE_KEY_TRICKS, mjcg.Game.UnlockState.Unlock), this.unlockedTricks = !0, this.hideShareWidget(), this.ctnTricksWindow.showWindow()) : a == this.eventIdForItem ? (this.hasItemBall ? this.hasItemWear || this.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.New) : this.game.setStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.New), this.goToTitle()) : a == this.eventIdForWidget
    }, b.dispEndingPage = function () {
        var a = this.game;
        this.removeAllChildren();
        var b = a.getGameResult() ? mjcg.R.ANIMSPLACE.RS_GOOD_ED : mjcg.R.ANIMSPLACE.RS_BAD_ED, c = a.createBitmapAnimation(b), d = new createjs.Shape;
        d.graphics.beginFill(mjcg.R.RESULT_SCENE_BGCOLOR).drawRect(0, 0, mjcg.R.STAGE.w * a.scale, mjcg.R.STAGE.h * a.scale).endFill();
        var e = a.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_BTN_NEXT);
        a.setHitAreaRect(e, mjcg.R.ANIMSPLACE.RS_BTN_NEXT), e.onClick = function (a) {
            return function () {
                a.enableButton && !this.isScorePage && (a.enableButton = !1, a.changeToScorePage())
            }
        }(this), this.addChild(d), this.addChild(c), this.addChild(e), createjs.Tween.get(e).wait(mjcg.R.RESULT_SKIP_TIMEOUT).call(function () {
            this.enableButton && !this.isScorePage && (this.enableButton = !1, this.changeToScorePage())
        }, null, this)
    }, b.changeToScorePage = function () {
        this.isScorePage = !0, this.dispScorePage(), this.setButtonWait()
    }, b.dispScorePage = function () {
        var a = 0, b = 0, c = 0, d = 0, e = null, f = null, g = null, h = 0, i = 0, j = 0, k = 0, l = 0, m = this.game;
        this.removeAllChildren();
        var n = new createjs.Container, o = mjcg.R.ANIMSPLACE, p = mjcg.Lane.EnemyType, q = [
            [p.Normal, o.RS_NUM_COUNT_1, o.RS_ENEMY_1, o.RS_BOARD_1],
            [p.Speed, o.RS_NUM_COUNT_4, o.RS_ENEMY_4, o.RS_BOARD_4],
            [p.Power, o.RS_NUM_COUNT_3, o.RS_ENEMY_3, o.RS_BOARD_3],
            [p.Hand, o.RS_NUM_COUNT_5, o.RS_ENEMY_5, o.RS_BOARD_5],
            [p.Red, o.RS_NUM_COUNT_2, o.RS_ENEMY_2, o.RS_BOARD_2]
        ];
        for (b = q.length, a = 0; b > a; a++) {
            for (h = m.getGameHitCount(q[a][0]), g = [], e = q[a][1], d = mjcg.R.RESULT_COUNT_DIGIT_MAX, c = 0; d > c; c++)f = m.createBitmapAnimation(e), f.x += c * e.w * m.scale, g[c] = f, n.addChild(f), f = null;
            if (mjcg.Util.setNumBmps(g, e.anims, h), e = null, g = null, e = q[a][2], h > 0)for (c = 9; c >= 0;)h > c && (f = m.createBitmapAnimation(e), c > 4 && (f.x += e.w * m.scale), f.y -= c % 5 * e.h * m.scale, i = f.spriteSheet.getNumFrames(f.currentAnimation), j = 0 | Math.random() * i, f.currentAnimationFrame = j, n.addChild(f), f = null), c -= 1;
            e = null, n.addChild(m.createBitmapAnimation(q[a][3]))
        }
        for (b = q.length - 1, k = 0, a = 0; b > a; a++)0 < m.getGameHitCount(q[a][0]) && (k += 1);
        for (l = k > 2 ? 2 : 1, a = b - 1; a >= 0; a--)if (h = m.getGameHitCount(q[a][0]), h > 0) {
            if (e = q[a][2], (0 | Math.random() * k) < l && (c = h > 8 ? 9 : h, 5 == c && (c = 4), c > 5 && (c -= 1), c = 0 | Math.random() * c, c > 3 && (c += 1), f = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_TALK), f.x += e.x * m.scale, f.y += e.y * m.scale, c > 4 && (f.x += e.w * m.scale), f.y -= c % 5 * e.h * m.scale, f.gotoAndPlay(mjcg.R.ANIMSPLACE.RS_TALK.anims[0 | Math.random() * mjcg.R.ANIMSPLACE.RS_TALK.anims.length]), n.addChild(f), this.game.EnableTalkInOrder && (0 < this.bmpsTalk.length && (f.visible = !1), this.bmpsTalk[this.bmpsTalk.length] = f), f = null, l -= 1, 1 > l))break;
            if (e = null, k -= 1, 1 > k)break
        }
        var r = m.createText(mjcg.R.TEXTS.RS_HISCORE_LABEL), s = m.createText(mjcg.R.TEXTS.RS_HISCORE);
		
        s.text = String(this.hi_score);
        var t = m.createText(mjcg.R.TEXTS.RS_SCORE_LABEL), u = m.createText(mjcg.R.TEXTS.RS_SCORE);
        u.text = String(this.score);window.score=this.score;updateShare(window.score);Play68.setRankingScoreDesc(window.score);
        var v = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_HISCORE), w = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_BTN_REPLAY);
        m.setHitAreaRect(w, mjcg.R.ANIMSPLACE.RS_BTN_REPLAY), w.onClick = function (a) {
            return function () {
            	console.log("Replay button clicked");
                a.enableButton && (a.enableButton = !1, a.restartGame())
            }
        }(this);
        var x = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_BTN_TITLE);
        m.setHitAreaRect(x, mjcg.R.ANIMSPLACE.RS_BTN_TITLE), x.onClick = function (a) {
            return function () {
	            console.log("Return to title button clicked.");
	            return; //先屏蔽掉这个逻辑
                a.enableButton && (a.enableButton = !1, a.goToTitle())
            }
        }(this), this.unlockedTricks = mjcg.Game.UnlockState.Lock != parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_TRICKS, mjcg.Game.UnlockState.Lock), 10);
        var y = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_BTN_TRICKS);
        var scoreToReport = Math.max(this.score,this.hi_score); //两个分数中取较大值
        m.setHitAreaRect(y, mjcg.R.ANIMSPLACE.RS_BTN_TRICKS), y.onClick = function (a) {
          //  return function () {
            	//设置分数
            	//gLocalStorageManager.setScoreToSubmit(scoreToReport);
            	//submitScoreAndShowRankList();
          // 	return;
               // a.enableButton && (a.enableButton = !1, a.unlockedTricks ? (a.hideShareWidget(), a.ctnTricksWindow.showWindow(), a.enableButton = !0) : (a.showIncentiveWindowForTricks(), a.enableButton = !0))
           // }
        }(this);
        var z = m.createBitmapAnimation(mjcg.R.ANIMSPLACE.RS_BTN_ITEM);
        m.setHitAreaRect(z, mjcg.R.ANIMSPLACE.RS_BTN_ITEM), z.onClick = function (a) {
            return function () {
                a.enableButton && (a.enableButton = !1, a.hideShareWidget(), a.ctnItemInfoWindow.showWindow(), a.enableButton = !0)
            }
        }(this), this.ctnTricksWindow = new mjcg.TricksWindow(m), this.ctnTricksWindow.onCloseClick = function (a) {
            return function () {
                a.ctnTricksWindow.hideWindow(), a.showShareWidget(), a.setButtonWait()
            }
        }(this), this.ctnItemInfoWindow = new mjcg.ItemInfoWindow(m), this.ctnItemInfoWindow.onCloseClick = function (a) {
            return function () {
                a.ctnItemInfoWindow.hideWindow(), a.showShareWidget(), a.setButtonWait()
            }
        }(this), this.ctnItemInfoWindow.onGo = function (a) {
            return function () {
                a.showIncentiveWindowForItem()
            }
        }(this), this.hasItemBall = mjcg.Game.ItemState.None != parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_AURA, mjcg.Game.ItemState.None), 10), this.hasItemWear = mjcg.Game.ItemState.None != parseInt(this.game.getStorageItem(mjcg.R.STORAGE_KEY_ITEM_NATIONAL, mjcg.Game.ItemState.None), 10), this.hasItemBall && this.hasItemWear && (z.visible = !1, m.place(x, mjcg.R.ANIMSPLACE.RS_BTN_TITLE_SIGLE), m.place(y, mjcg.R.ANIMSPLACE.RS_BTN_TRICKS_SIGLE));
        var A = new createjs.Shape;
        A.graphics.beginFill(mjcg.R.RESULT_SCENE_BGCOLOR).drawRect(0, 0, mjcg.R.STAGE.w * this.game.scale, mjcg.R.STAGE.h * this.game.scale).endFill(), this.addChild(A), this.addChild(n), this.addChild(r), this.addChild(s), this.addChild(t), this.addChild(u), this.addChild(w), this.addChild(x), this.addChild(y), this.addChild(z), this.addChild(v), this.addChild(this.ctnTricksWindow), this.addChild(this.ctnItemInfoWindow);
        var B = v.scaleX;
        v.scaleX = v.scaleY = 5 * B, v.alpha = 0, v.visible = this.isBestScore, v.visible ? createjs.Tween.get(v).wait(100).to({alpha: 1, scaleX: B, scaleY: B}, 500, createjs.Ease.circOut).to({visible: !1}, 500).wait(500).call(function () {
            this.showShareWidget()
        }, null, this) : this.showShareWidget()
    }, b.showIncentiveWindowForTricks = function () {
        this.game.UseSdk && (this.eventIdForTricks = (new Date).getTime(), mobage.casualgame.showIncentiveWindow(this.shareMessage, this.eventIdForTricks, mjcg.R.TEXTS.RS_TRICKS_MESSAGE.text))
    }, b.showIncentiveWindowForItem = function () {
        this.game.UseSdk && (this.eventIdForItem = (new Date).getTime(), mobage.casualgame.showIncentiveWindow(this.shareMessage, this.eventIdForItem, mjcg.R.TEXTS.RS_ITEM_MESSAGE.text))
    }, b.showShareWidget = function () {
        this.game.UseSdk && (this.eventIdForWidget = (new Date).getTime(), this.widgetId = mobage.casualgame.showShareWidget(this.shareMessage, this.eventIdForWidget, mjcg.R.CONTAINERS.RS_WIDGET.x, mjcg.R.CONTAINERS.RS_WIDGET.y))
    }, b.hideShareWidget = function () {
        this.game.UseSdk && (this.eventIdForWidget = null, this.widgetId && mobage.casualgame.hideShareWidget(this.widgetId), this.widgetId = null)
    }, b.restartGame = function () {
        this.clearShareSetting(), this.game.changeSceneToPlay()
    }, b.goToTitle = function () {
        this.clearShareSetting(), this.game.changeSceneToTitle()
    }, b.clearShareSetting = function () {
        this.game.UseSdk && (mobage.casualgame.delegate = null, this.didShare = null, this.eventIdForTricks = null, this.eventIdForItem = null, this.hideShareWidget())
    }, mjcg.ResultScene = a
}();