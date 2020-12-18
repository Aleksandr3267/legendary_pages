
// burger
$(document).ready(function () {
    $('.burder_menu').click(function (event) {
        $('.burder_menu, #main-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// slider
$(document).ready(function(){
    $('.charity_slider').slick({
        dots:true,
        
    });
});


