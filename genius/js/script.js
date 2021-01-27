
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



/* --------------------------------- spoiler -------------------------------- */
var halfText = $('.spoiler').innerHeight() / 2,
    textHeight = $('.spoiler').innerHeight();

$('.spoiler').css('height', $('.spoiler').innerHeight() / 2);

$('.show-hide').click(function() {
    if( $('.spoiler').innerHeight() == halfText ) {

        $('.spoiler').animate({ height: textHeight }, 500);
        // $(this).text('Скрыть');
        $('.spoiler').css({
            'background':'none',
            '-webkit-background-clip':'content',
            '-webkit-text-fill-color':'currentcolor'
        }, 500);
    } else {
        $('.spoiler').css({
            'background':'',
            '-webkit-background-clip':'',
            '-webkit-text-fill-color':''
        }, 500);
        $('.spoiler').animate({ height: halfText }, 500);
        // $(this).text('Показать');
    }
});

