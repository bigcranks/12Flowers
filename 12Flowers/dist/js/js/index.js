"use strict";define(["jquery"],function(){function t(){var o=this;this.oGood=$(".clearfix"),$.ajax({type:"get",url:"../js/js/hua.json",data:{},success:function(t){o.cha(0,4,o.oGood[0],t),o.cha(4,14,o.oGood[1],t),o.cha(14,24,o.oGood[2],t),o.cha(24,34,o.oGood[3],t),o.cha(34,39,o.oGood[4],t),o.cha(39,49,o.oGood[5],t)}}),$(".box").on("click",".gl",function(){var t=this.getAttribute("data-id");location.href="xiang.html?"+t}),this.oList=$(".menu>ul>li"),this.oList.mouseover(function(){$(this.firstElementChild).addClass("cuur"),$(this.lastElementChild).css("display","block")}),this.oList.mouseout(function(){$(this.firstElementChild).removeClass("cuur"),$(this.lastElementChild).css("display","none")})}return t.prototype.cha=function(o,s,t,i){var n="";$.each(i,function(t){o<=t&&t<s&&(n+='<div class="goodsItem">\n\t\t\t\t\t<a href="#" data-id="'+(t+1)+'" class="gl"><img src="../images/tu'+i[t].id+'.jpg" /></a>\n\t\t\t\t\t<br />\n\t\t\t\t\t<p><a href="#" data-id="'+(t+1)+'" class="gl">'+i[t].title+'</a></p>\n\t\t\t\t\t市场价:<font class="market">'+i[t].num1+'</font>\n\t\t\t\t\t<br />\n\t\t\t\t\t本店价:<font class="f1">'+i[t].num2+" </font>\n\t\t\t\t</div>")}),$(t).html(n)},{init:new t}});