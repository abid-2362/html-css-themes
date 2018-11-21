// initilizations
$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.modal').modal();
  /*
    $('.slider').slider({
      indicators: false,
      height: 500,
      duration: 500,
      interval: 6000
    });
    $('.autocomplete').autocomplete({
      data: {
        'Aruba': null,
        'Cancun Mexico': null,
        'Hawaii': null,
        'Florida': null,
        'California': null,
        'Jamaica': null,
        'Europe': null,
        'The Bahmas': null,
      }
    });
    $('.materialboxed').materialbox();
  
    $('.scrollspy').scrollSpy();
  */
});