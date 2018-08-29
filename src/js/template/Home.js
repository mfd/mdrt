import owlCarousel from '../partial/owlCarousel';
import HomeBG from '../partial/homebg';

//import changeBg from
class Home {

  constructor() {
    this.onEnter();
    this.onEnterCompleted();

    //$(window).scroll(() => { this.changeBg(); });
  }

  display(container) {
    console.log('Start Home');
    //this.changeBg();
  }
  onEnter() {
  }
  onEnterCompleted() {

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
      autoplay: false,
      items: 1,
      autoplayTimeout: 6000, //6s
    });

    // $('.custom-slick-next').click(function() {
    //   $owl.trigger('next.owl.carousel');
    // });
  }



}

export default Home;
