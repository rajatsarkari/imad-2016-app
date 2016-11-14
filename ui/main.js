$(document).ready(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		$('.navbar-nav li').removeClass('active');
		$(this).parent('li').addClass('active');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	createSkillProgress('.htmlbar', 0.6);
	createSkillProgress('.cssbar', 0.7);

});

function createSkillProgress(skill, value) {
	var bar = new ProgressBar.Circle(skill, {
    strokeWidth: 3,
    color: 'seagreen',
		text: {
			value: value * 100 + '%',
			className: 'progressbar-label'
		}
	});

	bar.animate(value);
}