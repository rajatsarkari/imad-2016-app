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
                    setTimeout(function(){
                        skillBars.htmlBar.animate(0);
                        skillBars.htmlBar.animate(0.6);
                        
                        skillBars.cssBar.animate(0);
                        skillBars.cssBar.animate(0.65);
                        
                        skillBars.javaBar.animate(0);
                        skillBars.javaBar.animate(0.7);
                        
                        skillBars.dbmsBar.animate(0);
                        skillBars.dbmsBar.animate(0.5);
                        
                        skillBars.assemblyBar.animate(0);
                        skillBars.assemblyBar.animate(0.7);
                        
                        skillBars.cBar.animate(0);
                        skillBars.cBar.animate(0.9);
                        
                        skillBars.mBar.animate(0);
                        skillBars.mBar.animate(0.8);
                    },1000);
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