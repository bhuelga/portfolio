class Slideshow {
  constructor() {
    this.index = 0;
    this.slides = $('.slide');
    this.numSlides = 5;         // INPUT NUM SLIDES - 1 (b/c zero indexed)
    this.showSlide(this.index);

    // previous slide button
    $('.prev').click(() => {
      this.showSlide(this.index - 1);
    })

    // next slide button
    $('.next').click(() => {
      this.showSlide(this.index + 1);
    })

    // dots
    $('.dots span').click((e) => {
      const index = $(e.currentTarget).index();
      this.showSlide(index);
      this._activateDots(index);
    })
  }

  // shows slide
  showSlide(n) {
    this.index = n;
    if (n > this.numSlides) {
      this.index = 0;
      n = 0;
    } else if (n < 0) {
      this.index = this.numSlides;
      n = this.numSlides;
    }
    
    this._activateDots(n);
    this.slides.fadeOut();
    setTimeout(function() {
      $(`.slide:eq(${n})`).fadeIn();
    }, 500);
  }

  // highlights correct dot
  _activateDots(index) {
    $('.dots span').removeClass('active');
    $(`.dots span:eq(${index})`).addClass('active');
  }

}