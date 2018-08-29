import FixBody from 'js-util/FixBody';

export default class Menubar {
  constructor(view) {
    this.view = view;
    this.menubarOpen = false;
    this.init();
  }
  init() {
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
  }
  open() {

  }
  close() {

  }


  toggle() {

  }

  destroy() {
  }
}
