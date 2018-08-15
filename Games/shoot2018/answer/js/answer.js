/**
 * 答题
 * Author 蓝鼻子的驯鹿
 * Build 2018-07-17
 * Contact 523786040@qq.com
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define( factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		window.Answer = window.Answer || factory();
	}
})(this, function () {
	function Answer(_opt){
		_opt=_opt||{};
		this.config=_opt.config||{};
		this.callback=_opt.callback;
		this.lang=_opt.lang||{
			questionTitle: '答题复活',
			questionOptionNull:'请选择答案!',
			successTitle: '回答正确',
			successMsg:'没毛病，大兄弟！',
			failTitle: '回答错误',
			failMsg:'大兄弟，再练练吧！',
			answerMsg:'正确答案：',
			successButton:'继续',
			failButton:'返回',
			button:'确定'
		};
		this.questions=_opt.questions||[
			{
				title:'射击气手枪项目单发最高环数为多少环？',
				options:{
					'A':'10.0',
					'B':'10.9',
					'C':'9.9',
					'D':'10.8'
				},
				tip:'最高环数为10.9',
				result:'B'
			},
			{
				title:'参加奥运会次数最多的中国射击运动员是谁？',
				options:{
					'A':'许海峰',
					'B':'谭宗亮',
					'C':'张山',
					'D':'王义夫'
				},
				tip:'王义夫6次参加奥运会',
				result:'D'
			},
			{
				title:'在气步枪混合团体赛淘汰赛中，两名运动员的击发顺序是怎样的？',
				options:{
					'A':'同时击发',
					'B':'左先右后',
					'C':'右先左后',
					'D':'随意击发'
				},
				tip:'击发顺序是左先右后',
				result:'B'
			},
			{
				title:'从2002年到2014年的4届亚运会中，中国代表团首金有几次被射击队摘得？',
				options:{
					'A':'1次',
					'B':'2次',
					'C':'3次',
					'D':'4次'
				},
				tip:'2006年和2014年被射击队摘得',
				result:'B'
			},
			{
				title:'在国际射联最新产生的10项世界纪录中，有一个亚洲国家囊括5项，请问是哪个国家？',
				options:{
					'A':'印度',
					'B':'韩国',
					'C':'中国',
					'D':'日本'
				},
				tip:'最新10项世界纪录，印度拿到5项',
				result:'A'
			},
			{
				title:'在国际射联最新一期12项世界排名中，中国选手在几个项目上排名世界第一？',
				options:{
					'A':'1',
					'B':'2',
					'C':'3',
					'D':'5'
				},
				tip:'男子25米手枪速射和女子10米气步枪项目上排名世界第一项目上排名世界第一',
				result:'B'
			},
			{
				title:'在里约奥运会上，一个东南亚国家的射击运动员为该国实现了奥运会金牌零的突破，请问这是哪个国家？',
				options:{
					'A':'马来西亚',
					'B':'泰国',
					'C':'印度尼西亚',
					'D':'越南'
				},
				tip:'41岁的越南老将黄春荣为越南拿到奥运参赛史上首枚金牌',
				result:'D'
			},
			{
				title:'2018年亚运会射击比赛在哪个赛区进行？',
				options:{
					'A':'雅加达1号场馆群',
					'B':'雅加达2号场馆群',
					'C':'雅加达周边',
					'D':'巨港'
				},
				tip:'2018年亚运会射击比赛在巨港赛区进行',
				result:'D'
			}
		];
		this.init();
	}
	Answer.prototype={
		constructor:Answer,
		init:function(_config){
			var _t=this;
			_t.renderLayout().getQuestion().renderQuestion();
			return _t;
		},
		renderLayout:function(){
			var _t=this;
			document.body.innerHTML=`
			<div class="site-body">
				<div class="angle-box dialog-box">
					<div class="angle-box dialog-header">
						<div class="angle-box rectangle dialog-title">
							<div class="dialog-title-body"></div>
							<div class="angle angle-lt"></div>
							<div class="angle angle-rt"></div>
							<div class="angle angle-lb"></div>
							<div class="angle angle-rb"></div>
						</div>
						<div class="header-left"><div class="angle angle-lt"></div></div>
						<div class="header-right"><div class="angle angle-rt"></div></div>
						<div class="header-center"></div>
					</div>
					<div class="dialog-body"></div>
					<div class="angle angle-lb"></div>
					<div class="angle angle-rb"></div>
				</div>
			</div>
			<div class="site-bg"></div>`;
			_t.el={};
			_t.el.dialogTitleBody=document.querySelector('.dialog-title-body');
			_t.el.dialogBody=document.querySelector('.dialog-body');
			_t.el.dialogBody.addEventListener('touchstart',touch,false);
			_t.el.dialogBody.addEventListener('touchend',touch,false);
			function touch(_e){
				_e=_e || window.event;
				var _el=_e.target;
				if(_el.classList.contains('button')){
					if(_e.type==='touchstart'){
						_el.classList.add('active');
					}else{
						_el.classList.remove('active');
					}
				}
			}
			return _t;
		},
		getQuestion:function(){
			var _t=this;
			_t.questionIndex=parseInt(Math.random()*1000)%_t.questions.length;
			_t.question=_t.questions[_t.questionIndex];
			return _t;
		},
		renderQuestion:function(){
			var _t=this;
			var _el=_t.el;
			var _lang=_t.lang;
			var _question=_t.question;
			var _questionOptionHtml='';
			_el.dialogTitleBody.innerHTML=_lang.questionTitle;
			for(var _key in _question.options) {
				_questionOptionHtml+=`
					<li class="angle-box rectangle inset question-option" data-key="${_key}">
						<div class="question-option-body"><span class="key">${_key}</span><span>${_question.options[_key]}</span></div>
						<div class="angle angle-lt"></div>
						<div class="angle angle-rt"></div>
						<div class="angle angle-lb"></div>
						<div class="angle angle-rb"></div>
					</li>`;
			}
			_el.dialogBody.innerHTML=`
				<div class="question-box">
					<div class="question-title">${_question.title}</div>
					<ul class="question-option-list">
					${_questionOptionHtml}
					</ul>
					<a class="button question-button">${_lang.button}</a>
				</div>`;
			_el.questionButton=document.querySelector('.question-button');
			_el.questionOptions=document.querySelectorAll('.question-option');
			for (var _i=0; _i<_el.questionOptions.length; _i++) {
					_el.questionOptions[_i].addEventListener('click',function(){
					if(_el.questionOptionSelected){
						_el.questionOptionSelected.classList.remove('selected');
					}
					_el.questionOptionSelected=this;
					_el.questionOptionSelected.classList.add('selected');
				},false);
			}
			_el.questionButton.addEventListener('click',function(){
				if(_el.questionOptionSelected){
					_t.renderResult(_question.result===_el.questionOptionSelected.getAttribute('data-key'));
				}else{
					alert(_lang.questionOptionNull);
				}
			},false);
			return _t;
		},
		renderResult:function(_result){
			var _t=this;
			var _el=_t.el;
			var _lang=_t.lang;
			var _resultTitle;
			var _resultMsg;
			var _resultButton;
			var _question=_t.question;
			if(_result){
				_resultTitle=_lang.successTitle;
				_resultMsg=_lang.successMsg;
				_resultButton=_lang.successButton;
			}else{
				_resultTitle=_lang.failTitle;
				_resultMsg=_lang.failMsg;
				_resultButton=_lang.failButton;
			}
			_el.dialogTitleBody.innerHTML=_resultTitle;
			_el.dialogBody.innerHTML=`
				<div class="result-box ${_result?'success':'fail'}">
					<div class="result-msg-box">
						<div class="result-icon"><div class="icon"></div><div class="bg"></div></div>
						<div class="result-msg">${_resultMsg}</div>
					</div>
					<div class="result-answer-box">
						<div class="angle-box rectangle result-answer">
							<div class="result-answer-body">${_lang.answerMsg}<span class="key">${_question.result}</span></div>
							<div class="angle angle-lt"></div>
							<div class="angle angle-rt"></div>
							<div class="angle angle-lb"></div>
							<div class="angle angle-rb"></div>
						</div>
						<div class="angle-box rectangle result-tip">
							<div class="result-tip-body">${_question.tip}</div>
							<div class="angle angle-lt"></div>
							<div class="angle angle-rt"></div>
							<div class="angle angle-lb"></div>
							<div class="angle angle-rb"></div>
						</div>
					</div>
					<a class="button result-button">${_resultButton}</a>
				</div>`;
			_el.resultButton=document.querySelector('.result-button');
			_el.resultBox=document.querySelector('.result-box');
			_el.resultButton.addEventListener('click',function(){
				_t.runFunction(_t.callback,_result);
			},false);
			setTimeout(function(){_el.resultBox.classList.add('show')},10);
			return _t;
		},
		isFunction:function(_fun){
			return Object.prototype.toString.call(_fun)=='[object Function]';
		},
		runFunction:function(_fun){
			var _t=this;
			var _argsArray=null;
			if( _t.isFunction(_fun) ){
				_argsArray=Array.prototype.slice.call(arguments);
				_argsArray.shift();
				_fun.apply(_t,_argsArray);
				return true;
			}else{
				return false;
			}
		},
		_substitute:function (_tpl, _data, _type, _reg){
			var _str = '';
			_reg=_reg||/\\?\{{2,3}([^{}]+)\}{2,3}/g;
			if (typeof _tpl != 'string' || !_data){
				return _tpl;
			}
			_str = _tpl.replace(_reg, function(_match, _name){
				if (_match.charAt(0) === '\\'){
					return _match.slice(1);
				}
				var _arr=_name.split('.');
				var _value=_data;
				for(var _i=0; _i<_arr.length; _i++){
					_value=_value[_arr[_i]];
					if(_value === undefined || _value === null)
					{
						_value = '';
						break;
					}
				}
				if(_type == "url"){
					_value = encodeURIComponent(_value);
				}
				return _value;
			});
			return _str;
		},
		_formatDate:function(_data,_str){
			_str = _str || 'YYYY-MM-dd hh:mm:ss';
			_data = _data || new Date();
			var _o = {
				"M+": _data.getMonth() + 1, //月份
				"d+": _data.getDate(), //日
				"h+": _data.getHours(), //小时
				"m+": _data.getMinutes(), //分
				"s+": _data.getSeconds(), //秒
				"q+": Math.floor((_data.getMonth() + 3) / 3), //季度
				"S": _data.getMilliseconds() //毫秒
			};
			if (/([Y|y]+)/.test(_str)) _str = _str.replace(RegExp.$1, (_data.getFullYear() + '').substr(4 - RegExp.$1.length));
			for (var _k in _o)
			if (new RegExp("(" + _k + ")").test(_str)) _str = _str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (_o[_k]) : (('00' + _o[_k]).substr(('' + _o[_k]).length)));
			return _str;
		}
	}
	return Answer;
});