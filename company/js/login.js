
/*		var Login=function(){
			"use strict";
			var initLogin=function(){
				$('.login_bt').click(function(event){
					alert(111111);
					event.preventDefault();
					var login_name=$('input[name=login_name]');
					var password=$('input[name=password]');
					var back_url=$('input[name=back_url]');
					var code=$('input[name=code]');
					if(login_name.val()===''&&password.val()===''&&code.val()===''){
						login_name.css("border","1px solid #ff6b1d");
						password.css("border","1px solid #ff6b1d");
						code.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg-error'><b></b>请输入账户名、密码、验证码</div>");
						return false;
					}else if(login_name.val()==''){
						login_name.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg-error'><b></b>请输入账户名</div>");
						return false;
					}else if(password.val()==''){
						password.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg-error'><b></b>请输入密码</div>");
						return false;
					}else if(code.val()==''){
						code.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg-error'><b></b>请输入验证码</div>");
						return false;
					}else{
						login_name.css("border","1px solid #dedede");
						password.css("border","1px solid #dedede");
						$(".msg-wrap").html("");
						$.ajax({
							url:'/login/login',
							data:{username:login_name.val(),password:password.val(),code:code.val(),back_url:back_url.val()},
							type:'POST',
							success:function(data){
								if(data.code=='1008'){
									window.location.href=data.back_url;
								}else{
									$(".msg-wrap").html("<div class='msg-error'><b></b>"+data.msg+"</div>");
								}
							},
							dataType:'json'
							});
					}
				});
			}
			var initCaptcha=function(){
				$('.change_code').click(function(){
					var img=document.getElementById('login_code_img');
					img.src='/login/code/rand/'+Math.random();
				});
			};
			return{init:function(){initLogin();initCaptcha();},};
		}();*/
	var Login=function(){	
		"use strict";
		var initLogin=function(){
				$('.login_bt').click(function(event){					
					event.preventDefault();
					var login_name=$('input[name=login_name]');
					var password=$('input[name=password]');										
					if(login_name.val()===''&&password.val()===''){
						/*login_name.css("border","1px solid #ff6b1d");
						password.css("border","1px solid #ff6b1d");	*/					
						$(".msg-wrap").html("<div class='msg_error'><i></i>请输入账户名、密码</div>");
						return false;
					}else if(login_name.val()==''){
						login_name.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg_error'><i></i>请输入账户名</div>");
						return false;
					}else if(password.val()==''){
						password.css("border","1px solid #ff6b1d");
						$(".msg-wrap").html("<div class='msg_error'><i></i>请输入密码</div>");
						return false;
					}else{
						login_name.css("border","1px solid #dedede");
						password.css("border","1px solid #dedede");
						$(".msg-wrap").html("");
						$.ajax({
							url:'/login/login',
							data:{username:login_name.val(),password:password.val(),code:code.val(),back_url:back_url.val()},
							type:'POST',
							success:function(data){
								if(data.code=='1008'){
									window.location.href=data.back_url;
								}else{
									$(".msg-wrap").html("<div class='msg_error'><i></i>"+data.msg+"</div>");
								}
							},
							dataType:'json'
							});
					}
				});
			}
			return{init:function(){initLogin();},};
		}();