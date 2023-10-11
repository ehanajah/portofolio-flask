$(document).ready(function () {
  $('.nav-scroll').on('click', function (e) {
      var target = $(this).attr('href');
      var targetElement = $(target);

      $('html, body').animate({
          scrollTop: targetElement.offset().top - 60
      }, 600);

      e.preventDefault();
  });
});
