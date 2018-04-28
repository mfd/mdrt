import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import debounce from 'js-util/debounce';
//const debounce = require('js-util/debounce');
import FixBody from 'js-util/FixBody';
const Sticky = require('sticky-js');
import 'owl.carousel';
import PerfectScrollbar from 'perfect-scrollbar';

export default () => {
  const BODY = $('body');
  const overlay = $('.js-overlay');
  const doc = $(document);
  const menu = $('.js-menu');
  //console.log(body[0]);

  //toggle mobile
  //import {scrollHidden, scrollVisible} from './hiddenShowScrollBar';



  // Sticky
  new Sticky('.sidebar', {marginTop: 90});



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
    //$('.sidebar_mobile').wrapInner( "<div class='sidebar--scroll-wrap'></div>");
    //$('.sidebar--scroll-wrap').css({ height: '100px'});
    const ps = new PerfectScrollbar('.sidebar_mobile');
    const fixBody = new FixBody();
    fixBody.set();
    //scrollHidden();
    if (!($(this).hasClass('is-active'))) {
      console.log('fixBody.cancel');
      fixBody.cancel();
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





  function initHomePromo() {
    let $owl = $('.slider__wrapslides');

    $owl.on('initialized.owl.carousel',function() {
      $('.owl-item.active').find('.slider__title')
        .addClass('animated flipInX');

      let owlItemW = Math.round($('.page__hero').width());
      let owlItemH = ($(window).width() < 768 ) ? 200 : Math.round($(window).height()/1.5);
      console.log(owlItemW, owlItemH);
      $owl.find('.slider__item').css('width',owlItemW);
      $owl.find('.slider__item').css('height',owlItemH);
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
    // $('.custom-slick-next').click(function() {
    //   $owl.trigger('next.owl.carousel');
    // });
  }

  initHomePromo();

  window.addEventListener('resize', debounce(() => {
    $('.owl-carousel').trigger('destroy.owl.carousel');
    initHomePromo();

  }), 10000);


};