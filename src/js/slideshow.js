class Slideshow {
  constructor() {
    this.index = 0;
    this.slides = $('.slide');
    this.numSlides = 3;
    this.showSlide(this.index);

    $('.prev').click(() => {
      this.showSlide(this.index - 1);
    })

    $('.next').click(() => {
      this.showSlide(this.index + 1);
    })
  }

  showSlide(n) {
    this.index = n;
    if (n > this.numSlides) {
      this.index = 0;
      n = 0;
    } else if (n < 0) {
      this.index = this.numSlides;
      n = this.numSlides;
    }
    this.slides.hide('fast', function() {
      $(`.slide:eq(${n})`).show('fast');
    });

  }

}