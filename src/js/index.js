class App {
  constructor() {
    this.init();
    this.addEventListeners();
    this.slideshow = new Slideshow();
  }

  init() {
    // clears inputs
    $('input, textarea').val('');
  }

  addEventListeners() {
    
    // smooth scroll to top
    $('#home-button').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });

    // change from title to details
    $('.resume-content').click(function() {
      if ($(this).children('h3').is(':visible')) {
        $(this).addClass('dark');
        $(this).children('h3').fadeOut('fast', () => {
          $(this).css('cursor', 'initial');
          $(this).children('.resume-details').fadeIn('fast');
          $(this).children('.close-button').fadeIn('fast');
        });
      }
    });

    // exit details to title
    $('.resume-content .close-button').click(function() {
      $(this).fadeOut('fast');
      $(this).parent().removeClass('dark');
      $(this).siblings('.resume-details').fadeOut('fast', () => {
        $(this).parent().css('cursor', 'pointer');
        $(this).siblings('h3').fadeIn('fast');
      });
    })

    // floating label rise
    $('input, textarea').focus(function() {
      $(this).parent().addClass('active');
    });

    // floating label fall
    $('input, textarea').blur(function() {
      if ($(this).val().length !== 0) return;
      $(this).parent().removeClass('active');
    });
  }

}

$(document).ready(() => {
  const app = new App();
});
