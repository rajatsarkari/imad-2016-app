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
                        skillBars.htmlBar.animate(0, {duration: 200});
                        skillBars.cssBar.animate(0, {duration: 200});
                        skillBars.javaBar.animate(0, {duration: 200});
                        skillBars.dbmsBar.animate(0, {duration: 200});
                        skillBars.assemblyBar.animate(0, {duration: 200});
                        skillBars.mBar.animate(0, {duration: 200});
                        skillBars.cBar.animate(0, {duration: 200});
                        
                        setTimeout(function(){
                            skillBars.mBar.animate(0, {duration: 1000});
                            skillBars.htmlBar.animate(0.6, {duration: 1000});
                            skillBars.cssBar.animate(0.65, {duration: 1000});
                            skillBars.javaBar.animate(0.7, {duration: 1000});
                            skillBars.dbmsBar.animate(0.5, {duration: 1000});
                            skillBars.assemblyBar.animate(0.7, {duration: 1000});
                            skillBars.mBar.animate(0.8, {duration: 1000});
                            skillBars.cBar.animate(0.9, {duration: 1000});
                        }, 1000);
                }
                //$('.navbar-toggle').click();
                return false;
            }
        }
    });
    
    skillBars.mBar.animate(0, {duration: 1000});
    skillBars.htmlBar.animate(0.6, {duration: 1000});
    skillBars.cssBar.animate(0.65, {duration: 1000});
    skillBars.javaBar.animate(0.7, {duration: 1000});
    skillBars.dbmsBar.animate(0.5, {duration: 1000});
    skillBars.assemblyBar.animate(0.7, {duration: 1000});
    skillBars.mBar.animate(0.8, {duration: 1000});
    skillBars.cBar.animate(0.9, {duration: 1000});
    
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