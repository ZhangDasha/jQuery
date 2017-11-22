//插入节点
$(function(){
//	var div = $('<div id="box"></div>');    //创建节点
//	$('body').append( div);

//	$('div').append(function(index,html){
//		return '<em>第</em>'+index+html;
//	})

	//插入前/后 insertafter/insertbefore
	//$('div').insertAfter('strong');
	
	
	//课时二
	//包裹节点
	//$('div').wrap('<strong></strong>');
	//$('div').wrap('<strong>123</strong>');
	//$('div').wrap('<strong><em></em></strong>');
//	$('div').wrap('strong').get(0);
//	$('div').wrap(document.createElement('strong'));
//	$('div').unwrap();
	//在内部包裹
	//$('div').wrapInner('<strong></strong>');
	//复制节点
//	$('div').click(function(){
//		alert('大傻');
//	});
//	$('div').clone(true).appendTo('body');   //true会将事件处理也复制下来

	//detach()保留事件处理的删除
	//remove()
	//empty()  清空内部子节点
	
	//替换节点
	$('div').replaceWith('<em>DOM</em>');
})