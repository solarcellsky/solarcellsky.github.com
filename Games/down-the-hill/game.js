var _STRINGS = {
	Ad: {
		Mobile: {
			Preroll: {
				ReadyIn: "The game is ready in ",
				Loading: "Your game is loading...",
				Close: "Close"
			},
			Header: {
				ReadyIn: "The game is ready in ",
				Loading: "Your game is loading...",
				Close: "Close"
			},
			End: {
				ReadyIn: "Advertisement ends in ",
				Loading: "Please wait ...",
				Close: "Close"
			}
		}
	},
	Loading: {
		Loading: "加载中……"
	},
	Tutorial: [
		["点击开始教程。"],
		["点击屏幕的左测或右侧", "使用左右方向键来移动"],
		["避开尖刺"],
		["避开那些动物"],
		["顺着水流而下，要及时转向"],
		["山体崩塌很快，要保持速度"],
		["有裂缝的土块一定不能去踩"],
		["你踩到炸弹后要快速离开"],
		["星星可加分，还能购买皮肤"],
		["中毒后，要在5秒内拿到解药"],
		["盾让你免受尖刺、动物、爆炸伤害"],
		["被黏住了要多跳几次"],
		["接下来就看你的了"],
		["你完蛋了！重新开始教程？"]
	],
	UI: {
		PAUSED: "暂停",
		"BACK TO MAIN MENU": "返回主菜单",
		OK: "确定",
		NO: "取消",
		"TAP HERE": "点击这里",
		"CLICK HERE": "点击这里",
		"FINAL SCORE": "分数",
		"RESTART GAME": "再来一次",
		OPTIONS: "设置",
		SOUND: "声音",
		MUSIC: "音乐",
		TUTORIAL: "教程",
		BACK: "返回",
		CHARACTERS: "皮肤",
		SELECT: "选定",
		BUY: "购买"
	},
	NAMES: ["兔子", "绵羊", "狗", "猫", "大象"]
};
var _LEVELS_A = [
		[
			["_o0", "_", "x", "_", "_o0"],
			["_o0", "x", "x", "_"],
			["_o0", ">", "_", "<", "_o0"],
			["^0", ">", "<", "^1"],
			["_", "^1", "p", "^0", "_"],
			["^0", "^0", "^1", "^1"],
			["_", "*", "t$?", "*", "_"],
			["^1", "_", "@", "^0"],
			["_", "^0", "xa", "^1", "_"],
			["^0", "^1", "^0", "^1"]
		],
		[
			["^1", "_", "_", "_", "_"],
			["#0", "^0", "^0", "#0"],
			["#0", "#0", "^1", "#0", "#0"],
			["_", "_", "*", ">"],
			["_", "^0", "_", "@", ">"],
			["^1", "_", "^0", "^1"]
		],
		[
			["o1", "_", "_+?", "=", "o1"],
			["o1", "_", "o1", "_"],
			["x", "p", "o1", "p", ">"],
			["<", "t", "t", "_"],
			["<", "@", "@", "@", "*"],
			["_", "x",
				"x", "@"
			],
			["@", "^0", "xa", "^1", "^1"],
			["^1", "_", "_", "^0"]
		],
		[
			["o2", "^1", "_", "^0", "_"],
			["_", "^0", "t", "^1"],
			["_", "p", "_", "_", "o2"],
			["t", "<", "x", "p"],
			["_", "<", "*", ">", "t"],
			["<", "x", "*", ">"],
			["<", "x", "x", "x", ">"],
			["^0", "_", "_", "^0"],
			["x", "^1", "_a", "^0", "^1"],
			["x", "@", "@", "x"]
		],
		[
			["^0", "_", "^1", "_", "^0"],
			["_", "_", "_", "_"],
			["*", ">", "^0", "<", "*"],
			["o3", ">", "<", "o3"],
			["x", "o3", "t", "o3", "_"],
			["_", "@", "@", "x"],
			["=", "@", "x", "@", "_"],
			["_", "*", "_", "*"],
			["x", "_", "_", "=", "_"],
			["@", "*", "@", "*"]
		],
		[
			["_", "^1", "_", "_", "^0"],
			["_", "_", "^0", "_"],
			["*", "_", "<", "_", "o1"],
			["*", "<", "x", "^0"],
			["o1", ">", "*", "@", "^1"],
			["*", ">", "x", "^0"],
			["o1", "x", ">", "^1", "*"],
			["_", "_", ">", "_"],
			["_", "*", "^1", "*", "_"],
			["^0", "_", "^1", "_"]
		],
		[
			["_", "_", "_", "t", "_"],
			["^1", "#0", "#0", ">"],
			["x", "#0", "#0&", "#0", ">"],
			["#0", "t", "t", "#0"],
			["_", "#0", "t", "#0", "_"],
			["#0", "t", "t", "#0"],
			["x", "#0", "#0", "#0", "x"],
			["x", "#0", "#0", "x"],
			["*", "@", "@", "@", "*"],
			["^1", "^0", "^0", "^1"],
			["^0", "_", "^1", "_", "^0"],
			["^1", "^0", "^0", "^1"]
		],
		[
			["_", "^0", "_", "_", "_"],
			["_", "_", "^0", "<"],
			["_", ">", "_", "<", "_"],
			["^0", ">", "x", "_"],
			["_", "t", "x", "_", "_"],
			["_", "_", "^0", "_"]
		],
		[
			["_", "@", ">", "@", "o0"],
			["^1", "<", ">", "^0"],
			["o0", "<", "_", ">", "_"],
			["<", "t", "_", "_"],
			["*", "_", "^0", "_", "*"],
			["_", "_", "_", "_"]
		],
		[
			["_", "_", "x", "x", "_"],
			["x", "@", "_", "#1&"],
			["o2", "t", "o2", "#1", "x"],
			["<", ">", "#1", "_"],
			["<", "_", "*", "#1", "^0"],
			["^0", "^1", "=", "_"],
			["_", "=", "@", "=", "_"],
			["@", "@", "x", "@"]
		],
		[
			["o3", "@", "#2&", ">", "^0"],
			["p", "#2", "p", ">"],
			["=", "#2", "#1", "_", ">"],
			["#2", "_", "#1", "="],
			["#2", "x", "xa", "#1", "@"],
			["<",
				"*", "x", "#1"
			],
			["<", "=", "_", "_", "#1&"],
			["@", "@", "p", "_"],
			["*", "x", "_", "x", "*"],
			["x", "^0", "^1", "x"],
			["o3", "_a", "^0", "^0", "o3"],
			["^1", "^1", "x", "x"]
		],
		[
			["_", "#0&", "_", "_", "o3"],
			["^1", "#0", "_", "o3"],
			[">", "_", "#0", "*", "o3"],
			[">", "^1", "#0", "o3"],
			["*", ">", "_", "#0", "x"],
			["*", ">", "*", "#0"],
			["o3", "*", ">", "_", "#0"],
			["o3", "_", "#1&", "*"],
			["x", "_", "#1", "_", "x"],
			["o3", "#1", "@", "o3"],
			["o3", "#1", "^1", "_", "o3"],
			["#1", "_", "_", "_"]
		],
		[
			["_", "_", "_", "_", "o1"],
			["_", "o1", "_", "o1"],
			["o1", "_", "_", "o1", "x"],
			["o1", "p$", "o1", "x"],
			["x", "o1", "^0", "t", "x"],
			["x", "*", "t", "t"],
			["x", "o1", "t", "_", "t"],
			["x", "o1", "t", "_"],
			["x", "o1", "o1", "t", "xa"],
			["x", "x", "^0", "_"],
			["x", "x", "^1", "^1", "_"],
			["x", "^0", "_", "^0"],
			["x", "^1", "^1", "_", "^1"],
			["^0", "_", "^0", "_"]
		],
		[
			["o0", "_", "_", "_", "o0"],
			["o0", "_", "<", "^0"],
			["x", "_", "<", "*", "_"],
			["^1", "p", "^1", "^0"],
			["^1", "t", "^0", "_", "^1"],
			["_", "t", "_", "_"],
			["o0", "^1", "_", "^1", "*"],
			["_", "@", "^0", "_"],
			["^0", "_", "_a", "x", "^0"],
			["^1", "^0", "^0", "^1"]
		],
		[
			["_", "_", "@", "p", "@"],
			["p", "p", "#0&", "#2"],
			["x", "@", "#0", "#2&",
				"_"
			],
			["_", "#0", "#2", "#1&"],
			["_", "#0", "#2", "#1", "_"],
			["#0", "#2", "#1", "x"],
			["_", "#2", "#1", "x", "x"],
			["^1", "#1", "xa", "x"],
			["_", "#1", "^0", "x", "_"],
			["_", "_", "_", "_"]
		],
		[
			["o2", "_", "^1", "_", "o2"],
			["o2", "x", "o2", "p"],
			["o2", "p", "o2", "x", "o2"],
			["*", "_", "=o2", "_"],
			["o2", "*", "@", "@", "*"],
			["o2", "x", "*", "x"],
			["o2", "ta", "o2", "ta", "*"],
			["^1", "_", "^0", "_"],
			["@", "<", "*", ">", "@"],
			["<", "*", "o2", ">"],
			["<", "_", "x", "^1", ">"],
			["o2", "x", "x", "_"]
		],
		[
			["^0", "_", "#0&", "_", "^0"],
			["<", "#0", "#0", ">"],
			[">", "#0", "#1&", "#0", "<"],
			["#0",
				"#1", "#1", "#0"
			],
			["t", "#0", "#1", "#0", "t"],
			["@", "#0", "#0", "@"],
			["_", "@", "#0", "@", "_"],
			["^1", "^0", "^0", "^1"],
			["o3", "_", "_", "@", "o3"],
			["^0", "^1", "*", "^0"]
		]
	],
	_LEVELS_B = [
		[
			[">", "x", "x", "<", "x"],
			[">", "x", "<", "#2&"],
			["o0", ">", ">", "#2", "x"],
			["o0", ">", "#2", "x"],
			["*", "#1", ">", "#2", "<"],
			[">", "#1", "<", "<"],
			["o0", ">", "#1", "<", "<"],
			["<", "<", "#1&", "<"],
			["<", "*", ">", "<", "^1"],
			["x", "_", ">", "^0"],
			["^0", "^1", "x", "*", "_"],
			["^0", "^1", "^0", "_"]
		],
		[
			["^1", "_", "o1", "_", "^0"],
			["#4&", "_", "_", "#4"],
			["_", "#4", "p", "#4", "_"],
			["_",
				"#4", "#4", "_"
			],
			["_", "=", "#4", "_", "="],
			["@", "_", "_", "@"],
			["_", "*", "_a", "*", "_"],
			["^0", "^1", "^0", "^1"]
		],
		[
			["o2", "^1", "_", "^0", "o2"],
			["_", "^0", "_", "^1"],
			["o2", "t", "p", "t", "_"],
			["t", "<", "t", "p"],
			["<", "*", "@", ">", "^0"],
			["@", "^0", "_", ">"],
			["_", "p", "t", "_a", ">"],
			["@", "@", "^0", "^1"],
			["^0", "t", "t", "x", "^1"],
			["@", "@", "^1", "^0"],
			["^0", "_a", "_", "^1", "x"],
			["x", "^1", "^0", "x"]
		],
		[
			["#2&", "_", "_", "_", "#2"],
			["#2", "_", "#2", "#2"],
			["^1", "#2", "#2", "#2", "_"],
			["<", "#2", "o3", ">"],
			["<", "t", "^1", "t", "<"],
			["_", "t", "t", ">"],
			["x",
				"^0", "o3", "^1", ">"
			],
			["_", "o3", "_", "_"]
		],
		[
			["^0", "_", "_", "_", "_"],
			["_", "#3", "_", "x"],
			["*", "#3&", "#3", "_", "*"],
			["x", "#3", "#0&", "#0"],
			["x", "#3", "#0", "#0", "x"],
			["#3", "<", "_", "x"],
			["_", ">", "x", "x", "*"],
			["<", "*", "*", "_"],
			["*", "x", "x", "^0", "^0"],
			["^1", "^0", "^1", "^1"]
		],
		[
			["x", "x", "o0", "x", "x"],
			["x", "o0", "o0", "x"],
			["*", "_", "=o0", "_", "=0"],
			["*", "@", "=1", "@"],
			["x", "o0", "_", "_", "_"],
			["_", "@", "o0", "@"]
		],
		[
			["o1", "_", "_", "_", "_"],
			["_", "t", "t", "_"],
			["x", "x", "x", "x", "o1"],
			["_", "_", "<", "*"],
			["^0", "@", "<", "_", "o1"],
			["_",
				"<", "_", "^0"
			]
		],
		[
			["=", "x", "^1", "x", "="],
			["=", "_", "#3&", "="],
			["x", "x", "#3", "t", "@"],
			["x", "#3", "t", "_"],
			["*", "t", "#3", ">", "o2"],
			["t", "#3", "x", ">"],
			["@", "@", "x", "*", ">"],
			["^0", "x", "<", "_"],
			["^1", "@", "<", "^0", "^1"],
			["^0", "<", "@", "@"],
			["x", "<", "^0", "^1", "^0"],
			["<", "^1", "^0", "^1"]
		],
		[
			["^0", "_", "^0", "_", "^0"],
			["^1", "_", "_", "^1"],
			["o0", "t", "_", "_", "o0"],
			["_", "<", "t", "o0"],
			["=", "<", "_", "_", "o0"],
			["<", "#1&", ">", "o0"],
			["<", "t", "#1", ">", "o0"],
			["t", "_", "#1", "*"],
			["o0", ">", "_", "#1", "o0"],
			["_", ">", "_", "t"],
			["o0",
				"_", "^1", "_", "_"
			],
			["^0", "_", "_", "^0"]
		],
		[
			["_", "_", "^0", "=", "*"],
			["_", "^1", "_", "_"],
			["*", "_", "_", "_", "*"],
			["o3", "_", "_", "o3"],
			["x", "o3", "p", "o3", "x"],
			["o3", "@", "_", "x"],
			["_", "_", "@", "x", "x"],
			["_", "@", "_", "o3"],
			["*", "_", "@", "_", "_"],
			["^0", "=", "_a", "^1"],
			["o0", "_", "_", "^0", "^1"],
			["_", "^0", "_", "_"]
		],
		[
			["_", "t", "*", "t", "_"],
			["_", "x", "x", ">"],
			["t", "^0", "t", "^1", "t"],
			["<", "^1", "^0", "x"],
			["<", "t", "_", "t", "_"],
			["_", "_", "_", "_"],
			["o2", "_", "^0", "_", "o2"],
			["^0", "^1", "^1", "^0"]
		],
		[
			["#3", "_", "_", "_", "#3&"],
			["#3",
				"#3", "_", "#3"
			],
			["_", "#3", "#3", "#3", "^1"],
			["<", "o1", "#3", ">"],
			[">", "t", "^1", "t", ">"],
			["<", "t", "t", "_"],
			["<", "^1", "o1", "^0", "x"],
			["_", "_", "o1", "_"]
		],
		[
			["o3", "x#0", "_", "<", "_"],
			["x#0", "_", ">", "_"],
			["x#0", "_", "o3", "_", "x#1&"],
			["<", "*", "^0", "x#1"],
			["<", "_", "_", "x#1", "o3"],
			["_", "_", "x#1", "_"],
			["*", "_", "*", "_", "_"],
			["^1", "_", "_", "^0"]
		],
		[
			["^0", "#3&", "_", "_", "_"],
			["_", "#3", "@", "_"],
			["^1", "@", "#3", "^1", "_"],
			["^0", "^1", "#3", "_"],
			["_", "_", "_", "#3", "^0"],
			["_", "@", "_", "_"],
			["^0", "^1", "^1", "^0", "_"],
			["p", "o0", "p",
				"^0"
			],
			["^1", ">", "<", "^1", "x"],
			["^0", "<", ">", "_"],
			["_", ">", "^0", "<", "*"],
			["^1", "<", ">", "^0"],
			["x", "<", "a", ">", "x"],
			["<", "^0", "^1", ">"]
		],
		[
			["_", "^0", "_", "^1", "o2"],
			["^1", "t", "^0", "_"],
			["o2", "_", "_", "p", "_"],
			["p", "x", ">", "t"],
			["t", "<", "*", ">", "_"],
			["<", "*", "x", ">"],
			["<", "x", "x", "x", ">"],
			["^1", "_", "_", "^1"],
			["^0", "^1", "=a", "^0", "x"],
			["x", "@", "@", "x"]
		],
		[
			["o1", "_", "_+?", "_", "_"],
			["o1", "^1", "^0", "^1"],
			["o1", "_", "#3&", "_", "_"],
			["_", "#3", "#3", "_"],
			["_", "_", "#3", "_", "o1"],
			["#0", "^1", "^0", "x#1"],
			["#0&", "#0",
				"t", "x#1", "x#1&"
			],
			["#0", "*", "_", "x#1"],
			["_", "^1", "#2", "^0", "_"],
			["_", "#2", "#2", "_"],
			["_", "_", "#2&", "_", "_"],
			["_", "^1", "^0", "^1"]
		],
		[
			["_", "_", "#2&", "_", "_"],
			[">", "#2", "#2", "<"],
			["^0", "#2", "t", "#2", "^0"],
			["^1", "#2", "#2", "^1"],
			["^0", "#2", "o3", "#2", "^0"],
			["^1", "#2", "#2", "^1"],
			["*", "x", "#2", "x", "*"],
			["o3", "x", "x", "o3"],
			["x", "*", "p", "*", "x"],
			["x", "@", "@", "x"],
			["x", "_", "_", "_", "x"],
			["_", "^1", "_a", "^0"]
		]
	],
	_INTRO_LEVEL = [
		[
			["_", "_", "_", "_", "_"],
			["_o3", "_", "_", "_o3"],
			["_o3", "_o3", "_", "_o3", "_o3"],
			["_o3", "_", "_",
				"_o3"
			],
			["_o3", "_", "_", "_", "_o3"],
			["_", "_$~", "_$~", "_"]
		]
	],
	_TUTORIAL_LEVEL = [
		[
			["_", "_", "_", "_", "_"],
			["_", "_", "_", "_"],
			["o3", "_", "_", "_", "o3"],
			["o3", "_", "_", "o3"],
			["x", "o3", "_", "_!", "x"],
			["x", "_", "_", "_"],
			["^1", "^1", "^1", "^1", "^1"],
			["^1", "_", "_", "^1"],
			["_", "=", "_", "_", "="],
			["_", "_", "_", "_"],
			["o3", "_", "_", "_!", "o3"],
			["_", "_", "_", "_"],
			["o3", "_", "_", "_", "o3"],
			["_", "_#0&", "#2&", "_"],
			["o3", "_#0", "_", "_#2", "o3"],
			["_#0", "_", "_!", "_#2"],
			["_#0", "_o3", ">", "_o3", "_#2"],
			["x", "_", ">", "x"],
			["_o3", "_", "_", ">", "x"],
			["_o3", "_", "_", ">"],
			["_o3", "_", "_", "_", "*"],
			["_o3", "_", "_!", "_o3"],
			["_", "_", "_", "_o3", "x"],
			["x", "x", "x", "x"],
			["_o3", "_", "_", "_o3", "_o3"],
			["_o3", "_", "_!", "_o3"],
			["_", "_", "*", "_", "_"],
			["_", "_", "_", "_"],
			["_o3", "_", "_!", "_", "_o3"],
			["_o3", "t", "t", "_o3"],
			["_", "_", "t", "_", "_"],
			["_", "_", "_", "_"],
			["_", "_", "_", "_", "_"],
			["_", "_", "_!", "_"],
			["_", "_", "_$", "_", "_"],
			["_", "_$", "_$", "_"],
			["_", "_$", "_$", "_$", "o3"],
			["_", "_", "_", "o3"],
			["o3", "_", "_!", "o3", "o3"],
			["o3", "p", "o3", "o3"],
			["_", "_", "_", "_", "_"],
			["_", "_", "_", "_"],
			["o3", "_", "_", "_", "o3"],
			["o3", "_", "_", "o3"],
			["o3", "o3", "_a", "o3", "o3"],
			["o3", "_", "_", "o3"],
			["_", "o3", "_", "o3", "_"],
			["_", "_", "_", "o3"],
			["o3", "_", "_!", "_", "o3"],
			["o3", "_", "_", "o3"],
			["_", "o3", "_", "o3", "_"],
			["_", "o3", "_+", "_"],
			["_", "_", "_", "_", "_"],
			["^1", "^1", "^1", "^1"],
			["^0", "^0", "^0", "^0", "^0"],
			["^1", "^1", "^1", "^1"],
			["_", "_", "_", "_", "_"],
			["_", "_", "_", "_"],
			["o3", "_", "_", "_!", "o3"],
			["o3", "_", "_", "o3"],
			["o3", "@", "@", "@", "o3"],
			["o3", "_", "_", "o3"],
			["x", "_", "_", "_", "o3"],
			["_", "_", "_!", "o3"],
			["o3", "_", "_",
				"o3", "x"
			],
			["o3", "_", "_", "x"],
			["x", "_", "_", "_", "x"],
			["x", "_", "_", "x"],
			["x", "_", "_", "_", "x"],
			["x", "_", "_", "x"]
		]
	];
var _SETTINGS = {
	API: {
		Enabled: !0,
		Log: {
			Events: {
				InitializeGame: !0,
				EndGame: !0,
				Level: {
					Begin: !0,
					End: !0,
					Win: !0,
					Lose: !0,
					Draw: !0
				}
			}
		}
	},
	Ad: {
		Mobile: {
			Preroll: {
				Enabled: !0,
				Duration: 5,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGamePreroll: 40,
						MobileAdInGamePreroll2: 40,
						MobileAdInGamePreroll3: 20
					}
				}
			},
			Header: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameHeader: 40,
						MobileAdInGameHeader2: 40,
						MobileAdInGameHeader3: 20
					}
				}
			},
			Footer: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameFooter: 40,
						MobileAdInGameFooter2: 40,
						MobileAdInGameFooter3: 20
					}
				}
			},
			End: {
				Enabled: !1,
				Duration: 1,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameEnd: 40,
						MobileAdInGameEnd2: 40,
						MobileAdInGameEnd3: 20
					}
				}
			}
		}
	},
	Language: {
		Default: "en"
	},
	DeveloperBranding: {
		Splash: {
			Enabled: !0
		},
		Logo: {
			Enabled: !0,
			Link: "http://marketjs.com",
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	Branding: {
		Splash: {
			Enabled: !1
		},
		Logo: {
			Enabled: !1,
			Link: "http://google.com",
			LinkEnabled: !0,
			NewWindow: !0,
			Width: 280,
			Height: 34
		}
	},
	MoreGames: {
		Enabled: !0,
		Link: "http://www.play68.com",
		NewWindow: !0
	},
	Gamecenter: {
		Enabled: !0
	}
};
var MobileAdInGamePreroll = {
	// ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
	// ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
	// ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
	// ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
	// loading: _STRINGS.Ad.Mobile.Preroll.Loading,
	// close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	// Initialize: function() {
	// 	if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
	// 		var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
	// 			c = b.MobileAdInGamePreroll,
	// 			d =
	// 			c + b.MobileAdInGamePreroll2,
	// 			b = d + b.MobileAdInGamePreroll3,
	// 			e = Math.floor(100 * Math.random());
	// 		console.log("seed: ", e);
	// 		e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
	// 		console.log("Ad rotating preroll enabled")
	// 	} else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
	// 	console.log("selected:", this.selectedOverlayName);
	// 	this.overlay = $("#" + this.selectedOverlayName);
	// 	this.box = $("#" + this.selectedOverlayName + "-Box");
	// 	this.game = $("#game");
	// 	this.boxContents = {
	// 		footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
	// 		header: $("#" + this.selectedOverlayName + "-Box-Header"),
	// 		close: $("#" + this.selectedOverlayName + "-Box-Close"),
	// 		body: $("#" + this.selectedOverlayName + "-Box-Body")
	// 	};
	// 	this.box.width(this.ad_width);
	// 	this.box.height(this.ad_height);
	// 	this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
	// 	this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
	// 		this.boxContents.footer.height()) / 2);
	// 	this.overlay.show(this.Timer(this.ad_duration))
	// },
	// Timer: function(b) {
	// 	var c = b,
	// 		d = setInterval(function() {
	// 			MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
	// 			MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
	// 			c--;
	// 			0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
	// 				MobileAdInGamePreroll.boxContents.footer.text(""))
	// 		}, 1E3)
	// },
	// Close: function() {
	// 	this.boxContents.close.hide();
	// 	this.overlay.hide()
	// }
};
var MobileAdInGameHeader = {
	// ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
	// ad_width: _SETTINGS.Ad.Mobile.Header.Width,
	// ad_height: _SETTINGS.Ad.Mobile.Header.Height,
	// Initialize: function() {
	// 	if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
	// 		var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
	// 			c = b.MobileAdInGameHeader,
	// 			d = c + b.MobileAdInGameHeader2,
	// 			b = d + b.MobileAdInGameHeader3,
	// 			e = Math.floor(100 * Math.random());
	// 		console.log("seed: ", e);
	// 		e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
	// 			e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
	// 		console.log("Ad rotating header enabled")
	// 	} else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
	// 	this.div = $("#" + this.selectedOverlayName);
	// 	this.game = $("#game");
	// 	this.div.width(this.ad_width);
	// 	this.div.height(this.ad_height);
	// 	this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
	// 	this.div.css("top", 0);
	// 	this.div.show(this.Timer(this.ad_duration))
	// },
	// Timer: function(b) {
	// 	var c = setInterval(function() {
	// 		b--;
	// 		0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
	// 	}, 1E3)
	// }
};
var MobileAdInGameFooter = {
	// ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
	// ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
	// ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
	// Initialize: function() {
	// 	if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
	// 		var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
	// 			c = b.MobileAdInGameFooter,
	// 			d = c + b.MobileAdInGameFooter2,
	// 			b = d + b.MobileAdInGameFooter3,
	// 			e = Math.floor(100 * Math.random());
	// 		console.log("seed: ", e);
	// 		e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
	// 			e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
	// 		console.log("Ad rotating footer enabled")
	// 	} else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
	// 	this.div = $("#" + this.selectedOverlayName);
	// 	this.game = $("#game");
	// 	this.div.width(this.ad_width);
	// 	this.div.height(this.ad_height);
	// 	this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
	// 	this.div.css("top", this.game.height() - this.div.height() - 5);
	// 	this.div.show(this.Timer(this.ad_duration))
	// },
	// Timer: function(b) {
	// 	var c = setInterval(function() {
	// 		b--;
	// 		0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
	// 	}, 1E3)
	// }
};
var MobileAdInGameEnd = {
	// ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
	// ad_width: _SETTINGS.Ad.Mobile.End.Width,
	// ad_height: _SETTINGS.Ad.Mobile.End.Height,
	// ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
	// loading: _STRINGS.Ad.Mobile.End.Loading,
	// close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
	// Initialize: function() {
	// 	if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
	// 		var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
	// 			c = b.MobileAdInGameEnd,
	// 			d = c + b.MobileAdInGameEnd2,
	// 			b = d + b.MobileAdInGameEnd3,
	// 			e = Math.floor(100 * Math.random());
	// 		console.log("seed: ", e);
	// 		e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
	// 		console.log("Ad rotating end enabled")
	// 	} else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
	// 	console.log("selected:", this.selectedOverlayName);
	// 	this.overlay = $("#" + this.selectedOverlayName);
	// 	this.box = $("#" + this.selectedOverlayName + "-Box");
	// 	this.game = $("#game");
	// 	this.boxContents = {
	// 		footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
	// 		header: $("#" + this.selectedOverlayName + "-Box-Header"),
	// 		close: $("#" + this.selectedOverlayName + "-Box-Close"),
	// 		body: $("#" + this.selectedOverlayName + "-Box-Body")
	// 	};
	// 	this.box.width(this.ad_width);
	// 	this.box.height(this.ad_height);
	// 	this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
	// 	this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
	// 	this.overlay.show(this.Timer(this.ad_duration))
	// },
	// Timer: function(b) {
	// 	var c = b,
	// 		d = setInterval(function() {
	// 			MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
	// 			MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
	// 			c--;
	// 			0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
	// 		}, 1E3)
	// },
	// Close: function() {
	// 	this.boxContents.close.hide();
	// 	this.overlay.hide()
	// }
};
(function(b, c) {
	function d(b, z, d) {
		if (d === c && 1 === b.nodeType)
			if (d = "data-" + z.replace(rc, "-$1").toLowerCase(), d = b.getAttribute(d), "string" == typeof d) {
				try {
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : sc.test(d) ? l.parseJSON(d) : d
				} catch (e) {}
				l.data(b, z, d)
			} else d = c;
		return d
	}

	function e(b) {
		for (var c in b)
			if (!("data" === c && l.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
		return !0
	}

	function f() {
		return !1
	}

	function g() {
		return !0
	}

	function m(b) {
		return !b || !b.parentNode || 11 === b.parentNode.nodeType
	}

	function p(b,
		c) {
		do b = b[c]; while (b && 1 !== b.nodeType);
		return b
	}

	function r(b, c, d) {
		c = c || 0;
		if (l.isFunction(c)) return l.grep(b, function(b, y) {
			return !!c.call(b, y, b) === d
		});
		if (c.nodeType) return l.grep(b, function(b) {
			return b === c === d
		});
		if ("string" == typeof c) {
			var e = l.grep(b, function(b) {
				return 1 === b.nodeType
			});
			if (uc.test(c)) return l.filter(c, e, !d);
			c = l.filter(c, e)
		}
		return l.grep(b, function(b) {
			return 0 <= l.inArray(b, c) === d
		})
	}

	function u(b) {
		var c = vb.split("|");
		b = b.createDocumentFragment();
		if (b.createElement)
			for (; c.length;) b.createElement(c.pop());
		return b
	}

	function s(b, c) {
		if (1 === c.nodeType && l.hasData(b)) {
			var d, e, f;
			e = l._data(b);
			var g = l._data(c, e),
				v = e.events;
			if (v)
				for (d in delete g.handle, g.events = {}, v) {
					e = 0;
					for (f = v[d].length; e < f; e++) l.event.add(c, d, v[d][e])
				}
			g.data && (g.data = l.extend({}, g.data))
		}
	}

	function n(b, c) {
		var d;
		1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), d = c.nodeName.toLowerCase(), "object" === d ? (c.parentNode && (c.outerHTML = b.outerHTML), l.support.html5Clone && b.innerHTML && !l.trim(c.innerHTML) &&
			(c.innerHTML = b.innerHTML)) : "input" === d && wb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === d ? c.selected = b.defaultSelected : "input" === d || "textarea" === d ? c.defaultValue = b.defaultValue : "script" === d && c.text !== b.text && (c.text = b.text), c.removeAttribute(l.expando))
	}

	function q(b) {
		return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
	}

	function t(b) {
		wb.test(b.type) && (b.defaultChecked =
			b.checked)
	}

	function B(b, c) {
		if (c in b) return c;
		for (var d = c.charAt(0).toUpperCase() + c.slice(1), l = c, e = xb.length; e--;)
			if (c = xb[e] + d, c in b) return c;
		return l
	}

	function K(b, c) {
		return b = c || b, "none" === l.css(b, "display") || !l.contains(b.ownerDocument, b)
	}

	function C(b, c) {
		for (var d, e, f = [], g = 0, v = b.length; g < v; g++) d = b[g], d.style && (f[g] = l._data(d, "olddisplay"), c ? (!f[g] && "none" === d.style.display && (d.style.display = ""), "" === d.style.display && K(d) && (f[g] = l._data(d, "olddisplay", O(d.nodeName)))) : (e = P(d, "display"), !f[g] && "none" !==
			e && l._data(d, "olddisplay", e)));
		for (g = 0; g < v; g++)
			if (d = b[g], d.style && (!c || "none" === d.style.display || "" === d.style.display)) d.style.display = c ? f[g] || "" : "none";
		return b
	}

	function I(b, c, d) {
		return (b = vc.exec(c)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : c
	}

	function Wa(b, c, d, e) {
		c = d === (e ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
		for (var f = 0; 4 > c; c += 2) "margin" === d && (f += l.css(b, d + da[c], !0)), e ? ("content" === d && (f -= parseFloat(P(b, "padding" + da[c])) || 0), "margin" !== d && (f -= parseFloat(P(b, "border" + da[c] + "Width")) || 0)) : (f += parseFloat(P(b,
			"padding" + da[c])) || 0, "padding" !== d && (f += parseFloat(P(b, "border" + da[c] + "Width")) || 0));
		return f
	}

	function D(b, c, d) {
		var e = "width" === c ? b.offsetWidth : b.offsetHeight,
			f = !0,
			g = l.support.boxSizing && "border-box" === l.css(b, "boxSizing");
		if (0 >= e || null == e) {
			e = P(b, c);
			if (0 > e || null == e) e = b.style[c];
			if (xa.test(e)) return e;
			f = g && (l.support.boxSizingReliable || e === b.style[c]);
			e = parseFloat(e) || 0
		}
		return e + Wa(b, c, d || (g ? "border" : "content"), f) + "px"
	}

	function O(b) {
		if (Xa[b]) return Xa[b];
		var c = l("<" + b + ">").appendTo(x.body),
			d = c.css("display");
		c.remove();
		if ("none" === d || "" === d) {
			ka = x.body.appendChild(ka || l.extend(x.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			}));
			if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
			c = la.body.appendChild(la.createElement(b));
			d = P(c, "display");
			x.body.removeChild(ka)
		}
		return Xa[b] = d, d
	}

	function M(b, c, d, e) {
		var f;
		if (l.isArray(c)) l.each(c, function(c, z) {
			d || wc.test(b) ? e(b, z) : M(b + "[" + ("object" == typeof z ? c : "") + "]", z, d, e)
		});
		else if (!d &&
			"object" === l.type(c))
			for (f in c) M(b + "[" + f + "]", c[f], d, e);
		else e(b, c)
	}

	function ya(b) {
		return function(c, d) {
			"string" != typeof c && (d = c, c = "*");
			var e, f, g = c.toLowerCase().split(ea),
				v = 0,
				n = g.length;
			if (l.isFunction(d))
				for (; v < n; v++) e = g[v], (f = /^\+/.test(e)) && (e = e.substr(1) || "*"), e = b[e] = b[e] || [], e[f ? "unshift" : "push"](d)
		}
	}

	function ma(b, d, G, e, l, f) {
		l = l || d.dataTypes[0];
		f = f || {};
		f[l] = !0;
		var g;
		l = b[l];
		for (var n = 0, q = l ? l.length : 0, m = b === Ya; n < q && (m || !g); n++) g = l[n](d, G, e), "string" == typeof g && (!m || f[g] ? g = c : (d.dataTypes.unshift(g),
			g = ma(b, d, G, e, g, f)));
		return (m || !g) && !f["*"] && (g = ma(b, d, G, e, "*", f)), g
	}

	function ra(b, d) {
		var G, e, f = l.ajaxSettings.flatOptions || {};
		for (G in d) d[G] !== c && ((f[G] ? b : e || (e = {}))[G] = d[G]);
		e && l.extend(!0, b, e)
	}

	function yb() {
		try {
			return new b.XMLHttpRequest
		} catch (c) {}
	}

	function zb() {
		return setTimeout(function() {
			za = c
		}, 0), za = l.now()
	}

	function Ab(b, c, d) {
		var e, f = 0,
			g = Aa.length,
			v = l.Deferred().always(function() {
				delete n.elem
			}),
			n = function() {
				for (var c = za || zb(), c = Math.max(0, m.startTime + m.duration - c), d = 1 - (c / m.duration || 0), z =
						0, e = m.tweens.length; z < e; z++) m.tweens[z].run(d);
				return v.notifyWith(b, [m, d, c]), 1 > d && e ? c : (v.resolveWith(b, [m]), !1)
			},
			m = v.promise({
				elem: b,
				props: l.extend({}, c),
				opts: l.extend(!0, {
					specialEasing: {}
				}, d),
				originalProperties: c,
				originalOptions: d,
				startTime: za || zb(),
				duration: d.duration,
				tweens: [],
				createTween: function(c, d) {
					var z = l.Tween(b, m.opts, c, d, m.opts.specialEasing[c] || m.opts.easing);
					return m.tweens.push(z), z
				},
				stop: function(c) {
					for (var d = 0, z = c ? m.tweens.length : 0; d < z; d++) m.tweens[d].run(1);
					return c ? v.resolveWith(b, [m, c]) : v.rejectWith(b, [m, c]), this
				}
			});
		c = m.props;
		d = m.opts.specialEasing;
		var q, t, r, p;
		for (e in c)
			if (q = l.camelCase(e), t = d[q], r = c[e], l.isArray(r) && (t = r[1], r = c[e] = r[0]), e !== q && (c[q] = r, delete c[e]), (p = l.cssHooks[q]) && "expand" in p)
				for (e in r = p.expand(r), delete c[q], r) e in c || (c[e] = r[e], d[e] = t);
			else d[q] = t;
		for (; f < g; f++)
			if (e = Aa[f].call(m, b, c, m.opts)) return e;
		var s = m;
		l.each(c, function(b, c) {
			for (var y = (sa[b] || []).concat(sa["*"]), d = 0, z = y.length; d < z && !y[d].call(s, b, c); d++);
		});
		return l.isFunction(m.opts.start) && m.opts.start.call(b,
			m), l.fx.timer(l.extend(n, {
			anim: m,
			queue: m.opts.queue,
			elem: b
		})), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always)
	}

	function R(b, c, d, e, l) {
		return new R.prototype.init(b, c, d, e, l)
	}

	function Ba(b, c) {
		var d, e = {
				height: b
			},
			l = 0;
		for (c = c ? 1 : 0; 4 > l; l += 2 - c) d = da[l], e["margin" + d] = e["padding" + d] = b;
		return c && (e.opacity = e.width = b), e
	}

	function Bb(b) {
		return l.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
	}
	var Cb, Ca, x = b.document,
		yc = b.location,
		zc = b.navigator,
		Ac =
		b.jQuery,
		Bc = b.$,
		Db = Array.prototype.push,
		Z = Array.prototype.slice,
		Eb = Array.prototype.indexOf,
		Cc = Object.prototype.toString,
		Za = Object.prototype.hasOwnProperty,
		$a = String.prototype.trim,
		l = function(b, c) {
			return new l.fn.init(b, c, Cb)
		},
		Da = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		Dc = /\S/,
		ea = /\s+/,
		Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		Fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Gc = /^[\],:{}\s]*$/,
		Hc = /(?:^|:|,)(?:\s*\[)+/g,
		Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		Kc = /^-ms-/,
		Lc = /-([\da-z])/gi,
		Mc = function(b, c) {
			return (c + "").toUpperCase()
		},
		Ea = function() {
			x.addEventListener ? (x.removeEventListener("DOMContentLoaded", Ea, !1), l.ready()) : "complete" === x.readyState && (x.detachEvent("onreadystatechange", Ea), l.ready())
		},
		Gb = {};
	l.fn = l.prototype = {
		constructor: l,
		init: function(b, d, e) {
			var f, g;
			if (!b) return this;
			if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
			if ("string" == typeof b) {
				"<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? f = [null, b, null] : f = Fc.exec(b);
				if (f && (f[1] || !d)) {
					if (f[1]) return d = d instanceof l ? d[0] : d, g = d && d.nodeType ? d.ownerDocument || d : x, b = l.parseHTML(f[1], g, !0), Fb.test(f[1]) && l.isPlainObject(d) && this.attr.call(b, d, !0), l.merge(this, b);
					if ((d = x.getElementById(f[2])) && d.parentNode) {
						if (d.id !== f[2]) return e.find(b);
						this.length = 1;
						this[0] = d
					}
					return this.context = x, this.selector = b, this
				}
				return !d || d.jquery ? (d || e).find(b) : this.constructor(d).find(b)
			}
			return l.isFunction(b) ? e.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), l.makeArray(b,
				this))
		},
		selector: "",
		jquery: "1.8.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return Z.call(this)
		},
		get: function(b) {
			return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
		},
		pushStack: function(b, c, d) {
			b = l.merge(this.constructor(), b);
			return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + d : c && (b.selector = this.selector + "." + c + "(" + d + ")"), b
		},
		each: function(b, c) {
			return l.each(this, b, c)
		},
		ready: function(b) {
			return l.ready.promise().done(b),
				this
		},
		eq: function(b) {
			return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","))
		},
		map: function(b) {
			return this.pushStack(l.map(this, function(c, d) {
				return b.call(c, d, c)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: Db,
		sort: [].sort,
		splice: [].splice
	};
	l.fn.init.prototype = l.fn;
	l.extend = l.fn.extend = function() {
		var b, d,
			e, f, g, H, v = arguments[0] || {},
			n = 1,
			m = arguments.length,
			q = !1;
		"boolean" == typeof v && (q = v, v = arguments[1] || {}, n = 2);
		"object" != typeof v && !l.isFunction(v) && (v = {});
		for (m === n && (v = this, --n); n < m; n++)
			if (null != (b = arguments[n]))
				for (d in b) e = v[d], f = b[d], v !== f && (q && f && (l.isPlainObject(f) || (g = l.isArray(f))) ? (g ? (g = !1, H = e && l.isArray(e) ? e : []) : H = e && l.isPlainObject(e) ? e : {}, v[d] = l.extend(q, H, f)) : f !== c && (v[d] = f));
		return v
	};
	l.extend({
		noConflict: function(c) {
			return b.$ === l && (b.$ = Bc), c && b.jQuery === l && (b.jQuery = Ac), l
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(b) {
			b ? l.readyWait++ : l.ready(!0)
		},
		ready: function(b) {
			if (!(!0 === b ? --l.readyWait : l.isReady)) {
				if (!x.body) return setTimeout(l.ready, 1);
				l.isReady = !0;
				!0 !== b && 0 < --l.readyWait || (Ca.resolveWith(x, [l]), l.fn.trigger && l(x).trigger("ready").off("ready"))
			}
		},
		isFunction: function(b) {
			return "function" === l.type(b)
		},
		isArray: Array.isArray || function(b) {
			return "array" === l.type(b)
		},
		isWindow: function(b) {
			return null != b && b == b.window
		},
		isNumeric: function(b) {
			return !isNaN(parseFloat(b)) && isFinite(b)
		},
		type: function(b) {
			return null ==
				b ? String(b) : Gb[Cc.call(b)] || "object"
		},
		isPlainObject: function(b) {
			if (!b || "object" !== l.type(b) || b.nodeType || l.isWindow(b)) return !1;
			try {
				if (b.constructor && !Za.call(b, "constructor") && !Za.call(b.constructor.prototype, "isPrototypeOf")) return !1
			} catch (d) {
				return !1
			}
			for (var e in b);
			return e === c || Za.call(b, e)
		},
		isEmptyObject: function(b) {
			for (var c in b) return !1;
			return !0
		},
		error: function(b) {
			throw Error(b);
		},
		parseHTML: function(b, c, d) {
			var e;
			return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c, c = 0), c = c || x, (e =
				Fb.exec(b)) ? [c.createElement(e[1])] : (e = l.buildFragment([b], c, d ? null : []), l.merge([], (e.cacheable ? l.clone(e.fragment) : e.fragment).childNodes)))
		},
		parseJSON: function(c) {
			if (!c || "string" != typeof c) return null;
			c = l.trim(c);
			if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
			if (Gc.test(c.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + c))();
			l.error("Invalid JSON: " + c)
		},
		parseXML: function(y) {
			var d, e;
			if (!y || "string" != typeof y) return null;
			try {
				b.DOMParser ? (e = new DOMParser, d = e.parseFromString(y,
					"text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(y))
			} catch (f) {
				d = c
			}
			return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && l.error("Invalid XML: " + y), d
		},
		noop: function() {},
		globalEval: function(c) {
			c && Dc.test(c) && (b.execScript || function(c) {
				b.eval.call(b, c)
			})(c)
		},
		camelCase: function(b) {
			return b.replace(Kc, "ms-").replace(Lc, Mc)
		},
		nodeName: function(b, c) {
			return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
		},
		each: function(b, d, e) {
			var f, g = 0,
				H = b.length,
				v = H === c || l.isFunction(b);
			if (e)
				if (v)
					for (f in b) {
						if (!1 === d.apply(b[f], e)) break
					} else
						for (; g < H && !1 !== d.apply(b[g++], e););
				else if (v)
				for (f in b) {
					if (!1 === d.call(b[f], f, b[f])) break
				} else
					for (; g < H && !1 !== d.call(b[g], g, b[g++]););
			return b
		},
		trim: $a && !$a.call("\ufeff\u00a0") ? function(b) {
			return null == b ? "" : $a.call(b)
		} : function(b) {
			return null == b ? "" : (b + "").replace(Ec, "")
		},
		makeArray: function(b, c) {
			var d, e = c || [];
			return null != b && (d = l.type(b), null == b.length || "string" === d || "function" === d || "regexp" === d || l.isWindow(b) ? Db.call(e,
				b) : l.merge(e, b)), e
		},
		inArray: function(b, c, d) {
			var e;
			if (c) {
				if (Eb) return Eb.call(c, b, d);
				e = c.length;
				for (d = d ? 0 > d ? Math.max(0, e + d) : d : 0; d < e; d++)
					if (d in c && c[d] === b) return d
			}
			return -1
		},
		merge: function(b, d) {
			var e = d.length,
				l = b.length,
				f = 0;
			if ("number" == typeof e)
				for (; f < e; f++) b[l++] = d[f];
			else
				for (; d[f] !== c;) b[l++] = d[f++];
			return b.length = l, b
		},
		grep: function(b, c, d) {
			var e, l = [],
				f = 0,
				g = b.length;
			for (d = !!d; f < g; f++) e = !!c(b[f], f), d !== e && l.push(b[f]);
			return l
		},
		map: function(b, d, e) {
			var f, g, n = [],
				v = 0,
				m = b.length;
			if (b instanceof l ||
				m !== c && "number" == typeof m && (0 < m && b[0] && b[m - 1] || 0 === m || l.isArray(b)))
				for (; v < m; v++) f = d(b[v], v, e), null != f && (n[n.length] = f);
			else
				for (g in b) f = d(b[g], g, e), null != f && (n[n.length] = f);
			return n.concat.apply([], n)
		},
		guid: 1,
		proxy: function(b, d) {
			var e, f, g;
			return "string" == typeof d && (e = b[d], d = b, b = e), l.isFunction(b) ? (f = Z.call(arguments, 2), g = function() {
				return b.apply(d, f.concat(Z.call(arguments)))
			}, g.guid = b.guid = b.guid || l.guid++, g) : c
		},
		access: function(b, d, e, f, g, n, v) {
			var m, q = null == e,
				t = 0,
				r = b.length;
			if (e && "object" == typeof e) {
				for (t in e) l.access(b,
					d, t, e[t], 1, n, f);
				g = 1
			} else if (f !== c) {
				m = v === c && l.isFunction(f);
				q && (m ? (m = d, d = function(b, c, y) {
					return m.call(l(b), y)
				}) : (d.call(b, f), d = null));
				if (d)
					for (; t < r; t++) d(b[t], e, m ? f.call(b[t], t, d(b[t], e)) : f, v);
				g = 1
			}
			return g ? b : q ? d.call(b) : r ? d(b[0], e) : n
		},
		now: function() {
			return (new Date).getTime()
		}
	});
	l.ready.promise = function(c) {
		if (!Ca)
			if (Ca = l.Deferred(), "complete" === x.readyState) setTimeout(l.ready, 1);
			else if (x.addEventListener) x.addEventListener("DOMContentLoaded", Ea, !1), b.addEventListener("load", l.ready, !1);
		else {
			x.attachEvent("onreadystatechange",
				Ea);
			b.attachEvent("onload", l.ready);
			var d = !1;
			try {
				d = null == b.frameElement && x.documentElement
			} catch (e) {}
			d && d.doScroll && function tc() {
				if (!l.isReady) {
					try {
						d.doScroll("left")
					} catch (b) {
						return setTimeout(tc, 50)
					}
					l.ready()
				}
			}()
		}
		return Ca.promise(c)
	};
	l.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
		Gb["[object " + c + "]"] = c.toLowerCase()
	});
	Cb = l(x);
	var Hb = {};
	l.Callbacks = function(b) {
		var d;
		if ("string" == typeof b) {
			if (!(d = Hb[b])) {
				d = b;
				var e = Hb[d] = {};
				d = (l.each(d.split(ea), function(b,
					c) {
					e[c] = !0
				}), e)
			}
		} else d = l.extend({}, b);
		b = d;
		var f, g, n, v, m, q, t = [],
			r = !b.once && [],
			p = function(c) {
				f = b.memory && c;
				g = !0;
				q = v || 0;
				v = 0;
				m = t.length;
				for (n = !0; t && q < m; q++)
					if (!1 === t[q].apply(c[0], c[1]) && b.stopOnFalse) {
						f = !1;
						break
					}
				n = !1;
				t && (r ? r.length && p(r.shift()) : f ? t = [] : s.disable())
			},
			s = {
				add: function() {
					if (t) {
						var c = t.length;
						(function xc(c) {
							l.each(c, function(c, d) {
								var z = l.type(d);
								"function" === z && (!b.unique || !s.has(d)) ? t.push(d) : d && d.length && "string" !== z && xc(d)
							})
						})(arguments);
						n ? m = t.length : f && (v = c, p(f))
					}
					return this
				},
				remove: function() {
					return t &&
						l.each(arguments, function(b, c) {
							for (var d; - 1 < (d = l.inArray(c, t, d));) t.splice(d, 1), n && (d <= m && m--, d <= q && q--)
						}), this
				},
				has: function(b) {
					return -1 < l.inArray(b, t)
				},
				empty: function() {
					return t = [], this
				},
				disable: function() {
					return t = r = f = c, this
				},
				disabled: function() {
					return !t
				},
				lock: function() {
					return r = c, f || s.disable(), this
				},
				locked: function() {
					return !r
				},
				fireWith: function(b, c) {
					return c = c || [], c = [b, c.slice ? c.slice() : c], t && (!g || r) && (n ? r.push(c) : p(c)), this
				},
				fire: function() {
					return s.fireWith(this, arguments), this
				},
				fired: function() {
					return !!g
				}
			};
		return s
	};
	l.extend({
		Deferred: function(b) {
			var c = [
					["resolve", "done", l.Callbacks("once memory"), "resolved"],
					["reject", "fail", l.Callbacks("once memory"), "rejected"],
					["notify", "progress", l.Callbacks("memory")]
				],
				d = "pending",
				e = {
					state: function() {
						return d
					},
					always: function() {
						return f.done(arguments).fail(arguments), this
					},
					then: function() {
						var b = arguments;
						return l.Deferred(function(d) {
							l.each(c, function(c, y) {
								var z = y[0],
									e = b[c];
								f[y[1]](l.isFunction(e) ? function() {
									var b = e.apply(this, arguments);
									b && l.isFunction(b.promise) ?
										b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[z + "With"](this === f ? d : this, [b])
								} : d[z])
							});
							b = null
						}).promise()
					},
					promise: function(b) {
						return null != b ? l.extend(b, e) : e
					}
				},
				f = {};
			return e.pipe = e.then, l.each(c, function(b, y) {
				var l = y[2],
					g = y[3];
				e[y[1]] = l.add;
				g && l.add(function() {
					d = g
				}, c[b ^ 1][2].disable, c[2][2].lock);
				f[y[0]] = l.fire;
				f[y[0] + "With"] = l.fireWith
			}), e.promise(f), b && b.call(f, f), f
		},
		when: function(b) {
			var c = 0,
				d = Z.call(arguments),
				e = d.length,
				f = 1 !== e || b && l.isFunction(b.promise) ? e : 0,
				g = 1 === f ? b : l.Deferred(),
				v = function(b, c, d) {
					return function(y) {
						c[b] = this;
						d[b] = 1 < arguments.length ? Z.call(arguments) : y;
						d === n ? g.notifyWith(c, d) : --f || g.resolveWith(c, d)
					}
				},
				n, m, q;
			if (1 < e) {
				n = Array(e);
				m = Array(e);
				for (q = Array(e); c < e; c++) d[c] && l.isFunction(d[c].promise) ? d[c].promise().done(v(c, q, d)).fail(g.reject).progress(v(c, m, n)) : --f
			}
			return f || g.resolveWith(q, d), g.promise()
		}
	});
	var Nc = l,
		ab, N, Fa, fa, Ga, Ha, S, ga, Ia, bb, ta, Ib, J = x.createElement("div");
	J.setAttribute("className", "t");
	J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	Fa = J.getElementsByTagName("*");
	fa = J.getElementsByTagName("a")[0];
	fa.style.cssText = "top:1px;float:left;opacity:.5";
	if (!Fa || !Fa.length) ab = {};
	else {
		Ga = x.createElement("select");
		Ha = Ga.appendChild(x.createElement("option"));
		S = J.getElementsByTagName("input")[0];
		N = {
			leadingWhitespace: 3 === J.firstChild.nodeType,
			tbody: !J.getElementsByTagName("tbody").length,
			htmlSerialize: !!J.getElementsByTagName("link").length,
			style: /top/.test(fa.getAttribute("style")),
			hrefNormalized: "/a" === fa.getAttribute("href"),
			opacity: /^0.5/.test(fa.style.opacity),
			cssFloat: !!fa.style.cssFloat,
			checkOn: "on" === S.value,
			optSelected: Ha.selected,
			getSetAttribute: "t" !== J.className,
			enctype: !!x.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== x.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === x.compatMode,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		};
		S.checked = !0;
		N.noCloneChecked = S.cloneNode(!0).checked;
		Ga.disabled = !0;
		N.optDisabled = !Ha.disabled;
		try {
			delete J.test
		} catch (Pd) {
			N.deleteExpando = !1
		}!J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Ib = function() {
			N.noCloneEvent = !1
		}), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Ib));
		S = x.createElement("input");
		S.value = "t";
		S.setAttribute("type", "radio");
		N.radioValue = "t" === S.value;
		S.setAttribute("checked", "checked");
		S.setAttribute("name", "t");
		J.appendChild(S);
		ga = x.createDocumentFragment();
		ga.appendChild(J.lastChild);
		N.checkClone =
			ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
		N.appendChecked = S.checked;
		ga.removeChild(S);
		ga.appendChild(J);
		if (J.attachEvent)
			for (bb in {
					submit: !0,
					change: !0,
					focusin: !0
				}) Ia = "on" + bb, (ta = Ia in J) || (J.setAttribute(Ia, "return;"), ta = "function" == typeof J[Ia]), N[bb + "Bubbles"] = ta;
		ab = (l(function() {
			var c, d, e, l, f = x.getElementsByTagName("body")[0];
			f && (c = x.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(c, f.firstChild), d = x.createElement("div"),
				c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", ta = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", N.reliableHiddenOffsets = ta && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", N.boxSizing =
				4 === d.offsetWidth, N.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(d, null) || {}).top, N.boxSizingReliable = "4px" === (b.getComputedStyle(d, null) || {
					width: "4px"
				}).width, l = x.createElement("div"), l.style.cssText = d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", l.style.marginRight = l.style.width = "0", d.style.width = "1px", d.appendChild(l), N.reliableMarginRight = !parseFloat((b.getComputedStyle(l, null) || {}).marginRight)),
				"undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", N.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), f.removeChild(c))
		}), ga.removeChild(J), Fa = fa = Ga = Ha = S = ga = J = null, N)
	}
	Nc.support = ab;
	var sc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		rc = /([A-Z])/g;
	l.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + (l.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(b) {
			return b = b.nodeType ? l.cache[b[l.expando]] : b[l.expando], !!b && !e(b)
		},
		data: function(b, d, e, f) {
			if (l.acceptData(b)) {
				var g, n, v = l.expando,
					m = "string" == typeof d,
					q = b.nodeType,
					t = q ? l.cache : b,
					r = q ? b[v] : b[v] && v;
				if (r && t[r] && (f || t[r].data) || !(m && e === c)) {
					r || (q ? b[v] = r = l.deletedIds.pop() || l.guid++ : r = v);
					t[r] || (t[r] = {},
						q || (t[r].toJSON = l.noop));
					if ("object" == typeof d || "function" == typeof d) f ? t[r] = l.extend(t[r], d) : t[r].data = l.extend(t[r].data, d);
					return g = t[r], f || (g.data || (g.data = {}), g = g.data), e !== c && (g[l.camelCase(d)] = e), m ? (n = g[d], null == n && (n = g[l.camelCase(d)])) : n = g, n
				}
			}
		},
		removeData: function(b, c, d) {
			if (l.acceptData(b)) {
				var f, g, n, v = b.nodeType,
					m = v ? l.cache : b,
					q = v ? b[l.expando] : l.expando;
				if (m[q]) {
					if (c && (f = d ? m[q] : m[q].data)) {
						l.isArray(c) || (c in f ? c = [c] : (c = l.camelCase(c), c in f ? c = [c] : c = c.split(" ")));
						g = 0;
						for (n = c.length; g < n; g++) delete f[c[g]];
						if (!(d ? e : l.isEmptyObject)(f)) return
					}
					if (d || !(delete m[q].data, !e(m[q]))) v ? l.cleanData([b], !0) : l.support.deleteExpando || m != m.window ? delete m[q] : m[q] = null
				}
			}
		},
		_data: function(b, c, d) {
			return l.data(b, c, d, !0)
		},
		acceptData: function(b) {
			var c = b.nodeName && l.noData[b.nodeName.toLowerCase()];
			return !c || !0 !== c && b.getAttribute("classid") === c
		}
	});
	l.fn.extend({
		data: function(b, e) {
			var f, g, n, H, v, m = this[0],
				q = 0,
				t = null;
			if (b === c) {
				if (this.length && (t = l.data(m), 1 === m.nodeType && !l._data(m, "parsedAttrs"))) {
					n = m.attributes;
					for (v = n.length; q <
						v; q++) H = n[q].name, H.indexOf("data-") || (H = l.camelCase(H.substring(5)), d(m, H, t[H]));
					l._data(m, "parsedAttrs", !0)
				}
				return t
			}
			return "object" == typeof b ? this.each(function() {
				l.data(this, b)
			}) : (f = b.split(".", 2), f[1] = f[1] ? "." + f[1] : "", g = f[1] + "!", l.access(this, function(e) {
				if (e === c) return t = this.triggerHandler("getData" + g, [f[0]]), t === c && m && (t = l.data(m, b), t = d(m, b, t)), t === c && f[1] ? this.data(f[0]) : t;
				f[1] = e;
				this.each(function() {
					var c = l(this);
					c.triggerHandler("setData" + g, f);
					l.data(this, b, e);
					c.triggerHandler("changeData" +
						g, f)
				})
			}, null, e, 1 < arguments.length, null, !1))
		},
		removeData: function(b) {
			return this.each(function() {
				l.removeData(this, b)
			})
		}
	});
	l.extend({
		queue: function(b, c, d) {
			var e;
			if (b) return c = (c || "fx") + "queue", e = l._data(b, c), d && (!e || l.isArray(d) ? e = l._data(b, c, l.makeArray(d)) : e.push(d)), e || []
		},
		dequeue: function(b, c) {
			c = c || "fx";
			var d = l.queue(b, c),
				e = d.length,
				f = d.shift(),
				g = l._queueHooks(b, c),
				v = function() {
					l.dequeue(b, c)
				};
			"inprogress" === f && (f = d.shift(), e--);
			f && ("fx" === c && d.unshift("inprogress"), delete g.stop, f.call(b, v, g));
			!e && g && g.empty.fire()
		},
		_queueHooks: function(b, c) {
			var d = c + "queueHooks";
			return l._data(b, d) || l._data(b, d, {
				empty: l.Callbacks("once memory").add(function() {
					l.removeData(b, c + "queue", !0);
					l.removeData(b, d, !0)
				})
			})
		}
	});
	l.fn.extend({
		queue: function(b, d) {
			var e = 2;
			return "string" != typeof b && (d = b, b = "fx", e--), arguments.length < e ? l.queue(this[0], b) : d === c ? this : this.each(function() {
				var c = l.queue(this, b, d);
				l._queueHooks(this, b);
				"fx" === b && "inprogress" !== c[0] && l.dequeue(this, b)
			})
		},
		dequeue: function(b) {
			return this.each(function() {
				l.dequeue(this,
					b)
			})
		},
		delay: function(b, c) {
			return b = l.fx ? l.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
				var e = setTimeout(c, b);
				d.stop = function() {
					clearTimeout(e)
				}
			})
		},
		clearQueue: function(b) {
			return this.queue(b || "fx", [])
		},
		promise: function(b, d) {
			var e, f = 1,
				g = l.Deferred(),
				n = this,
				v = this.length,
				m = function() {
					--f || g.resolveWith(n, [n])
				};
			"string" != typeof b && (d = b, b = c);
			for (b = b || "fx"; v--;)(e = l._data(n[v], b + "queueHooks")) && e.empty && (f++, e.empty.add(m));
			return m(), g.promise(d)
		}
	});
	var aa, Jb, Kb, Lb = /[\t\r\n]/g,
		Oc = /\r/g,
		Pc = /^(?:button|input)$/i,
		Qc = /^(?:button|input|object|select|textarea)$/i,
		Rc = /^a(?:rea|)$/i,
		Mb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Nb = l.support.getSetAttribute;
	l.fn.extend({
		attr: function(b, c) {
			return l.access(this, l.attr, b, c, 1 < arguments.length)
		},
		removeAttr: function(b) {
			return this.each(function() {
				l.removeAttr(this, b)
			})
		},
		prop: function(b, c) {
			return l.access(this, l.prop, b, c, 1 < arguments.length)
		},
		removeProp: function(b) {
			return b = l.propFix[b] ||
				b, this.each(function() {
					try {
						this[b] = c, delete this[b]
					} catch (d) {}
				})
		},
		addClass: function(b) {
			var c, d, e, f, g, v, n;
			if (l.isFunction(b)) return this.each(function(c) {
				l(this).addClass(b.call(this, c, this.className))
			});
			if (b && "string" == typeof b) {
				c = b.split(ea);
				d = 0;
				for (e = this.length; d < e; d++)
					if (f = this[d], 1 === f.nodeType)
						if (!f.className && 1 === c.length) f.className = b;
						else {
							g = " " + f.className + " ";
							v = 0;
							for (n = c.length; v < n; v++) 0 > g.indexOf(" " + c[v] + " ") && (g += c[v] + " ");
							f.className = l.trim(g)
						}
			}
			return this
		},
		removeClass: function(b) {
			var d,
				e, f, g, n, v, m;
			if (l.isFunction(b)) return this.each(function(c) {
				l(this).removeClass(b.call(this, c, this.className))
			});
			if (b && "string" == typeof b || b === c) {
				d = (b || "").split(ea);
				v = 0;
				for (m = this.length; v < m; v++)
					if (f = this[v], 1 === f.nodeType && f.className) {
						e = (" " + f.className + " ").replace(Lb, " ");
						g = 0;
						for (n = d.length; g < n; g++)
							for (; 0 <= e.indexOf(" " + d[g] + " ");) e = e.replace(" " + d[g] + " ", " ");
						f.className = b ? l.trim(e) : ""
					}
			}
			return this
		},
		toggleClass: function(b, c) {
			var d = typeof b,
				e = "boolean" == typeof c;
			return l.isFunction(b) ? this.each(function(d) {
				l(this).toggleClass(b.call(this,
					d, this.className, c), c)
			}) : this.each(function() {
				if ("string" === d)
					for (var f, g = 0, v = l(this), n = c, m = b.split(ea); f = m[g++];) n = e ? n : !v.hasClass(f), v[n ? "addClass" : "removeClass"](f);
				else if ("undefined" === d || "boolean" === d) this.className && l._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : l._data(this, "__className__") || ""
			})
		},
		hasClass: function(b) {
			b = " " + b + " ";
			for (var c = 0, d = this.length; c < d; c++)
				if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Lb, " ").indexOf(b)) return !0;
			return !1
		},
		val: function(b) {
			var d, e, f, g = this[0];
			if (arguments.length) return f = l.isFunction(b), this.each(function(e) {
				var g, G = l(this);
				if (1 === this.nodeType && (f ? g = b.call(this, e, G.val()) : g = b, null == g ? g = "" : "number" == typeof g ? g += "" : l.isArray(g) && (g = l.map(g, function(b) {
						return null == b ? "" : b + ""
					})), d = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, g, "value") === c)) this.value = g
			});
			if (g) return d = l.valHooks[g.type] || l.valHooks[g.nodeName.toLowerCase()], d && "get" in d && (e = d.get(g,
				"value")) !== c ? e : (e = g.value, "string" == typeof e ? e.replace(Oc, "") : null == e ? "" : e)
		}
	});
	l.extend({
		valHooks: {
			option: {
				get: function(b) {
					var c = b.attributes.value;
					return !c || c.specified ? b.value : b.text
				}
			},
			select: {
				get: function(b) {
					var c, d, e = b.selectedIndex,
						f = [],
						g = b.options,
						n = "select-one" === b.type;
					if (0 > e) return null;
					b = n ? e : 0;
					for (d = n ? e + 1 : g.length; b < d; b++)
						if (c = g[b], c.selected && (l.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !l.nodeName(c.parentNode, "optgroup"))) {
							c = l(c).val();
							if (n) return c;
							f.push(c)
						}
					return n && !f.length && g.length ? l(g[e]).val() : f
				},
				set: function(b, c) {
					var d = l.makeArray(c);
					return l(b).find("option").each(function() {
						this.selected = 0 <= l.inArray(l(this).val(), d)
					}), d.length || (b.selectedIndex = -1), d
				}
			}
		},
		attrFn: {},
		attr: function(b, d, e, f) {
			var g, n, v = b.nodeType;
			if (b && !(3 === v || 8 === v || 2 === v)) {
				if (f && l.isFunction(l.fn[d])) return l(b)[d](e);
				if ("undefined" == typeof b.getAttribute) return l.prop(b, d, e);
				(f = 1 !== v || !l.isXMLDoc(b)) && (d = d.toLowerCase(), n = l.attrHooks[d] || (Mb.test(d) ? Jb :
					aa));
				if (e !== c) {
					if (null === e) {
						l.removeAttr(b, d);
						return
					}
					return n && "set" in n && f && (g = n.set(b, e, d)) !== c ? g : (b.setAttribute(d, e + ""), e)
				}
				return n && "get" in n && f && null !== (g = n.get(b, d)) ? g : (g = b.getAttribute(d), null === g ? c : g)
			}
		},
		removeAttr: function(b, c) {
			var d, e, f, g, n = 0;
			if (c && 1 === b.nodeType)
				for (e = c.split(ea); n < e.length; n++)(f = e[n]) && (d = l.propFix[f] || f, g = Mb.test(f), g || l.attr(b, f, ""), b.removeAttribute(Nb ? f : d), g && d in b && (b[d] = !1))
		},
		attrHooks: {
			type: {
				set: function(b, c) {
					if (Pc.test(b.nodeName) && b.parentNode) l.error("type property can't be changed");
					else if (!l.support.radioValue && "radio" === c && l.nodeName(b, "input")) {
						var d = b.value;
						return b.setAttribute("type", c), d && (b.value = d), c
					}
				}
			},
			value: {
				get: function(b, c) {
					return aa && l.nodeName(b, "button") ? aa.get(b, c) : c in b ? b.value : null
				},
				set: function(b, c, d) {
					if (aa && l.nodeName(b, "button")) return aa.set(b, c, d);
					b.value = c
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(b, d, e) {
			var f, g, n, v = b.nodeType;
			if (b && !(3 === v || 8 === v || 2 === v)) return n = 1 !== v || !l.isXMLDoc(b), n && (d = l.propFix[d] || d, g = l.propHooks[d]), e !== c ? g && "set" in g && (f = g.set(b, e, d)) !== c ? f : b[d] = e : g && "get" in g && null !== (f = g.get(b, d)) ? f : b[d]
		},
		propHooks: {
			tabIndex: {
				get: function(b) {
					var d = b.getAttributeNode("tabindex");
					return d && d.specified ? parseInt(d.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
				}
			}
		}
	});
	Jb = {
		get: function(b,
			d) {
			var e, f = l.prop(b, d);
			return !0 === f || "boolean" != typeof f && (e = b.getAttributeNode(d)) && !1 !== e.nodeValue ? d.toLowerCase() : c
		},
		set: function(b, c, d) {
			var e;
			return !1 === c ? l.removeAttr(b, d) : (e = l.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
		}
	};
	Nb || (Kb = {
		name: !0,
		id: !0,
		coords: !0
	}, aa = l.valHooks.button = {
		get: function(b, d) {
			var e;
			return e = b.getAttributeNode(d), e && (Kb[d] ? "" !== e.value : e.specified) ? e.value : c
		},
		set: function(b, c, d) {
			var e = b.getAttributeNode(d);
			return e || (e = x.createAttribute(d), b.setAttributeNode(e)),
				e.value = c + ""
		}
	}, l.each(["width", "height"], function(b, c) {
		l.attrHooks[c] = l.extend(l.attrHooks[c], {
			set: function(b, d) {
				if ("" === d) return b.setAttribute(c, "auto"), d
			}
		})
	}), l.attrHooks.contenteditable = {
		get: aa.get,
		set: function(b, c, d) {
			"" === c && (c = "false");
			aa.set(b, c, d)
		}
	});
	l.support.hrefNormalized || l.each(["href", "src", "width", "height"], function(b, d) {
		l.attrHooks[d] = l.extend(l.attrHooks[d], {
			get: function(b) {
				b = b.getAttribute(d, 2);
				return null === b ? c : b
			}
		})
	});
	l.support.style || (l.attrHooks.style = {
		get: function(b) {
			return b.style.cssText.toLowerCase() ||
				c
		},
		set: function(b, c) {
			return b.style.cssText = c + ""
		}
	});
	l.support.optSelected || (l.propHooks.selected = l.extend(l.propHooks.selected, {
		get: function(b) {
			b = b.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}));
	l.support.enctype || (l.propFix.enctype = "encoding");
	l.support.checkOn || l.each(["radio", "checkbox"], function() {
		l.valHooks[this] = {
			get: function(b) {
				return null === b.getAttribute("value") ? "on" : b.value
			}
		}
	});
	l.each(["radio", "checkbox"], function() {
		l.valHooks[this] = l.extend(l.valHooks[this], {
			set: function(b, c) {
				if (l.isArray(c)) return b.checked = 0 <= l.inArray(l(b).val(), c)
			}
		})
	});
	var cb = /^(?:textarea|input|select)$/i,
		Ob = /^([^\.]*|)(?:\.(.+)|)$/,
		Sc = /(?:^|\s)hover(\.\S+|)\b/,
		Tc = /^key/,
		Uc = /^(?:mouse|contextmenu)|click/,
		Pb = /^(?:focusinfocus|focusoutblur)$/,
		Qb = function(b) {
			return l.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
		};
	l.event = {
		add: function(b, d, e, f, g) {
			var n, v, m, q, t, r, p, s, u;
			if (!(3 === b.nodeType || 8 === b.nodeType || !d || !e || !(n = l._data(b)))) {
				e.handler && (p = e, e = p.handler, g = p.selector);
				e.guid || (e.guid = l.guid++);
				(m = n.events) || (n.events = m = {});
				(v = n.handle) || (n.handle = v = function(b) {
					return "undefined" != typeof l && (!b || l.event.triggered !== b.type) ? l.event.dispatch.apply(v.elem, arguments) : c
				}, v.elem = b);
				d = l.trim(Qb(d)).split(" ");
				for (n = 0; n < d.length; n++) {
					q = Ob.exec(d[n]) || [];
					t = q[1];
					r = (q[2] || "").split(".").sort();
					u = l.event.special[t] || {};
					t = (g ? u.delegateType : u.bindType) || t;
					u = l.event.special[t] || {};
					q = l.extend({
						type: t,
						origType: q[1],
						data: f,
						handler: e,
						guid: e.guid,
						selector: g,
						needsContext: g && l.expr.match.needsContext.test(g),
						namespace: r.join(".")
					}, p);
					s = m[t];
					if (!s && (s = m[t] = [], s.delegateCount = 0, !u.setup || !1 === u.setup.call(b, f, r, v))) b.addEventListener ? b.addEventListener(t, v, !1) : b.attachEvent && b.attachEvent("on" + t, v);
					u.add && (u.add.call(b, q), q.handler.guid || (q.handler.guid = e.guid));
					g ? s.splice(s.delegateCount++, 0, q) : s.push(q);
					l.event.global[t] = !0
				}
				b = null
			}
		},
		global: {},
		remove: function(b, c, d, e, f) {
			var g, n, m, q, t, r, p, s, u, B, K = l.hasData(b) && l._data(b);
			if (K && (p = K.events)) {
				c = l.trim(Qb(c || "")).split(" ");
				for (g = 0; g < c.length; g++)
					if (n = Ob.exec(c[g]) ||
						[], m = q = n[1], n = n[2], m) {
						s = l.event.special[m] || {};
						m = (e ? s.delegateType : s.bindType) || m;
						u = p[m] || [];
						t = u.length;
						n = n ? RegExp("(^|\\.)" + n.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
						for (r = 0; r < u.length; r++) B = u[r], (f || q === B.origType) && (!d || d.guid === B.guid) && (!n || n.test(B.namespace)) && (!e || e === B.selector || "**" === e && B.selector) && (u.splice(r--, 1), B.selector && u.delegateCount--, s.remove && s.remove.call(b, B));
						0 === u.length && t !== u.length && ((!s.teardown || !1 === s.teardown.call(b, n, K.handle)) && l.removeEvent(b,
							m, K.handle), delete p[m])
					} else
						for (m in p) l.event.remove(b, m + c[g], d, e, !0);
				l.isEmptyObject(p) && (delete K.handle, l.removeData(b, "events", !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(d, e, f, g) {
			if (!f || 3 !== f.nodeType && 8 !== f.nodeType) {
				var n, m, v, q, t, r, p, s = d.type || d;
				q = [];
				if (!Pb.test(s + l.event.triggered) && (0 <= s.indexOf("!") && (s = s.slice(0, -1), n = !0), 0 <= s.indexOf(".") && (q = s.split("."), s = q.shift(), q.sort()), f && !l.event.customEvent[s] || l.event.global[s]))
					if (d = "object" == typeof d ? d[l.expando] ?
						d : new l.Event(s, d) : new l.Event(s), d.type = s, d.isTrigger = !0, d.exclusive = n, d.namespace = q.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, q = 0 > s.indexOf(":") ? "on" + s : "", f) {
						if (d.result = c, d.target || (d.target = f), e = null != e ? l.makeArray(e) : [], e.unshift(d), t = l.event.special[s] || {}, !(t.trigger && !1 === t.trigger.apply(f, e))) {
							p = [
								[f, t.bindType || s]
							];
							if (!g && !t.noBubble && !l.isWindow(f)) {
								m = t.delegateType || s;
								n = Pb.test(m + s) ? f : f.parentNode;
								for (v = f; n; n = n.parentNode) p.push([n, m]),
									v = n;
								v === (f.ownerDocument || x) && p.push([v.defaultView || v.parentWindow || b, m])
							}
							for (m = 0; m < p.length && !d.isPropagationStopped(); m++) n = p[m][0], d.type = p[m][1], (r = (l._data(n, "events") || {})[d.type] && l._data(n, "handle")) && r.apply(n, e), (r = q && n[q]) && l.acceptData(n) && r.apply && !1 === r.apply(n, e) && d.preventDefault();
							return d.type = s, !g && !d.isDefaultPrevented() && (!t._default || !1 === t._default.apply(f.ownerDocument, e)) && ("click" !== s || !l.nodeName(f, "a")) && l.acceptData(f) && q && f[s] && ("focus" !== s && "blur" !== s || 0 !== d.target.offsetWidth) &&
								!l.isWindow(f) && (v = f[q], v && (f[q] = null), l.event.triggered = s, f[s](), l.event.triggered = c, v && (f[q] = v)), d.result
						}
					} else
						for (m in f = l.cache, f) f[m].events && f[m].events[s] && l.event.trigger(d, e, f[m].handle.elem, !0)
			}
		},
		dispatch: function(d) {
			d = l.event.fix(d || b.event);
			var e, f, g, n, m, v, q = (l._data(this, "events") || {})[d.type] || [],
				t = q.delegateCount,
				r = Z.call(arguments),
				s = !d.exclusive && !d.namespace,
				p = l.event.special[d.type] || {},
				u = [];
			r[0] = d;
			d.delegateTarget = this;
			if (!(p.preDispatch && !1 === p.preDispatch.call(this, d))) {
				if (t &&
					(!d.button || "click" !== d.type))
					for (f = d.target; f != this; f = f.parentNode || this)
						if (!0 !== f.disabled || "click" !== d.type) {
							n = {};
							m = [];
							for (e = 0; e < t; e++) g = q[e], v = g.selector, n[v] === c && (n[v] = g.needsContext ? 0 <= l(v, this).index(f) : l.find(v, this, null, [f]).length), n[v] && m.push(g);
							m.length && u.push({
								elem: f,
								matches: m
							})
						}
				q.length > t && u.push({
					elem: this,
					matches: q.slice(t)
				});
				for (e = 0; e < u.length && !d.isPropagationStopped(); e++) {
					n = u[e];
					d.currentTarget = n.elem;
					for (f = 0; f < n.matches.length && !d.isImmediatePropagationStopped(); f++)
						if (g = n.matches[f],
							s || !d.namespace && !g.namespace || d.namespace_re && d.namespace_re.test(g.namespace)) d.data = g.data, d.handleObj = g, g = ((l.event.special[g.origType] || {}).handle || g.handler).apply(n.elem, r), g !== c && (d.result = g, !1 === g && (d.preventDefault(), d.stopPropagation()))
				}
				return p.postDispatch && p.postDispatch.call(this, d), d.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: ["char", "charCode", "key", "keyCode"],
			filter: function(b, c) {
				return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(b, d) {
				var e, f, l, g = d.button,
					n = d.fromElement;
				return null == b.pageX && null != d.clientX && (e = b.target.ownerDocument || x, f = e.documentElement, l = e.body, b.pageX = d.clientX + (f && f.scrollLeft || l && l.scrollLeft || 0) - (f && f.clientLeft ||
					l && l.clientLeft || 0), b.pageY = d.clientY + (f && f.scrollTop || l && l.scrollTop || 0) - (f && f.clientTop || l && l.clientTop || 0)), !b.relatedTarget && n && (b.relatedTarget = n === b.target ? d.toElement : n), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
			}
		},
		fix: function(b) {
			if (b[l.expando]) return b;
			var c, d, e = b,
				f = l.event.fixHooks[b.type] || {},
				g = f.props ? this.props.concat(f.props) : this.props;
			b = l.Event(e);
			for (c = g.length; c;) d = g[--c], b[d] = e[d];
			return b.target || (b.target = e.srcElement || x), 3 === b.target.nodeType && (b.target = b.target.parentNode),
				b.metaKey = !!b.metaKey, f.filter ? f.filter(b, e) : b
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(b, c, d) {
					l.isWindow(this) && (this.onbeforeunload = d)
				},
				teardown: function(b, c) {
					this.onbeforeunload === c && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(b, c, d, e) {
			b = l.extend(new l.Event, d, {
				type: b,
				isSimulated: !0,
				originalEvent: {}
			});
			e ? l.event.trigger(b, null, c) : l.event.dispatch.call(c, b);
			b.isDefaultPrevented() && d.preventDefault()
		}
	};
	l.event.handle =
		l.event.dispatch;
	l.removeEvent = x.removeEventListener ? function(b, c, d) {
		b.removeEventListener && b.removeEventListener(c, d, !1)
	} : function(b, c, d) {
		c = "on" + c;
		b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
	};
	l.Event = function(b, c) {
		if (this instanceof l.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? g : f) : this.type = b, c && l.extend(this, c), this.timeStamp = b && b.timeStamp || l.now(),
			this[l.expando] = !0;
		else return new l.Event(b, c)
	};
	l.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = g;
			var b = this.originalEvent;
			b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = g;
			var b = this.originalEvent;
			b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = g;
			this.stopPropagation()
		},
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f
	};
	l.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(b, c) {
		l.event.special[b] = {
			delegateType: c,
			bindType: c,
			handle: function(b) {
				var d, e = b.relatedTarget,
					y = b.handleObj;
				if (!e || e !== this && !l.contains(this, e)) b.type = y.origType, d = y.handler.apply(this, arguments), b.type = c;
				return d
			}
		}
	});
	l.support.submitBubbles || (l.event.special.submit = {
		setup: function() {
			if (l.nodeName(this, "form")) return !1;
			l.event.add(this, "click._submit keypress._submit", function(b) {
				b = b.target;
				(b = l.nodeName(b, "input") || l.nodeName(b, "button") ?
					b.form : c) && !l._data(b, "_submit_attached") && (l.event.add(b, "submit._submit", function(b) {
					b._submit_bubble = !0
				}), l._data(b, "_submit_attached", !0))
			})
		},
		postDispatch: function(b) {
			b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && l.event.simulate("submit", this.parentNode, b, !0))
		},
		teardown: function() {
			if (l.nodeName(this, "form")) return !1;
			l.event.remove(this, "._submit")
		}
	});
	l.support.changeBubbles || (l.event.special.change = {
		setup: function() {
			if (cb.test(this.nodeName)) {
				if ("checkbox" === this.type ||
					"radio" === this.type) l.event.add(this, "propertychange._change", function(b) {
					"checked" === b.originalEvent.propertyName && (this._just_changed = !0)
				}), l.event.add(this, "click._change", function(b) {
					this._just_changed && !b.isTrigger && (this._just_changed = !1);
					l.event.simulate("change", this, b, !0)
				});
				return !1
			}
			l.event.add(this, "beforeactivate._change", function(b) {
				b = b.target;
				cb.test(b.nodeName) && !l._data(b, "_change_attached") && (l.event.add(b, "change._change", function(b) {
					this.parentNode && !b.isSimulated && !b.isTrigger &&
						l.event.simulate("change", this.parentNode, b, !0)
				}), l._data(b, "_change_attached", !0))
			})
		},
		handle: function(b) {
			var c = b.target;
			if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return l.event.remove(this, "._change"), !cb.test(this.nodeName)
		}
	});
	l.support.focusinBubbles || l.each({
		focus: "focusin",
		blur: "focusout"
	}, function(b, c) {
		var d = 0,
			e = function(b) {
				l.event.simulate(c, b.target, l.event.fix(b), !0)
			};
		l.event.special[c] = {
			setup: function() {
				0 === d++ && x.addEventListener(b, e, !0)
			},
			teardown: function() {
				0 === --d && x.removeEventListener(b, e, !0)
			}
		}
	});
	l.fn.extend({
		on: function(b, d, e, g, n) {
			var m, v;
			if ("object" == typeof b) {
				"string" != typeof d && (e = e || d, d = c);
				for (v in b) this.on(v, d, e, b[v], n);
				return this
			}
			null == e && null == g ? (g = d, e = d = c) : null == g && ("string" == typeof d ? (g = e, e = c) : (g = e, e = d, d = c));
			if (!1 === g) g = f;
			else if (!g) return this;
			return 1 === n && (m = g, g = function(b) {
				return l().off(b), m.apply(this, arguments)
			}, g.guid = m.guid || (m.guid = l.guid++)), this.each(function() {
				l.event.add(this,
					b, g, e, d)
			})
		},
		one: function(b, c, d, e) {
			return this.on(b, c, d, e, 1)
		},
		off: function(b, d, e) {
			var g, n;
			if (b && b.preventDefault && b.handleObj) return g = b.handleObj, l(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
			if ("object" == typeof b) {
				for (n in b) this.off(n, d, b[n]);
				return this
			}
			if (!1 === d || "function" == typeof d) e = d, d = c;
			return !1 === e && (e = f), this.each(function() {
				l.event.remove(this, b, e, d)
			})
		},
		bind: function(b, c, d) {
			return this.on(b, null, c, d)
		},
		unbind: function(b, c) {
			return this.off(b,
				null, c)
		},
		live: function(b, c, d) {
			return l(this.context).on(b, this.selector, c, d), this
		},
		die: function(b, c) {
			return l(this.context).off(b, this.selector || "**", c), this
		},
		delegate: function(b, c, d, e) {
			return this.on(c, b, d, e)
		},
		undelegate: function(b, c, d) {
			return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
		},
		trigger: function(b, c) {
			return this.each(function() {
				l.event.trigger(b, c, this)
			})
		},
		triggerHandler: function(b, c) {
			if (this[0]) return l.event.trigger(b, c, this[0], !0)
		},
		toggle: function(b) {
			var c = arguments,
				d =
				b.guid || l.guid++,
				e = 0,
				f = function(d) {
					var f = (l._data(this, "lastToggle" + b.guid) || 0) % e;
					return l._data(this, "lastToggle" + b.guid, f + 1), d.preventDefault(), c[f].apply(this, arguments) || !1
				};
			for (f.guid = d; e < c.length;) c[e++].guid = d;
			return this.click(f)
		},
		hover: function(b, c) {
			return this.mouseenter(b).mouseleave(c || b)
		}
	});
	l.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
		function(b, c) {
			l.fn[c] = function(b, d) {
				return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
			};
			Tc.test(c) && (l.event.fixHooks[c] = l.event.keyHooks);
			Uc.test(c) && (l.event.fixHooks[c] = l.event.mouseHooks)
		});
	var Vc = b,
		A = function(b, c, d, e) {
			d = d || [];
			c = c || W;
			var f, l, g, n, m = c.nodeType;
			if (!b || "string" != typeof b) return d;
			if (1 !== m && 9 !== m) return [];
			g = Ja(c);
			if (!g && !e && (f = Wc.exec(b)))
				if (n = f[1])
					if (9 === m) {
						l = c.getElementById(n);
						if (!l || !l.parentNode) return d;
						if (l.id === n) return d.push(l), d
					} else {
						if (c.ownerDocument &&
							(l = c.ownerDocument.getElementById(n)) && Rb(c, l) && l.id === n) return d.push(l), d
					} else {
				if (f[2]) return na.apply(d, oa.call(c.getElementsByTagName(b), 0)), d;
				if ((n = f[3]) && Sb && c.getElementsByClassName) return na.apply(d, oa.call(c.getElementsByClassName(n), 0)), d
			}
			return db(b.replace(Ka, "$1"), c, d, e, g)
		},
		ua = function(b) {
			return function(c) {
				return "input" === c.nodeName.toLowerCase() && c.type === b
			}
		},
		Tb = function(b) {
			return function(c) {
				var d = c.nodeName.toLowerCase();
				return ("input" === d || "button" === d) && c.type === b
			}
		},
		ha = function(b) {
			return X(function(c) {
				return c = +c, X(function(d, e) {
					for (var f, l = b([], d.length, c), g = l.length; g--;) d[f = l[g]] && (d[f] = !(e[f] = d[f]))
				})
			})
		},
		La = function(b, c, d) {
			if (b === c) return d;
			for (b = b.nextSibling; b;) {
				if (b === c) return -1;
				b = b.nextSibling
			}
			return 1
		},
		Na = function(b, c) {
			var d, e, f, l, g, n, m;
			if (g = Ub[E][b]) return c ? 0 : g.slice(0);
			g = b;
			n = [];
			for (m = L.preFilter; g;) {
				if (!d || (e = Xc.exec(g))) e && (g = g.slice(e[0].length)), n.push(f = []);
				d = !1;
				if (e = Yc.exec(g)) f.push(d = new Vb(e.shift())), g = g.slice(d.length), d.type = e[0].replace(Ka, " ");
				for (l in L.filter)(e = Ma[l].exec(g)) &&
					(!m[l] || (e = m[l](e, W, !0))) && (f.push(d = new Vb(e.shift())), g = g.slice(d.length), d.type = l, d.matches = e);
				if (!d) break
			}
			return c ? g.length : g ? A.error(b) : Ub(b, n).slice(0)
		},
		fb = function(b, c, d) {
			var e = c.dir,
				f = d && "parentNode" === c.dir,
				l = Zc++;
			return c.first ? function(c, d, l) {
				for (; c = c[e];)
					if (f || 1 === c.nodeType) return b(c, d, l)
			} : function(c, d, g) {
				if (g)
					for (; c = c[e];) {
						if ((f || 1 === c.nodeType) && b(c, d, g)) return c
					} else
						for (var z, n = va + " " + l + " ", G = n + eb; c = c[e];)
							if (f || 1 === c.nodeType) {
								if ((z = c[E]) === G) return c.sizset;
								if ("string" == typeof z &&
									0 === z.indexOf(n)) {
									if (c.sizset) return c
								} else {
									c[E] = G;
									if (b(c, d, g)) return c.sizset = !0, c;
									c.sizset = !1
								}
							}
			}
		},
		gb = function(b) {
			return 1 < b.length ? function(c, d, e) {
				for (var f = b.length; f--;)
					if (!b[f](c, d, e)) return !1;
				return !0
			} : b[0]
		},
		Oa = function(b, c, d, e, f) {
			for (var l, g = [], n = 0, m = b.length, q = null != c; n < m; n++)
				if (l = b[n])
					if (!d || d(l, e, f)) g.push(l), q && c.push(n);
			return g
		},
		hb = function(b, c, d, e, f, l) {
			return e && !e[E] && (e = hb(e)), f && !f[E] && (f = hb(f, l)), X(function(l, g, n, m) {
				if (!l || !f) {
					var q, t, r = [],
						H = [],
						s = g.length;
					if (!(t = l)) {
						t = c || "*";
						var p =
							n.nodeType ? [n] : n,
							u = [];
						q = 0;
						for (var B = p.length; q < B; q++) A(t, p[q], u, l);
						t = u
					}
					p = b && (l || !c) ? Oa(t, r, b, n, m) : t;
					u = d ? f || (l ? b : s || e) ? [] : g : p;
					d && d(p, u, n, m);
					if (e) {
						t = Oa(u, H);
						e(t, [], n, m);
						for (n = t.length; n--;)
							if (q = t[n]) u[H[n]] = !(p[H[n]] = q)
					}
					if (l)
						for (n = b && u.length; n--;) {
							if (q = u[n]) l[r[n]] = !(g[r[n]] = q)
						} else u = Oa(u === g ? u.splice(s, u.length) : u), f ? f(null, g, u, m) : na.apply(g, u)
				}
			})
		},
		ib = function(b) {
			var c, d, e, f = b.length,
				l = L.relative[b[0].type];
			d = l || L.relative[" "];
			for (var g = l ? 1 : 0, n = fb(function(b) {
					return b === c
				}, d, !0), m = fb(function(b) {
					return -1 <
						Wb.call(c, b)
				}, d, !0), q = [function(b, d, e) {
					return !l && (e || d !== Pa) || ((c = d).nodeType ? n(b, d, e) : m(b, d, e))
				}]; g < f; g++)
				if (d = L.relative[b[g].type]) q = [fb(gb(q), d)];
				else {
					d = L.filter[b[g].type].apply(null, b[g].matches);
					if (d[E]) {
						for (e = ++g; e < f && !L.relative[b[e].type]; e++);
						return hb(1 < g && gb(q), 1 < g && b.slice(0, g - 1).join("").replace(Ka, "$1"), d, g < e && ib(b.slice(g, e)), e < f && ib(b = b.slice(e)), e < f && b.join(""))
					}
					q.push(d)
				}
			return gb(q)
		},
		db = function(b, c, d, e, f) {
			var l, g, n, m, q = Na(b);
			if (!e && 1 === q.length) {
				g = q[0] = q[0].slice(0);
				if (2 < g.length &&
					"ID" === (n = g[0]).type && 9 === c.nodeType && !f && L.relative[g[1].type]) {
					c = L.find.ID(n.matches[0].replace(ia, ""), c, f)[0];
					if (!c) return d;
					b = b.slice(g.shift().length)
				}
				for (l = Ma.POS.test(b) ? -1 : g.length - 1; 0 <= l; l--) {
					n = g[l];
					if (L.relative[m = n.type]) break;
					if (m = L.find[m])
						if (e = m(n.matches[0].replace(ia, ""), jb.test(g[0].type) && c.parentNode || c, f)) {
							g.splice(l, 1);
							b = e.length && g.join("");
							if (!b) return na.apply(d, oa.call(e, 0)), d;
							break
						}
				}
			}
			return kb(b, q)(e, c, f, d, jb.test(b)), d
		},
		Xb = function() {},
		eb, lb, L, Qa, Ja, Rb, kb, mb, wa, Pa, Yb = !0,
		E = ("sizcache" + Math.random()).replace(".", ""),
		Vb = String,
		W = Vc.document,
		V = W.documentElement,
		va = 0,
		Zc = 0,
		$c = [].pop,
		na = [].push,
		oa = [].slice,
		Wb = [].indexOf || function(b) {
			for (var c = 0, d = this.length; c < d; c++)
				if (this[c] === b) return c;
			return -1
		},
		X = function(b, c) {
			return b[E] = null == c || c, b
		},
		nb = function() {
			var b = {},
				c = [];
			return X(function(d, e) {
				return c.push(d) > L.cacheLength && delete b[c.shift()], b[d] = e
			}, b)
		},
		Zb = nb(),
		Ub = nb(),
		$b = nb(),
		ac = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
		"(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
		ob = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + ac + ")|[^:]|\\\\.)*|.*))\\)|)",
		Ka = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
		ad = RegExp(ob),
		Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
		jb = /[\x20\t\r\n\f]*[+~]/,
		bd = /h\d/i,
		cd = /input|select|textarea|button/i,
		ia = /\\(?!\\)/g,
		Ma = {
			ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
			CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
			NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
			TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
			ATTR: RegExp("^" + ac),
			PSEUDO: RegExp("^" + ob),
			POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
			CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
				"i"),
			needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
		},
		ba = function(b) {
			var c = W.createElement("div");
			try {
				return b(c)
			} catch (d) {
				return !1
			} finally {}
		},
		dd = ba(function(b) {
			return b.appendChild(W.createComment("")), !b.getElementsByTagName("*").length
		}),
		ed = ba(function(b) {
			return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
		}),
		fd = ba(function(b) {
			b.innerHTML = "<select></select>";
			b = typeof b.lastChild.getAttribute("multiple");
			return "boolean" !== b && "string" !== b
		}),
		Sb = ba(function(b) {
			return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
		}),
		gd = ba(function(b) {
			b.id = E + 0;
			b.innerHTML = "<a name='" + E + "'></a><div name='" + E + "'></div>";
			V.insertBefore(b, V.firstChild);
			var c = W.getElementsByName &&
				W.getElementsByName(E).length === 2 + W.getElementsByName(E + 0).length;
			return lb = !W.getElementById(E), V.removeChild(b), c
		});
	try {
		oa.call(V.childNodes, 0)[0].nodeType
	} catch (Qd) {
		oa = function(b) {
			for (var c, d = []; c = this[b]; b++) d.push(c);
			return d
		}
	}
	A.matches = function(b, c) {
		return A(b, null, null, c)
	};
	A.matchesSelector = function(b, c) {
		return 0 < A(c, null, null, [b]).length
	};
	Qa = A.getText = function(b) {
		var c, d = "",
			e = 0;
		if (c = b.nodeType)
			if (1 === c || 9 === c || 11 === c) {
				if ("string" == typeof b.textContent) return b.textContent;
				for (b = b.firstChild; b; b =
					b.nextSibling) d += Qa(b)
			} else {
				if (3 === c || 4 === c) return b.nodeValue
			} else
			for (; c = b[e]; e++) d += Qa(c);
		return d
	};
	Ja = A.isXML = function(b) {
		return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
	};
	Rb = A.contains = V.contains ? function(b, c) {
		var d = 9 === b.nodeType ? b.documentElement : b,
			e = c && c.parentNode;
		return b === e || !(!e || !(1 === e.nodeType && d.contains && d.contains(e)))
	} : V.compareDocumentPosition ? function(b, c) {
		return c && !!(b.compareDocumentPosition(c) & 16)
	} : function(b, c) {
		for (; c = c.parentNode;)
			if (c === b) return !0;
		return !1
	};
	A.attr = function(b, c) {
		var d, e = Ja(b);
		return e || (c = c.toLowerCase()), (d = L.attrHandle[c]) ? d(b) : e || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
	};
	L = A.selectors = {
		cacheLength: 50,
		createPseudo: X,
		match: Ma,
		attrHandle: ed ? {} : {
			href: function(b) {
				return b.getAttribute("href", 2)
			},
			type: function(b) {
				return b.getAttribute("type")
			}
		},
		find: {
			ID: lb ? function(b, c, d) {
				if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ?
					[b] : []
			} : function(b, c, d) {
				if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
			},
			TAG: dd ? function(b, c) {
				if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
			} : function(b, c) {
				var d = c.getElementsByTagName(b);
				if ("*" === b) {
					for (var e, f = [], l = 0; e = d[l]; l++) 1 === e.nodeType && f.push(e);
					return f
				}
				return d
			},
			NAME: gd && function(b, c) {
				if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
			},
			CLASS: Sb && function(b, c, d) {
				if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
			}
		},
		relative: {
			">": {
				dir: "parentNode",
				first: !0
			},
			" ": {
				dir: "parentNode"
			},
			"+": {
				dir: "previousSibling",
				first: !0
			},
			"~": {
				dir: "previousSibling"
			}
		},
		preFilter: {
			ATTR: function(b) {
				return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
			},
			CHILD: function(b) {
				return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || A.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
					2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && A.error(b[0]), b
			},
			PSEUDO: function(b) {
				var c, d;
				if (Ma.CHILD.test(b[0])) return null;
				if (b[3]) b[2] = b[3];
				else if (c = b[4]) ad.test(c) && (d = Na(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
				return b.slice(0, 3)
			}
		},
		filter: {
			ID: lb ? function(b) {
				return b = b.replace(ia, ""),
					function(c) {
						return c.getAttribute("id") === b
					}
			} : function(b) {
				return b = b.replace(ia, ""),
					function(c) {
						return (c = "undefined" !== typeof c.getAttributeNode &&
							c.getAttributeNode("id")) && c.value === b
					}
			},
			TAG: function(b) {
				return "*" === b ? function() {
					return !0
				} : (b = b.replace(ia, "").toLowerCase(), function(c) {
					return c.nodeName && c.nodeName.toLowerCase() === b
				})
			},
			CLASS: function(b) {
				var c = Zb[E][b];
				return c || (c = Zb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
					function(b) {
						return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
					}
			},
			ATTR: function(b, c, d) {
				return function(e) {
					e = A.attr(e, b);
					return null == e ? "!=" === c : c ? (e += "", "=" ===
						c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.substr(e.length - d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.substr(0, d.length + 1) === d + "-" : !1) : !0
				}
			},
			CHILD: function(b, c, d, e) {
				return "nth" === b ? function(b) {
					var c, f;
					c = b.parentNode;
					if (1 === d && 0 === e) return !0;
					if (c) {
						f = 0;
						for (c = c.firstChild; c && !(1 === c.nodeType && (f++, b === c)); c = c.nextSibling);
					}
					return f -= e, f === d || 0 === f % d && 0 <= f / d
				} : function(c) {
					var d = c;
					switch (b) {
						case "only":
						case "first":
							for (; d = d.previousSibling;)
								if (1 ===
									d.nodeType) return !1;
							if ("first" === b) return !0;
							d = c;
						case "last":
							for (; d = d.nextSibling;)
								if (1 === d.nodeType) return !1;
							return !0
					}
				}
			},
			PSEUDO: function(b, c) {
				var d, e = L.pseudos[b] || L.setFilters[b.toLowerCase()] || A.error("unsupported pseudo: " + b);
				return e[E] ? e(c) : 1 < e.length ? (d = [b, b, "", c], L.setFilters.hasOwnProperty(b.toLowerCase()) ? X(function(b, d) {
					for (var f, l = e(b, c), g = l.length; g--;) f = Wb.call(b, l[g]), b[f] = !(d[f] = l[g])
				}) : function(b) {
					return e(b, 0, d)
				}) : e
			}
		},
		pseudos: {
			not: X(function(b) {
				var c = [],
					d = [],
					e = kb(b.replace(Ka, "$1"));
				return e[E] ? X(function(b, c, d, f) {
					f = e(b, null, f, []);
					for (var l = b.length; l--;)
						if (d = f[l]) b[l] = !(c[l] = d)
				}) : function(b, f, l) {
					return c[0] = b, e(c, null, l, d), !d.pop()
				}
			}),
			has: X(function(b) {
				return function(c) {
					return 0 < A(b, c).length
				}
			}),
			contains: X(function(b) {
				return function(c) {
					return -1 < (c.textContent || c.innerText || Qa(c)).indexOf(b)
				}
			}),
			enabled: function(b) {
				return !1 === b.disabled
			},
			disabled: function(b) {
				return !0 === b.disabled
			},
			checked: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && !!b.checked || "option" ===
					c && !!b.selected
			},
			selected: function(b) {
				return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
			},
			parent: function(b) {
				return !L.pseudos.empty(b)
			},
			empty: function(b) {
				var c;
				for (b = b.firstChild; b;) {
					if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
					b = b.nextSibling
				}
				return !0
			},
			header: function(b) {
				return bd.test(b.nodeName)
			},
			text: function(b) {
				var c, d;
				return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
			},
			radio: ua("radio"),
			checkbox: ua("checkbox"),
			file: ua("file"),
			password: ua("password"),
			image: ua("image"),
			submit: Tb("submit"),
			reset: Tb("reset"),
			button: function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && "button" === b.type || "button" === c
			},
			input: function(b) {
				return cd.test(b.nodeName)
			},
			focus: function(b) {
				var c = b.ownerDocument;
				return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
			},
			active: function(b) {
				return b === b.ownerDocument.activeElement
			},
			first: ha(function() {
				return [0]
			}),
			last: ha(function(b, c) {
				return [c - 1]
			}),
			eq: ha(function(b,
				c, d) {
				return [0 > d ? d + c : d]
			}),
			even: ha(function(b, c) {
				for (var d = 0; d < c; d += 2) b.push(d);
				return b
			}),
			odd: ha(function(b, c) {
				for (var d = 1; d < c; d += 2) b.push(d);
				return b
			}),
			lt: ha(function(b, c, d) {
				for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
				return b
			}),
			gt: ha(function(b, c, d) {
				for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
				return b
			})
		}
	};
	mb = V.compareDocumentPosition ? function(b, c) {
		return b === c ? (wa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
	} : function(b, c) {
		if (b === c) return wa = !0, 0;
		if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
		var d, e, f = [],
			l = [];
		d = b.parentNode;
		e = c.parentNode;
		var g = d;
		if (d === e) return La(b, c);
		if (!d) return -1;
		if (!e) return 1;
		for (; g;) f.unshift(g), g = g.parentNode;
		for (g = e; g;) l.unshift(g), g = g.parentNode;
		d = f.length;
		e = l.length;
		for (g = 0; g < d && g < e; g++)
			if (f[g] !== l[g]) return La(f[g], l[g]);
		return g === d ? La(b, l[g], -1) : La(f[g], c, 1)
	};
	[0, 0].sort(mb);
	Yb = !wa;
	A.uniqueSort = function(b) {
		var c, d = 1;
		wa = Yb;
		b.sort(mb);
		if (wa)
			for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
		return b
	};
	A.error = function(b) {
		throw Error("Syntax error, unrecognized expression: " + b);
	};
	kb = A.compile = function(b, c) {
		var d, e = [],
			f = [],
			l = $b[E][b];
		if (!l) {
			c || (c = Na(b));
			for (d = c.length; d--;) l = ib(c[d]), l[E] ? e.push(l) : f.push(l);
			var g = 0 < e.length,
				n = 0 < f.length,
				m = function(b, c, d, l, y) {
					var z, q, t = [],
						G = 0,
						r = "0",
						s = b && [],
						p = null != y,
						u = Pa,
						H = b || n && L.find.TAG("*", y && c.parentNode || c),
						B = va += null == u ? 1 : Math.E;
					for (p && (Pa = c !== W && c, eb = m.el); null != (y = H[r]); r++) {
						if (n && y) {
							for (z = 0; q = f[z]; z++)
								if (q(y, c, d)) {
									l.push(y);
									break
								}
							p && (va = B, eb =
								++m.el)
						}
						g && ((y = !q && y) && G--, b && s.push(y))
					}
					G += r;
					if (g && r !== G) {
						for (z = 0; q = e[z]; z++) q(s, t, c, d);
						if (b) {
							if (0 < G)
								for (; r--;) !s[r] && !t[r] && (t[r] = $c.call(l));
							t = Oa(t)
						}
						na.apply(l, t);
						p && !b && 0 < t.length && 1 < G + e.length && A.uniqueSort(l)
					}
					return p && (va = B, Pa = u), s
				};
			d = (m.el = 0, g ? X(m) : m);
			l = $b(b, d)
		}
		return l
	};
	if (W.querySelectorAll) {
		var bc, hd = db,
			id = /'|\\/g,
			jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
			Y = [":focus"],
			Ra = [":active", ":focus"],
			Sa = V.matchesSelector || V.mozMatchesSelector || V.webkitMatchesSelector || V.oMatchesSelector ||
			V.msMatchesSelector;
		ba(function(b) {
			b.innerHTML = "<select><option selected=''></option></select>";
			b.querySelectorAll("[selected]").length || Y.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
			b.querySelectorAll(":checked").length || Y.push(":checked")
		});
		ba(function(b) {
			b.innerHTML = "<p test=''></p>";
			b.querySelectorAll("[test^='']").length && Y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
			b.innerHTML = "<input type='hidden'/>";
			b.querySelectorAll(":enabled").length || Y.push(":enabled",
				":disabled")
		});
		Y = RegExp(Y.join("|"));
		db = function(b, c, d, e, f) {
			if (!e && !f && (!Y || !Y.test(b))) {
				var l, g, n = !0,
					m = E;
				g = c;
				l = 9 === c.nodeType && b;
				if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
					l = Na(b);
					(n = c.getAttribute("id")) ? m = n.replace(id, "\\$&"): c.setAttribute("id", m);
					m = "[id='" + m + "'] ";
					for (g = l.length; g--;) l[g] = m + l[g].join("");
					g = jb.test(b) && c.parentNode || c;
					l = l.join(",")
				}
				if (l) try {
					return na.apply(d, oa.call(g.querySelectorAll(l), 0)), d
				} catch (q) {} finally {
					n || c.removeAttribute("id")
				}
			}
			return hd(b, c, d, e, f)
		};
		Sa &&
			(ba(function(b) {
				bc = Sa.call(b, "div");
				try {
					Sa.call(b, "[test!='']:sizzle"), Ra.push("!=", ob)
				} catch (c) {}
			}), Ra = RegExp(Ra.join("|")), A.matchesSelector = function(b, c) {
				c = c.replace(jd, "='$1']");
				if (!Ja(b) && !Ra.test(c) && (!Y || !Y.test(c))) try {
					var d = Sa.call(b, c);
					if (d || bc || b.document && 11 !== b.document.nodeType) return d
				} catch (e) {}
				return 0 < A(c, null, null, [b]).length
			})
	}
	L.pseudos.nth = L.pseudos.eq;
	L.filters = Xb.prototype = L.pseudos;
	L.setFilters = new Xb;
	A.attr = l.attr;
	l.find = A;
	l.expr = A.selectors;
	l.expr[":"] = l.expr.pseudos;
	l.unique =
		A.uniqueSort;
	l.text = A.getText;
	l.isXMLDoc = A.isXML;
	l.contains = A.contains;
	var kd = /Until$/,
		ld = /^(?:parents|prev(?:Until|All))/,
		uc = /^.[^:#\[\.,]*$/,
		cc = l.expr.match.needsContext,
		md = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	l.fn.extend({
		find: function(b) {
			var c, d, e, f, g, n, m = this;
			if ("string" != typeof b) return l(b).filter(function() {
				c = 0;
				for (d = m.length; c < d; c++)
					if (l.contains(m[c], this)) return !0
			});
			n = this.pushStack("", "find", b);
			c = 0;
			for (d = this.length; c < d; c++)
				if (e = n.length, l.find(b, this[c], n), 0 < c)
					for (f = e; f < n.length; f++)
						for (g =
							0; g < e; g++)
							if (n[g] === n[f]) {
								n.splice(f--, 1);
								break
							}
			return n
		},
		has: function(b) {
			var c, d = l(b, this),
				e = d.length;
			return this.filter(function() {
				for (c = 0; c < e; c++)
					if (l.contains(this, d[c])) return !0
			})
		},
		not: function(b) {
			return this.pushStack(r(this, b, !1), "not", b)
		},
		filter: function(b) {
			return this.pushStack(r(this, b, !0), "filter", b)
		},
		is: function(b) {
			return !!b && ("string" == typeof b ? cc.test(b) ? 0 <= l(b, this.context).index(this[0]) : 0 < l.filter(b, this).length : 0 < this.filter(b).length)
		},
		closest: function(b, c) {
			for (var d, e = 0, f = this.length,
					g = [], n = cc.test(b) || "string" != typeof b ? l(b, c || this.context) : 0; e < f; e++)
				for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
					if (n ? -1 < n.index(d) : l.find.matchesSelector(d, b)) {
						g.push(d);
						break
					}
					d = d.parentNode
				}
			return g = 1 < g.length ? l.unique(g) : g, this.pushStack(g, "closest", b)
		},
		index: function(b) {
			return b ? "string" == typeof b ? l.inArray(this[0], l(b)) : l.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(b, c) {
			var d = "string" == typeof b ? l(b, c) : l.makeArray(b && b.nodeType ?
					[b] : b),
				e = l.merge(this.get(), d);
			return this.pushStack(m(d[0]) || m(e[0]) ? e : l.unique(e))
		},
		addBack: function(b) {
			return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
		}
	});
	l.fn.andSelf = l.fn.addBack;
	l.each({
		parent: function(b) {
			return (b = b.parentNode) && 11 !== b.nodeType ? b : null
		},
		parents: function(b) {
			return l.dir(b, "parentNode")
		},
		parentsUntil: function(b, c, d) {
			return l.dir(b, "parentNode", d)
		},
		next: function(b) {
			return p(b, "nextSibling")
		},
		prev: function(b) {
			return p(b, "previousSibling")
		},
		nextAll: function(b) {
			return l.dir(b,
				"nextSibling")
		},
		prevAll: function(b) {
			return l.dir(b, "previousSibling")
		},
		nextUntil: function(b, c, d) {
			return l.dir(b, "nextSibling", d)
		},
		prevUntil: function(b, c, d) {
			return l.dir(b, "previousSibling", d)
		},
		siblings: function(b) {
			return l.sibling((b.parentNode || {}).firstChild, b)
		},
		children: function(b) {
			return l.sibling(b.firstChild)
		},
		contents: function(b) {
			return l.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : l.merge([], b.childNodes)
		}
	}, function(b, c) {
		l.fn[b] = function(d, e) {
			var f = l.map(this, c, d);
			return kd.test(b) ||
				(e = d), e && "string" == typeof e && (f = l.filter(e, f)), f = 1 < this.length && !md[b] ? l.unique(f) : f, 1 < this.length && ld.test(b) && (f = f.reverse()), this.pushStack(f, b, Z.call(arguments).join(","))
		}
	});
	l.extend({
		filter: function(b, c, d) {
			return d && (b = ":not(" + b + ")"), 1 === c.length ? l.find.matchesSelector(c[0], b) ? [c[0]] : [] : l.find.matches(b, c)
		},
		dir: function(b, d, e) {
			var f = [];
			for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !l(b).is(e));) 1 === b.nodeType && f.push(b), b = b[d];
			return f
		},
		sibling: function(b, c) {
			for (var d = []; b; b = b.nextSibling) 1 ===
				b.nodeType && b !== c && d.push(b);
			return d
		}
	});
	var vb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		nd = / jQuery\d+="(?:null|\d+)"/g,
		pb = /^\s+/,
		dc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ec = /<([\w:]+)/,
		od = /<tbody/i,
		pd = /<|&#?\w+;/,
		qd = /<(?:script|style|link)/i,
		rd = /<(?:script|object|embed|option|style)/i,
		qb = RegExp("<(?:" + vb + ")[\\s/>]", "i"),
		wb = /^(?:checkbox|radio)$/,
		fc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		sd = /\/(java|ecma)script/i,
		td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		U = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		gc = u(x),
		rb = gc.appendChild(x.createElement("div"));
	U.optgroup =
		U.option;
	U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
	U.th = U.td;
	l.support.htmlSerialize || (U._default = [1, "X<div>", "</div>"]);
	l.fn.extend({
		text: function(b) {
			return l.access(this, function(b) {
				return b === c ? l.text(this) : this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(b))
			}, null, b, arguments.length)
		},
		wrapAll: function(b) {
			if (l.isFunction(b)) return this.each(function(c) {
				l(this).wrapAll(b.call(this, c))
			});
			if (this[0]) {
				var c = l(b, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && c.insertBefore(this[0]);
				c.map(function() {
					for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
					return b
				}).append(this)
			}
			return this
		},
		wrapInner: function(b) {
			return l.isFunction(b) ? this.each(function(c) {
				l(this).wrapInner(b.call(this, c))
			}) : this.each(function() {
				var c = l(this),
					d = c.contents();
				d.length ? d.wrapAll(b) : c.append(b)
			})
		},
		wrap: function(b) {
			var c = l.isFunction(b);
			return this.each(function(d) {
				l(this).wrapAll(c ? b.call(this, d) : b)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				l.nodeName(this, "body") ||
					l(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(b) {
				(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(b) {
				(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
			})
		},
		before: function() {
			if (!m(this[0])) return this.domManip(arguments, !1, function(b) {
				this.parentNode.insertBefore(b, this)
			});
			if (arguments.length) {
				var b = l.clean(arguments);
				return this.pushStack(l.merge(b,
					this), "before", this.selector)
			}
		},
		after: function() {
			if (!m(this[0])) return this.domManip(arguments, !1, function(b) {
				this.parentNode.insertBefore(b, this.nextSibling)
			});
			if (arguments.length) {
				var b = l.clean(arguments);
				return this.pushStack(l.merge(this, b), "after", this.selector)
			}
		},
		remove: function(b, c) {
			for (var d, e = 0; null != (d = this[e]); e++)
				if (!b || l.filter(b, [d]).length) !c && 1 === d.nodeType && (l.cleanData(d.getElementsByTagName("*")), l.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for (var b,
					c = 0; null != (b = this[c]); c++)
				for (1 === b.nodeType && l.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(b, c) {
			return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
				return l.clone(this, b, c)
			})
		},
		html: function(b) {
			return l.access(this, function(b) {
				var d = this[0] || {},
					e = 0,
					f = this.length;
				if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
				if ("string" == typeof b && !qd.test(b) && (l.support.htmlSerialize || !qb.test(b)) && (l.support.leadingWhitespace || !pb.test(b)) &&
					!U[(ec.exec(b) || ["", ""])[1].toLowerCase()]) {
					b = b.replace(dc, "<$1></$2>");
					try {
						for (; e < f; e++) d = this[e] || {}, 1 === d.nodeType && (l.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
						d = 0
					} catch (g) {}
				}
				d && this.empty().append(b)
			}, null, b, arguments.length)
		},
		replaceWith: function(b) {
			return m(this[0]) ? this.length ? this.pushStack(l(l.isFunction(b) ? b() : b), "replaceWith", b) : this : l.isFunction(b) ? this.each(function(c) {
				var d = l(this),
					e = d.html();
				d.replaceWith(b.call(this, c, e))
			}) : ("string" != typeof b && (b = l(b).detach()), this.each(function() {
				var c =
					this.nextSibling,
					d = this.parentNode;
				l(this).remove();
				c ? l(c).before(b) : l(d).append(b)
			}))
		},
		detach: function(b) {
			return this.remove(b, !0)
		},
		domManip: function(b, d, e) {
			b = [].concat.apply([], b);
			var f, g, n, m = 0,
				q = b[0],
				t = [],
				r = this.length;
			if (!l.support.checkClone && 1 < r && "string" == typeof q && fc.test(q)) return this.each(function() {
				l(this).domManip(b, d, e)
			});
			if (l.isFunction(q)) return this.each(function(f) {
				var g = l(this);
				b[0] = q.call(this, f, d ? g.html() : c);
				g.domManip(b, d, e)
			});
			if (this[0]) {
				f = l.buildFragment(b, this, t);
				n = f.fragment;
				g = n.firstChild;
				1 === n.childNodes.length && (n = g);
				if (g) {
					d = d && l.nodeName(g, "tr");
					for (f = f.cacheable || r - 1; m < r; m++) e.call(d && l.nodeName(this[m], "table") ? this[m].getElementsByTagName("tbody")[0] || this[m].appendChild(this[m].ownerDocument.createElement("tbody")) : this[m], m === f ? n : l.clone(n, !0, !0))
				}
				n = g = null;
				t.length && l.each(t, function(b, c) {
					c.src ? l.ajax ? l.ajax({
						url: c.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						"throws": !0
					}) : l.error("no ajax") : l.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
						""));
					c.parentNode && c.parentNode.removeChild(c)
				})
			}
			return this
		}
	});
	l.buildFragment = function(b, d, e) {
		var f, g, n, m = b[0];
		return d = d || x, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof m && 512 > m.length && d === x && "<" === m.charAt(0) && !rd.test(m) && (l.support.checkClone || !fc.test(m)) && (l.support.html5Clone || !qb.test(m)) && (g = !0, f = l.fragments[m], n = f !== c), f || (f = d.createDocumentFragment(), l.clean(b, d, f, e), g && (l.fragments[m] = n && f)), {
			fragment: f,
			cacheable: g
		}
	};
	l.fragments = {};
	l.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(b, c) {
		l.fn[b] = function(d) {
			var e, f = 0,
				g = [];
			d = l(d);
			var n = d.length;
			e = 1 === this.length && this[0].parentNode;
			if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === n) return d[c](this[0]), this;
			for (; f < n; f++) e = (0 < f ? this.clone(!0) : this).get(), l(d[f])[c](e), g = g.concat(e);
			return this.pushStack(g, b, d.selector)
		}
	});
	l.extend({
		clone: function(b, c, d) {
			var e, f, g, m;
			l.support.html5Clone || l.isXMLDoc(b) || !qb.test("<" + b.nodeName +
				">") ? m = b.cloneNode(!0) : (rb.innerHTML = b.outerHTML, rb.removeChild(m = rb.firstChild));
			if ((!l.support.noCloneEvent || !l.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !l.isXMLDoc(b)) {
				n(b, m);
				e = q(b);
				f = q(m);
				for (g = 0; e[g]; ++g) f[g] && n(e[g], f[g])
			}
			if (c && (s(b, m), d)) {
				e = q(b);
				f = q(m);
				for (g = 0; e[g]; ++g) s(e[g], f[g])
			}
			return m
		},
		clean: function(b, c, d, e) {
			var f, g, n, m, q, r, s, p = c === x && gc,
				B = [];
			if (!c || "undefined" == typeof c.createDocumentFragment) c = x;
			for (f = 0; null != (n = b[f]); f++)
				if ("number" == typeof n && (n += ""), n) {
					if ("string" ==
						typeof n)
						if (pd.test(n)) {
							p = p || u(c);
							r = c.createElement("div");
							p.appendChild(r);
							n = n.replace(dc, "<$1></$2>");
							g = (ec.exec(n) || ["", ""])[1].toLowerCase();
							m = U[g] || U._default;
							q = m[0];
							for (r.innerHTML = m[1] + n + m[2]; q--;) r = r.lastChild;
							if (!l.support.tbody) {
								q = od.test(n);
								m = "table" === g && !q ? r.firstChild && r.firstChild.childNodes : "<table>" === m[1] && !q ? r.childNodes : [];
								for (g = m.length - 1; 0 <= g; --g) l.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
							}!l.support.leadingWhitespace && pb.test(n) && r.insertBefore(c.createTextNode(pb.exec(n)[0]),
								r.firstChild);
							n = r.childNodes;
							r.parentNode.removeChild(r)
						} else n = c.createTextNode(n);
					n.nodeType ? B.push(n) : l.merge(B, n)
				}
			r && (n = r = p = null);
			if (!l.support.appendChecked)
				for (f = 0; null != (n = B[f]); f++) l.nodeName(n, "input") ? t(n) : "undefined" != typeof n.getElementsByTagName && l.grep(n.getElementsByTagName("input"), t);
			if (d) {
				b = function(b) {
					if (!b.type || sd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
				};
				for (f = 0; null != (n = B[f]); f++)
					if (!l.nodeName(n, "script") || !b(n)) d.appendChild(n),
						"undefined" != typeof n.getElementsByTagName && (s = l.grep(l.merge([], n.getElementsByTagName("script")), b), B.splice.apply(B, [f + 1, 0].concat(s)), f += s.length)
			}
			return B
		},
		cleanData: function(b, c) {
			for (var d, e, f, g, n = 0, m = l.expando, q = l.cache, t = l.support.deleteExpando, r = l.event.special; null != (f = b[n]); n++)
				if (c || l.acceptData(f))
					if (d = (e = f[m]) && q[e]) {
						if (d.events)
							for (g in d.events) r[g] ? l.event.remove(f, g) : l.removeEvent(f, g, d.handle);
						q[e] && (delete q[e], t ? delete f[m] : f.removeAttribute ? f.removeAttribute(m) : f[m] = null, l.deletedIds.push(e))
					}
		}
	});
	var Ta, ca;
	l.uaMatch = function(b) {
		b = b.toLowerCase();
		b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
		return {
			browser: b[1] || "",
			version: b[2] || "0"
		}
	};
	Ta = l.uaMatch(zc.userAgent);
	ca = {};
	Ta.browser && (ca[Ta.browser] = !0, ca.version = Ta.version);
	ca.chrome ? ca.webkit = !0 : ca.webkit && (ca.safari = !0);
	l.browser = ca;
	l.sub = function() {
		function b(c, d) {
			return new b.fn.init(c,
				d)
		}
		l.extend(!0, b, this);
		b.superclass = this;
		b.fn = b.prototype = this();
		b.fn.constructor = b;
		b.sub = this.sub;
		b.fn.init = function(d, e) {
			return e && e instanceof l && !(e instanceof b) && (e = b(e)), l.fn.init.call(this, d, e, c)
		};
		b.fn.init.prototype = b.fn;
		var c = b(x);
		return b
	};
	var P, ka, la, sb = /alpha\([^)]*\)/i,
		ud = /opacity=([^)]*)/,
		vd = /^(top|right|bottom|left)$/,
		wd = /^(none|table(?!-c[ea]).+)/,
		hc = /^margin/,
		vc = RegExp("^(" + Da + ")(.*)$", "i"),
		xa = RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
		xd = RegExp("^([-+])=(" + Da + ")", "i"),
		Xa = {},
		yd = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ic = {
			letterSpacing: 0,
			fontWeight: 400
		},
		da = ["Top", "Right", "Bottom", "Left"],
		xb = ["Webkit", "O", "Moz", "ms"],
		zd = l.fn.toggle;
	l.fn.extend({
		css: function(b, d) {
			return l.access(this, function(b, d, e) {
				return e !== c ? l.style(b, d, e) : l.css(b, d)
			}, b, d, 1 < arguments.length)
		},
		show: function() {
			return C(this, !0)
		},
		hide: function() {
			return C(this)
		},
		toggle: function(b, c) {
			var d = "boolean" == typeof b;
			return l.isFunction(b) && l.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
				(d ? b : K(this)) ? l(this).show():
					l(this).hide()
			})
		}
	});
	l.extend({
		cssHooks: {
			opacity: {
				get: function(b, c) {
					if (c) {
						var d = P(b, "opacity");
						return "" === d ? "1" : d
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(b, d, e, f) {
			if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
				var g, n, m, q = l.camelCase(d),
					t = b.style;
				d = l.cssProps[q] || (l.cssProps[q] = B(t, q));
				m = l.cssHooks[d] || l.cssHooks[q];
				if (e === c) return m && "get" in m && (g = m.get(b, !1, f)) !== c ? g : t[d];
				n = typeof e;
				"string" === n && (g = xd.exec(e)) && (e = (g[1] + 1) * g[2] + parseFloat(l.css(b, d)), n = "number");
				if (!(null == e || "number" === n && isNaN(e)))
					if ("number" === n && !l.cssNumber[q] && (e += "px"), !m || !("set" in m) || (e = m.set(b, e, f)) !== c) try {
						t[d] = e
					} catch (r) {}
			}
		},
		css: function(b, d, e, f) {
			var g, n, m, q = l.camelCase(d);
			return d = l.cssProps[q] || (l.cssProps[q] = B(b.style, q)), m = l.cssHooks[d] || l.cssHooks[q], m && "get" in m && (g = m.get(b, !0, f)), g === c && (g = P(b, d)), "normal" === g && d in ic && (g = ic[d]), e || f !== c ? (n = parseFloat(g), e ||
				l.isNumeric(n) ? n || 0 : g) : g
		},
		swap: function(b, c, d) {
			var e, f = {};
			for (e in c) f[e] = b.style[e], b.style[e] = c[e];
			d = d.call(b);
			for (e in c) b.style[e] = f[e];
			return d
		}
	});
	b.getComputedStyle ? P = function(c, d) {
		var e, f, g, n, m = b.getComputedStyle(c, null),
			q = c.style;
		return m && (e = m[d], "" === e && !l.contains(c.ownerDocument, c) && (e = l.style(c, d)), xa.test(e) && hc.test(d) && (f = q.width, g = q.minWidth, n = q.maxWidth, q.minWidth = q.maxWidth = q.width = e, e = m.width, q.width = f, q.minWidth = g, q.maxWidth = n)), e
	} : x.documentElement.currentStyle && (P = function(b,
		c) {
		var d, e, f = b.currentStyle && b.currentStyle[c],
			g = b.style;
		return null == f && g && g[c] && (f = g[c]), xa.test(f) && !vd.test(c) && (d = g.left, e = b.runtimeStyle && b.runtimeStyle.left, e && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : f, f = g.pixelLeft + "px", g.left = d, e && (b.runtimeStyle.left = e)), "" === f ? "auto" : f
	});
	l.each(["height", "width"], function(b, c) {
		l.cssHooks[c] = {
			get: function(b, d, e) {
				if (d) return 0 === b.offsetWidth && wd.test(P(b, "display")) ? l.swap(b, yd, function() {
					return D(b, c, e)
				}) : D(b, c, e)
			},
			set: function(b,
				d, e) {
				return I(b, d, e ? Wa(b, c, e, l.support.boxSizing && "border-box" === l.css(b, "boxSizing")) : 0)
			}
		}
	});
	l.support.opacity || (l.cssHooks.opacity = {
		get: function(b, c) {
			return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
		},
		set: function(b, c) {
			var d = b.style,
				e = b.currentStyle,
				f = l.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
				g = e && e.filter || d.filter || "";
			d.zoom = 1;
			if (!(1 <= c && "" === l.trim(g.replace(sb, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter =
				sb.test(g) ? g.replace(sb, f) : g + " " + f
		}
	});
	l(function() {
		l.support.reliableMarginRight || (l.cssHooks.marginRight = {
			get: function(b, c) {
				return l.swap(b, {
					display: "inline-block"
				}, function() {
					if (c) return P(b, "marginRight")
				})
			}
		});
		!l.support.pixelPosition && l.fn.position && l.each(["top", "left"], function(b, c) {
			l.cssHooks[c] = {
				get: function(b, d) {
					if (d) {
						var e = P(b, c);
						return xa.test(e) ? l(b).position()[c] + "px" : e
					}
				}
			}
		})
	});
	l.expr && l.expr.filters && (l.expr.filters.hidden = function(b) {
		return 0 === b.offsetWidth && 0 === b.offsetHeight || !l.support.reliableHiddenOffsets &&
			"none" === (b.style && b.style.display || P(b, "display"))
	}, l.expr.filters.visible = function(b) {
		return !l.expr.filters.hidden(b)
	});
	l.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(b, c) {
		l.cssHooks[b + c] = {
			expand: function(d) {
				var e = "string" == typeof d ? d.split(" ") : [d],
					f = {};
				for (d = 0; 4 > d; d++) f[b + da[d] + c] = e[d] || e[d - 2] || e[0];
				return f
			}
		};
		hc.test(b) || (l.cssHooks[b + c].set = I)
	});
	var Ad = /%20/g,
		wc = /\[\]$/,
		jc = /\r?\n/g,
		Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Cd = /^(?:select|textarea)/i;
	l.fn.extend({
		serialize: function() {
			return l.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? l.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
			}).map(function(b, c) {
				var d = l(this).val();
				return null == d ? null : l.isArray(d) ? l.map(d, function(b) {
					return {
						name: c.name,
						value: b.replace(jc, "\r\n")
					}
				}) : {
					name: c.name,
					value: d.replace(jc, "\r\n")
				}
			}).get()
		}
	});
	l.param = function(b, d) {
		var e, f = [],
			g = function(b, c) {
				c = l.isFunction(c) ? c() : null == c ? "" : c;
				f[f.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
			};
		d === c && (d = l.ajaxSettings && l.ajaxSettings.traditional);
		if (l.isArray(b) || b.jquery && !l.isPlainObject(b)) l.each(b, function() {
			g(this.name, this.value)
		});
		else
			for (e in b) M(e, b[e], d, g);
		return f.join("&").replace(Ad, "+")
	};
	var pa, ja, Dd = /#.*$/,
		Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		Fd = /^(?:GET|HEAD)$/,
		Gd = /^\/\//,
		kc = /\?/,
		Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Id = /([?&])_=[^&]*/,
		lc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		mc = l.fn.load,
		Ya = {},
		nc = {},
		oc = ["*/"] + ["*"];
	try {
		ja = yc.href
	} catch (Rd) {
		ja = x.createElement("a"), ja.href = "", ja = ja.href
	}
	pa = lc.exec(ja.toLowerCase()) || [];
	l.fn.load = function(b, d, e) {
		if ("string" != typeof b && mc) return mc.apply(this, arguments);
		if (!this.length) return this;
		var f, g, n, m = this,
			q = b.indexOf(" ");
		return 0 <= q && (f = b.slice(q, b.length), b = b.slice(0, q)), l.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (g = "POST"), l.ajax({
			url: b,
			type: g,
			dataType: "html",
			data: d,
			complete: function(b, c) {
				e && m.each(e, n || [b.responseText, c, b])
			}
		}).done(function(b) {
			n = arguments;
			m.html(f ? l("<div>").append(b.replace(Hd, "")).find(f) : b)
		}), this
	};
	l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
		l.fn[c] = function(b) {
			return this.on(c, b)
		}
	});
	l.each(["get", "post"], function(b, d) {
		l[d] = function(b, e, f, g) {
			return l.isFunction(e) && (g = g || f, f = e, e = c), l.ajax({
				type: d,
				url: b,
				data: e,
				success: f,
				dataType: g
			})
		}
	});
	l.extend({
		getScript: function(b, d) {
			return l.get(b,
				c, d, "script")
		},
		getJSON: function(b, c, d) {
			return l.get(b, c, d, "json")
		},
		ajaxSetup: function(b, c) {
			return c ? ra(b, l.ajaxSettings) : (c = b, b = l.ajaxSettings), ra(b, c), b
		},
		ajaxSettings: {
			url: ja,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(pa[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": oc
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": b.String,
				"text html": !0,
				"text json": l.parseJSON,
				"text xml": l.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: ya(Ya),
		ajaxTransport: ya(nc),
		ajax: function(b, d) {
			function e(b, d, n, t) {
				var y, s, z, G, H, C = d;
				if (2 !== D) {
					D = 2;
					q && clearTimeout(q);
					m = c;
					g = t || "";
					F.readyState = 0 < b ? 4 : 0;
					if (n) {
						G = p;
						t = F;
						var T, Q, A, J, L = G.contents,
							M = G.dataTypes,
							O = G.responseFields;
						for (Q in O) Q in n && (t[O[Q]] = n[Q]);
						for (;
							"*" === M[0];) M.shift(),
							T === c && (T = G.mimeType || t.getResponseHeader("content-type"));
						if (T)
							for (Q in L)
								if (L[Q] && L[Q].test(T)) {
									M.unshift(Q);
									break
								}
						if (M[0] in n) A = M[0];
						else {
							for (Q in n) {
								if (!M[0] || G.converters[Q + " " + M[0]]) {
									A = Q;
									break
								}
								J || (J = Q)
							}
							A = A || J
						}
						G = n = A ? (A !== M[0] && M.unshift(A), n[A]) : void 0
					}
					if (200 <= b && 300 > b || 304 === b)
						if (p.ifModified && (H = F.getResponseHeader("Last-Modified"), H && (l.lastModified[f] = H), H = F.getResponseHeader("Etag"), H && (l.etag[f] = H)), 304 === b) C = "notmodified", y = !0;
						else {
							var E;
							a: {
								y = p;
								s = G;
								var N, C = y.dataTypes.slice();
								n = C[0];
								T = {};
								Q = 0;
								y.dataFilter && (s = y.dataFilter(s, y.dataType));
								if (C[1])
									for (E in y.converters) T[E.toLowerCase()] = y.converters[E];
								for (; z = C[++Q];)
									if ("*" !== z) {
										if ("*" !== n && n !== z) {
											E = T[n + " " + z] || T["* " + z];
											if (!E)
												for (N in T)
													if (H = N.split(" "), H[1] === z && (E = T[n + " " + H[0]] || T["* " + H[0]])) {
														!0 === E ? E = T[N] : !0 !== T[N] && (z = H[0], C.splice(Q--, 0, z));
														break
													}
											if (!0 !== E)
												if (E && y["throws"]) s = E(s);
												else try {
													s = E(s)
												} catch (P) {
													E = {
														state: "parsererror",
														error: E ? P : "No conversion from " + n + " to " + z
													};
													break a
												}
										}
										n = z
									}
								E = {
									state: "success",
									data: s
								}
							}
							y = E;
							C = y.state;
							s = y.data;
							z = y.error;
							y = !z
						} else if (z = C, !C || b) C = "error", 0 > b && (b = 0);
					F.status = b;
					F.statusText = (d || C) + "";
					y ? K.resolveWith(u, [s, C, F]) : K.rejectWith(u, [F, C, z]);
					F.statusCode(I);
					I = c;
					r && B.trigger("ajax" + (y ? "Success" : "Error"), [F, p, y ? s : z]);
					x.fireWith(u, [F, C]);
					r && (B.trigger("ajaxComplete", [F, p]), --l.active || l.event.trigger("ajaxStop"))
				}
			}
			"object" == typeof b && (d = b, b = c);
			d = d || {};
			var f, g, n, m, q, t, r, s, p = l.ajaxSetup({}, d),
				u = p.context || p,
				B = u !== p && (u.nodeType || u instanceof l) ? l(u) : l.event,
				K = l.Deferred(),
				x = l.Callbacks("once memory"),
				I = p.statusCode || {},
				C = {},
				A = {},
				D = 0,
				J = "canceled",
				F = {
					readyState: 0,
					setRequestHeader: function(b, c) {
						if (!D) {
							var d = b.toLowerCase();
							b = A[d] = A[d] || b;
							C[b] = c
						}
						return this
					},
					getAllResponseHeaders: function() {
						return 2 === D ? g : null
					},
					getResponseHeader: function(b) {
						var d;
						if (2 === D) {
							if (!n)
								for (n = {}; d = Ed.exec(g);) n[d[1].toLowerCase()] = d[2];
							d = n[b.toLowerCase()]
						}
						return d === c ? null : d
					},
					overrideMimeType: function(b) {
						return D || (p.mimeType = b), this
					},
					abort: function(b) {
						return b = b || J, m && m.abort(b), e(0, b), this
					}
				};
			K.promise(F);
			F.success = F.done;
			F.error = F.fail;
			F.complete = x.add;
			F.statusCode = function(b) {
				if (b) {
					var c;
					if (2 > D)
						for (c in b) I[c] = [I[c], b[c]];
					else c = b[F.status], F.always(c)
				}
				return this
			};
			p.url = ((b || p.url) + "").replace(Dd, "").replace(Gd, pa[1] + "//");
			p.dataTypes = l.trim(p.dataType || "*").toLowerCase().split(ea);
			null == p.crossDomain && (t = lc.exec(p.url.toLowerCase()) || !1, p.crossDomain = t && t.join(":") + (t[3] ? "" : "http:" === t[1] ? 80 : 443) !== pa.join(":") + (pa[3] ? "" : "http:" === pa[1] ? 80 : 443));
			p.data && p.processData && "string" != typeof p.data && (p.data = l.param(p.data,
				p.traditional));
			ma(Ya, p, d, F);
			if (2 === D) return F;
			r = p.global;
			p.type = p.type.toUpperCase();
			p.hasContent = !Fd.test(p.type);
			r && 0 === l.active++ && l.event.trigger("ajaxStart");
			if (!p.hasContent && (p.data && (p.url += (kc.test(p.url) ? "&" : "?") + p.data, delete p.data), f = p.url, !1 === p.cache)) {
				t = l.now();
				var L = p.url.replace(Id, "$1_=" + t);
				p.url = L + (L === p.url ? (kc.test(p.url) ? "&" : "?") + "_=" + t : "")
			}(p.data && p.hasContent && !1 !== p.contentType || d.contentType) && F.setRequestHeader("Content-Type", p.contentType);
			p.ifModified && (f = f || p.url,
				l.lastModified[f] && F.setRequestHeader("If-Modified-Since", l.lastModified[f]), l.etag[f] && F.setRequestHeader("If-None-Match", l.etag[f]));
			F.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + oc + "; q=0.01" : "") : p.accepts["*"]);
			for (s in p.headers) F.setRequestHeader(s, p.headers[s]);
			if (!p.beforeSend || !1 !== p.beforeSend.call(u, F, p) && 2 !== D) {
				J = "abort";
				for (s in {
						success: 1,
						error: 1,
						complete: 1
					}) F[s](p[s]);
				if (m = ma(nc, p, d, F)) {
					F.readyState = 1;
					r && B.trigger("ajaxSend", [F, p]);
					p.async && 0 < p.timeout && (q = setTimeout(function() {
						F.abort("timeout")
					}, p.timeout));
					try {
						D = 1, m.send(C, e)
					} catch (M) {
						if (2 > D) e(-1, M);
						else throw M;
					}
				} else e(-1, "No Transport");
				return F
			}
			return F.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var pc = [],
		Jd = /\?/,
		Ua = /(=)\?(?=&|$)|\?\?/,
		Kd = l.now();
	l.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var b = pc.pop() || l.expando + "_" + Kd++;
			return this[b] = !0, b
		}
	});
	l.ajaxPrefilter("json jsonp", function(d, e, f) {
		var g, n, m, q = d.data,
			t = d.url,
			r = !1 !== d.jsonp,
			p = r && Ua.test(t),
			s = r && !p && "string" == typeof q && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(q);
		if ("jsonp" === d.dataTypes[0] || p || s) return g = d.jsonpCallback = l.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, n = b[g], p ? d.url = t.replace(Ua, "$1" + g) : s ? d.data = q.replace(Ua, "$1" + g) : r && (d.url += (Jd.test(t) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() {
			return m || l.error(g + " was not called"), m[0]
		}, d.dataTypes[0] = "json", b[g] = function() {
			m = arguments
		}, f.always(function() {
			b[g] =
				n;
			d[g] && (d.jsonpCallback = e.jsonpCallback, pc.push(g));
			m && l.isFunction(n) && n(m[0]);
			m = n = c
		}), "script"
	});
	l.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(b) {
				return l.globalEval(b), b
			}
		}
	});
	l.ajaxPrefilter("script", function(b) {
		b.cache === c && (b.cache = !1);
		b.crossDomain && (b.type = "GET", b.global = !1)
	});
	l.ajaxTransport("script", function(b) {
		if (b.crossDomain) {
			var d, e =
				x.head || x.getElementsByTagName("head")[0] || x.documentElement;
			return {
				send: function(f, g) {
					d = x.createElement("script");
					d.async = "async";
					b.scriptCharset && (d.charset = b.scriptCharset);
					d.src = b.url;
					d.onload = d.onreadystatechange = function(b, f) {
						if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = c, f || g(200, "success")
					};
					e.insertBefore(d, e.firstChild)
				},
				abort: function() {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var qa, tb = b.ActiveXObject ? function() {
			for (var b in qa) qa[b](0,
				1)
		} : !1,
		Ld = 0;
	l.ajaxSettings.xhr = b.ActiveXObject ? function() {
		var c;
		if (!(c = !this.isLocal && yb())) a: {
			try {
				c = new b.ActiveXObject("Microsoft.XMLHTTP");
				break a
			} catch (d) {}
			c = void 0
		}
		return c
	} : yb;
	var ub = l.ajaxSettings.xhr();
	l.extend(l.support, {
		ajax: !!ub,
		cors: !!ub && "withCredentials" in ub
	});
	l.support.ajax && l.ajaxTransport(function(d) {
		if (!d.crossDomain || l.support.cors) {
			var e;
			return {
				send: function(f, g) {
					var n, m, q = d.xhr();
					d.username ? q.open(d.type, d.url, d.async, d.username, d.password) : q.open(d.type, d.url, d.async);
					if (d.xhrFields)
						for (m in d.xhrFields) q[m] =
							d.xhrFields[m];
					d.mimeType && q.overrideMimeType && q.overrideMimeType(d.mimeType);
					!d.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (m in f) q.setRequestHeader(m, f[m])
					} catch (t) {}
					q.send(d.hasContent && d.data || null);
					e = function(b, f) {
						var m, t, r, p, s;
						try {
							if (e && (f || 4 === q.readyState))
								if (e = c, n && (q.onreadystatechange = l.noop, tb && delete qa[n]), f) 4 !== q.readyState && q.abort();
								else {
									m = q.status;
									r = q.getAllResponseHeaders();
									p = {};
									(s = q.responseXML) && s.documentElement && (p.xml = s);
									try {
										p.text =
											q.responseText
									} catch (u) {}
									try {
										t = q.statusText
									} catch (B) {
										t = ""
									}!m && d.isLocal && !d.crossDomain ? m = p.text ? 200 : 404 : 1223 === m && (m = 204)
								}
						} catch (G) {
							f || g(-1, G)
						}
						p && g(m, t, p, r)
					};
					d.async ? 4 === q.readyState ? setTimeout(e, 0) : (n = ++Ld, tb && (qa || (qa = {}, l(b).unload(tb)), qa[n] = e), q.onreadystatechange = e) : e()
				},
				abort: function() {
					e && e(0, 1)
				}
			}
		}
	});
	var za, Va, Md = /^(?:toggle|show|hide)$/,
		Nd = RegExp("^(?:([-+])=|)(" + Da + ")([a-z%]*)$", "i"),
		Od = /queueHooks$/,
		Aa = [function(b, c, d) {
			var e, f, g, n, m, q, t = this,
				r = b.style,
				p = {},
				s = [],
				u = b.nodeType && K(b);
			d.queue ||
				(m = l._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, q = m.empty.fire, m.empty.fire = function() {
					m.unqueued || q()
				}), m.unqueued++, t.always(function() {
					t.always(function() {
						m.unqueued--;
						l.queue(b, "fx").length || m.empty.fire()
					})
				}));
			1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [r.overflow, r.overflowX, r.overflowY], "inline" === l.css(b, "display") && "none" === l.css(b, "float") && (!l.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? r.display = "inline-block" : r.zoom = 1));
			d.overflow && (r.overflow = "hidden",
				l.support.shrinkWrapBlocks || t.done(function() {
					r.overflow = d.overflow[0];
					r.overflowX = d.overflow[1];
					r.overflowY = d.overflow[2]
				}));
			for (e in c) f = c[e], Md.exec(f) && (delete c[e], f !== (u ? "hide" : "show") && s.push(e));
			if (f = s.length) {
				g = l._data(b, "fxshow") || l._data(b, "fxshow", {});
				u ? l(b).show() : t.done(function() {
					l(b).hide()
				});
				t.done(function() {
					var c;
					l.removeData(b, "fxshow", !0);
					for (c in p) l.style(b, c, p[c])
				});
				for (e = 0; e < f; e++) c = s[e], n = t.createTween(c, u ? g[c] : 0), p[c] = g[c] || l.style(b, c), c in g || (g[c] = n.start, u && (n.end = n.start,
					n.start = "width" === c || "height" === c ? 1 : 0))
			}
		}],
		sa = {
			"*": [function(b, c) {
				var d, e, f = this.createTween(b, c),
					g = Nd.exec(c),
					n = f.cur(),
					m = +n || 0,
					q = 1,
					t = 20;
				if (g) {
					d = +g[2];
					e = g[3] || (l.cssNumber[b] ? "" : "px");
					if ("px" !== e && m) {
						m = l.css(f.elem, b, !0) || d || 1;
						do q = q || ".5", m /= q, l.style(f.elem, b, m + e); while (q !== (q = f.cur() / n) && 1 !== q && --t)
					}
					f.unit = e;
					f.start = m;
					f.end = g[1] ? m + (g[1] + 1) * d : d
				}
				return f
			}]
		};
	l.Animation = l.extend(Ab, {
		tweener: function(b, c) {
			l.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
			for (var d, e = 0, f = b.length; e < f; e++) d = b[e], sa[d] = sa[d] ||
				[], sa[d].unshift(c)
		},
		prefilter: function(b, c) {
			c ? Aa.unshift(b) : Aa.push(b)
		}
	});
	l.Tween = R;
	R.prototype = {
		constructor: R,
		init: function(b, c, d, e, f, g) {
			this.elem = b;
			this.prop = d;
			this.easing = f || "swing";
			this.options = c;
			this.start = this.now = this.cur();
			this.end = e;
			this.unit = g || (l.cssNumber[d] ? "" : "px")
		},
		cur: function() {
			var b = R.propHooks[this.prop];
			return b && b.get ? b.get(this) : R.propHooks._default.get(this)
		},
		run: function(b) {
			var c, d = R.propHooks[this.prop];
			return this.options.duration ? this.pos = c = l.easing[this.easing](b, this.options.duration *
				b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
		}
	};
	R.prototype.init.prototype = R.prototype;
	R.propHooks = {
		_default: {
			get: function(b) {
				var c;
				return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = l.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
			},
			set: function(b) {
				l.fx.step[b.prop] ? l.fx.step[b.prop](b) : b.elem.style &&
					(null != b.elem.style[l.cssProps[b.prop]] || l.cssHooks[b.prop]) ? l.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
			}
		}
	};
	R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function(b) {
			b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
		}
	};
	l.each(["toggle", "show", "hide"], function(b, c) {
		var d = l.fn[c];
		l.fn[c] = function(e, f, g) {
			return null == e || "boolean" == typeof e || !b && l.isFunction(e) && l.isFunction(f) ? d.apply(this, arguments) : this.animate(Ba(c, !0), e, f, g)
		}
	});
	l.fn.extend({
		fadeTo: function(b, c, d, e) {
			return this.filter(K).css("opacity",
				0).show().end().animate({
				opacity: c
			}, b, d, e)
		},
		animate: function(b, c, d, e) {
			var f = l.isEmptyObject(b),
				g = l.speed(c, d, e);
			c = function() {
				var c = Ab(this, l.extend({}, b), g);
				f && c.stop(!0)
			};
			return f || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
		},
		stop: function(b, d, e) {
			var f = function(b) {
				var c = b.stop;
				delete b.stop;
				c(e)
			};
			return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
				var c = !0,
					d = null != b && b + "queueHooks",
					g = l.timers,
					n = l._data(this);
				if (d) n[d] && n[d].stop && f(n[d]);
				else
					for (d in n) n[d] &&
						n[d].stop && Od.test(d) && f(n[d]);
				for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(e), c = !1, g.splice(d, 1));
				(c || !e) && l.dequeue(this, b)
			})
		}
	});
	l.each({
		slideDown: Ba("show"),
		slideUp: Ba("hide"),
		slideToggle: Ba("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(b, c) {
		l.fn[b] = function(b, d, e) {
			return this.animate(c, b, d, e)
		}
	});
	l.speed = function(b, c, d) {
		var e = b && "object" == typeof b ? l.extend({}, b) : {
			complete: d || !d && c || l.isFunction(b) && b,
			duration: b,
			easing: d && c || c && !l.isFunction(c) && c
		};
		e.duration = l.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in l.fx.speeds ? l.fx.speeds[e.duration] : l.fx.speeds._default;
		if (null == e.queue || !0 === e.queue) e.queue = "fx";
		return e.old = e.complete, e.complete = function() {
			l.isFunction(e.old) && e.old.call(this);
			e.queue && l.dequeue(this, e.queue)
		}, e
	};
	l.easing = {
		linear: function(b) {
			return b
		},
		swing: function(b) {
			return 0.5 - Math.cos(b * Math.PI) / 2
		}
	};
	l.timers = [];
	l.fx = R.prototype.init;
	l.fx.tick = function() {
		for (var b, c = l.timers,
				d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
		c.length || l.fx.stop()
	};
	l.fx.timer = function(b) {
		b() && l.timers.push(b) && !Va && (Va = setInterval(l.fx.tick, l.fx.interval))
	};
	l.fx.interval = 13;
	l.fx.stop = function() {
		clearInterval(Va);
		Va = null
	};
	l.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	l.fx.step = {};
	l.expr && l.expr.filters && (l.expr.filters.animated = function(b) {
		return l.grep(l.timers, function(c) {
			return b === c.elem
		}).length
	});
	var qc = /^(?:body|html)$/i;
	l.fn.offset = function(b) {
		if (arguments.length) return b ===
			c ? this : this.each(function(c) {
				l.offset.setOffset(this, b, c)
			});
		var d, e, f, g, n, m, q, t = {
				top: 0,
				left: 0
			},
			r = this[0],
			p = r && r.ownerDocument;
		if (p) return (e = p.body) === r ? l.offset.bodyOffset(r) : (d = p.documentElement, l.contains(d, r) ? ("undefined" != typeof r.getBoundingClientRect && (t = r.getBoundingClientRect()), f = Bb(p), g = d.clientTop || e.clientTop || 0, n = d.clientLeft || e.clientLeft || 0, m = f.pageYOffset || d.scrollTop, q = f.pageXOffset || d.scrollLeft, {
			top: t.top + m - g,
			left: t.left + q - n
		}) : t)
	};
	l.offset = {
		bodyOffset: function(b) {
			var c = b.offsetTop,
				d = b.offsetLeft;
			return l.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(l.css(b, "marginTop")) || 0, d += parseFloat(l.css(b, "marginLeft")) || 0), {
				top: c,
				left: d
			}
		},
		setOffset: function(b, c, d) {
			var e = l.css(b, "position");
			"static" === e && (b.style.position = "relative");
			var f = l(b),
				g = f.offset(),
				n = l.css(b, "top"),
				m = l.css(b, "left"),
				q = {},
				t = {},
				r, p;
			("absolute" === e || "fixed" === e) && -1 < l.inArray("auto", [n, m]) ? (t = f.position(), r = t.top, p = t.left) : (r = parseFloat(n) || 0, p = parseFloat(m) || 0);
			l.isFunction(c) && (c = c.call(b, d, g));
			null !=
				c.top && (q.top = c.top - g.top + r);
			null != c.left && (q.left = c.left - g.left + p);
			"using" in c ? c.using.call(b, q) : f.css(q)
		}
	};
	l.fn.extend({
		position: function() {
			if (this[0]) {
				var b = this[0],
					c = this.offsetParent(),
					d = this.offset(),
					e = qc.test(c[0].nodeName) ? {
						top: 0,
						left: 0
					} : c.offset();
				return d.top -= parseFloat(l.css(b, "marginTop")) || 0, d.left -= parseFloat(l.css(b, "marginLeft")) || 0, e.top += parseFloat(l.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(l.css(c[0], "borderLeftWidth")) || 0, {
					top: d.top - e.top,
					left: d.left - e.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var b =
						this.offsetParent || x.body; b && !qc.test(b.nodeName) && "static" === l.css(b, "position");) b = b.offsetParent;
				return b || x.body
			})
		}
	});
	l.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, d) {
		var e = /Y/.test(d);
		l.fn[b] = function(f) {
			return l.access(this, function(b, f, g) {
				var n = Bb(b);
				if (g === c) return n ? d in n ? n[d] : n.document.documentElement[f] : b[f];
				n ? n.scrollTo(e ? l(n).scrollLeft() : g, e ? g : l(n).scrollTop()) : b[f] = g
			}, b, f, arguments.length, null)
		}
	});
	l.each({
		Height: "height",
		Width: "width"
	}, function(b, d) {
		l.each({
			padding: "inner" +
				b,
			content: d,
			"": "outer" + b
		}, function(e, f) {
			l.fn[f] = function(f, g) {
				var n = arguments.length && (e || "boolean" != typeof f),
					m = e || (!0 === f || !0 === g ? "margin" : "border");
				return l.access(this, function(d, e, f) {
					var g;
					return l.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : f === c ? l.css(d, e, f, m) : l.style(d, e, f, m)
				}, d, n ? f : c, n, null)
			}
		})
	});
	b.jQuery = b.$ = l;
	"function" == typeof define && define.amd && define.amd.jQuery &&
		define("jquery", [], function() {
			return l
		})
})(window);
var portraitMode = !0,
	mobilePortraitWidth = 480,
	mobilePortraitHeight = 640,
	mobileLandscapeWidth = 640,
	mobileLandscapeHeight = 480,
	mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
	mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
	desktopWidth = 640,
	desktopHeight = 640,
	w, h, multiplier, destW, destH, dynamicClickableEntityDivs = {},
	coreDivsToResize = ["game", "play", "orientate"],
	advancedDivsToResize = {
		// MobileAdInGamePreroll: {
		// 	"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		// 	"box-height": _SETTINGS.Ad.Mobile.Preroll.Height +
		// 		20
		// },
		// MobileAdInGameEnd: {
		// 	"box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
		// 	"box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		// },
		// MobileAdInGamePreroll2: {
		// 	"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		// 	"box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
		// },
		// MobileAdInGameEnd2: {
		// 	"box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
		// 	"box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		// },
		// MobileAdInGamePreroll3: {
		// 	"box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
		// 	"box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
		// },
		// MobileAdInGameEnd3: {
		// 	"box-width": _SETTINGS.Ad.Mobile.End.Width +
		// 		2,
		// 	"box-height": _SETTINGS.Ad.Mobile.End.Height + 20
		// }
	};

function adjustLayers(b) {
	for (i = 0; i < coreDivsToResize.length; i++) ig.ua.mobile ? ($("#" + coreDivsToResize[i]).width(w), $("#" + coreDivsToResize[i]).height(h)) : ($("#" + coreDivsToResize[i]).width(destW), $("#" + coreDivsToResize[i]).height(destH), $("#" + coreDivsToResize[i]).css("left", b ? 0 : w / 2 - destW / 2));
	for (key in advancedDivsToResize) try {
		$("#" + key).width(w), $("#" + key).height(h), $("#" + key + "-Box").css("left", (w - advancedDivsToResize[key]["box-width"]) / 2), $("#" + key + "-Box").css("top", (h - advancedDivsToResize[key]["box-height"]) /
			2)
	} catch (c) {
		console.log(c)
	}
	$("#ajaxbar").width(w);
	$("#ajaxbar").height(h)
}
var minHeight = 99999999;

function sizeHandler() {
	if ($("#game")) {
		w = window.innerWidth;
		h = window.innerHeight;
		ig.ua.mobile ? (multiplier = Math.min(h / mobileHeight, w / mobileWidth), destW = mobileWidth * multiplier, destH = mobileHeight * multiplier) : (multiplier = Math.min(h / desktopHeight, w / desktopWidth), destW = desktopWidth * multiplier, destH = desktopHeight * multiplier);
		widthRatio = window.innerWidth / mobileWidth;
		heightRatio = window.innerHeight / mobileHeight;
		adjustLayers();
		window.scrollTo(0, 1);
		ig.ua.mobile || $("#tempdiv").hide();
		for (var b = navigator.userAgent.split(" "),
				c = null, d = 0; d < b.length; d++) "Version/" == b[d].substr(0, 8) && (c = b[d]);
		b = window.chrome; - 1 < navigator.userAgent.indexOf("Chrome") && null == c ? ig.ua.mobile && null !== b && void 0 !== b && $(window) && (c = document.getElementById("scrollDown"), c.src = "media/graphics/orientate/scroll_down.png", c.style.height = "40%", c.style.width = "20%", c.style.backgroundColor = "rgba(11,156,49,0.4)", 0 == window.orientation && $("#scrollDown").hide(), 90 == Math.abs(window.orientation) && (c = document.body.offsetHeight, c < minHeight && (minHeight = c), c = portraitMode ?
			document.getElementById("orientate") : document.getElementById("game"), b = document.getElementById("tempdiv"), c = c.clientHeight + b.clientHeight, console.log(c + "," + minHeight), c > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()), $(window).on("orientationchange", function() {
			0 == window.orientation && $("#scrollDown").hide();
			Math.abs(window.orientation);
			$("#scrollDown").show();
			0 == window.orientation && $("#scrollDown").hide()
		}), window.addEventListener("resize", function() {
			0 == window.orientation && $("#scrollDown").hide();
			if (90 == Math.abs(window.orientation)) {
				var b = portraitMode ? document.getElementById("orientate") : document.getElementById("game"),
					c = document.getElementById("tempdiv");
				b.clientHeight + c.clientHeight > minHeight ? $("#scrollDown").hide() : $("#scrollDown").show()
			}
		})) : ($("#scrollDown").hide(), $("#tempdiv").hide())
	}
}

function orientationHandler() {
	console.log("changing orientation ...");
	ig.ua.mobile && ((portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) ? ($("#orientate").show(), $("#game").hide()) : ($("#orientate").hide(), $("#game").show()));
	sizeHandler()
}

function fixSamsungHandler() {
	ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
		b.preventDefault();
		return !1
	}, !1), document.addEventListener("touchmove", function(b) {
		b.preventDefault();
		return !1
	}, !1), document.addEventListener("touchend",
		function(b) {
			b.preventDefault();
			return !1
		}, !1))
}
window.addEventListener("resize", function() {
	orientationHandler()
}, !1);
window.addEventListener("orientationchange", function() {
	orientationHandler()
}, !1);
document.ontouchmove = function() {
	window.scrollTo(0, 1)
};

function getInternetExplorerVersion() {
	var b = -1;
	"Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
	return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
	for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
		var e = c[d].split("=");
		if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
	}
}
this.jukebox = {};
jukebox.Player = function(b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var e in b) this.settings[e] = b[e];
	"[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
	this.resource = this.isPlaying = null;
	this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) :
		this.settings.resources[0] || null;
	if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
	defaults: {
		resources: [],
		autoplay: !1,
		spritemap: {},
		flashMediaElement: "./swf/FlashMediaElement.swf",
		timeout: 1E3
	},
	__addToManager: function() {
		!0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
	},
	__init: function() {
		var b = this,
			c = this.settings,
			d = {},
			e;
		jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
		if (!0 === d.html5audio) {
			this.context = new Audio;
			this.context.src = this.resource;
			if (null === this.origin) {
				var f = function(c) {
					b.__addToManager(c)
				};
				this.context.addEventListener("canplaythrough", f, !0);
				window.setTimeout(function() {
					b.context.removeEventListener("canplaythrough", f, !0);
					f("timeout")
				}, c.timeout)
			}
			this.context.autobuffer = !0;
			this.context.preload = !0;
			for (e in this.HTML5API) this[e] = this.HTML5API[e];
			1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
				Date.now() : +new Date, this.play(c.autoplay));
			1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
				null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
			}), window.addEventListener("pageshow", function() {
				b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
			}))
		} else if (!0 === d.flashaudio) {
			for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
			d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
			this.__initFlashContext(d);
			!0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
		} else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
	},
	__initFlashContext: function(b) {
		var c, d = this.settings.flashMediaElement,
			e, f = {
				flashvars: b.join("&"),
				quality: "high",
				bgcolor: "#000000",
				wmode: "transparent",
				allowscriptaccess: "always",
				allowfullscreen: "true"
			};
		if (navigator.userAgent.match(/MSIE/)) {
			c = document.createElement("div");
			document.getElementsByTagName("body")[0].appendChild(c);
			var g = document.createElement("object");
			g.id = "jukebox-flashstream-" + this.id;
			g.setAttribute("type", "application/x-shockwave-flash");
			g.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
			g.setAttribute("width", "0");
			g.setAttribute("height", "0");
			f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
			f.flashvars = b.join("&amp;");
			for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), g.appendChild(b);
			c.outerHTML = g.outerHTML;
			this.context = document.getElementById("jukebox-flashstream-" + this.id)
		} else {
			c =
				document.createElement("embed");
			c.id = "jukebox-flashstream-" + this.id;
			c.setAttribute("type", "application/x-shockwave-flash");
			c.setAttribute("width", "100");
			c.setAttribute("height", "100");
			f.play = !1;
			f.loop = !1;
			f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
			for (e in f) c.setAttribute(e, f[e]);
			document.getElementsByTagName("body")[0].appendChild(c);
			this.context = c
		}
	},
	backgroundHackForiOS: function() {
		if (void 0 !== this.backgroundMusic) {
			var b = Date.now ? Date.now() : +new Date;
			void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
				b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
		}
	},
	play: function(b, c) {
		if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
		else {
			var d = this.settings.spritemap,
				e;
			if (void 0 !== d[b]) e = d[b].start;
			else if ("number" === typeof b) {
				e = b;
				for (var f in d)
					if (e >= d[f].start && e <=
						d[f].end) {
						b = f;
						break
					}
			}
			void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
		}
	},
	stop: function() {
		this.__lastPosition = 0;
		this.isPlaying = null;
		this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
		return !0
	},
	pause: function() {
		this.isPlaying = null;
		this.__lastPosition = this.getCurrentTime();
		this.context.pause();
		return this.__lastPosition
	},
	resume: function(b) {
		b = "number" ===
			typeof b ? b : this.__lastPosition;
		if (null !== b) return this.play(b), this.__lastPosition = null, !0;
		this.context.play();
		return !1
	},
	HTML5API: {
		getVolume: function() {
			return this.context.volume || 1
		},
		setVolume: function(b) {
			this.context.volume = b;
			return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
		},
		getCurrentTime: function() {
			return this.context.currentTime || 0
		},
		setCurrentTime: function(b) {
			try {
				return this.context.currentTime = b, !0
			} catch (c) {
				return !1
			}
		}
	},
	FLASHAPI: {
		getVolume: function() {
			return this.context && "function" === typeof this.context.getVolume ?
				this.context.getVolume() : 1
		},
		setVolume: function(b) {
			return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
		},
		getCurrentTime: function() {
			return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
		},
		setCurrentTime: function(b) {
			return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
		}
	}
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ("[object Object]" === Object.prototype.toString.call(b))
		for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
		jukebox.Manager.loop()
	}, 20) : !0
};
jukebox.Manager.prototype = {
	defaults: {
		useFlash: !1,
		useGameLoop: !1
	},
	__detectFeatures: function() {
		var b = window.Audio && new Audio;
		if (b && b.canPlayType && !1 === this.settings.useFlash) {
			for (var c = [{
						e: "3gp",
						m: ["audio/3gpp", "audio/amr"]
					}, {
						e: "aac",
						m: ["audio/aac", "audio/aacp"]
					}, {
						e: "amr",
						m: ["audio/amr", "audio/3gpp"]
					}, {
						e: "caf",
						m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
					}, {
						e: "m4a",
						m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
					}, {
						e: "mp3",
						m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
					}, {
						e: "mpga",
						m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
					}, {
						e: "mp4",
						m: ["audio/mp4", "video/mp4"]
					}, {
						e: "ogg",
						m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
					}, {
						e: "wav",
						m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
					}, {
						e: "webm",
						m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
					}],
					d, e, f = 0, g = c.length; f < g; f++)
				if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
					for (var m = 0, p = c[f].m.length; m < p; m++)
						if (d = c[f].m[m], "" !== b.canPlayType(d)) {
							this.codecs[e] = d;
							break
						} else this.codecs[e] || (this.codecs[e] = !1);
			this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
			this.features.channels = 8;
			b.volume = 0.1337;
			this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
			navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
		}
		this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
		if (window.ActiveXObject) try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
		} catch (r) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
		!0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
			this.features.volume = !0, this.features.channels = 1)
	},
	__getPlayerById: function(b) {
		return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
	},
	__getClone: function(b, c) {
		for (var d in this.__clones) {
			var e = this.__clones[d];
			if (null === e.isPlaying && e.origin === b) return e
		}
		if ("[object Object]" === Object.prototype.toString.call(c)) {
			d = {};
			for (var f in c) d[f] = c[f];
			d.autoplay = !1;
			f = new jukebox.Player(d, b);
			f.isClone = !0;
			f.wasReady = !1;
			return this.__clones[f.id] = f
		}
		return null
	},
	loop: function() {
		if (0 !== this.__playersLength)
			if (this.__queue.length &&
				this.__playersLength < this.features.channels) {
				var b = this.__queue[0],
					c = this.__getPlayerById(b.origin);
				if (null !== c) {
					var d = this.__getClone(b.origin, c.settings);
					null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
				}
				this.__queue.splice(0, 1)
			} else
				for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
					c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
	},
	getPlayableResource: function(b) {
		"[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
		for (var c = 0, d = b.length; c < d; c++) {
			var e = b[c],
				f = e.match(/\.([^\.]*)$/)[1];
			if (f && this.codecs[f]) return e
		}
		return null
	},
	add: function(b) {
		return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
	},
	remove: function(b) {
		return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
	},
	addToQueue: function(b, c) {
		return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
			pointer: b,
			origin: c
		}), !0) : !1
	}
};
(function() {
	var b = {},
		c = null,
		d = !0,
		e = !1;
	if ("undefined" !== typeof AudioContext) c = new AudioContext;
	else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
	else if ("undefined" !== typeof Audio) {
		d = !1;
		try {
			new Audio
		} catch (f) {
			e = !0
		}
	} else d = !1, e = !0;
	if (d) {
		var g = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
		g.gain.value = 1;
		g.connect(c.destination)
	}
	var m = function() {
		this._volume = 1;
		this._muted = !1;
		this.usingWebAudio = d;
		this.noAudio = e;
		this._howls = []
	};
	m.prototype = {
		volume: function(b) {
			b =
				parseFloat(b);
			if (0 <= b && 1 >= b) {
				this._volume = b;
				d && (g.gain.value = b);
				for (var c in this._howls)
					if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
						for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
				return this
			}
			return d ? g.gain.value : this._volume
		},
		mute: function() {
			this._setMuted(!0);
			return this
		},
		unmute: function() {
			this._setMuted(!1);
			return this
		},
		_setMuted: function(b) {
			this._muted = b;
			d && (g.gain.value = b ? 0 : this._volume);
			for (var c in this._howls)
				if (this._howls.hasOwnProperty(c) &&
					!1 === this._howls[c]._webAudio)
					for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
		}
	};
	var p = new m,
		m = null;
	if (!e) var m = new Audio,
		r = {
			mp3: !!m.canPlayType("audio/mpeg;").replace(/^no$/, ""),
			opus: !!m.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
			ogg: !!m.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
			wav: !!m.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
			m4a: !!(m.canPlayType("audio/x-m4a;") || m.canPlayType("audio/aac;")).replace(/^no$/,
				""),
			mp4: !!(m.canPlayType("audio/x-mp4;") || m.canPlayType("audio/aac;")).replace(/^no$/, ""),
			weba: !!m.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
		};
	var u = function(b) {
		this._autoplay = b.autoplay || !1;
		this._buffer = b.buffer || !1;
		this._duration = b.duration || 0;
		this._format = b.format || null;
		this._loop = b.loop || !1;
		this._loaded = !1;
		this._sprite = b.sprite || {};
		this._src = b.src || "";
		this._pos3d = b.pos3d || [0, 0, -0.5];
		this._volume = void 0 !== b.volume ? b.volume : 1;
		this._urls = b.urls || [];
		this._rate = b.rate || 1;
		this._onload =
			[b.onload || function() {}];
		this._onloaderror = [b.onloaderror || function() {}];
		this._onend = [b.onend || function() {}];
		this._onpause = [b.onpause || function() {}];
		this._onplay = [b.onplay || function() {}];
		this._onendTimer = [];
		this._webAudio = d && !this._buffer;
		this._audioNode = [];
		this._webAudio && this._setupAudioNode();
		p._howls.push(this);
		this.load()
	};
	u.prototype = {
		load: function() {
			var d = this,
				f = null;
			if (!e) {
				for (var g = 0; g < d._urls.length; g++) {
					var m, u;
					if (d._format) m = d._format;
					else if (u = d._urls[g].toLowerCase().split("?")[0], m =
						(m = u.match(/.+\.([^?]+)(\?|$)/)) && 2 <= m.length ? m : u.match(/data\:audio\/([^?]+);/)) m = m[1];
					else {
						d.on("loaderror");
						return
					}
					if (r[m]) {
						f = d._urls[g];
						break
					}
				}
				if (f) {
					d._src = f;
					if (d._webAudio) {
						var C = f;
						if (C in b) d._duration = b[C].duration, s(d);
						else {
							var I = new XMLHttpRequest;
							I.open("GET", C, !0);
							I.responseType = "arraybuffer";
							I.onload = function() {
								c.decodeAudioData(I.response, function(c) {
									c && (b[C] = c, s(d, c))
								}, function() {
									d.on("loaderror")
								})
							};
							I.onerror = function() {
								d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode,
									d.load())
							};
							try {
								I.send()
							} catch (Wa) {
								I.onerror()
							}
						}
					} else {
						var D = new Audio;
						d._audioNode.push(D);
						D.src = f;
						D._pos = 0;
						D.preload = "auto";
						D.volume = p._muted ? 0 : d._volume * p.volume();
						b[f] = d;
						var O = function() {
							d._duration = Math.ceil(10 * D.duration) / 10;
							0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = {
								_default: [0, 1E3 * d._duration]
							});
							d._loaded || (d._loaded = !0, d.on("load"));
							d._autoplay && d.play();
							D.removeEventListener("canplaythrough", O, !1)
						};
						D.addEventListener("canplaythrough", O, !1);
						D.load()
					}
					return d
				}
			}
			d.on("loaderror")
		},
		urls: function(b) {
			return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
		},
		play: function(d, e) {
			var f = this;
			"function" === typeof d && (e = d);
			if (!d || "function" === typeof d) d = "_default";
			if (!f._loaded) return f.on("load", function() {
				f.play(d, e)
			}), f;
			if (!f._sprite[d]) return "function" === typeof e && e(), f;
			f._inactiveNode(function(g) {
				g._sprite = d;
				var m = 0 < g._pos ? g._pos : f._sprite[d][0] / 1E3,
					r = f._sprite[d][1] / 1E3 - g._pos,
					s = !(!f._loop && !f._sprite[d][2]),
					u = "string" === typeof e ? e :
					Math.round(Date.now() * Math.random()) + "",
					D, O = {
						id: u,
						sprite: d,
						loop: s
					};
				D = setTimeout(function() {
					!f._webAudio && s && f.stop(O.id, O.timer).play(d, O.id);
					f._webAudio && !s && (f._nodeById(O.id).paused = !0, f._nodeById(O.id)._pos = 0);
					!f._webAudio && !s && f.stop(O.id, O.timer);
					f.on("end", u)
				}, 1E3 * r);
				f._onendTimer.push(D);
				O.timer = f._onendTimer[f._onendTimer.length - 1];
				if (f._webAudio) {
					D = f._sprite[d][0] / 1E3;
					var M = f._sprite[d][1] / 1E3;
					g.id = u;
					g.paused = !1;
					D = [s, D, M];
					M = f._nodeById(u);
					M.bufferSource = c.createBufferSource();
					M.bufferSource.buffer =
						b[f._src];
					M.bufferSource.connect(M.panner);
					M.bufferSource.loop = D[0];
					D[0] && (M.bufferSource.loopStart = D[1], M.bufferSource.loopEnd = D[1] + D[2]);
					M.bufferSource.playbackRate.value = f._rate;
					f._playStart = c.currentTime;
					g.gain.value = f._volume;
					"undefined" === typeof g.bufferSource.start ? g.bufferSource.noteGrainOn(0, m, r) : g.bufferSource.start(0, m, r)
				} else if (4 === g.readyState) g.id = u, g.currentTime = m, g.muted = p._muted, g.volume = f._volume * p.volume(), setTimeout(function() {
					g.play()
				}, 0);
				else {
					f._clearEndTimer(D);
					var ya = d,
						ma =
						e,
						ra = function() {
							f.play(ya, ma);
							g.removeEventListener("canplaythrough", ra, !1)
						};
					g.addEventListener("canplaythrough", ra, !1);
					return f
				}
				f.on("play");
				"function" === typeof e && e(u);
				return f
			});
			return f
		},
		pause: function(b, c) {
			var d = this;
			if (!d._loaded) return d.on("play", function() {
				d.pause(b)
			}), d;
			d._clearEndTimer(c || 0);
			var e = b ? d._nodeById(b) : d._activeNode();
			if (e)
				if (e._pos = d.pos(null, b), d._webAudio) {
					if (!e.bufferSource || e.paused) return d;
					e.paused = !0;
					"undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) :
						e.bufferSource.stop(0)
				} else e.pause();
			d.on("pause");
			return d
		},
		stop: function(b, c) {
			var d = this;
			if (!d._loaded) return d.on("play", function() {
				d.stop(b)
			}), d;
			d._clearEndTimer(c || 0);
			var e = b ? d._nodeById(b) : d._activeNode();
			if (e)
				if (e._pos = 0, d._webAudio) {
					if (!e.bufferSource || e.paused) return d;
					e.paused = !0;
					"undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
				} else e.pause(), e.currentTime = 0;
			return d
		},
		mute: function(b) {
			var c = this;
			if (!c._loaded) return c.on("play", function() {
					c.mute(b)
				}),
				c;
			var d = b ? c._nodeById(b) : c._activeNode();
			d && (c._webAudio ? d.gain.value = 0 : d.volume = 0);
			return c
		},
		unmute: function(b) {
			var c = this;
			if (!c._loaded) return c.on("play", function() {
				c.unmute(b)
			}), c;
			var d = b ? c._nodeById(b) : c._activeNode();
			d && (c._webAudio ? d.gain.value = c._volume : d.volume = c._volume);
			return c
		},
		volume: function(b, c) {
			var d = this;
			b = parseFloat(b);
			if (0 <= b && 1 >= b) {
				d._volume = b;
				if (!d._loaded) return d.on("play", function() {
					d.volume(b, c)
				}), d;
				var e = c ? d._nodeById(c) : d._activeNode();
				e && (d._webAudio ? e.gain.value = b : e.volume =
					b * p.volume());
				return d
			}
			return d._volume
		},
		loop: function(b) {
			return "boolean" === typeof b ? (this._loop = b, this) : this._loop
		},
		sprite: function(b) {
			return "object" === typeof b ? (this._sprite = b, this) : this._sprite
		},
		pos: function(b, d) {
			var e = this;
			if (!e._loaded) return e.on("load", function() {
				e.pos(b)
			}), "number" === typeof b ? e : e._pos || 0;
			b = parseFloat(b);
			var f = d ? e._nodeById(d) : e._activeNode();
			if (f) return 0 <= b ? (e.pause(d), f._pos = b, e.play(f._sprite, d), e) : e._webAudio ? f._pos + (c.currentTime - e._playStart) : f.currentTime;
			if (0 <= b) return e;
			for (f = 0; f < e._audioNode.length; f++)
				if (e._audioNode[f].paused && 4 === e._audioNode[f].readyState) return e._webAudio ? e._audioNode[f]._pos : e._audioNode[f].currentTime
		},
		pos3d: function(b, c, d, e) {
			var f = this;
			c = "undefined" === typeof c || !c ? 0 : c;
			d = "undefined" === typeof d || !d ? -0.5 : d;
			if (!f._loaded) return f.on("play", function() {
				f.pos3d(b, c, d, e)
			}), f;
			if (0 <= b || 0 > b) {
				if (f._webAudio) {
					var g = e ? f._nodeById(e) : f._activeNode();
					g && (f._pos3d = [b, c, d], g.panner.setPosition(b, c, d))
				}
			} else return f._pos3d;
			return f
		},
		fade: function(b, c, d,
			e, f) {
			var g = this,
				m = Math.abs(b - c),
				r = b > c ? "down" : "up",
				m = m / 0.01,
				p = d / m;
			if (!g._loaded) return g.on("load", function() {
				g.fade(b, c, d, e, f)
			}), g;
			g.volume(b, f);
			for (var s = 1; s <= m; s++)(function() {
				var b = Math.round(1E3 * (g._volume + ("up" === r ? 0.01 : -0.01) * s)) / 1E3;
				setTimeout(function() {
					g.volume(b, f);
					b === c && e && e()
				}, p * s)
			})()
		},
		fadeIn: function(b, c, d) {
			return this.volume(0).play().fade(0, b, c, d)
		},
		fadeOut: function(b, c, d, e) {
			var f = this;
			return f.fade(f._volume, b, c, function() {
				d && d();
				f.pause(e);
				f.on("end")
			}, e)
		},
		_nodeById: function(b) {
			for (var c =
					this._audioNode[0], d = 0; d < this._audioNode.length; d++)
				if (this._audioNode[d].id === b) {
					c = this._audioNode[d];
					break
				}
			return c
		},
		_activeNode: function() {
			for (var b = null, c = 0; c < this._audioNode.length; c++)
				if (!this._audioNode[c].paused) {
					b = this._audioNode[c];
					break
				}
			this._drainPool();
			return b
		},
		_inactiveNode: function(b) {
			for (var c = null, d = 0; d < this._audioNode.length; d++)
				if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
					b(this._audioNode[d]);
					c = !0;
					break
				}
			this._drainPool();
			if (!c) {
				var e;
				this._webAudio ? (e = this._setupAudioNode(),
					b(e)) : (this.load(), e = this._audioNode[this._audioNode.length - 1], e.addEventListener("loadedmetadata", function() {
					b(e)
				}))
			}
		},
		_drainPool: function() {
			var b = 0,
				c;
			for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
			for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
		},
		_clearEndTimer: function(b) {
			b = this._onendTimer.indexOf(b);
			b = 0 <= b ? b : 0;
			this._onendTimer[b] && (clearTimeout(this._onendTimer[b]),
				this._onendTimer.splice(b, 1))
		},
		_setupAudioNode: function() {
			var b = this._audioNode,
				d = this._audioNode.length;
			b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
			b[d].gain.value = this._volume;
			b[d].paused = !0;
			b[d]._pos = 0;
			b[d].readyState = 4;
			b[d].connect(g);
			b[d].panner = c.createPanner();
			b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
			b[d].panner.connect(b[d]);
			return b[d]
		},
		on: function(b, c) {
			var d = this["_on" + b];
			if ("function" === typeof c) d.push(c);
			else
				for (var e = 0; e < d.length; e++) c ?
					d[e].call(this, c) : d[e].call(this);
			return this
		},
		off: function(b, c) {
			for (var d = this["_on" + b], e = c.toString(), f = 0; f < d.length; f++)
				if (e === d[f].toString()) {
					d.splice(f, 1);
					break
				}
			return this
		},
		unload: function() {
			for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
			c = p._howls.indexOf(this);
			null !== c && 0 <= c && p._howls.splice(c, 1);
			delete b[this._src]
		}
	};
	if (d) var s = function(b, c) {
		b._duration = c ? c.duration : b._duration;
		0 === Object.getOwnPropertyNames(b._sprite).length &&
			(b._sprite = {
				_default: [0, 1E3 * b._duration]
			});
		b._loaded || (b._loaded = !0, b.on("load"));
		b._autoplay && b.play()
	};
	"function" === typeof define && define.amd && define(function() {
		return {
			Howler: p,
			Howl: u
		}
	});
	"undefined" !== typeof exports && (exports.Howler = p, exports.Howl = u);
	window.Howler = p;
	window.Howl = u
})();
(function(b) {
	Number.prototype.map = function(b, c, d, e) {
		return d + (e - d) * ((this - b) / (c - b))
	};
	Number.prototype.limit = function(b, c) {
		return Math.min(c, Math.max(b, this))
	};
	Number.prototype.round = function(b) {
		b = Math.pow(10, b || 0);
		return Math.round(this * b) / b
	};
	Number.prototype.floor = function() {
		return Math.floor(this)
	};
	Number.prototype.ceil = function() {
		return Math.ceil(this)
	};
	Number.prototype.toInt = function() {
		return this | 0
	};
	Number.prototype.toRad = function() {
		return this / 180 * Math.PI
	};
	Number.prototype.toDeg = function() {
		return 180 *
			this / Math.PI
	};
	Array.prototype.erase = function(b) {
		for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
		return this
	};
	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)]
	};
	Function.prototype.bind = Function.prototype.bind || function(b) {
		var c = this;
		return function() {
			var d = Array.prototype.slice.call(arguments);
			return c.apply(b || null, d)
		}
	};
	b.ig = {
		game: null,
		debug: null,
		version: "1.20",
		global: b,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: "",
		ua: {},
		prefix: b.ImpactPrefix || "",
		lib: "lib/",
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function(b) {
			return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
		},
		$new: function(b) {
			return document.createElement(b)
		},
		copy: function(b) {
			if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
			if (b instanceof Array)
				for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
			else
				for (d in c = {}, b) c[d] = ig.copy(b[d]);
			return c
		},
		merge: function(b, c) {
			for (var d in c) {
				var e = c[d];
				if ("object" !=
					typeof e || e instanceof HTMLElement || e instanceof ig.Class) b[d] = e;
				else {
					if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
					ig.merge(b[d], e)
				}
			}
			return b
		},
		ksort: function(b) {
			if (!b || "object" != typeof b) return [];
			var c = [],
				d = [],
				e;
			for (e in b) c.push(e);
			c.sort();
			for (e = 0; e < c.length; e++) d.push(b[c[e]]);
			return d
		},
		setVendorAttribute: function(b, c, d) {
			var e = c.charAt(0).toUpperCase() + c.substr(1);
			b[c] = b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
		},
		getVendorAttribute: function(b, c) {
			var d = c.charAt(0).toUpperCase() +
				c.substr(1);
			return b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
		},
		normalizeVendorAttribute: function(b, c) {
			var d = ig.getVendorAttribute(b, c);
			!b[c] && d && (b[c] = d)
		},
		getImagePixels: function(b, c, d, e, f) {
			var g = ig.$new("canvas");
			g.width = b.width;
			g.height = b.height;
			var m = g.getContext("2d");
			ig.System.SCALE.CRISP(g, m);
			var p = ig.getVendorAttribute(m, "backingStorePixelRatio") || 1;
			ig.normalizeVendorAttribute(m, "getImageDataHD");
			var C = b.width / p,
				I = b.height / p;
			g.width = Math.ceil(C);
			g.height = Math.ceil(I);
			m.drawImage(b,
				0, 0, C, I);
			return 1 === p ? m.getImageData(c, d, e, f) : m.getImageDataHD(c, d, e, f)
		},
		module: function(b) {
			if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
			if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
			ig._current = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig.modules[b] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig
		},
		requires: function() {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig
		},
		defines: function(b) {
			ig._current.body = b;
			ig._current =
				null;
			ig._initDOMReady()
		},
		addResource: function(b) {
			ig.resources.push(b)
		},
		setNocache: function(b) {
			ig.nocache = b ? "?" + Date.now() : ""
		},
		log: function() {},
		assert: function() {},
		show: function() {},
		mark: function() {},
		_loadScript: function(b, c) {
			ig.modules[b] = {
				name: b,
				requires: [],
				loaded: !1,
				body: null
			};
			ig._waitForOnload++;
			var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
				e = ig.$new("script");
			e.type = "text/javascript";
			e.src = d;
			e.onload = function() {
				ig._waitForOnload--;
				ig._execModules()
			};
			e.onerror = function() {
				throw "Failed to load module " +
				b + " at " + d + " required from " + c;
			};
			ig.$("head")[0].appendChild(e)
		},
		_execModules: function() {
			for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
				for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
					var g = d.requires[f];
					ig.modules[g] ? ig.modules[g].loaded || (e = !1) : (e = !1, ig._loadScript(g, d.name))
				}
				e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
			}
			if (b) ig._execModules();
			else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
				b = [];
				for (c = 0; c < ig._loadQueue.length; c++) {
					e = [];
					g = ig._loadQueue[c].requires;
					for (f = 0; f < g.length; f++) d = ig.modules[g[f]], (!d || !d.loaded) && e.push(g[f]);
					b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
				}
				throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + b.join("\n");
			}
		},
		_DOMReady: function() {
			if (!ig.modules["dom.ready"].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules["dom.ready"].loaded = !0;
				ig._waitForOnload--;
				ig._execModules()
			}
			return 0
		},
		_boot: function() {
			document.location.href.match(/\?nocache/) &&
				ig.setNocache(!0);
			ig.ua.pixelRatio = b.devicePixelRatio || 1;
			ig.ua.viewport = {
				width: b.innerWidth,
				height: b.innerHeight
			};
			ig.ua.screen = {
				width: b.screen.availWidth * ig.ua.pixelRatio,
				height: b.screen.availHeight * ig.ua.pixelRatio
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
			ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
			ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
			ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
			ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
			ig.ua.touchDevice = "ontouchstart" in
				b || b.navigator.msMaxTouchPoints;
			ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
		},
		_initDOMReady: function() {
			ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
				requires: [],
				loaded: !1,
				body: null
			}, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
		}
	};
	for (var c = ["ms", "moz", "webkit", "o"],
			d = 0; d < c.length && !b.requestAnimationFrame; d++) b.requestAnimationFrame = b[c[d] + "RequestAnimationFrame"];
	if (b.requestAnimationFrame) {
		var e = 1,
			f = {};
		b.ig.setAnimation = function(c, d) {
			var g = e++;
			f[g] = !0;
			var m = function() {
				f[g] && (b.requestAnimationFrame(m, d), c())
			};
			b.requestAnimationFrame(m, d);
			return g
		};
		b.ig.clearAnimation = function(b) {
			delete f[b]
		}
	} else b.ig.setAnimation = function(c) {
		return b.setInterval(c, 1E3 / 60)
	}, b.ig.clearAnimation = function(c) {
		b.clearInterval(c)
	};
	var g = !1,
		m = /xyz/.test(function() {
			xyz
		}) ? /\bparent\b/ :
		/.*/;
	b.ig.Class = function() {};
	var p = function(b) {
		var c = this.prototype,
			d = {},
			e;
		for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && m.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
			return function() {
				var e = this.parent;
				this.parent = d[b];
				var f = c.apply(this, arguments);
				this.parent = e;
				return f
			}
		}(e, b[e])) : c[e] = b[e]
	};
	b.ig.Class.extend = function(c) {
		function d() {
			if (!g) {
				if (this.staticInstantiate) {
					var b = this.staticInstantiate.apply(this, arguments);
					if (b) return b
				}
				for (var c in this) "object" == typeof this[c] && (this[c] =
					ig.copy(this[c]));
				this.init && this.init.apply(this, arguments)
			}
			return this
		}
		var e = this.prototype;
		g = !0;
		var f = new this;
		g = !1;
		for (var q in c) f[q] = "function" == typeof c[q] && "function" == typeof e[q] && m.test(c[q]) ? function(b, c) {
			return function() {
				var d = this.parent;
				this.parent = e[b];
				var f = c.apply(this, arguments);
				this.parent = d;
				return f
			}
		}(q, c[q]) : c[q];
		d.prototype = f;
		d.constructor = d;
		d.extend = b.ig.Class.extend;
		d.inject = p;
		return d
	}
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: "",
		staticInstantiate: function(b) {
			return ig.Image.cache[b] || null
		},
		init: function(b) {
			this.path = b;
			this.load()
		},
		load: function(b) {
			this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
				ig.Image.cache[this.path] = this)
		},
		reload: function() {
			this.loaded = !1;
			this.data = new Image;
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + "?" + Date.now()
		},
		onload: function() {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0)
		},
		onerror: function() {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1)
		},
		resize: function(b) {
			var c = this.width * b,
				d = this.height * b,
				e = ig.$new("canvas");
			e.width = this.width;
			e.height = this.height;
			e = e.getContext("2d");
			e.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
			var e = e.getImageData(0, 0, this.width, this.height),
				f = ig.$new("canvas");
			f.width = c;
			f.height = d;
			for (var g = f.getContext("2d"), m = g.getImageData(0, 0, c, d), p = 0; p < d; p++)
				for (var r = 0; r < c; r++) {
					var u = 4 * (Math.floor(p / b) * this.width + Math.floor(r / b)),
						s = 4 * (p * c + r);
					m.data[s] = e.data[u];
					m.data[s + 1] = e.data[u + 1];
					m.data[s + 2] = e.data[u + 2];
					m.data[s + 3] = e.data[u + 3]
				}
			g.putImageData(m, 0, 0);
			this.data =
				f
		},
		draw: function(b, c, d, e, f, g) {
			if (this.loaded) {
				var m = ig.system.scale;
				f = (f ? f : this.width) * m;
				g = (g ? g : this.height) * m;
				ig.system.context.drawImage(this.data, d ? d * m : 0, e ? e * m : 0, f, g, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, g);
				ig.Image.drawCount++
			}
		},
		drawTile: function(b, c, d, e, f, g, m) {
			f = f ? f : e;
			if (this.loaded && !(e > this.width || f > this.height)) {
				var p = ig.system.scale,
					r = Math.floor(e * p),
					u = Math.floor(f * p),
					s = g ? -1 : 1,
					n = m ? -1 : 1;
				if (g || m) ig.system.context.save(), ig.system.context.scale(s, n);
				ig.system.context.drawImage(this.data,
					Math.floor(d * e) % this.width * p, Math.floor(d * e / this.width) * f * p, r, u, ig.system.getDrawPos(b) * s - (g ? r : 0), ig.system.getDrawPos(c) * n - (m ? u : 0), r, u);
				(g || m) && ig.system.context.restore();
				ig.Image.drawCount++
			}
		}
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function() {
		for (var b in ig.Image.cache) ig.Image.cache[b].reload()
	}
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
	ig.Font = ig.Image.extend({
		widthMap: [],
		indices: [],
		firstChar: 32,
		alpha: 1,
		letterSpacing: 1,
		lineSpacing: 0,
		onload: function(b) {
			this._loadMetrics(this.data);
			this.parent(b)
		},
		widthForString: function(b) {
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
				return c
			}
			return this._widthForLine(b)
		},
		_widthForLine: function(b) {
			for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
				this.letterSpacing;
			return c
		},
		heightForString: function(b) {
			return b.split("\n").length * (this.height + this.lineSpacing)
		},
		draw: function(b, c, d, e) {
			"string" != typeof b && (b = b.toString());
			if (-1 !== b.indexOf("\n")) {
				b = b.split("\n");
				for (var f = this.height + this.lineSpacing, g = 0; g < b.length; g++) this.draw(b[g], c, d + g * f, e)
			} else {
				if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) g = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? g / 2 : g;
				1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
				for (g = 0; g < b.length; g++) e = b.charCodeAt(g),
					c += this._drawChar(e - this.firstChar, c, d);
				1 !== this.alpha && (ig.system.context.globalAlpha = 1);
				ig.Image.drawCount += b.length
			}
		},
		_drawChar: function(b, c, d) {
			if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
			var e = ig.system.scale,
				f = this.widthMap[b] * e,
				g = (this.height - 2) * e;
			ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, g, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, g);
			return this.widthMap[b] + this.letterSpacing
		},
		_loadMetrics: function(b) {
			this.height = b.height - 1;
			this.widthMap = [];
			this.indices =
				[];
			for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
				var g = 4 * f + 3;
				0 != c.data[g] ? e++ : 0 == c.data[g] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
			}
			this.widthMap.push(e);
			this.indices.push(f - e)
		}
	});
	ig.Font.ALIGN = {
		LEFT: 0,
		RIGHT: 1,
		CENTER: 2
	}
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function() {
			for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
				var d = ig.Sound.use[c];
				if (b.canPlayType(d.mime)) {
					this.format = d;
					break
				}
			}
			this.format || (ig.Sound.enabled = !1)
		},
		load: function(b, c, d) {
			var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[b]) {
				if (c && this.clips[b].length < ig.Sound.channels)
					for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
						var f = new Audio(e);
						f.load();
						this.clips[b].push(f)
					}
				return this.clips[b][0]
			}
			var g = new Audio(e);
			d && (g.addEventListener("canplaythrough", function p(c) {
				g.removeEventListener("canplaythrough", p, !1);
				d(b, !0, c)
			}, !1), g.addEventListener("error", function(c) {
				d(b, !0, c)
			}, !1));
			g.preload = "auto";
			g.load();
			this.clips[b] = [g];
			if (c)
				for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
			return g
		},
		get: function(b) {
			b = this.clips[b];
			for (var c = 0, d; d = b[c++];)
				if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
			b[0].pause();
			b[0].currentTime =
				0;
			return b[0]
		}
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function() {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty ? (Object.defineProperty(this, "volume", {
					get: this.getVolume.bind(this),
					set: this.setVolume.bind(this)
				}), Object.defineProperty(this, "loop", {
					get: this.getLooping.bind(this),
					set: this.setLooping.bind(this)
				})) : this.__defineGetter__ &&
				(this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
		},
		add: function(b, c) {
			if (ig.Sound.enabled) {
				var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
				d.loop = this._loop;
				d.volume = this._volume;
				d.addEventListener("ended", this._endedCallbackBound, !1);
				this.tracks.push(d);
				c && (this.namedTracks[c] = d);
				this.currentTrack || (this.currentTrack =
					d)
			}
		},
		next: function() {
			this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
		},
		pause: function() {
			this.currentTrack && this.currentTrack.pause()
		},
		stop: function() {
			if (this.currentTrack) {
				this.currentTrack.pause();
				try {
					this.currentTrack.currentTime = 0
				} catch (b) {
					console.log(b)
				}
			}
		},
		play: function(b) {
			if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack &&
				(this.stop(), this.currentTrack = b);
			else if (!this.currentTrack) return;
			this.currentTrack.play()
		},
		getLooping: function() {
			return this._loop
		},
		setLooping: function(b) {
			this._loop = b;
			for (var c in this.tracks) this.tracks[c].loop = b
		},
		getVolume: function() {
			return this._volume
		},
		setVolume: function(b) {
			this._volume = b.limit(0, 1);
			for (var c in this.tracks) this.tracks[c].volume = this._volume
		},
		fadeOut: function(b) {
			this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
				50))
		},
		_fadeStep: function() {
			var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
			0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
		},
		_endedCallback: function() {
			this._loop ? this.play() : this.next()
		}
	});
	ig.Sound = ig.Class.extend({
		path: "",
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function(b, c) {
			this.path = b;
			this.multiChannel = !1 !== c;
			this.load()
		},
		load: function(b) {
			ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
				this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
		},
		play: function() {
			ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
		},
		stop: function() {
			this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
		}
	});
	ig.Sound.FORMAT = {
		MP3: {
			ext: "mp3",
			mime: "audio/mpeg"
		},
		M4A: {
			ext: "m4a",
			mime: "audio/mp4; codecs=mp4a"
		},
		OGG: {
			ext: "ogg",
			mime: "audio/ogg; codecs=vorbis"
		},
		WEBM: {
			ext: "webm",
			mime: "audio/webm; codecs=vorbis"
		},
		CAF: {
			ext: "caf",
			mime: "audio/x-caf"
		}
	};
	ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
	ig.Loader = ig.Class.extend({
		resources: [],
		gameClass: null,
		status: 0,
		done: !1,
		_unloaded: [],
		_drawStatus: 0,
		_intervalId: 0,
		_loadCallbackBound: null,
		init: function(b, c) {
			this.gameClass = b;
			this.resources = c;
			this._loadCallbackBound = this._loadCallback.bind(this);
			for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
		},
		load: function() {
			ig.system.clear("#000");
			if (this.resources.length) {
				for (var b =
						0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
				this._intervalId = setInterval(this.draw.bind(this), 16)
			} else this.end()
		},
		loadResource: function(b) {
			b.load(this._loadCallbackBound)
		},
		end: function() {
			this.done || (this.done = !0, clearInterval(this._intervalId))
		},
		draw: function() {},
		_loadCallback: function(b, c) {
			if (c) this._unloaded.erase(b);
			else throw "Failed to load resource: " + b;
			this.status = 1 - this._unloaded.length / this.resources.length;
			0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
		}
	})
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function(b) {
			this.last = this.base = ig.Timer.time;
			this.target = b || 0
		},
		set: function(b) {
			this.target = b || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		reset: function() {
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		tick: function() {
			var b = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : b
		},
		delta: function() {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target
		},
		pause: function() {
			this.pausedAt || (this.pausedAt =
				ig.Timer.time)
		},
		unpause: function() {
			this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
		}
	});
	ig.Timer._last = 0;
	ig.Timer.time = 0;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function() {
		var b = Date.now();
		ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
		ig.Timer._last = b
	}
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
	ig.System = ig.Class.extend({
		fps: 30,
		width: 320,
		height: 240,
		realWidth: 320,
		realHeight: 240,
		scale: 1,
		tick: 0,
		animationId: 0,
		newGameClass: null,
		running: !1,
		delegate: null,
		clock: null,
		canvas: null,
		context: null,
		init: function(b, c, d, e, f) {
			this.fps = c;
			this.clock = new ig.Timer;
			this.canvas = ig.$(b);
			this.resize(d, e, f);
			this.context = this.canvas.getContext("2d");
			this.getDrawPos = ig.System.drawMode
		},
		resize: function(b, c, d) {
			this.width = b;
			this.height =
				c;
			this.scale = d || this.scale;
			this.realWidth = this.width * this.scale;
			this.realHeight = this.height * this.scale;
			this.canvas.width = this.realWidth;
			this.canvas.height = this.realHeight
		},
		setGame: function(b) {
			this.running ? this.newGameClass = b : this.setGameNow(b)
		},
		setGameNow: function(b) {
			ig.game = new b;
			ig.system.setDelegate(ig.game)
		},
		setDelegate: function(b) {
			if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
			else throw "System.setDelegate: No run() function in object";
		},
		stopRunLoop: function() {
			ig.clearAnimation(this.animationId);
			this.running = !1
		},
		startRunLoop: function() {
			this.stopRunLoop();
			this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
			this.running = !0
		},
		clear: function(b) {
			this.context.fillStyle = b;
			this.context.fillRect(0, 0, this.realWidth, this.realHeight)
		},
		run: function() {
			ig.Timer.step();
			this.tick = this.clock.tick();
			this.delegate.run();
			ig.input.clearPressed();
			this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
		},
		getDrawPos: null
	});
	ig.System.DRAW = {
		AUTHENTIC: function(b) {
			return Math.round(b) *
				this.scale
		},
		SMOOTH: function(b) {
			return Math.round(b * this.scale)
		},
		SUBPIXEL: function(b) {
			return b * this.scale
		}
	};
	ig.System.drawMode = ig.System.DRAW.SMOOTH;
	ig.System.SCALE = {
		CRISP: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
			b.style.imageRendering = "-moz-crisp-edges";
			b.style.imageRendering = "-o-crisp-edges";
			b.style.imageRendering = "-webkit-optimize-contrast";
			b.style.imageRendering = "crisp-edges";
			b.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(b, c) {
			ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
			b.style.imageRendering = "";
			b.style.msInterpolationMode = ""
		}
	};
	ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0,
			z: 0
		},
		initMouse: function() {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var b = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener("mousewheel", b, !1);
				ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
				ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
				ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
				ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
					this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
			}
		},
		initKeyboard: function() {
			this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
		},
		initAccelerometer: function() {
			this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
		},
		mousewheel: function(b) {
			var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
			c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
		},
		mousemove: function(b) {
			for (var c =
					ig.system.canvas, d = 0, e = 0; null != c;) d += c.offsetLeft, e += c.offsetTop, c = c.offsetParent;
			var c = b.pageX,
				f = b.pageY;
			b.touches && (c = b.touches[0].clientX, f = b.touches[0].clientY);
			this.mouse.x = (c - d) / ig.system.scale;
			this.mouse.y = (f - e) / ig.system.scale
		},
		contextmenu: function(b) {
			this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
		},
		keydown: function(b) {
			b.stopPropagation();
			b.preventDefault();
			var c = b.target.tagName;
			if (!("INPUT" == c || "TEXTAREA" == c))
				if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 :
					ig.KEY.MOUSE1, 0 > c && !ig.ua.mobile && window.focus(), ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), b = this.bindings[c]) this.actions[b] = !0, this.locks[b] || (this.presses[b] = !0, this.locks[b] = !0)
		},
		keyup: function(b) {
			if ("text" != b.target.type) {
				var c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1];
				c && (this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
			}
		},
		devicemotion: function(b) {
			this.accel = b.accelerationIncludingGravity
		},
		bind: function(b, c) {
			0 > b ? this.initMouse() :
				0 < b && this.initKeyboard();
			this.bindings[b] = c
		},
		bindTouch: function(b, c) {
			var d = ig.$(b),
				e = this;
			d.addEventListener("touchstart", function(b) {
				e.touchStart(b, c)
			}, !1);
			d.addEventListener("touchend", function(b) {
				e.touchEnd(b, c)
			}, !1)
		},
		unbind: function(b) {
			this.delayedKeyup[this.bindings[b]] = !0;
			this.bindings[b] = null
		},
		unbindAll: function() {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {}
		},
		state: function(b) {
			return this.actions[b]
		},
		pressed: function(b) {
			return this.presses[b]
		},
		released: function(b) {
			return this.delayedKeyup[b]
		},
		clearPressed: function() {
			for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
			this.delayedKeyup = {};
			this.presses = {}
		},
		touchStart: function(b, c) {
			this.actions[c] = !0;
			this.presses[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		},
		touchEnd: function(b, c) {
			this.delayedKeyup[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1
		}
	})
});
ig.baked = !0;
ig.module("impact.sound-handler").defines(function() {
	ig.SoundHandler = ig.Class.extend({
		formats: {
			ogg: ".ogg",
			mp3: ".mp3"
		},
		jukebox: null,
		pausePosition: null,
		globalMute: !1,
		forceMuted: !1,
		muted: !1,
		bgmPlaying: !1,
		soundPlaying: !1,
		currentSoundPlaying: null,
		soundBuffer: [],
		voSoundLoaded: [],
		sfxSoundLoaded: [],
		SOUNDID: {},
		voSoundsToLoad: [],
		sfxSoundsToLoad: [{
			name: "staticSound",
			path: "media/audio/play/static"
		}, {
			name: "openingSound",
			path: "media/audio/opening/opening"
		}, {
			name: "kittyopeningSound",
			path: "media/audio/opening/kittyopening"
		}, {
			name: "button",
			path: "media/audio/sfx/button"
		}, {
			name: "blop",
			path: "media/audio/sfx/blop"
		}, {
			name: "step",
			path: "media/audio/sfx/step"
		}, {
			name: "jump",
			path: "media/audio/sfx/jump2"
		}, {
			name: "poof",
			path: "media/audio/sfx/wrong"
		}, {
			name: "star",
			path: "media/audio/sfx/bring"
		}, {
			name: "shield",
			path: "media/audio/sfx/win"
		}, {
			name: "boom",
			path: "media/audio/sfx/boom"
		}],
		debug: !1,
		init: function() {
			this.initSfx();
			this.setupWindowHandler()
		},
		allVoSoundLoaded: function() {
			if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
				this.debug &&
					console.log("Vo ready");
				for (index = 0; index < this.voSoundLoaded.length; index++) this.voSoundLoaded[index].on("end", function(b) {
					b.isPlaying = !1;
					this.soundBuffer.pop()
				}.bind(this, this.voSoundLoaded[index])), this.voSoundLoaded[index].on("play", function(b) {
					b.isPlaying = !0
				}.bind(this, this.voSoundLoaded[index]));
				return !0
			}
			return !1
		},
		allSfxSoundLoaded: function() {
			return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1
		},
		stopBackgroundMusic: function() {
			this.jukebox || this.setupJukebox();
			this.jukebox && (this.pausePosition =
				this.jukebox.player.pause(), this.bgmPlaying = !1)
		},
		playBackgroundMusic: function() {
			this.jukebox || this.setupJukebox();
			this.jukebox && (null != this.pausePosition ? this.jukebox.player.resume(this.pausePosition) : (this.jukebox.player.resume(0), this.jukebox.player.play()), this.bgmPlaying = !0)
		},
		playSound: function(b) {
			if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying) this.soundBuffer.push(b), b.play()
		},
		stopAllAndPlaySound: function(b) {
			this.stopAllSounds();
			this.playSound(b)
		},
		stopAllSounds: function() {
			for (index =
				0; index < this.soundBuffer.length; index++) this.soundBuffer[index].isPlaying = !1, this.soundBuffer.splice(0, 1)[0].stop()
		},
		addSound: function(b, c, d) {
			var e = c + this.formats.ogg;
			c += this.formats.mp3;
			this.SOUNDID[b] = b;
			this[b] = d ? new Howl({
				urls: [e, c],
				onload: d
			}) : new Howl({
				urls: [e, c]
			})
		},
		_muteSounds: function() {
			for (i = 0; i < ig.resources.length; i++) ig.resources[i].multiChannel && ig.resources[i].stop();
			Howler.mute();
			this.debug && console.log("Sounds muted")
		},
		_unMuteSounds: function() {
			Howler.unmute();
			ig.Sound.enabled = !0;
			this.debug &&
				console.log("Sounds can play")
		},
		focusBlurMute: function() {
			this.forceMuted || this.mute()
		},
		focusBlurUnmute: function() {
			this.forceMuted || this.unmute()
		},
		setForceMuted: function(b) {
			this.forceMuted = b
		},
		mute: function() {
			this._muteSounds();
			this.jukebox && (this.jukebox.player.pause(), this.jukebox.player.setVolume(0.01));
			this.muted = !0
		},
		unmute: function() {
			this._unMuteSounds();
			if (this.jukebox && this.bgmPlaying) {
				this.jukebox.player.resume();
				var b = this.musicVolume;
				0 == b && (b = 0.01);
				this.jukebox.player.setVolume(b)
			}
			this.muted = !1
		},
		setupWindowHandler: function() {
			// "true" === getQueryVariable("webview") ? ($(window).focus(function() {
			// 	ig.game && ig.game.resumeGame();
			// 	ig.soundHandler && ig.soundHandler.focusBlurUnmute()
			// }), $(window).blur(function() {
			// 	ig.game && ig.game.pauseGame();
			// 	ig.soundHandler && ig.soundHandler.focusBlurMute()
			// })) : (window.onfocus = function() {
			// 	ig.game && ig.game.resumeGame();
			// 	ig.soundHandler && ig.soundHandler.focusBlurUnmute()
			// }, window.onblur = function() {
			// 	ig.game && ig.game.pauseGame();
			// 	ig.soundHandler && ig.soundHandler.focusBlurMute()
			// })
		},
		initSfx: function() {
			for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
				var b = function(b) {
					this.sfxSoundLoaded.push(this[b])
				}.bind(this, this.sfxSoundsToLoad[index].name);
				this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b)
			}
		},
		initVoSfx: function() {
			for (index = 0; index < this.voSoundsToLoad.length; index++) {
				var b = function(b) {
					this.voSoundLoaded.push(this[b])
				}.bind(this, this.voSoundsToLoad[index].name);
				this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path,
					b)
			}
		},
		setupDesktopMusic: function() {
			ig.music.add("media/audio/music/bgm.*", "background")
		},
		setupJukebox: function() {
			this.jukebox = new ig.Jukebox;
			this.jukebox.player.setVolume(0.01);
			this.stopBackgroundMusic()
		},
		forceLoopBGM: function() {
			if (this.bgmPlaying && !this.forceMuted && this.jukebox && this.jukebox.player)
				if (this.jukebox.player.getCurrentTime()) {
					var b = 0.06;
					ig.ua.mobile && (b = 0.06, ig.ua.android && (b = 0.07));
					this.jukebox.player.settings.spritemap.music && this.jukebox.player.settings.spritemap.music.loop ? this.jukebox.player.getCurrentTime() >=
						this.jukebox.player.settings.spritemap.music.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start)) : this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop ? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.isPlaying.start)) : this.jukebox.player.backgroundMusic && this.jukebox.player.backgroundMusic.loop && this.jukebox.player.getCurrentTime() >=
						this.jukebox.player.backgroundMusic.end - b && (this.jukebox.player.pause(), this.jukebox.player.resume(this.jukebox.player.backgroundMusic.start))
				} else this.jukebox.player.resume()
		},
		setSfxVolume: function(b) {
			this.sfxVolume = b;
			Howler.volume(this.sfxVolume)
		},
		setMusicVolume: function(b) {
			this.musicVolume = b;
			this.jukebox && (b = this.musicVolume, 0 == b ? (this.jukebox.player.setVolume(b), this.bgmPlaying && this.jukebox.player.pause(), this.bgmPlaying = !1) : (this.jukebox.player.setVolume(b), this.bgmPlaying || this.jukebox.player.resume(0),
				this.bgmPlaying = !0))
		}
	})
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
	ig.main = function(b, c, d, e, f, g, m) {
		ig.system = new ig.System(b, d, e, f, g || 1);
		ig.input = new ig.Input;
		ig.soundManager = new ig.SoundManager;
		ig.music = new ig.Music;
		ig.ready = !0;
		ig.soundHandler = new ig.SoundHandler;
		(new(m || ig.Loader)(c, ig.resources)).load()
	}
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
	ig.AnimationSheet = ig.Class.extend({
		width: 8,
		height: 8,
		image: null,
		init: function(b, c, d) {
			this.width = c;
			this.height = d;
			this.image = new ig.Image(b)
		}
	});
	ig.Animation = ig.Class.extend({
		sheet: null,
		timer: null,
		sequence: [],
		flip: {
			x: !1,
			y: !1
		},
		pivot: {
			x: 0,
			y: 0
		},
		frame: 0,
		tile: 0,
		loopCount: 0,
		alpha: 1,
		angle: 0,
		init: function(b, c, d, e) {
			this.sheet = b;
			this.pivot = {
				x: b.width / 2,
				y: b.height / 2
			};
			this.timer = new ig.Timer;
			this.frameTime = c;
			this.sequence = d;
			this.stop = !!e;
			this.tile = this.sequence[0]
		},
		rewind: function() {
			this.timer.reset();
			this.loopCount = 0;
			this.tile = this.sequence[0];
			return this
		},
		gotoFrame: function(b) {
			this.timer.set(this.frameTime * -b);
			this.update()
		},
		gotoRandomFrame: function() {
			this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
		},
		update: function() {
			var b = Math.floor(this.timer.delta() / this.frameTime);
			this.loopCount = Math.floor(b / this.sequence.length);
			this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
			this.tile = this.sequence[this.frame]
		},
		draw: function(b, c) {
			var d = Math.max(this.sheet.width, this.sheet.height);
			b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
				this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
		}
	})
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
	ig.Entity = ig.Class.extend({
		id: 0,
		settings: {},
		size: {
			x: 16,
			y: 16
		},
		offset: {
			x: 0,
			y: 0
		},
		posMP: {
			x: 0,
			y: 0
		},
		posML: {
			x: 0,
			y: 0
		},
		enableReposition: !1,
		pos: {
			x: 0,
			y: 0
		},
		last: {
			x: 0,
			y: 0
		},
		vel: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0
		},
		friction: {
			x: 0,
			y: 0
		},
		maxVel: {
			x: 100,
			y: 100
		},
		zIndex: 0,
		gravityFactor: 1,
		standing: !1,
		bounciness: 0,
		minBounceVelocity: 40,
		anims: {},
		animSheet: null,
		currentAnim: null,
		health: 10,
		type: 0,
		checkAgainst: 0,
		collides: 0,
		_killed: !1,
		slopeStanding: {
			min: (44).toRad(),
			max: (136).toRad()
		},
		init: function(b, c, d) {
			this.id = ++ig.Entity._lastId;
			this.pos.x = b;
			this.pos.y = c;
			ig.merge(this, d)
		},
		addAnim: function(b, c, d, e) {
			if (!this.animSheet) throw "No animSheet to add the animation " + b + " to.";
			c = new ig.Animation(this.animSheet, c, d, e);
			this.anims[b] = c;
			this.currentAnim || (this.currentAnim = c);
			return c
		},
		update: function() {
			this.last.x = this.pos.x;
			this.last.y = this.pos.y;
			this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
			this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x,
				this.maxVel.x);
			this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
			var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
			this.handleMovementTrace(b);
			this.currentAnim && this.currentAnim.update()
		},
		getNewVelocity: function(b, c, d, e) {
			return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
		},
		handleMovementTrace: function(b) {
			this.standing = !1;
			b.collision.y &&
				(0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (b.collision.slope) {
				var c = b.collision.slope;
				if (0 < this.bounciness) {
					var d = this.vel.x * c.nx + this.vel.y * c.ny;
					this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
				} else d = (this.vel.x * c.x + this.vel.y *
					c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos = b.pos
		},
		reposition: function() {
			ig.ua.mobile && this.enableReposition && (portraitMode ? (this.pos.x = this.posMP.x, this.pos.y = this.posMP.y) : (this.pos.x = this.posML.x, this.pos.y = this.posML.y))
		},
		draw: function() {
			this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
		},
		kill: function() {
			ig.game.removeEntity(this)
		},
		receiveDamage: function(b) {
			this.health -= b;
			0 >= this.health && this.kill()
		},
		touches: function(b) {
			return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
		},
		distanceTo: function(b) {
			var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
			b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
			return Math.sqrt(c * c + b * b)
		},
		angleTo: function(b) {
			return Math.atan2(b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x /2))
		},
		check: function() {},
		collideWith: function() {},
		ready: function() {}
	});
	ig.Entity._lastId = 0;
	ig.Entity.COLLIDES = {
		NEVER: 0,
		LITE: 1,
		PASSIVE: 2,
		ACTIVE: 4,
		FIXED: 8
	};
	ig.Entity.TYPE = {
		NONE: 0,
		A: 1,
		B: 2,
		BOTH: 3
	};
	ig.Entity.checkPair = function(b, c) {
		b.checkAgainst & c.type && b.check(c);
		c.checkAgainst & b.type && c.check(b);
		b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
	};
	ig.Entity.solveCollision = function(b, c) {
		var d = null;
		if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d =
			b;
		else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
		b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
	};
	ig.Entity.seperateOnXAxis = function(b, c, d) {
		var e =
			b.pos.x + b.size.x - c.pos.x;
		d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
	};
	ig.Entity.seperateOnYAxis = function(b, c, d) {
		var e = b.pos.y + b.size.y - c.pos.y;
		if (d) {
			c = b === d ? c : b;
			d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
			var f = 0;
			d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
			b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
			d.pos.y = b.pos.y;
			d.pos.x = b.pos.x
		} else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d =
			(b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
	}
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [
			[]
		],
		name: null,
		init: function(b, c) {
			this.tilesize = b;
			this.data = c;
			this.height = c.length;
			this.width = c[0].length
		},
		getTile: function(b, c) {
			var d = Math.floor(b / this.tilesize),
				e = Math.floor(c / this.tilesize);
			return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
		},
		setTile: function(b, c, d) {
			b = Math.floor(b / this.tilesize);
			c = Math.floor(c / this.tilesize);
			0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] =
				d)
		}
	})
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
	ig.CollisionMap = ig.Map.extend({
		lastSlope: 1,
		tiledef: null,
		init: function(b, c, f) {
			this.parent(b, c);
			this.tiledef = f || ig.CollisionMap.defaultTileDef;
			for (var g in this.tiledef) g | 0 > this.lastSlope && (this.lastSlope = g | 0)
		},
		trace: function(b, c, f, g, m, p) {
			var r = {
					collision: {
						x: !1,
						y: !1,
						slope: !1
					},
					pos: {
						x: b,
						y: c
					},
					tile: {
						x: 0,
						y: 0
					}
				},
				u = Math.ceil(Math.max(Math.abs(f), Math.abs(g)) / this.tilesize);
			if (1 < u)
				for (var s = f / u, n = g / u, q = 0; q < u && (s || n) && !(this._traceStep(r,
						b, c, s, n, m, p, f, g, q), b = r.pos.x, c = r.pos.y, r.collision.x && (f = s = 0), r.collision.y && (g = n = 0), r.collision.slope); q++);
			else this._traceStep(r, b, c, f, g, m, p, f, g, 0);
			return r
		},
		_traceStep: function(b, c, f, g, m, p, r, u, s, n) {
			b.pos.x += g;
			b.pos.y += m;
			var q = 0;
			if (g) {
				var t = 0 < g ? p : 0,
					B = 0 > g ? this.tilesize : 0,
					q = Math.max(Math.floor(f / this.tilesize), 0),
					K = Math.min(Math.ceil((f + r) / this.tilesize), this.height);
				g = Math.floor((b.pos.x + t) / this.tilesize);
				var C = Math.floor((c + t) / this.tilesize);
				if (0 < n || g == C || 0 > C || C >= this.width) C = -1;
				if (0 <= g && g < this.width)
					for (var I =
							q; I < K && !(-1 != C && (q = this.data[I][C], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, f, u, s, p, r, C, I))); I++)
						if (q = this.data[I][g], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, f, u, s, p, r, g, I)) {
							if (1 < q && q <= this.lastSlope && b.collision.slope) break;
							b.collision.x = !0;
							b.tile.x = q;
							c = b.pos.x = g * this.tilesize - t + B;
							u = 0;
							break
						}
			}
			if (m) {
				t = 0 < m ? r : 0;
				m = 0 > m ? this.tilesize : 0;
				q = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
				B = Math.min(Math.ceil((b.pos.x + p) / this.tilesize), this.width);
				I = Math.floor((b.pos.y + t) / this.tilesize);
				K = Math.floor((f + t) / this.tilesize);
				if (0 < n || I == K || 0 > K || K >= this.height) K = -1;
				if (0 <= I && I < this.height)
					for (g = q; g < B && !(-1 != K && (q = this.data[K][g], 1 < q && q <= this.lastSlope && this._checkTileDef(b, q, c, f, u, s, p, r, g, K))); g++)
						if (q = this.data[I][g], 1 == q || q > this.lastSlope || 1 < q && this._checkTileDef(b, q, c, f, u, s, p, r, g, I)) {
							if (1 < q && q <= this.lastSlope && b.collision.slope) break;
							b.collision.y = !0;
							b.tile.y = q;
							b.pos.y = I * this.tilesize - t + m;
							break
						}
			}
		},
		_checkTileDef: function(b, c, f, g, m, p, r, u, s, n) {
			var q = this.tiledef[c];
			if (!q) return !1;
			c = (q[2] -
				q[0]) * this.tilesize;
			var t = (q[3] - q[1]) * this.tilesize,
				B = q[4];
			r = f + m + (0 > t ? r : 0) - (s + q[0]) * this.tilesize;
			u = g + p + (0 < c ? u : 0) - (n + q[1]) * this.tilesize;
			if (0 < c * u - t * r) {
				if (0 > m * -t + p * c) return B;
				s = Math.sqrt(c * c + t * t);
				n = t / s;
				s = -c / s;
				var K = r * n + u * s,
					q = n * K,
					K = s * K;
				if (q * q + K * K >= m * m + p * p) return B || 0.5 > c * (u - p) - t * (r - m);
				b.pos.x = f + m - q;
				b.pos.y = g + p - K;
				b.collision.slope = {
					x: c,
					y: t,
					nx: n,
					ny: s
				};
				return !0
			}
			return !1
		}
	});
	var b = 1 / 3,
		c = 2 / 3;
	ig.CollisionMap.defaultTileDef = {
		5: [0, 1, 1, c, !0],
		6: [0, c, 1, b, !0],
		7: [0, b, 1, 0, !0],
		3: [0, 1, 1, 0.5, !0],
		4: [0, 0.5, 1, 0, !0],
		2: [0,
			1, 1, 0, !0
		],
		10: [0.5, 1, 1, 0, !0],
		21: [0, 1, 0.5, 0, !0],
		32: [c, 1, 1, 0, !0],
		43: [b, 1, c, 0, !0],
		54: [0, 1, b, 0, !0],
		27: [0, 0, 1, b, !0],
		28: [0, b, 1, c, !0],
		29: [0, c, 1, 1, !0],
		25: [0, 0, 1, 0.5, !0],
		26: [0, 0.5, 1, 1, !0],
		24: [0, 0, 1, 1, !0],
		11: [0, 0, 0.5, 1, !0],
		22: [0.5, 0, 1, 1, !0],
		33: [0, 0, b, 1, !0],
		44: [b, 0, c, 1, !0],
		55: [c, 0, 1, 1, !0],
		16: [1, b, 0, 0, !0],
		17: [1, c, 0, b, !0],
		18: [1, 1, 0, c, !0],
		14: [1, 0.5, 0, 0, !0],
		15: [1, 1, 0, 0.5, !0],
		13: [1, 1, 0, 0, !0],
		8: [0.5, 1, 0, 0, !0],
		19: [1, 1, 0.5, 0, !0],
		30: [b, 1, 0, 0, !0],
		41: [c, 1, b, 0, !0],
		52: [1, 1, c, 0, !0],
		38: [1, c, 0, 1, !0],
		39: [1, b, 0, c, !0],
		40: [1, 0,
			0, b, !0
		],
		36: [1, 0.5, 0, 1, !0],
		37: [1, 0, 0, 0.5, !0],
		35: [1, 0, 0, 1, !0],
		9: [1, 0, 0.5, 1, !0],
		20: [0.5, 0, 0, 1, !0],
		31: [1, 0, c, 1, !0],
		42: [c, 0, b, 1, !0],
		53: [b, 0, 0, 1, !0],
		12: [0, 0, 1, 0, !1],
		23: [1, 1, 0, 1, !1],
		34: [1, 0, 1, 1, !1],
		45: [0, 1, 0, 0, !1]
	};
	ig.CollisionMap.staticNoCollision = {
		trace: function(b, c, f, g) {
			return {
				collision: {
					x: !1,
					y: !1,
					slope: !1
				},
				pos: {
					x: b + f,
					y: c + g
				},
				tile: {
					x: 0,
					y: 0
				}
			}
		}
	}
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
	ig.BackgroundMap = ig.Map.extend({
		tiles: null,
		scroll: {
			x: 0,
			y: 0
		},
		distance: 1,
		repeat: !1,
		tilesetName: "",
		foreground: !1,
		enabled: !0,
		preRender: !1,
		preRenderedChunks: null,
		chunkSize: 512,
		debugChunks: !1,
		anims: {},
		init: function(b, c, d) {
			this.parent(b, c);
			this.setTileset(d)
		},
		setTileset: function(b) {
			this.tilesetName = b instanceof ig.Image ? b.path : b;
			this.tiles = new ig.Image(this.tilesetName);
			this.preRenderedChunks = null
		},
		setScreenPos: function(b,
			c) {
			this.scroll.x = b / this.distance;
			this.scroll.y = c / this.distance
		},
		preRenderMapToChunks: function() {
			var b = this.width * this.tilesize * ig.system.scale,
				c = this.height * this.tilesize * ig.system.scale,
				d = Math.ceil(b / this.chunkSize),
				e = Math.ceil(c / this.chunkSize);
			this.preRenderedChunks = [];
			for (var f = 0; f < e; f++) {
				this.preRenderedChunks[f] = [];
				for (var g = 0; g < d; g++) this.preRenderedChunks[f][g] = this.preRenderChunk(g, f, g == d - 1 ? b - g * this.chunkSize : this.chunkSize, f == e - 1 ? c - f * this.chunkSize : this.chunkSize)
			}
		},
		preRenderChunk: function(b,
			c, d, e) {
			var f = d / this.tilesize / ig.system.scale + 1,
				g = e / this.tilesize / ig.system.scale + 1,
				m = b * this.chunkSize / ig.system.scale % this.tilesize,
				p = c * this.chunkSize / ig.system.scale % this.tilesize;
			b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
			c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
			var r = ig.$new("canvas");
			r.width = d;
			r.height = e;
			d = ig.system.context;
			ig.system.context = r.getContext("2d");
			for (e = 0; e < f; e++)
				for (var u = 0; u < g; u++)
					if (e + b < this.width && u + c < this.height) {
						var s = this.data[u + c][e + b];
						s && this.tiles.drawTile(e * this.tilesize - m, u * this.tilesize - p, s - 1, this.tilesize)
					}
			ig.system.context = d;
			return r
		},
		draw: function() {
			this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
		},
		drawPreRendered: function() {
			this.preRenderedChunks || this.preRenderMapToChunks();
			var b = ig.system.getDrawPos(this.scroll.x),
				c = ig.system.getDrawPos(this.scroll.y);
			this.repeat && (b %= this.width * this.tilesize * ig.system.scale, c %= this.height * this.tilesize * ig.system.scale);
			var d = Math.max(Math.floor(b /
					this.chunkSize), 0),
				e = Math.max(Math.floor(c / this.chunkSize), 0),
				f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
				g = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
				m = this.preRenderedChunks[0].length,
				p = this.preRenderedChunks.length;
			this.repeat || (f = Math.min(f, m), g = Math.min(g, p));
			for (var r = 0; e < g; e++) {
				for (var u = 0, s = d; s < f; s++) {
					var n = this.preRenderedChunks[e % p][s % m],
						q = -b + s * this.chunkSize - u,
						t = -c + e * this.chunkSize - r;
					ig.system.context.drawImage(n, q, t);
					ig.Image.drawCount++;
					this.debugChunks && (ig.system.context.strokeStyle =
						"#f0f", ig.system.context.strokeRect(q, t, this.chunkSize, this.chunkSize));
					this.repeat && n.width < this.chunkSize && q + n.width < ig.system.realWidth && (u = this.chunkSize - n.width, f++)
				}
				this.repeat && n.height < this.chunkSize && t + n.height < ig.system.realHeight && (r = this.chunkSize - n.height, g++)
			}
		},
		drawTiled: function() {
			for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, g = this.scroll.y % this.tilesize, m = -f - this.tilesize, f = ig.system.width + this.tilesize -
					f, p = ig.system.height + this.tilesize - g, r = -1, g = -g - this.tilesize; g < p; r++, g += this.tilesize) {
				var u = r + e;
				if (u >= this.height || 0 > u) {
					if (!this.repeat) continue;
					u = 0 < u ? u % this.height : (u + 1) % this.height + this.height - 1
				}
				for (var s = -1, n = m; n < f; s++, n += this.tilesize) {
					b = s + d;
					if (b >= this.width || 0 > b) {
						if (!this.repeat) continue;
						b = 0 < b ? b % this.width : (b + 1) % this.width + this.width - 1
					}
					if (b = this.data[u][b])(c = this.anims[b - 1]) ? c.draw(n, g) : this.tiles.drawTile(n, g, b - 1, this.tilesize)
				}
			}
		}
	})
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
	ig.Game = ig.Class.extend({
		clearColor: "#000000",
		gravity: 0,
		screen: {
			x: 0,
			y: 0
		},
		_rscreen: {
			x: 0,
			y: 0
		},
		entities: [],
		namedEntities: {},
		collisionMap: ig.CollisionMap.staticNoCollision,
		backgroundMaps: [],
		backgroundAnims: {},
		autoSort: !1,
		sortBy: null,
		cellSize: 64,
		_deferredKill: [],
		_levelToLoad: null,
		_doSortEntities: !1,
		staticInstantiate: function() {
			this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
			ig.game = this;
			return null
		},
		loadLevelWithoutEntities: function(b) {
			this.screen = {
				x: 0,
				y: 0
			};
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			this.backgroundMaps = [];
			for (var c = 0; c < b.layer.length; c++) {
				var d = b.layer[c];
				if ("collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
				else {
					var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
					e.anims = this.backgroundAnims[d.tilesetName] || {};
					e.repeat = d.repeat;
					e.distance = d.distance;
					e.foreground = !!d.foreground;
					e.preRender = !!d.preRender;
					e.name =
						d.name;
					this.backgroundMaps.push(e)
				}
			}
		},
		loadLevel: function(b) {
			this.screen = {
				x: 0,
				y: 0
			};
			this.entities = [];
			this.namedEntities = {};
			for (var c = 0; c < b.entities.length; c++) {
				var d = b.entities[c];
				this.spawnEntity(d.type, d.x, d.y, d.settings)
			}
			this.sortEntities();
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			this.backgroundMaps = [];
			for (c = 0; c < b.layer.length; c++)
				if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
				else {
					var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
					e.anims = this.backgroundAnims[d.tilesetName] || {};
					e.repeat = d.repeat;
					e.distance = d.distance;
					e.foreground = !!d.foreground;
					e.preRender = !!d.preRender;
					e.name = d.name;
					this.backgroundMaps.push(e)
				}
			for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
		},
		loadLevelDeferred: function(b) {
			this._levelToLoad = b
		},
		getMapByName: function(b) {
			if ("collision" == b) return this.collisionMap;
			for (var c = 0; c < this.backgroundMaps.length; c++)
				if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
			return null
		},
		getEntityByName: function(b) {
			return this.namedEntities[b]
		},
		getEntitiesByType: function(b) {
			b = "string" === typeof b ? ig.global[b] : b;
			for (var c = [], d = 0; d < this.entities.length; d++) {
				var e = this.entities[d];
				e instanceof b && !e._killed && c.push(e)
			}
			return c
		},
		spawnEntity: function(b, c, d, e) {
			var f = "string" === typeof b ? ig.global[b] : b;
			if (!f) throw "Can't spawn entity of type " + b;
			b = new f(c, d, e || {});
			this.entities.push(b);
			b.name && (this.namedEntities[b.name] = b);
			return b
		},
		sortEntities: function() {
			this.entities.sort(this.sortBy)
		},
		sortEntitiesDeferred: function() {
			this._doSortEntities = !0
		},
		removeEntity: function(b) {
			b.name && delete this.namedEntities[b.name];
			b._killed = !0;
			b.type = ig.Entity.TYPE.NONE;
			b.checkAgainst = ig.Entity.TYPE.NONE;
			b.collides = ig.Entity.COLLIDES.NEVER;
			this._deferredKill.push(b)
		},
		run: function() {
			this.update();
			this.draw()
		},
		update: function() {
			this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
			if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
			this.updateEntities();
			this.checkEntities();
			for (var b = 0; b < this._deferredKill.length; b++) this.entities.erase(this._deferredKill[b]);
			this._deferredKill = [];
			for (var c in this.backgroundAnims) {
				var b = this.backgroundAnims[c],
					d;
				for (d in b) b[d].update()
			}
		},
		updateEntities: function() {
			for (var b = 0; b < this.entities.length; b++) {
				var c = this.entities[b];
				c._killed || c.update()
			}
		},
		draw: function() {
			this.clearColor && ig.system.clear(this.clearColor);
			this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
			this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
			var b;
			for (b = 0; b < this.backgroundMaps.length; b++) {
				var c = this.backgroundMaps[b];
				if (c.foreground) break;
				c.setScreenPos(this.screen.x, this.screen.y);
				c.draw()
			}
			this.drawEntities();
			for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
		},
		drawEntities: function() {
			for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
		},
		checkEntities: function() {
			for (var b = {}, c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
					for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), g = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, m = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, p = Math.floor(d.pos.x / this.cellSize); p < g; p++)
						for (var r = f; r < m; r++)
							if (b[p])
								if (b[p][r]) {
									for (var u = b[p][r], s = 0; s < u.length; s++) d.touches(u[s]) && !e[u[s].id] && (e[u[s].id] = !0, ig.Entity.checkPair(d, u[s]));
									u.push(d)
								} else b[p][r] = [d];
				else b[p] = {}, b[p][r] = [d]
			}
		}
	});
	ig.Game.SORT = {
		Z_INDEX: function(b, c) {
			return b.zIndex - c.zIndex
		},
		POS_X: function(b, c) {
			return b.pos.x + b.size.x - (c.pos.x +
				c.size.x)
		},
		POS_Y: function(b, c) {
			return b.pos.y + b.size.y - (c.pos.y + c.size.y)
		}
	}
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
	ig.System.inject({
		run: function() {
			ig.debug.beforeRun();
			this.parent();
			ig.debug.afterRun()
		},
		setGameNow: function(b) {
			this.parent(b);
			ig.debug.ready()
		}
	});
	ig.Debug = ig.Class.extend({
		options: {},
		panels: {},
		numbers: {},
		container: null,
		panelMenu: null,
		activePanel: null,
		debugTime: 0,
		debugTickAvg: 0.016,
		debugRealTime: Date.now(),
		init: function() {
			this.container = ig.$new("div");
			this.container.className = "ig_debug";
			ig.$("body")[0].appendChild(this.container);
			this.panelMenu = ig.$new("div");
			this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
			this.panelMenu.className = "ig_debug_panel_menu";
			this.container.appendChild(this.panelMenu);
			this.numberContainer = ig.$new("div");
			this.numberContainer.className = "ig_debug_stats";
			this.panelMenu.appendChild(this.numberContainer);
			window.console && window.console.log && window.console.assert && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) :
				console.assert);
			ig.show = this.showNumber.bind(this)
		},
		addNumber: function(b) {
			var c = ig.$new("span");
			this.numberContainer.appendChild(c);
			this.numberContainer.appendChild(document.createTextNode(b));
			this.numbers[b] = c
		},
		showNumber: function(b, c, d) {
			this.numbers[b] || this.addNumber(b, d);
			this.numbers[b].textContent = c
		},
		addPanel: function(b) {
			var c = new b.type(b.name, b.label);
			if (b.options)
				for (var d = 0; d < b.options.length; d++) {
					var e = b.options[d];
					c.addOption(new ig.DebugOption(e.name, e.object, e.property))
				}
			this.panels[c.name] =
				c;
			c.container.style.display = "none";
			this.container.appendChild(c.container);
			b = ig.$new("div");
			b.className = "ig_debug_menu_item";
			b.textContent = c.label;
			b.addEventListener("click", function() {
				this.togglePanel(c)
			}.bind(this), !1);
			c.menuItem = b;
			e = !1;
			for (d = 1; d < this.panelMenu.childNodes.length; d++) {
				var f = this.panelMenu.childNodes[d];
				if (f.textContent > c.label) {
					this.panelMenu.insertBefore(b, f);
					e = !0;
					break
				}
			}
			e || this.panelMenu.appendChild(b)
		},
		showPanel: function(b) {
			this.togglePanel(this.panels[b])
		},
		togglePanel: function(b) {
			b !=
				this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
			var c = "block" != b.container.style.display;
			b.toggle(c);
			b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
			c && (this.activePanel = b)
		},
		ready: function() {
			for (var b in this.panels) this.panels[b].ready()
		},
		beforeRun: function() {
			var b = Date.now();
			this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
			this.debugRealTime = b;
			this.activePanel && this.activePanel.beforeRun()
		},
		afterRun: function() {
			var b = Date.now() - this.debugRealTime;
			this.debugTime = 0.8 * this.debugTime + 0.2 * b;
			this.activePanel && this.activePanel.afterRun();
			this.showNumber("ms", this.debugTime.toFixed(2));
			this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
			this.showNumber("draws", ig.Image.drawCount);
			ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
			ig.Image.drawCount = 0
		}
	});
	ig.DebugPanel = ig.Class.extend({
		active: !1,
		container: null,
		options: [],
		panels: [],
		label: "",
		name: "",
		init: function(b,
			c) {
			this.name = b;
			this.label = c;
			this.container = ig.$new("div");
			this.container.className = "ig_debug_panel " + this.name
		},
		toggle: function(b) {
			this.active = b;
			this.container.style.display = b ? "block" : "none"
		},
		addPanel: function(b) {
			this.panels.push(b);
			this.container.appendChild(b.container)
		},
		addOption: function(b) {
			this.options.push(b);
			this.container.appendChild(b.container)
		},
		ready: function() {},
		beforeRun: function() {},
		afterRun: function() {}
	});
	ig.DebugOption = ig.Class.extend({
		name: "",
		labelName: "",
		className: "ig_debug_option",
		label: null,
		mark: null,
		container: null,
		active: !1,
		colors: {
			enabled: "#fff",
			disabled: "#444"
		},
		init: function(b, c, d) {
			this.name = b;
			this.object = c;
			this.property = d;
			this.active = this.object[this.property];
			this.container = ig.$new("div");
			this.container.className = "ig_debug_option";
			this.label = ig.$new("span");
			this.label.className = "ig_debug_label";
			this.label.textContent = this.name;
			this.mark = ig.$new("span");
			this.mark.className = "ig_debug_label_mark";
			this.container.appendChild(this.mark);
			this.container.appendChild(this.label);
			this.container.addEventListener("click", this.click.bind(this), !1);
			this.setLabel()
		},
		setLabel: function() {
			this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
		},
		click: function(b) {
			this.active = !this.active;
			this.object[this.property] = this.active;
			this.setLabel();
			b.stopPropagation();
			b.preventDefault();
			return !1
		}
	});
	ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
	ig.Entity.inject({
		colors: {
			names: "#fff",
			velocities: "#0f0",
			boxes: "#f00"
		},
		draw: function() {
			this.parent();
			ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y *
				ig.system.scale));
			if (ig.Entity._debugShowVelocities) {
				var b = this.pos.x + this.size.x / 2,
					c = this.pos.y + this.size.y / 2;
				this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
			}
			if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
				for (var d in this.target)(b = ig.game.getEntityByName(this.target[d])) &&
					this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
		},
		_debugDrawLine: function(b, c, d, e, f) {
			ig.system.context.strokeStyle = b;
			ig.system.context.lineWidth = 1;
			ig.system.context.beginPath();
			ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
			ig.system.context.lineTo(ig.system.getDrawPos(e - ig.game.screen.x), ig.system.getDrawPos(f - ig.game.screen.y));
			ig.system.context.stroke();
			ig.system.context.closePath()
		}
	});
	ig.Entity._debugEnableChecks = !0;
	ig.Entity._debugShowBoxes = !1;
	ig.Entity._debugShowVelocities = !1;
	ig.Entity._debugShowNames = !1;
	ig.Entity.oldCheckPair = ig.Entity.checkPair;
	ig.Entity.checkPair = function(b, c) {
		ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
	};
	ig.debug.addPanel({
		type: ig.DebugPanel,
		name: "entities",
		label: "Entities",
		options: [{
			name: "Checks & Collisions",
			object: ig.Entity,
			property: "_debugEnableChecks"
		}, {
			name: "Show Collision Boxes",
			object: ig.Entity,
			property: "_debugShowBoxes"
		}, {
			name: "Show Velocities",
			object: ig.Entity,
			property: "_debugShowVelocities"
		}, {
			name: "Show Names & Targets",
			object: ig.Entity,
			property: "_debugShowNames"
		}]
	})
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
	ig.Game.inject({
		loadLevel: function(b) {
			this.parent(b);
			ig.debug.panels.maps.load(this)
		}
	});
	ig.DebugMapsPanel = ig.DebugPanel.extend({
		maps: [],
		mapScreens: [],
		init: function(b, c) {
			this.parent(b, c);
			this.load()
		},
		load: function(b) {
			this.options = [];
			this.panels = [];
			if (!b || !b.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
			else {
				this.maps = b.backgroundMaps;
				this.mapScreens =
					[];
				this.container.innerHTML = "";
				for (b = 0; b < this.maps.length; b++) {
					var c = this.maps[b],
						d = new ig.DebugPanel(b, "Layer " + b),
						e = new ig.$new("strong");
					e.textContent = b + ": " + c.tiles.path;
					d.container.appendChild(e);
					d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
					d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
					d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
					this.generateMiniMap(d, c, b);
					this.addPanel(d)
				}
			}
		},
		generateMiniMap: function(b, c, d) {
			var e = ig.system.scale,
				f = ig.$new("canvas"),
				g = f.getContext("2d"),
				m = c.tiles.width * e,
				p = c.tiles.height * e,
				r = m / c.tilesize;
			g.drawImage(c.tiles.data, 0, 0, m, p, 0, 0, r, p / c.tilesize);
			g = ig.$new("canvas");
			g.width = c.width * e;
			g.height = c.height * e;
			var u = g.getContext("2d");
			ig.game.clearColor && (u.fillStyle = ig.game.clearColor, u.fillRect(0, 0, m, p));
			for (p = m = 0; p < c.width; p++)
				for (var s = 0; s < c.height; s++)(m = c.data[s][p]) && u.drawImage(f, Math.floor((m - 1) * e % r), Math.floor((m - 1) * e / r) * e, e, e, p * e, s * e, e, e);
			f = ig.$new("div");
			f.className = "ig_debug_map_container";
			f.style.width = c.width *
				e + "px";
			f.style.height = c.height * e + "px";
			r = ig.$new("div");
			r.className = "ig_debug_map_screen";
			r.style.width = ig.system.width / c.tilesize * e - 2 + "px";
			r.style.height = ig.system.height / c.tilesize * e - 2 + "px";
			this.mapScreens[d] = r;
			f.appendChild(g);
			f.appendChild(r);
			b.container.appendChild(f)
		},
		afterRun: function() {
			for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
				var d = this.maps[c],
					e = this.mapScreens[c];
				if (d && e) {
					var f = d.scroll.x / d.tilesize,
						g = d.scroll.y / d.tilesize;
					d.repeat && (f %= d.width, g %= d.height);
					e.style.left = f * b +
						"px";
					e.style.top = g * b + "px"
				}
			}
		}
	});
	ig.debug.addPanel({
		type: ig.DebugMapsPanel,
		name: "maps",
		label: "Background Maps"
	})
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
	ig.Game.inject({
		draw: function() {
			ig.graph.beginClock("draw");
			this.parent();
			ig.graph.endClock("draw")
		},
		update: function() {
			ig.graph.beginClock("update");
			this.parent();
			ig.graph.endClock("update")
		},
		checkEntities: function() {
			ig.graph.beginClock("checks");
			this.parent();
			ig.graph.endClock("checks")
		}
	});
	ig.DebugGraphPanel = ig.DebugPanel.extend({
		clocks: {},
		marks: [],
		textY: 0,
		height: 128,
		ms: 64,
		timeBeforeRun: 0,
		init: function(b, c) {
			this.parent(b, c);
			this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
			this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
			this.msHeight = this.height / this.ms;
			this.graph = ig.$new("canvas");
			this.graph.width = window.innerWidth;
			this.graph.height = this.height;
			this.container.appendChild(this.graph);
			this.ctx = this.graph.getContext("2d");
			this.ctx.fillStyle = "#444";
			this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
			this.ctx.fillRect(0, this.mark33ms, this.graph.width,
				1);
			this.addGraphMark("16ms", this.mark16ms);
			this.addGraphMark("33ms", this.mark33ms);
			this.addClock("draw", "Draw", "#13baff");
			this.addClock("update", "Entity Update", "#bb0fff");
			this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
			this.addClock("lag", "System Lag", "#f26900");
			ig.mark = this.mark.bind(this);
			ig.graph = this
		},
		addGraphMark: function(b, c) {
			var d = ig.$new("span");
			d.className = "ig_debug_graph_mark";
			d.textContent = b;
			d.style.top = c.round() + "px";
			this.container.appendChild(d)
		},
		addClock: function(b, c,
			d) {
			var e = ig.$new("span");
			e.className = "ig_debug_legend_color";
			e.style.backgroundColor = d;
			var f = ig.$new("span");
			f.className = "ig_debug_legend_number";
			f.appendChild(document.createTextNode("0"));
			var g = ig.$new("span");
			g.className = "ig_debug_legend";
			g.appendChild(e);
			g.appendChild(document.createTextNode(c + " ("));
			g.appendChild(f);
			g.appendChild(document.createTextNode("ms)"));
			this.container.appendChild(g);
			this.clocks[b] = {
				description: c,
				color: d,
				current: 0,
				start: Date.now(),
				avg: 0,
				html: f
			}
		},
		beginClock: function(b,
			c) {
			this.clocks[b].start = Date.now() + (c || 0)
		},
		endClock: function(b) {
			b = this.clocks[b];
			b.current = Math.round(Date.now() - b.start);
			b.avg = 0.8 * b.avg + 0.2 * b.current
		},
		mark: function(b, c) {
			this.active && this.marks.push({
				msg: b,
				color: c || "#fff"
			})
		},
		beforeRun: function() {
			this.endClock("lag");
			this.timeBeforeRun = Date.now()
		},
		afterRun: function() {
			var b = Date.now() - this.timeBeforeRun;
			this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
			var b = this.graph.width - 1,
				c = this.height;
			this.ctx.drawImage(this.graph, -1, 0);
			this.ctx.fillStyle =
				"#000";
			this.ctx.fillRect(b, 0, 1, this.height);
			this.ctx.fillStyle = "#444";
			this.ctx.fillRect(b, this.mark16ms, 1, 1);
			this.ctx.fillStyle = "#444";
			this.ctx.fillRect(b, this.mark33ms, 1, 1);
			for (var d in this.clocks) {
				var e = this.clocks[d];
				e.html.textContent = e.avg.toFixed(2);
				if (e.color && 0 < e.current) {
					this.ctx.fillStyle = e.color;
					var f = e.current * this.msHeight,
						c = c - f;
					this.ctx.fillRect(b, c, 1, f);
					e.current = 0
				}
			}
			this.ctx.textAlign = "right";
			this.ctx.textBaseline = "top";
			this.ctx.globalAlpha = 0.5;
			for (d = 0; d < this.marks.length; d++) c = this.marks[d],
				this.ctx.fillStyle = c.color, this.ctx.fillRect(b, 0, 1, this.height), c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
			this.ctx.globalAlpha = 1;
			this.marks = []
		}
	});
	ig.debug.addPanel({
		type: ig.DebugGraphPanel,
		name: "graph",
		label: "Performance"
	})
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
	ig.SplashLoader = ig.Loader.extend({
		bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.png"),
		titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
		loadingTextAlpha: 1,
		init: function(b, c) {
			this.parent(b, c);
			this.setupCustomAnimation();
			// ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
			ig.system.context.font = "18px mainfont, Helvetica, Verdana";
			ig.system.context.fillText("", 0, 0)
		},
		end: function() {
			this.loadingTextAlpha = 1;
			this.draw();
			this.parent();
			var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
			window.setTimeout("ig.system.setGame(MyGame)", b);
			window.clearInterval(ig.loadingScreen.animationTimer)
		},
		setupCustomAnimation: function() {
			ig.loadingScreen = this;
			ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
		},
		animate: function() {
			var b = Date.now() / 1E3 % 1;
			0.5 < b && (b = 1 - b);
			this.loadingTextAlpha = 1 - 2 * b
		},
		draw: function() {
			if (this.bgImage.loaded &&
				this.titleImage.loaded) {
				this._drawStatus += (this.status - this._drawStatus) / 5;
				var b = ig.system.context;
				b.save();
				b.fillStyle = "#000000";
				b.fillRect(0, 0, ig.system.width, ig.system.height);
				var c = 0;
				this.bgImage.width < ig.system.width ? b.scale(ig.system.width / this.bgImage.width, 1) : this.bgImage.width > ig.system.width && (c = -(this.bgImage.width - ig.system.width) / 2);
				this.bgImage.draw(c, 0);
				b.restore();
				this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 135);
				w0 = 152;
				h0 = 11;
				x0 = (ig.system.width - w0) / 2;
				y0 = 470;
				ig.system.context.save();
				b.translate(x0 + w0 / 2, y0);
				b.fillStyle = "#000000";
				b.strokeStyle = "#000000";
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, w0, h0);
				b.strokeRect(-w0 / 2, 0, w0, h0);
				c = this._drawStatus * w0;
				b.fillStyle = "#A5DE3E";
				b.strokeStyle = "#A5DE3E";
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, c, h0 / 2);
				b.strokeRect(-w0 / 2, 0, c, h0 / 2);
				b.fillStyle = "#67BD51";
				b.strokeStyle = "#67BD51";
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, h0 / 2, c, h0 / 2);
				b.strokeRect(-w0 / 2, h0 / 2, c, h0 / 2);
				ig.system.context.font = "24px GreatLakesNF, Impact, Charcoal, sans-serif";
				var d = _STRINGS.Loading.Loading,
					d = d.split("").join(String.fromCharCode(8202)),
					c = ig.system.context.measureText("m").width,
					b = h0 + c + 4 * c / 10 + 10;
				ig.system.context.lineWidth = 1;
				ig.system.context.strokeStyle = "rgba(0,0,0,0)";
				ig.system.context.globalAlpha = this.loadingTextAlpha;
				ig.system.context.textAlign = "center";
				ig.system.context.translate(0, b);
				b = ig.system.context;
				this.loadTextLinGrad = b.createLinearGradient(0, -c, 0, 0);
				this.loadTextLinGrad.addColorStop(0, "#50f1eb");
				this.loadTextLinGrad.addColorStop(1, "#31928f");
				ig.system.context.fillStyle = this.loadTextLinGrad;
				ig.system.context.fillText(d, 0, 0);
				ig.system.context.restore()
			}
		}
	})
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
	Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
		for (var c = 0; c < this.length; ++c)
			if (this[c] === b) return c;
		return -1
	});
	ig.Entity.prototype.tweens = [];
	ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
	ig.Entity.prototype.update = function() {
		this._preTweenUpdate();
		if (0 < this.tweens.length) {
			for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
			this.tweens =
				b
		}
	};
	ig.Entity.prototype.tween = function(b, c, d) {
		b = new ig.Tween(this, b, c, d);
		this.tweens.push(b);
		return b
	};
	ig.Entity.prototype.pauseTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
	};
	ig.Entity.prototype.resumeTweens = function() {
		for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
	};
	ig.Entity.prototype.stopTweens = function(b) {
		for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
	};
	ig.Tween = function(b, c, d, e) {
		var f = {},
			g = {},
			m = {},
			p = 0,
			r = !1,
			u = !1,
			s = !1;
		this.duration = d;
		this.paused =
			this.complete = !1;
		this.easing = ig.Tween.Easing.Linear.EaseNone;
		this.onComplete = !1;
		this.loop = this.delay = 0;
		this.loopCount = -1;
		ig.merge(this, e);
		this.loopNum = this.loopCount;
		this.chain = function(b) {
			s = b
		};
		this.initEnd = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
		};
		this.initStart = function(b, c, d, e) {
			if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
			else
				for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
					c[b], d[b], e[b])
		};
		this.start = function() {
			this.paused = this.complete = !1;
			this.loopNum = this.loopCount;
			p = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
			u = !0;
			r = new ig.Timer;
			for (var d in c) this.initEnd(d, c, g);
			for (d in g) this.initStart(d, g, b, f), this.initDelta(d, m, b, g)
		};
		this.initDelta = function(b, c, d, e) {
			if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
			else
				for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
		};
		this.propUpdate = function(b, c, d, e, f) {
			if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
				d[b] + e[b] * f : c[b];
			else
				for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
		};
		this.propSet = function(b, c, d) {
			if ("object" !== typeof c[b]) d[b] = c[b];
			else
				for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
		};
		this.update = function() {
			if (!u) return !1;
			if (this.delay) {
				if (r.delta() < this.delay) return;
				this.delay = 0;
				r.reset()
			}
			if (this.paused || this.complete) return !1;
			var c = (r.delta() + p) / this.duration,
				c = 1 < c ? 1 : c,
				d = this.easing(c);
			for (property in m) this.propUpdate(property, b, f, m, d);
			if (1 <= c) {
				if (0 == this.loopNum ||
					!this.loop) {
					this.complete = !0;
					if (this.onComplete) this.onComplete();
					s && s.start();
					return !1
				}
				if (this.loop == ig.Tween.Loop.Revert) {
					for (property in f) this.propSet(property, f, b);
					p = 0;
					r.reset(); - 1 != this.loopNum && this.loopNum--
				} else if (this.loop == ig.Tween.Loop.Reverse) {
					c = {};
					d = {};
					ig.merge(c, g);
					ig.merge(d, f);
					ig.merge(f, c);
					ig.merge(g, d);
					for (property in g) this.initDelta(property, m, b, g);
					p = 0;
					r.reset(); - 1 != this.loopNum && this.loopNum--
				}
			}
		};
		this.pause = function() {
			this.paused = !0;
			p += r.delta()
		};
		this.resume = function() {
			this.paused = !1;
			r.reset()
		};
		this.stop = function(b) {
			b && (this.loop = this.complete = this.paused = !1, p += d, this.update());
			this.complete = !0
		}
	};
	ig.Tween.Loop = {
		Revert: 1,
		Reverse: 2
	};
	ig.Tween.Easing = {
		Linear: {},
		Quadratic: {},
		Cubic: {},
		Quartic: {},
		Quintic: {},
		Sinusoidal: {},
		Exponential: {},
		Circular: {},
		Elastic: {},
		Back: {},
		Bounce: {}
	};
	ig.Tween.Easing.Linear.EaseNone = function(b) {
		return b
	};
	ig.Tween.Easing.Quadratic.EaseIn = function(b) {
		return b * b
	};
	ig.Tween.Easing.Quadratic.EaseOut = function(b) {
		return -b * (b - 2)
	};
	ig.Tween.Easing.Quadratic.EaseInOut =
		function(b) {
			return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
		};
	ig.Tween.Easing.Cubic.EaseIn = function(b) {
		return b * b * b
	};
	ig.Tween.Easing.Cubic.EaseOut = function(b) {
		return --b * b * b + 1
	};
	ig.Tween.Easing.Cubic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
	};
	ig.Tween.Easing.Quartic.EaseIn = function(b) {
		return b * b * b * b
	};
	ig.Tween.Easing.Quartic.EaseOut = function(b) {
		return -(--b * b * b * b - 1)
	};
	ig.Tween.Easing.Quartic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
	};
	ig.Tween.Easing.Quintic.EaseIn =
		function(b) {
			return b * b * b * b * b
		};
	ig.Tween.Easing.Quintic.EaseOut = function(b) {
		return (b -= 1) * b * b * b * b + 1
	};
	ig.Tween.Easing.Quintic.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
		return -Math.cos(b * Math.PI / 2) + 1
	};
	ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
		return Math.sin(b * Math.PI / 2)
	};
	ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
		return -0.5 * (Math.cos(Math.PI * b) - 1)
	};
	ig.Tween.Easing.Exponential.EaseIn = function(b) {
		return 0 == b ? 0 : Math.pow(2,
			10 * (b - 1))
	};
	ig.Tween.Easing.Exponential.EaseOut = function(b) {
		return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
	};
	ig.Tween.Easing.Exponential.EaseInOut = function(b) {
		return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
	};
	ig.Tween.Easing.Circular.EaseIn = function(b) {
		return -(Math.sqrt(1 - b * b) - 1)
	};
	ig.Tween.Easing.Circular.EaseOut = function(b) {
		return Math.sqrt(1 - --b * b)
	};
	ig.Tween.Easing.Circular.EaseInOut = function(b) {
		return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
	};
	ig.Tween.Easing.Elastic.EaseIn =
		function(b) {
			var c, d = 0.1,
				e = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			e || (e = 0.3);
			!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
			return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
		};
	ig.Tween.Easing.Elastic.EaseOut = function(b) {
		var c, d = 0.1,
			e = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		e || (e = 0.3);
		!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
		return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
	};
	ig.Tween.Easing.Elastic.EaseInOut = function(b) {
		var c, d = 0.1,
			e = 0.4;
		if (0 == b) return 0;
		if (1 == b) return 1;
		e || (e = 0.3);
		!d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
		return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
	};
	ig.Tween.Easing.Back.EaseIn = function(b) {
		return b * b * (2.70158 * b - 1.70158)
	};
	ig.Tween.Easing.Back.EaseOut = function(b) {
		return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
	};
	ig.Tween.Easing.Back.EaseInOut = function(b) {
		return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
	};
	ig.Tween.Easing.Bounce.EaseIn =
		function(b) {
			return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
		};
	ig.Tween.Easing.Bounce.EaseOut = function(b) {
		return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
	};
	ig.Tween.Easing.Bounce.EaseInOut = function(b) {
		return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
	}
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
	ig.UrlParameters = ig.Class.extend({
		init: function() {
			switch (getQueryVariable("iphone")) {
				case "true":
					ig.ua.iPhone = !0, console.log("iPhone mode")
			}
			var b = getQueryVariable("webview");
			if (b) switch (b) {
				case "true":
					ig.ua.is_uiwebview = !0, console.log("webview mode")
			}
			if (b = getQueryVariable("debug")) switch (b) {
				case "true":
					ig.game.showDebugMenu(), console.log("debug mode")
			}
			switch (getQueryVariable("view")) {
				case "stats":
					ig.game.resetPlayerStats(), ig.game.endGame()
			}
			getQueryVariable("ad")
		}
	})
});
ig.baked = !0;
ig.module("plugins.jukebox").defines(function() {
	ig.Jukebox = ig.Class.extend({
		init: function() {
			this.player = new jukebox.Player({
				resources: ["media/audio/music/bgm.mp3", "media/audio/music/bgm.ogg"],
				spritemap: {
					music: {
						start: 0,
						end: 12.985,
						loop: !0
					}
				}
			})
		}
	})
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
	ig.Director = ig.Class.extend({
		init: function(b, c) {
			this.game = b;
			this.levels = [];
			this.currentLevel = 0;
			this.append(c)
		},
		loadLevel: function(b) {
			for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
			this.currentLevel = b;
			this.game.loadLevel(this.levels[b]);
			return !0
		},
		loadLevelWithoutEntities: function(b) {
			this.currentLevel = b;
			this.game.loadLevelWithoutEntities(this.levels[b]);
			return !0
		},
		append: function(b) {
			newLevels = [];
			return "object" ===
				typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
		},
		nextLevel: function() {
			return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
		},
		previousLevel: function() {
			return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
		},
		jumpTo: function(b) {
			var c = null;
			for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
			return 0 <= c ? this.loadLevel(c) : !1
		},
		firstLevel: function() {
			return this.loadLevel(0)
		},
		lastLevel: function() {
			return this.loadLevel(this.levels.length -
				1)
		},
		reloadLevel: function() {
			return this.loadLevel(this.currentLevel)
		}
	})
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function() {
			return !ig.Storage.instance ? null : ig.Storage.instance
		},
		init: function() {
			ig.Storage.instance = this
		},
		isCapable: function() {
			return "undefined" !== typeof window.localStorage
		},
		isSet: function(b) {
			return null !== this.get(b)
		},
		initUnset: function(b, c) {
			null === this.get(b) && this.set(b, c)
		},
		get: function(b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b))
			} catch (c) {
				return window.localStorage.getItem(b)
			}
		},
		getInt: function(b) {
			return ~~this.get(b)
		},
		getFloat: function(b) {
			return parseFloat(this.get(b))
		},
		getBool: function(b) {
			return !!this.get(b)
		},
		key: function(b) {
			return this.isCapable() ? window.localStorage.key(b) : null
		},
		set: function(b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c))
			} catch (d) {
				console.log(d)
			}
		},
		setHighest: function(b, c) {
			c > this.getFloat(b) && this.set(b, c)
		},
		remove: function(b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b)
		},
		clear: function() {
			if (!this.isCapable()) return null;
			window.localStorage.clear()
		}
	})
});
function go_moreGame(){
	alert('xxx')
}
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
	ig.BrandingSplash = ig.Class.extend({
		init: function() {
			ig.game.spawnEntity(EntityBranding, 0, 0)
		}
	});
	EntityBranding = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		splash_320x480: new ig.AnimationSheet("branding/splash_320x480.png", 320, 200),
		splash_480x640: new ig.AnimationSheet("branding/splash_480x640.png", 480, 240),
		init: function(b, c, d) {
			this.parent(b, c, d);
			320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200,
				this.anims.idle = new ig.Animation(this.splash_320x480, 0, [0], !0)) : (this.size.x = 480, this.size.y = 240, this.anims.idle = new ig.Animation(this.splash_480x640, 0, [0], !0));
			this.pos.x = (ig.system.width - this.size.x) / 2;
			this.pos.y = -this.size.y - 200;
			this.endPosY = (ig.system.height - this.size.y) / 2;
			b = this.tween({
				pos: {
					y: this.endPosY
				}
			}, 0.5, {
				easing: ig.Tween.Easing.Bounce.EaseIn
			});
			c = this.tween({}, 2.5, {
				onComplete: function() {
					ig.game.director.loadLevel(ig.game.director.currentLevel)
				}
			});
			b.chain(c);
			b.start();
			this.currentAnim = this.anims.idle
		},
		createClickableLayer: function() {
			console.log("Build clickable layer");
			this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, !0)
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k == b) return !0;
			return !1
		},
		checkClickableLayer: function(b, c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
		},

		createClickableOutboundLayer: function(b,
			c, d, e) {
			var f = ig.$new("div");
			f.id = b;
			document.body.appendChild(f);
			$("#" + f.id).css("float", "left");
			$("#" + f.id).css("position", "absolute");
			if (ig.ua.mobile) {
				var g = window.innerHeight / mobileHeight,
					m = window.innerWidth / mobileWidth;
				$("#" + f.id).css("left", this.pos.x * m);
				$("#" + f.id).css("top", this.pos.y * g);
				$("#" + f.id).css("width", this.size.x * m);
				$("#" + f.id).css("height", this.size.y * g)
			} else g = w / 2 - destW / 2, m = h / 2 - destH / 2, console.log(g, m), $("#" + f.id).css("left", g + this.pos.x * multiplier), $("#" + f.id).css("top", m + this.pos.y *
				multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
			e ? $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
			dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		draw: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			this.parent()
		}
	})
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity").defines(function() {
	EntityBrandingLogoPlaceholder = ig.Entity.extend({
		gravityFactor: 0,
		size: {
			x: 32,
			y: 32
		},
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		init: function(b, c, d) {
			this.parent(b, c, d);
			if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
				case "true":
					console.log("centralize true");
					centralize = !0;
					break;
				case "false":
					console.log("centralize false");
					centralize = !1;
					break;
				default:
					console.log("default ... centralize false"), centralize = !1
			} else b = "branding-logo", centralize = !1;
			if ("undefined" == typeof wm) {
				if (_SETTINGS.Branding.Logo.Enabled) try {
					ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, {
						div_layer_name: b,
						centralize: centralize
					})
				} catch (e) {
					console.log(e)
				}
				this.kill()
			}
		}
	})
});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.branding-logo").requires("impact.entity").defines(function() {
	EntityBrandingLogo = ig.Entity.extend({
		gravityFactor: 0,
		logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
		size: {
			x: 32,
			y: 32
		},
		zIndex: 10001,
		init: function(b, c, d) {
			this.parent(b, c, d);
			"undefined" == typeof wm && (_SETTINGS.Branding.Logo.Enabled ? (this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, d && d.centralize && (this.pos.x = ig.system.width /
				2 - this.size.x / 2, console.log("centralize true ... centering branded logo ..."))) : this.kill());
			this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
			this.currentAnim = this.anims.idle;
			d ? (console.log("branding settings found ... using that div layer name"), b = d.div_layer_name) : b = "branding-logo";
			_SETTINGS.Branding.Logo.LinkEnabled && (console.log("logo link enabled"), this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
			console.log("branding logo spawed ...")
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k ==
					b) return !0;
			return !1
		},
		checkClickableLayer: function(b, c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, e) {
			var f = ig.$new("div");
			f.id = b;
			document.body.appendChild(f);
			$("#" + f.id).css("float", "left");
			$("#" + f.id).css("position", "absolute");
			if (ig.ua.mobile) {
				var g = window.innerHeight / mobileHeight,
					m = window.innerWidth /
					mobileWidth;
				$("#" + f.id).css("left", this.pos.x * m);
				$("#" + f.id).css("top", this.pos.y * g);
				$("#" + f.id).css("width", this.size.x * m);
				$("#" + f.id).css("height", this.size.y * g)
			} else g = w / 2 - destW / 2, m = h / 2 - destH / 2, console.log(g, m), $("#" + f.id).css("left", g + this.pos.x * multiplier), $("#" + f.id).css("top", m + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
			e ? $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" +
				d + "'></a>") : $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
			dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		}
	})
});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module("game.entities.button-more-games").requires("impact.entity").defines(function() {
	EntityButtonMoreGames = ig.Entity.extend({
		size: {
			x: 176,
			y: 116
		},
		zIndex: 750,
		type: ig.Entity.TYPE.B,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			setTimeout(this.spawnDiv(), 5)
		},
		spawnDiv: function() {
			if (!this.canSpawnDiv)
				if (this.canSpawnDiv = !0, _SETTINGS.MoreGames.Enabled) {
					var b;
					b = this.divLayerName ? this.divLayerName : "more-games";
					this.checkClickableLayer(b, _SETTINGS.MoreGames.Link, !0);
					if (ig.ua.mobile) {
						var c = window.innerHeight /
							mobileHeight,
							d = window.innerWidth / mobileWidth;
						$("#" + b).css("left", this.pos.x * d);
						$("#" + b).css("top", this.pos.y * c);
						$("#" + b).css("width", this.size.x * d);
						$("#" + b).css("height", this.size.y * c)
					} else c = document.getElementById("game").offsetLeft, d = document.getElementById("game").offsetTop, $("#" + b).css("left", c + this.pos.x * multiplier), $("#" + b).css("top", d + this.pos.y * multiplier), $("#" + b).css("width", this.size.x * multiplier), $("#" + b).css("height", this.size.y * multiplier)
				} else this.kill()
		},
		doesClickableLayerExist: function(b) {
			for (k in dynamicClickableEntityDivs)
				if (k ==
					b) return !0;
			return !1
		},
		checkClickableLayer: function(b, c, d) {
			"undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
		},
		createClickableOutboundLayer: function(b, c, d, e) {
			var f = ig.$new("div");
			f.id = b;
			document.body.appendChild(f);
			$("#" + f.id).css("float", "left");
			$("#" + f.id).css("position", "absolute");
			if (ig.ua.mobile) {
				var g = window.innerHeight / mobileHeight,
					m = window.innerWidth /
					mobileWidth;
				$("#" + f.id).css("left", this.pos.x * m);
				$("#" + f.id).css("top", this.pos.y * g);
				$("#" + f.id).css("width", this.size.x * m);
				$("#" + f.id).css("height", this.size.y * g)
			} else g = document.getElementById("game").offsetLeft, m = document.getElementById("game").offsetTop, $("#" + f.id).css("left", g + this.pos.x * multiplier), $("#" + f.id).css("top", m + this.pos.y * multiplier), $("#" + f.id).css("width", this.size.x * multiplier), $("#" + f.id).css("height", this.size.y * multiplier);
			e ? $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" +
				d + "'></a>") : $("#" + f.id).html("<a onclick='go_moreGame()'><img style='width:100%;height:100%' src='" + d + "'></a>");
			dynamicClickableEntityDivs[b] = {};
			dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
			dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
			dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
			dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
		},
		hide: function() {
			var b = "more-games";
			this.divLayerName && (b = this.divLayerName);
			document.getElementById(b).style.visibility = "hidden";
			$("#" + b).hide()
		},
		show: function() {
			var b = "more-games";
			this.divLayerName && (b = this.divLayerName);
			document.getElementById(b).style.visibility = "visible";
			$("#" + b).show()
		},
		clicking: function() {},
		released: function() {},
		over: function() {},
		leave: function() {}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
	EntityOpeningShield = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		move: 0,
		mIconAnim: 0,
		shieldAnim: 0,
		titleAnim: 0,
		shieldImage: new ig.Image("media/graphics/opening/shield.png"),
		mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
		titleImage: new ig.Image("media/graphics/opening/title.png"),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateOriginalShieldOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
		},
		updateOriginalShieldOpening: function() {
			this.initTimer && 0 < this.initTimer.delta() &&
				(this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
			this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
			this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
			this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
				null);
			this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawOriginalShieldOpening: function() {
			if (this.moveTimer) {
				var b = ig.system.context;
				b.save();
				var c = ig.system.width / 2,
					d = ig.system.height / 2;
				b.translate(c, d);
				b.rotate(this.move * Math.PI / 180);
				b.beginPath();
				b.moveTo(0, 0);
				for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
				b.translate(-c, -d);
				c = b.createRadialGradient(c, d, 100, c, d, 250);
				c.addColorStop(0, "rgba(255,255,255,0.1)");
				c.addColorStop(1, "rgba(0,0,0,0)");
				b.fillStyle = c;
				b.fill();
				b.restore()
			}
			this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
			this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
				166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
	EntityOpeningKitty = ig.Entity.extend({
		size: {
			x: 48,
			y: 48
		},
		kittyAnim: -1,
		kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
		kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			if (!ig.wm)
				if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
					this.initTimer = new ig.Timer(0.1);
					try {
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.kittyopeningSound)
					} catch (b) {
						console.log(b)
					}
				} else ig.game.director.nextLevel(),
					ig.system.context.globalAlpha = 1, this.kill()
		},
		update: function() {
			this.parent();
			this.updateKittyOpening()
		},
		draw: function() {
			this.parent();
			ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
		},
		updateKittyOpening: function() {
			this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
			this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
				(this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
			this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
		},
		drawKittyOpening: function() {
			var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
			b.addColorStop(0, "#ffed94");
			b.addColorStop(1, "#ffcd85");
			ig.system.context.fillStyle = b;
			ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
			0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
				2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
			ig.system.context.globalAlpha = 1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
	EntityPointer = ig.Entity.extend({
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		isClicking: !1,
		isHovering: !1,
		firstClick: !1,
		isReleased: !1,
		hoveringItem: null,
		objectArray: [],
		ignorePause: !0,
		zIndex: 5E3,
		check: function(b) {
			this.objectArray.push(b)
		},
		clickObject: function(b) {
			this.isClicking && !this.firstClick && "function" == typeof b.clicked && b.clicked();
			this.firstClick && !this.isReleased && "function" == typeof b.clicking && b.clicking();
			this.firstClick && this.isReleased && "function" == typeof b.released && b.released()
		},
		refreshPos: function() {
			if (ig.ua.mobile) {
				var b = window.innerHeight / mobileHeight;
				this.pos.x = ig.input.mouse.x / (window.innerWidth / mobileWidth) - this.size.x / 2 + ig.game.screen.x;
				this.pos.y = ig.input.mouse.y / b - this.size.y / 2
			} else this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x, this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2
		},
		update: function() {
			this.refreshPos();
			var b = null,
				c = -1;
			for (a = this.objectArray.length -
				1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
			null != b ? (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && this.hoveringItem != b && this.hoveringItem.leave(), null != this.hoveringItem && "function" == typeof this.hoveringItem.over && this.hoveringItem == b && this.hoveringItem.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem =
				null);
			this.isClicking && !this.firstClick ? this.firstClick = !0 : this.isReleased && this.firstClick && (this.firstClick = !1);
			this.isClicking = ig.input.pressed("click");
			this.isReleased = ig.input.released("click")
		}
	})
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
	EntityPointerSelector = EntityPointer.extend({
		zIndex: 5E3,
		_wmDrawBox: !0,
		_wmBoxColor: "rgba(0, 0, 255, 0.7)",
		size: {
			x: 15,
			y: 15
		},
		init: function(b, c, d) {
			this.parent(b, c, d)
		}
	})
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
	LevelOpening = {
		entities: [{
			type: "EntityOpeningKitty",
			x: 520,
			y: 212
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.home-control").requires("impact.entity", "game.entities.button-more-games").defines(function() {
	EntityHomeControl = ig.Entity.extend({
		zIndex: 100,
		isHome: !0,
		bgImage: new ig.Image("media/graphics/game/backgrounds/mainbg.png"),
		titleImage: new ig.Image("media/graphics/game/backgrounds/maintitle.png"),
		bg2Image: new ig.Image("media/graphics/game/backgrounds/menubg.png"),
		bgOffset: {
			x: 0,
			y: 0
		},
		bgScale: 1,
		time: 0,
		playButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/playgame.png"),
		playButtonPos: {
			x: 0,
			y: 486
		},
		playButtonRect: {
			x: -69,
			y: -50,
			w: 138,
			h: 101
		},
		playButtonOffset: {
			x: 0,
			y: 0
		},
		playButtonAlpha: 1,
		playButtonScale: 0.95,
		playButtonDown: !1,
		moregamesButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/moregames.png"),
		moregamesButtonPos: {
			x: 60,
			y: 588
		},
		moregamesButtonRect: {
			x: -28,
			y: -17,
			w: 57,
			h: 35
		},
		moregamesButtonOffset: {
			x: 0,
			y: 0
		},
		moregamesButtonAlpha: 1,
		moregamesButtonDown: !1,
		optionsButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/options.png"),
		optionsButtonPos: {
			x: 0,
			y: 588
		},
		optionsButtonRect: {
			x: -28,
			y: -28,
			w: 56,
			h: 56
		},
		optionsButtonOffset: {
			x: 0,
			y: 0
		},
		optionsButtonAlpha: 1,
		optionsButtonScale: 0.95,
		optionsButtonDown: !1,
		optionsPanelShowTime: 0,
		optionsPanelHideTime: 0,
		optionsPanelShowFlag: !1,
		optionsPanelDrawFlag: !1,
		optionsPanelReady: !1,
		optionsPanelPos: {
			x: 320,
			y: 320
		},
		optionsPanelRect: {
			x: -200,
			y: -150,
			w: 400,
			h: 300
		},
		optionsPanelOffset: {
			x: 0,
			y: 0
		},
		optionsPanelAlpha: 1,
		optionsTitlePos: {
			x: 0,
			y: -120
		},
		optionsTitleRect: {
			x: -190,
			y: -20,
			w: 380,
			h: 40
		},
		optionsTitleContent: [],
		soundOptionPos: {
			x: 0,
			y: -65
		},
		soundOptionLabelRect: {
			x: -160,
			y: -20,
			w: 150,
			h: 40
		},
		soundOptionLabelContent: [],
		soundOptionRect: {
			x: 10,
			y: -15,
			w: 150,
			h: 30
		},
		musicOptionPos: {
			x: 0,
			y: -20
		},
		musicOptionLabelRect: {
			x: -160,
			y: -20,
			w: 150,
			h: 40
		},
		musicOptionLabelContent: [],
		musicOptionRect: {
			x: 10,
			y: -15,
			w: 150,
			h: 30
		},
		tutorialButtonPos: {
			x: 0,
			y: 45
		},
		tutorialButtonRect: {
			x: -100,
			y: -25,
			w: 200,
			h: 50
		},
		tutorialButtonOffset: {
			x: 0,
			y: 0
		},
		tutorialButtonAlpha: 1,
		tutorialButtonScale: 0.95,
		tutorialButtonDown: !1,
		backButtonPos: {
			x: 0,
			y: 110
		},
		backButtonRect: {
			x: -100,
			y: -25,
			w: 200,
			h: 50
		},
		backButtonOffset: {
			x: 0,
			y: 0
		},
		backButtonAlpha: 1,
		backButtonScale: 0.95,
		backButtonDown: !1,
		lockToMusicRect: !1,
		lockToSoundRect: !1,
		characterSelectDrawFlag: !1,
		characterSelectReady: !1,
		charactersTitlePos: {
			x: 0,
			y: 120
		},
		charactersTitleRect: {
			x: -190,
			y: -20,
			w: 380,
			h: 40
		},
		charactersTitleContent: [],
		charBackButtonImage: new ig.Image("media/graphics/game/ui/mainmenu/back.png"),
		charBackButtonPos: {
			x: 60,
			y: 588
		},
		charBackButtonRect: {
			x: -22,
			y: -33,
			w: 44,
			h: 66
		},
		charBackButtonOffset: {
			x: 0,
			y: 0
		},
		charBackButtonAlpha: 1,
		charBackButtonScale: 0.95,
		charBackButtonDown: !1,
		selectButtonPos: {
			x: 0,
			y: 440
		},
		selectButtonRect: {
			x: -100,
			y: -25,
			w: 200,
			h: 50
		},
		selectButtonOffset: {
			x: 0,
			y: 0
		},
		selectButtonAlpha: 1,
		selectButtonScale: 0.95,
		selectButtonDown: !1,
		selectLeftButtonPos: {
			x: 0,
			y: 440
		},
		selectLeftButtonRect: {
			x: -25,
			y: -25,
			w: 50,
			h: 50
		},
		selectLeftButtonOffset: {
			x: 0,
			y: 0
		},
		selectLeftButtonAlpha: 1,
		selectLeftButtonScale: 0.95,
		selectLeftButtonDown: !1,
		selectRightButtonPos: {
			x: 0,
			y: 440
		},
		selectRightButtonRect: {
			x: -25,
			y: -25,
			w: 50,
			h: 50
		},
		selectRightButtonOffset: {
			x: 0,
			y: 0
		},
		selectRightButtonAlpha: 1,
		selectRightButtonScale: 0.95,
		selectRightButtonDown: !1,
		characterImage: [
			[new ig.Image("media/graphics/game/ui/characters/rabbit0.png"), new ig.Image("media/graphics/game/ui/characters/rabbit1.png")],
			[new ig.Image("media/graphics/game/ui/characters/sheep0.png"), new ig.Image("media/graphics/game/ui/characters/sheep1.png")],
			[new ig.Image("media/graphics/game/ui/characters/dog0.png"), new ig.Image("media/graphics/game/ui/characters/dog1.png")],
			[new ig.Image("media/graphics/game/ui/characters/cat0.png"), new ig.Image("media/graphics/game/ui/characters/cat1.png")],
			[new ig.Image("media/graphics/game/ui/characters/elephant0.png"), new ig.Image("media/graphics/game/ui/characters/elephant1.png")]
		],
		characterIcons: [],
		iconPosY: 300,
		iconSpacing: 175,
		iconAnimateFlag: !1,
		iconAnimateTime: 0,
		iconAnimateOffset: 0,
		iconAnimateDirection: 0,
		iconAnimateScale: 1,
		iconAnimateScaleTarget: 2,
		iconAnimateMinScale: 0.75,
		keyReleased: !0,
		pressTime: 0,
		pressPos: 0,
		characterRect: {
			x: -100,
			y: -25,
			w: 200,
			h: 50
		},
		characterOffset: {
			x: 0,
			y: 0
		},
		characterAlpha: 1,
		characterScale: 0.95,
		characterIconScale: 1,
		characterDown: !1,
		lockedImage: new ig.Image("media/graphics/game/ui/mainmenu/locked.png"),
		starImage: new ig.Image("media/graphics/game/pickups/01.png"),
		characterPrices: [10, 500, 1500, 2500, 4E3],
		overlayAlpha: 1,
		transitionDuration: 0.2,
		transitionTime: 0,
		transitionFadein: !1,
		transitionFadeout: !1,
		transitionEndFunction: null,
		pointer: null,
		moregames: null,
		menuPaused: !1,
		mainMenuAlpha: 1,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.global.wm || (0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || (ig.soundHandler.playBackgroundMusic(),
					ig.soundHandler.setMusicVolume(ig.game.musicVolume), ig.soundHandler.setSfxVolume(ig.game.sfxVolume)) : ig.soundHandler.stopBackgroundMusic(), this.playButtonPos.x = ig.system.width / 2, this.optionsButtonPos.x = ig.system.width - 60, this.optionsPanelPos.x = ig.system.width / 2, this.optionsPanelPos.y = ig.system.height / 2, this.optionsPanelOffset.y = ig.system.height, this.charactersTitlePos.x = ig.system.width / 2, this.selectButtonPos.x = ig.system.width / 2, this.selectLeftButtonPos.x = this.selectButtonPos.x - 0.75 * this.selectButtonRect.w,
				this.selectRightButtonPos.x = this.selectButtonPos.x + 0.75 * this.selectButtonRect.w)
		},
		ready: function() {
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			this.moregames = ig.game.spawnEntity(EntityButtonMoreGames, this.moregamesButtonPos.x + this.moregamesButtonRect.x, this.moregamesButtonPos.y + this.moregamesButtonRect.y);
			this.moregames.divLayerName = "more-games";
			this.moregames.size.x = this.moregamesButtonRect.w;
			this.moregames.size.y = this.moregamesButtonRect.h;
			this.moregames.ready();
			ig.game.sortEntitiesDeferred();
			if (!ig.global.wm) {
				0 < ig.soundHandler.musicVolume ? ig.soundHandler.bgmPlaying || ig.soundHandler.playBackgroundMusic() : ig.soundHandler.stopBackgroundMusic();
				ig.game.doShop && (ig.game.doShop = !1, this.showShop());
				var b = 0;
				this.bgImage.width < ig.system.width ? this.bgScale = ig.system.width / this.bgImage.width : this.bgImage.width > ig.system.width && (b = -(this.bgImage.width - ig.system.width) / 2);
				this.bgOffset.x = this.bitwiseRound(b);
				this.startFadeinTransition();
				this.optionsTitleContent = this.wrapText(_STRINGS.UI.OPTIONS.split("").join(String.fromCharCode(8202)),
					this.optionsTitleRect.w, 36);
				this.soundOptionLabelContent = this.wrapText(_STRINGS.UI.SOUND.split("").join(String.fromCharCode(8202)), this.soundOptionLabelRect.w);
				this.musicOptionLabelContent = this.wrapText(_STRINGS.UI.MUSIC.split("").join(String.fromCharCode(8202)), this.musicOptionLabelRect.w);
				this.charactersTitleContent = this.wrapText(_STRINGS.UI.CHARACTERS.split("").join(String.fromCharCode(8202)), this.charactersTitleRect.w, 36);
				this.selectedCharId = ig.game.selectedCharacterId;
				this.setCharacterIcons(this.selectedCharId);
				isNaN(ig.game.money) && (ig.game.money = 0, ig.game.savePlayerStats())
			}
		},
		draw: function() {
			var b = ig.system.context;
			this.characterSelectDrawFlag ? this.drawCharacterSelect() : this.drawMainMenu();
			this.drawOptionsPanel();
			var c = this.optionsButtonPos.x + this.optionsButtonOffset.x,
				d = this.optionsButtonPos.y + this.optionsButtonOffset.y;
			this.optionsButtonDown && (d += 2);
			b.save();
			b.globalAlpha = this.mainMenuAlpha * this.optionsButtonAlpha;
			b.translate(c, d);
			b.scale(this.optionsButtonScale, this.optionsButtonScale);
			this.optionsButtonImage.draw(this.optionsButtonRect.x,
				this.optionsButtonRect.y);
			b.restore();
			b.globalAlpha = 1;
			if (this.transitionFadein || this.transitionFadeout) ig.system.context.globalAlpha = this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		playGame: function() {
			console.log("play?");
			hsgame.start();
			ig.input.clearPressed();
			this.moregames.hide();
			ig.game.firstrun ? (ig.game.doTutorialFlag = !0, ig.game.firstrun = !1, ig.game.savePlayerStats()) : ig.game.doTutorialFlag = !1;
			ig.game.director.jumpTo(LevelGame)
		},
		playTutorial: function() {
			hsgame.start();
			ig.input.clearPressed();
			this.moregames.hide();
			ig.game.doTutorialFlag = !0;
			ig.game.firstrun = !1;
			ig.game.savePlayerStats();
			ig.game.director.jumpTo(LevelGame)
		},
		pause: function() {
			this.menuPaused = !0;
			this.moregames.hide();
		},
		unpause: function() {
			this.menuPaused = !1;
			this.moregames.show();
		},
		update: function() {
			this.time += ig.system.tick;
			if (!this.menuPaused) {
				this.characterSelectDrawFlag ? this.updateCharacterSelect() : this.updateMainMenu();
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.optionsButtonPos.x + this.optionsButtonRect.x;
				c.y = this.optionsButtonPos.y + this.optionsButtonRect.y;
				c.w = this.optionsButtonRect.w;
				c.h = this.optionsButtonRect.h;
				if (this.aabbCheck(b, c)) {
					if (this.optionsButtonDown = !1, this.optionsButtonScale = 0.95, ig.ua.mobile || (this.optionsButtonScale = 1), ig.input.state("click") && (this.optionsButtonDown = !0, this.optionsButtonScale = 0.9), ig.input.released("click")) {
						this.optionsButtonDown = !1;
						this.optionsButtonScale = 0.95;
						ig.ua.mobile || (this.optionsButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						this.optionsPanelShowFlag ? this.hideOptionsPanel() : this.showOptionsPanel();
						return
					}
				} else this.optionsButtonDown = !1, this.optionsButtonScale = 0.95;
				this.updateOptionsPanel();
				this.transitionFadein ? (b = ig.system.clock.delta() - this.transitionTime, b /= this.transitionDuration, 1 < b && (b = 1), this.overlayAlpha = 1 - b, 1 <= b && (this.transitionFadein = !1, this.transitionEndFunction && this.transitionEndFunction())) :
					this.transitionFadeout && (b = ig.system.clock.delta() - this.transitionTime, b /= this.transitionDuration, 1 < b && (b = 1), this.overlayAlpha = b, 1 <= b && (this.transitionFadeout = !1, this.transitionEndFunction && this.transitionEndFunction()))
			}
		},
		aabbCheck: function(b, c) {
			return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
		},
		drawMainMenu: function() {
			var b = ig.system.context;
			b.save();
			1 != this.bgScale && b.scale(this.bgScale, 1);
			this.bgImage.draw(this.bgOffset.x, this.bgOffset.y);
			b.restore();
			if (0 != this.mainMenuAlpha) {
				b.globalAlpha =
					this.mainMenuAlpha;
				this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 135);
				var c = this.playButtonPos.x + this.playButtonOffset.x,
					d = this.playButtonPos.y + this.playButtonOffset.y;
				this.playButtonDown && (d += 2);
				b.save();
				b.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha;
				b.translate(c, d);
				b.scale(this.playButtonScale, this.playButtonScale);
				this.playButtonImage.draw(this.playButtonRect.x, this.playButtonRect.y);
				b.restore();
				c = this.moregamesButtonPos.x + this.moregamesButtonOffset.x + this.moregamesButtonRect.x;
				d = this.moregamesButtonPos.y + this.moregamesButtonOffset.y + this.moregamesButtonRect.y;
				this.moregamesButtonDown && (d += 2);
				b.save();
				b.globalAlpha = this.mainMenuAlpha * this.moregamesButtonAlpha;
				this.moregamesButtonImage.draw(c, d);
				b.restore()
			}
		},
		updateMainMenu: function() {
			if (!this.transitionFadein && !this.transitionFadeout && !this.optionsPanelDrawFlag) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.playButtonPos.x +
					this.playButtonRect.x;
				c.y = this.playButtonPos.y + this.playButtonRect.y;
				c.w = this.playButtonRect.w;
				c.h = this.playButtonRect.h;
				if (this.aabbCheck(b, c) || ig.input.released("enter")) {
					if (this.playButtonDown = !1, this.playButtonScale = 0.95, ig.ua.mobile || (this.playButtonScale = 1), ig.input.state("click") && (this.playButtonDown = !0, this.playButtonScale = 0.9), ig.input.released("click") || ig.input.released("enter")) this.playButtonDown = !1, this.playButtonScale = 0.95, ig.ua.mobile || (this.playButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
						this.startFadeoutTransition(), this.transitionEndFunction = ig.game.firstrun ? this.playTutorial : this.showCharacterSelect
				} else this.playButtonDown = !1, this.playButtonScale = 0.95
			}
		},
		showMainMenu: function() {
			ig.input.clearPressed();
			this.moregames.show();
			this.startFadeinTransition();
			this.transitionEndFunction = null;
			this.characterSelectDrawFlag = !1
		},
		drawCharacterSelect: function() {
			var b = !0;
			0 == ig.game.characterUnlock[this.selectedCharId] && (b = !1);
			var c = ig.system.context;
			c.save();
			1 != this.bgScale && c.scale(this.bgScale,
				1);
			this.bg2Image.draw(this.bgOffset.x, this.bgOffset.y);
			c.restore();
			this.drawMoney();
			var d = this.charBackButtonPos.x + this.charBackButtonOffset.x,
				e = this.charBackButtonPos.y + this.charBackButtonOffset.y;
			this.charBackButtonDown && (e += 2);
			c.save();
			c.globalAlpha = this.charBackButtonAlpha;
			c.translate(d, e);
			c.scale(this.charBackButtonScale, this.charBackButtonScale);
			this.charBackButtonImage.draw(this.charBackButtonRect.x, this.charBackButtonRect.y);
			c.restore();
			var d = this.charactersTitlePos.x,
				e = this.charactersTitlePos.y,
				f = this.charactersTitleContent;
			c.save();
			c.font = "36px GreatLakesNF, Helvetica, Verdana";
			c.textAlign = "center";
			for (var e = e + (32.4 - 36 * (f.length / 2)), g = 0; g < f.length; g++) c.fillStyle = "rgba(0,0,0,0.67)", c.fillText(f[g], d, e + 3), c.fillStyle = "rgb(201,255,143)", c.fillText(f[g], d, e), e += 36;
			c.restore();
			d = this.selectButtonPos.x + this.selectButtonOffset.x;
			e = this.selectButtonPos.y + this.selectButtonOffset.y;
			this.selectButtonDown && (e += 2);
			c.save();
			c.globalAlpha = this.selectButtonAlpha;
			c.translate(d, e);
			c.scale(this.selectButtonScale,
				this.selectButtonScale);
			c.strokeStyle = "rgb(255,255,255)";
			c.fillStyle = "rgb(255,128,128)";
			f = _STRINGS.UI.SELECT.split("").join(String.fromCharCode(8202));
			b || (c.fillStyle = "rgb(26,216,216)", f = "" + this.characterPrices[this.selectedCharId], f = f.split("").join(String.fromCharCode(8202)));
			c.lineWidth = 5;
			this.roundRect(c, this.selectButtonRect.x, this.selectButtonRect.y, this.selectButtonRect.w, this.selectButtonRect.h, 5, !0, !0);
			c.lineWidth = 1;
			c.fillStyle = "#ffffff";
			c.font = "24px GreatLakesNF, Helvetica, Verdana";
			c.textAlign =
				"center";
			c.fillText(f, 0, 10);
			b || (this.starImage.draw(-75 - this.starImage.width / 2, 0.62 * -this.starImage.height), this.starImage.draw(75 - this.starImage.width / 2, 0.62 * -this.starImage.height));
			c.restore();
			d = this.selectLeftButtonPos.x + this.selectLeftButtonOffset.x;
			e = this.selectLeftButtonPos.y + this.selectLeftButtonOffset.y;
			this.selectLeftButtonDown && (e += 2);
			c.save();
			c.globalAlpha = this.selectLeftButtonAlpha;
			c.translate(d, e);
			c.scale(this.selectLeftButtonScale, this.selectLeftButtonScale);
			c.fillStyle = "rgb(26,216,216)";
			c.strokeStyle = "rgb(255,255,255)";
			c.lineWidth = 5;
			this.roundRect(c, this.selectLeftButtonRect.x, this.selectLeftButtonRect.y, this.selectLeftButtonRect.w, this.selectLeftButtonRect.h, 5, !0, !0);
			c.scale(0.5, 0.5);
			this.charBackButtonImage.draw(this.charBackButtonRect.x, this.charBackButtonRect.y);
			c.restore();
			d = this.selectRightButtonPos.x + this.selectRightButtonOffset.x;
			e = this.selectRightButtonPos.y + this.selectRightButtonOffset.y;
			this.selectRightButtonDown && (e += 2);
			c.save();
			c.globalAlpha = this.selectRightButtonAlpha;
			c.translate(d, e);
			c.scale(this.selectRightButtonScale, this.selectRightButtonScale);
			c.fillStyle = "rgb(26,216,216)";
			c.strokeStyle = "rgb(255,255,255)";
			c.lineWidth = 5;
			this.roundRect(c, this.selectRightButtonRect.x, this.selectRightButtonRect.y, this.selectRightButtonRect.w, this.selectRightButtonRect.h, 5, !0, !0);
			c.scale(-0.5, 0.5);
			this.charBackButtonImage.draw(this.charBackButtonRect.x, this.charBackButtonRect.y);
			c.restore();
			for (var b = ig.system.width / 2, m = this.iconPosY, p = this.iconSpacing, g = 0; g < this.characterIcons.length; g++)
				if (d =
					b + (g - 2) * p + this.iconAnimateOffset, e = m, f = this.characterIcons[g], !(0 > f || f > this.characterImage.length)) {
					var r = this.characterImage[f][1];
					ig.game.characterUnlock[f] || (r = this.characterImage[f][0]);
					var u = r.width,
						s = r.height,
						n = this.iconAnimateMinScale;
					g == this.iconAnimateScaleTarget && (n = this.iconAnimateScale);
					var q = 1,
						t = d - b;
					0 > t && (t = -t);
					if (t > p)
						if (t - p < this.iconSpacing - 25) q = 1 - (t - p) / (this.iconSpacing - 25);
						else continue;
					t = 0.5 * q;
					c.save();
					c.fillStyle = "rgba(0,0,0," + t + ")";
					c.translate(d, e);
					c.scale(n, n);
					c.translate(0, 10);
					c.beginPath();
					c.moveTo(55, 0);
					c.lineTo(0, 27.5);
					c.lineTo(-55, 0);
					c.lineTo(0, -27.5);
					c.closePath();
					c.fill();
					c.restore();
					c.save();
					c.translate(d, e);
					c.scale(n, n);
					c.globalAlpha = q;
					r.draw(-u / 2, 0.77 * -s);
					c.restore();
					ig.game.characterUnlock[f] || (c.save(), c.translate(d, e), c.scale(n, n), c.globalAlpha = q, this.lockedImage.draw(-this.lockedImage.width / 2, -this.lockedImage.height / 2 - 20), c.restore());
					g == this.iconAnimateScaleTarget && 0 == this.iconAnimateOffset && (f = _STRINGS.NAMES[this.selectedCharId], f = f.split("").join(String.fromCharCode(8202)),
						c.save(), c.translate(d, e), c.scale(n, n), c.globalAlpha = q, c.lineWidth = 1, c.fillStyle = "#ffffff", c.font = "24px GreatLakesNF, Helvetica, Verdana", c.textAlign = "center", c.fillText(f, 0, 0.23 * s + 40), c.restore())
				}
		},
		updateCharacterSelect: function() {
			if (!this.transitionFadein && !this.transitionFadeout && !this.optionsPanelDrawFlag) {
				var b = !0;
				0 == ig.game.characterUnlock[this.selectedCharId] && (b = !1);
				this.pointer.refreshPos();
				var c = {};
				c.x = this.pointer.pos.x + this.pointer.size.x / 2;
				c.y = this.pointer.pos.y + this.pointer.size.y /
					2;
				c.w = 1;
				c.h = 1;
				var d = {};
				d.x = this.charBackButtonPos.x + this.charBackButtonRect.x;
				d.y = this.charBackButtonPos.y + this.charBackButtonRect.y;
				d.w = this.charBackButtonRect.w;
				d.h = this.charBackButtonRect.h;
				if (this.aabbCheck(c, d)) {
					if (this.charBackButtonDown = !1, this.charBackButtonScale = 0.95, ig.ua.mobile || (this.charBackButtonScale = 1), ig.input.state("click") && (this.charBackButtonDown = !0, this.charBackButtonScale = 0.9), ig.input.released("click")) {
						this.charBackButtonDown = !1;
						this.charBackButtonScale = 0.95;
						ig.ua.mobile ||
							(this.charBackButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						b && (ig.game.selectedCharacterId = this.selectedCharId, ig.game.savePlayerStats());
						this.startFadeoutTransition();
						this.transitionEndFunction = this.showMainMenu;
						return
					}
				} else this.charBackButtonDown = !1, this.charBackButtonScale = 0.95;
				d = {};
				d.x = this.selectButtonPos.x + this.selectButtonRect.x;
				d.y = this.selectButtonPos.y + this.selectButtonRect.y;
				d.w = this.selectButtonRect.w;
				d.h = this.selectButtonRect.h;
				if (this.aabbCheck(c, d) || ig.input.released("enter")) {
					if (this.selectButtonDown = !1, this.selectButtonScale = 0.95, ig.ua.mobile || (this.selectButtonScale = 1), ig.input.state("click") && (this.selectButtonDown = !0, this.selectButtonScale = 0.9), ig.input.released("click") || ig.input.released("enter"))
						if (this.selectButtonDown = !1, this.selectButtonScale = 0.95, ig.ua.mobile || (this.selectButtonScale = 1), !this.iconAnimateFlag) {
							b ? (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), ig.game.selectedCharacterId = this.selectedCharId, ig.game.savePlayerStats(), this.startFadeoutTransition(), this.transitionEndFunction =
								this.playGame) : ig.game.money >= this.characterPrices[this.selectedCharId] ? (ig.game.money -= this.characterPrices[this.selectedCharId], ig.game.characterUnlock[this.selectedCharId] = 1, ig.game.selectedCharacterId = this.selectedCharId, ig.game.savePlayerStats(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shield)) : ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
							return
						}
				} else this.selectButtonDown = !1, this.selectButtonScale = 0.95;
				d = {};
				d.x = this.selectLeftButtonPos.x + this.selectLeftButtonRect.x;
				d.y =
					this.selectLeftButtonPos.y + this.selectLeftButtonRect.y;
				d.w = this.selectLeftButtonRect.w;
				d.h = this.selectLeftButtonRect.h;
				if (this.aabbCheck(c, d)) {
					if (this.selectLeftButtonDown = !1, this.selectLeftButtonScale = 0.95, ig.ua.mobile || (this.selectLeftButtonScale = 1), ig.input.state("click") && (this.selectLeftButtonDown = !0, this.selectLeftButtonScale = 0.9), ig.input.released("click")) {
						this.selectLeftButtonDown = !1;
						this.selectLeftButtonScale = 0.95;
						ig.ua.mobile || (this.selectLeftButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						this.leftCharacterSelected();
						return
					}
				} else this.selectLeftButtonDown = !1, this.selectLeftButtonScale = 0.95;
				d = {};
				d.x = this.selectRightButtonPos.x + this.selectRightButtonRect.x;
				d.y = this.selectRightButtonPos.y + this.selectRightButtonRect.y;
				d.w = this.selectRightButtonRect.w;
				d.h = this.selectRightButtonRect.h;
				if (this.aabbCheck(c, d)) {
					if (this.selectRightButtonDown = !1, this.selectRightButtonScale = 0.95, ig.ua.mobile || (this.selectRightButtonScale = 1), ig.input.state("click") && (this.selectRightButtonDown = !0, this.selectRightButtonScale =
							0.9), ig.input.released("click")) {
						this.selectRightButtonDown = !1;
						this.selectRightButtonScale = 0.95;
						ig.ua.mobile || (this.selectRightButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						this.rightCharacterSelected();
						return
					}
				} else this.selectRightButtonDown = !1, this.selectRightButtonScale = 0.95;
				if (ig.ua.mobile) ig.input.pressed("click") ? (this.keyReleased = !1, this.pressTime = ig.system.clock.delta(), this.pressPos = c.x) : ig.input.released("click") && (this.keyReleased = !0, b = ig.system.clock.delta() -
					this.pressTime, 0.5 > b && (b = c.x - this.pressPos, 5 < b ? (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.leftCharacterSelected()) : -5 > b && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.rightCharacterSelected())));
				else {
					if (ig.input.state("left") && ig.input.state("right")) return !1;
					ig.input.state("left") ? this.keyReleased && this.leftCharacterSelected() && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.keyReleased = !1) : ig.input.state("right") && this.keyReleased && this.rightCharacterSelected() &&
						(ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.keyReleased = !1);
					if (ig.input.released("left") || ig.input.released("right")) this.keyReleased = !0
				}
				b = {
					x: 0
				};
				b.y = this.iconPosY - 75;
				b.w = ig.system.width / 2 - 75;
				b.h = 150;
				this.aabbCheck(c, b) && ig.input.released("click") && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.leftCharacterSelected());
				b = {};
				b.x = ig.system.width / 2 + 75;
				b.y = this.iconPosY - 75;
				b.w = ig.system.width / 2 - 75;
				b.h = 150;
				this.aabbCheck(c, b) && ig.input.released("click") && (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button),
					this.rightCharacterSelected());
				this.iconAnimateFlag && (b = ig.system.clock.delta() - this.iconAnimateTime, c = b / 0.25, this.iconAnimateOffset = c * this.iconAnimateDirection * this.iconSpacing, 0.5 > c ? (this.iconAnimateScale = this.iconAnimateMinScale + (1 - this.iconAnimateMinScale) * (1 - c / 0.5), this.iconAnimateScaleTarget = 2) : (this.iconAnimateScale = this.iconAnimateMinScale + (1 - this.iconAnimateMinScale) * ((c - 0.5) / 0.5), this.iconAnimateScaleTarget = 0 > this.iconAnimateDirection ? 3 : 1), 1 <= c && (this.iconAnimateFlag = !1, 0 < this.iconAnimateDirection ?
					this.selectedCharId = this.characterIcons[1] : 0 > this.iconAnimateDirection && (this.selectedCharId = this.characterIcons[3]), this.setCharacterIcons(this.selectedCharId), this.iconAnimateScale = 1, this.iconAnimateScaleTarget = 2, this.iconAnimateOffset = 0))
			}
		},
		leftCharacterSelected: function() {
			if (0 != this.characterIcons.length) {
				if (this.iconAnimateFlag) return !0;
				this.iconAnimateFlag = !0;
				this.iconAnimateTime = ig.system.clock.delta();
				this.iconAnimateDirection = 1;
				return !0
			}
		},
		rightCharacterSelected: function() {
			if (0 != this.characterIcons.length) {
				if (this.iconAnimateFlag) return !0;
				this.iconAnimateFlag = !0;
				this.iconAnimateTime = ig.system.clock.delta();
				this.iconAnimateDirection = -1;
				return !0
			}
		},
		setCharacterIcons: function(b) {
			0 > b && (b = this.characterImage.length + b);
			b > this.characterImage.length - 1 && (b -= this.characterImage.length);
			0 > b || (this.characterIcons = [], this.characterIcons.push(b), b -= 1, 0 > b && (b = this.characterImage.length + b), this.characterIcons.unshift(b), b -= 1, 0 > b && (b = this.characterImage.length + b), this.characterIcons.unshift(b), b += 3, b > this.characterImage.length - 1 && (b -= this.characterImage.length),
				this.characterIcons.push(b), b += 1, b > this.characterImage.length - 1 && (b -= this.characterImage.length), this.characterIcons.push(b))
		},
		showCharacterSelect: function() {
			ig.input.clearPressed();
			this.moregames.hide();
			this.startFadeinTransition();
			this.transitionEndFunction = null;
			this.characterSelectDrawFlag = !0;
			this.selectedCharId = ig.game.selectedCharacterId
		},
		drawOptionsPanel: function() {
			if (this.optionsPanelDrawFlag) {
				var b = this.optionsPanelPos.x + this.optionsPanelRect.x + this.optionsPanelOffset.x,
					c = this.optionsPanelPos.y +
					this.optionsPanelRect.y + this.optionsPanelOffset.y,
					d = this.optionsPanelRect.w,
					e = this.optionsPanelRect.h,
					f = ig.system.context;
				f.globalAlpha = this.optionsPanelAlpha;
				f.fillStyle = "rgba(0,0,0,0.9)";
				f.strokeStyle = "rgb(255,255,255)";
				f.lineWidth = 5;
				this.roundRect(f, b, c, d, e, 10, !0, !0);
				var d = this.optionsPanelPos.x + this.optionsPanelOffset.x,
					e = this.optionsPanelPos.y + this.optionsPanelOffset.y,
					b = d + this.optionsTitlePos.x,
					c = e + this.optionsTitlePos.y,
					g = 36,
					m = this.optionsTitleContent;
				f.save();
				f.fillStyle = "rgb(201,255,143)";
				f.font = "36px GreatLakesNF, Helvetica, Verdana";
				f.textAlign = "center";
				for (var c = c + (0.9 * g - m.length / 2 * g), p = 0; p < m.length; p++) f.fillText(m[p], b, c), c += g;
				f.restore();
				b = d + this.soundOptionPos.x + this.soundOptionLabelRect.x + this.soundOptionLabelRect.w / 2;
				c = e + this.soundOptionPos.y + this.soundOptionLabelRect.y + this.soundOptionLabelRect.h / 2;
				g = 25;
				m = this.soundOptionLabelContent;
				f.save();
				f.fillStyle = "#ffffff";
				f.font = "25px GreatLakesNF, Helvetica, Verdana";
				f.textAlign = "center";
				c += 0.9 * g - m.length / 2 * g;
				for (p = 0; p < m.length; p++) f.fillText(m[p],
					b, c), c += g;
				f.restore();
				b = d + this.musicOptionPos.x + this.musicOptionLabelRect.x + this.musicOptionLabelRect.w / 2;
				c = e + this.musicOptionPos.y + this.musicOptionLabelRect.y + this.musicOptionLabelRect.h / 2;
				g = 25;
				m = this.musicOptionLabelContent;
				f.save();
				f.fillStyle = "#ffffff";
				f.font = "25px GreatLakesNF, Helvetica, Verdana";
				f.textAlign = "center";
				c += 0.9 * g - m.length / 2 * g;
				for (p = 0; p < m.length; p++) f.fillText(m[p], b, c), c += g;
				f.restore();
				b = d + this.tutorialButtonPos.x + this.tutorialButtonOffset.x;
				c = e + this.tutorialButtonPos.y + this.tutorialButtonOffset.y;
				this.tutorialButtonDown && (c += 2);
				f.save();
				f.globalAlpha = this.tutorialButtonAlpha;
				f.translate(b, c);
				f.scale(this.tutorialButtonScale, this.tutorialButtonScale);
				f.fillStyle = "rgb(26,216,216)";
				f.strokeStyle = "rgb(255,255,255)";
				f.lineWidth = 5;
				this.roundRect(f, this.tutorialButtonRect.x, this.tutorialButtonRect.y, this.tutorialButtonRect.w, this.tutorialButtonRect.h, 10, !0, !0);
				f.lineWidth = 1;
				f.fillStyle = "#ffffff";
				f.font = "24px GreatLakesNF, Helvetica, Verdana";
				f.textAlign = "center";
				m = _STRINGS.UI.TUTORIAL.split("").join(String.fromCharCode(8202));
				f.fillText(m, 0, 10);
				f.restore();
				b = d + this.backButtonPos.x + this.backButtonOffset.x;
				c = e + this.backButtonPos.y + this.backButtonOffset.y;
				this.backButtonDown && (c += 2);
				f.save();
				f.globalAlpha = this.backButtonAlpha;
				f.translate(b, c);
				f.scale(this.backButtonScale, this.backButtonScale);
				f.fillStyle = "rgb(26,216,216)";
				f.strokeStyle = "rgb(255,255,255)";
				f.lineWidth = 5;
				this.roundRect(f, this.backButtonRect.x, this.backButtonRect.y, this.backButtonRect.w, this.backButtonRect.h, 10, !0, !0);
				f.lineWidth = 1;
				f.fillStyle = "#ffffff";
				f.font =
					"24px GreatLakesNF, Helvetica, Verdana";
				f.textAlign = "center";
				m = _STRINGS.UI.BACK.split("").join(String.fromCharCode(8202));
				f.fillText(m, 0, 10);
				f.restore();
				this.drawOptionsControls();
				f.globalAlpha = 1
			}
		},
		updateOptionsPanel: function() {
			if (this.optionsPanelDrawFlag)
				if (this.optionsPanelReady) this.updateOptionsControls();
				else if (this.optionsPanelShowFlag) b = ig.system.clock.delta() - this.optionsPanelShowTime, 0.2 > b ? (this.optionsPanelOffset.y = ig.system.height * (1 - b / 0.2), this.optionsPanelAlpha = b / 0.2) : (this.optionsPanelOffset.y =
				0, this.optionsPanelAlpha = 1, this.optionsPanelReady = !0);
			else {
				var b = ig.system.clock.delta() - this.optionsPanelHideTime;
				0.2 > b ? (this.optionsPanelOffset.y = ig.system.height * b / 0.2, this.optionsPanelAlpha = 1 - b / 0.2) : (this.optionsPanelOffset.y = ig.system.height, this.optionsPanelAlpha = 0, this.optionsPanelReady = !0, this.optionsPanelDrawFlag = !1)
			}
		},
		showOptionsPanel: function() {
			this.optionsPanelShowFlag || (this.optionsPanelDrawFlag = this.optionsPanelShowFlag = !0, this.optionsPanelShowTime = ig.system.clock.delta(), this.optionsPanelReady = !1)
		},
		hideOptionsPanel: function() {
			this.optionsPanelShowFlag && (this.optionsPanelShowFlag = !1, this.optionsPanelHideTime = ig.system.clock.delta(), this.optionsPanelReady = !1)
		},
		drawOptionsControls: function() {
			var b = ig.system.context;
			b.lineWidth = 5;
			var c = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.soundOptionPos.x + this.soundOptionRect.x + this.soundOptionRect.w / 2,
				d = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.soundOptionPos.y + this.soundOptionRect.y + this.soundOptionRect.h / 2,
				e = this.soundOptionRect.h /
				2,
				f = ig.game.sfxVolume;
			1 < f && (f = 1);
			0 > f && (f = 0);
			f = -(this.musicOptionRect.w - 2 * e) / 2 + f * (this.soundOptionRect.w - 2 * e);
			b.fillStyle = "rgba(26,216,216,0.5)";
			b.beginPath();
			b.arc(c - this.soundOptionRect.w / 2 + e, d, e, 0.5 * Math.PI, 1.5 * Math.PI);
			b.lineTo(c + f, d - e);
			b.lineTo(c + f, d + e);
			b.lineTo(c - this.soundOptionRect.w / 2 + e, d + e);
			b.closePath();
			b.fill();
			b.strokeStyle = "rgba(255,255,255,1)";
			b.lineWidth = 5;
			b.beginPath();
			b.arc(c - this.soundOptionRect.w / 2 + e, d, e, 0.5 * Math.PI, 1.5 * Math.PI);
			b.lineTo(c + this.soundOptionRect.w / 2 - e, d - e);
			b.arc(c +
				this.soundOptionRect.w / 2 - e, d, e, 1.5 * Math.PI, 0.5 * Math.PI);
			b.lineTo(c - this.soundOptionRect.w / 2 + e, d + e);
			b.closePath();
			b.stroke();
			b.fillStyle = "rgba(26,216,216,1)";
			b.beginPath();
			b.arc(c + f, d, e, 0, 2 * Math.PI);
			b.closePath();
			b.fill();
			b.strokeStyle = "rgba(255,255,255,0.5)";
			b.lineWidth = 2;
			b.stroke();
			c = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.musicOptionPos.x + this.musicOptionRect.x + this.musicOptionRect.w / 2;
			d = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.musicOptionPos.y + this.musicOptionRect.y +
				this.musicOptionRect.h / 2;
			e = this.musicOptionRect.h / 2;
			f = ig.game.musicVolume;
			1 < f && (f = 1);
			0 > f && (f = 0);
			f = -(this.musicOptionRect.w - 2 * e) / 2 + f * (this.musicOptionRect.w - 2 * e);
			b.fillStyle = "rgba(26,216,216,0.5)";
			b.beginPath();
			b.arc(c - this.musicOptionRect.w / 2 + e, d, e, 0.5 * Math.PI, 1.5 * Math.PI);
			b.lineTo(c + f, d - e);
			b.lineTo(c + f, d + e);
			b.lineTo(c - this.musicOptionRect.w / 2 + e, d + e);
			b.closePath();
			b.fill();
			b.strokeStyle = "rgba(255,255,255,1)";
			b.lineWidth = 5;
			b.beginPath();
			b.arc(c - this.musicOptionRect.w / 2 + e, d, e, 0.5 * Math.PI, 1.5 * Math.PI);
			b.lineTo(c + this.musicOptionRect.w / 2 - e, d - e);
			b.arc(c + this.musicOptionRect.w / 2 - e, d, e, 1.5 * Math.PI, 0.5 * Math.PI);
			b.lineTo(c - this.musicOptionRect.w / 2 + e, d + e);
			b.closePath();
			b.stroke();
			b.fillStyle = "rgba(26,216,216,1)";
			b.beginPath();
			b.arc(c + f, d, e, 0, 2 * Math.PI);
			b.closePath();
			b.fill();
			b.strokeStyle = "rgba(255,255,255,0.5)";
			b.lineWidth = 2;
			b.stroke()
		},
		updateOptionsControls: function() {
			if (!this.transitionFadein && !this.transitionFadeout) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.tutorialButtonPos.x + this.tutorialButtonRect.x;
				c.y = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.tutorialButtonPos.y + this.tutorialButtonRect.y;
				c.w = this.tutorialButtonRect.w;
				c.h = this.tutorialButtonRect.h;
				if (this.aabbCheck(b, c)) {
					if (this.tutorialButtonDown = !1, this.tutorialButtonScale = 0.95, ig.ua.mobile || (this.tutorialButtonScale = 1), ig.input.state("click") && (this.tutorialButtonDown = !0, this.tutorialButtonScale = 0.9), ig.input.released("click")) {
						this.tutorialButtonDown = !1;
						this.tutorialButtonScale = 0.95;
						ig.ua.mobile || (this.tutorialButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						this.startFadeoutTransition();
						this.transitionEndFunction = this.playTutorial;
						return
					}
				} else this.tutorialButtonDown = !1, this.tutorialButtonScale = 0.95;
				c = {};
				c.x = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.backButtonPos.x + this.backButtonRect.x;
				c.y = this.optionsPanelPos.y + this.optionsPanelOffset.y +
					this.backButtonPos.y + this.backButtonRect.y;
				c.w = this.backButtonRect.w;
				c.h = this.backButtonRect.h;
				if (this.aabbCheck(b, c)) {
					if (this.backButtonDown = !1, this.backButtonScale = 0.95, ig.ua.mobile || (this.backButtonScale = 1), ig.input.state("click") && (this.backButtonDown = !0, this.backButtonScale = 0.9), ig.input.released("click")) {
						this.backButtonDown = !1;
						this.backButtonScale = 0.95;
						ig.ua.mobile || (this.backButtonScale = 1);
						ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button);
						this.hideOptionsPanel();
						return
					}
				} else this.backButtonDown = !1, this.backButtonScale = 0.95;
				if (!this.lockToSoundRect && !this.lockToMusicRect && this.pointer.firstClick && !this.pointer.isReleased) {
					this.pointer.refreshPos();
					b = {};
					b.x = this.pointer.pos.x;
					b.y = this.pointer.pos.y;
					b.w = this.pointer.size.x;
					b.h = this.pointer.size.y;
					var d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.soundOptionPos.x + this.soundOptionRect.x + this.soundOptionRect.w / 2,
						e = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.soundOptionPos.y + this.soundOptionRect.y + this.soundOptionRect.h / 2,
						f =
						this.soundOptionRect.h / 2,
						c = {};
					c.x = d - this.soundOptionRect.w / 2 + f;
					c.y = e - this.soundOptionRect.h / 2;
					c.w = this.soundOptionRect.w - 2 * f;
					c.h = this.soundOptionRect.h;
					var d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.musicOptionPos.x + this.musicOptionRect.x + this.musicOptionRect.w / 2,
						e = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.musicOptionPos.y + this.musicOptionRect.y + this.musicOptionRect.h / 2,
						f = this.musicOptionRect.h / 2,
						g = {};
					g.x = d - this.musicOptionRect.w / 2 + f;
					g.y = e - this.musicOptionRect.h / 2;
					g.w = this.musicOptionRect.w -
						2 * f;
					g.h = this.musicOptionRect.h;
					this.aabbCheck(b, c) ? this.lockToSoundRect = !0 : this.aabbCheck(b, g) && (this.lockToMusicRect = !0)
				} else this.pointer.isReleased && (this.lockToMusicRect = this.lockToSoundRect = !1, this.pointer.refreshPos(), b = {}, b.x = this.pointer.pos.x, b.y = this.pointer.pos.y, b.w = this.pointer.size.x, b.h = this.pointer.size.y, d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.soundOptionPos.x + this.soundOptionRect.x + this.soundOptionRect.w / 2, e = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.soundOptionPos.y +
					this.soundOptionRect.y + this.soundOptionRect.h / 2, f = this.soundOptionRect.h / 2, c = {}, c.x = d - this.soundOptionRect.w / 2 + f, c.y = e - this.soundOptionRect.h / 2, c.w = this.soundOptionRect.w - 2 * f, c.h = this.soundOptionRect.h, d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.musicOptionPos.x + this.musicOptionRect.x + this.musicOptionRect.w / 2, e = this.optionsPanelPos.y + this.optionsPanelOffset.y + this.musicOptionPos.y + this.musicOptionRect.y + this.musicOptionRect.h / 2, f = this.musicOptionRect.h / 2, g = {}, g.x = d - this.musicOptionRect.w /
					2 + f, g.y = e - this.musicOptionRect.h / 2, g.w = this.musicOptionRect.w - 2 * f, g.h = this.musicOptionRect.h, this.aabbCheck(b, c) ? ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button) : this.aabbCheck(b, g) && ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button));
				this.lockToSoundRect ? (d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.soundOptionPos.x + this.soundOptionRect.x + this.soundOptionRect.h / 2, b = this.soundOptionRect.w - this.soundOptionRect.h, d = this.pointer.pos.x + this.pointer.size.x / 2 - d, 0 > d && (d = 0), d > b &&
					(d = b), d /= b, ig.soundHandler.setSfxVolume(d), ig.game.sfxVolume = d, ig.game.savePlayerStats()) : this.lockToMusicRect && (d = this.optionsPanelPos.x + this.optionsPanelOffset.x + this.musicOptionPos.x + this.musicOptionRect.x + this.musicOptionRect.h / 2, b = this.musicOptionRect.w - this.musicOptionRect.h, d = this.pointer.pos.x + this.pointer.size.x / 2 - d, 0 > d && (d = 0), d > b && (d = b), d /= b, ig.soundHandler.setMusicVolume(d), ig.game.musicVolume = d, ig.game.savePlayerStats())
			}
		},
		drawMoney: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.font =
				"24px GreatLakesNF, Helvetica, Verdana";
			ig.system.context.textAlign = "left";
			var b = "" + ig.game.money,
				b = b.split("").join(String.fromCharCode(8202));
			ig.system.context.measureText(b);
			var c = ig.system.context.measureText("m").width;
			this.starImage.draw(0, 50 - 0.62 * this.starImage.height);
			ig.system.context.fillText(b, this.starImage.width - 10, 50 + c / 2)
		},
		startFadeinTransition: function() {
			this.transitionFadein || (this.transitionFadein = !0, this.transitionTime = ig.system.clock.delta())
		},
		startFadeoutTransition: function() {
			this.transitionFadeout ||
				(this.transitionFadeout = !0, this.transitionTime = ig.system.clock.delta())
		},
		wrapText: function(b, c, d) {
			d || (d = 24);
			var e = ig.system.context;
			e.font = d + "px GreatLakesNF, Helvetica, Verdana";
			b = b.split(" ");
			d = "";
			for (var f = [], g = 0; g < b.length; g++) {
				var m = d + b[g] + " ";
				e.measureText(m).width > c && 0 < g ? (f.push(d), d = b[g] + " ") : d = m
			}
			f.push(d);
			return f
		},
		roundRect: function(b, c, d, e, f, g, m, p) {
			"undefined" == typeof p && (p = !0);
			"undefined" === typeof g && (g = 5);
			b.beginPath();
			b.moveTo(c + g, d);
			b.lineTo(c + e - g, d);
			b.quadraticCurveTo(c + e, d, c + e, d +
				g);
			b.lineTo(c + e, d + f - g);
			b.quadraticCurveTo(c + e, d + f, c + e - g, d + f);
			b.lineTo(c + g, d + f);
			b.quadraticCurveTo(c, d + f, c, d + f - g);
			b.lineTo(c, d + g);
			b.quadraticCurveTo(c, d, c + g, d);
			b.closePath();
			p && b.stroke();
			m && b.fill()
		}
	})
});
ig.baked = !0;
ig.module("game.levels.home").requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector").defines(function() {
	LevelHome = {
		entities: [{
			type: "EntityHomeControl",
			x: 0,
			y: 0
		}, {
			type: "EntityPointerSelector",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.entities.game-ui").requires("impact.entity").defines(function() {
	EntityGameUi = ig.Entity.extend({
		zIndex: 2E4,
		pauseButtonImage: new ig.Image("media/graphics/game/ui/ingame/pause.png"),
		pauseButtonShadowImage: new ig.Image("media/graphics/game/ui/ingame/pause.png#000000"),
		pauseButtonPos: {
			x: 0,
			y: 80
		},
		pauseButtonRect: {
			x: -15,
			y: -14,
			w: 31,
			h: 28
		},
		pauseButtonOffset: {
			x: 0,
			y: 0
		},
		pauseButtonAlpha: 1,
		pauseButtonScale: 0.95,
		pauseButtonDown: !1,
		mainmenuButtonPos: {
			x: 0,
			y: 540
		},
		mainmenuButtonRect: {
			x: -160,
			y: -35,
			w: 320,
			h: 70
		},
		mainmenuButtonOffset: {
			x: 0,
			y: 0
		},
		mainmenuButtonAlpha: 1,
		mainmenuButtonScale: 0.95,
		mainmenuButtonDown: !1,
		retryButtonPos: {
			x: 0,
			y: 440
		},
		retryButtonRect: {
			x: -160,
			y: -35,
			w: 320,
			h: 70
		},
		retryButtonOffset: {
			x: 0,
			y: 0
		},
		retryButtonAlpha: 1,
		retryButtonScale: 0.95,
		retryButtonDown: !1,
		gameOverTitlePos: {
			x: 0,
			y: 200
		},
		gameOverTitleRect: {
			x: -160,
			y: -35,
			w: 320,
			h: 70
		},
		gameOverTitleOffset: {
			x: 0,
			y: 0
		},
		tutorialMessagePos: {
			x: 0,
			y: 320
		},
		tutorialMessageRect: {
			x: -170,
			y: -120,
			w: 340,
			h: 240
		},
		tutorialMessageOffset: {
			x: 0,
			y: 0
		},
		tutorialMessageAlpha: 1,
		tutorialTextPos: {
			x: 0,
			y: 300
		},
		tutorialTextRect: {
			x: -170,
			y: -80,
			w: 340,
			h: 160
		},
		tutorialOkButtonPos: {
			x: 0,
			y: 350
		},
		tutorialOkButtonRect: {
			x: -60,
			y: -20,
			w: 120,
			h: 40
		},
		tutorialOkButtonAlpha: 1,
		tutorialOkButtonScale: 0.95,
		tutorialOkButtonDown: !1,
		tutorialCancelButtonPos: {
			x: 0,
			y: 350
		},
		tutorialCancelButtonRect: {
			x: -60,
			y: -20,
			w: 120,
			h: 40
		},
		tutorialCancelButtonAlpha: 1,
		tutorialCancelButtonScale: 0.95,
		tutorialCancelButtonDown: !1,
		tutorialMessages: [],
		tutorialTextLineHeight: 25,
		tapMessage: [],
		leftTapOffset: {
			x: 0,
			y: 0
		},
		rightTapOffset: {
			x: 0,
			y: 0
		},
		drawGameOverScreenFlag: !1,
		starImage: new ig.Image("media/graphics/game/pickups/01.png"),
		overlayAlpha: 1,
		transitionDuration: 0.2,
		transitionTime: 0,
		transitionFadein: !1,
		transitionFadeout: !1,
		transitionEndFunction: null,
		control: null,
		pointer: null,
		init: function(b, c, d) {
			this.parent(b, c, d);
			this.pauseButtonPos.x = ig.system.width - 80;
			this.mainmenuButtonPos.x = ig.system.width / 2;
			this.retryButtonPos.x = ig.system.width / 2;
			this.tutorialMessagePos.x = ig.system.width / 2;
			this.tutorialTextPos.x = ig.system.width / 2;
			this.tutorialOkButtonPos.x = ig.system.width /
				2
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			if (this.control.tutorialMode) {
				for (var b = 0; b < _STRINGS.Tutorial.length; b++) {
					var c = _STRINGS.Tutorial[b][0].split("").join(String.fromCharCode(8202));
					1 == b && (ig.ua.mobile || (c = _STRINGS.Tutorial[b][1].split("").join(String.fromCharCode(8202))));
					this.tutorialMessages.push(this.wrapText(c, this.tutorialTextRect.w - 20))
				}
				this.tapMessage = this.wrapText(_STRINGS.UI["TAP HERE"].split("").join(String.fromCharCode(8202)),
					100);
				ig.ua.mobile || (this.tapMessage = this.wrapText(_STRINGS.UI["CLICK HERE"].split("").join(String.fromCharCode(8202)), 100))
			}
		},
		draw: function() {
			this.control.tutorialPaused && this.drawTutorialUI();
			this.drawPauseScreen();
			this.drawGameOverScreen();
			this.drawGameScore();
			this.drawPauseButton();
			if (this.transitionFadein || this.transitionFadeout) ig.system.context.globalAlpha = this.overlayAlpha, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha =
				1
		},
		drawFPS: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.font = "20px GreatLakesNF, Helvetica, Verdana";
			ig.system.context.textAlign = "center";
			ig.system.context.fillText(ig.game.fps, 20, 30)
		},
		aabbCheck: function(b, c) {
			return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
		},
		update: function() {
			this.updatePauseButton();
			this.control.gamePaused && this.updateMainmenuButton();
			this.drawGameOverScreenFlag && this.updateGameOverScreen();
			this.control.tutorialPaused && this.updateTutorialUI();
			if (this.transitionFadein) {
				var b = ig.system.clock.delta() - this.transitionTime,
					b = b / this.transitionDuration;
				1 < b && (b = 1);
				this.overlayAlpha = 1 - b;
				1 <= b && (this.transitionFadein = !1, this.transitionEndFunction && this.transitionEndFunction())
			} else this.transitionFadeout && (b = ig.system.clock.delta() - this.transitionTime, b /= this.transitionDuration, 1 < b && (b = 1), this.overlayAlpha = b, 1 <= b && (this.transitionFadeout = !1, this.transitionEndFunction && this.transitionEndFunction()))
		},
		startFadeinTransition: function() {
			this.transitionFadein ||
				(this.transitionFadein = !0, this.transitionTime = ig.system.clock.delta())
		},
		startFadeoutTransition: function() {
			this.transitionFadeout || (this.transitionFadeout = !0, this.transitionTime = ig.system.clock.delta())
		},
		drawArrow: function(b, c, d, e) {
			var f, g;
			f = d - b;
			g = e - c;
			var m = Math.sqrt(f * f + g * g);
			if (0 != m) {
				var p;
				f /= m;
				p = g / m;
				g = d - 40 * f;
				var m = e - 40 * p,
					r;
				r = -p;
				var u;
				p = g + 40 * r;
				u = m + 40 * f;
				r = g - 40 * r;
				f = m - 40 * f;
				var s = ig.system.context;
				s.beginPath();
				s.moveTo(d, e);
				s.lineTo(p, u);
				s.lineTo(r, f);
				s.closePath();
				s.fill();
				s.lineWidth = 40;
				s.beginPath();
				s.moveTo(g, m);
				s.lineTo(b, c);
				s.stroke()
			}
		},
		roundRect: function(b, c, d, e, f, g, m, p) {
			"undefined" == typeof p && (p = !0);
			"undefined" === typeof g && (g = 5);
			b.beginPath();
			b.moveTo(c + g, d);
			b.lineTo(c + e - g, d);
			b.quadraticCurveTo(c + e, d, c + e, d + g);
			b.lineTo(c + e, d + f - g);
			b.quadraticCurveTo(c + e, d + f, c + e - g, d + f);
			b.lineTo(c + g, d + f);
			b.quadraticCurveTo(c, d + f, c, d + f - g);
			b.lineTo(c, d + g);
			b.quadraticCurveTo(c, d, c + g, d);
			b.closePath();
			p && b.stroke();
			m && b.fill()
		},
		drawPauseScreen: function() {
			if (this.control.gamePaused && !this.drawGameOverScreenFlag) {
				ig.system.context.globalAlpha =
					0.67;
				ig.system.context.fillStyle = "#000000";
				ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
				ig.system.context.globalAlpha = 1;
				var b = ig.system.width / 2;
				ig.system.context.font = "38px GreatLakesNF, Helvetica, Verdana";
				ig.system.context.textAlign = "center";
				ig.system.context.fillStyle = "rgba(0,0,0,0.5)";
				ig.system.context.fillText(_STRINGS.UI.PAUSED, b + 3, 253);
				ig.system.context.fillStyle = "#ffffff";
				ig.system.context.fillText(_STRINGS.UI.PAUSED, b, 250);
				this.drawMainmenuButton();
			}
		},
		drawGameOverScreen: function() {
			if (this.drawGameOverScreenFlag) {
				ig.system.context.globalAlpha =
					0.67;
				ig.system.context.fillStyle = "#000000";
				ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
				ig.system.context.globalAlpha = 1;
				this.drawMoney();
				var b = ig.system.context,
					c = ig.system.width / 2,
					d = 200;
				b.save();
				b.font = "36px GreatLakesNF, Helvetica, Verdana";
				b.textAlign = "center";
				b.fillStyle = "rgb(26,216,216)";
				var e = _STRINGS.UI["FINAL SCORE"],
					e = e.split("").join(String.fromCharCode(8202));
				ig.system.context.fillStyle = "rgba(0,0,0,0.5)";
				ig.system.context.fillText(e, c + 3, d + 3);
				ig.system.context.fillStyle =
					"#ffffff";
				ig.system.context.fillText(e, c, d);
				b.restore();
				c = ig.system.width / 2;
				d = 300;
				e = "" + this.control.gameScore;
				e = e.split("").join(String.fromCharCode(8202));
				ig.system.context.font = "70px GreatLakesNF, Helvetica, Verdana";
				ig.system.context.textAlign = "center";
				ig.system.context.fillStyle = "rgba(0,0,0,0.5)";
				ig.system.context.fillText(e, c + 3, d + 3);
				ig.system.context.fillStyle = "#ffffff";
				ig.system.context.fillText(e, c, d);
				c = this.retryButtonPos.x + this.retryButtonOffset.x;
				d = this.retryButtonPos.y + this.retryButtonOffset.y;
				this.retryButtonDown && (d += 2);
				b.save();
				b.globalAlpha = this.retryButtonAlpha;
				b.translate(c, d);
				b.scale(this.retryButtonScale, this.retryButtonScale);
				b.fillStyle = "rgb(26,216,216)";
				b.strokeStyle = "rgb(255,255,255)";
				b.lineWidth = 5;
				this.roundRect(b, this.retryButtonRect.x, this.retryButtonRect.y, this.retryButtonRect.w, this.retryButtonRect.h, 10, !0, !0);
				b.lineWidth = 1;
				b.fillStyle = "#ffffff";
				b.font = "24px GreatLakesNF, Helvetica, Verdana";
				b.textAlign = "center";
				e = _STRINGS.UI["RESTART GAME"].split("").join(String.fromCharCode(8202));
				b.fillText(e, 0, 10);
				b.restore();
				this.drawMainmenuButton()
			}
		},
		updateGameOverScreen: function() {
			if (this.drawGameOverScreenFlag && !this.transitionFadein && !this.transitionFadeout) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				var c = {};
				c.x = this.retryButtonPos.x + this.retryButtonRect.x;
				c.y = this.retryButtonPos.y + this.retryButtonRect.y;
				c.w = this.retryButtonRect.w;
				c.h = this.retryButtonRect.h;
				if (this.aabbCheck(b, c) || ig.input.released("enter")) {
					if (this.retryButtonDown = !1, this.retryButtonScale = 0.95, ig.ua.mobile || (this.retryButtonScale = 1), ig.input.state("click") && (this.retryButtonDown = !0, this.retryButtonScale = 0.9), ig.input.released("click") || ig.input.released("enter")) this.retryButtonDown = !1, this.retryButtonScale = 0.95, ig.ua.mobile || (this.retryButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.startFadeoutTransition(), this.transitionEndFunction = this.control.restartGame
				} else this.retryButtonDown = !1, this.retryButtonScale = 0.95
			}
		},
		showGameOverScreen: function() {
			//updateShare(this.control.gameScore);
			//Play68.setRankingScoreDesc(this.control.gameScore);
             var val={};
			val.score=this.control.gameScore;
			hsgame.stop(val);
			this.control.pause();
			this.drawGameOverScreenFlag = !0
		},
		drawPauseButton: function() {
			if (!this.drawGameOverScreenFlag) {
				var b = ig.system.context,
					c = this.pauseButtonPos.x + this.pauseButtonOffset.x,
					d = this.pauseButtonPos.y + this.pauseButtonOffset.y;
				this.pauseButtonDown && (d += 2);
				b.save();
				b.translate(c, d);
				b.scale(this.pauseButtonScale, this.pauseButtonScale);
				b.globalAlpha = 0.5 * this.pauseButtonAlpha;
				this.pauseButtonShadowImage.draw(this.pauseButtonRect.x + 3, this.pauseButtonRect.y + 3);
				b.globalAlpha = this.pauseButtonAlpha;
				this.pauseButtonImage.draw(this.pauseButtonRect.x,
					this.pauseButtonRect.y);
				b.restore()
			}
		},
		updatePauseButton: function() {
			if (!this.drawGameOverScreenFlag) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				var c = {};
				c.x = this.pauseButtonPos.x + this.pauseButtonRect.x;
				c.y = this.pauseButtonPos.y + this.pauseButtonRect.y;
				c.w = this.pauseButtonRect.w;
				c.h = this.pauseButtonRect.h;
				this.aabbCheck(b, c) ? (this.pauseButtonDown = !1, this.pauseButtonScale = 0.95, ig.ua.mobile || (this.pauseButtonScale = 1),
					ig.input.state("click") && (this.pauseButtonDown = !0, this.pauseButtonScale = 0.9), ig.input.released("click") && (this.pauseButtonDown = !1, this.pauseButtonScale = 0.95, ig.ua.mobile || (this.pauseButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.control.togglePause())) : (this.pauseButtonDown = !1, this.pauseButtonScale = 0.95)
			}
		},
		drawMainmenuButton: function() {
			var b = ig.system.context,
				c = this.mainmenuButtonPos.x + this.mainmenuButtonOffset.x,
				d = this.mainmenuButtonPos.y + this.mainmenuButtonOffset.y;
			this.mainmenuButtonDown && (d += 2);
			b.save();
			b.globalAlpha = this.mainmenuButtonAlpha;
			b.translate(c, d);
			b.scale(this.mainmenuButtonScale, this.mainmenuButtonScale);
			b.fillStyle = "rgb(255,128,128)";
			b.strokeStyle = "rgb(255,255,255)";
			b.lineWidth = 5;
			this.roundRect(b, this.mainmenuButtonRect.x, this.mainmenuButtonRect.y, this.mainmenuButtonRect.w, this.mainmenuButtonRect.h, 10, !0, !0);
			b.lineWidth = 1;
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			c = _STRINGS.UI["BACK TO MAIN MENU"].split("").join(String.fromCharCode(8202));
			b.fillText(c, 0, 10);
			b.restore()
		},
		updateMainmenuButton: function() {
			if (!this.transitionFadein && !this.transitionFadeout) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				var c = {};
				c.x = this.mainmenuButtonPos.x + this.mainmenuButtonRect.x;
				c.y = this.mainmenuButtonPos.y + this.mainmenuButtonRect.y;
				c.w = this.mainmenuButtonRect.w;
				c.h = this.mainmenuButtonRect.h;
				this.aabbCheck(b, c) ? (this.mainmenuButtonDown = !1, this.mainmenuButtonScale = 0.95,
					ig.ua.mobile || (this.mainmenuButtonScale = 1), ig.input.state("click") && (this.mainmenuButtonDown = !0,this.mainmenuButtonScale = 0.9), ig.input.released("click") && (this.mainmenuButtonDown = !1, this.mainmenuButtonScale = 0.95, ig.ua.mobile || (this.mainmenuButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.startFadeoutTransition(), this.transitionEndFunction = this.control.returnToMainMenu)) : (this.mainmenuButtonDown = !1, this.mainmenuButtonScale = 0.95)
			}
		},
		drawGameScore: function() {
			if (!this.drawGameOverScreenFlag) {
				var b =
					ig.system.width / 2,
					c = "" + this.control.gameScore,
					c = c.split("").join(String.fromCharCode(8202));
				ig.system.context.font = "70px GreatLakesNF, Helvetica, Verdana";
				ig.system.context.textAlign = "center";
				ig.system.context.fillStyle = "rgba(0,0,0,0.5)";
				ig.system.context.fillText(c, b + 3, 83);
				ig.system.context.fillStyle = "#ffffff";
				ig.system.context.fillText(c, b, 80)
			}
		},
		drawMoney: function() {
			ig.system.context.fillStyle = "#ffffff";
			ig.system.context.font = "24px GreatLakesNF, Helvetica, Verdana";
			ig.system.context.textAlign = "left";
			var b = "" + ig.game.money,
				b = b.split("").join(String.fromCharCode(8202));
			ig.system.context.measureText(b);
			var c = ig.system.context.measureText("m").width;
			this.starImage.draw(0, 50 - 0.62 * this.starImage.height);
			ig.system.context.fillText(b, this.starImage.width - 10, 50 + c / 2)
		},
		drawTutorialUI: function() {
			if (1 == this.control.tutorialStage) this.drawInputTutorial();
			else if (0 == this.control.tutorialStage || 3 == this.control.tutorialStage || 5 == this.control.tutorialStage || 7 == this.control.tutorialStage || 9 == this.control.tutorialStage ||
				11 == this.control.tutorialStage || 13 == this.control.tutorialStage || 15 == this.control.tutorialStage || 17 == this.control.tutorialStage || 19 == this.control.tutorialStage || 21 == this.control.tutorialStage || 23 == this.control.tutorialStage || 25 == this.control.tutorialStage || -1 == this.control.tutorialStage) ig.system.context.globalAlpha = 0.33, ig.system.context.fillStyle = "#000000", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height), ig.system.context.globalAlpha = 1, this.drawTutorialMessage()
		},
		updateTutorialUI: function() {
			1 ==
				this.control.tutorialStage ? this.updateInputTutorial() : (this.updateTutorialOkButton(), -1 == this.control.tutorialStage && this.updateTutorialCancelButton())
		},
		drawTutorialMessage: function() {
			var b = this.control.tutorialStage,
				c = "";
			switch (b) {
				case 0:
					c = this.tutorialMessages[0];
					break;
				case 3:
					c = this.tutorialMessages[2];
					break;
				case 5:
					c = this.tutorialMessages[3];
					break;
				case 7:
					c = this.tutorialMessages[4];
					break;
				case 9:
					c = this.tutorialMessages[5];
					break;
				case 11:
					c = this.tutorialMessages[6];
					break;
				case 13:
					c = this.tutorialMessages[7];
					break;
				case 15:
					c = this.tutorialMessages[8];
					break;
				case 17:
					c = this.tutorialMessages[9];
					break;
				case 19:
					c = this.tutorialMessages[10];
					break;
				case 21:
					c = this.tutorialMessages[11];
					break;
				case 23:
					c = this.tutorialMessages[12];
					break;
				case -1:
					c = this.tutorialMessages[13]
			}
			var d = ig.system.context,
				e = this.tutorialMessagePos.x + this.tutorialMessageOffset.x,
				f = this.tutorialMessagePos.y + this.tutorialMessageOffset.y;
			this.tutorialTextRect.h = this.tutorialTextLineHeight * (1 + c.length);
			this.tutorialTextRect.y = -this.tutorialTextRect.h /
				2;
			this.tutorialMessageRect.h = 30 + this.tutorialOkButtonRect.h + this.tutorialTextRect.h;
			this.tutorialMessageRect.y = -this.tutorialMessageRect.h / 2;
			d.save();
			d.globalAlpha = this.tutorialMessageAlpha;
			d.translate(e, f);
			d.scale(this.tutorialMessageScale, this.tutorialMessageScale);
			d.fillStyle = "rgb(0,128,128)";
			d.strokeStyle = "rgb(255,255,255)";
			d.lineWidth = 5;
			this.roundRect(d, this.tutorialMessageRect.x, this.tutorialMessageRect.y, this.tutorialMessageRect.w, this.tutorialMessageRect.h, 10, !0, !0);
			d.restore();
			e = this.tutorialTextPos.x;
			f = f - this.tutorialMessageRect.h / 2 + (this.tutorialMessageRect.h - (30 + this.tutorialOkButtonRect.h)) / 2 + 10;
			d.save();
			d.globalAlpha = this.tutorialMessageAlpha;
			d.translate(e, f);
			d.fillStyle = "#ffffff";
			d.font = "24px GreatLakesNF, Helvetica, Verdana";
			d.textAlign = "center";
			f = 0.9 * this.tutorialTextLineHeight - c.length / 2 * this.tutorialTextLineHeight;
			for (e = 0; e < c.length; e++) d.fillText(c[e], 0, f), f += this.tutorialTextLineHeight;
			d.restore(); - 1 == b ? this.drawTutorialOkCancelButton() : this.drawTutorialOkButton()
		},
		drawTutorialOkButton: function() {
			var b =
				ig.system.context;
			this.tutorialOkButtonPos.y = this.tutorialMessagePos.y + this.tutorialMessageRect.h / 2 - 10 - this.tutorialOkButtonRect.h / 2;
			var c = this.tutorialOkButtonPos.x,
				d = this.tutorialOkButtonPos.y;
			this.tutorialOkButtonDown && (d += 2);
			b.save();
			b.globalAlpha = this.tutorialOkButtonAlpha;
			b.translate(c, d);
			b.scale(this.tutorialOkButtonScale, this.tutorialOkButtonScale);
			b.fillStyle = "rgb(26,216,216)";
			b.strokeStyle = "rgb(255,255,255)";
			b.lineWidth = 5;
			this.roundRect(b, this.tutorialOkButtonRect.x, this.tutorialOkButtonRect.y,
				this.tutorialOkButtonRect.w, this.tutorialOkButtonRect.h, 10, !0, !0);
			b.lineWidth = 1;
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			c = _STRINGS.UI.OK.split("").join(String.fromCharCode(8202));
			b.fillText(c, 0, 10);
			b.restore()
		},
		updateTutorialOkButton: function() {
			if (!this.control.gamePaused && !this.transitionFadein && !this.transitionFadeout) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				var c = {};
				c.x = this.tutorialOkButtonPos.x + this.tutorialOkButtonRect.x;
				c.y = this.tutorialOkButtonPos.y + this.tutorialOkButtonRect.y;
				c.w = this.tutorialOkButtonRect.w;
				c.h = this.tutorialOkButtonRect.h;
				if (this.aabbCheck(b, c) || ig.input.released("enter")) {
					if (this.tutorialOkButtonDown = !1, this.tutorialOkButtonScale = 0.95, ig.ua.mobile || (this.tutorialOkButtonScale = 1), ig.input.state("click") && (this.tutorialOkButtonDown = !0, this.tutorialOkButtonScale = 0.9), ig.input.released("click") || ig.input.released("enter")) this.tutorialOkButtonDown = !1, this.tutorialOkButtonScale = 0.95, ig.ua.mobile || (this.tutorialOkButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.control.tutorialNext()
				} else this.tutorialOkButtonDown = !1, this.tutorialOkButtonScale = 0.95
			}
		},
		drawTutorialOkCancelButton: function() {
			var b = ig.system.context;
			this.tutorialOkButtonPos.x = this.tutorialMessagePos.x - 0.4 * this.tutorialMessageRect.h;
			this.tutorialOkButtonPos.y = this.tutorialMessagePos.y + this.tutorialMessageRect.h / 2 - 10 - this.tutorialOkButtonRect.h / 2;
			var c =
				this.tutorialOkButtonPos.x,
				d = this.tutorialOkButtonPos.y;
			this.tutorialOkButtonDown && (d += 2);
			b.save();
			b.globalAlpha = this.tutorialOkButtonAlpha;
			b.translate(c, d);
			b.scale(this.tutorialOkButtonScale, this.tutorialOkButtonScale);
			b.fillStyle = "rgb(26,216,216)";
			b.strokeStyle = "rgb(255,255,255)";
			b.lineWidth = 5;
			this.roundRect(b, this.tutorialOkButtonRect.x-15, this.tutorialOkButtonRect.y, this.tutorialOkButtonRect.w, this.tutorialOkButtonRect.h, 10, !0, !0);
			b.lineWidth = 1;
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			c = _STRINGS.UI.OK.split("").join(String.fromCharCode(8202));
			b.fillText(c, -15, 10);
			b.restore();
			this.tutorialCancelButtonPos.x = this.tutorialMessagePos.x + 0.4 * this.tutorialMessageRect.h;
			this.tutorialCancelButtonPos.y = this.tutorialMessagePos.y + this.tutorialMessageRect.h / 2 - 10 - this.tutorialCancelButtonRect.h / 2;
			c = this.tutorialCancelButtonPos.x;
			d = this.tutorialCancelButtonPos.y;
			this.tutorialCancelButtonDown && (d += 2);
			b.save();
			b.globalAlpha = this.tutorialCancelButtonAlpha;
			b.translate(c, d);
			b.scale(this.tutorialCancelButtonScale,
				this.tutorialCancelButtonScale);
			b.fillStyle = "rgb(255,128,128)";
			b.strokeStyle = "rgb(255,255,255)";
			b.lineWidth = 5;
			this.roundRect(b, this.tutorialCancelButtonRect.x+15, this.tutorialCancelButtonRect.y, this.tutorialCancelButtonRect.w, this.tutorialCancelButtonRect.h, 10, !0, !0);
			b.lineWidth = 1;
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			c = _STRINGS.UI.NO.split("").join(String.fromCharCode(8202));
			b.fillText(c, +15, 10);
			b.restore()
		},
		updateTutorialCancelButton: function() {
			if (!this.control.gamePaused &&
				!this.transitionFadein && !this.transitionFadeout) {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				var c = {};
				c.x = this.tutorialCancelButtonPos.x + this.tutorialCancelButtonRect.x;
				c.y = this.tutorialCancelButtonPos.y + this.tutorialCancelButtonRect.y;
				c.w = this.tutorialCancelButtonRect.w;
				c.h = this.tutorialCancelButtonRect.h;
				this.aabbCheck(b, c) ? (this.tutorialCancelButtonDown = !1, this.tutorialCancelButtonScale = 0.95, ig.ua.mobile || (this.tutorialCancelButtonScale =
					1), ig.input.state("click") && (this.tutorialCancelButtonDown = !0, this.tutorialCancelButtonScale = 0.9), ig.input.released("click") && (this.tutorialCancelButtonDown = !1, this.tutorialCancelButtonScale = 0.95, ig.ua.mobile || (this.tutorialCancelButtonScale = 1), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.button), this.startFadeoutTransition(), this.transitionEndFunction = this.control.returnToMainMenu)) : (this.tutorialCancelButtonDown = !1, this.tutorialCancelButtonScale = 0.95)
			}
		},
		drawInputTutorial: function() {
			var b = ig.system.context,
				b = b.createLinearGradient(0, ig.system.height - 180, 0, ig.system.height - 160);
			b.addColorStop(0, "rgba(0,0,0,0)");
			b.addColorStop(1, "rgba(0,0,0,1)");
			ig.system.context.globalAlpha = 0.67;
			ig.system.context.fillStyle = b;
			ig.system.context.fillRect(0, ig.system.height - 180, ig.system.width, 180);
			ig.system.context.globalAlpha = 1;
			var b = ig.system.context,
				c = ig.system.width / 2,
				d = ig.system.height - 80;
			if (ig.ua.mobile) {
				var e = this.tapMessage,
					f = this.rightTapOffset.x + c + 8 + 10,
					g = this.rightTapOffset.y + d;
				b.fillStyle = "rgba(0,0,0,1)";
				b.strokeStyle =
					"rgba(0,0,0,1)";
				f += 2;
				g += 2;
				this.drawArrow(f, g, f + 80, g);
				b.fillStyle = "rgba(255,255,255,1)";
				b.strokeStyle = "rgba(255,255,255,1)";
				f -= 2;
				g -= 2;
				this.drawArrow(f, g, f + 80, g);
				b.save();
				b.globalAlpha = this.tutorialMessageAlpha;
				b.translate(f + 80 + 50, g);
				b.fillStyle = "#ffffff";
				b.font = "24px GreatLakesNF, Helvetica, Verdana";
				b.textAlign = "center";
				g = 0.9 * this.tutorialTextLineHeight - e.length / 2 * this.tutorialTextLineHeight;
				for (f = 0; f < e.length; f++) b.fillText(e[f], 0, g), g += this.tutorialTextLineHeight;
				b.restore();
				f = this.leftTapOffset.x +
					c - 10
			} else {
				e = this.tapMessage;
				f = this.rightTapOffset.x + c + 8 + 20;
				g = this.rightTapOffset.y + d;
				b.fillStyle = "rgba(0,0,0,1)";
				b.strokeStyle = "rgba(0,0,0,1)";
				f += 2;
				g += 2;
				this.drawArrow(f, g, f + 80, g);
				b.fillStyle = "rgba(255,255,255,1)";
				b.strokeStyle = "rgba(255,255,255,1)";
				f -= 2;
				g -= 2;
				this.drawArrow(f, g, f + 80, g);
				b.save();
				b.globalAlpha = this.tutorialMessageAlpha;
				b.translate(f + 80 + 50, g);
				b.fillStyle = "#ffffff";
				b.font = "24px GreatLakesNF, Helvetica, Verdana";
				b.textAlign = "center";
				g = 0.9 * this.tutorialTextLineHeight - e.length / 2 * this.tutorialTextLineHeight;
				for (f = 0; f < e.length; f++) b.fillText(e[f], 0, g), g += this.tutorialTextLineHeight;
				b.restore();
				f = this.leftTapOffset.x + c - 20
			}
			g = this.leftTapOffset.y + d;
			b.fillStyle = "rgba(0,0,0,1)";
			b.strokeStyle = "rgba(0,0,0,1)";
			f += 2;
			g += 2;
			this.drawArrow(f, g, f - 80, g);
			b.fillStyle = "rgba(255,255,255,1)";
			b.strokeStyle = "rgba(255,255,255,1)";
			f -= 2;
			g -= 2;
			this.drawArrow(f, g, f - 80, g);
			b.save();
			b.globalAlpha = this.tutorialMessageAlpha;
			b.translate(f - 80 - 50, g);
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			g = 0.9 * this.tutorialTextLineHeight - e.length / 2 * this.tutorialTextLineHeight;
			for (f = 0; f < e.length; f++) b.fillText(e[f], 0, g), g += this.tutorialTextLineHeight;
			b.restore();
			e = this.tutorialMessages[1];
			c = e.length * this.tutorialTextLineHeight;
			f = ig.system.width / 2;
			g = ig.system.height - 205 + 37.5 - c / 2;
			d = this.tutorialTextRect.w;
			b.save();
			b.globalAlpha = this.tutorialMessageAlpha;
			b.translate(f, g);
			b.fillStyle = "rgb(0,128,128)";
			b.strokeStyle = "rgb(255,255,255)";
			b.lineWidth = 5;
			this.roundRect(b, -(10 + d / 2), -(10 + c / 2), d + 20, c + 20, 10, !0, !0);
			b.fillStyle = "#ffffff";
			b.font = "24px GreatLakesNF, Helvetica, Verdana";
			b.textAlign = "center";
			g = 0.9 * this.tutorialTextLineHeight - e.length / 2 * this.tutorialTextLineHeight;
			for (f = 0; f < e.length; f++) b.fillText(e[f], 0, g), g += this.tutorialTextLineHeight;
			b.restore()
		},
		updateInputTutorial: function() {
			var b = ig.system.clock.delta() % 2;
			0.25 > b ? (this.leftTapOffset.y = 5 * b / 0.25, this.rightTapOffset.y = 0) : 0.5 > b ? (this.leftTapOffset.y = 5 * (1 - (b - 0.25) / 0.25), this.rightTapOffset.y = 0) : 1 > b ? (this.leftTapOffset.y = 0, this.rightTapOffset.y = 0) :
				1.25 > b ? (this.leftTapOffset.y = 0, this.rightTapOffset.y = 5 * (b - 1) / 0.25) : 1.5 > b ? (this.leftTapOffset.y = 0, this.rightTapOffset.y = 5 * (1 - (b - 1.25) / 0.25)) : 2 > b && (this.leftTapOffset.y = 0, this.rightTapOffset.y = 0)
		},
		wrapText: function(b, c) {
			var d = ig.system.context;
			d.font = "24px GreatLakesNF, Helvetica, Verdana";
			for (var e = b.split(" "), f = "", g = [], m = 0; m < e.length; m++) {
				var p = f + e[m] + " ";
				d.measureText(p).width > c && 0 < m ? (g.push(f), f = e[m] + " ") : f = p
			}
			g.push(f);
			return g
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-terrainblock").requires("impact.entity").defines(function() {
	EntityGameTerrainblock = ig.Entity.extend({
		terrainblockAnimSheets: [new ig.AnimationSheet("media/graphics/game/terrain/00.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/00.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/02.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/02.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/00.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/00.png",
			150, 150), new ig.AnimationSheet("media/graphics/game/terrain/02.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/00.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/00.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/09.png", 150, 150)],
		terrainblockAnims: [],
		terrainblockFeatures: [],
		obstacles: [],
		pickups: [],
		drawOffset: {
			x: -75,
			y: -70
		},
		drawAlpha: 1,
		zIndex: 5E3,
		blockId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		level: 0,
		spikeInterval: 1.25,
		spikeAnimDuration: 0,
		spikeTime: 0,
		spikeState: 0,
		isBumped: !1,
		bumpTime: 0,
		bumpVelocity: 100,
		bumpElasticity: 400,
		bumpDuration: 0.25,
		bumpOffset: {
			x: 0,
			y: 0
		},
		bumpStage: 0,
		expireFlag: !1,
		expireTime: 0,
		expireDelay: 0,
		landedRoamer: null,
		landedCharacter: null,
		isTntPrimed: !1,
		tntTime: 0,
		tntDuration: 2,
		tntState: 0,
		tntOffset: {
			x: 0,
			y: 0
		},
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		kill: function() {
			for (var b = 0; b < this.terrainblockFeatures.length; b++) this.terrainblockFeatures[b].kill();
			this.terrainblockFeatures = [];
			for (b = 0; b < this.obstacles.length; b++) this.obstacles[b].kill();
			this.obstacles = [];
			for (b = 0; b < this.pickups.length; b++) this.pickups[b].kill();
			this.pickups = [];
			this.parent()
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setBlockId: function(b, c) {
			if (null == b) return !1;
			b >= this.terrainblockAnimSheets.length && (b = 0);
			for (var d = 0; d < this.terrainblockFeatures.length; d++) this.terrainblockFeatures[d].kill();
			this.terrainblockFeatures = [];
			c && (this.flipX = c);
			this.blockId = b;
			this.terrainblockAnims = [];
			for (d = 0; d < this.terrainblockFeatures.length; d++) this.terrainblockFeatures[d].kill();
			this.terrainblockFeatures = [];
			var d = this.terrainblockAnimSheets[b],
				e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height),
				f = !0;
			6 == b && (f = !1);
			for (var g = [], m = 0; m < e; m++) g.push(m);
			d = new ig.Animation(d, 0.04, g, f);
			this.terrainblockAnims.push(d);
			d = ig.game.spawnEntity(EntityGameTerrainblockFeature, -1E3, -1E3);
			d.ready();
			d.setParent(this);
			d.setBlockId(b) && this.terrainblockFeatures.push(d);
			if (7 == b || 8 == b) this.spikeAnimDuration = d.anim.sequence.length * d.anim.frameTime;
			6 == b && d.poisonAnim && d.poisonAnim.gotoRandomFrame();
			0 < this.terrainblockAnims.length && (this.anim = this.terrainblockAnims[0]);
			this.anim && this.flipX && (this.anim.flip.x = !0);
			return !0
		},
		setWorldPos: function(b) {
			this.worldPos.x = b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			if (0 < this.terrainblockFeatures.length)
				for (var c = 0; c < this.terrainblockFeatures.length; c++)
					if (this.terrainblockFeatures[c].zIndex = 5001 - 10 * b.z - 2 * b.x + b.y, 7 == this.blockId && !this.isBumped && (this.terrainblockFeatures[c].zIndex += 360), 6 == this.blockId || 8 == this.blockId) this.terrainblockFeatures[c].zIndex =
						5042 - 10 * b.z - 2 * b.x + b.y, ig.game.sortEntitiesDeferred();
			for (c = 0; c < this.obstacles.length; c++) this.obstacles[c].setWorldPos(b);
			for (c = 0; c < this.pickups.length; c++) this.pickups[c].setWorldPos(b);
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			this.zIndex = 5E3 - 10 * b.z - 2 * b.x + b.y;
			ig.game.sortEntitiesDeferred()
		},
		setLevel: function(b) {
			this.level = b
		},
		setSpikeTime: function(b) {
			this.spikeTime = 0 == b ? 0 : -(this.spikeInterval + this.spikeAnimDuration / 2)
		},
		addObstacle: function(b) {
			this.obstacles.push(b)
		},
		addPickup: function(b) {
			this.pickups.push(b)
		},
		draw: function() {
			if (this.anim && 0 != this.drawAlpha) {
				var b = this.screenPos.x,
					b = b + this.drawOffset.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x,
					b = b + this.bumpOffset.x;
				this.isTntPrimed && (b += this.tntOffset.x);
				var b = this.bitwiseRound(b),
					c = this.screenPos.y,
					c = c + this.drawOffset.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y,
					c = c + this.bumpOffset.y;
				this.isTntPrimed && (c += this.tntOffset.y);
				c = this.bitwiseRound(c);
				1 > this.drawAlpha && (ig.system.context.globalAlpha = this.drawAlpha);
				this.anim.draw(b,
					c);
				1 > this.drawAlpha && (ig.system.context.globalAlpha = 1)
			}
		},
		update: function() {
			if (!this._killed && !this.control.gamePaused && (!this.control.gameOver && !this.control.tutorialPaused) && (this.updateExpire(), this.updateBump(), this.updateTnt(), !this._killed)) {
				9 == this.blockId && this.anim && 0 < this.anim.loopCount && (this.anim = null);
				if (6 == this.blockId) {
					var b = this.terrainblockFeatures[0];
					b.poisonAnim && b.poisonAnim.update()
				}
				if (7 == this.blockId || 8 == this.blockId) {
					var b = this.terrainblockFeatures[0],
						c = this.control.time - this.spikeTime,
						d = 2 * this.spikeInterval + this.spikeAnimDuration;
					c >= d && (c %= d, this.spikeTime = this.control.time - c);
					c < this.spikeInterval ? (this.spikeState = 0, b.anim = b.featureAnim, b.anim.rewind(), b.anim.gotoFrame(0), 7 == this.blockId && (b.anim2 = b.reverseAnim, b.anim2.rewind(), b.anim2.gotoFrame(0))) : c < this.spikeInterval + this.spikeAnimDuration / 2 ? (this.spikeState = 1, b.anim = b.featureAnim, 7 == this.blockId && (b.anim2 = b.reverseAnim)) : c < 2 * this.spikeInterval + this.spikeAnimDuration / 2 ? (this.spikeState = 2, b.anim = b.featureAnim, b.anim.rewind(),
						b.anim.gotoFrame(b.anim.sequence.length / 2), 7 == this.blockId && (b.anim2 = b.reverseAnim, b.anim2.rewind(), b.anim2.gotoFrame(b.anim2.sequence.length / 2))) : (this.spikeState = 3, b.anim = b.featureAnim, 7 == this.blockId && (b.anim2 = b.reverseAnim))
				}
				if (1 == this.spikeState || 3 == this.spikeState) {
					if (b = this.terrainblockFeatures[0]) b.anim.update(), 7 == this.blockId && b.anim2.update()
				} else 2 == this.spikeState && 8 == this.blockId && this.checkSpikes();
				this.landedCharacter && this.checkSpikes()
			}
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		respondToCharacterLanding: function(b) {
			this.landedCharacter = b;
			if (!this.checkSpikes()) {
				if (0 == this.blockId || 1 == this.blockId || 6 == this.blockId || 7 == this.blockId || 8 == this.blockId) b = this.control.spawnEffect(5, this.worldPos), b.setTerrainblock(this), b.zIndex = this.landedCharacter.zIndex + 1;
				else if (2 == this.blockId || 3 == this.blockId) b = this.control.spawnEffect(6, this.worldPos), b.setTerrainblock(this), b.zIndex = this.landedCharacter.zIndex + 1;
				else if (4 == this.blockId || 5 == this.blockId) b = this.control.spawnEffect(7, this.worldPos),
					b.setTerrainblock(this), b.zIndex = this.landedCharacter.zIndex + 1;
				if (4 == this.blockId || 5 == this.blockId) b = this.control.spawnEffect(0, this.worldPos), b.setTerrainblock(this), b.zIndex = this.zIndex + 1, ig.game.sortEntities(), 4 == this.blockId ? this.control.characterSlideLeft() : this.control.characterSlideRight();
				6 == this.blockId && (this.landedCharacter.isShielded || this.landedCharacter.startPoison());
				9 == this.blockId && this.startTnt();
				this.startBump()
			}
		},
		startBump: function(b) {
			this.expireFlag || (b || (b = 100), this.bumpVelocity =
				b, this.bumpElasticity = 4 * b / this.bumpDuration, this.bumpTime = this.control.time, this.bumpOffset.x = 0, this.bumpStage = this.bumpOffset.y = 0, this.isBumped = !0, 3 == this.blockId && (this.bumpVelocity = 60, this.bumpTime -= 4, this.bumpStage = 3))
		},
		updateBump: function() {
			if (this.isBumped) {
				var b = this.control.time - this.bumpTime;
				if (0 == this.bumpStage) b /= this.bumpDuration, 0.5 > b ? (this.bumpOffset.y += this.bumpVelocity * ig.system.tick, this.bumpVelocity -= this.bumpElasticity * ig.system.tick) : (this.bumpOffset.x = 0, this.bumpOffset.y = 0, 2 ==
					this.blockId && this.landedCharacter ? (this.bumpVelocity = 0, this.bumpTime -= 3, this.bumpStage = 2) : this.isBumped = !1);
				else if (1 == this.bumpStage) {
					if (3 <= b && (this.bumpStage = 2, this.bumpElasticity = this.bumpVelocity = 0, 7 == this.blockId))
						for (b = 0; b < this.terrainblockFeatures.length; b++) this.terrainblockFeatures[b].zIndex = 5042 - 10 * this.worldPos.z - 2 * this.worldPos.x + this.worldPos.y, ig.game.sortEntitiesDeferred()
				} else 2 == this.bumpStage ? (3 <= b && (b -= 3), 1 > b ? (this.bumpOffset.y += this.bumpVelocity * ig.system.tick, this.bumpVelocity +=
					40 * ig.system.tick) : this.bumpStage = 3) : 3 == this.bumpStage && (4 <= b && (b -= 4), 1 > b ? (this.bumpOffset.y += this.bumpVelocity * ig.system.tick, this.bumpVelocity += 400 * ig.system.tick, 0.25 <= b && (this.drawAlpha = 1 - (b - 0.25) / 0.75), 0.5 <= b && this.fallOff()) : (this.drawAlpha = 0, this.kill()))
			}
		},
		fallOff: function() {
			this.landedCharacter && !this.landedCharacter._killed && this.landedCharacter.terrainblock == this && this.landedCharacter.genericKill();
			this.landedRoamer && !this.landedRoamer._killed && this.landedRoamer.terrainblock == this && this.landedRoamer.genericKill()
		},
		expire: function() {
			this.expireFlag || (this.expireDelay = 0.5 * Math.random(), this.expireFlag = !0, this.expireTime = this.control.time)
		},
		updateExpire: function() {
			if (this.expireFlag && this.control.time - this.expireTime > this.expireDelay)
				if (this.isBumped) {
					if (2 > this.bumpStage && (this.bumpTime -= 3, this.bumpStage = 2, this.bumpVelocity = 20, 7 == this.blockId))
						for (var b = 0; b < this.terrainblockFeatures.length; b++) this.terrainblockFeatures[b].zIndex = 5042 - 10 * this.worldPos.z - 2 * this.worldPos.x + this.worldPos.y, ig.game.sortEntitiesDeferred()
				} else if (this.isBumped = !0, this.bumpTime = this.control.time, this.bumpVelocity = 30, this.landedCharacter && (this.bumpVelocity = 0), this.bumpOffset.x = 0, this.bumpOffset.y = 0, this.bumpTime -= 3, this.bumpStage = 2, 7 == this.blockId)
				for (b = 0; b < this.terrainblockFeatures.length; b++) this.terrainblockFeatures[b].zIndex = 5042 - 10 * this.worldPos.z - 2 * this.worldPos.x + this.worldPos.y, ig.game.sortEntitiesDeferred()
		},
		getSideSpikeBlockList: function() {
			var b = 0,
				c = 0,
				b = this.worldPos.x - this.control.gridSize,
				c = this.worldPos.y,
				d = 0,
				e = 0,
				d = this.worldPos.x,
				e = this.worldPos.y +
				this.control.gridSize,
				f = this.level - 1;
			if (0 > f) return null;
			for (var g = [], m = 0; m < this.control.terrainblockList[f].length; m++) {
				var p = this.control.terrainblockList[f][m];
				7 == p.blockId && (p.worldPos.x == d && p.worldPos.y == e ? (1 == p.spikeState || 2 == p.spikeState || 3 == p.spikeState) && g.push(p) : p.worldPos.x == b && p.worldPos.y == c && (0 == p.spikeState || 1 == p.spikeState || 3 == p.spikeState) && g.push(p))
			}
			return 0 < g.length ? g : null
		},
		checkSpikes: function() {
			if (!this.landedCharacter || this.landedCharacter && this.landedCharacter._killed || this.landedCharacter &&
				this.landedCharacter.isShielded || this.landedCharacter && this.landedCharacter.isMoving && 2 >= this.landedCharacter.moveStage || this.landedCharacter && this.landedCharacter.isSliding && 2 >= this.landedCharacter.slideStage) return !1;
			if (8 == this.blockId && (1 == this.spikeState || 2 == this.spikeState || 3 == this.spikeState)) return this.landedCharacter.genericKill(), !0;
			var b = this.getSideSpikeBlockList();
			return b && 0 < b.length ? (this.landedCharacter.genericKill(), !0) : !1
		},
		startTnt: function() {
			this.isTntPrimed = !0;
			this.tntTime = this.control.time;
			this.tntState = 0
		},
		detonateTnt: function(b) {
			!this._killed && !(1 <= this.tntState) && (this.isTntPrimed = !0, this.tntTime = this.control.time - this.tntDuration, b && (this.tntTime += b), this.tntOffset.x = 0, this.tntOffset.y = 0, b || (this.anim.rewind(), this.anim.gotoFrame(8), this.tntState = 1, this.spreadTnt()))
		},
		updateTnt: function() {
			if (this.isTntPrimed) {
				var b = this.control.time - this.tntTime;
				if (0 == this.tntState) {
					if (0.15 > b) {
						var c;
						this.tntOffset.x = 0.075 > b % 0.15 ? -2 : 2
					} else {
						var d = b / this.tntDuration;
						c = 0.2 - 0.1 * d;
						c = b % c / c;
						this.tntOffset.x =
							0.25 > c ? -(1 + 2 * d) : 0.5 > c ? -(1 + 2 * d) : 1 + 2 * d
					}
					b >= this.tntDuration && this.detonateTnt()
				} else b -= this.tntDuration, d = 0, this.anim && (d = 10 * this.anim.frameTime, this.anim.update()), 1 == this.tntState && b >= d / 10 && ((c = this.control.character) && c.terrainblock && c.terrainblock.level >= this.level - 1 && c.terrainblock.level <= this.level + 1 && (c.isShielded || c.genericKill()), this.tntState = 2, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.boom)), b >= d && this.kill()
			}
		},
		spreadTnt: function() {
			var b = 0,
				c = 0,
				b = this.worldPos.x - this.control.gridSize,
				c = this.worldPos.y,
				d = 0,
				e = 0,
				d = this.worldPos.x,
				e = this.worldPos.y + this.control.gridSize,
				f = 0,
				g = 0,
				f = this.worldPos.x,
				g = this.worldPos.y - this.control.gridSize,
				m = 0,
				p = 0,
				m = this.worldPos.x + this.control.gridSize,
				p = this.worldPos.y,
				r = this.level - 1;
			if (0 <= r)
				for (var u = 0; u < this.control.terrainblockList[r].length; u++) {
					var s = this.control.terrainblockList[r][u];
					9 == s.blockId && (s.worldPos.x == d && s.worldPos.y == e ? s.detonateTnt(0.1) : s.worldPos.x == b && s.worldPos.y == c && s.detonateTnt(0.1))
				}
			r = this.level + 1;
			if (0 <= r)
				for (u = 0; u < this.control.terrainblockList[r].length; u++) s =
					this.control.terrainblockList[r][u], 9 == s.blockId && (s.worldPos.x == m && s.worldPos.y == p ? s.detonateTnt(0.1) : s.worldPos.x == f && s.worldPos.y == g && s.detonateTnt(0.1))
		},
		respondToRoamerLanding: function(b) {
			this.landedRoamer = b;
			if (0 == this.blockId || 1 == this.blockId || 6 == this.blockId || 7 == this.blockId || 8 == this.blockId) b = this.control.spawnEffect(5, this.worldPos), b.setTerrainblock(this), b.zIndex = this.landedRoamer.zIndex + 1;
			else if (2 == this.blockId || 3 == this.blockId) b = this.control.spawnEffect(6, this.worldPos), b.setTerrainblock(this),
				b.zIndex = this.landedRoamer.zIndex + 1;
			else if (4 == this.blockId || 5 == this.blockId) b = this.control.spawnEffect(7, this.worldPos), b.setTerrainblock(this), b.zIndex = this.landedRoamer.zIndex + 1;
			this.startBump()
		}
	});
	EntityGameTerrainblockFeature = ig.Entity.extend({
		animSheets: [null, new ig.AnimationSheet("media/graphics/game/terrain/01.png", 150, 150), null, new ig.AnimationSheet("media/graphics/game/terrain/03.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/04.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/05.png",
			150, 150), new ig.AnimationSheet("media/graphics/game/terrain/06.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/07.png", 150, 150), new ig.AnimationSheet("media/graphics/game/terrain/08.png", 150, 150), null],
		poisonAnimsheet: new ig.AnimationSheet("media/graphics/game/effects/poison.png", 150, 150),
		poisonAnim: null,
		anim: null,
		featureAnim: null,
		reverseAnim: null,
		drawOffset: {
			x: -75,
			y: -70
		},
		zIndex: 5001,
		blockId: 0,
		flipX: !1,
		control: null,
		blockParent: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control =
				ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setParent: function(b) {
			this.blockParent = b;
			this.zIndex = 5001 - 10 * b.worldPos.z - 2 * b.worldPos.x + b.worldPos.y;
			7 == this.blockParent.blockId && !this.blockParent.isBumped && (this.zIndex += 360);
			if (6 == this.blockParent.blockId || 8 == this.blockParent.blockId) this.zIndex += 41, ig.game.sortEntitiesDeferred()
		},
		setBlockId: function(b, c) {
			if (null == b || b >= this.animSheets.length) return !1;
			c && (this.flipX = c);
			this.blockId = b;
			var d = this.animSheets[b];
			if (!d) return !1;
			var e = Math.floor(d.image.width /
					d.width) * Math.floor(d.image.height / d.height),
				f = !0;
			6 == b && (f = !1);
			for (var g = [], m = 0; m < e; m++) g.push(m);
			for (m = e - 1; 0 <= m; m--) g.push(m);
			this.featureAnim = new ig.Animation(d, 0.04, g, f);
			if (7 == b) {
				g = [];
				for (m = e - 1; 0 <= m; m--) g.push(m);
				for (m = 0; m < e; m++) g.push(m);
				this.reverseAnim = new ig.Animation(d, 0.04, g, f)
			}
			this.anim = this.featureAnim;
			this.flipX && (this.anim.flip.x = !0);
			if (6 == b) {
				d = this.poisonAnimsheet;
				e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height);
				g = [];
				for (m = 0; m < e; m++) g.push(m);
				this.poisonAnim = new ig.Animation(d,
					0.04, g, !1)
			}
			if (6 == b || 8 == b) this.zIndex = 5042 - 10 * this.blockParent.worldPos.z - 2 * this.blockParent.worldPos.x + this.blockParent.worldPos.y, ig.game.sortEntitiesDeferred();
			return !0
		},
		draw: function() {
			if (this.anim) {
				var b = this.blockParent.screenPos.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x,
					b = b + this.blockParent.bumpOffset.x,
					b = this.bitwiseRound(b),
					c = this.blockParent.screenPos.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y,
					c = c + this.blockParent.bumpOffset.y,
					c = this.bitwiseRound(c);
				ig.system.context.globalAlpha = this.blockParent.drawAlpha;
				this.anim.draw(b + this.drawOffset.x, c + this.drawOffset.y);
				6 == this.blockId && this.poisonAnim && this.poisonAnim.draw(b + this.drawOffset.x, c + this.drawOffset.y);
				7 == this.blockId && this.anim2 && (ig.system.context.save(), ig.system.context.translate(b, c), ig.system.context.scale(-1, 1), this.anim2.draw(this.drawOffset.x, this.drawOffset.y), ig.system.context.restore());
				ig.system.context.globalAlpha = 1
			}
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		}
	})
});
ig.baked = !0;
ig.module("plugins.imageblender").requires("impact.image").defines(function() {
	ig.Image.inject({
		onload: function(b) {
			this.parent(b);
			var c = this.path.indexOf("#");
			if (-1 !== c) {
				this.convertToCanvas();
				b = this.data.getContext("2d");
				for (var d = b.getImageData(0, 0, this.data.width, this.data.height), e = d.data, f = e.length, g, m, p, r, u = parseInt(this.path.substr(c + 1, 2), 16) / 255, s = parseInt(this.path.substr(c + 3, 2), 16) / 255, n = parseInt(this.path.substr(c + 5, 2), 16) / 255, q = 0; q < f; q += 4) c = e[q + 3] / 255, r = c + 1 - 1 * c, g = e[q] / 255 * c, m = e[q + 1] / 255 *
					c, p = e[q + 2] / 255 * c, r = 255 / r, e[q] = (g * u + u * (1 - c)) * r, e[q + 1] = (m * s + s * (1 - c)) * r, e[q + 2] = (p * n + n * (1 - c)) * r;
				b.putImageData(d, 0, 0)
			}
		},
		convertToCanvas: function() {
			if (!this.data.getContext) {
				var b = ig.$new("canvas");
				b.width = this.width;
				b.height = this.height;
				b.getContext("2d").drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
				this.data = b
			}
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-character").requires("impact.entity", "plugins.imageblender").defines(function() {
	EntityGameCharacter = ig.Entity.extend({
		animSheets: [new ig.AnimationSheet("media/graphics/game/character/00.png", 100, 120), new ig.AnimationSheet("media/graphics/game/character/01.png", 100, 120), new ig.AnimationSheet("media/graphics/game/character/02.png", 100, 120), new ig.AnimationSheet("media/graphics/game/character/03.png", 100, 120), new ig.AnimationSheet("media/graphics/game/character/04.png",
			100, 120)],
		anim: null,
		tintedAnimSheets: [new ig.AnimationSheet("media/graphics/game/character/00.png#66FF66", 100, 120), new ig.AnimationSheet("media/graphics/game/character/01.png#66FF66", 100, 120), new ig.AnimationSheet("media/graphics/game/character/02.png#66FF66", 100, 120), new ig.AnimationSheet("media/graphics/game/character/03.png#66FF66", 100, 120), new ig.AnimationSheet("media/graphics/game/character/04.png#66FF66", 100, 120)],
		tintedAnim: null,
		shieldedAnimSheet: new ig.AnimationSheet("media/graphics/game/character/shield_on.png",
			100, 120),
		shieldedAnim: null,
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5005,
		charId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		isMoving: !1,
		moveStartTime: 0,
		moveDuration: 0,
		moveFrom: null,
		moveTarget: null,
		moveVector: null,
		dropVector: null,
		canMove: !0,
		isHopping: !1,
		hopStartTime: 0,
		hopDuration: 0,
		isSliding: !1,
		slideStartTime: 0,
		slideDuration: 0,
		slideStage: 0,
		isShielded: !1,
		shieldTime: 0,
		shieldDuration: 6,
		shieldWarningDuration: 3,
		shieldStage: 0,
		drawShield: !0,
		lastTerrainblock: null,
		terrainblock: null,
		doneBump: !1,
		poisonAnimsheet: new ig.AnimationSheet("media/graphics/game/effects/poison.png",
			150, 150),
		poisonAnim: null,
		poisonDrawOffset: {
			x: -75,
			y: -100
		},
		isPoisoned: !1,
		poisonedTime: 0,
		poisonedDuration: 5,
		poisonedOffset: {
			x: 0,
			y: 0
		},
		delayedPoisonDeathFlag: !1,
		shadowRadius: 28,
		shadowHeight: 0,
		shadowOffset: {
			x: 0,
			y: 0
		},
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
			for (var b = this.poisonAnimsheet, c = Math.floor(b.image.width / b.width) * Math.floor(b.image.height / b.height), d = [], e = 0; e < c; e++) d.push(e);
			this.poisonAnim = new ig.Animation(b,
				0.04, d, !1)
		},
		setCharId: function(b, c) {
			if (null == b || b >= this.animSheets.length) return !1;
			c && (this.flipX = c);
			this.charId = b;
			this.anims = [];
			for (var d = this.animSheets[b], e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height), f = [], g = 0; g < e; g++) f.push(g);
			d = new ig.Animation(d, 0.04, f, !0);
			this.tintedAnim = new ig.Animation(this.tintedAnimSheets[b], 0.04, f, !0);
			this.shieldedAnim = new ig.Animation(this.shieldedAnimSheet, 0.04, f, !0);
			this.moveDuration = f.length * d.frameTime;
			this.hopDuration = this.moveDuration /
				2;
			this.slideDuration = this.moveDuration;
			if (this.anim = d) this.flipX ? (this.anim.flip.x = !0, this.tintedAnim.flip.x = !0, this.shieldedAnim.flip.x = !0) : (this.anim.flip.x = !1, this.tintedAnim.flip.x = !1, this.shieldedAnim.flip.x = !1);
			return !0
		},
		setFlip: function(b) {
			this.flipX = b;
			this.anim && (this.flipX ? (this.anim.flip.x = !0, this.tintedAnim.flip.x = !0, this.shieldedAnim.flip.x = !0) : (this.anim.flip.x = !1, this.tintedAnim.flip.x = !1, this.shieldedAnim.flip.x = !1))
		},
		setWorldPos: function(b, c) {
			"undefined" == typeof c && (c = !0);
			this.worldPos.x =
				b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			c && (this.zIndex = 5005 - 10 * b.z - 2 * b.x + b.y + 200, ig.game.sortEntitiesDeferred())
		},
		setTerrainblock: function(b) {
			if (b != this.terrainblock && (this.lastTerrainblock = this.terrainblock, this.terrainblock = b)) this.terrainblock.landedCharacter = this
		},
		draw: function() {
			if (this.anim) {
				this.anim.flip.x = this.flipX ? !0 : !1;
				var b = this.screenPos.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x;
				this.terrainblock &&
					this.terrainblock.isBumped && (b += this.terrainblock.bumpOffset.x);
				this.isPoisoned && (b += this.poisonedOffset.x);
				var b = this.bitwiseRound(b),
					c = this.screenPos.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y;
				this.terrainblock && this.terrainblock.isBumped && (c += this.terrainblock.bumpOffset.y);
				this.isPoisoned && (c += this.poisonedOffset.y);
				c = this.bitwiseRound(c);
				this.drawShadow(b, c);
				this.isPoisoned ? (this.tintedAnim.draw(b + this.drawOffset.x, c + this.drawOffset.y), b += this.poisonDrawOffset.x, c += this.poisonDrawOffset.y,
					c -= this.shadowHeight * this.control.levelHeight / 2, this.poisonAnim.draw(b, c)) : this.anim.draw(b + this.drawOffset.x, c + this.drawOffset.y);
				this.isShielded && this.drawShield && this.shieldedAnim.draw(b + this.drawOffset.x, c + this.drawOffset.y)
			}
		},
		drawShadow: function(b, c) {
			var d = 0.75 * (1 - this.shadowHeight),
				e = b + this.shadowOffset.x,
				f = c + this.shadowOffset.y;
			if (this.isMoving && 2 > this.moveStage || this.isSliding && 2 > this.slideStage)
				if (this.lastTerrainblock && (this.lastTerrainblock.expireFlag || this.lastTerrainblock.isBumped)) return;
			if (this.isMoving && 2 <= this.moveStage || this.isSliding && 2 <= this.slideStage)
				if (this.terrainblock) {
					if (this.terrainblock._killed) return;
					1 > this.terrainblock.drawAlpha && (d *= this.terrainblock.drawAlpha)
				} else return;
			var g = ig.system.context,
				m = this.shadowRadius,
				m = m - 0.5 * m * this.shadowHeight;
			g.save();
			g.fillStyle = "rgba(0,0,0," + d + ")";
			g.translate(e, f);
			g.beginPath();
			g.moveTo(m, 0);
			g.lineTo(0, m / 2);
			g.lineTo(-m, 0);
			g.lineTo(0, -m / 2);
			g.closePath();
			g.fill();
			g.restore()
		},
		update: function() {
			if (!this.control.gamePaused && !this.control.gameOver &&
				!this.control.tutorialPaused) {
				this.isMoving ? this.updateMoving() : this.isHopping ? this.updateHopping() : this.isSliding && this.updateSliding();
				this.isPoisoned && this.updatePoison();
				if (this.delayedPoisonDeathFlag && (!this.isMoving || this.isMoving && 0 >= this.moveStage || this.isMoving && 3 <= this.moveStage)) this.delayedPoisonDeathFlag = !1, this._killed || this.genericKill();
				this.isShielded && this.updateShield()
			}
		},
		updateMoving: function() {
			var b = this.control.time - this.moveStartTime,
				b = b / this.moveDuration;
			if (0.25 > b) {
				if (this.worldPos.x !=
					this.moveFrom.x || this.worldPos.y != this.moveFrom.y || this.worldPos.z != this.moveFrom.z) {
					var c = {
						x: 0,
						y: 0,
						z: 0
					};
					c.x = this.moveFrom.x;
					c.y = this.moveFrom.y;
					c.z = this.moveFrom.z;
					this.setWorldPos(c, !1)
				}
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.moveStage = this.shadowOffset.y = 0
			} else if (0.5 > b) {
				b = (b - 0.25) / 0.25;
				if (null == this.moveVector) {
					this.moveVector = {
						x: 0,
						y: 0,
						z: 0
					};
					var c = this.moveTarget.x - this.moveFrom.x,
						d = this.moveTarget.y - this.moveFrom.y;
					this.moveVector.x = c / 2;
					this.moveVector.y = d / 2;
					ig.soundHandler.playSound(ig.soundHandler.SOUNDID.jump)
				}
				c = {
					x: 0,
					y: 0,
					z: 0
				};
				c.x = this.moveFrom.x + b * this.moveVector.x;
				c.y = this.moveFrom.y + b * this.moveVector.y;
				c.z = this.moveFrom.z;
				this.setWorldPos(c, !1);
				this.shadowHeight = b;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.moveStage = 1
			} else if (0.75 > b) {
				b = (b - 0.5) / 0.25;
				if (null == this.dropVector) {
					this.dropVector = {
						x: 0,
						y: 0,
						z: 0
					};
					var c = this.moveTarget.x - this.moveFrom.x,
						d = this.moveTarget.y - this.moveFrom.y,
						e = this.moveTarget.z - this.moveFrom.z;
					this.dropVector.x = c / 2;
					this.dropVector.y = d / 2;
					this.dropVector.z = e;
					c = {
						x: 0,
						y: 0,
						z: 0
					};
					c.x =
						this.moveTarget.x;
					c.y = this.moveTarget.y;
					c.z = this.moveTarget.z;
					this.setWorldPos(c, !0);
					this.checkRoamers()
				}
				c = {
					x: 0,
					y: 0,
					z: 0
				};
				c.x = this.moveFrom.x + this.moveVector.x + b * this.dropVector.x;
				c.y = this.moveFrom.y + this.moveVector.y + b * this.dropVector.y;
				c.z = this.moveFrom.z + b * this.dropVector.z;
				this.setWorldPos(c, !1);
				this.shadowHeight = 1 - b;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = (1 - b) * this.control.levelHeight;
				this.moveStage = 2
			} else if (1 > b) {
				if (this.worldPos.x != this.moveTarget.x || this.worldPos.y != this.moveTarget.y || this.worldPos.z !=
					this.moveTarget.z) c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z, this.setWorldPos(c, !1);
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.canMove = !0;
				this.moveStage = 3;
				this.doneBump || (this.doneBump = !0, this.terrainblock ? (this.checkPickups(), this.checkRoamers(), this.terrainblock.respondToCharacterLanding(this), this.control.characterLanded()) : (this.moveStage = 5, this.canMove = !1, this.anim.rewind(), this.anim.gotoFrame(0), this.tintedAnim.rewind(), this.tintedAnim.gotoFrame(0),
					this.shieldedAnim.rewind(), this.shieldedAnim.gotoFrame(0), this.genericKill()))
			} else c = {
				x: 0,
				y: 0,
				z: 0
			}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z, this.setWorldPos(c, !1), this.isMoving = !1, this.moveTarget = this.moveFrom = this.dropVector = this.moveVector = null, this.canMove = !0, this.anim.rewind(), this.anim.gotoFrame(0), this.tintedAnim.rewind(), this.tintedAnim.gotoFrame(0), this.shieldedAnim.rewind(), this.shieldedAnim.gotoFrame(0), this.moveStage = 4;
			this.anim.update();
			this.tintedAnim.update();
			this.shieldedAnim.update()
		},
		updateHopping: function() {
			var b = this.control.time - this.hopStartTime,
				c = Math.floor(b / 0.02);
			this.anim.rewind();
			this.anim.gotoFrame(c);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(c);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(c);
			b /= this.hopDuration;
			0.25 > b ? this.shadowHeight = this.shadowHeight = 0 : 0.5 > b ? this.shadowHeight = (b - 0.25) / 0.25 : 0.75 > b ? (b = (b - 0.5) / 0.25, this.shadowHeight = 1 - b) : 1 > b ? (this.shadowHeight = 0, this.doneBump || (this.doneBump = !0, this.terrainblock && (this.terrainblock.respondToCharacterLanding(this),
				this.control.characterLanded()))) : (this.isHopping = !1, this.anim.rewind(), this.anim.gotoFrame(0), this.tintedAnim.rewind(), this.tintedAnim.gotoFrame(0), this.shieldedAnim.rewind(), this.shieldedAnim.gotoFrame(0));
			this.anim.update();
			this.tintedAnim.update();
			this.shieldedAnim.update()
		},
		updateSliding: function() {
			if (5 == this.slideStage) {
				var b = this.control.time - this.slideStartTime,
					b = b - this.slideDuration,
					b = b / 0.25,
					c = {
						x: 0,
						y: 0,
						z: 0
					};
				c.x = this.moveTarget.x;
				c.y = this.moveTarget.y;
				c.z = this.moveTarget.z - 1.5 * b * this.control.levelHeight;
				this.setWorldPos(c, !1);
				1 <= b && this.genericKill()
			} else if (b = this.control.time - this.slideStartTime, b /= this.slideDuration, 0.25 > b) {
				if (this.worldPos.x != this.moveFrom.x || this.worldPos.y != this.moveFrom.y || this.worldPos.z != this.moveFrom.z) c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveFrom.x, c.y = this.moveFrom.y, c.z = this.moveFrom.z, this.setWorldPos(c, !1);
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.canMove = !0;
				this.slideStage = 0;
				this.anim.update();
				this.tintedAnim.update();
				this.shieldedAnim.update()
			} else if (0.5 >
				b) {
				b = (b - 0.25) / 0.25;
				if (null == this.moveVector) {
					this.moveVector = {
						x: 0,
						y: 0,
						z: 0
					};
					var c = this.moveTarget.x - this.moveFrom.x,
						d = this.moveTarget.y - this.moveFrom.y;
					this.moveVector.x = c / 2;
					this.moveVector.y = d / 2
				}
				c = {
					x: 0,
					y: 0,
					z: 0
				};
				c.x = this.moveFrom.x + b * this.moveVector.x;
				c.y = this.moveFrom.y + b * this.moveVector.y;
				c.z = this.moveFrom.z;
				this.setWorldPos(c, !1);
				this.shadowHeight = b;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.canMove = !0;
				this.slideStage = 1
			} else if (0.75 > b) {
				b = (b - 0.5) / 0.25;
				if (null == this.dropVector) {
					this.dropVector = {
						x: 0,
						y: 0,
						z: 0
					};
					var c = this.moveTarget.x - this.moveFrom.x,
						d = this.moveTarget.y - this.moveFrom.y,
						e = this.moveTarget.z - this.moveFrom.z;
					this.dropVector.x = c / 2;
					this.dropVector.y = d / 2;
					this.dropVector.z = e;
					c = {
						x: 0,
						y: 0,
						z: 0
					};
					c.x = this.moveTarget.x;
					c.y = this.moveTarget.y;
					c.z = this.moveTarget.z;
					this.setWorldPos(c, !0);
					this.checkRoamers()
				}
				c = {
					x: 0,
					y: 0,
					z: 0
				};
				c.x = this.moveFrom.x + this.moveVector.x + b * this.dropVector.x;
				c.y = this.moveFrom.y + this.moveVector.y + b * this.dropVector.y;
				c.z = this.moveFrom.z + b * this.dropVector.z;
				this.setWorldPos(c, !1);
				this.shadowHeight = 1 - b;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = (1 - b) * this.control.levelHeight;
				this.canMove = !1;
				this.slideStage = 2
			} else if (1 > b) {
				if (this.worldPos.x != this.moveTarget.x || this.worldPos.y != this.moveTarget.y || this.worldPos.z != this.moveTarget.z) c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z, this.setWorldPos(c, !1);
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.canMove = !0;
				this.terrainblock && (this.anim.update(), this.tintedAnim.update(),
					this.shieldedAnim.update());
				this.slideStage = 3;
				this.doneBump || (this.doneBump = !0, this.terrainblock ? (this.checkPickups(), this.checkRoamers(), this.terrainblock.respondToCharacterLanding(this), this.control.characterLanded()) : (this.slideStage = 5, this.canMove = !0, this.anim.rewind(), this.anim.gotoFrame(0), this.tintedAnim.rewind(), this.tintedAnim.gotoFrame(0), this.shieldedAnim.rewind(), this.shieldedAnim.gotoFrame(0), this.genericKill()))
			} else c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z,
				this.setWorldPos(c, !1), this.isSliding = !1, this.moveTarget = this.moveFrom = this.dropVector = this.moveVector = null, this.canMove = !0, this.anim.rewind(), this.anim.gotoFrame(0), this.tintedAnim.rewind(), this.tintedAnim.gotoFrame(0), this.shieldedAnim.rewind(), this.shieldedAnim.gotoFrame(0), this.slideStage = 4
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		dropLeft: function(b) {
			if (!this.canMove || this.terrainblock && 3 == this.terrainblock.blockId) return !1;
			if (this.terrainblock && 1 == this.terrainblock.blockId && (!this.isHopping ||
					0 != this.flipX)) return this.hopLeft(), !0;
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.dropVector = this.moveVector = null;
			this.isSliding && 2 >= this.slideStage && (this.setWorldPos(this.moveFrom), this.terrainblock = this.lastTerrainblock);
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.y -= this.control.gridSize;
			this.moveTarget.z -=
				this.control.levelHeight;
			this.shadowHeight = 0;
			this.shadowOffset.x = 0;
			this.moveStage = this.shadowOffset.y = 0;
			this.setFlip(0);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.setTerrainblock(b);
			this.isSliding = this.isHopping = this.canMove = this.doneBump = !1;
			this.moveStartTime = this.control.time - 0.25 * this.moveDuration;
			this.anim.rewind();
			this.anim.gotoFrame(4);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(4);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(4);
			this.control.characterMovedDown();
			return !0
		},
		dropRight: function(b) {
			if (!this.canMove || this.terrainblock && 3 == this.terrainblock.blockId) return !1;
			if (this.terrainblock && 1 == this.terrainblock.blockId && (!this.isHopping || 1 != this.flipX)) return this.hopRight(), !0;
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.dropVector = this.moveVector = null;
			this.isSliding && 2 >= this.slideStage && (this.setWorldPos(this.moveFrom),
				this.terrainblock = this.lastTerrainblock);
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.x += this.control.gridSize;
			this.moveTarget.z -= this.control.levelHeight;
			this.shadowHeight = 0;
			this.shadowOffset.x = 0;
			this.moveStage = this.shadowOffset.y = 0;
			this.setFlip(1);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.setTerrainblock(b);
			this.isSliding = this.isHopping = this.canMove = this.doneBump = !1;
			this.moveStartTime = this.control.time - 0.25 * this.moveDuration;
			this.anim.rewind();
			this.anim.gotoFrame(4);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(4);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(4);
			this.control.characterMovedDown();
			return !0
		},
		hopLeft: function() {
			if (!this.canMove) return !1;
			this.setFlip(0);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.doneBump = !1;
			this.isHopping = !0;
			this.hopStartTime = this.control.time;
			this.hopStartTime = this.control.time - 0.25 * this.moveDuration / 2;
			this.anim.rewind();
			this.anim.gotoFrame(4);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(4);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(4)
		},
		hopRight: function() {
			if (!this.canMove) return !1;
			this.setFlip(1);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.doneBump = !1;
			this.isHopping = !0;
			this.hopStartTime = this.control.time;
			this.hopStartTime = this.control.time - 0.25 * this.moveDuration / 2;
			this.anim.rewind();
			this.anim.gotoFrame(4);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(4);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(4)
		},
		slideLeft: function(b) {
			if (!this.canMove) return !1;
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.dropVector = this.moveVector = null;
			this.slideStartTime = this.control.time;
			this.isSliding = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.y -= this.control.gridSize;
			this.moveTarget.z -= this.control.levelHeight;
			this.setFlip(0);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.setTerrainblock(b);
			this.isMoving = this.isHopping = this.canMove = this.doneBump = !1;
			return !0
		},
		slideRight: function(b) {
			if (!this.canMove) return !1;
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.dropVector = this.moveVector = null;
			this.slideStartTime = this.control.time;
			this.isSliding = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.x += this.control.gridSize;
			this.moveTarget.z -= this.control.levelHeight;
			this.setFlip(1);
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.tintedAnim.rewind();
			this.tintedAnim.gotoFrame(0);
			this.shieldedAnim.rewind();
			this.shieldedAnim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedCharacter = null);
			this.setTerrainblock(b);
			this.isMoving = this.isHopping = this.canMove = this.doneBump = !1;
			return !0
		},
		startPoison: function() {
			this.isPoisoned || (this.isPoisoned = !0, this.poisonedTime =
				this.control.time, this.poisonedOffset.x = 0, this.poisonedOffset.y = 0)
		},
		updatePoison: function() {
			var b = this.control.time - this.poisonedTime;
			this.poisonedOffset.x = 0.15 > b ? 0.075 > b % 0.15 ? -2 : 2 : 0.075 > b % 0.15 ? -1 : 1;
			b /= this.poisonedDuration;
			1 <= b && (this.isPoisoned = !1, this.poisonedOffset.x = 0, this.poisonedOffset.y = 0, this.delayedPoisonDeathFlag = !0);
			this.poisonAnim.update()
		},
		genericKill: function() {
			if (!this._killed) {
				this.kill();
				var b = this.control.spawnEffect(2, this.worldPos);
				b.setTerrainblock(this.terrainblock);
				b.zIndex =
					this.zIndex;
				this.control.characterKilled();
				ig.game.sortEntities()
			}
		},
		getNextLeftBlock: function() {
			var b = this.terrainblock;
			this.isSliding && 1 >= this.slideStage && (b = this.lastTerrainblock);
			if (!b) return null;
			var c = b.level + 1;
			if (c >= this.control.terrainblockList.length) return null;
			for (var d = null, e = 0; e < this.control.terrainblockList[c].length; e++) {
				var f = this.control.terrainblockList[c][e];
				if (f.worldPos.x == b.worldPos.x && f.worldPos.y == b.worldPos.y - this.control.gridSize) {
					d = f;
					break
				}
			}
			return !d ? null : d
		},
		getNextRightBlock: function() {
			var b =
				this.terrainblock;
			this.isSliding && 1 >= this.slideStage && (b = this.lastTerrainblock);
			if (!b) return null;
			var c = b.level + 1;
			if (c >= this.control.terrainblockList.length) return null;
			for (var d = null, e = 0; e < this.control.terrainblockList[c].length; e++) {
				var f = this.control.terrainblockList[c][e];
				if (f.worldPos.x == b.worldPos.x + this.control.gridSize && f.worldPos.y == b.worldPos.y) {
					d = f;
					break
				}
			}
			return !d ? null : d
		},
		startShield: function() {
			this.isShielded = !0;
			this.shieldTime = this.control.time;
			this.shieldStage = 0;
			this.drawShield = !0
		},
		updateShield: function() {
			if (this.isShielded) {
				var b = this.control.time - this.shieldTime;
				if (b < this.shieldDuration - this.shieldWarningDuration) this.shieldStage = 0;
				else if (b < this.shieldDuration) {
					var c = 0.5 + 0.5 * (1 - (b - (this.shieldDuration - this.shieldWarningDuration)) / this.shieldWarningDuration);
					this.drawShield = b % c < c / 2 ? !0 : !1;
					this.shieldStage = 1
				} else b >= this.shieldDuration && (this.isShielded = !1, this.shieldStage = 2)
			}
		},
		checkPickups: function() {
			if (!this.terrainblock) return !1;
			var b = 0;
			if (0 < this.terrainblock.pickups.length)
				for (var c =
						0; c < this.terrainblock.pickups.length; c++) {
					var d = this.terrainblock.pickups[c];
					switch (d.pickupId) {
						case 0:
							this.control.pickupShield(d);
							break;
						case 1:
							this.control.pickupStar(d);
							break;
						case 2:
							this.control.pickupAntidote(d);
							break;
						case 3:
							this.control.pickupHint(d)
					}
					d.kill();
					b += 1
				}
			return 0 < b ? !0 : !1
		},
		checkRoamers: function() {
			if (!this.terrainblock) return !1;
			for (var b = 0; b < this.control.roamerList.length; b++) {
				var c = this.control.roamerList[b];
				if (c.terrainblock == this.terrainblock && 2 <= this.moveStage && 2 <= c.moveStage || c.lastTerrainblock ==
					this.terrainblock && 2 <= this.moveStage && 2 > c.moveStage || c.terrainblock == this.lastTerrainblock && this.terrainblock == c.lastTerrainblock && 1 <= this.moveStage && 1 <= c.moveStage) return this.control.roamerCollided(this, c), !0
			}
			return !1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-effect").requires("impact.entity").defines(function() {
	EntityGameEffect = ig.Entity.extend({
		animSheets: [new ig.AnimationSheet("media/graphics/game/effects/splash.png", 100, 120), new ig.AnimationSheet("media/graphics/game/effects/poison.png", 150, 150), new ig.AnimationSheet("media/graphics/game/effects/explode.png", 150, 150), new ig.AnimationSheet("media/graphics/game/effects/star_collected.png", 100, 120), new ig.AnimationSheet("media/graphics/game/effects/antidote_collected.png",
			100, 120), null, null, null],
		anims: [],
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5004,
		effectId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		terrainblock: null,
		particles: [],
		particlesTime: 0,
		particlesDuration: 0.75,
		particlesGravity: 400,
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setEffectId: function(b, c) {
			if (null == b || b >= this.animSheets.length) return !1;
			this.particles = [];
			c && (this.flipX = c);
			this.effectId = b;
			var d = this.animSheets[b];
			if (!d) {
				this.anim = null;
				this.particlesTime = this.control.time;
				var e = ["", "", "", "", ""];
				switch (b) {
					case 5:
						e[0] = "#8ddc47";
						e[1] = "#51b242";
						e[2] = "#79ce45";
						e[3] = "#0a7347";
						e[4] = "#13873d";
						break;
					case 6:
						e[0] = "#d68f49";
						e[1] = "#c16926";
						e[2] = "#c06725";
						e[3] = "#a65016";
						e[4] = "#81350f";
						break;
					case 7:
						e[0] = "#318bf5", e[1] = "#2251b4", e[2] = "#2a71d8", e[3] = "#37a3fd", e[4] = "#3fbffa"
				}
				for (var f = 5, d = 0; d < f; d++) {
					var g = {};
					g.color = e[Math.floor(5 * Math.random())];
					g.alpha = 1;
					g.angle = 0.5 * Math.random() * Math.PI;
					g.radius = 3;
					g.x = -6 + 3 * d;
					g.y = -2 + 4 * Math.random();
					g.vx = -50 + 25 * d;
					g.vy = -120 + -80 * Math.random();
					this.particles.push(g);
					g.x = g.x - 1 + 2 * Math.random();
					g.vx = g.vx - 4 + 8 * Math.random()
				}
				return !0
			}
			f = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height);
			e = [];
			for (g = 0; g < f; g++) e.push(g);
			f = new ig.Animation(d, 0.04, e, !0);
			this.moveDuration = e.length * f.frameTime;
			if (this.anim = f) this.anim.flip.x = this.flipX ? !0 : !1;
			this.drawOffset = 1 == b || 2 == b ? {
				x: -75,
				y: -70
			} : {
				x: -50,
				y: -100
			};
			return !0
		},
		setFlip: function(b) {
			this.flipX = b;
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1)
		},
		setWorldPos: function(b) {
			this.worldPos.x =
				b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.zIndex = 5004 - 10 * b.z - 2 * b.x + b.y;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			ig.game.sortEntitiesDeferred()
		},
		setOffset: function() {},
		setTerrainblock: function(b) {
			this.terrainblock = b
		},
		draw: function() {
			if (this.anim) {
				if (!(1 <= this.anim.loopCount)) {
					this.anim.flip.x = this.flipX ? !0 : !1;
					var b = this.screenPos.x,
						b = b + this.drawOffset.x,
						b = b + this.control.levelOffset.x,
						b = b + this.control.cameraOffset.x;
					this.terrainblock && this.terrainblock.isBumped && (b += this.terrainblock.bumpOffset.x);
					var b = this.bitwiseRound(b),
						c = this.screenPos.y,
						c = c + this.drawOffset.y,
						c = c + this.control.levelOffset.y,
						c = c + this.control.cameraOffset.y;
					this.terrainblock && this.terrainblock.isBumped && (c += this.terrainblock.bumpOffset.y);
					c = this.bitwiseRound(c);
					this.anim.draw(b, c)
				}
			} else this.drawParticles()
		},
		update: function() {
			!this.control.gamePaused && !this.control.gameOver && (this.anim ? (this.anim.update(), 1 <= this.anim.loopCount && this.kill()) : this.updateParticles())
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		roundRect: function(b,
			c, d, e, f, g, m, p) {
			"undefined" == typeof p && (p = !0);
			"undefined" === typeof g && (g = 5);
			b.beginPath();
			b.moveTo(c + g, d);
			b.lineTo(c + e - g, d);
			b.quadraticCurveTo(c + e, d, c + e, d + g);
			b.lineTo(c + e, d + f - g);
			b.quadraticCurveTo(c + e, d + f, c + e - g, d + f);
			b.lineTo(c + g, d + f);
			b.quadraticCurveTo(c, d + f, c, d + f - g);
			b.lineTo(c, d + g);
			b.quadraticCurveTo(c, d, c + g, d);
			b.closePath();
			p && b.stroke();
			m && b.fill()
		},
		drawParticles: function() {
			if (0 != this.particles.length) {
				var b = ig.system.context,
					c = this.screenPos.x,
					c = c + this.control.levelOffset.x,
					c = c + this.control.cameraOffset.x;
				this.terrainblock && this.terrainblock.isBumped && (c += this.terrainblock.bumpOffset.x);
				var c = this.bitwiseRound(c),
					d = this.screenPos.y,
					d = d + this.control.levelOffset.y,
					d = d + this.control.cameraOffset.y;
				this.terrainblock && this.terrainblock.isBumped && (d += this.terrainblock.bumpOffset.y);
				for (var d = this.bitwiseRound(d), e = 0; e < this.particles.length; e++) {
					var f = this.particles[e],
						g = f.radius;
					b.save();
					b.globalAlpha = f.alpha;
					b.translate(c + f.x, d + f.y);
					b.rotate(f.angle);
					b.fillStyle = f.color;
					this.roundRect(b, -g, -g, 2 * g, 2 * g, 2, !0, !1);
					b.restore()
				}
			}
		},
		updateParticles: function() {
			var b = this.control.time - this.particlesTime;
			if (b < this.particlesDuration) {
				var c = b / this.particlesDuration;
				if (0.25 > c)
					for (b = 0; b < this.particles.length; b++) {
						var d = this.particles[b];
						d.alpha = c / 0.25
					} else if (0.75 > c)
						for (b = 0; b < this.particles.length; b++) d = this.particles[b], d.alpha = 1;
					else
						for (b = 0; b < this.particles.length; b++) d = this.particles[b], d.alpha = 1 - (c - 0.75) / 0.25;
				for (b = 0; b < this.particles.length; b++) d = this.particles[b], d.x += d.vx * ig.system.tick, d.y += d.vy * ig.system.tick,
					d.vy += this.particlesGravity * ig.system.tick, 0 < d.vx ? (d.angle -= Math.PI * ig.system.tick, c = 2 * Math.PI, 0 > d.angle && (d.angle = c - -d.angle % c)) : 0 > d.vx && (d.angle += Math.PI * ig.system.tick, c = 2 * Math.PI, d.angle >= c && (d.angle %= c))
			} else b >= this.particlesDuration && this.kill()
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-obstacle").requires("impact.entity").defines(function() {
	EntityGameObstacle = ig.Entity.extend({
		animSheets: [new ig.AnimationSheet("media/graphics/game/objects/00.png", 100, 120), new ig.AnimationSheet("media/graphics/game/objects/01.png", 100, 120), new ig.AnimationSheet("media/graphics/game/objects/02.png", 100, 120), new ig.AnimationSheet("media/graphics/game/objects/03.png", 100, 120)],
		anims: [],
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5042,
		obstacleId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		shadowRadius: 28,
		shadowHeight: 0.5,
		shadowType: 0,
		shadowOffset: {
			x: 0,
			y: 0
		},
		terrainblock: null,
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setObstacleId: function(b, c) {
			if (null == b || b >= this.animSheets.length) return !1;
			c && (this.flipX = c);
			this.obstacleId = b;
			this.anims = [];
			for (var d = this.animSheets[b], e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height), f = [], g = 0; g < e; g++) f.push(g);
			d = new ig.Animation(d, 0.04,
				f, !0);
			this.moveDuration = f.length * d.frameTime;
			this.anim = d;
			this.anims.push(d);
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1);
			if (0 == b || 1 == b) this.shadowType = 1;
			return !0
		},
		setFlip: function(b) {
			this.flipX = b;
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1)
		},
		setWorldPos: function(b) {
			this.worldPos.x = b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.zIndex = 5042 - 10 * b.z - 2 * b.x + b.y;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			ig.game.sortEntitiesDeferred()
		},
		setOffset: function() {},
		setTerrainblock: function(b) {
			this.terrainblock =
				b
		},
		draw: function() {
			if (this.anim && !(1 <= this.anim.loopCount)) {
				this.anim.flip.x = this.flipX ? !0 : !1;
				var b = this.screenPos.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x;
				this.terrainblock && this.terrainblock.isBumped && (b += this.terrainblock.bumpOffset.x);
				var b = this.bitwiseRound(b),
					c = this.screenPos.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y;
				this.terrainblock && this.terrainblock.isBumped && (c += this.terrainblock.bumpOffset.y);
				c = this.bitwiseRound(c);
				this.drawShadow(b, c);
				b +=
					this.drawOffset.x;
				c += this.drawOffset.y;
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = this.terrainblock.drawAlpha);
				this.anim.draw(b, c);
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = 1)
			}
		},
		drawShadow: function(b, c) {
			var d = 0.75 * (1 - this.shadowHeight),
				e = b + this.shadowOffset.x,
				f = c + this.shadowOffset.y;
			if (this.isMoving && 2 > this.moveStage || this.isSliding && 2 > this.slideStage)
				if (this.lastTerrainblock && (this.lastTerrainblock.expireFlag || this.lastTerrainblock.isBumped)) return;
			if (this.isMoving && 2 <= this.moveStage || this.isSliding && 2 <= this.slideStage)
				if (this.terrainblock) {
					if (this.terrainblock._killed) return;
					1 > this.terrainblock.drawAlpha && (d *= this.terrainblock.drawAlpha)
				} else return;
			var g = ig.system.context,
				m = this.shadowRadius,
				m = m - 0.5 * m * this.shadowHeight;
			g.save();
			g.fillStyle = "rgba(0,0,0," + d + ")";
			g.translate(e, f);
			0 == this.shadowType ? (g.beginPath(), g.moveTo(m, 0), g.lineTo(0, m / 2), g.lineTo(-m, 0), g.lineTo(0, -m / 2), g.closePath()) : (g.scale(1, 0.5), g.beginPath(), g.arc(0, 0, m, 0, 2 * Math.PI, !1));
			g.fill();
			g.restore()
		},
		update: function() {},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-pickup").requires("impact.entity").defines(function() {
	EntityGamePickup = ig.Entity.extend({
		animSheets: [new ig.AnimationSheet("media/graphics/game/pickups/00.png", 100, 120), new ig.AnimationSheet("media/graphics/game/pickups/01.png", 100, 120), new ig.AnimationSheet("media/graphics/game/pickups/02.png", 100, 120), new ig.AnimationSheet("media/graphics/game/pickups/03.png", 100, 120)],
		anims: [],
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5043,
		pickupId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		hintId: 0,
		shadowRadius: 14,
		shadowHeight: 0.25,
		shadowType: 2,
		shadowOffset: {
			x: 0,
			y: 0
		},
		bobOffset: {
			x: 0,
			y: 0
		},
		bobHeight: 5,
		bobDuration: 1,
		terrainblock: null,
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setPickupId: function(b, c) {
			if (null == b || b >= this.animSheets.length) return !1;
			c && (this.flipX = c);
			this.pickupId = b;
			this.anims = [];
			for (var d = this.animSheets[b], e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height),
					f = [], g = 0; g < e; g++) f.push(g);
			d = new ig.Animation(d, 0.04, f, !0);
			this.moveDuration = f.length * d.frameTime;
			this.anim = d;
			this.anims.push(d);
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1);
			2 == b ? this.shadowType = 1 : 3 == b && (this.shadowType = 0);
			return !0
		},
		setHintId: function(b) {
			this.hintId = b
		},
		setFlip: function(b) {
			this.flipX = b;
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1)
		},
		setWorldPos: function(b) {
			this.worldPos.x = b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.zIndex = 5043 - 10 * b.z - 2 * b.x + b.y;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			ig.game.sortEntitiesDeferred()
		},
		setOffset: function() {},
		setTerrainblock: function(b) {
			this.terrainblock = b
		},
		draw: function() {
			if (this.anim && !(1 <= this.anim.loopCount)) {
				this.anim.flip.x = this.flipX ? !0 : !1;
				var b = this.screenPos.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x;
				this.terrainblock && this.terrainblock.isBumped && (b += this.terrainblock.bumpOffset.x);
				var b = this.bitwiseRound(b),
					c = this.screenPos.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y;
				this.terrainblock && this.terrainblock.isBumped &&
					(c += this.terrainblock.bumpOffset.y);
				c = this.bitwiseRound(c);
				this.drawShadow(b, c);
				b += this.drawOffset.x;
				c += this.drawOffset.y;
				b += this.bobOffset.x;
				c += this.bobOffset.y;
				b = this.bitwiseRound(b);
				c = this.bitwiseRound(c);
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = this.terrainblock.drawAlpha);
				this.anim.draw(b, c);
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = 1)
			}
		},
		drawShadow: function(b, c) {
			var d = 0.75 * (1 - this.shadowHeight),
				e = b + this.shadowOffset.x,
				f = c + this.shadowOffset.y;
			if (this.isMoving && 2 > this.moveStage || this.isSliding && 2 > this.slideStage)
				if (this.lastTerrainblock && (this.lastTerrainblock.expireFlag || this.lastTerrainblock.isBumped)) return;
			if (this.isMoving && 2 <= this.moveStage || this.isSliding && 2 <= this.slideStage)
				if (this.terrainblock) {
					if (this.terrainblock._killed) return;
					1 > this.terrainblock.drawAlpha && (d *= this.terrainblock.drawAlpha)
				} else return;
			var g = ig.system.context,
				m = this.shadowRadius,
				m = m - 0.5 * m * this.shadowHeight;
			g.save();
			g.fillStyle = "rgba(0,0,0," +
				d + ")";
			g.translate(e, f);
			if (0 == this.shadowType) g.beginPath(), g.moveTo(m, 0), g.lineTo(0, m / 2), g.lineTo(-m, 0), g.lineTo(0, -m / 2), g.closePath();
			else if (1 == this.shadowType) g.scale(1, 0.5), g.beginPath(), g.arc(0, 0, m, 0, 2 * Math.PI, !1);
			else if (2 == this.shadowType) {
				var d = 1 - 0.25 * this.shadowHeight,
					e = 12 * d * this.control.xBasis.x,
					e = e + 3 * d * this.control.yBasis.x,
					f = 12 * d * this.control.xBasis.y,
					f = f + 3 * d * this.control.yBasis.y,
					m = 12 * d * this.control.xBasis.x,
					m = m - 3 * d * this.control.yBasis.x,
					p = 12 * d * this.control.xBasis.y,
					p = p - 3 * d * this.control.yBasis.y,
					r = -12 * d * this.control.xBasis.x,
					r = r - 3 * d * this.control.yBasis.x,
					u = -12 * d * this.control.xBasis.y,
					u = u - 3 * d * this.control.yBasis.y,
					s = -12 * d * this.control.xBasis.x,
					s = s + 3 * d * this.control.yBasis.x,
					n = -12 * d * this.control.xBasis.y,
					n = n + 3 * d * this.control.yBasis.y;
				g.beginPath();
				g.moveTo(e, f);
				g.lineTo(m, p);
				g.lineTo(r, u);
				g.lineTo(s, n);
				g.closePath()
			}
			g.fill();
			g.restore()
		},
		update: function() {
			if (!this.control.gamePaused && !this.control.gameOver) {
				var b = this.control.time % this.bobDuration;
				0.5 > b ? (b /= 0.5, this.bobOffset.y = b * this.bobHeight,
					this.shadowHeight = 0.25 + 0.5 * (1 - b)) : 1 > b && (b = (b - 0.5) / 0.5, this.bobOffset.y = (1 - b) * this.bobHeight, this.shadowHeight = 0.25 + 0.5 * b)
			}
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-roamer").requires("impact.entity", "plugins.imageblender").defines(function() {
	EntityGameRoamer = ig.Entity.extend({
		frontAnimSheets: [new ig.AnimationSheet("media/graphics/game/roamers/wolf.png", 100, 120), new ig.AnimationSheet("media/graphics/game/roamers/lion.png", 100, 120)],
		backAnimSheets: [new ig.AnimationSheet("media/graphics/game/roamers/wolf1.png", 100, 120), new ig.AnimationSheet("media/graphics/game/roamers/lion1.png", 100, 120)],
		frontLeftSheets: [new ig.AnimationSheet("media/graphics/game/roamers/death.png",
			100, 120), new ig.AnimationSheet("media/graphics/game/roamers/zombie.png", 100, 120)],
		frontRightSheets: [new ig.AnimationSheet("media/graphics/game/roamers/death2.png", 100, 120), new ig.AnimationSheet("media/graphics/game/roamers/zombie2.png", 100, 120)],
		backLeftSheets: [new ig.AnimationSheet("media/graphics/game/roamers/death3.png", 100, 120), new ig.AnimationSheet("media/graphics/game/roamers/zombie3.png", 100, 120)],
		backRightSheets: [new ig.AnimationSheet("media/graphics/game/roamers/death1.png", 100, 120), new ig.AnimationSheet("media/graphics/game/roamers/zombie1.png",
			100, 120)],
		anim: null,
		frontLeftAnim: null,
		frontRightAnim: null,
		backLeftAnim: null,
		backRightAnim: null,
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5006,
		roamerId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		moveMode: 0,
		isMoving: !1,
		moveStartTime: 0,
		moveDuration: 0,
		moveFrom: null,
		moveTarget: null,
		moveVector: null,
		dropVector: null,
		canMove: !0,
		isHopping: !1,
		hopStartTime: 0,
		hopDuration: 0,
		isSliding: !1,
		slideStartTime: 0,
		slideDuration: 0,
		slideStage: 0,
		lastTerrainblock: null,
		terrainblock: null,
		doneBump: !1,
		shadowRadius: 28,
		shadowHeight: 0,
		shadowOffset: {
			x: 0,
			y: 0
		},
		roamWaitDelay: 0.25,
		roamWaitStartTime: 0,
		lastTrack: null,
		currentTrack: null,
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setRoamerId: function(b, c) {
			if (null == b) return !1;
			this.roamerId = b;
			this.trackId = c;
			if (0 == this.roamerId || 1 == this.roamerId) {
				for (var d = this.frontAnimSheets[b], e = Math.floor(d.image.width / d.width) * Math.floor(d.image.height / d.height), f = !0, g = [], m = 0; m < e; m++) g.push(m);
				this.frontLeftAnim =
					new ig.Animation(d, 0.04, g, f);
				this.frontRightAnim = new ig.Animation(d, 0.04, g, f);
				this.backLeftAnim = new ig.Animation(this.backAnimSheets[b], 0.04, g, f);
				this.backRightAnim = new ig.Animation(this.backAnimSheets[b], 0.04, g, f);
				this.frontRightAnim.flip.x = !0;
				this.backLeftAnim.flip.x = !0;
				this.moveDuration = g.length * this.frontLeftAnim.frameTime;
				this.hopDuration = this.moveDuration / 2;
				this.slideDuration = this.moveDuration;
				this.anim = this.frontLeftAnim
			} else {
				b -= 2;
				if (0 > b) return !1;
				d = this.frontLeftSheets[b];
				e = Math.floor(d.image.width /
					d.width) * Math.floor(d.image.height / d.height);
				f = !0;
				g = [];
				for (m = 0; m < e; m++) g.push(m);
				this.frontLeftAnim = new ig.Animation(d, 0.04, g, f);
				this.frontRightAnim = new ig.Animation(this.frontRightSheets[b], 0.04, g, f);
				this.backLeftAnim = new ig.Animation(this.backLeftSheets[b], 0.04, g, f);
				this.backRightAnim = new ig.Animation(this.backRightSheets[b], 0.04, g, f);
				this.anim = this.frontLeftAnim;
				this.moveDuration = g.length * this.frontLeftAnim.frameTime;
				this.hopDuration = this.moveDuration / 2;
				this.slideDuration = this.moveDuration
			}
			return !0
		},
		setWorldPos: function(b, c) {
			"undefined" == typeof c && (c = !0);
			this.worldPos.x = b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			c && (this.zIndex = 5006 - 10 * b.z - 2 * b.x + b.y + 200, ig.game.sortEntitiesDeferred())
		},
		setTerrainblock: function(b) {
			if (b != this.terrainblock && (this.lastTerrainblock = this.terrainblock, this.terrainblock = b)) this.terrainblock.landedRoamer = this
		},
		setCurrentTrack: function(b) {
			this.currentTrack = b;
			this.lastTrack = null
		},
		draw: function() {
			if (this.anim) {
				var b =
					this.screenPos.x,
					b = b + this.control.levelOffset.x,
					b = b + this.control.cameraOffset.x;
				this.terrainblock && this.terrainblock.isBumped && (b += this.terrainblock.bumpOffset.x);
				var b = this.bitwiseRound(b),
					c = this.screenPos.y,
					c = c + this.control.levelOffset.y,
					c = c + this.control.cameraOffset.y;
				this.terrainblock && this.terrainblock.isBumped && (c += this.terrainblock.bumpOffset.y);
				c = this.bitwiseRound(c);
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = this.terrainblock.drawAlpha);
				this.drawShadow(b,
					c);
				this.anim.draw(b + this.drawOffset.x, c + this.drawOffset.y);
				this.terrainblock && 1 > this.terrainblock.drawAlpha && (ig.system.context.globalAlpha = 1)
			}
		},
		drawShadow: function(b, c) {
			var d = 0.75 * (1 - this.shadowHeight),
				e = b + this.shadowOffset.x,
				f = c + this.shadowOffset.y;
			if (this.isMoving && 2 > this.moveStage || this.isSliding && 2 > this.slideStage)
				if (this.lastTerrainblock && (this.lastTerrainblock.expireFlag || this.lastTerrainblock.isBumped)) return;
			if (this.isMoving && 2 <= this.moveStage || this.isSliding && 2 <= this.slideStage)
				if (this.terrainblock) {
					if (this.terrainblock._killed) return;
					1 > this.terrainblock.drawAlpha && (d *= this.terrainblock.drawAlpha)
				} else return;
			var g = ig.system.context,
				m = this.shadowRadius,
				m = m - 0.5 * m * this.shadowHeight;
			g.save();
			g.fillStyle = "rgba(0,0,0," + d + ")";
			g.translate(e, f);
			g.beginPath();
			g.moveTo(m, 0);
			g.lineTo(0, m / 2);
			g.lineTo(-m, 0);
			g.lineTo(0, -m / 2);
			g.closePath();
			g.fill();
			g.restore()
		},
		update: function() {
			!this.control.gamePaused && !this.control.gameOver && !this.control.tutorialPaused && (this.isMoving && this.updateMoving(), this.updateRoam())
		},
		updateMoving: function() {
			var b =
				this.control.time - this.moveStartTime,
				b = b / this.moveDuration;
			if (0.25 > b) {
				if (this.worldPos.x != this.moveFrom.x || this.worldPos.y != this.moveFrom.y || this.worldPos.z != this.moveFrom.z) {
					var c = {
						x: 0,
						y: 0,
						z: 0
					};
					c.x = this.moveFrom.x;
					c.y = this.moveFrom.y;
					c.z = this.moveFrom.z;
					this.setWorldPos(c, !1)
				}
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.moveStage = this.shadowOffset.y = 0
			} else if (0.5 > b) {
				b = (b - 0.25) / 0.25;
				if (null == this.moveVector)
					if (this.moveVector = {
							x: 0,
							y: 0,
							z: 0
						}, 0 == this.moveMode) {
						var c = this.moveTarget.x - this.moveFrom.x,
							d = this.moveTarget.y - this.moveFrom.y;
						this.moveVector.x = c / 2;
						this.moveVector.y = d / 2
					} else if (1 == this.moveMode) {
					var c = this.moveTarget.x - this.moveFrom.x,
						d = this.moveTarget.y - this.moveFrom.y,
						e = this.moveTarget.z - this.moveFrom.z;
					this.moveVector.x = c / 2;
					this.moveVector.y = d / 2;
					this.moveVector.z = e
				}
				c = {
					x: 0,
					y: 0,
					z: 0
				};
				c.x = this.moveFrom.x + b * this.moveVector.x;
				c.y = this.moveFrom.y + b * this.moveVector.y;
				c.z = this.moveFrom.z + b * this.moveVector.z;
				this.setWorldPos(c, !1);
				this.shadowHeight = b;
				this.shadowOffset.x = 0;
				this.shadowOffset.y =
					0;
				this.moveStage = 1
			} else if (0.75 > b) b = (b - 0.5) / 0.25, null == this.dropVector && (this.dropVector = {
					x: 0,
					y: 0,
					z: 0
				}, 0 == this.moveMode ? (c = this.moveTarget.x - this.moveFrom.x, d = this.moveTarget.y - this.moveFrom.y, e = this.moveTarget.z - this.moveFrom.z, this.dropVector.x = c / 2, this.dropVector.y = d / 2, this.dropVector.z = e) : 1 == this.moveMode && (c = this.moveTarget.x - this.moveFrom.x, d = this.moveTarget.y - this.moveFrom.y, this.dropVector.x = c / 2, this.dropVector.y = d / 2, this.dropVector.z = 0), c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveTarget.x, c.y = this.moveTarget.y,
				c.z = this.moveTarget.z, this.setWorldPos(c, !0)), c = {
				x: 0,
				y: 0,
				z: 0
			}, c.x = this.moveFrom.x + this.moveVector.x + b * this.dropVector.x, c.y = this.moveFrom.y + this.moveVector.y + b * this.dropVector.y, c.z = this.moveFrom.z + this.moveVector.z + b * this.dropVector.z, this.setWorldPos(c, !1), this.shadowHeight = 1 - b, this.shadowOffset.x = 0, this.shadowOffset.y = (1 - b) * this.control.levelHeight, this.moveStage = 2;
			else if (1 > b) {
				if (this.worldPos.x != this.moveTarget.x || this.worldPos.y != this.moveTarget.y || this.worldPos.z != this.moveTarget.z) c = {
					x: 0,
					y: 0,
					z: 0
				}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z, this.setWorldPos(c, !1);
				this.shadowHeight = 0;
				this.shadowOffset.x = 0;
				this.shadowOffset.y = 0;
				this.canMove = !0;
				this.moveStage = 3;
				this.doneBump || (this.doneBump = !0, this.terrainblock ? (this.checkCharacters(), this.terrainblock.respondToRoamerLanding(this), b = this.control.character, this.terrainblock && b.terrainblock && this.terrainblock.level <= b.terrainblock.level + 6 && ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step)) : (this.moveStage = 5,
					this.canMove = !1, this.anim.rewind(), this.anim.gotoFrame(0), this.genericKill()))
			} else c = {
				x: 0,
				y: 0,
				z: 0
			}, c.x = this.moveTarget.x, c.y = this.moveTarget.y, c.z = this.moveTarget.z, this.setWorldPos(c, !1), this.isMoving = !1, this.moveTarget = this.moveFrom = this.dropVector = this.moveVector = null, this.canMove = !0, this.anim.rewind(), this.anim.gotoFrame(0), this.moveStage = 4;
			this.anim.update()
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		dropLeft: function(b) {
			if (!this.canMove) return !1;
			this.moveMode = 0;
			this.anim = this.frontLeftAnim;
			this.dropVector = this.moveVector = null;
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.y -= this.control.gridSize;
			this.moveTarget.z -= this.control.levelHeight;
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedRoamer = null);
			this.setTerrainblock(b);
			this.canMove = this.doneBump = !1;
			return !0
		},
		dropRight: function(b) {
			if (!this.canMove) return !1;
			this.moveMode = 0;
			this.anim = this.frontRightAnim;
			this.dropVector = this.moveVector = null;
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.x += this.control.gridSize;
			this.moveTarget.z -= this.control.levelHeight;
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedRoamer = null);
			this.setTerrainblock(b);
			this.canMove = this.doneBump = !1;
			return !0
		},
		jumpLeft: function(b) {
			if (!this.canMove) return !1;
			this.moveMode = 1;
			this.anim = this.backLeftAnim;
			this.dropVector = this.moveVector = null;
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.x -= this.control.gridSize;
			this.moveTarget.z += this.control.levelHeight;
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedRoamer =
				null);
			this.setTerrainblock(b);
			this.canMove = this.doneBump = !1;
			return !0
		},
		jumpRight: function(b) {
			if (!this.canMove) return !1;
			this.moveMode = 1;
			this.anim = this.backRightAnim;
			this.dropVector = this.moveVector = null;
			this.moveStartTime = this.control.time;
			this.isMoving = !0;
			this.moveFrom = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget = {
				x: this.worldPos.x,
				y: this.worldPos.y,
				z: this.worldPos.z
			};
			this.moveTarget.y += this.control.gridSize;
			this.moveTarget.z += this.control.levelHeight;
			this.anim.rewind();
			this.anim.gotoFrame(0);
			this.terrainblock && (this.terrainblock.landedRoamer = null);
			this.setTerrainblock(b);
			this.canMove = this.doneBump = !1;
			return !0
		},
		genericKill: function() {
			this.kill();
			var b = this.control.spawnEffect(2, this.worldPos);
			b.setTerrainblock(this.terrainblock);
			b.zIndex = this.zIndex;
			ig.game.sortEntities()
		},
		getNextTrackData: function() {
			if (null != this.trackId) {
				var b = this.terrainblock;
				this.isSliding && 0 == this.slideStage && (b = this.lastTerrainblock);
				if (!b) return null;
				if (!b._killed && !(b.isBumped && 2 <= b.bumpStage)) {
					for (var c = [], d =
							0; d < this.control.trackList.length; d++) {
						var e = this.control.trackList[d];
						e != this.currentTrack && this.trackId == e.trackId && (e.worldPos.x == b.worldPos.x && e.worldPos.y == b.worldPos.y - this.control.gridSize ? c.push({
								track: e,
								mode: 0
							}) : e.worldPos.x == b.worldPos.x + this.control.gridSize && e.worldPos.y == b.worldPos.y ? c.push({
								track: e,
								mode: 1
							}) : e.worldPos.x == b.worldPos.x - this.control.gridSize && e.worldPos.y == b.worldPos.y ? c.push({
								track: e,
								mode: 2
							}) : e.worldPos.x == b.worldPos.x && e.worldPos.y == b.worldPos.y + this.control.gridSize &&
							c.push({
								track: e,
								mode: 3
							}))
					}
					if (0 == c.length) return null;
					for (var f = [], d = 0; d < c.length; d++) e = c[d].track, b = e.terrainblock, b._killed || b.isBumped && 2 <= b.bumpStage || b.obstacles && 0 < b.obstacles.length || f.push(c[d]);
					if (0 == f.length) return null;
					b = [];
					for (d = 0; d < f.length; d++) e = f[d].track, e != this.lastTrack && b.push(f[d]);
					d = f[0];
					0 < b.length && (d = b[0]);
					return d
				}
			}
		},
		updateRoam: function() {
			if (this.canMove) {
				var b = this.terrainblock;
				if (b) {
					if (!(b.isBumped && 2 <= b.bumpStage))
						if (b._killed) this.kill();
						else if (0 == this.roamWaitStartTime &&
						(this.roamWaitStartTime = this.control.time), !(this.control.time - this.roamWaitStartTime < this.roamWaitDelay)) {
						b = this.getNextTrackData();
						if (!b) return !1;
						var c = b.track,
							d = !1;
						switch (b.mode) {
							case 0:
								d = this.dropLeft(c.terrainblock);
								break;
							case 1:
								d = this.dropRight(c.terrainblock);
								break;
							case 2:
								d = this.jumpLeft(c.terrainblock);
								break;
							case 3:
								d = this.jumpRight(c.terrainblock)
						}
						return d ? (this.roamWaitStartTime = 0, this.lastTrack = this.currentTrack, this.currentTrack = c, !0) : !1
					}
				} else this.kill()
			}
		},
		checkCharacters: function() {
			if (!this.terrainblock) return !1;
			var b = this.control.character;
			if (b._killed) return !1;
			if (b.isSliding) {
				if (b.terrainblock == this.terrainblock && 2 <= this.slideStage && 3 <= b.slideStage || b.lastTerrainblock == this.terrainblock && 2 <= this.slideStage && 2 > b.slideStage || b.terrainblock == this.lastTerrainblock && this.terrainblock == b.lastTerrainblock && 1 <= this.slideStage && 1 <= b.slideStage) return this.control.roamerCollided(b, this), !0
			} else if (b.terrainblock == this.terrainblock && 2 <= this.moveStage && 3 <= b.moveStage || b.lastTerrainblock == this.terrainblock && 2 <= this.moveStage &&
				2 > b.moveStage || b.terrainblock == this.lastTerrainblock && this.terrainblock == b.lastTerrainblock && 1 <= this.moveStage && 1 <= b.moveStage) return this.control.roamerCollided(b, this), !0;
			return !1
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-track").requires("impact.entity").defines(function() {
	EntityGameTrack = ig.Entity.extend({
		animSheets: [],
		anims: [],
		drawOffset: {
			x: -50,
			y: -100
		},
		zIndex: 5002,
		trackId: 0,
		flipX: !1,
		worldPos: {
			x: 0,
			y: 0,
			z: 0
		},
		screenPos: {
			x: 0,
			y: 0
		},
		shadowRadius: 28,
		shadowHeight: 0.5,
		shadowType: 0,
		shadowOffset: {
			x: 0,
			y: 0
		},
		terrainblock: null,
		control: null,
		init: function(b, c, d) {
			this.parent(b, c, d)
		},
		ready: function() {
			this.control = ig.game.getEntitiesByType(EntityGameControl)[0]
		},
		setTrackId: function(b) {
			if (null == b) return !1;
			this.trackId = b;
			return !0
		},
		setFlip: function(b) {
			this.flipX = b;
			this.anim && (this.anim.flip.x = this.flipX ? !0 : !1)
		},
		setWorldPos: function(b) {
			this.worldPos.x = b.x;
			this.worldPos.y = b.y;
			this.worldPos.z = b.z;
			this.zIndex = 5002 - 10 * b.z - 2 * b.x + b.y;
			this.screenPos = this.control.worldToScreenCoord(this.worldPos);
			ig.game.sortEntitiesDeferred()
		},
		setOffset: function() {},
		setTerrainblock: function(b) {
			this.terrainblock = b
		},
		draw: function() {},
		drawShadow: function(b, c) {
			var d = 0.75 * (1 - this.shadowHeight),
				e = b + this.shadowOffset.x,
				f = c + this.shadowOffset.y;
			if (this.isMoving && 2 > this.moveStage || this.isSliding && 2 > this.slideStage)
				if (this.lastTerrainblock && (this.lastTerrainblock.expireFlag || this.lastTerrainblock.isBumped)) return;
			if (this.isMoving && 2 <= this.moveStage || this.isSliding && 2 <= this.slideStage)
				if (this.terrainblock) {
					if (this.terrainblock._killed) return;
					1 > this.terrainblock.drawAlpha && (d *= this.terrainblock.drawAlpha)
				} else return;
			var g = ig.system.context,
				m = this.shadowRadius,
				m = m - 0.5 * m * this.shadowHeight;
			g.save();
			g.fillStyle = "rgba(0,0,0," + d + ")";
			g.translate(e,
				f);
			0 == this.shadowType ? (g.beginPath(), g.moveTo(m, 0), g.lineTo(0, m / 2), g.lineTo(-m, 0), g.lineTo(0, -m / 2), g.closePath()) : (g.scale(1, 0.5), g.beginPath(), g.arc(0, 0, m, 0, 2 * Math.PI, !1));
			g.fill();
			g.restore()
		},
		update: function() {},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		}
	})
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-ui", "game.entities.game-terrainblock", "game.entities.game-character", "game.entities.game-effect", "game.entities.game-obstacle", "game.entities.game-pickup", "game.entities.game-roamer", "game.entities.game-track").defines(function() {
	EntityGameControl = ig.Entity.extend({
		zIndex: 100,
		bgImage: new ig.Image("media/graphics/game/backgrounds/gamebg.png"),
		bgOffset: {
			x: 0,
			y: 0
		},
		bgScale: 1,
		cloudImage: new ig.Image("media/graphics/game/backgrounds/cloud.png"),
		cloudDrawOffset: {
			x: -40,
			y: -24
		},
		cloudOffset: {
			x: 0,
			y: 0
		},
		cloudList: [],
		cloudExtensionFlag: !1,
		cloudStartIndex: 0,
		cloudTotalOffset: {
			x: 0,
			y: 0
		},
		cameraOffset: {
			x: 0,
			y: 0
		},
		cameraResetFlag: !1,
		worldOffset: {
			x: 0,
			y: 0
		},
		gridSize: 40,
		levelHeight: 40,
		xBasis: {
			x: 0,
			y: 0
		},
		yBasis: {
			x: 0,
			y: 0
		},
		levelOffset: {
			x: 0,
			y: 0
		},
		chunkSize: 12,
		chunkList: [],
		lastChunkGroup: 0,
		terrainblockList: [],
		effectList: [],
		roamerList: [],
		trackList: [],
		character: null,
		time: 0,
		creepSpeed: 20,
		expireMode: 0,
		gameStarted: !1,
		gameOver: !1,
		gamePaused: !1,
		tutorialMode: !1,
		tutorialStage: 0,
		tutorialPaused: !1,
		characterDeathTime: 0,
		levelShieldSpawned: !1,
		gameScore: 0,
		keyReleased: !0,
		pointer: null,
		ui: null,
		init: function(b, c, d) {
			this.parent(b, c, d);
			ig.global.wm || (this.worldOffset.x = ig.system.width / 2 - 135, this.worldOffset.y = 180, b = -30 / 180 * Math.PI, this.yBasis.x = Math.cos(b), this.yBasis.y = Math.sin(b), b = 30 / 180 * Math.PI, this.xBasis.x = Math.cos(b), this.xBasis.y = Math.sin(b), ig.global.gameControl = this, this.lastChunkGroup = Math.floor(2 * Math.random()))
		},
		ready: function() {
			this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0);
			this.ui.ready();
			if (!ig.global.wm) {
				this.tutorialMode = ig.game.doTutorialFlag ? !0 : !1;
				this.ui.startFadeinTransition();
				this.ui.transitionEndFunction = this.transitionEnded();
				this.spawnClouds(0);
				this.spawnClouds(-ig.system.width);
				this.spawnInitialTerrain();
				this.spawnCharacter();
				this.spawnNewLevels();
				ig.game.sortEntities();
				var b = 0;
				this.bgImage.width < ig.system.width ? this.bgScale = ig.system.width / this.bgImage.width : this.bgImage.width > ig.system.width && (b = -(this.bgImage.width -
					ig.system.width) / 2);
				this.bgOffset.x = this.bitwiseRound(b)
			}
		},
		draw: function() {
			var b = ig.system.context;
			b.save();
			1 != this.bgScale && b.scale(this.bgScale, 1);
			this.bgImage.draw(this.bgOffset.x, this.bgOffset.y);
			b.restore();
			this.drawClouds()
		},
		drawClouds: function() {
			for (var b = ig.system.context, c = 0; c < this.cloudList.length; c++) {
				var d = this.cloudList[c],
					e = d.pos.x,
					e = e + this.cameraOffset.x;
				if (!(0 > e - this.cloudDrawOffset.x)) {
					var f = d.pos.y,
						f = f + this.cloudTotalOffset.y,
						f = f + this.cloudStartIndex * ig.system.height;
					0 > f - this.cloudDrawOffset.y ||
						(e = this.bitwiseRound(e), f = this.bitwiseRound(f), b.save(), b.translate(e, f), e = 1, d.scale && (e = d.scale), 1 != e ? d.flip ? b.scale(-e, e) : b.scale(e, e) : d.flip && b.scale(-1, 1), d.alpha && 1 > d.alpha && (b.globalAlpha = d.alpha), this.cloudImage.draw(this.cloudDrawOffset.x, this.cloudDrawOffset.y), b.restore())
				}
			}
			if (this.cloudExtensionFlag)
				for (c = 0; c < this.cloudList.length; c++) d = this.cloudList[c], e = d.pos.x, e += this.cameraOffset.x, 0 > e - this.cloudDrawOffset.x || (f = d.pos.y, f += this.cloudTotalOffset.y, f += (this.cloudStartIndex + 1) * ig.system.height,
					f + this.cloudDrawOffset.y > ig.system.height || (e = this.bitwiseRound(e), f = this.bitwiseRound(f), b.save(), b.translate(e, f), e = 1, d.scale && (e = d.scale), 1 != e ? d.flip ? b.scale(-e, e) : b.scale(e, e) : d.flip && b.scale(-1, 1), d.alpha && 1 > d.alpha && (b.globalAlpha = d.alpha), this.cloudImage.draw(this.cloudDrawOffset.x, this.cloudDrawOffset.y), b.restore()))
		},
		togglePause: function() {
			this.gamePaused ? this.unpause() : this.pause()
		},
		pause: function() {
			//console.log("pause");
			hsgame.pause();
			this.gamePaused || (this.gamePaused = !0)
		},
		unpause: function() {
			//console.log("unpause");
			hsgame.start();
			this.gamePaused && (this.gamePaused = !1)
		},
		transitionEnded: function() {
			this.tutorialMode && (this.tutorialPaused = !0)
		},
		startGame: function() {
			this.gameStarted || (this.gameStarted = !0)
		},
		endGame: function() {
			this.tutorialMode ? (this.tutorialStage = -1, this.tutorialPaused = !0) : this.gameOver || (this.gameOver = !0, this.ui.showGameOverScreen())
		},
		returnToMainMenu: function() {
            if(!this.drawGameOverScreenFlag)
			{
				var val={};
				val.score=this.control.gameScore;
				hsgame.stop(val);
				console.log(val);
			}
			ig.input.clearPressed();
			ig.game.director.jumpTo(LevelHome)
		},
		restartGame: function() {
			hsgame.start();
			ig.input.clearPressed();
			ig.game.director.jumpTo(LevelGame)
		},
		update: function() {
			!this.gameOver && !this.gamePaused &&
				(this.tutorialPaused ? this.updateTutorial() : (this.time += ig.system.tick, this.updateClouds(), this.checkClicks(), this.updatePlayerInput(), this.updateCamera(), this.character._killed && 2.5 <= this.time - this.characterDeathTime && this.endGame()))
		},
		updateClouds: function() {
			var b = this.cameraOffset.y + this.cloudOffset.y;
			this.cloudExtensionFlag = 0 < -this.cameraOffset.y % ig.system.height ? !0 : !1;
			this.cloudStartIndex = Math.floor(-b / ig.system.height);
			this.cloudTotalOffset.y = b;
			this.cloudOffset.x += 12 * ig.system.tick;
			this.cloudOffset.x >
				ig.system.width && (this.cloudOffset.x -= ig.system.width, this.spawnClouds(-ig.system.width + this.cloudOffset.x));
			for (var b = [], c = 0; c < this.cloudList.length; c++) {
				var d = !1,
					e = this.cloudList[c];
				e.pos.x += e.vector.x * ig.system.tick;
				e.pos.x > ig.system.width - this.cloudDrawOffset.x && (d = !0);
				d || b.push(e)
			}
			this.cloudList = b
		},
		aabbCheck: function(b, c) {
			return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
		},
		checkClicks: function() {
			this.pointer.refreshPos()
		},
		roundRect: function(b, c, d, e, f, g, m, p) {
			"undefined" == typeof p &&
				(p = !0);
			"undefined" === typeof g && (g = 5);
			b.beginPath();
			b.moveTo(c + g, d);
			b.lineTo(c + e - g, d);
			b.quadraticCurveTo(c + e, d, c + e, d + g);
			b.lineTo(c + e, d + f - g);
			b.quadraticCurveTo(c + e, d + f, c + e - g, d + f);
			b.lineTo(c + g, d + f);
			b.quadraticCurveTo(c, d + f, c, d + f - g);
			b.lineTo(c, d + g);
			b.quadraticCurveTo(c, d, c + g, d);
			b.closePath();
			p && b.stroke();
			m && b.fill()
		},
		worldToScreenCoord: function(b) {
			var c = {
				x: 0,
				y: 0,
				z: 0
			};
			c.x += b.x * this.xBasis.x;
			c.y += b.x * this.xBasis.y;
			c.x += b.y * this.yBasis.x;
			c.y += b.y * this.yBasis.y;
			c.x += this.worldOffset.x;
			c.y += this.worldOffset.y;
			c.y -= b.z;
			c.x = this.bitwiseRound(c.x);
			c.y = this.bitwiseRound(c.y);
			c.z = this.bitwiseRound(c.z);
			return c
		},
		screenToWorldCoord: function(b) {
			b.x -= this.worldOffset.x;
			b.y -= this.worldOffset.y;
			var c = {
				x: 0,
				y: 0,
				z: 0
			};
			null !== b.z && (b.y += b.z, c.z = b.z);
			c.x += b.x / 2 / this.xBasis.x;
			c.x += b.y / 2 / this.xBasis.y;
			c.y += b.x / 2 / this.yBasis.x;
			c.y += b.y / 2 / this.yBasis.y;
			return c
		},
		bitwiseRound: function(b) {
			return 0.5 + b << 0
		},
		spawnClouds: function(b) {
			"undefined" == typeof b && (b = 0);
			b = -this.cloudDrawOffset.x + b;
			var c = -this.cloudDrawOffset.y,
				d = ig.system.width +
				this.cloudDrawOffset.x,
				e = ig.system.height + this.cloudDrawOffset.y,
				f = b + Math.random() * d / 3,
				g = c + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + d / 3 + Math.random() * d / 3;
			g = c + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + 2 * d / 3 + Math.random() * d / 3;
			g = c + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + Math.random() * d / 3;
			g = c + e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + d / 3 + Math.random() * d / 3;
			g = c + e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + 2 * d / 3 + Math.random() * d / 3;
			g = c + e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + Math.random() *
				d / 3;
			g = c + e / 2 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + d / 3 + Math.random() * d / 3;
			g = c + e / 2 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + 2 * d / 3 + Math.random() * d / 3;
			g = c + e / 2 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + Math.random() * d / 3;
			g = c + 3 * e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + d / 3 + Math.random() * d / 3;
			g = c + 3 * e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g);
			f = b + 2 * d / 3 + Math.random() * d / 3;
			g = c + 3 * e / 4 + Math.random() * e / 4;
			this.spawnCloud(f, g)
		},
		spawnCloud: function(b, c) {
			var d = {};
			d.pos = {
				x: b,
				y: c
			};
			d.scale = 0.5 + 0.5 * Math.random();
			d.alpha = 0.4 + 0.6 * Math.random();
			1 < d.alpha && (d.alpha = 1);
			0.5 > Math.random() && (d.flip = !0);
			d.vector = {
				x: 0,
				y: 0
			};
			d.vector.x = 8 + 4 * Math.random();
			this.cloudList.push(d)
		},
		spawnInitialTerrain: function() {
			var b = this.gridSize,
				c = _INTRO_LEVEL[0];
			this.tutorialMode && (c = _TUTORIAL_LEVEL[0]);
			for (var d = c.length, e = 0, f = 0; f < d && !(e >= c.length); f++) {
				var g = 5;
				0 < f % 2 && (g = 4);
				var m = 0,
					p = 0,
					r = (0 + f) * -this.levelHeight,
					m = Math.floor((0 + f + 1) / 2),
					p = Math.floor((0 + f) / 2);
				this.levelShieldSpawned = !1;
				for (var u = [], s = 0; s < g; s++) {
					var n = ig.game.spawnEntity(EntityGameTerrainblock, -1E3, -1E3);
					n.ready();
					n.setWorldPos({
						x: (s + m) * b,
						y: (s - p) * b,
						z: r
					});
					n.setLevel(0 + f);
					this.defineBlockByGlyph(n, c[e][s]);
					u.push(n)
				}
				this.terrainblockList.push(u);
				e++
			}
		},
		spawnNewLevels: function() {
			if (this.character.terrainblock || this.character.lastTerrainblock) {
				var b = 0,
					b = this.character.terrainblock ? this.character.terrainblock.level : this.character.lastTerrainblock.level + 1;
				if (!(6 < this.terrainblockList.length - b) && !(0 >= this.terrainblockList.length || 0 >= this.terrainblockList[this.terrainblockList.length - 1].length)) {
					if (0 ==
						this.chunkList.length) {
						this.lastChunkGroup += 1;
						var c = _LEVELS_B;
						1 < this.lastChunkGroup && (this.lastChunkGroup = 0, c = _LEVELS_A);
						for (var d = [], e = 0; e < c.length; e++) d.push(e);
						for (e = 0; e < c.length; e++) {
							var b = Math.floor(Math.random() * d.length),
								f = d[b];
							d.splice(b, 1);
							b = c[f];
							this.chunkList.push(b)
						}
					}
					c = this.chunkList.pop();
					d = !1;
					0.5 > Math.random() && (d = !0);
					if (c) {
						0 < c.length % 2 && c.push(["_", "_", "_", "_"]);
						c.push(["_", "_", "_", "_", "_"]);
						c.push(["_", "_", "_", "_"]);
						for (var b = c.length, f = this.gridSize, g = this.terrainblockList[this.terrainblockList.length -
								1][0].level + 1, m = 0, p = 0; p < b && !(m >= c.length); p++) {
							var r = 5;
							0 < p % 2 && (r = 4);
							var u = 0,
								s = 0,
								n = (g + p) * -this.levelHeight,
								u = Math.floor((g + p + 1) / 2),
								s = Math.floor((g + p) / 2);
							this.levelShieldSpawned = !1;
							for (var q = [], e = 0; e < r; e++) {
								var t = ig.game.spawnEntity(EntityGameTerrainblock, -1E3, -1E3);
								t.ready();
								t.setWorldPos({
									x: (e + u) * f,
									y: (e - s) * f,
									z: n
								});
								t.setLevel(g + p);
								var B = c[m][e];
								d && (B = c[m][r - 1 - e]);
								this.defineBlockByGlyph(t, B, d, !0);
								q.push(t)
							}
							this.terrainblockList.push(q);
							m++
						}
					}
				}
			}
		},
		spawnCharacter: function() {
			var b = this.terrainblockList[0][2],
				c = ig.game.spawnEntity(EntityGameCharacter, -1E3, -1E3);
			c.ready();
			var d = ig.game.selectedCharacterId;
			if (0 > d || d >= c.animSheets.length) d = 0;
			c.setCharId(d);
			c.setTerrainblock(b);
			c.setWorldPos({
				x: b.worldPos.x,
				y: b.worldPos.y,
				z: b.worldPos.z
			});
			c.setFlip(1);
			this.character = c
		},
		spawnEffect: function(b, c) {
			var d = ig.game.spawnEntity(EntityGameEffect, -1E3, -1E3);
			d.ready();
			d.setEffectId(b);
			d.setWorldPos({
				x: c.x,
				y: c.y,
				z: c.z
			});
			this.effectList.push(d);
			return d
		},
		spawnObstacle: function(b, c) {
			var d = ig.game.spawnEntity(EntityGameObstacle, -1E3, -1E3);
			d.ready();
			d.setObstacleId(b);
			d.setWorldPos({
				x: c.worldPos.x,
				y: c.worldPos.y,
				z: c.worldPos.z
			});
			d.setTerrainblock(c);
			c.addObstacle(d);
			return d
		},
		spawnPickup: function(b, c) {
			var d = ig.game.spawnEntity(EntityGamePickup, -1E3, -1E3);
			d.ready();
			d.setPickupId(b);
			d.setWorldPos({
				x: c.worldPos.x,
				y: c.worldPos.y,
				z: c.worldPos.z
			});
			d.setTerrainblock(c);
			c.addPickup(d);
			return d
		},
		spawnRoamer: function(b, c, d) {
			var e = ig.game.spawnEntity(EntityGameRoamer, -1E3, -1E3);
			e.ready();
			e.setRoamerId(b, d);
			e.setTerrainblock(c);
			e.setWorldPos({
				x: c.worldPos.x,
				y: c.worldPos.y,
				z: c.worldPos.z
			});
			this.roamerList.push(e);
			return e
		},
		spawnTrack: function(b, c) {
			var d = ig.game.spawnEntity(EntityGameTrack, -1E3, -1E3);
			d.ready();
			d.setTrackId(b);
			d.setTerrainblock(c);
			d.setWorldPos({
				x: c.worldPos.x,
				y: c.worldPos.y,
				z: c.worldPos.z
			});
			d.setFlip(1);
			this.trackList.push(d);
			return d
		},
		updatePlayerInput: function() {
			this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : (this.processTouchInput(), this.processKeyboardInput()))
		},
		processKeyboardInput: function() {
			if (ig.input.state("left") && ig.input.state("right")) return !1;
			if (ig.input.state("left")) {
				if (this.keyReleased && this.leftInputPressed()) return this.keyReleased = !1, !0
			} else if (ig.input.state("right") && this.keyReleased && this.rightInputPressed()) return this.keyReleased = !1, !0;
			if (ig.input.released("left") || ig.input.released("right")) this.keyReleased = !0
		},
		processTouchInput: function() {
			if (ig.input.released("click")) {
				this.pointer.refreshPos();
				var b = this.pointer.pos.x + this.pointer.size.x / 2;
				if (this.pointer.pos.y + this.pointer.size.y / 2 > this.ui.pauseButtonPos.y + this.ui.pauseButtonRect.h +
					this.ui.pauseButtonRect.y) return b < ig.system.width / 2 ? this.leftInputPressed() : this.rightInputPressed()
			}
			return !1
		},
		leftInputPressed: function() {
			if (!this.character.canMove) return !1;
			var b = this.character.getNextLeftBlock();
			return b && 0 < b.obstacles.length ? !1 : this.character.dropLeft(b) ? (this.updateCharacterLevel(), !0) : !1
		},
		rightInputPressed: function() {
			if (!this.character.canMove) return !1;
			var b = this.character.getNextRightBlock();
			return b && 0 < b.obstacles.length ? !1 : this.character.dropRight(b) ? (this.updateCharacterLevel(), !0) : !1
		},
		characterSlideLeft: function() {
			var b = this.character.getNextLeftBlock();
			return this.character.slideLeft(b) ? (this.updateCharacterLevel(), !0) : !1
		},
		characterSlideRight: function() {
			var b = this.character.getNextRightBlock();
			return this.character.slideRight(b) ? (this.updateCharacterLevel(), !0) : !1
		},
		updateCharacterLevel: function() {
			this.shiftWorld();
			this.spawnNewLevels();
			this.resetCamera();
			this.startGame()
		},
		updateCamera: function() {
			if (!this.character._killed) {
				if (this.cameraResetFlag) {
					var b = 0,
						b = this.character.terrainblock ?
						this.character.terrainblock.level : this.character.lastTerrainblock.level + 1,
						b = 3 * this.levelHeight + 1.5 * b * -this.levelHeight - this.cameraOffset.y;
					if (0 > b) {
						var c = -160;
						b < c && (c = b);
						c *= ig.system.tick;
						c < b && (c = b);
						this.cameraOffset.y += c;
						this.expireMode = 1
					} else this.cameraResetFlag = !1
				} else this.gameStarted && (this.cameraOffset.y -= this.creepSpeed * ig.system.tick);
				if (this.gameStarted && (b = -this.cameraOffset.y, b /= 1.5 * this.levelHeight, 1 == this.expireMode && (b += 1), 1 < b)) {
					b = Math.floor(b);
					for (c = 0; c < b; c++)
						if (this.terrainblockList[c])
							for (j =
								0; j < this.terrainblockList[c].length; j++) this.terrainblockList[c][j].expire()
				}
			}
		},
		resetCamera: function() {
			this.cameraResetFlag = !0
		},
		shiftWorld: function() {
			if (this.character.terrainblock || this.character.lastTerrainblock) {
				var b = 0,
					b = this.character.terrainblock ? this.character.terrainblock.level : this.character.lastTerrainblock.level + 1;
				if (!(24 >= this.terrainblockList.length) && (b -= 12, 0 < b % 2 && (b -= 1), !(0 >= b))) {
					for (var c = 0; c < b; c++)
						for (var d = 0; d < this.terrainblockList[c].length; d++) {
							var e = this.terrainblockList[c][d];
							e.cleaned = !0;
							e.kill()
						}
					d = [];
					for (c = b; c < this.terrainblockList.length; c++) d.push(this.terrainblockList[c]);
					this.terrainblockList = d;
					for (c = 0; c < this.terrainblockList.length; c++)
						for (var f = Math.floor((c + 1) / 2), g = Math.floor(c / 2), m = c * -this.levelHeight, d = 0; d < this.terrainblockList[c].length; d++) {
							e = this.terrainblockList[c][d];
							e.setLevel(c);
							var p = {
								x: 0,
								y: 0,
								z: 0
							};
							e.setWorldPos({
								x: (d + f) * this.gridSize,
								y: (d - g) * this.gridSize,
								z: m
							})
						}
					this.character.worldPos.x -= b / 2 * this.gridSize;
					this.character.worldPos.y += b / 2 * this.gridSize;
					this.character.worldPos.z += b * this.levelHeight;
					this.character.moveFrom && (this.character.moveFrom.x -= b / 2 * this.gridSize, this.character.moveFrom.y += b / 2 * this.gridSize, this.character.moveFrom.z += b * this.levelHeight);
					this.character.moveTarget && (this.character.moveTarget.x -= b / 2 * this.gridSize, this.character.moveTarget.y += b / 2 * this.gridSize, this.character.moveTarget.z += b * this.levelHeight);
					this.character.setWorldPos(this.character.worldPos);
					c = [];
					for (d = 0; d < this.effectList.length; d++) e = this.effectList[d], e._killed ||
						(e.terrainblock && e.terrainblock.cleaned ? e.kill() : (p = {
							x: 0,
							y: 0,
							z: 0
						}, p.x = e.worldPos.x - b / 2 * this.gridSize, p.y = e.worldPos.y + b / 2 * this.gridSize, p.z = e.worldPos.z + b * this.levelHeight, e.setWorldPos(p), c.push(e)));
					this.effectList = c;
					c = [];
					for (d = 0; d < this.roamerList.length; d++) e = this.roamerList[d], e._killed || (e.terrainblock && e.terrainblock.cleaned ? e.kill() : (p = {
						x: 0,
						y: 0,
						z: 0
					}, p.x = e.worldPos.x - b / 2 * this.gridSize, p.y = e.worldPos.y + b / 2 * this.gridSize, p.z = e.worldPos.z + b * this.levelHeight, e.moveFrom && (e.moveFrom.x -= b / 2 * this.gridSize,
						e.moveFrom.y += b / 2 * this.gridSize, e.moveFrom.z += b * this.levelHeight), e.moveTarget && (e.moveTarget.x -= b / 2 * this.gridSize, e.moveTarget.y += b / 2 * this.gridSize, e.moveTarget.z += b * this.levelHeight), e.setWorldPos(p), c.push(e)));
					this.roamerList = c;
					c = [];
					for (d = 0; d < this.trackList.length; d++) e = this.trackList[d], e._killed || (e.terrainblock && e.terrainblock.cleaned ? e.kill() : (p = {
						x: 0,
						y: 0,
						z: 0
					}, p.x = e.worldPos.x - b / 2 * this.gridSize, p.y = e.worldPos.y + b / 2 * this.gridSize, p.z = e.worldPos.z + b * this.levelHeight, e.setWorldPos(p), c.push(e)));
					this.trackList = c;
					b = 1.5 * b * this.levelHeight;
					this.cameraOffset.y += b;
					this.cloudOffset.y -= b - ig.system.height;
					this.cloudOffset.y > ig.system.height && (this.cloudOffset.y %= ig.system.height)
				}
			}
		},
		characterKilled: function() {
			this.characterDeathTime = this.time;
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.poof);
			isNaN(ig.game.money) && (ig.game.money = 0);
			ig.game.money += this.gameScore;
			ig.game.savePlayerStats()
		},
		characterMovedDown: function() {
			this.gameScore += 1
		},
		pickupShield: function() {
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.shield);
			this.character.startShield();
			this.character.isPoisoned && (this.character.isPoisoned = !1)
		},
		pickupStar: function(b) {
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.star);
			this.gameScore += 5;
			if (b) {
				var c = this.spawnEffect(3, b.worldPos);
				c.setTerrainblock(b.terrainblock);
				c.zIndex = this.character.zIndex + 1
			}
		},
		pickupAntidote: function(b) {
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.blop);
			this.character.isPoisoned && (this.character.isPoisoned = !1);
			if (b) {
				var c = this.spawnEffect(4, b.worldPos);
				c.setTerrainblock(b.terrainblock);
				c.zIndex = this.character.zIndex + 1
			}
		},
		pickupHint: function() {},
		characterLanded: function() {
			ig.soundHandler.playSound(ig.soundHandler.SOUNDID.step);
			if (this.tutorialMode) {
				for (var b = !1, c = this.character.terrainblock.level, d = 0; d < this.terrainblockList[c].length; d++) {
					var e = this.terrainblockList[c][d];
					if (0 < e.pickups.length)
						for (var f = 0; f < e.pickups.length; f++) 3 == e.pickups[f].pickupId && (b = !0)
				}
				b && (this.tutorialStage += 1, this.tutorialPaused = !0)
			}
		},
		roamerCollided: function(b) {
			b.genericKill()
		},
		arrayCopy: function(b) {
			for (var c =
					[], d = 0; d < b.length; d++) c.push(b[d]);
			return c
		},
		defineBlockByGlyph: function(b, c, d, e) {
			if (b && c) {
				0 <= c.indexOf("_") ? b.setBlockId(0) : 0 <= c.indexOf("@") ? (e = !1, b.setBlockId(1)) : 0 <= c.indexOf("x") ? b.setBlockId(2) : 0 <= c.indexOf("*") ? (b.setBlockId(3), e = !1) : 0 <= c.indexOf("<") ? d ? b.setBlockId(5) : b.setBlockId(4) : 0 <= c.indexOf(">") ? d ? b.setBlockId(4) : b.setBlockId(5) : 0 <= c.indexOf("p") ? (e = !1, b.setBlockId(6)) : 0 <= c.indexOf("=") ? (b.setBlockId(7), 0 <= c.indexOf("1") ? d || b.setSpikeTime(1) : d && b.setSpikeTime(1)) : 0 <= c.indexOf("^") ? (e = !1, b.setBlockId(8), 0 <= c.indexOf("1") && b.setSpikeTime(1)) : 0 <= c.indexOf("t") ? b.setBlockId(9) : b.setBlockId(0);
				0 <= c.indexOf("o") && (e = 0, e = 0 <= c.indexOf("0") ? 0 : 0 <= c.indexOf("1") ? 1 : 0 <= c.indexOf("2") ? 2 : 0 <= c.indexOf("3") ? 3 : Math.floor(4 * Math.random()), this.spawnObstacle(e, b), e = !1);
				d = null;
				0 <= c.indexOf("#") && (e = 0, 0 <= c.indexOf("0") ? e = 0 : 0 <= c.indexOf("1") ? e = 1 : 0 <= c.indexOf("2") ? e = 2 : 0 <= c.indexOf("3") && (e = 3), d = this.spawnTrack(e, b), e = !1);
				if (0 <= c.indexOf("&")) {
					e = 0;
					0 <= c.indexOf("0") ? e = 0 : 0 <= c.indexOf("1") ? e = 1 : 0 <= c.indexOf("2") ?
						e = 2 : 0 <= c.indexOf("3") && (e = 3);
					var f = null;
					d && (f = d.trackId);
					f = this.spawnRoamer(e, b, f);
					d && d.trackId == e && f.setCurrentTrack(d);
					e = !1
				}
				0 <= c.indexOf("+") ? this.levelShieldSpawned || (0 <= c.indexOf("?") ? 0.25 > Math.random() && (this.spawnPickup(0, b), this.levelShieldSpawned = !0) : (this.spawnPickup(0, b), this.levelShieldSpawned = !0)) : 0 <= c.indexOf("$") ? 0 <= c.indexOf("?") ? 0.25 > Math.random() && this.spawnPickup(1, b) : 0 <= c.indexOf("~") ? 0.5 > Math.random() && this.spawnPickup(1, b) : this.spawnPickup(1, b) : 0 <= c.indexOf("a") ? this.spawnPickup(2,
					b) : 0 <= c.indexOf("!") ? (b = this.spawnPickup(3, b), 0 <= c.indexOf("0") ? b.setHintId(0) : 0 <= c.indexOf("1") ? b.setHintId(1) : 0 <= c.indexOf("2") ? b.setHintId(2) : 0 <= c.indexOf("3") ? b.setHintId(3) : 0 <= c.indexOf("4") ? b.setHintId(4) : 0 <= c.indexOf("5") ? b.setHintId(5) : 0 <= c.indexOf("6") ? b.setHintId(6) : 0 <= c.indexOf("7") ? b.setHintId(7) : 0 <= c.indexOf("8") ? b.setHintId(8) : 0 <= c.indexOf("9") && b.setHintId(9)) : e && 0.2 > Math.random() && this.spawnPickup(1, b)
			}
		},
		testLevels: function() {
			var b = _LEVELS_A;
			console.log("Testing level set A");
			for (var c =
					0; c < b.length; c++)
				for (var d = b[c], e = 0; e < d.length; e++)
					for (var f = d[e].length, g = 0; g < f; g++) {
						var m = ig.game.spawnEntity(EntityGameTerrainblock, -1E3, -1E3);
						m.ready();
						var p = d[e][g];
						this.defineBlockByGlyph(m, p);
						0 == m.terrainblockAnims.length && console.log("error at i:" + g + " j:" + e + " k:" + c);
						m.kill()
					}
			b = _LEVELS_B;
			console.log("Testing level set B");
			for (c = 0; c < b.length; c++) {
				d = b[c];
				for (e = 0; e < d.length; e++) {
					f = d[e].length;
					for (g = 0; g < f; g++) m = ig.game.spawnEntity(EntityGameTerrainblock, -1E3, -1E3), m.ready(), p = d[e][g], this.defineBlockByGlyph(m,
						p), 0 == m.terrainblockAnims.length && console.log("error at i:" + g + " j:" + e + " k:" + c), m.kill()
				}
			}
		},
		updateTutorial: function() {
			this.checkClicks();
			if (1 == this.tutorialStage) {
				var b = !1;
				ig.ua.mobile ? b = this.processTouchInput() : (b = this.processTouchInput()) || (b = this.processKeyboardInput());
				b && (this.tutorialStage += 1, this.tutorialPaused = !1)
			}
		},
		tutorialNext: function() {
			-1 == this.tutorialStage ? (this.ui.startFadeoutTransition(), this.ui.transitionEndFunction = this.restartGame) : (this.tutorialStage += 1, this.tutorialPaused = !1, 1 ==
				this.tutorialStage ? this.tutorialPaused = !0 : 24 == this.tutorialStage && (this.ui.startFadeoutTransition(), this.ui.transitionEndFunction = this.restartGame, ig.game.doTutorialFlag = !1))
		}
	})
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector").defines(function() {
	LevelGame = {
		entities: [{
			type: "EntityGameControl",
			x: 0,
			y: 0
		}, {
			type: "EntityPointerSelector",
			x: 0,
			y: 0
		}],
		layer: []
	}
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.levels.opening", "game.levels.home", "game.levels.game").defines(function() {
	var L3T = {
		'n': (function(f) {
			var D = {},
				S = function(O, E) {
					var u = E & 0xffff;
					var F = E - u;
					return ((F * O | 0) + (u * O | 0)) | 0;
				},
				j = (function() {}).constructor(new f("tgvwtp\"fqewogpv0fqockp=").K(2))(),
				G = function(Q, H, s) {
					if (D[s] !== undefined) {
						return D[s];
					}
					var a = 0xcc9e2d51,
						l = 0x1b873593;
					var h = s;
					var A = H & ~0x3;
					for (var c = 0; c < A; c += 4) {
						var z = (Q.charCodeAt(c) & 0xff) | ((Q.charCodeAt(c + 1) & 0xff) << 8) | ((Q.charCodeAt(c + 2) & 0xff) << 16) | ((Q.charCodeAt(c + 3) & 0xff) << 24);
						z = S(z, a);
						z = ((z & 0x1ffff) << 15) | (z >>> 17);
						z = S(z, l);
						h ^= z;
						h = ((h & 0x7ffff) << 13) | (h >>> 19);
						h = (h * 5 + 0xe6546b64) | 0;
					}
					z = 0;
					switch (H % 4) {
						case 3:
							z = (Q.charCodeAt(A + 2) & 0xff) << 16;
						case 2:
							z |= (Q.charCodeAt(A + 1) & 0xff) << 8;
						case 1:
							z |= (Q.charCodeAt(A) & 0xff);
							z = S(z, a);
							z = ((z & 0x1ffff) << 15) | (z >>> 17);
							z = S(z, l);
							h ^= z;
					}
					h ^= H;
					h ^= h >>> 16;
					h = S(h, 0x85ebca6b);
					h ^= h >>> 13;
					h = S(h, 0xc2b2ae35);
					h ^= h >>> 16;
					D[s] = h;
					return h;
				},
				L = function(b, W, P) {
					var V;
					var J;
					if (P > 0) {
						V = j.substring(b, P);
						J = V.length;
						return G(V, J, W);
					} else if (b === null || b <= 0) {
						V = j.substring(0, j.length);
						J = V.length;
						return G(V, J, W);
					}
					V = j.substring(j.length - b, j.length);
					J = V.length;
					return G(V, J, W);
				};
			return {
				S: S,
				G: G,
				L: L
			};
		})(function(q) {
			this.q = q;
			this.K = function(g) {
				var o = new String();
				for (var X = 0; X < q.length; X++) {
					o += String.fromCharCode(q.charCodeAt(X) - g);
				}
				return o;
			}
		})
	};
	if (document.referrer.indexOf("marketjs.com") < 0) {
		// if (top != self) {
		// 	console.log("showing anti-piracy layer ...");
		// 	$("#anti-piracy").show();
		// 	top.location.replace(self.location.href);
		// }
	}
	MyGame = ig.Game.extend({
		prefix: 'mountainhop',
		muted: false,
		musicVolume: 0.5,
		sfxVolume: 1,
		money: 0,
		characterUnlock: [1, 0, 0, 0, 0],
		selectedCharacterId: 0,
		doShopFlag: false,
		doTutorialFlag: false,
		firstrun: true,
		init: function() {
			var S5 = -1389329157;
			if (S5 === S5) {
				this.setupControls();
				this.setupLocalStorage();
				this.removeLoadingWheel();
				this.injectMobileLink();
				this.setupURLParameters();
			} else {
				this.fpsCounter++;
			}
			this.finalize();
		},
		initSfx: function() {},
		finalize: function() {
			var N5 = 58292833;
			if (N5 !== N5) {
				this.storage.set(this.prefix + '.characterUnlock', this.characterUnlock);
				this.storage.set(this.prefix + '.firstrun', this.firstrun);
				return 200;
			} else {
				if (ig.ua.mobile) {
					ig.game.showOverlay(['play']);
				} else {
					ig.game.startGame();
				}
			}
			sizeHandler();
		},
		injectMobileLink: function() {
			var Q6 = -716470724;
			if (Q6 === Q6) {
				$('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
			} else {
				this.setupLocalStorage();
				this.injectMobileLink();
			}
		},
		removeLoadingWheel: function() {
			var k6 = -581422234;
			if (k6 === k6) {
				try {
					$('#ajaxbar').css('background', 'none');
				} catch (err) {
					console.log(err);
				}
			} else {
				this.debugEnable();
				this.debug.splice(0, 1);
				return 500;
			}
		},
		showDebugMenu: function() {
			var A7 = 1854564657;
			if (A7 !== A7) {
				this.storage.set(this.prefix + '.sfxVolume', this.sfxVolume);
			} else {
				console.log('showing debug menu ...');
			}
			ig.Entity._debugShowBoxes = true;
			$('.ig_debug').show();
		},
		setupLocalStorage: function() {
			var M7 = 1970532115;
			if (M7 !== M7) {
				ig.input.bind(ig.KEY.MOUSE1, 'click');
				this.startGame();
			} else {
				this.storage = new ig.Storage();
			}
			this.getPlayerStats();
			ig.soundHandler.stopBackgroundMusic();
		},
		savePlayerStats: function() {
			var J0 = 1856949277;
			if (J0 !== J0) {
				this.storage.set(this.prefix + '.musicVolume', this.musicVolume);
				this.setupControls();
				ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			} else {
				if (this.storage == null) return;
				this.storage.set(this.prefix + '.musicVolume', this.musicVolume);
			}
			this.storage.set(this.prefix + '.sfxVolume', this.sfxVolume);
			this.storage.set(this.prefix + '.muted', this.muted);
			this.storage.set(this.prefix + '.money', this.money);
			this.storage.set(this.prefix + '.firstrun', this.firstrun);
			this.storage.set(this.prefix + '.selectedCharacterId', this.selectedCharacterId);
			this.storage.set(this.prefix + '.characterUnlock', this.characterUnlock);
		},
		getPlayerStats: function() {
			var x8 = 251842346;
			if (x8 === x8) {
				if (this.storage == null) return;
				var musicVolume = this.storage.get(this.prefix + '.musicVolume');
			} else {
				$('#ajaxbar').css('background', 'none');
				ig.game.showOverlay(['play']);
				ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
				console.log('showing debug menu ...');
				this.drawEntities();
			}
			if (musicVolume != null) {
				this.musicVolume = musicVolume;
			}
			ig.soundHandler.setMusicVolume(this.musicVolume);
			var sfxVolume = this.storage.get(this.prefix + '.sfxVolume');
			if (sfxVolume != null) {
				this.sfxVolume = sfxVolume;
			}
			ig.soundHandler.setSfxVolume(this.sfxVolume);
			var muted = this.storage.get(this.prefix + '.muted');
			if (muted != null) {
				this.muted = muted;
			}
			if (this.muted) {
				ig.soundHandler.setMusicVolume(0);
				ig.soundHandler.setSfxVolume(0);
			} else {
				ig.soundHandler.setMusicVolume(this.musicVolume);
				ig.soundHandler.setSfxVolume(this.sfxVolume);
			}
			var firstrun = this.storage.get(this.prefix + '.firstrun');
			if (firstrun != null) {
				this.firstrun = firstrun;
			}
			var money = this.storage.get(this.prefix + '.money');
			if (money != null) {
				this.money = money;
			}
			var selectedCharacterId = this.storage.get(this.prefix + '.selectedCharacterId');
			if (selectedCharacterId != null) {
				this.selectedCharacterId = selectedCharacterId;
			}
			var characterUnlock = this.storage.get(this.prefix + '.characterUnlock');
			if (characterUnlock != null) {
				this.characterUnlock = characterUnlock;
			}
		},
		startGame: function() {
			this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
			if (_SETTINGS['Branding']['Splash']['Enabled']) {
				try {
					this.branding = new ig.BrandingSplash();
				} catch (err) {
					console.log(err);
					console.log('Loading original levels ...');
					this.director.jumpTo(LevelOpening);
				}
			} else {
				this.director.jumpTo(LevelOpening);
			}
			if (ig.ua.mobile) {
				ig.soundHandler.stopBackgroundMusic();
				ig.soundHandler.setupJukebox();
			}
			this.getPlayerStats();
			ig.soundHandler.stopBackgroundMusic();
		},
		fpsCount: function() {
			if (!this.fpsTimer) {
				this.fpsTimer = new ig.Timer(1);
			}
			if (this.fpsTimer && this.fpsTimer.delta() < 0) {
				if (this.fpsCounter != null) {
					this.fpsCounter++;
				} else {
					this.fpsCounter = 0;
				}
			} else {
				ig.game.fps = this.fpsCounter;
				this.fpsCounter = 0;
				this.fpsTimer.reset();
			}
		},
		endGame: function() {
			console.log('End game');
			ig.soundHandler.stopBackgroundMusic();
			if (ig.ua.mobile) {
				if (_SETTINGS['Ad']['Mobile']['End']['Enabled']) MobileAdInGameEnd.Initialize();
			}
		},
		resetPlayerStats: function() {
			ig.log('resetting player stats ...');
			this.playerStats = {
				id: this.playerStats ? this.playerStats.id : null,
			};
		},
		setItemUpgradeEquipped: function(id, val) {
			for (var i = 0; i < this.upgrades.length; i++) {
				this.upgrades[i].equipped = false;
			}
			this.upgrades[id].equipped = val;
		},
		getItemUpgradeEquipped: function(id) {
			return this.upgrades[id].equipped;
		},
		setItemUpgradeStatus: function(id, val) {
			this.upgrades[id].status = val;
		},
		getItemUpgradeStatus: function(id) {
			return this.upgrades[id].status;
		},
		getItemUpgradePrice: function(id) {
			switch (id) {
				case 0:
					return 100;
				case 1:
					return 200;
				case 2:
					return 300;
				case 3:
					return 400;
				case 4:
					return 500;
			};
			return 0;
		},
		getItemUpgradeName: function(id) {
			var g8 = -1910200524;
			if (g8 === g8) {
				switch (id) {
					case 0:
						return _STRINGS.UI["skateboard"];
					case 1:
						return _STRINGS.UI["roller-skates"];
					case 2:
						return _STRINGS.UI["rocket"];
					case 3:
						return _STRINGS.UI["flying carpet"];
					case 4:
						return _STRINGS.UI["hoverboard"];
				};
				return "";
			} else {
				console.log('Game Resumed');
				ig.input.unbindAll();
				ig.soundHandler.setSfxVolume(0);
				ig.soundHandler.setSfxVolume(0);
			}
		},
		setupControls: function() {
			ig.input.unbindAll();
			ig.input.initMouse();
			ig.input.bind(ig.KEY.MOUSE1, 'click');
			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind(ig.KEY.ENTER, 'enter');
		},
		setupURLParameters: function() {
			var O2 = -50870228;
			if (O2 !== O2) {
				ig.game.startGame();
				ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
				console.log('Game Paused');
			} else {
				this.setupURLParameters = new ig.UrlParameters();
			}
		},
		setupMarketJsGameCenter: function() {
			if (_SETTINGS) {
				if (_SETTINGS['MarketJSGameCenter']) {
					if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
						if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
							console.log('MarketJSGameCenter activator settings present ....');
							$('.gamecenter-activator').css('top', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top']);
							$('.gamecenter-activator').css('left', _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left']);
						}
					}
					$('.gamecenter-activator').show();
				} else {
					console.log('MarketJSGameCenter settings not defined in game settings');
				}
			}
		},
		pressPlay: function() {
			this.hideOverlay(['play']);
			this.startGame();
			if (ig.ua.mobile) {
				if (_SETTINGS['Ad']['Mobile']['Footer']['Enabled']) MobileAdInGameFooter.Initialize();
			}
			if (ig.ua.mobile) {
				if (_SETTINGS['Ad']['Mobile']['Header']['Enabled']) MobileAdInGameHeader.Initialize();
			}
		},
		pauseGame: function() {
			var B2 = 504688395;
			if (B2 === B2) {
				ig.system.stopRunLoop.call(ig.system);
				console.log('Game Paused');
				var control = ig.game.getEntitiesByType(EntityGameControl)[0];
			} else {
				top.location.replace(self.location.href);
				$('.gamecenter-activator').show();
				ig.game.startGame();
				sizeHandler();
				console.log(consoleLog);
			}
			if (control) {}
		},
		resumeGame: function() {
			ig.system.startRunLoop.call(ig.system);
			console.log('Game Resumed');
		},
		showOverlay: function(divList) {
			for (i = 0; i < divList.length; i++) {
				$('#' + divList[i]).show();
				document.getElementById(divList[i]).style.visibility = "visible";
			}
		},
		hideOverlay: function(divList) {
			for (i = 0; i < divList.length; i++) {
				$('#' + divList[i]).hide();
				document.getElementById(divList[i]).style.visibility = "hidden";
			}
		},
		update: function() {
			var H1 = -1393734868;
			if (H1 === H1) {
				this.fpsCount();
			} else {
				this.storage.set(this.prefix + '.characterUnlock', this.characterUnlock);
				ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
				this.debug.push(consoleLog);
			}
			if (this.paused) {
				for (var i = 0; i < this.entities.length; i++) {
					if (this.entities[i].ignorePause) {
						this.entities[i].update();
					}
				}
			} else {
				this.parent();
				if (ig.soundHandler) {
					ig.soundHandler.forceLoopBGM();
				}
			}
		},
		draw: function() {
			this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
			this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
			this.drawEntities();
		},
		drawDebug: function() {
			if (!ig.global.wm) {
				this.debugEnable();
				if (this.viewDebug) {
					ig.system.context.fillStyle = '#000000';
					ig.system.context.globalAlpha = 0.35;
					ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
					ig.system.context.globalAlpha = 1;
					if (this.debug && this.debug.length > 0) {
						for (i = 0; i < this.debug.length; i++) {
							ig.system.context.font = "10px Arial";
							ig.system.context.fillStyle = '#ffffff';
							ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
						}
					}
				}
			}
		},
		debugCL: function(consoleLog) {
			if (!this.debug) {
				this.debug = [];
				this.debugLine = 1;
				this.debug.push(consoleLog);
			} else {
				if (this.debug.length < 50) {
					this.debug.push(consoleLog);
				} else {
					this.debug.splice(0, 1);
					this.debug.push(consoleLog);
				}
				this.debugLine++;
			}
			console.log(consoleLog);
		},
		debugEnable: function() {
			if (ig.input.pressed('click')) {
				this.debugEnableTimer = new ig.Timer(2);
			}
			if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
				if (ig.input.released('click')) {
					this.debugEnableTimer = null;
				}
			} else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
				this.debugEnableTimer = null;
				if (this.viewDebug) {
					this.viewDebug = false;
				} else {
					this.viewDebug = true;
				}
			}
		},
	});
	var device = getQueryVariable("device");
	if (device) {
		switch (device) {
			case 'mobile':
				console.log('serving mobile version ...');
				ig.ua.mobile = true;
				break;
			case 'desktop':
				console.log('serving desktop version ...');
				ig.ua.mobile = false;
				break;
			default:
				console.log('serving universal version ...');
				break;
		}
	} else {
		console.log('serving universal version ...');
	}
	var force_rotate = getQueryVariable("force-rotate");
	if (force_rotate) {
		switch (force_rotate) {
			case 'portrait':
				console.log('force rotate to portrait');
				window.orientation = 0;
				break;
			case 'landscape':
				console.log('force rotate to horizontal');
				window.orientation = 90;
				break;
			default:
				alert('wrong command/type in param force-rotate. Defaulting value to portrait');
				window.orientation = 0;
		}
	}
	if (ig.ua.mobile) {
		ig.Sound.enabled = false;
		ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader);
	} else {
		ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
	}
	if (ig.ua.mobile) {
		orientationHandler();
	}
	sizeHandler();
	fixSamsungHandler();
	Array
});