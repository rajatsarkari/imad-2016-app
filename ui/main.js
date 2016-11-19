var skillBars = {
    htmlBar: createSkillProgress('.htmlbar', 0.6),
    cssBar: createSkillProgress('.cssbar', 0.65),
    javaBar: createSkillProgress('.javabar', 0.7),
    dbmsBar: createSkillProgress('.dbmsbar', 0.5),
    assemblyBar: createSkillProgress('.assemblybar', 0.7),
    cBar: createSkillProgress('.cbar', 0.9),
    mBar: createSkillProgress('.mbar', 0.8)
};

$(document).ready(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        $('.navbar-nav li').removeClass('active');
        $(this).parent('li').addClass('active');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                console.log(target[0].id);
                if (target[0].id == 'skills') {
                    animateSkill(skillBars.htmlBar, 0.6);
                    animateSkill(skillBars.cssBar, 0.65);
                    animateSkill(skillBars.javaBar, 0.7);
                    animateSkill(skillBars.dbmsBar, 0.5);
                    animateSkill(skillBars.assemblyBar, 0.7);
                    animateSkill(skillBars.cBar, 0.9);
                    animateSkill(skillBars.mBar, 0.8);
                }
                return false;
            }
        }
    });
    loadBlogPosts();
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

    return bar;
}

function animateSkill(skill, value){
    skill.animate(0, {
        duration: 300
    });
    
    skill.animate(value, {
        duration: 1000
    });
}

function loadBlogPosts() {
    $.ajax({
        url: 'http://rsblog.getsandbox.com/posts',
        method: 'GET',
        success: function(res) {
            renderPosts(res.data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function renderPosts(posts) {
    $('.post-container').find('.post').remove();
    $.each(posts, function(i, post) {
        var wrapper = $('<div class="post"></div>');
        var title = $('<h3 class="post-title">' + post.title + '</h3>');
        var date = $('<h5 class="post-date">' + post.date + '</h5>');
        var content = $('<p class="post-content">' + post.content + '</p>');
        wrapper.append(title).append(date).append(content);
        $('.post-container').append(wrapper);
    });
}