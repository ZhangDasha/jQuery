$(function(){
	$('#reg').validate({
		rules:{
			user:{
				required:true,
				minlength:2,
			},
			email:{
				email:true,
			},
			url:{                       //此处url为name名
				url:true,               //此处url为规则名
			},
			number:{                       //此处url为name名
				number:true,               //此处url为规则名
			},
			notpass:{                       
				equalTo:'#pass',              
			},
			min:{                       //输入的值不得小于给定值
				min:10,               //max同理
			},
			range:{                       //输入的值不得小于给定值
				range:[5,10],               //max同理
			},
			rangelength:{                       //输入的值不得小于给定值
				rangelength:[5,10],               //max同理
			},
		},
		//更改提示语
		messages:{
			user:{
				required:'账号不得为空',
				minlength:'输入不得小于2位',
			},
			email:{
				email:'请输入正确邮件格式',
			},
			url:{
				url:'请输入正确网址格式  http://....',
			},
			number:{
				number:'请输入正确数字',
			},
			min:{
				min:'不得小于{0}',                     //等于    jQuery.format() + ｛0｝
			},
		},
	});
})