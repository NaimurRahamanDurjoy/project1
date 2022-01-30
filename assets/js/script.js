
// sticky and change color
  $(document).ready(function(){
  	$(window).scroll(function(){
  		var navFixed = $(window).scrollTop();
  		if(navFixed > 400){
  			$(".navigation").addClass("fixed-top scroll-bg");
  		}else{
  			$(".navigation").removeClass("fixed-top scroll-bg");
  		}
  	});
  });
// sticky and change color

// scroll-spy
  (function ($) {
    "use strict";
     smartScroll.init({
     speed: 1000,
     addActive: true, 
     activeClass: "active",
     offset: 150
      }, function () {
       console.log("callback");
    });
  })(jQuery);
// scroll-spy 

// smooth scroll
  $(".page-header ul a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });
// smooth scroll 

//isotope filter

// isotope filter
