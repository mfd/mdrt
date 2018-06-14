import ResizeManager from '../managers/ResizeManager';
import Tools from '../tools/Tools';
import Banner from '../partial/Banner';
import Tabs from '../partial/Tabs';
import Share from '../partial/Share';
import VideoApi from '../partial/VideoApi';
import Popup from '../partial/Popup';
import Header from '../partial/Header';
import owlCarousel from '../partial/owlCarousel';

/**
 * BARBA
 * PAGE
 * BASE
 */

class BarbaPageBase {

  constructor( id ) {

    // page id
    this.id = id;

    // bindings
    // this.onEnter 			= ::this.onEnter;
    // this.onEnterCompleted 	= ::this.onEnterCompleted;
    // this.onLeave 			= ::this.onLeave;
    // this.onLeaveCompleted 	= ::this.onLeaveCompleted;
    // this.resize 			= ::this.resize;
    this.onEnter = this.onEnter.bind(this);
    this.onEnterCompleted = this.onEnterCompleted.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onLeaveCompleted = this.onLeaveCompleted.bind(this);
    this.resize = this.resize.bind(this);

    this.barbaView = Barba.BaseView.extend({
      namespace: this.id,
      onEnter: this.onEnter,
      onEnterCompleted: this.onEnterCompleted,
      onLeave: this.onLeave,
      onLeaveCompleted: this.onLeaveCompleted
    });

    this.barbaView.init();
  }

  /**
	 * The new Container is readyand attached to the DOM.
	 */
  onEnter() {
    console.info('Enter :: ', this.id);

    ResizeManager.bind( this.id, this.resize );

    // get the view
    for(let container of Tools.arrayify( document.querySelectorAll('.barba-container') ) ) {

      if( container.getAttribute('data-namespace') === this.id ) {

        this.view = container;
        document.title = this.view.getAttribute('data-title');
      }
    }

    // Custom code should be added after super.
  }

  /**
	 * The Transition has just finished.
	 */
  onEnterCompleted() {
    console.log('enterCompleted',this.id);
    // Custom code should be added before super.

    //Init Partial Modules
    //if($('.bannerHead').length) this.banner = new Banner();
    if($('.shareFacebook').length) this.share = new Share();
    if($('.tabs').length) this.tabs = new Tabs(this.view);

    //if($('.partner').length) this.carousel = new Carousel();
    //if($('.startPlayer').length) this.videoApi = new VideoApi();
    //if($('.playerPopup').length) this.popup = new Popup(this.view);

    //if($('header').length) this.header = new Header();
    if($('.owl-gallery')) this.carousel = new owlCarousel();

    this.resize();

    //$('html title').html($('.barba-container').attr('data-title')+'Pastel Fluo');

    if($('body .wysiwyg iframe').length) $('body .wysiwyg iframe').height(($('body .wysiwyg iframe').width()*9)/16);
  }

  /**
	 * A new Transition toward a new page has just started.
	 */
  onLeave() {
    console.log('leave',this.id);
    ResizeManager.unbind( this.id );

    //Destroy Partial Modules
    //if(this.header) this.header.destroy();
    if(this.carousel) this.carousel.destroy();
    if(this.tabs) this.tabs.destroy();
    // if(this.videoApi) this.videoApi.destroy();
    // if(this.popup) this.popup.destroy();
    //if(this.header) this.header.destroy();
    //if(this.carousel) this.carousel.destroy();
  }

  /**
	 * The Container has just been removed from the DOM.
	 */
  onLeaveCompleted() {
    console.log('leaveCompleted',this.id);

  }


  /**
	 * Display
	 */
  display( container ) {
    console.log('display',this.id);
    // Default animation needs to be overriden !

  		TweenMax.to(container, 0.7, {css:{autoAlpha:1}, ease:'Cubic.easeOut'});
  }

  /**
	 * Hide
	 */
  hide( container, promise ) {
    console.log('hide',this.id);
    if(!promise) console.warn('BarbaPageBase ::', this.id,':: Hide :: Promise is missing !');

    // Default animation needs to be overriden !
    // Do not forget the Promise !

    TweenMax.to(container, 0.7, {css:{autoAlpha:0}, ease:'Cubic.easeOut'});
    	TweenMax.delayedCall( 0.5, promise);

  }

  /**
	 * Resize
	 */
  resize() {
    if($('body .wysiwyg iframe').length) $('body .wysiwyg iframe').height(($('body .wysiwyg iframe').width()*9)/16);
    console.log('resize',this.id);
  }
}

export default BarbaPageBase;
