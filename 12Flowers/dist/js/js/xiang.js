"use strict";define(["jquery"],function(){function t(){var a=this;this.num=location.href.split("?")[1],this.aMain=$("#main-wrap"),$.ajax({type:"get",url:"../js/js/hua.json",success:function(i){$.each(i,function(t){if(a.num==i[t].id){var n;n='<div class="main clearfix">\n\t\t\t\t<div id="hear">\n\t\t\t\t\t<span>当前位置:</span>\n\t\t\t\t\t<a href="home.html">花店首页</a>\n\t\t\t\t\t<span>>'+i[t].title+'</span>\n\t\t\t\t\t<span>>详情页</span>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<div class="main-l">\n\t\t\t\t\t\t<h1>所有商品分类</h1>\n\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia"  /></span>红玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>粉玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>白玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>黄玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>紫玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>香槟玫瑰\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>蓝色妖姬\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>百合花\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>康乃馨\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>郁金香\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>向日葵\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>马蹄莲\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t<span><img src="../images/btn_fold.gif" class="jia" /></span>扶郎花\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t<div class="box_1">\n\t\t\t\t\t\t\t<h3><span>相关文章</span></h3>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href="#">女生生日送花、女生生日送什么花【...</a><br />\n\t\t\t\t\t\t\t\t<a href="#">送花朵数的含义</a><br />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form>\n\t\t\t\t\t<div class="main-r">\n\t\t\t\t\t\t<div id="goods">\n\t\t\t\t\t\t\t<div class="imgin">\n\t\t\t\t\t\t\t\t<div id="imgs">\n\t\t\t\t\t\t\t\t\t<div id="filter"></div>\n\t\t\t\t\t\t\t\t\t<img src="../images/'+i[t].id+'-1.jpg" class="middle" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="maximg">\n\t\t\t\t\t\t\t\t\t<p>'+i[t].title+'</p>\n\t\t\t\t\t\t\t\t\t<div style="width: 300px;height: 300px;overflow: hidden;">\n\t\t\t\t\t\t\t\t\t\t<img src="../images/'+i[t].id+'-1.jpg" class="mox" style="position: relative;" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<img src="../images/tu'+i[t].id+'.jpg" class="small" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="txtin">\n\t\t\t\t\t\t\t\t<h1>'+i[t].title+'</h1>\n\t\t\t\t\t\t\t\t<ul class="ul1 clearfix">\n\t\t\t\t\t\t\t\t\t<li style="width: 100%;">\n\t\t\t\t\t\t\t\t\t\t<strong>本店售价  : </strong>\n\t\t\t\t\t\t\t\t\t\t<font class="shop">'+i[t].num2+'</font>\n\t\t\t\t\t\t\t\t\t\t<font class="market">'+i[t].num1+'</font>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<strong>商品货号  : </strong>H000125\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<strong>累计销售   : </strong>1253\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul><li>提示  : 若是重要节假日期间配送(可咨询客服)，请选择下方的“节日预订价” ↓↓↓</li></ul>\n\t\t\t\t\t\t\t\t<ul class="ul2 clearfix">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<strong>是否节日  : </strong>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type="radio" checked name="1" />非节日 [ ￥0.00元]\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="1" />节日预订价 [加 ￥60.00元]\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<strong>购买数量  : </strong>\n\t\t\t\t\t\t\t\t\t\t<input type="text" size="4" value="1" id="txt" />\n\t\t\t\t\t\t\t\t\t\t<strong>商品总价  : </strong>\n\t\t\t\t\t\t\t\t\t\t<font style="color: #E50065;font-weight: bold;">'+i[t].num2+'</font>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="gou.html" id="btnn"><img src="../images/goumai2.gif" /></a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t分享到:\n\t\t\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t\t<a href="#"></a>\n\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="main-b">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>商品描述</li>\n\t\t\t\t\t\t\t\t<li>商品属性</li>\n\t\t\t\t\t\t\t\t<li>商品标签</li>\n\t\t\t\t\t\t\t\t<li>相关商品</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class="box_2">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p>鲜花详情</p>\n\t\t\t\t\t\t\t<table width="700" style="color: #000;font-size: 13px;margin-bottom: 25px;">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">花材：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">'+i[t].stuff+'</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">包装：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">'+i[t].packing+'</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">花语：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">'+i[t].flower+'</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">赠送：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">免费赠送留言卡一张（请在下单时，在“订单附言”处填写留言卡内容）。</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">配送：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">市区内，均可免费配送上门。</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">适用：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">'+i[t].apply+'</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td style="background: #91C5D4;border-right: 2px solid #fff;">说明：</td>\n\t\t\t\t\t\t\t\t\t<td style="background: #D5EAF0;">此为纯手工作品，包装纸颜色可能因地区差异而略有不同，但我们保证主花材品质、品种、数量与说明一致。</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<p><img src="../images/20170317124233_76178.jpg" /></p>\n\t\t\t\t\t\t\t<p><img src="../images/tu'+i[t].id+'-1.jpg" /></p>\n\t\t\t\t\t\t\t<p><img src="../images/20170317124451_91987.jpg" /></p>\n\t\t\t\t\t\t\t<p><img src="../images/20170317124508_21231.jpg" /></p>\n\t\t\t\t\t\t\t<p><img src="../images/20170317124528_77945.jpg" /></p>\n\t\t\t\t\t\t\t<p><img src="../images/20170317124542_92462.jpg" /></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>',a.aMain.html(n)}})}}),this.aMain.on("click",".jia",function(){"../images/btn_fold.gif"==$(this).attr("src")?$(this).attr("src","../images/btn_unfold.gif"):$(this).attr("src","../images/btn_fold.gif")}),this.aMain.on("mouseover","#imgs",function(){$(this).css("cursor","pointer"),$("#filter").stop(!0).show(),$(".maximg").stop(!0).show(),$(this).mousemove(function(t){a.move(t,this)})}),this.aMain.on("mouseout","#imgs",function(){$("#filter").stop(!0).hide(),$(".maximg").stop(!0).hide()}),this.aMain.on("click","#btnn",function(){if(localStorage.getItem("shop"))var t=JSON.parse(localStorage.getItem("shop"));else t={};if(t[a.num]){var n=t[a.num];n++,t[a.num]=n}else{var i=Number($("#txt").val());t[a.num]=i}var s=JSON.stringify(t);localStorage.setItem("shop",s)})}return $("#top").load("header.html"),t.prototype.move=function(t,n){this.l=t.pageX-$(n).offset().left-$("#filter").width()/2,this.t=t.pageY-$(n).offset().top-$("#filter").height()/2,this.l=this.l>$(n).width()-$("#filter").width()?$(n).width()-$("#filter").width():this.l<0?0:this.l,this.t=this.t>$(n).height()-$("#filter").height()?$(n).height()-$("#filter").height():this.t<0?0:this.t,$("#filter").css({left:this.l,top:this.t}),$(".mox").css({left:-this.l,top:-this.t})},{init:new t}});