(function($, window) {
    $('#owl-vitrine').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-video').owlCarousel({
        center: true,
        loop: true,
        autoplay: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive:{
            0:{
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

    $(document).ready(function() {
        $('.hamburger').on("click",function(){
            $('.hamburger').toggleClass('open-menu');
            $('.drawer').toggleClass('open-drawer');
            $('.wrapper').toggleClass('open-wrapper');
        })
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100)
        {
            $('.titulo-interno').addClass('fixo').fadeIn();
        }else{
            $('.titulo-interno').removeClass('fixo');
        }  
    });
})(jQuery, window);