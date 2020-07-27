
// навигация
$(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>150){
          $('#navigation').addClass('fixed');
      }
      else if ($(this).scrollTop()<150){
          $('#navigation').removeClass('fixed');
      }
  });
});
// ---------------------------------------------

// бургер меню )
$(document).ready(function() {
  $('.menu-burger__button').click(function(event) {
    $('.menu-burger__button, .menu-burger__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// --------------------------------------

// анимация при скроле)
var isScrolling=false;
$(window).on("DOMMouseScroll mousewheel",function(e){
    if(!isScrolling){
        isScrolling=true;
        var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
        if (delta >= 0) {
            isScrolling=false;
            $('.hidden').removeClass('hidden');
        }else {
            if($(window).scrollTop()>300){
                $('.one').addClass('hidden');
            }
            if($(window).scrollTop()>1200){
              $(' .two').addClass('hidden');
            }
            isScrolling=false;
        }
    }
});
// --------------------------------------------------

// ЯЗЫКИ
$(document).ready(function() {
  $('.dropdown').click(function(event){
    $(this).toggleClass('active').next().slideToggle(100);  
  });
  
  // $('body').click(function(event){
  //   $('.dropdown').removeClass('active').next().slideToggle(100);
    
    
  // });

});
// --------------------------------------------------

// якорь
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};
// -------------------------------------------------

// ДЛЯ ВИДЕО
var video;
window.onload = function() {
  video = document.getElementById("video");
  
};
function play1() {
  video1.play();
}
function play2() {
    video2.play();  
}
function play3() {
  video3.play();
};
// -----------------------------------------
// маленькие круглые видео
// пуск1
$(document).on('click', '.play_video1', function() {
  $(' .play_video1, .overflow_video1').hide(100);
  $(' video').addClass('open');
});
// --------------------------------
// пуск2
$(document).on('click', '.play_video2', function() {
  $(' .play_video2, .overflow_video2').hide(100);
});
// -------------------------------
// пуск3
$(document).on('click', '.play_video3', function() {
  $(' .play_video3, .overflow_video3').hide(100);
});
// -------------------------------
$(document).ready(function() {
  $('.play_video1').click(function(event) {
    $('.vidos #video1').addClass('open1');
  });
});
$(document).ready(function() {
  $('.play_video2').click(function(event) {
    $('.vidos #video2').addClass('open2');
  });
});
$(document).ready(function() {
  $('.play_video3').click(function(event) {
    $('.vidos #video3').addClass('open3');
  });
});
// ------------------------------------------------