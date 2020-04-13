$(function(){


"use strict";

var navHeight = $(".mynavbar").innerHeight();

// Fix The Header Height

var WinHeight = $(window).height();

$("header").height(WinHeight);


$(window).trigger('scroll');
$(window).on("scroll",function(){


  if($(this).scrollTop() > 50)
  {
    $(".mynavbar").addClass("nicescroll");
  }
  else {
    $(".mynavbar").removeClass("nicescroll");

  }

});

// Add Nice Scoll When Navbar Is Toggled


$(".navbar-toggler").click(function(){

if (!$(".mynavbar").hasClass("nicescroll")) {
  $(".mynavbar").addClass("nicescroll");

}

});

// Change The Bar To X On SlideDown

$(".navbar-toggler").on("click",function(){

  $(".navbar-toggler span:eq(0)").toggleClass("translated-first");
  $(".navbar-toggler span:eq(1)").toggle(300);
  $(".navbar-toggler span:eq(2)").toggleClass("translated-last");
});


$(".navbar-brand").click(function(e){

e.preventDefault();


$("html,body").animate({

scrollTop : 0

},1500);
});

$(".nav-item .nav-link").click(function(e){

e.preventDefault();

$("html,body").animate({

scrollTop : $($(this).data("scroll")).offset().top - navHeight

},1500);
});



$(".go-up").click(function(e){

e.preventDefault();

$("body,html").animate({

scrollTop: 0

},1500)

});

$(window).scroll(function(){


if($(this).scrollTop() > 100)
{
  $(".go-up").fadeIn("slow");
}
else {
  $(".go-up").fadeOut("slow");
}

});



$(window).scroll(function(){

if( ($(window).scrollTop() + navHeight) >= $("#number").offset().top )

{
$('.timer').countTo();
}
});





});
