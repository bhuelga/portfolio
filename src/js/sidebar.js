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
      }

      if (scrollTop > windowHeight && scrollTop < 2*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(1)').addClass('active');
      } else if (scrollTop > 2*windowHeight && scrollTop < 3*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(2)').addClass('active');
      } else if (scrollTop > 3*windowHeight && scrollTop < 4*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(3)').addClass('active');
      } else if (scrollTop > 4*windowHeight) {
        $('#sidebar ul li').removeClass('active');
        $('#sidebar ul li:eq(4)').addClass('active');
      }
    })

    // sidebar links
    $('#sidebar ul li').click(function() {
      $('#sidebar ul li').removeClass('active');
      $(this).addClass('active');
    })
  }
}