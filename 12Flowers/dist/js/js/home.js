"use strict";define(["jquery","jq-cook"],function(){return $("#foot").load("foot.html"),{init:function(){if(this.aLogo=$(".logo"),localStorage.getItem("shop")){var i=0,o=JSON.parse(localStorage.getItem("shop"));$.each(o,function(o,t){i+=t}),$("#cun").html(i)}$.cookie("user")&&($("#user11").html($.cookie("user")),$("#xxx").html("注销")),$("#xxx").click(function(){"注册"==$(this).html()?location.href="zhu.html":($.cookie("user","",{expires:0,path:"/"}),location.reload())}),window.onscroll=function(){$(".logo").animate({top:130+$(document).scrollTop()+"px"},30)},this.aLogo.mouseover(function(){$(this.firstElementChild).css("display","none"),$(this.lastElementChild).css("display","block")}),this.aLogo.mouseout(function(){$(this.firstElementChild).css("display","block"),$(this.lastElementChild).css("display","none")}),$.ajax({type:"get",url:"../js/js/hua.json",success:function(s){$("#top").on("input propertychange","#sea",function(){var t=this.value,i="";$.each(s,function(o){0<=s[o].title.indexOf(t)&&""!=t&&($(".searchbox").css("display","block"),i+='<li data-id="'+s[o].id+'">'+s[o].title+"</li>")}),$(".searchbox").html(i)})}}),$("#top").on("click",".searchbox>li",function(){var o=$(this).attr("data-id");$("#sea").val($(this).html()),$(".searchbox").css("display","none"),$("#sut").click(function(){location.href="xiang.html?"+o})})}}});