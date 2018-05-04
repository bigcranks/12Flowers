define(["jquery"],function(){
	$("#top").load("header.html");
	function List(){
		$.ajax({
			type:"get",
			url:"../js/js/hua.json",
			success:function(data){
				var len = data.length;
				function page(n){
					var str = '';
					for(var i=(n-1)*8;i<Math.min(len,n*8);i++){
						str += `<div class="goodsItem">
								<a href="#" class="gl" data-id="${data[i].id}"><img src="../images/tu${data[i].id}.jpg" /></a>
								<br />
								<p><a href="#" class="gl" data-id="${data[i].id}">${data[i].title}</a></p>
								本店价:<font class="f1">${data[i].num2}</font>
							</div>`
					}
					$(".list_box").html(str)
				}
				layui.use('laypage', function(){
				  var laypage = layui.laypage;
				  laypage.render({
				    elem: 'btnList'
				    ,count: len ,
				    limit:8,
				    groups:5,
				    theme:"red",
				    jump:function(obj){
				    	page(obj.curr)
				    }
				  });
				});
			}
		})
		$(".list_box").on("click",".gl",function(){
			var num = this.getAttribute("data-id");
			location.href = "xiang.html?"+num;
		})
		$(".jia").click(function(){
			if($(this).attr("src") == "../images/btn_fold.gif"){
				$(this).attr("src","../images/btn_unfold.gif")
			}else{
				$(this).attr("src","../images/btn_fold.gif")
			}
		})
	}
	return{
		init:List
	}
})