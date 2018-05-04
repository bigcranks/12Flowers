define(["jquery"],function(){
	$("#top").load("header.html");
	function Register(){
		var _this = this;
		this.aP = $(".inpbg");
		this.aP.eq(0).focusout(function(){
			if($(this).val()==""){
				$(this).next().html("用户名不能为空")
			}else{
				var stc = /^[a-zA-Z]+\w{5,16}$/;
				if(stc.test(this.value)){
					$(this).next().html("√")
				}else{
					$(this).next().html("用户名有误")
				}
			}
		})
		this.aP.eq(1).focusout(function(){
			if($(this).val()==""){
				$(this).next().html("邮箱不能为空")
			}else{
				var stc =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
				if(stc.test(this.value)){
					$(this).next().html("√")
				}else{
					$(this).next().html("邮箱有误")
				}

			}
		})
		this.aP.eq(2).focusout(function(){
			if($(this).val()==""){
				$(this).next().html("密码不能为空")
			}else{
				var stc = /^\w{6,12}$/;
				var brr = /(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)/;
				var srr = /_+/;
				if(stc.test(this.value)){
					$(this).next().html("√")
					if(srr.test(this.value)){
						$(".pows").eq(2).attr("style","background: red;color: #fff;")
					}else if(brr.test(this.value)){
						$(".pows").eq(1).attr("style","background: red;color: #fff;")
					}else{
						$(".pows").eq(0).attr("style","background: red;color: #fff;")
					}
				}else{
					$(this).next().html("密码有误")
				}

			}
		})
		this.aP.eq(3).focusout(function(){
			if(this.value == _this.aP.eq(2).val()){
				$(this).next().html("√")
			}else{
				$(this).next().html("两次密码不一样")
			}
		})
		this.aP.eq(7).focusout(function(){
			if(this.value == ""){
				$(this).next().html("手机号码不能为空")			
			}else{
				var stc = /^1[3|4|5|8]\d{9}$/;
				if(stc.test(this.value)){
					$(this).next().html("√")
				}else{
					$(this).next().html("手机号码错误")
				}
			}
		})
		$(":button").click(function(){
			var str = ""
			$.each($(".mm"),function(i,n){
				str += n.innerHTML
			})
			
			if($("#inp").prop("checked") == false){
				alert("请先同意用户注册")
			}else if(str == "√√√√√"){
				var num1 = $(".inpbg").eq(0).val();
				alert("注册成功");
				$.cookie("user",num1,{expires:7,path:"/"});
				location.href = "home.html";
			}
		})
	}
	return{	
		init:Register
	}
})