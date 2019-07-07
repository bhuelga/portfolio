class Slideshow {
  constructor(section, numSlides) {
    this.section = section;
    this.index = 0;
    this.slides = $(section).children('.slide');
    this.numSlides = numSlides;
    this.showSlide(this.index);

    // previous slide button
    $(section).children('.prev').click(() => {
      this.showSlide(this.index - 1);
    })

    // next slide button
    $(section).children('.next').click(() => {
      this.showSlide(this.index + 1);
    })

    // dots
    $(section).children('.dots').children('span').click((e) => {
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
    setTimeout(() => {
      $(this.section).children(`.slide:eq(${n})`).fadeIn();
    }, 500);
  }

  // highlights correct dot
  _activateDots(index) {
    $(this.section).children('.dots').children('span').removeClass('active');
    $(this.section).children('.dots').children(`span:eq(${index})`).addClass('active');
  }

}