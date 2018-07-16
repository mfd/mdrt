import ResizeManager from '../managers/ResizeManager';
import Tools from '../tools/Tools';

import Tabs from '../partial/Tabs';
import FakeSelect from '../partial/fakeSelect';
import Basket from '../partial/Basket';

import Dropdown from '../partial/Dropdown';

import Popup from '../partial/Popup';
//import Header from '../partial/Header';
import owlCarousel from '../partial/owlCarousel';

import BasketIncr from '../partial/BasketIncrement';
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
        //$('header .breadcrumbs').html($(this.view).find('.breadcrumbs__mobile ul').html());
      }
    }
    // Custom code should be added after super.

    (function($) {
      // добавление товара в корзину
      let addToCartButton = '.add_to_cart';
      let $addToCartButton = $(addToCartButton);
      $addToCartButton.click(function(e) {
        let url = $(this).attr('href');
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'html',
          success: function() {
            BX.onCustomEvent('OnBasketChange');
            alert('Добавлено');
          },
          error: function() {
            alert('Не добавлено');
          }
        });
        e.preventDefault();
      });
    })(jQuery);
    (function($) {
    //регистрация
      let regStepOne = '#reg-step-1';
      let regStepTwo = '#reg-step-2';
      let $regStepOne = $(regStepOne);
      let $regStepTwo = $(regStepTwo);
      $regStepOne.submit(function(e) {
        $.ajax({
          data: $regStepOne.serialize(),
          url : 'http://' + location.host + '/local/templates/madyart/includes/registration.php',
          type: 'POST',
          success: function(result) {
            let response = JSON.parse(result);
            if (response['REGISTER_MESSAGE']['TYPE'] === 'ERROR') {
              $('.error').html(response['REGISTER_MESSAGE']['MESSAGE']);
            } else {
              $regStepOne.fadeOut('fast');
              $regStepTwo.fadeIn('fast').submit(function() {
                $.ajax({
                  data: $regStepTwo.serialize(),
                  url: 'http://' + location.host + '/local/templates/madyart/includes/registration.php',
                  type: 'POST',
                  success: function() {
                    document.location = 'http://' + location.host + '/personal/';
                  },
                  error: function() {
                    return false;
                  }
                });              
              });          
            }
          },
          error: function() {
            console.log('Нет регистрации. Проверить AJAX URL');
          }
        });
        e.preventDefault();
      });    
    })(jQuery);

    (function($) {
      //обзор луков
      $('.get_look').click(function(e) {
        let item_id = $(this).attr('data-look');
        $.ajax({
          type: 'POST',
          url: 'http://' + location.host + '/local/templates/madyart/includes/get_look.php',
          data: {
            'arItemID': item_id
          },
          success: function(result) {
            let response = JSON.parse(result);
            
            $('.js-look__title').text(response['NAME']);
            $('.js-look__image').html(response['IMAGE']);
            
            $('.look__parts').empty();
            let itemsWearArray = response['ITEM_WEAR'];
            for (var i = itemsWearArray.length - 1; i >= 0; i--) {
              let elem = '<li class="look__parts-element"><div class="look__parts-element-pic">';
              elem += '<figure class="img-block js-item__image">' + itemsWearArray[i]['IMAGE'] + '</figure>';
              elem += '<div class="look__parts-element-title js-item__title">' + itemsWearArray[i]['NAME'];
              elem += '<p class="price js-item__price">' + itemsWearArray[i]['PRICE'] + '</p>';
              elem += '</li>';
              console.log(elem);
              $('.look__parts').append(elem);
            }
          },
          error: function(result) {
            console.log(result);
          }
        });
        e.preventDefault();
      });
    })(jQuery);


  }

  /**
	 * The Transition has just finished.
	 */
  onEnterCompleted() {
    console.log('enterCompleted',this.id);
    // Custom code should be added before super.

    //Init Partial Modules
    if($('.add_to_cart').length) this.basket = new Basket();
    if($('.tabs').length) this.tabs = new Tabs(this.view);

    // FAKE SELECT
    if($('[data-fake-select]').length) {
      const fakeselect = this.view.querySelectorAll('[data-fake-select]');
      this.fakeselect = [];
      for (let i = 0; i < fakeselect.length; i++) {
        let $el = fakeselect[i];
        this.fakeselect[i] = new FakeSelect('FakeSelect-' + i, $el);
      }
      // this.fakeselect = new fakeSelect(
      //   this.view.querySelector('[data-fake-select]'),
      //   //this.mobileSelectChange.bind(this),
      // ).init();
    }

    // DROPDOWN
    if ($('.js-dropdown').length) {
      const dropdowns = this.view.querySelectorAll('.js-dropdown');
      this.dropdowns = [];
      for (let i = 0; i < dropdowns.length; i++) {
        let $el = dropdowns[i];
        this.dropdowns[i] = new Dropdown('dropdown-' + i, $el);
      }
    }

    // OWLGALLERY
    if($('.owl-gallery')) this.carousel = new owlCarousel();



    if ($('[data-module="incrementer"]').length) {
      const basketincr = this.view.querySelectorAll('[data-module="incrementer"]');
      this.basketincr = [];
      for (let i = 0; i < basketincr.length; i++) {
        let $el = basketincr[i];
        this.basketincr[i] = new BasketIncr('BasketIncr-' + i, $el);
      }
    }


    this.resize();

    $('header .breadcrumbs').html($(this.view).find('.breadcrumbs__mobile ul').html());
    //$('html title').html($('.barba-container').attr('data-title')+'');
    if($('body .wysiwyg iframe').length) $('body .wysiwyg iframe').height(($('body .wysiwyg iframe').width()*9)/16);
  }

  /**
	 * A new Transition toward a new page has just started.
	 */
  onLeave() {
    console.log('leave',this.id);
    ResizeManager.unbind( this.id );


    $('body').removeClass('isLoginform');
    $('body').removeClass('isLocationSwitch');

    //Destroy Partial Modules
    //if(this.header) this.header.destroy();
    //debugger;
    if(this.carousel) this.carousel.destroy();
    if(this.tabs) this.tabs.destroy();
    if(this.basket) this.basket.destroy();


    //fakeselect
    if (this.fakeselect) {
      for ( let i = 0; i < this.fakeselect.length; i++ ) {
        this.fakeselect[i].destroy();
      }
      this.fakeselect = null;
    }
    //Dropdowns
    if (this.dropdowns) {
      for ( let i = 0; i < this.dropdowns.length; i++ ) {
        this.dropdowns[i].destroy();
      }
      this.dropdowns = null;
    }

    // if(this.popup) this.popup.destroy();
    // if(this.header) this.header.destroy();
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

  mobileSelectChange(option) {
    // location.href = option.value;
    Barba.Pjax.goTo(option.value);
  }

}

export default BarbaPageBase;
