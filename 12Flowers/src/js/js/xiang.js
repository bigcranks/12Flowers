define(["jquery"],function(){
	$("#top").load("header.html");
	function shop(){
		var _this = this;
		this.num = location.href.split("?")[1];
		this.aMain = $("#main-wrap");
		$.ajax({
			type:"get",
			url:"../js/js/hua.json",
			success:function(data){
				$.each(data, function(i) {
					if(_this.num == data[i].id){
						var str = "";
						str = `<div class="main clearfix">
				<div id="hear">
					<span>当前位置:</span>
					<a href="home.html">花店首页</a>
					<span>>${data[i].title}</span>
					<span>>详情页</span>
				</div>
				<div>
					<div class="main-l">
						<h1>所有商品分类</h1>
						<nav>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia"  /></span>红玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>粉玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>白玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>黄玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>紫玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>香槟玫瑰
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>蓝色妖姬
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>百合花
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>康乃馨
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>郁金香
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>向日葵
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>马蹄莲
							</li>
							<li>
				<span><img src="../images/btn_fold.gif" class="jia" /></span>扶郎花
							</li>
						</nav>
						<div class="box_1">
							<h3><span>相关文章</span></h3>
							<div>
								<a href="#">女生生日送花、女生生日送什么花【...</a><br />
								<a href="#">送花朵数的含义</a><br />
							</div>
						</div>
					</div>
					<form>
					<div class="main-r">
						<div id="goods">
							<div class="imgin">
								<div id="imgs">
									<div id="filter"></div>
									<img src="../images/${data[i].id}-1.jpg" class="middle" />
								</div>
								<div class="maximg">
									<p>${data[i].title}</p>
									<div style="width: 300px;height: 300px;overflow: hidden;">
										<img src="../images/${data[i].id}-1.jpg" class="mox" style="position: relative;" />
									</div>
								</div>
								<img src="../images/tu${data[i].id}.jpg" class="small" />
							</div>
							<div class="txtin">
								<h1>${data[i].title}</h1>
								<ul class="ul1 clearfix">
									<li style="width: 100%;">
										<strong>本店售价  : </strong>
										<font class="shop">${data[i].num2}</font>
										<font class="market">${data[i].num1}</font>
									</li>
									<li>
										<strong>商品货号  : </strong>H000125
									</li>
									<li>
										<strong>累计销售   : </strong>1253
									</li>
								</ul>
								<ul><li>提示  : 若是重要节假日期间配送(可咨询客服)，请选择下方的“节日预订价” ↓↓↓</li></ul>
								<ul class="ul2 clearfix">
									<li>
										<strong>是否节日  : </strong>
										<label>
											<input type="radio" checked name="1" />非节日 [ ￥0.00元]
										</label>
										<label>
											<input type="radio" name="1" />节日预订价 [加 ￥60.00元]
										</label>
									</li>
									<li>
										<strong>购买数量  : </strong>
										<input type="text" size="4" value="1" id="txt" />
										<strong>商品总价  : </strong>
										<font style="color: #E50065;font-weight: bold;">${data[i].num2}</font>
									</li>
									<li>
										<a href="gou.html" id="btnn"><img src="../images/goumai2.gif" /></a>
									</li>
								</ul>
								分享到:
								<nav>
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
									<a href="#"></a>
								</nav>
							</div>
						</div>
						<div class="main-b">
							<ul>
								<li>商品描述</li>
								<li>商品属性</li>
								<li>商品标签</li>
								<li>相关商品</li>
							</ul>
							<div class="box_2">
								<div>
							<p>鲜花详情</p>
							<table width="700" style="color: #000;font-size: 13px;margin-bottom: 25px;">
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">花材：</td>
									<td style="background: #D5EAF0;">${data[i].stuff}</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">包装：</td>
									<td style="background: #D5EAF0;">${data[i].packing}</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">花语：</td>
									<td style="background: #D5EAF0;">${data[i].flower}</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">赠送：</td>
									<td style="background: #D5EAF0;">免费赠送留言卡一张（请在下单时，在“订单附言”处填写留言卡内容）。</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">配送：</td>
									<td style="background: #D5EAF0;">市区内，均可免费配送上门。</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">适用：</td>
									<td style="background: #D5EAF0;">${data[i].apply}</td>
								</tr>
								<tr>
									<td style="background: #91C5D4;border-right: 2px solid #fff;">说明：</td>
									<td style="background: #D5EAF0;">此为纯手工作品，包装纸颜色可能因地区差异而略有不同，但我们保证主花材品质、品种、数量与说明一致。</td>
								</tr>
							</table>
							<p><img src="../images/20170317124233_76178.jpg" /></p>
							<p><img src="../images/tu${data[i].id}-1.jpg" /></p>
							<p><img src="../images/20170317124451_91987.jpg" /></p>
							<p><img src="../images/20170317124508_21231.jpg" /></p>
							<p><img src="../images/20170317124528_77945.jpg" /></p>
							<p><img src="../images/20170317124542_92462.jpg" /></p>
							</div>
							</div>
						</div>
					</div>
					</form>
				</div>
			</div>`
						_this.aMain.html(str)
					}
				});
			}
		});
		this.aMain.on("click",".jia",function(){
			if($(this).attr("src") == "../images/btn_fold.gif"){
				$(this).attr("src","../images/btn_unfold.gif")
			}else{
				$(this).attr("src","../images/btn_fold.gif")
			}
		})
		this.aMain.on("mouseover","#imgs",function(){
			$(this).css("cursor","pointer")
			$("#filter").stop(true).show();
			$(".maximg").stop(true).show();
			$(this).mousemove(function(e){
				_this.move(e,this)
			})
		})
		this.aMain.on("mouseout","#imgs",function(){
			$("#filter").stop(true).hide();
			$(".maximg").stop(true).hide();
		})
		this.aMain.on("click","#btnn",function(){
			if(localStorage.getItem("shop")){
				var newObj = JSON.parse(localStorage.getItem("shop"));
			}else{
				var newObj = {};
			}
			if(!newObj[_this.num]){
				var n=Number($("#txt").val());
				newObj[_this.num] = n;
			}else{
				var n1 = newObj[_this.num];
				n1++;
				newObj[_this.num] = n1;
			}
			var str = JSON.stringify(newObj);
			localStorage.setItem("shop",str);
		})
	}
	
	shop.prototype.move = function(e,that){
		this.l = e.pageX - $(that).offset().left - $("#filter").width()/2;
		this.t = e.pageY - $(that).offset().top - $("#filter").height()/2;
		this.l = this.l>$(that).width()-$("#filter").width()?$(that).width()-$("#filter").width():(this.l<0?0:this.l);
		this.t = this.t>$(that).height()-$("#filter").height()?$(that).height()-$("#filter").height():(this.t<0?0:this.t);
		$("#filter").css({left:this.l,top:this.t});
		$(".mox").css({left:-this.l,top:-this.t});
	}
	
	return{
		init:new shop()
	}
})