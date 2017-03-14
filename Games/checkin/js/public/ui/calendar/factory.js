/*! =========================================================
 * bootstrap-datepicker.js 
 * Original Idea: http://www.eyecon.ro/bootstrap-datepicker (Copyright 2012 Stefan Petre)
 * Updated by AymKdn (http://kodono.info - https://github.com/Aymkdn/Datepicker-for-Bootstrap)
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

define(function(require, exports) {
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.picker = $(DPGlobal.template).appendTo('body').hide().on('mousedown.Datepicker',$.proxy(this.mousedown, this)).on('click.Datepicker',$.proxy(this.click, this));

		this.isInput = this.element.is('input') || this.element.is('textarea');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				"focus.Datepicker": $.proxy(this.show, this),
				"click.Datepicker": $.proxy(this.show, this),
				"blur.Datepicker": $.proxy(this.blur, this),
				"keyup.Datepicker": $.proxy(this.update, this),
				"keydown.Datepicker": $.proxy(this.keydown, this)
			});
		} else {
			if (this.component){
				this.component.on('click.Datepicker', $.proxy(this.show, this));
			} else {
				this.element.on('click.Datepicker', $.proxy(this.show, this));
			}
		}
		
		this.viewMode = 0;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.scroll = (options.scroll != undefined ? options.scroll : true);
		this.weekEnd = this.weekStart == 0 ? 6 : this.weekStart - 1;
		this.fillMonths();
		this.update();
		this.showMode();
		//hack
		this.mousedownAct = options['mousedown'];
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
		  $('div.datepicker.dropdown-menu').hide(); //make sure to hide all other calendars
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize.Datepicker', $.proxy(this.place, this));
			$('body').on('click.Datepicker', $.proxy(this.hide, this));
			if (e) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
				$(document).on('mousedown.Datepicker', $.proxy(this.hide, this));
			}
			this.element.trigger({
				type: 'show',
				date: this.date
			});
			// make sure we see the datepicker
			var elem = this.picker;
			var docScrollTop = $(document).scrollTop();
			var winHeight = $(window).height();
			var elemTop = elem.position().top;
			var elemHeight = elem.height();
			if (this.scroll && docScrollTop+winHeight<elemTop+elemHeight)
                          $(document).scrollTop(elemTop-elemHeight);
            this.fillDow();
		},
		
		setValue: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		place: function(){
			//var offset = this.component ? this.component.offset() : this.element.offset();
			var target = this.element;
			
			this.picker.css({
				position: "absolute",
				zIndex: 999999,
				left:target.offset().left+"px",
				top:target.offset().top+target.height()+10+"px"
			});
		},
		
		update: function(){
		  var date = this.element.val();
			this.date = DPGlobal.parseDate(
				date ? date : this.element.data('date'),
				this.format
			);
			this.viewDate = new Date(this.date);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<td class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</td>';
			}
			html += '</tr>'; 
			if($('.ui-calendar td.dow').length < 1) {
				$(html).insertBefore($('.ui-calendar .main-panel tr:eq(0)'));
			}
			
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(year+'年 '+DPGlobal.dates.months[month]);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() == this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getMonth() < month) {
					clsName += ' old';
				} else if (prevMonth.getMonth() > month) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				if(prevMonth.valueOf() == currentDate && prevMonth.getDate() == (new Date()).getDate() && (parseInt((new Date()).getTime()) - parseInt(currentDate)) <= 86400000  ) {
					var dateStr = '今天';
				} else {
					var dateStr = prevMonth.getDate();
				}
				html.push('<td class="day'+clsName+'">'+dateStr+ '</td>');
				if (prevMonth.getDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear == year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		blur:function(e) {
  	},
		
		hide: function(e){
  		this.picker.hide();
			$(window).off('resize.Datepicker', this.place);
			this.viewMode = 0;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown.Datepicker', this.hide);
			}
			$('body').off('click.Datepicker',$.proxy(this.click, this));
		},
		click:function(e) {
			e.stopPropagation();
			e.preventDefault();
		},
		mousedown: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								//this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1)
								);
								this.fill();
								this.fillDow();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						this.showMode(-1);
						this.fill();
						break;
					case 'td':
						if (target.is('.day')){
							if(target.text() == '今天') {
								target.text((new Date()).getDate());
							}
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, day,0,0,0,0);
							this.fill();
							this.setValue();
							this.element.trigger({
								type: 'changeDate',
								date: this.date
							});
							this.hide();
						}
						break;
				}
			}
			this.mousedownAct(DPGlobal.formatDate(this.date, this.format));
		},
		keydown:function(e) {
                  var keyCode = e.keyCode || e.which; 
                  if (keyCode == 9) this.hide(); // when hiting TAB, for accessibility
                },
	
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		},
		
		destroy: function() { this.element.removeData("datepicker").off(".Datepicker"); this.picker.remove() }
	};
	
	$.fn.datepicker = function ( option ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		/*
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},*/
		dates:{
			days: ["日", "一", "二", "三", "四", "五", "六", "日"],
			daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
			daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/-].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length == 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
		  var today=new Date();
		  if (!date) date="";
			var parts = date.split(format.separator),
				date = new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0),
				val;
			if (parts.length == format.parts.length) {
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							date.setMonth(val - 1);
							break;
						case 'yy':
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							date.setFullYear(val);
							break;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-arrow-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="icon-arrow-right"/></th>'+
							'</tr>'+
							'<tr><td style="font-size:0;height:10px;"></td></tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu ui-calendar">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">'+
									DPGlobal.headTemplate+
									'<tbody class="main-panel"></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery );


	require("calendarCss");

	return {
		setup:function(obj,conf) {
			$(obj).datepicker(conf);
		}	
	}
	
});