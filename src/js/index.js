class App {
  constructor() {
    this.sidebar = new Sidebar();
    this.slideshow = new Slideshow();
    this.addEventListeners();
  }

  addEventListeners() {
    
  }

}

$(document).ready(() => {
  const app = new App();
});
