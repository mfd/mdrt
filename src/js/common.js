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


  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    $('.owl-gallery').trigger('destroy.owl.carousel');
    initSliderGallery();
  });


  function initOneItemGallery() {
    $('.oneitem__gallery-carousel .owl-carousel').owlCarousel({
      loop:true,
      items:1,
      margin:0,
      stagePadding: 0,
      autoplay:false
    });

    var dotcount = 1;

    $('.oneitem__gallery-carousel .owl-dot').each(function() {
      $( this ).addClass( 'dotnumber' + dotcount);
      $( this ).attr('data-info', dotcount);
      dotcount=dotcount+1;
    });
    var slidecount = 1;

    $('.owl-item').not('.cloned').each(function() {
      $(this).addClass( 'slidenumber' + slidecount);
      slidecount=slidecount+1;
    });

    $('.owl-dot').each(function() {
      var grab = $(this).data('info');
      var slidegrab = $('.slidenumber'+ grab +' img').attr('src');
      $(this).css('background-image', 'url('+slidegrab+')');
    });

    var amount = $('.owl-dot').length;
    var gotowidth = 100/amount;
    $('.owl-dot').css('height', gotowidth+'%');

    //$('.owl-dots').wrapInner( "<div class='scroll-wrap'></div>");
    //$('.owl-dots').find('.scroll-wrap').css({ height: $('.oneitem__gallery-carousel').height()});
    const owlDotScroll = new PerfectScrollbar('.oneitem__gallery-carousel .owl-dots',{
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 10,
      suppressScrollX: true,
      useBothWheelAxes: true
    });

  }

  function initSliderGallery() {
    let cc = $('.owl-gallery').attr('data-count');
    if (cc) {
      var count = $('.owl-gallery').attr('data-count').split('|');
    } else {
      var count = ['1', '3', '3'];
    }
    $('.owl-gallery').owlCarousel({
      loop: true,
      //margin: 10,
      stagePadding: 10,
      dots: false,
      responsiveClass:true,
      responsive:{
        0:{
          items:count[0],
          nav:true,
          //dots: true,
        },
        600:{
          items:count[1],
          nav:false
        },
        1000:{
          items:count[2],
          nav:true,
          loop:false
        }
      }
    });
  }

  function initHomePromo() {
    let $owl = $('.owl-oneslide');

    $owl.on('initialized.owl.carousel',function() {
      $('.owl-item.active').find('.slider__title')
        .addClass('animated flipInX');

      let owlItemW = Math.round($('.page__hero').width());
      let owlItemH = ($(window).width() < 768 ) ? 200 : Math.round($(window).height()/1.5);
      console.log(owlItemW, owlItemH);
      $owl.find('.hero__item').css('width',owlItemW);
      $owl.find('.hero__item').css('height',owlItemH);
    });


    $owl.owlCarousel({
      loop: false,
      responsiveClass:true,
      nav: false,
      navigation: false,
      dots: true,
      autoplay:true,
      items: 1,
      autoplayTimeout: 6000, //6s
    });

    // $('.custom-slick-next').click(function() {
    //   $owl.trigger('next.owl.carousel');
    // });
  }

  initHomePromo();
  initSliderGallery();
  if ($('.oneitem__gallery-carousel').length > 0) {
    initOneItemGallery();
  }

  window.addEventListener('resize', debounce(() => {
    $('.owl-carousel').trigger('destroy.owl.carousel');
    initHomePromo();
    initSliderGallery();
    if ($('.oneitem__gallery-carousel').length > 0) {
      initOneItemGallery();
    }

  }), 10000);


};
