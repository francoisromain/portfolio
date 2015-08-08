$(document).ready(function() {
	var menu = $("#menu");
	var	menuCurrent; 
	var iconMenuMain = $("#icon-menu-main");
	var iconMenuCart = $("#icon-menu-cart");
	
	$.menuToggle = function(menuNext) {		
		if (menu.is(":visible")) {
			if (menuNext != menuCurrent) { 
				var callback = menuNext; 
			}
			menuClose(callback);
		} else {
			$.menuOpen(menuNext);
		}
	}
	
	var menuHide = function() {
		$("#menu > div > div").addClass('hide'); 
	}
	
	var menuClose = function(callback) {
		menu.velocity("slideUp", { 
			duration: 300, 
			complete: function(elements) { 
				iconMenuMain.removeClass( "icon-menu-of").addClass( "icon-menu-main");
				iconMenuCart.removeClass( "icon-menu-of").addClass( "icon-menu-cart");
				if (callback) { 
					$.menuOpen(callback); 
				} 
			} 
		});
	};
	
	$.menuOpen = function(menuNext) {
		menuHide(); 
		menuCurrent = menuNext; 
		$("#" + menuCurrent).removeClass('hide'); 
		menu.velocity("slideDown", { duration: 300 });
		$("#icon-" + menuCurrent).removeClass( "icon-" + menuCurrent).addClass("icon-menu-of");
	};
	
	$("#menu-toggle").on("click", "div", function (event) {
		var menuNext = $(this).data('target'); 
		$.menuToggle(menuNext);     
	});
	
	var glide = $('.slider').glide({
		autoplay: false,
		arrows: false, 
		navigation: false
	}).data('api_glide');
	var sliderNavLinks = $("#slider-nav").find("span"); 
	sliderNavLinks.click(function (e) {
		e.preventDefault();
		glide.jump(sliderNavLinks.index(this) + 1, console.log('Wooo!'));
	});
	
	$("#email-verification").hide();
	
	
	$("#form-newsletter").submit(function(e){
		e.preventDefault(); 
		
		var $form = $(this),
		name = $form.find('input[name="name"]').val(),
		email = $form.find('input[name="email"]').val(),
		lang = $form.find('input[name="lang"]').val(),
		url = $form.attr('action');
		
		$.post(url, { name:name, email:email, lang:lang }, function(data) {
			$("#toast-email").addClass('hide');
			$("#toast-error").addClass('hide');
			$("#toast-warning").addClass('hide');
			$("#toast-success").addClass('hide');
			$("#toast-already").addClass('hide');
			if(data) {
				if(data == "Some fields are missing.") {
					$("#toast-error").removeClass('hide');
				} else if(data=="Invalid email address.") {
					$("#toast-email").removeClass('hide');
				} else if(data=="Invalid list ID.") {
					$("#toast-warning").removeClass('hide');
				} else if(data=="Already subscribed.") {
					$("#toast-already").removeClass('hide');
				} else {
					$("#toast-success").removeClass('hide');
					$("#form-newsletter").addClass('hide');
				}
			} else {
				$("#toast-warning").show();
			}
		});
	});
	$("#form-newsletter").keypress(function(e) {
		    if(e.keyCode == 13) {
		    	e.preventDefault(); 
				$(this).submit();
		    }
		});
	$("#submit-btn").click(function(e){
		e.preventDefault(); 
		$("#form-newsletter").submit();
	});

	var imgLoad = function() {
		imagesLoaded("#content").on( 'progress', function( instance, image ) {
			var result = image.isLoaded ? 'loaded' : 'broken';
			$(image.img).velocity({ opacity: 1 }, { duration: 1500 });
		});
	}
	
	var container = $('#grid');
	var masonryIsOn = false; 
	var masonryGrid = function () {
		if (window.matchMedia("(min-width: 528px)").matches) {
			container.masonry({
				itemSelector: '.bloc'
			});
			masonryIsOn = true; 
		} else if (masonryIsOn) {
			container.masonry('destroy');
			masonryIsOn = false;
		}
	}
	
	masonryGrid(); 
	$("#content").velocity({ opacity: 1 }, { 
		duration: 500
	});
	imgLoad();
	$(window).on('resize', function(){
		masonryGrid(); 
	});
});