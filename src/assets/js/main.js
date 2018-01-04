/* ==============================================
    Website Preloader
 =============================================== */

$(window).on("load",function() {
    'use strict';
    // Animate loader off screen
    $(".preloader").fadeOut( "slow" );

});

/* ==============================================
 Navigation Fixed on Scroll
 =============================================== */

$(window).scroll(function(){
    'use strict';
    var scroll = $(window).scrollTop();
    console.log("scroll");
    if (scroll >= 10)
    {
    	// console.log('scroll more of 10');
        $('.navbar').addClass('nav-fixed');
    }
    else {
        $('.navbar').removeClass('nav-fixed');
    }
});


;(function () {
    'use strict';

    var contentWayPoint = function() {
        var i=0;
        $('.animate-box').waypoint( function( direction ) {
            // console.log("Direction:",direction);
            // console.log($(this.element).attr("class"));
            if ('down' === direction && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout( function(){
                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function() {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        } , {offset: '90%'} );
    };


    /* ==============================================
     Mobile Menu
     =============================================== */

    var mobileMenu = function() {
        setTimeout( function(){
            $('.menu-icon').each(function(k){
                $(this).click(toggleMenu.bind(this));
            });
        }, 100);
    };

    var toggleMenu = function () {
        event.preventDefault();
        var menu = $('.menu');
        menu.toggleClass('menu--is-visible')
        $(this).toggleClass('menu-icon--close-x');
    }

    /* ==============================================
     Accordion
     =============================================== */

     var accordion = function() {
        var items = $('.accordion a');
        items.each(function(){
            $(this).click(toggleAccordion.bind(this));
        });
     }

     var toggleAccordion = function() {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
     }

    $(function(){
        mobileMenu();
        contentWayPoint();
        accordion();
    });
}());