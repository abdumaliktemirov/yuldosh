$(document).ready(function () {

	$(function (){
	    $('input[name=phone]').mask('+7 (999) 999-99-99');
	});

    

    $('.main-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        center: false,
        smartSpeed:900,
        items:2,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1.2,
                margin:20,
            },
            600:{
                items:2,
                margin:20,
            },
            1000:{
                items:2,
                margin:30,
            }
        }
    });
      // ///////////

    $('.full-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });
    $('.full-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.full-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

    // ///////
    $('.head-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay : true,
        autoplayTimeout : 5000,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:0,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });
  
    // //////
    $('.residence-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1.2,
                margin:15,
            },
            600:{
                items:3,
                margin:20,
            },
            1000:{
                items:4,
                margin:30,
            }
        }
    });
    $('.residence-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.residence-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

      // ////////////////
    $('.nature-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        center: false,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1.2,
                margin:15,
            },
            600:{
                items:3,
                margin:20,
            },
            1000:{
                items:4,
                margin:30,
            }
        }
    });
    $('.nature-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.nature-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

      // /////////
    $('.sights-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        center: false,
        items:4,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1.2,
                margin:15,
            },
            600:{
                items:3,
                margin:20,
            },
            1000:{
                items:4,
                margin:30,
            }
        }
    });
    $('.sights-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.sights-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });
   
    // ////////////////
    $('.catalog-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        center: false,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:15,
            },
            600:{
                items:1,
                margin:20,
            },
            1000:{
                items:1,
                margin:30,
            }
        }
    });
    $('.catalog-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.cat-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });
    
      // ///////////
    $('.place-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        // center: true,
        autoWidth:true,
        items:3,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:15,
            },
            600:{
                items:2,
                margin:20,
            },
            1000:{
                items:3,
                margin:30,
            }
        }
    });
    $('.place-slide').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

        // ///////////
    $('.place-slide-two').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        // center: true,
        autoWidth:true,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:15,
            },
            600:{
                items:2,
                margin:20,
            },
            1000:{
                items:3,
                margin:30,
            }
        }
    });
    $('.place-slide-two').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter-two').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });

        // ///////////
    $('.place-slide-three').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        smartSpeed:900,
        // center: true,
        autoWidth:true,
        items:1,
        navText: ['<img src="images/slide-left-arrow.svg">','<img src="images/slide-right-arrow.svg">'],
        responsive:{
            0:{
                items:1,
                margin:15,
            },
            600:{
                items:2,
                margin:20,
            },
            1000:{
                items:3,
                margin:30,
            }
        }
    });
    $('.place-slide-three').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter-three').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true
    });


    $('.navbar-toggler').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar-brand.mob').toggleClass('active');
        $('.navbar-brand.pc').toggleClass('active');
    });

    $('.dropdown-toggle').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.dropdown-menu').toggleClass('show');
    });

    $('.mob-filter-btn, .close-filter').on('click',function(e){
        e.preventDefault();
        $('.catalog-sec .check-col').toggleClass('active');
    });

    $('.near-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.near-block').toggleClass('active');
    });
    

	/* 1. Visualizing things on Hover - See next part for action on click */
      $('.comment-star').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
       
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('.comment-star').each(function(e){
          if (e < onStar) {
            $(this).addClass('hover');
          }
          else {
            $(this).removeClass('hover');
          }
        });
        
      }).on('mouseout', function(){
        $(this).parent().children('.comment-star').each(function(e){
          $(this).removeClass('hover');
        });
      });
      
      
      /* 2. Action to perform on click */
      $('.comment-star').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('.comment-star');
        
        for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }
        
        for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass('selected');
        }
    });  
});





