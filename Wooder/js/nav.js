//  для навигиции  
        $(function($) {
    $(window).scroll(function(){
      if($(this).scrollTop()>80){
          $('#navigation').addClass('fixed');
      }
      else if ($(this).scrollTop()<80){
          $('#navigation').removeClass('fixed');
      }
  });
});



$(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>80){
          $('#navigation').addClass('fixed');
      }
      else if ($(this).scrollTop()<80){
          $('#navigation').removeClass('fixed');
      }
  });
});
// ------------------------------------------------