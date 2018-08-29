//import PerfectScrollbar from 'perfect-scrollbar';
import FixBody from 'js-util/FixBody';


class Menu {

  constructor() {
    $('body').on('click', 'js-toggle-nav', this.menu.bind(this));
    //$('body').on('click', '.menu-item', this.itemNav.bind(this));
    //$('body').on('click', '.logoMenu', this.cancelActive.bind(this));
    this.nav = '.js-nav';
    this.body = $('body');
    //     if(window.location.href.indexOf('/visionner/') > -1) {
    //       this.cancelActive();
    //       $('.menu-item:nth-child(1)').addClass('current-menu-item');
    //     }
    //
    //     if(window.location.href.indexOf('/lire/') > -1 || window.location.href.indexOf('/blogue/') > -1) {
    //       this.cancelActive();
    //       $('.menu-item:nth-child(2)').addClass('current-menu-item');
    //     }
  }

  cancelActive() {
    $('.menu-item').removeClass('current-menu-item');
  }

  itemNav(e) {
    $('.menu-item').removeClass('current-menu-item');
    setTimeout(() => {
      $(e.currentTarget).addClass('current-menu-item');
    },700);
  }

  menu() {


    $btn.on('click', function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      BODY.toggleClass('is-hidden');
      BODY.toggleClass('is-nav');
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


    if($('.headerElement').hasClass('open'))
      $('.headerElement').removeClass('open');
    else $('.headerElement').addClass('open');

    $('.menu-top').toggleClass('menu-top-click');
    $('.menu-middle').toggleClass('menu-middle-click');
    $('.menu-bottom').toggleClass('menu-bottom-click');
  }

  hide() {
    	$('.headerElement').removeClass('open');
  }

}

export default Menu;
