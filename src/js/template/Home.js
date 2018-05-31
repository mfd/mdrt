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
  sliderGallery() {
    let $this = $('.owl-gallery');

    let isData = $('.owl-gallery[data-count]').length;
    let count  = isData ? $this.attr('data-count').split('|') : ['1', '3', '3'];

    var isGalleryLook = $this.hasClass('owl-gallery-look');

    $this.owlCarousel({
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

    if (isGalleryLook) {
      $this.find('.owl-stage >:first-child').addClass('activeLook');
      $this.find('.owl-stage .owl-item').on('click', function() {
        $(this).siblings().removeClass('activeLook');
        $(this).addClass('activeLook');
        var n = $(this).index();
        console.log(n);
        $this.trigger('to.owl.carousel', [n, 500, true]);// 500 is the speed of the transition in ms
        return false;
      });
    }
  }
  onEnterCompleted() {
    super.onEnterCompleted();
    TweenMax.set($('header'), {css:{top:-100}});
    //TweenMax.set($('aside.sidebar'), {css:{top:-100}});
    //if($('.partner').length) this.carousel = new Carousel();
    //if($('.owl-gallery').length) this.sliderGallery();
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
