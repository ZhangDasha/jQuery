/*
$(function(){
	//模拟事件操作
//	$('input').click(function(){
//		alert('模拟事件操作');
//	})
//	$('input').trigger('click');
	//或者
//	$('input').click(function(){
//		alert('模拟事件操作');
//	}).trigger('click');
	//trigger额外数据，一条可以识别。两条以上需要加上中括号
//  $('input').click(function(e,date1,date2,date3){
//		alert(date1+'|'+date2+'|'+date3.user);
//	}).trigger('click',['123','abc',{user:'lee'}]);

	//自定义事件
//	$('input').bind('myClick',function(){
//		alert('自定义事件');
//	}).trigger('myClick');

	//triggerHandle()阻止默认行为
	
	//命名空间
//	$('input').bind('click.abc',function(){
//		alert('abc');
//	})
//	$('input').bind('click.xyz',function(){
//		alert('xyz');
//	})
//	$('input').unbind('click.abc');
	
})
*/

/*
    //课程二-----事件委托
$(function(){
	
//	$('.button').bind('click',function(){
//		alert('事件不委托');
//	})

	//.bind无法动态绑定事件
//	$('.button').bind('click',function(){
//		$(this).clone().appendTo('#box');
//	})
	//delegate()动态绑定
	$('#box').delegate('.button','click',function(){
		$(this).clone().appendTo('#box');
	})
	//删除
	$('#box').undelegate('.button','click');
})
*/


	//课程三-------.on()/.off()/.one()
$(function(){
	//事件绑定   .bind
	//事件解绑    .unbind
	
	//事件委托     .live  /    .delegate
	//解除委托     .die   /    .undelegate
	
	//新方法绑定  .on
	//新方法解绑 .off
//	$('.button').on('click',function(){
//		alert('替代bind');
//	})
    //额外数据
//	$('.button').on('click',{user:'Lee'},function(e){
//		alert('替代bind'+'|'+e.data.user);
//	})
	//多绑定
//	$('.button').on('mouseover mouseout',function(){
//		alert('移入移出');
//	})

	//代替.live/.delegate
//	$('#box').on('click','.button',function(){
//		$(this).clone().appendTo('#box');
//	})

	//仅一次事件触发
	$('#box').one('click','.button',function(){
		alert('仅一次事件触发');
	})

	
	
})
