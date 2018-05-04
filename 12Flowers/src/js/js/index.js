define(["jquery"],function(){
		function nav(){
			var _this = this;
			this.oGood = $(".clearfix");
			$.ajax({
				type:"get",
				url:"../js/js/hua.json",
				data:{},
				success:function(data){
					_this.cha(0,4,_this.oGood[0],data);
					_this.cha(4,14,_this.oGood[1],data);
					_this.cha(14,24,_this.oGood[2],data);
					_this.cha(24,34,_this.oGood[3],data);
					_this.cha(34,39,_this.oGood[4],data);
					_this.cha(39,49,_this.oGood[5],data);
				}
			})
			$(".box").on("click",".gl",function(){
				var num = this.getAttribute("data-id");
				location.href = "xiang.html?"+num;
			})
			this.oList = $(".menu>ul>li"   );
			this.oList.mouseover(function(){
				$(this.firstElementChild).addClass("cuur");
				$(this.lastElementChild).css("display","block");
			})
			this.oList.mouseout(function(){
				$(this.firstElementChild).removeClass("cuur");
				$(this.lastElementChild).css("display","none");
			})
		}	
		
		nav.prototype.cha = function(a,b,_this,data){
			var str = "";
			$.each(data, function(i) {
				if(i>=a&&i<b){
					str +=`<div class="goodsItem">
					<a href="#" data-id="${i+1}" class="gl"><img src="../images/tu${data[i]["id"]}.jpg" /></a>
					<br />
					<p><a href="#" data-id="${i+1}" class="gl">${data[i]["title"]}</a></p>
					市场价:<font class="market">${data[i]["num1"]}</font>
					<br />
					本店价:<font class="f1">${data[i]["num2"]} </font>
				</div>`
				}
			});
			$(_this).html(str)
		}
	
		return{
			init:new nav()
		}
	
})
