/*
$(function(){
//	$('.show').click(function(){
//		$('#box').show();
//	})
//	$('.hide').click(function(){
//		$('#box').hide();
//	})
	//可以传递两个参数，一个是速度，另一个是回调函数
	//slow(600) normal(400) fast(200) /毫秒
//	$('.show').click(function(){
//		$('#box').show(1000);
//	})
//	$('.hide').click(function(){
//		$('#box').hide(1000);
//	})
//
//	$('.show').click(function(){
//		$('#box').show('show',function(){
//			alert('回调函数');
//		})
//			
//	})
//	$('.hide').click(function(){
//		$('#box').hide(1000);
//	})

	//列队动画，四个区块，逐个显示
	//通过递归调用
//	$('.show').click(function(){
//		$('.text').first().show('fast',function fastShow(){
//			$(this).next().show('fast',fastShow);
//		})
//	})
	//切换
//	$('.toggle').click(function(){
//		$('#box').toggle();
//	})

	//上下滑动
//	$('.up').click(function(){
//		$('#box').slideUp();
//	})
//	$('.down').click(function(){
//		$('#box').slideDown();
//	})
//	$('.toggle').click(function(){
//		$('#box').slideToggle();
//	})

	//淡出淡入
//	$('.out').click(function(){
//		$('#box').fadeOut('slow');
//	})
//	$('.in').click(function(){
//		$('#box').fadeIn('slow');
//	})
//	$('.toggle').click(function(){
//		$('#box').fadeToggle ('slow');
//	})
//	$('.to').click(function(){
//		$('#box').fadeTo('slow',0.33);   //透明度范围 0~1 
//	})

})
*/

/*
$(function(){
	//多重动画同步效果
//	$('.button').click(function(){
//		$('#box').animate({
//			width:'200px',
//			height:'200px',
//			fontSize:'50px',
//			opacity:'0.5',
//		},2000,function(){
//			alert('动画执行完毕!')
//		})
//	})

//	$('.button').click(function(){
//		$('#box').animate({
//			left:'300px',              //移动到3000px
//			top:'200px',
//		},'slow')
//	})

	//累加移动
//		$('.button').click(function(){
//		$('#box').animate({
//			left:'+=100px',              //移动到3000px
//		},'slow')
//	})

	//在同一元素基础上，使用连缀或顺序排列调用，可以实现列队动画
	//连缀
//	$('.button').click(function(){
//		$('#box').animate({width:'300px'})
//				 .animate({height:'300px'})
//				 .animate({opacity:0.5})
//				 .animate({fontSize:'50px'});
//	})
    //顺序排列
//	$('.button').click(function(){
//		$('#box').animate({width:'300px'})
//		$('#box').animate({height:'300px'})
//		$('#box').animate({opacity:0.5})
//		$('#box').animate({fontSize:'50px'});
//	})

	//queue()模拟动画方法，跟随动画方法之后
	$('.button').click(function(){
		$('#box')
					.slideUp('slow')
					.slideDown('slow')
					.queue(function(next){
						$(this).css('background','red');
						next();
					})
					.hide('slow');
	})
		
})
*/



		//课程三
$(function(){
//	$('.button').click(function(){
//		$('#box').animate({
//			left:'800px'
//		},3000)
//	})
	//对于列队动画stop()只能停止第一个动画，不会影响后面的
	//但是stop(true)可以
//	$('.button').click(function(){
//		$('#box').animate({left:'500px'},1000)
//				 .animate({width:'300px'},1000)
//				 .animate({height:'800px'},1000)
//	})
//	$('.stop').click(function(){
//		$('#box').stop(true);
//	})


	//获取运动的动画
//	$('#box').slideToggle('slow',function(){
//		$(this).slideToggle('slow',arguments.callee);
//	})
//	$('.any').click(function(){
//		$(':animated').stop().css('background','orange');
//	})

	//控制动画运动的帧数
//	$.fx.interval = 5;
//	$('.button').click(function(){
//		$('#box').toggle(1000);
//	})
		//$.fx.off = true;   关闭动画

	
})
