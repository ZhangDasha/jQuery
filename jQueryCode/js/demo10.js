$(function(){
	//even事件的属性和方法
//	$('input').bind('click',function(e){
//		alert(e);
//	})

	//target获得的是触发元素的DOM，currentTarget获得的是监听元素的DOM
//	$('div').bind('click',function(e){
//		alert(e.target);
//	})
//	$('div').bind('click',function(e){
//		alert(e.currentTarget);                   
//	})
	//移入移出
//	$('span').bind('mouseover',function(e){
//		alert(e.relatedTarget);
//	})
//	$('span').bind('mouseout',function(e){
//		alert(e.relatedTarget);
//	})


//	$('input').bind('click',[1,2,3],function(e){
//		alert(e.date);
//	})

// $(document).bind('click',function(e){
	          //页面原点；屏幕位置 ； 页面视口
// 		alert(e.pageX+';'+e.screenX+';'+e.clientX)
// })
	 
})

//课程二
$(function(){
	//禁止冒泡事件
//	$('input').click(function(e){
//		e.stopPropagation();
//		alert('input');
//	});
//	$('div').click(function(){
//		alert('div');
//	});
//	$(document).click(function(){
//		alert('document');
//	});


	//禁止默认行为
//	$('a').click(function(e){
//		e.preventDefault();
//		alert('超链接');
//	})

	//阻止表单默认行为
//	$('input').click(function(e){
//		e.preventDefault();
//		alert('表单提交');
//	})
	//或
//	$('form').submit(function(e){
//		e.preventDefault();
//	})

	//return false 可阻止冒泡和默认行为
	
	
	
})
