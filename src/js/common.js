import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import 'owl.carousel';


export default () => {
  const BODY = $('body');
  const overlay = $('.js-overlay');
  const doc = $(document);
  const menu = $('.js-menu');
  //console.log(body[0]);

  //toggle mobile
  //import {scrollHidden, scrollVisible} from './hiddenShowScrollBar';

  const btn = '.js-toggle-nav';
  const $btn = $(btn);
  const nav = '.js-nav';
  const $nav = $(nav);

  const hideNav = () => {
    if($nav.hasClass('is-active')) {
      $btn.removeClass('is-active');
      $nav.removeClass('is-active');
      BODY.removeClass('is-hidden');
      BODY.removeClass('is-nav');

    }
  };

  $btn.on('click', function() {
    $(this).toggleClass('is-active');
    $nav.toggleClass('is-active');
    BODY.toggleClass('is-hidden');
    BODY.toggleClass('is-nav');
    //scrollHidden();
    if (!($(this).hasClass('is-active'))) {
      //scrollVisible();
    }
  });

  $nav.on('click', function(e) {
    if($(e.target).hasClass(nav.replace(/\./g,''))) hideNav();
  });

  $('.sidebar .menu .subMenu').each(function( index ) {
    // console.log((index*10)+10);
    // $(this).find('a').css('z-index','999');
  });
  $(document).on({
    mouseenter: function() {
      $(this).addClass('isOpenMenu');
      $(this).find('a').css('z-index','999');
    },
    mouseleave: function() {
      $(this).removeClass('isOpenMenu');
      $(this).find('a').css('z-index','0');
    }
  }, '.sidebar .menu .subMenu, .sidebar .smenu .subMenu');

  //   $('.sidebar .menu .subMenu > a, .sidebar .smenu .subMenu > a').each(function( index ) {
  //     $(this).on('click', function(e) {
  //       //$('.menu').find('.subMenu').removeClass('isOpenMenu');
  //       //$('.menu').find('.subMenu a').css('z-index','0');
  //
  //       let ifOpen = $(this).parent().hasClass('isOpenMenu');
  //       console.log(ifOpen);
  //       if (ifOpen) {
  //         $(this).parent().removeClass('isOpenMenu');
  //         $(this).css('z-index','0');
  //       } else {
  //         $(this).parent().addClass('isOpenMenu');
  //         $(this).css('z-index','999');
  //
  //       }
  //       //$(this).parent().toggleClass('isOpenMenu');
  //       e.preventDefault();
  //     });
  //   });


  function initHomePromo() {
    let $owl = $('.slider__wrapslides');

    $owl.on('initialized.owl.carousel',function() {
      $('.owl-item.active').find('.slider__title')
        .addClass('animated flipInX');

      let owlItem = $('.page__hero').width();
      console.log(owlItem);
      $owl.find('.slider__item').css('width',owlItem);
    });


    $owl.owlCarousel({
      loop: true,
      responsiveClass:true,
      nav: true,
      navigation: true,
      dots: true,
      autoplay:true,
      items: 1,
      autoplayTimeout: 6000, //6s
      // responsive:{
      //   0:{
      //     items:1,
      //     margin: 10,
      //     dots: true,
      //   },
      //   668:{
      //     margin: 0,
      //     items:1,
      //     dots: true
      //   },
      //   1480:{
      //     items:1,
      //     autoWidth: true,
      //     dots: true,
      //     margin: 40
      //   }
      // }
    });

    $('.custom-slick-next').click(function() {
      $owl.trigger('next.owl.carousel');
    });
  }

  initHomePromo();
  $(window).on('resize', function() {
    $.debounce(initHomePromo, 300);

  });



};
