define(["jquery","jq-cook"],function(){
		$("#foot").load("foot.html");
		function logo(){
			var _this = this;
			this.aLogo = $(".logo");			
			if(localStorage.getItem("shop")) {
				var str = 0;
				var newObj = JSON.parse(localStorage.getItem("shop"));
				$.each(newObj, function(i, n) {
					str += n
				});
				$("#cun").html(str)
			}
			if($.cookie("user")) {
				$("#user11").html($.cookie("user"))
				$("#xxx").html("注销")
			}
			$("#xxx").click(function() {
				if($(this).html() == "注册") {
					location.href = "zhu.html"
				} else {
					$.cookie("user", "", {
						expires: 0,
						path: "/"
					});
					location.reload();
				}
			})			
			window.onscroll =function(){
				$(".logo").animate({top:130+$(document).scrollTop()+"px"},30)
			}
			this.aLogo.mouseover(function(){
				$(this.firstElementChild).css("display","none");
				$(this.lastElementChild).css("display","block");
			})
			this.aLogo.mouseout(function(){
				$(this.firstElementChild).css("display","block");
				$(this.lastElementChild).css("display","none");
			})
						
			$.ajax({
				type:"get",
				url:"../js/js/hua.json",
				success:function(data){
					$("#top").on("input propertychange","#sea",function(){
						var abc = this.value;
						var str = "";
						$.each(data, function(i) {
							if(data[i].title.indexOf(abc)>=0 && abc!=""){
								$(".searchbox").css("display","block");
								str += `<li data-id="${data[i].id}">${data[i].title}</li>`
							}							
						});
						$(".searchbox").html(str)
					})
				}
			});
			$("#top").on("click",".searchbox>li",function(){
				var num=$(this).attr("data-id");
				$("#sea").val($(this).html());
				$(".searchbox").css("display","none");
				$("#sut").click(function(){
					location.href = "xiang.html?"+num;
				})
			})			
		}

		return{
			init:logo
		}
		
})