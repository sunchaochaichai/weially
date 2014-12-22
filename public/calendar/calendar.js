$(function () {
	var currYear = (new Date()).getFullYear();	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.default = {
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式 
		mode: 'scroller', //日期选择模式
		lang:'zh',
		rows: 3,
		startYear:currYear - 10, //开始年份
		endYear:currYear + 10 //结束年份
	};
	var optDateTime = $.extend(opt['datetime'], opt['default']);
	var optTime = $.extend(opt['time'], opt['default']);
	$(".datetimepicker").mobiscroll(optDateTime).datetime(optDateTime);
});