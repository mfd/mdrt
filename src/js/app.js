import 'babel-polyfill';

//import $ from 'jquery';
//import jQuery from 'jquery';
//window.$ = $;
//window.jQuery = jQuery;

// import 'TweenMax';
// import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

//import 'TimelineLite';
import 'owl.carousel';

///import 'fullpage.js/dist/jquery.fullpage.extensions.min';
//import 'fullpage.js/dist/jquery.fullPage';
//import PerfectScrollbar from 'perfect-scrollbar';
import FixBody from 'js-util/FixBody';

import DeviceInfo from './tools/DeviceInfo';
import ResizeManager from './managers/ResizeManager';
import BarbaController from './barba/BarbaController';
import MouseManager from './managers/MouseManager';
import ScrollManager from './managers/ScrollManager';
import RafManager from './managers/RafManager';
// import Menu from './partial/Menu';

import Header from './partial/Header';
import Menu from './partial/Menu';
import owlCarousel from './partial/owlCarousel';
//Pages

import Home from './template/Home';
import Page from './template/Page';


class Main {

  constructor() {
    $(this.ready.bind(this));
  }

  ready() {
    window.container = document.getElementById('barba-wrapper');
    DeviceInfo.check();
    ResizeManager.start();
    BarbaController.start(true);

    MouseManager.start();
    ScrollManager.start();

    RafManager.start();


    // INIT VIEWS
    this.home = new Home();
    this.page = new Page();


    this.header = new Header();
    this.menu = new Menu();

    BarbaController.register(this.home);
    BarbaController.register(this.page);



    // $(document).on({
    //   mouseenter: function() {
    //     $(this).addClass('isOpenSubMenu');
    //     $(this).find('a').css('z-index','999');
    //   },
    //   mouseleave: function() {
    //     $(this).removeClass('isOpenSubMenu');
    //     $(this).find('a').css('z-index','0');
    //   }
    // }, '.sidebar .menu .subMenu, .sidebar .smenu .subMenu');


    //// //ПРИБРАТЬСЯ!!!

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
      $('body').toggleClass('is-hidden');
      $('body').toggleClass('is-nav');
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


    //// //ПРИБРАТЬСЯ!!!








    // Trigger first anim
    const container = document.querySelector('.barba-container');
    const first = BarbaController.pages[ container.getAttribute('data-namespace') ];
    const delay = 0.3;
    if(first) TweenMax.delayedCall( delay, () => {
      first.onEnter();
      first.onEnterCompleted();
      first.display( container );
    });

    setTimeout(function() {
      $('body').addClass('is-loaded');
    }, 600);




  }

}

new Main();
