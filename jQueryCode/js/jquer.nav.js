//避免使用$,若果要用使用jQuery传参
;(function($){
	//全局
	$.extend({
		'nav':function(color){
		$('.nav').css({
			'list-style':'none',
			'margin':0,
			'padding':0,
			'display':'none',
			'color':color
		});
		
		//只能从内往外找
		$('.nav').parent().hover(function(){
			//$(this)相当于li
			$(this).find('.nav').slideDown('normal');
		},function(){
			$(this).find('.nav ').stop().slideUp('normal');
		})
	   }
	})
})(jQuery);
