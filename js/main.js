// window.onload = function() {
//   var hero_content = document.getElementById("inner_hero_content");
//   TweenLite.to(hero_content, 1, {"margin-top":"-80px"});
// }

// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('nav').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 100);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     if (st > lastScrollTop && st > navbarHeight){
        
//         $('nav').removeClass('nav-down').addClass('nav-up');
//     } else {
    
//         if(st + $(window).height() < $(document).height()) {
//             $('nav').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }

$(document).ready(function(){
  $('.your-class').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false,
    //setting-name: setting-value
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

//   For selct input box
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
$('select').formSelect();
});

// For AoS library
$(document).ready(function(){
    AOS.init();    
});
