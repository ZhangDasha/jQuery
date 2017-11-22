$(function(){
	//$('li:first').css('background','#ccc');
	//$('li:last').css('background','#ccc');
	//$('ul:first li:last').css('background','#ccc');
//	$('li:not(#li)').css('background','#ccc');
	//even偶数
	//$('li:even').css('background','#ccc');
	//$('li:odd').css('background','#ccc');
	//索引某一个
	//$('li:eq(2)').css('background','#ccc');
	//大于某一个
	//$('li:gt(3)').css('background','#ccc');
	//小于某一个
	//$('li :lt(2)').css('background','#ccc');
	
	//焦点
//	$('input').focus();  //初始化获得焦点
//	$('input:focus').css('background','#ccc');

	//文本过滤
	//$('div:contains("爱理不理")').css('background','#ccc');
	//empty 反 parent
	//$('div:empty').css('background','#ccc').css('height','20px');
	//alert($('li').parent().length);
	//alert ($('li').parent().get(0));
	//$('li').parent().css('background','#ccc');
	
	//可见性隐藏
	//alert($('div:hidden').length);  //不可见
	//$('div:hidden').css('background','#ccc').show(1000);
	//alert($('div:visible').length);  //可见
	
	
	//$('li:first-child').css('background','#ccc');
	//is()判断方法
	//alert($('#li').is('li'));
//	alert($('.red').is(function(){
//		return $(this).attr('title')=='列表4';
//		//必须是$(this)，不然不管function返回的是false或true都根$('.red')无关
//	}))

	$('li').slice(0,2).css('background','#ccc');	
}) 