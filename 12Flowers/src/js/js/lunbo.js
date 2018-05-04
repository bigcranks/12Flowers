define(["banner"],function(){		
		/*轮播图*/
		var swiper = new Swiper('.swiper-container', {
	      	pagination: '.swiper-pagination',
	      	paginationClickable :true,
	      	paginationBulletRender: function (swiper, index, className) {
      			return '<span class="' + className + '">' + (index + 1) + '</span>';
  			},
  			autoplay : 3000,
  			speed:2000,
  			autoplayDisableOnInteraction : false,
  			effect : 'fade',
	    });
	})