'use strict';


// forms
$(document).ready(function () {
    $('.home_submit').click(function (event) {
        $('.home_submit, .main-content').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.button_exit').on('click', function(){
    $('.home_submit, .main-content').toggleClass('active');
    $('body').toggleClass('lock');
});

// якорь
$(document).ready(function(){
    $("#main-menu").on("click","a", function (event) {
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
new Swiper('.image_slider', {
    // pagination: {
    //     el: '.swiper-pagination',

    // type: 'progressbar'
    // },

    scrollbar: {
        el: '.swiper-scrollbar',

        draggable: true
    },
    autoHeight: true,

    slidesPerView:3,
    spacebetween:30,

    sledesPerGroup: 1,

    // for scroll on curcle
    mousewheel: {
        // sensitivity 
        sensitivity:1,

        eventsTarget: ".image_slider"
    },

    // adaptive
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        }
    },
});