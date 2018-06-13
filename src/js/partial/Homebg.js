//import 'fullpage.js/dist/jquery.fullPage.js';
//import 'IScroll';

export default class HomeBG {

  constructor(view) {

    this.view = view;

    if (!$('body').hasClass('mobile')) {
      this.initFullPage();
    }

    this.changeBg();
    $(window).on('scroll', this.changeBg);


  }
  initFullPage() {
    console.log('init fullpage');
    $(document).ready(function() {
      // $('#fullpage').fullpage({
      //   //sectionsColor: ['#eee', '#939FAA', '#ffffff'],
      //   scrollOverflow: true,
      //   navigation: true,
      //   //navigationTooltips: ['home', 'second']
      // });
    });
  }
  changeBg() {
    //console.log('start changeBg');
    let $st = $(window).scrollTop();
    let $bg1 = $('#fullpage .section').height() + 30;
    let $bg2 = ($('#fullpage .section').height() * 2) + 100;
    console.log('scroll', $st, $bg1);

    if ( $st >= 0 && $st < $bg1) {
      console.log('show1');
      $('body').addClass('body--smoke');
    } else {
      $('body').removeClass('body--smoke');
    }

    if ( $st > $bg1 && $st < $bg2) {
      console.log('show2', $bg2);
      $('body').addClass('body--gray');
    } else {
      $('body').removeClass('body--gray');
    }

  }
  destroy() {
    $(window).off('scroll', this.changeBg);
    $('body').removeClass('body--smoke');
    $('body').removeClass('body--gray');
    if ($('html').hasClass( 'fp-enabled' ) ) {
      $.fn.fullpage.destroy('all');
    }
    //this.windowResize = null;
  }
}
