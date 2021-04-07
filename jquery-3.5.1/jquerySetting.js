$(document).ready(function () {
  $(window).scroll(function (event) {
      if ($("html").scrollTop() > 100) {
        $('.top').fadeIn(300);
      } else {
        $('.top').fadeOut(300);
      }
    });
  $('.top').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({
          scrollTop:0
      },1000)
  }); 
});