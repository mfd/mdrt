export default class HomeBG {

  constructor(view) {

    this.view = view;

    this.changeBg();
    $(window).on('scroll', this.changeBg);
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
    //this.windowResize = null;
  }
}
