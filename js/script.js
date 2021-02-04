$(document).on("scroll", function(){
        if ($(document).scrollTop() > 40){
            $(".primary-nav").addClass("shrink");
        } else {
            $(".primary-nav").removeClass("shrink");
        }
});



   
// $(function(){
//     var navScroll = $('scoling');
    
//     $(window).scroll(function(){
//       if($(window).scrollTop() <= 40){
//         navScroll.removeClass('navbar-normal');
//       } else {
//         navScroll.addClass('navbar-scroll');
//       }
//     });
//   });
//   $(function(){
//     var navbar = $('#logo');
    
//     $(window).scroll(function(){
//       if($(window).scrollTop() <= 40){
//         navbar.removeClass('smallLogo');
//       } else {
//         navbar.addClass('smallLogo');
//       }
//     });
//   });
