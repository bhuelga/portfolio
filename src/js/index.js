class App {
  constructor() {
    this.sidebar = new Sidebar();
    this.projectsSlideshow = new Slideshow('#projects-section .slideshow', 1);
    this.experienceSlideshow = new Slideshow('#experience-section .slideshow', 5);
  }
}

$(document).ready(() => {
  const app = new App();
});
