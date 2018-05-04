require(["config"],function(){
	require(["jquery","home","list","jq-cook","layui"],function($,home,list){
		home.init();
		list.init();
	})
})