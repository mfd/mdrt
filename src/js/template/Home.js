import BarbaPageBase from '../barba/BarbaPageBase';
import owlCarousel from '../partial/owlCarousel';
import HomeBG from '../partial/homebg';

//import changeBg from
class Home extends BarbaPageBase {

  constructor() {
    super('homepage');


    //$(window).scroll(() => { this.changeBg(); });
  }

  display(container) {
    console.log('Start Home');
    //this.changeBg();
  }
  onEnter() {
    super.onEnter();
  }
  onEnterCompleted() {
    super.onEnterCompleted();

    //TweenMax.set($('aside.sidebar'), {css:{top:-100}});
    //if($('.partner').length) this.carousel = new Carousel();
    //if($('.owl-gallery').length) this.sliderGallery();
    if($('.owl-gallery')) this.carousel = new owlCarousel(this.view);

    this.initHomePromo();
    this.scrollBG = new HomeBG();

    //debugger;


  }
  initHomePromo() {
    let $owl = $('.owl-oneslide');

    $owl.on('initialized.owl.carousel',function() {
      $('.owl-item.active').find('.slider__title')
        .addClass('animated flipInX');

      // let owlItemW = Math.round($('.page__hero').width());
      // let owlItemH = ($(window).width() < 768 ) ? 200 : Math.round($(window).height()/1.5);
      // console.log(owlItemW, owlItemH);
      // $owl.find('.hero__item').css('width',owlItemW);
      // $owl.find('.hero__item').css('height',owlItemH);
    });

    //$("body").find('.sidebar--index').css('left', '20%');

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
  hide(container, promise) {
    super.hide(container,promise);

    if(this.carousel) this.carousel.destroy();

    this.scrollBG.destroy();

    //$(window).off('scroll', this.changeBg);
    //this.controller.destroy();
    //     this.bannerHome.kill();
    //     this.quoteHome.kill();
    //     this.mainEpisode.kill();
    //     this.nextEpisode.kill();
    //     this.moreArticle.kill();
    //     this.partner.kill();
    //
    //this.controller = null;
    //     this.bannerHome = null;
    //     this.quoteHome = null;
    //     this.mainEpisode = null;
    //     this.nextEpisode = null;
    //     this.moreArticle = null;
    //     this.partner = null;
  }



}

export default Home;
