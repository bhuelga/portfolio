class Sidebar {
  constructor() {
    
    // fix sidebar on scroll
    $(window).scroll(function() {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scrollTop > windowHeight) {
        $('#sidebar').addClass('fixed');
      } else {
        $('#sidebar').removeClass('fixed');
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(0)').addClass('active');
        $('#sidebar img').attr('src', '../img/seal.png');
      }

      // active links on scroll
      if (scrollTop > windowHeight && scrollTop < 2*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(1)').addClass('active');
        $('#sidebar > img').attr('src', '../img/turtle.png');
      } else if (scrollTop > 2*windowHeight && scrollTop < 3*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(2)').addClass('active');
        $('#sidebar > img').attr('src', '../img/tuna.png');
      } else if (scrollTop > 3*windowHeight && scrollTop < 4*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(3)').addClass('active');
        $('#sidebar > img').attr('src', '../img/shark.png');
      } else if (scrollTop > 4*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(4)').addClass('active');
        $('#sidebar > img').attr('src', '../img/octopus.png');
      }
    })

    // sidebar links
    $('#sidebar ul li').click(function() {
      $('#sidebar ul li').removeClass('active');
      $(this).addClass('active');
    })
  }
}