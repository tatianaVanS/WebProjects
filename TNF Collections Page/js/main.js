/*
Template Name: Explorer: Personal Portfolio Template
Author: Tdrana
Author URI: https://themeforest.net/user/tdrana
Version: 1.0
*/

/*
TABLE OF CONTENTS:
1.COLOR SCHEMES
2.PRELOADER
3.NAVIGATION
    - sticky menu
    - smooth scroll
    - scroll Spy
4.ANIMATION
    - type js
    - wow js
5.SCROLLREVEAL
    - counters
6.CAROUSEL
    - collections
7.PORTFOLIO
    - portfolio filter set
    - portfolio isotope
    - portfolio filtering
8.PARTICLES
*/


(function($){ 'use strict'
   

    /*  
    -------------------------------------------
    ----------| CAROUSEL |---------------------
    -------------------------------------------
    */
   
    //collections
    $("#owl-collection").owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 800,
      paginationSpeed: 800,
      smartSpeed: 500,
      autoplay: true,
      singleItem: true,
      loop: true,
      responsive:{
        0:{
          items:1
        },
        680:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
    

})(jQuery);

