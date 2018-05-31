import Tools from '../tools/Tools';

/**
 *
 * BARBA
 * CONTROLLER
 *
 */

class BarbaController {

  static start( verbose = true ) {

    window.Barba = require('barba.js');

    // params
    BarbaController.verbose = verbose;
    BarbaController.pages = {};
    BarbaController.callbacks = {
      'before' : [],
      'after' : []
    };

    // Barba
    Barba.Pjax.getTransition = BarbaController.getTransition;
    Barba.Pjax.start();
  }

  static getTransition() {
    const t = Barba.BaseTransition.extend({

      start: function start() {
        Promise.all([
          this.newContainerLoading,
          this.transitionOut()
        ])
          .then(this.transitionIn.bind(this));
      },

      transitionOut: function transitionOut() {
        $('body').removeClass('has-nav-open');
        $('body').removeClass('has-category-open');
        $('body').removeClass('has-search-open');
        $('body').removeClass('has-nav-product-open');
        $('body').removeClass('has-dropdown-expand');
        $('.c-loading').addClass('is-active');
        console.log('transitionOut');

        let deferred = Barba.Utils.deferred();

        const shapeEnter = new TimelineLite({paused : true, onComplete:() => {deferred.resolve();}});
        shapeEnter.fromTo($('.shapeTransit1'), 0.7, {css:{bottom:'-100%'}}, {css:{bottom:'0%'}, ease:'Power1.easeInOut'},0);
        shapeEnter.fromTo($('.shapeTransit2'), 0.7, {css:{bottom:'-100%'}}, {css:{bottom:'0%'}, ease:'Power1.easeInOut'},0.3);
        shapeEnter.restart();

        return deferred.promise;



        //window.rellax.destroy();
        return $(this.oldContainer).addClass('is-changing-page').delay(1200).promise();

      },

      transitionIn: function transitionIn() {
        $('html,body').animate({ scrollTop: 0 }, 0);
        $('.c-nav_wrap').animate({scrollTop:0},0);

        var _this = this;
        //var $el = $(this.newContainer).addClass('is-loaded');
        //if (is.desktop() && $(window).width() > 1024 || is.ie() && $(window).width() > 1024) {} else {
        $('.c-loading').removeClass('is-active');
        var $el = $(this.newContainer).addClass('is-loaded');
        //};
        $('.js-accordion').removeClass('is-open').next().slideUp(300);
        $(this.oldContainer).hide();


        const shapeLeave = new TimelineLite({paused : true});
        shapeLeave.fromTo($('.shapeTransit2'), 0.7, {css:{bottom:'0'}}, {css:{bottom:'-100%'}, ease:'Power1.easeInOut'},0);
        shapeLeave.fromTo($('.shapeTransit1'), 0.7, {css:{bottom:'0%'}}, {css:{bottom:'-100%'}, ease:'Power1.easeInOut'},0.3);
        shapeLeave.restart();
        console.log('transitionIn');
        //try{SPR.registerCallbacks() && SPR.initRatingHandler() && SPR.initDomEls() && SPR.loadProducts() && SPR.loadBadges()}catch(e){}

        _this.done();
      }
    });
    return t;
  }

  /**
	 * Add Loader
	 * Loader object needs to get a display/hide methods
	 */
  static addLoader( loader ) {

    BarbaController.loader = loader;

  }

  /**
	 * Register
	 * Page must extends BarbaPageBase !
	 */
  static register( page ) {

    BarbaController.pages[page.id] = page;
  }

  /**
	 * Add CallBack
	 * Param must be function
	 */
  static addCallBack( callback, timing ) {

    if( timing !== 'before' && timing !== 'after' ) {
      console.error('BarbaController :: addCallBack :: Timing is invalid', timing);
      return;
    }

    BarbaController.callbacks[timing].push(callback);

  }

}

export default BarbaController;
