$(function(){
	
	$('#search_button').button();
	
	//dialog()回话框
//	$('#reg_a').click(function(){
//		$('#reg').dialog();	
//	})

//	$('#reg').dialog({
//		title:'会员注册',
//		
//		buttons:{
//			'提交': function(){
//				alert('正在ajax提交中。。。'); 
//			},
//			'取消': function(){
//				$(this).dialog('close');
//			}
//		},
//		
//		modal:true,  //对话框外能否操作
//	});
	
//	$('#reg_a').click(function(){
//		$('#reg').dialog('open');	//因为前面已经创建，dialog()表示创建，dialog('open')表示打开
//	})
		
	
	//课时二   创建注册表单
	$('#reg').dialog({
		autoOpen:true,
		modal:true,
		width:400,
		height:320,
		buttons:{
			"提交": function(){
				$(this).submit();
			}
		}
	});
	
	$('#reg').buttonset().validate({ 		            //buttonset() 将radio改成按钮
		
		showErrors:function(errorMap,errorList){        //发生错误时触发
			var errors = this.numberOfInvalids();
			if(errors > 0){                             //如果发生错误高度加20px
				$('#reg').dialog('option','height',errors*20+320);
			}else{
				$('#reg').dialog('option','height',320);
			}
			this.defaultShowErrors();                   
		},
		
		highlight:function(element,errorClass){
			$(element).css('border','1px solid #630');
		},
		unhighlight:function(element,errorClass){
			$(element).css('border','1px solid #ccc');
			$(element).parent().find('span').html('ok');
		},
		
		
		errorLabelContainer: 'ol.reg_error',             //显示错误提示
		wrapper:'li',
		rules:{
			user:{
				required:true,
				minlength:2,
			},
			pass:{
				required:true,
				minlength:6,
			},
			email:{
				required:true,
				email:true,
			},
			messages:{
				user:{
					required:'用户名不得为空',
					minlength:'至少为{0}位字符',
				},
				pass:{
					required:'密码不得为空',
					minlength:'至少为{6}位字符',
				},
				email:{
					required:'邮箱不得为空',
					
				},
			},
		},
	});
	
	
	$('#date').datepicker({        //引入日历
		dateFormat:'yy-mm-dd',      //日期格式
		dayNamesMin:['日','一','二','三','四','五','六'],        //中文
		monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		firstDay:1,                 //指定日历从周几开始
		changeMonth:true,           //可选月份
		changeYear:true,
		maxDate:0,                  //依当前日期为基准，最大能选的日期
		yearRange:'1990:2017',       //可选年份范围
		
	})        
	//tooltip()提示栏
	$('#reg input[title]').tooltip({          //tooltip提示栏title位置设置
		position:{
			//my : 'center top', 
			at:'right top ',
		}
	});
	
	var host = ['aa','aaaa','bbbbb','aaaaaa'];
	$('#email').autocomplete({         //autocomplete自动补全
//		source: host,
//		//选定一个项目
//		select: function(){
//			alert('谢谢选择');
//		}

		source:function(request,response){
			//监听用于输入
			//alert(request.term);
			//定义全局变量的两种方法，一种是函数外var定义，一种是什么都不用
			var hosts = ['qq.com','gmail.com','163.com','sina.com.cn'];
			var	term = request.term;        //获取用户输入内容       
			var	name = term;               //邮箱的用户名
			var	host = '';                  //邮箱的域名
			var	it = term.indexOf('@');     //@
				//indexOf 与 lastIndexOf()返回的都是指定的子串在另一个字符串中的位置，如果没有找到指定子串，则返回-1
			var	result = [];
				
				
			//当有@的时候
			if(it > -1){
				name = term.slice(0,it);   //用户名等于@位置前和@的字符
				host = term.slice(it + 1);  //域名等于@位置后的域名
			}
			
			if(name){
				//如果用户已经输入@后面的域名，那么就找到相关的域名提示。如aaa@16  就应该提示163.com
				//如果用户没有输入相关的域名，就把所有域名都提示出来
				
				result.push(term);
				      //push（）可向数组的末尾添加一个或多个元素，并返回新的长度
				
				
				    //grep() And map()
				    //都是操作数组，选择出数组中符合条件的记录，并返回
				
				var foundHost = [];
				if(host){
					foundHost = $.grep(hosts,function(value,index){
						return value.indexOf(host)>-1;
					})
				}else{
					foundHost = hosts;
				}
				
				var foundResoult = $.map(foundHost,function(value,index){
					return name + '@' +value;
				})
				//concat()连接两个数组
				result = result.concat(foundResoult);
			}
			response(result);
		},
	})
})