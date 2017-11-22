$(function(){
	//绑定事件
//	$('input').bind('click mouseover',function(){
//		alert('弹窗');
//	});

//	$('input').bind('mouseover mouseout',function(){
//		$('div').html(function(index,value){
//			return value+'1';
//		});
//	});
//	$('input').bind({
//		mouseover:function(){
//			alert('移入');
//		},
//		mouseout:function(){
//			alert('移出');
//		}
//	})

	//接触绑定 unbind()
	
//	$('input').dblclick(function(){
//		alert('双击');
//	})

//	$('input').mouseup(function(){
//		alert('鼠标按下离开');
//	})

//	$('input').mousedown(function(){
//		alert('鼠标左键按下');
//	})
	//当页面被卸载时触发    比如:刷新
//	$(window).UNLOAD(function(){
//		alert('666');
//	})
	//文本选定时触发
	//文本改变时触发 change()
//	$(window).select(function(){
//		alert('文本选定时触发');
//	})
  	//表单提交时触发
//	$('form').submit(function(){
//		alert('提交');
//	})


 	//光标激活与光标丢失
 	//focusin()与focusout可以是子元素触发
// 	$('input').focus(function(){
// 		alert('光标激活');
// 	})
 	
// 	$('input').blur(function(){
// 		alert('光标丢失');
// 	})
	
	
	//复合标签
	$('div').hover(function(){
		$(this).css('background','red');
	},function(){
		$(this).css('background','green');
	})
	
});