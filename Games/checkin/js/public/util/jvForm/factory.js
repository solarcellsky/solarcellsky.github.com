/**
 * ܹԚjQueryքһ࠮ݲzքҭեҩ֤ӥݾ
 * ˼Ыú©ܮì׽ң
 * @author úYison
 */

 /**
  * @example
	$.jvForm([
		{
			obj : $("[name=username]"),
			trigger : ['blur'],
			rule : ['required'],
			success : function() {
				//TO DO
			},
			failure : function() {
				//TO DO
			},
			listened : false
		},
		{
			obj : $("[name=password]"),
			trigger : ['focus'],
			rule : function() {
				this.setType('required','password');
				if(xxxx !== xxx) {
					return false;
				}
				return true;
			}
			listened : true;
		}],{
			submit : $(),
			before : function() {
				//TO DO
			},
			success: function() {
				//TO DO
			}
		});

		$.jvForm.addValidate("[name=username]",{
			trigger : ['blur'],
			rule : ['required'],
			success : function() {
				//TO DO
			},
			failure : function() {
				//TO DO
			},
			listened : false
		});

		$.jvForm.listener("[name=submit]",{
			before : function() {
				//TO DO
			},
			success : function() {
				//TO DO
			},
			failure : function() {
				//TO DO
			}
		]);


  */

define(function(require, exports) {

	$.extend({

		jvForm  :function(){

			var listenedPool = [],
				   readySubmit = true;

			var defaultConf = {
				degbug : true
			};

			var tracelog = function() {

			};

			var validatorPool = {
				'required' : function(obj){
					if(obj.val().length === 0) {
						return false;
					}
					return true;
				},
				'number' : '/^[0-9]*$/',
				'chinese' : '[u4e00-u9fa5]',
				'english' : '',

				'mobile' : /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,

				'selected' : '',
				'checked' : '',
				'limited' : [0,10],
				'email' : '/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.\-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/',
				'url' : /[a-zA-z]+:\/\/[^\s]*/,
				'qq' : '[1-9][0-9]{4,}',

				'username' : '/^[a-zA-Z]{1,30}$/',

				'password' : '/^([a-zA-Z0-9]){6,16}$/'
			};

			var validatorPoolTest = function(obj,validator) {
				if(validatorPool.hasOwnProperty(validator)) {
					//function mode
					if(typeof validatorPool[validator] === 'function') {
						return validatorPool[validator].call(this,obj) ;
					}
					//regx mode
					else if(typeof validatorPool[validator] === 'string') {
						return eval(validatorPool[validator]).test($.trim(obj.val()));
					} else {
						return validatorPool[validator].test($.trim(obj.val()));
					}
				}else{
					if(typeof validator === 'object' ) {
						var flag = true;
						for(var key in validator) {
							if(key === 'minValue') {
								if(obj.val() < validator[key]){
									flag = false;
								}
							}else if(key === 'maxValue') {
								if(obj.val() > validator[key]){
									flag = false;
								}
							}
						}
						return flag ;
					}
				}
			}

			var listenedPoolQuery = function(obj) {
				for(var key in listenedPool) {
					if (obj == listenedPool[key]['obj']) {
						return true;
					}
				}
				return false;
			}

			var setupTrigger = function(params) {
				var triggers = [
						  'mouseover',
						  'mouseout',
						  'change',
						  'click',
						  'focus',
						  'blur'
					  ],
					  trigger;

				if(params['trigger'] !== undefined) {
					trigger = params['trigger'];

					if(params['listened'] === true && !listenedPoolQuery(params['obj'])) {
						listenedPool.push({
							obj : params['obj'],
							trigger : params['trigger'][0]
						});
					}

					var run = true ;

					for(var i in trigger) {
						if(run === false) {
							break;
						}
						if(inArray(triggers, trigger[i])) {
							params['obj'].bind( trigger[i], function() {
								run = validateAct( params['obj'], params['rule'], params['action'] ) ;
								if(run !== true) {
									readySubmit = false ;
								}
							} );
						}
					}
				}
			}

			var validateAct = function(obj, rule, action) {
				var succeed = action['success'],
					  fail = action['failure'],
					  result = true ;

				//validate the object by the rule
				if(rule !== undefined) {
					//{mode}
					if(isArray(rule)) {
						for(var key in rule) {
							if(!validatorPoolTest(obj,rule[key])) {
								result = false;
							}
						}
					}
					//function
					else if(typeof rule === 'function') {
						if(!rule()) {
							result = false;
						}
					}
					//regx
					else {
						if(typeof rule === 'object') {
							if(!rule.test(obj.val())) {
								result = false ;
							}
						}
					}
				}

				//excute the result action
				if(result === true) {
					succeed();
					return true;
				}else {
					fail();
					return false;
				}

			}

			var inArray = function(arr, el) {
				for(var i in arr) {
					if(el === arr[i]) {
						return true;
					}
				}
				return false;
			}

			var isArray = function(m) {
				return typeof m === 'object' &&
							typeof m.length === 'number' &&
							typeof m.slice === 'function' &&
							!(m.propertyIsEnumerable('length'));
			}

			var defineAction = function(m) {
				for(var key in m) {
					switch(key) {
						case 'addClass' :
							return function() {
								$(this).addClass(m[key]);
							}
							break;
						case 'removeClass' :
							return function() {
								$(this).removeClass(m[key]);
							}
						break;
						default : ;
					}
				}
			};

			//build params  function
			var	buildParams = function(com,obj) {
				var params = {
					obj : {},
					trigger : [],
					rule : {},
					action : {}
				};

				if(obj !== undefined && obj.length !== 0 ) {
					params['obj'] = obj ;
				}else {
					params['obj'] = com['obj'] !== undefined ? com['obj'] : {}
				}

				if(params['obj'] === {}) {
					return ;
				}

				if( com['trigger'] !== undefined ) {
					params['trigger'] = com['trigger'];
				}
				if( com['rule'] !== undefined ) {
					params['rule'] = com['rule'];
				}

				var action = {
					success: function(){},
					failure: function(){}
				} ;

				if( com['success'] !== undefined ) {
					action['success'] = typeof com['success'] !== 'function'
													? defineAction(com['success'])
													:  com['success'] ;
				}

				if( com['failure'] !== undefined ) {
					action['failure'] = typeof com['failure'] !== 'function'
												 ? defineAction(com['failure'])
												 :  com['failure'] ;
				}

				params['action'] = action;

				params['listened'] = com['listened'] !== 'undefined'
												  ? com['listened']
												  :  true ;

				setupTrigger(params);

			};

			var submitValidate = function() {

				readySubmit = true;

				//表单提交统一验证
				for(var key in listenedPool) {
					listenedPool[key]['obj'][listenedPool[key]['trigger']]() ;
				}

				return readySubmit ;

			};

			var submitListen = function(obj,com) {

				if(com !== 'undefined' &&
					typeof com === 'object') {

					submitObj = typeof obj === 'object' &&  obj.length > 0
									? obj
									: $(obj);

					var submitAct = {
							beforeValid : function(){},
							validSucceed : {},
							validFail : function(){}
						};

					if( com['beforeValid'] !== 'undefined' &&
						 typeof com['beforeValid'] === 'function' ) {

						submitAct['beforeValid'] = com['beforeValid'] ;
					}

					if( com['validSucceed'] !== 'undefined' &&
						 typeof com['validSucceed'] === 'object' ) {

						submitAct['validSucceed'] = com['validSucceed'] ;
					}

					if( com['validFail'] !== 'undefined' &&
						 typeof com['validFail'] === 'function' ) {

						submitAct['validFail'] = com['validFail'] ;
					}

					if(submitObj !== {}) {
						submitObj.bind("click",function(event) {
							event.preventDefault();

							if($(this).hasClass("disabled")) {
								return ;
							}

							(submitAct['beforeValid'])() ;

							if( submitValidate() ) {

								var successAction = submitAct['validSucceed'] ;
								if(typeof successAction['beforeSubmit'] !== undefined) {
									(successAction['beforeSubmit'])();
								}

								if(successAction['success'] !== undefined) {
									(successAction['success'])();
								}

								if(successAction['form'] !== undefined) {

									var formConf =  successAction['form'];
									if(formConf['obj'] !== undefined) {

										if(formConf['method'] !== undefined) {
											formConf['obj'].attr('method',formConf['method']);
										}

										if(formConf['action'] !== undefined) {
											formConf['obj'].attr('action',formConf['action']);
										}

										(formConf['obj']).submit();
									}

								}

							} else {
								(submitAct['validFail'])() ;
							}
						})
					}
				}
			};

			return {

				//config setting of the plugin
				config : function() {
					defaultConf = $.extend( {}, defaulConf, arguments );
				},

				//packed validating setting
				validate : function(comConf, listenerConf) {

					var argsLen = arguments.length,
						  com,
						  params,
						  obj,
						  submitObj ;

					for(var el in comConf) {
						if( typeof comConf[el] !== 'object' ) {
							return ;
						}

						com = comConf[el] ;

						buildParams(com);
					}

					submitListen(listenerConf['submit'],listenerConf);

				},




				//Form elements validation binding
				addValidate : function(obj , com) {
					var obj,
						   params;

					if( typeof obj !== 'string' ||
						 $(obj).length === 0 ||
						 typeof com !== 'object' ) {

						return ;
					}

					obj = $(obj);

					buildParams(com,obj);

				},

				listener : function(obj,com) {
					submitListen(obj,com);
				},


				//Form submit events binding
				setup : function() {

				},

				//Use validator pool function
				setType : function() {

				}

			}

		}

	});

	return $.jvForm();

});
