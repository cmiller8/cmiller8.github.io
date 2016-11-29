(function($){

	$(document).ready(function(){
		$('.gallery a, .post a')
		.fluidbox({immediate:true, viewportFill: 0.9})
		.on('openstart', function(){
			$(".site-header").fadeOut('fast');
		})
		.on('openend', function(){
			var caption = $(this).attr('title');
			if (caption) {
				var $caption = $("<div class='caption'><p>" + caption + "</p></div>");
				$('body').append($caption);
			}
		})
		.on('closestart', function(){
			$('body').find('>.caption').remove();
			$(".site-header").fadeIn('fast');
		});
		
		$(".packery").each(function(){
			var $packery = $(this);
			var $imgs = $packery.find('img');
			$imgs.css('opacity',0);
			$imgs.each(function(){
				var $img = $(this);
				var aspect = $img.attr('data-aspect');
				if (aspect) {
					var $item = $(this).closest('a, div, li');
					var w = $item.width();
					var h = w / aspect;
					$img.height(h);
				}
				
			});

			$packery.packery({
				itemSelector: '.pack',
				gutter: 0
			});
			$imgs.css('opacity',1);


		});
		

		$packPosts = $(".packery-posts");
		if ($packPosts.length) {
			var $postImgs = $packPosts.find('img');
			$postImgs.each(function(){
				var $img = $(this);
				var aspect = $img.attr('data-aspect');
				if (aspect) {
					var $inner = $img.closest('li.post').find('.inner');
					var w = $inner.width();
					var h = w / aspect;
					$img.height(h);
				}
			});

			$packPosts.packery({
				itemSelector: 'li.post',
				gutter: 0
			});
		}


		$(window).on('hashchange', function(e) {
			if (window.location.hash === '#footer') {
				$('#footer .footer-col-1').addClass('highlighted');
			}
		});

	});

})(jQuery);