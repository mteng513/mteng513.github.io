$(function() {
  mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

// function mobileNav() {
// 	$('.mobile-nav-toggle').on('click', function(){
// 		var status = $(this).hasClass('is-open');
// 		if(status){
// 			$('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
// 		}
// 		else{
// 			$('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
// 		}
// 	});
// }


$(window).scroll(function(){
  imageScroll();
});

function imageScroll(){
  var ofScroll = $(window).scrollBottom();
  $('.image-strip').css('background-position', 'center ' + ofScroll + 'px');
}

$.fn.scrollBottom = function() {
  return $(document).height() - this.scrollTop() - this.height();
};
