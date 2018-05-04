define(["jquery"],function(){
	$("#top").load("header.html");
	function enter(){
		var _this = this;
		
		$("#sub").click(function(){
			_this.num1 = $(":text").eq(1).val();
			_this.num2 = $(":password").val();
			if(_this.num1 == ""||_this.num2 == ""){
				alert("用户名或密码不能为空")
			}else{
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{"status":"login","userID":_this.num1,"password":_this.num2},
					success:function(data){
						if(data == 0){
							alert("用户名不存在")
						}else if(data == 2){
							alert("用户名密码不符")
						}else{
							alert("登录成功")
							if($("input:checked").length>=1){
								$.cookie("user",_this.num1,{expires:7,path:"/"});
							}
							location.href = "home.html"
						}	
					}
				});
			}
		})
	}
	
	return{
		init:enter
	}

})