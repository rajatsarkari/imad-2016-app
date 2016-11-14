$(document).ready(function() {
	// // navigation click actions
	// $('.scroll-link').on('click', function(event){
	// 	event.preventDefault();
	// 	var sectionID = $(this).attr("data-id");
	// 	scrollToID('#' + sectionID, 750);
	// });
	// // scroll to top action
	// $('.scroll-top').on('click', function(event) {
	// 	event.preventDefault();
	// 	$('html, body').animate({scrollTop:0}, 'slow');
	// });
	// // mobile nav toggle
	// $('#nav-toggle').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('#main-nav').toggleClass("open");
	// });

	$('a[href*="#"]:not([href="#"])').click(function() {
		$('.navbar-nav li').removeClass('active');
		$(this).parent('li').addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// scroll function
function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}