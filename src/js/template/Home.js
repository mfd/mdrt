import BarbaPageBase from '../barba/BarbaPageBase';

class Home extends BarbaPageBase {

  constructor() {
    super('homepage');

    //Forgive me for this shitty hack
    $(window).scroll(() => {
      if($(window).scrollTop()>$('body').height()/2 && $('body').hasClass('mobile')) $('.bannerHead').css('visibility','hidden');
      else $('.bannerHead').css('visibility','visible');
      //console.log('scroll');
    });
  }

  display(container) {

    //document.getElementById('playerHome').play();

    	//---Scroll Anim --///
    //this.controller = new ScrollMagic.Controller();
    this.headernav = new TimelineLite();

    const headernav = new TimelineLite({paused : true});

    headernav.fromTo($('header'), 0.1, {css:{top:-100}}, {css:{top:0}, ease:'Power1.easeOut'},1);
    //headernav.fromTo($('aside.sidebar'),0.4, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},1);
    //bannerHome.restart();
    headernav.staggerFrom($('.menu__item'), 0.6, {x:-40, opacity:0, ease:Power3.easeOut}, 0.15, 0.2);
    headernav.fromTo($('main'),2, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, ease:'Power1.easeOut'},2);

    headernav.totalDuration(2).restart();



  }
  initFullPage() {
    $('#fullpage').fullpage({
      //anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
      //sectionsColor: ['#eee', '#939FAA', '#ffffff'],
      scrollOverflow: true,
      navigation: true,
      //navigationTooltips: ['home', 'second']
    });
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
  onEnterCompleted() {
    super.onEnterCompleted();
    TweenMax.set($('header'), {css:{top:-100}});
    //TweenMax.set($('aside.sidebar'), {css:{top:-100}});
    //if($('.partner').length) this.carousel = new Carousel();
    //if($('.owl-gallery').length) this.sliderGallery();


    //this.initFullPage();
    this.initHomePromo();
  }

  hide(container, promise) {
    super.hide(container,promise);


    //     this.controller.destroy();
    //     this.bannerHome.kill();
    //     this.quoteHome.kill();
    //     this.mainEpisode.kill();
    //     this.nextEpisode.kill();
    //     this.moreArticle.kill();
    //     this.partner.kill();
    //
    //     this.controller = null;
    //     this.bannerHome = null;
    //     this.quoteHome = null;
    //     this.mainEpisode = null;
    //     this.nextEpisode = null;
    //     this.moreArticle = null;
    //     this.partner = null;
  }

}

export default Home;
