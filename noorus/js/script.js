// якорь
$(document).ready(function(){
    $("#main").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// burger
$(document).ready(function () {
    $('.burder_menu').click(function (event) {
        $('.burder_menu, #main-menu, #main-menu-news').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.link').on('click', function(){
    $('.burder_menu, #main-menu, #main-menu-news').toggleClass('active');
    $('body').toggleClass('lock');
});

// slider
$(document).ready(function () {
    $('.charity_slider').slick({
        dots: true,
    });
});