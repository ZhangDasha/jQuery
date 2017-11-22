$(function(){
	/*var str = "     自动去空格      ";
	alert(str);
	alert($.trim(str));*/
	
	//数组的操作
	/*var array = ['张三','李四','王五','赵六'];
	$.each(array,function(index,value){
		$('#box').html($('#box').html() + index+':'+value+'<br/>');
	})*/
	
	//对象
	/*$.each($.ajax(),function(name,fn){      //$.ajax()只有加()返回的才是对象
		$('#box').html($('#box').html() +name +'<br/>');
	})*/
	
	//grep()数组筛选
	/*var str = [4,5,2,6,9,11,46];
	//$.grep()返回的是数组
	var array = $.grep(str,function(element,index){
		return  index <5 && element < 8;     
	})
	alert(array);*/
	
	//map()修改数据
	/*var str = [4,5,2,6,9,11,46];
	var array = $.map(str,function(element,index){
		if(index <5 && element <8){
			return element+1;
		}
	})
	alert(array);*/
	
	//inArray()根据值查找数组下标
	/*var str = [4,5,2,6,9,11,46];
	alert($.inArray(6,str));*/
	
	//merge()合并两个数组
	/*var str = [4,5,2,6,9,11,46];
	var str2 = [200,500];
	alert($.merge(str,str2));*/
	
	//unique()删除多余DOM
	var str = $('div').get();
	str = str.concat($('.pox').get());
	$.unique(str);
	alert(str.length);
	
})
 