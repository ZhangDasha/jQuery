$(function(){
	//alert($('div').html());
	//alert($('div').text());   获取的是文本信息，有HTML会自动清理 
	//$('div').html('<em>www.li.cc</em>');   替换HTML内容
	//$('div').text('<em>www.li.cc</em>');    替换文本内容，有HTML会自动转义
	
	
	//$('input').val();     获取表单中的内容
	//$('input').val('大傻不傻');
	
	//alert($('input').val());
	//alert($('input').val('女'));
	//$('input').val(['男','女']);   用于首选表单的value值 
	
	//$('div').attr('title','我是大傻');
//	$('div').attr('titile',function(index,value){
//		return '原来的title是'+value+'我是'+(index+1)+'号域名'
//	});

//	$('div').html(function(index,value){
//		return value + "<em>www.li.cc</em>";
//	});

	
	//*****************************
	//CSS的用法
	//alert($('div').css('color'));
//	var a = $('div').css(['color','width','height']);
//	alert(a);
//	for(var i in a){
//		alert(i+':'+a[i]);
//	}

//	$.each(a,function(attr,value){
//		alert(attr+':'+value);
//	})

//	$('div').each(function(index,element){
//		alert(index+":"+element);
//	})

//	$('div').css({
//		'color':'red',
//		'background':'#ccc',
//		'width':'200px',
//		'height':'30px'
//	}); 
     //CSS用于计算
//   $('div').css('width',function(index,value){
//   	return parseInt(value)-500+"px";
//   })

	//增删CSS
//	$('div').addClass('red bg size');
//	$('div').removeClass('bg');

//	var count=0;
//	$('div').click(function(){
//		$(this).toggleClass('red size',count++%2==0);   //toggleClass()默认样式与指定样式的切换
//	})

//	$('div').click(function(){
//		$('div').toggleClass('red');
//		if($(this).hasClass('red')){
//			$(this).removeClass('green');
//		}else{
//			$(this).toggleClass('green');
//		}
//	})

//	$('div').click(function(){
//		$(this).toggleClass(function(){
//			return $(this).hasClass('red')?'green':'red';
//		})
//	})


//	$('div').click(function(){
//		$(this).toggleClass(function(){
//			if($(this).hasClass('red')){
//				$(this).removeClass('red');
//				return 'green';
//			}else{
//				$(this).removeClass('green');
//				return 'red';
//			}
//		})
//	})


//********************
	
//	alert($('div').css('width'));
//	alert($('div').width());
//	alert($(window).width());
//	alert($(document).width());

    //获取距离
//	alert($('div').offset().top);
//	alert($('strong').offset().top);
//	alert($('strong').position().top);

     //获取滚动条的位置
     //alert($(window).scrollTop());
     $(window).scrollTop(300);
}); 