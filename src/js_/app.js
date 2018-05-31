import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import common from './common';

//$(document).ready(common);



var loaded = false;
var maxLoad = 1200;

// On load
// ==========================================================================
$(window).load(function() {
  loaded = true;
  load();
});

// Maximum load
// ==========================================================================
setTimeout(function() {
  if(!loaded) {
    load();
  }
}, maxLoad);

// Load
// ==========================================================================
function load() {
  //$('body').addClass('is-loaded');

  // if (is.mac()) {
  //     $('html').addClass('is-mac');
  // };

  //$('.c-loading').removeClass('is-active');

  //$('body').addClass('dom-is-loaded');
  if ((is.desktop()) && ($(window).width() > 1024) || (is.ie()) && ($(window).width() > 1024)) {
  }else{
    $('body').addClass('dom-is-loaded');
  };
  if (is.windows()) {
    $('html').addClass('is-window');
  }
  setTimeout(function() {
    $('.barba-container').addClass('is-loaded');
  },600);
}

var PageTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.transitionOut()])
      .then(this.transitionIn.bind(this));
  },

  transitionOut: function() {
    $('body').removeClass('has-nav-open');
    $('body').removeClass('has-category-open');
    $('body').removeClass('has-search-open');
    $('.c-loading').addClass('is-active');

    //window.rellax.destroy();
    return $(this.oldContainer).addClass('is-changing-page').delay(1200).promise();
  },

  transitionIn: function() {
    $('html,body').animate({scrollTop:0},0);


    var _this = this;
    //var $el = $(this.newContainer).addClass('is-loaded');
    if ((is.desktop()) && ($(window).width() > 1024) || (is.ie()) && ($(window).width() > 1024)) {
    }else{
      $('.c-loading').removeClass('is-active');
      var $el = $(this.newContainer).addClass('is-loaded');
    };
    $('.js-accordion').removeClass('is-open').next().slideUp(300);
    $(this.oldContainer).hide();

    _this.done();
  }
});


Barba.Pjax.getTransition = function() {
  return PageTransition;
};

Barba.Dispatcher.on('transitionCompleted', function() {
  //initScript();
  common();
});

Barba.Pjax.start();
Barba.Prefetch.init();
