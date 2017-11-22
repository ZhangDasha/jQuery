/*
$(function(){
	$('#box').css('color','red');
});

jQuery(function(){
	jQuery('#box').css('color','red');
});

alert($ === jQuery);

$(function(){
	//alert($);   //返回的是jquery内部对象的内容
	//alert($());   //返回的是jquery内部对象
	 //alert($('#box'));
	 //alert($('#box').css('color','red'));
	 
	 $('#box').css('color','red').css('font-size','200px').css('font-weight','bold');
	 })
	 
	 $(document).ready(function(){
		alert(1);
	});
	$(document).ready(function(){
		alert(2);
	});
*/
  $(function(){
  	//alert($('#box'));  //返回的是jquery对象
  	//alert(document.getElementById('box'));   //返回的是原生objectHTMLDivElement对象
  	
  	alert($('#box').get(0));
  })
	

