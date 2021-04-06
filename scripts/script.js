const nextIcon = '<img src="/images/right-arrow.svg" alt="right">';
const prevIcon = '<img src="/images/left-arrow.svg" alt="left" >';


 
$(window).on('resize', function (){
    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    //if (!isMobile.matches) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        var $item = $('.carousel .carousel-item'); 
        var $wHeight = $(window).height();
        //$item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');
        
        $('.carousel .carousel-item').each(function() {
          var backgroundnew = "url('" + $(this).attr('data-deskimg') + "')";
            $(this).css({
                'background' : 'url(' + $(this).attr('data-deskimg') + ')',
                'background-size' : 'cover',
                'background-repeat' : 'no-repeat'
             }); 
    
        });
        
       
          //$wHeight = $(window).height();
          //$item.height($wHeight);
    
    
    }else{
       
       $('.carousel .carousel-item').removeClass('full-screen');
        $('.carousel .carousel-item').each(function() {
             $(this).css('height','auto');
           // $(this).data('bg', $(this).css('background'));
            var backgroundnew = "url('" + $(this).attr('data-mobImg') + "')";
           // $(this).css('background', backgroundnew);   
            $(this).css({
                'background' : 'url(' + $(this).attr('data-mobImg') + ')',
                'background-size' : 'cover',
                'background-repeat' : 'no-repeat'
             });
        });
        
    }
}).trigger("resize");


$(document).ready(function(){
    
    $('#carousel_slider').carousel({
      interval: 6000,
      pause: "false"
    });     
          
       


    $(".stay-owl").owlCarousel({
      items:2,
      autoplay:false,
      autoplaySpeed:1000,
      margin:30,
      nav: true,
      navText: [prevIcon,nextIcon],
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1400:{
              items:2
          }
      }
    });
    $("#reviews-hotel-owl").owlCarousel({
        items:1,
        autoplay:5000,
        autoplaySpeed:1000,
        margin:30,
        nav:false,
        navText: ["", ""],
        dots: true,
        responsiveClass:true
    });
    $('.awards-owl').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    
    
    
    

    $(".owl-gallery").each(function(){
        $(this).owlCarousel({
            items:1,
           // autoplay:5000,
            autoplaySpeed:1000,
            margin:30,
            nav:false,
            navText: ["", ""],
            dots: true,
            responsiveClass:true
        });
      });

$("#offers-owl").owlCarousel({
      items:2,
      autoplay:5000,
      autoplaySpeed:1000,
      margin:30,
      nav:false,
      navText: ["", ""],
      dots: true,
      responsiveClass:true,
      autoplay: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  });





  // MAIN MENU
	$('.main-menu .plus').on('click', function(){
		$('.main-menu li.parent').not($(this).parent()).removeClass('opened');
		if( !$(this).parent().hasClass('opened') ) {
			$(this).parent().addClass('opened');
		} else {
			$(this).parent().removeClass('opened');
		}
	});	

			
	
	$('.dropdown-menu').find('form').click(function (e) {
						
		e.stopPropagation();
	  });


	$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
    }); 
    
    
    
    $( ".openMenu" ).click(function() {
      $( "#navbar").css("height", "100vh");
      $( "body").css("overflow", "hidden");
    });
    $( ".closeMenu" ).click(function() {
      $( "#navbar").css("height", "0");
      $( "body").css("overflow", "auto");
    });


    $select2 = $(".js-example-basic-multiple").select2({
        placeholder: "CHOOSE VILLAS"});


     // home_accommodationCarousel
     $(".villas_carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav:true,
        navText: ["", ""],
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            767:{
                items: 2
            },
            1300: {
                items:3
            }
        }
    });


     // home_accommodationCarousel
     $(".villaType_carousel").owlCarousel({
        loop: false,
        margin: 0,
        nav:true,
        navText: ["", ""],
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            480: {
                items: 2
            },
            767:{
                items: 4
            },
            1300: {
                items:5
            }
        }
    });


    // add all to same gallery
    $(".gallery .fancy").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery .fancy").each(function(){
      $(this).attr("data-caption", $(this).find("img").attr("alt"));
      $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
      $(".gallery .fancy").fancybox();


      $(".myTabs").tabs({
        show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" },
        hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } });
   


});  



if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(35.332557, 25.324405);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
    map.data.setControls(["Polygon"])

}



