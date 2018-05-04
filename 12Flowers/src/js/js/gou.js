define(["jquery"],function(){
	$("#top").load("header.html");
	function gou(){
		this.aTab = $("#box");
		if(localStorage.getItem("shop")){
			var arr = JSON.parse(localStorage.getItem("shop"));
			var str = "";
			$.ajax({
				type:"get",
				url:"../js/js/hua.json",
				success:function(data){
					$.each(arr, function(n) {
						$.each(data, function(i) {
							if(n==data[i].id){
								var b = ((data[i].num2).substr(1,3)*arr[n]).toFixed(2)
								str += `<tr>
								<td style="width: 300px;" align="center">
									<a href="#"><img style="width: 80px;height: 80px;" src="../images/tu${data[i].id}.jpg" /></a><br />
									<a href="#" style="color: #E50065;">${data[i].title}</a>
								</td>
								<td>是否节日:非节日 </td>
								<td align="center"><span style="text-decoration: line-through;">${data[i].num1}</span></td>
								<td align="center" class="dan">${data[i].num2}</td>
								<td align="center">
									<input type="text" size="4" class="inpug" data-id="${data[i].id}" value="${arr[n]}"/>
								</td>
								<td align="center">￥${b}元</td>
								<td align="center">
									<a href="#" onclick="return false"  style="color: #E50065;" id="shan" data-id="${data[i].id}">删除</button>
								</td>
							</tr>`
							}
						})
					})
					$("#box").append(str)
				}
			});
		}		
		$(".btnn").eq(0).click(function(){
			alert("您忍心清空吗?")
			localStorage.removeItem("shop");
			location.reload();
		})		
		this.aTab.on("click","#shan",function(){
			$(this).parents("tr").remove();
			var a = $(this).attr("data-id");
			$.each(arr, function(i) {
				if(i==a){
					delete arr[i]
				}
			});
			arr = JSON.stringify(arr);
			localStorage.setItem("shop",arr);
			location.reload();
		})
		this.aTab.on("focusout",".inpug",function(){
			var d = $(this).val();
			if(d>0){
				var att = $(this).parent().prev().html();
				att = att.substr(1,3);		
				$(this).parent().next().html("￥"+(att*this.value).toFixed(2)+"元");
				var c = $(this).attr("data-id");
				$.each(arr, function(i) {
					if(i==c){
						arr[i] = Number(d)
					}
				});
				arr = JSON.stringify(arr);
				localStorage.setItem("shop",arr)
			}else{
				alert("你是要删除此商品吗?")
				$(this).parents("tr").remove();
			}	
		})
	}
	return{
		init:gou
	}
})